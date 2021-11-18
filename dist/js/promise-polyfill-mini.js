!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";function e(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}function t(e){return new this(function(t,n){if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var f=n.then;if("function"==typeof f)return void f.call(n,function(t){i(e,t)},function(n){o[e]={status:"rejected",reason:n},0==--r&&t(o)})}o[e]={status:"fulfilled",value:n},0==--r&&t(o)}for(var f=0;f<o.length;f++)i(f,o[f])})}var n=setTimeout,o="undefined"!=typeof setImmediate?setImmediate:null;function r(e){return Boolean(e&&void 0!==e.length)}function i(){}function f(e){if(!(this instanceof f))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,f._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void l(t.promise,e)}c(t.promise,o)}else(1===e._state?c:l)(t.promise,e._value)})):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof f)return e._state=3,e._value=t,void a(e);if("function"==typeof n)return void d((o=n,r=t,function(){o.apply(r,arguments)}),e)}e._state=1,e._value=t,a(e)}catch(t){l(e,t)}var o,r}function l(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&f._immediateFn(function(){e._handled||f._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,l(t,e))})}catch(e){if(n)return;n=!0,l(t,e)}}f.prototype.catch=function(e){return this.then(null,e)},f.prototype.then=function(e,t){var n=new this.constructor(i);return u(this,new s(e,t,n)),n},f.prototype.finally=e,f.all=function(e){return new f(function(t,n){if(!r(e))return n(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var i=o.length;function f(e,r){try{if(r&&("object"==typeof r||"function"==typeof r)){var u=r.then;if("function"==typeof u)return void u.call(r,function(t){f(e,t)},n)}o[e]=r,0==--i&&t(o)}catch(e){n(e)}}for(var u=0;u<o.length;u++)f(u,o[u])})},f.allSettled=t,f.resolve=function(e){return e&&"object"==typeof e&&e.constructor===f?e:new f(function(t){t(e)})},f.reject=function(e){return new f(function(t,n){n(e)})},f.race=function(e){return new f(function(t,n){if(!r(e))return n(new TypeError("Promise.race accepts an array"));for(var o=0,i=e.length;o<i;o++)f.resolve(e[o]).then(t,n)})},f._immediateFn="function"==typeof o&&function(e){o(e)}||function(e){n(e,0)},f._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var p=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();"function"!=typeof p.Promise?p.Promise=f:(p.Promise.prototype.finally||(p.Promise.prototype.finally=e),p.Promise.allSettled||(p.Promise.allSettled=t))});