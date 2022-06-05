/*! For license information please see movie-details-page.b1a55c31.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{286:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(885),o=n(791),i=n(871),a=n(592),c=n(781),u=n(504),s=n(87),l={details:"MovieDetailsPage_details__MxCsO",image:"MovieDetailsPage_image__sFnXI",genres:"MovieDetailsPage_genres__vtNcU",genres__item:"MovieDetailsPage_genres__item__MJVuv"},h=n(184);function f(){var t=(0,i.UO)().movieId,e=(0,o.useState)(""),n=(0,r.Z)(e,2),f=n[0],d=n[1],v=(0,o.useState)(null),p=(0,r.Z)(v,2),m=p[0],g=p[1],y=(0,o.useState)(""),w=(0,r.Z)(y,2),x=w[0],_=w[1],b=(0,i.s0)(),j=(0,i.TH)().state;return(0,o.useEffect)((function(){if(null!==j&&void 0!==j&&j.from){var t=j.from,e=t.pathname,n=t.search;g(e),_(n)}}),[null===j||void 0===j?void 0:j.from]),(0,o.useEffect)((function(){(0,a.Y5)(t).then((function(t){var e;e=t,function(t,e){var n=[];t.map((function(t){return e.includes(t.id)&&n.push(t.name),n}))}(c.M,e.genres),d(t)}))}),[t]),(0,h.jsxs)(s.Z,{children:[(0,h.jsx)("button",{onClick:function(){null!==m?b("".concat(m).concat(x)):b("/",{replace:!0})},children:"Go back"}),f&&(0,h.jsxs)("div",{className:l.details,children:[f.poster_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(f.poster_path),alt:f.original_title,className:l.image}):(0,h.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:f.original_title,className:l.image}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:f.original_title}),(0,h.jsx)("p",{children:f.tagline}),(0,h.jsxs)("p",{children:["User Score: ",10*f.vote_average,"%"]}),(0,h.jsx)("h2",{children:"Release"}),(0,h.jsx)("p",{children:parseInt(f.release_date)}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:f.overview}),(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("ul",{className:l.genres,children:f.genres.length>0?f.genres.map((function(t){var e=t.id,n=t.name;return(0,h.jsx)("li",{className:l.genres__item,children:n},e)})):(0,h.jsx)("p",{className:l.genres__item,children:"Other"})})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsx)(u.rU,{to:"/movies/".concat(t,"/cast"),className:l.link,children:"Cast"}),(0,h.jsx)(u.rU,{to:"/movies/".concat(t,"/reviews"),className:l.link,children:"Reviews"})]}),(0,h.jsx)(i.j3,{})]})}},781:function(t,e,n){n.d(e,{M:function(){return r}});var r=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},592:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var f={};function d(){}function v(){}function p(){}var m={};s(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(k([])));y&&y!==e&&n.call(y,a)&&(m=y);var w=p.prototype=d.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=p,s(w,"constructor",p),s(p,"constructor",v),v.displayName=s(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),s(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new _(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function i(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))}}n.d(e,{xc:function(){return v},Y5:function(){return d},Hx:function(){return p},vw:function(){return f},wr:function(){return h}});var c="https://api.themoviedb.org/3",u="?api_key=387a2500e741e87c896db50117c25d75";function s(){return l.apply(this,arguments)}function l(){return l=a(o().mark((function t(){var e,n,r,i=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(e,n);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",e="/trending/movie/week";return s("".concat(c).concat(e).concat(u,"&page=").concat(t))}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n="/search/movie",r="&language=en-US&include_adult=false";return s("".concat(c).concat(n).concat(u,"&query=").concat(t,"&page=").concat(e).concat(r))}function d(t){return s("".concat(c).concat("/movie/").concat(t).concat(u).concat("&language=en-US"))}function v(t){return s("".concat(c).concat("/movie/").concat(t,"/credits").concat(u).concat("&language=en-US"))}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n="/movie/",r="&language=en-US";return s("".concat(c).concat(n).concat(t,"/reviews").concat(u).concat(r,"&page=").concat(e))}}}]);
//# sourceMappingURL=movie-details-page.b1a55c31.chunk.js.map