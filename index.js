/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.reactQs=t(require("react")):e.reactQs=t(e.react)}(self,(function(e){return(()=>{"use strict";var t={679:(e,t,r)=>{var o=r(864),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function u(e){return o.isMemo(e)?f:a[e.$$typeof]||n}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=f;var i=Object.defineProperty,p=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var n=y(r);n&&n!==m&&e(t,n,o)}var f=p(r);s&&(f=f.concat(s(r)));for(var a=u(t),d=u(r),b=0;b<f.length;++b){var v=f[b];if(!(c[v]||o&&o[v]||d&&d[v]||a&&a[v])){var S=l(r,v);try{i(t,v,S)}catch(e){}}}}return t}},921:(e,t)=>{var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,f=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,i=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,s=r?Symbol.for("react.concurrent_mode"):60111,l=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,S=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,$=r?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case s:case c:case a:case f:case y:return e;default:switch(e=e&&e.$$typeof){case i:case l:case b:case d:case u:return e;default:return t}}case n:return t}}}function P(e){return O(e)===s}t.AsyncMode=p,t.ConcurrentMode=s,t.ContextConsumer=i,t.ContextProvider=u,t.Element=o,t.ForwardRef=l,t.Fragment=c,t.Lazy=b,t.Memo=d,t.Portal=n,t.Profiler=a,t.StrictMode=f,t.Suspense=y,t.isAsyncMode=function(e){return P(e)||O(e)===p},t.isConcurrentMode=P,t.isContextConsumer=function(e){return O(e)===i},t.isContextProvider=function(e){return O(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return O(e)===l},t.isFragment=function(e){return O(e)===c},t.isLazy=function(e){return O(e)===b},t.isMemo=function(e){return O(e)===d},t.isPortal=function(e){return O(e)===n},t.isProfiler=function(e){return O(e)===a},t.isStrictMode=function(e){return O(e)===f},t.isSuspense=function(e){return O(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===s||e===a||e===f||e===y||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===d||e.$$typeof===u||e.$$typeof===i||e.$$typeof===l||e.$$typeof===S||e.$$typeof===g||e.$$typeof===$||e.$$typeof===v)},t.typeOf=O},864:(e,t,r)=>{e.exports=r(921)},937:t=>{t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{qsConnect:()=>p,qsSelector:()=>l});var e=o(937),t=o.n(e),r=o(679),c=o.n(r),f=["qsName"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var u,i=(u={},{getItem:function(e){return u[e]},addItem:function(e,t){u[e]&&console.warn("react-qs，组件qsName重复：",e),u[e]=t},removeItem:function(e){Reflect.deleteProperty(u,e)}});function p(r){return function(o){var n=function(n,c){var u=n.qsName,p=void 0===u?"default":u,s=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(n,f),l=(0,e.useRef)();return(0,e.useLayoutEffect)((function(){var e=(null==r?void 0:r(l.current))||l.current;return i.addItem(p,e),function(){return i.removeItem(p)}}),[p]),t().createElement(o,a({},s,{ref:function(e){"function"==typeof c&&c(e),l.current=e}}))};return n.displayName="qsConnect(".concat(o.displayName||o.name,")"),n.WrappedComponent=o,c()(n,o),t().forwardRef(n)}}function s(e){return new Proxy({},{get:function(t,r){return function(){var t=i.getItem(e);if(t&&"function"==typeof t[r]){for(var o,n=arguments.length,c=new Array(n),f=0;f<n;f++)c[f]=arguments[f];return(o=t[r]).call.apply(o,[t].concat(c))}if(t)return t[r]}}})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return s(e)}})(),n})()}));