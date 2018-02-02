const { createElement } = require('react');
const { render } = require('react-dom');
const app = document.createElement('div');

const { rule } = require('../../dist/cnjs');

module.exports['simple-button-static'] = () => {
  const fn = rule({
    fontFamily: 'inherit',
    fontSize: 'inherit',
    display: 'inline-block',
    margin: 0,
    padding: 16,
    border: 0,
    borderRadius: 4,
    color: 'white',
    backgroundColor: props => props.color,
    appearance: 'none',
    ':hover': {
      backgroundColor: 'black'
    }
  });

  const Button = props => {
    return createElement('button', {
      ...props,
      className: fn(props)
    });
  };

  const button = render(
    createElement(Button, { color: 'tomato' }, 'Hello'),
    app
  );
}
