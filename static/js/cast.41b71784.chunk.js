/*! For license information please see cast.41b71784.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{711:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(885),o=r(791),i=r(871),a=r(592),c="Cast_cast__69wvv",u="Cast_item__UL28N",s="Cast_link__dRpZQ",l="Cast_name__V-txN",f="Cast_image_wrapper__5Ep56",h="Cast_image__LdYKw",p="Cast_name_wrapper__lh+lU",v="Cast_character__Or3eP",d=r(184);function y(){var t=(0,i.UO)().movieId,e=(0,o.useState)([]),r=(0,n.Z)(e,2),y=r[0],m=r[1];return(0,o.useEffect)((function(){(0,a.xc)(t).then((function(t){m(t.cast),console.log(t)}))}),[t]),(0,d.jsx)(d.Fragment,{children:y&&(0,d.jsx)("ul",{className:c,children:y.map((function(t){var e=t.id,r=t.character,n=t.original_name,o=t.profile_path;return(0,d.jsx)("li",{className:u,children:(0,d.jsxs)("a",{className:s,href:"https://www.google.com/search?q=".concat(n.split(" ").join("+")),target:"_blank",rel:"noreferrer",children:[(0,d.jsx)("div",{className:f,children:o?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:n,className:h}):(0,d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:n,className:h})}),(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("p",{className:l,children:n}),(0,d.jsx)("p",{className:v,children:r})]})]})},e)}))})})}},592:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var h={};function p(){}function v(){}function d(){}var y={};s(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==e&&r.call(g,a)&&(y=g);var w=d.prototype=p.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=d,s(w,"constructor",d),s(d,"constructor",v),v.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),s(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,{xc:function(){return v},Y5:function(){return p},Hx:function(){return d},vw:function(){return h},wr:function(){return f}});var c="https://api.themoviedb.org/3",u="?api_key=387a2500e741e87c896db50117c25d75";function s(){return l.apply(this,arguments)}function l(){return l=a(o().mark((function t(){var e,r,n,i=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",r=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(e,r);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",e="/trending/movie/week";return s("".concat(c).concat(e).concat(u,"&page=").concat(t))}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",r="/search/movie",n="&language=en-US&include_adult=false";return s("".concat(c).concat(r).concat(u,"&query=").concat(t,"&page=").concat(e).concat(n))}function p(t){return s("".concat(c).concat("/movie/").concat(t).concat(u).concat("&language=en-US"))}function v(t){return s("".concat(c).concat("/movie/").concat(t,"/credits").concat(u).concat("&language=en-US"))}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",r="/movie/",n="&language=en-US";return s("".concat(c).concat(r).concat(t,"/reviews").concat(u).concat(n,"&page=").concat(e))}}}]);
//# sourceMappingURL=cast.41b71784.chunk.js.map