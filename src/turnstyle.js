import { collectDefs } from './collect-defs';
import { rehydrate } from './rehydration';

let rules = [];
let cache = {};

let addRule = rule => rules.push(rule);
const newClassName = () => 'cls_' + rules.length.toString(36);

const callMeMaybe = (f, arg) => (typeof f === 'function' ? f(arg) : f);
const formatValues = (vals, props) =>
  vals.map(val => callMeMaybe(val, props)).join('');

const rule = obj => {
  if (!obj) {
    return '';
  }

  const { defs, st, ck } = collectDefs(obj, {}, '');

  if (cache[ck]) {
    return cache[ck];
  }

  if (st) {
    const cn = (cache[ck] = newClassName());

    for (let key in defs) {
      const values = defs[key].join('');

      if (key.indexOf('@') > -1) {
        addRule(`${key}{.${cn}{${values}}}`);
      } else {
        addRule(`.${cn}${key}{${values}}`);
      }
    }

    return cn;
  }

  const ruleGenerators = [];
  for (let key in defs) {
    if (key.indexOf('@') > -1) {
      ruleGenerators.push(
        (cn, props) => `${key}{.${cn}{${formatValues(defs[key], props)}}}`
      );
      continue;
    }

    ruleGenerators.push(
      (cn, props) => `.${cn}${key}{${formatValues(defs[key], props)}}`
    );
  }

  return props => {
    const dynamicCacheKey = ck + JSON.stringify(props);

    if (cache[dynamicCacheKey]) {
      return cache[dynamicCacheKey];
    }

    const cn = (cache[dynamicCacheKey] = newClassName());

    for (let i in ruleGenerators) {
      addRule(ruleGenerators[i](cn, props));
    }

    return cn;
  };
};

const global = (selector, obj) => {
  if (!obj) {
    return '';
  }

  const { defs } = collectDefs(obj, {}, '');

  for (let key in defs) {
    const values = defs[key].join('');

    if (key.indexOf('@') > -1) {
      addRule(`${key}{${selector}{${values}}}`);
    } else {
      addRule(`${selector}${key}{${values}}`);
    }
  }
};

const css = () => rules.sort().join('\n');

const reset = () => {
  rules = [];
  cache = {};
};

if (typeof document !== 'undefined') {
  const { sheet } = document.head.appendChild(document.createElement('style'));
  addRule = rule => {
    rules.push(rule);
    sheet.insertRule(rule, sheet.cssRules.length);
  };
}

export { rule, global, rehydrate, css, reset };
