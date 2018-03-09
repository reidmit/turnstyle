!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(e.turnstyle={})}(this,function(e){"use strict";var r="-webkit-",n="-moz-",t="-ms-",i={"flex-start":"start","flex-end":"end","space-between":"justify","space-around":"distribute"},o={"horizontal-tb":"lr-tb","vertical-lr":"tb-lr","vertical-rl":"tb-rl"},a={"max-height":1,"max-width":1,width:1,height:1,"min-width":1,"min-height":1},f={"min-content":1,"max-content":1,"fill-available":1,"fit-content":1,"contain-floats":1},l=function(e,n){return[[r+e,n],[e,n]]},s=function(e,n){return[[e,r+n],[e,n]]},u=function(e,i){return[[r+e,i],[n+e,i],[t+e,i],[e,i]]},c=function(e,n){return[[r+e,n],[t+e,n],[e,n]]},p=function(e,n){return[[r+e.replace("border","box-image"),n],[e,n]]},d=function(e,n){var i="inline-flex"===n?"inline-":"";return[[e,r+i+"box"],[e,t+i+"flexbox"],[e,n]]},b={"align-content":function(e,r){return[[t+"flex-line-pack",i[r]||r],[e,r]]},"align-items":function(e,n){return[[r+"box-align",i[n]||n],[t+"flex-align",i[n]||n],[e,n]]},"align-self":function(e,r){return[[t+"flex-item-align",i[r]||r],"flex-start"!==r&&"flex-end"!==r&&"baseline"!==r&&[t+"grid-row-align",i[r]||r],[e,r]].filter(function(e){return e})},appearance:function(e,t){return[[r+e,t],[n+e,t],[e,t]]},cursor:{"zoom-in":s,"zoom-out":s,grab:s,grabbing:s},display:{flex:d,"inline-flex":d},flex:function(e,n){var i=(""+n).split(" "),o="none"===i[0]?0:"auto"===i[0]?1:i[0],a=3===i.length&&"0"===i[2]?n+"px":n;return[[r+"box-"+e,o],[t+e,a],[e,n]]},"flex-basis":function(e,r){return[[t+"flex-preferred-size",r],[e,r]]},"flex-direction":function(e,n){return[[r+"box-orient",n.indexOf("row")>-1?"horizontal":"vertical"],[r+"box-direction",n.indexOf("reverse")>-1?"reverse":"normal"],[t+e,n],[e,n]]},"flex-flow":function(e,n){var i=(n+"").split(" ")[0]||"";return[[r+"box-orient",i.indexOf("row")>-1?"horizontal":"vertical"],[r+"box-direction",i.indexOf("reverse")>-1?"reverse":"normal"],[t+e,n],[e,n]]},"flex-grow":function(e,n){return[[r+"box-flex",n],[t+"flex-positive",n],[e,n]]},"flex-shrink":function(e,r){return[[t+"flex-negative",r],[e,r]]},"justify-content":function(e,n){return["space-around"!==n&&[r+"box-pack",i[n]||n],[t+"flex-pack",i[n]||n],[e,n]].filter(function(e){return e})},"tab-size":function(e,r){return[[n+e,r],[e,r]]},hyphens:c,"flex-wrap":function(e,r){return[[t+e,r],[e,r]]},"flow-into":c,"flow-from":c,"box-decoration-break":l,"break-before":c,"break-after":c,"break-inside":c,"clip-path":l,"region-fragment":c,"scroll-snap-type":c,"scroll-snap-coordinate":c,"scroll-snap-destination":c,"scroll-snap-points-x":c,"scroll-snap-points-y":c,"font-feature-settings":l,"mask-border-source":p,"mask-border-mode":p,"mask-border-slice":p,"mask-border-width":p,"mask-border-outset":p,"mask-border-repeat":p,"mask-border":p,order:function(e,n){var i=/[0-9]/.test(n)?(+n||0)+1:n;return[[r+"box-ordinal-group",i],[t+"flex-order",n],[e,n]]},"backface-visibility":l,perspective:l,"perspective-origin":l,position:{sticky:s},"text-orientation":l,"backdrop-filter":l,"font-kerning":l,filter:l,"shape-image-threshold":l,"shape-margin":l,"shape-outside":l,"text-size-adjust":u,"user-select":u,"writing-mode":function(e,n){return[[r+e,n],[t+e,o[n]||n],[e,n]]},"&:fullscreen":function(e,r){return[["&:-webkit-full-screen",r],["&:-moz-full-screen",r],["&:-ms-fullscreen",r],[e,r]]},"&::placeholder":function(e,r){return[["&::-webkit-input-placeholder",r],["&:-ms-input-placeholder",r],["&::-ms-input-placeholder",r],[e,r]]}},h=Object.prototype.hasOwnProperty.bind(b),x={},g=function(e,t){var i=e+t;if(x[i])return x[i];var o=void 0;if(h(e))"function"==typeof b[e]?o=b[e](e,t):"object"==typeof b[e]&&"function"==typeof b[e][t]&&(o=b[e][t](e,t));else if(/^(transform|animation|column|text-emphasis|text-decoration-|mask|wrap-)/.test(e))o=l(e,t);else if(/^cross-fade/.test(t)){var s=(t.match(/\(([\d]+%)/)||[])[1]||"",u=t.replace("cross-fade","-webkit-cross-fade");s?u=u.replace(s+" ",""):s="0.5";var c=u.lastIndexOf(")");c>-1&&(u=u.substring(0,c)+", "+s+")"),o=[[e,u],[e,t]]}else(""+t).indexOf("image-set")>-1?o=[[e,t.replace("image-set",r+"image-set")],[e,t]]:a[e]&&f[t]&&(o=[[e,r+t],[e,n+t],[e,t]]);return o=x[i]=o||[[e,t]]},m=function(e){for(var r="",n=0;n<e.length;n++)"{"===e[n]&&(r+="}");return r},v={},k=function(e,r,n){var t=e+"|"+r+"|"+n,i=v[t];if(i)return i;var o=n.indexOf("&")>-1,a="@"===n[0],f=void 0;return f=o?r||a?r+n.replace(/^&/,"").replace(/&/g,e):n.replace(/&/g,e):a?r?"@"===r[0]?r.substr(0,r.length-e.length-1)+"{"+n+"{"+e:n+"{"+r:n+"{"+e:r?r+" "+n:e+" "+n,v[t]=f,f},y=function(e,r){for(var n=[],t={"":[]},i=[""],o=[],a=void 0,f=void 0,l="",s=0,u=0,c=0,p=0,d="",b=0,h=-1,x=0,v=r.length;x<v;x++)if(f=a,a=r[x],!(s&&"\n"!==a||u&&"/"!==a))if(c&&"'"!==a||p&&'"'!==a)d+=a;else switch(a){case"/":if(u){"*"===f&&(u=0);break}var y=r[x+1];"/"===y?s=1:"*"===y&&(u=1);break;case"\n":s=0;break;case";":if(h<0)n.push(d.trim()+";");else for(var w=d.substring(0,h).trim(),j=d.substring(h+1).trim(),z=g(w,j),O=0;O<z.length;O++)t[l].push(z[O][0]+":"+z[O][1]+";");d="",b=0,h=-1;break;case"{":o.push(l),t[l=b?d.split(",").map(function(r){return k(e,l,r.trim())}).join(","):k(e,l,d.trim())]||(t[l]=[],i.push(l)),d="",b=0,h=-1;break;case"}":l=o.pop();break;case",":b=1,d+=a;break;case":":h<0&&(h=d.length),d+=a;break;case"'":c=+!c,d+=a;break;case'"':p=+!p,d+=a;break;case" ":if(" "===f)break;default:d+=a}for(var A=0;A<i.length;A++){var _=i[A],C=t[_];if(C.length>0){var P=_?m(_):"";n.push((_||e)+"{"+C.join("")+"}"+P)}}return n},w=[],j=function(e){return w.push(e)};if("undefined"!=typeof document){var z=document.head.appendChild(document.createElement("style")).sheet;j=function(e){w.push(e),z.insertRule(e,z.cssRules.length)}}var O={},A={},_=function(){return""},C=function(e,r,n){var t=function(t,i){for(var o="",a=0;a<e.length;a++)o+=e[a],a<r.length&&("function"==typeof r[a]?o+=r[a](t,i):o+=r[a]);if(!o)return"";if(n){for(var f=y("",o),l=0;l<f.length;l++)j(f[l]);return""}var s=O[o];if(s)return s;var u=function(e){for(var r=5381,n=e.length;n;)r=33*r^e.charCodeAt(--n);return"_"+(r>>>0).toString(36)}(o);if(O[o]=u,!A[u])for(var c=y("."+u,o),p=0;p<c.length;p++)j(c[p]);return u};if(r.length&&r.some(function(e){return"function"==typeof e}))return t;var i=t();return function(){return i}};e.rule=function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];return e?C(e,n):_},e.global=function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];return e?C(e,n,!0):_},e.reset=function(){w=[],O={}},e.css=function(){return w.join("")},Object.defineProperty(e,"__esModule",{value:!0})});
