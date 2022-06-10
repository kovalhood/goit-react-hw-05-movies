/*! For license information please see movie-details-page.bdc664e4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{286:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(885),i=n(791),o=n(871),a=n(592),c=n(781),s=n(504),l=n(87),u={details:"MovieDetailsPage_details__MxCsO",go_back:"MovieDetailsPage_go_back__uizG5",go_back__icon:"MovieDetailsPage_go_back__icon__7Yf02",image_wrapper:"MovieDetailsPage_image_wrapper__NgNJ1",image:"MovieDetailsPage_image__sFnXI",title_wrapper:"MovieDetailsPage_title_wrapper__Cubld",title:"MovieDetailsPage_title__NXSYn",tagline:"MovieDetailsPage_tagline__jPIU7",info:"MovieDetailsPage_info__zYwL+",info__item:"MovieDetailsPage_info__item__+4ulN",info__value:"MovieDetailsPage_info__value__mu55b",genres:"MovieDetailsPage_genres__vtNcU",overview:"MovieDetailsPage_overview__nmJiU",additional:"MovieDetailsPage_additional__qJQ-D",link:"MovieDetailsPage_link__cCwjS"},f=n(439),h=n(184);function d(){var e=(0,o.UO)().movieId,t=(0,i.useState)(""),n=(0,r.Z)(t,2),d=n[0],m=n[1],v=(0,i.useState)(null),p=(0,r.Z)(v,2),g=p[0],_=p[1],y=(0,i.useState)(""),w=(0,r.Z)(y,2),x=w[0],j=w[1],b=(0,o.s0)(),N=(0,o.TH)().state;return(0,i.useEffect)((function(){if(null!==N&&void 0!==N&&N.from){var e=N.from,t=e.pathname,n=e.search;_(t),j(n)}}),[null===N||void 0===N?void 0:N.from]),(0,i.useEffect)((function(){(0,a.Y5)(e).then((function(e){var t;t=e,function(e,t){var n=[];e.map((function(e){return t.includes(e.id)&&n.push(e.name),n}))}(c.M,t.genres),m(e),console.log(e)}))}),[e]),(0,h.jsxs)(l.Z,{children:[d&&(0,h.jsxs)("div",{className:u.details,children:[(0,h.jsxs)("div",{className:u.image_wrapper,children:[d.poster_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(d.poster_path),alt:d.original_title,className:u.image}):(0,h.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:d.original_title,className:u.image}),(0,h.jsx)("button",{onClick:function(){null!==g?b("".concat(g).concat(x)):b("/",{replace:!0})},className:u.go_back,children:(0,h.jsx)("svg",{className:u.go_back__icon,width:"16",height:"16","aria-label":"logo",children:(0,h.jsx)("use",{href:"".concat(f.Z,"#arrow-back")})})})]}),(0,h.jsxs)("div",{className:u.description,children:[(0,h.jsxs)("div",{className:u.title_wrapper,children:[(0,h.jsx)("h2",{className:u.title,children:d.original_title}),""!==d.tagline?(0,h.jsxs)("p",{className:u.tagline,children:['"',d.tagline,'"']}):""]}),(0,h.jsxs)("ul",{className:u.info,children:[0!==d.vote_average?(0,h.jsxs)("li",{className:u.info__item,children:["User Score: ",(0,h.jsx)("span",{className:u.info__value,children:d.vote_average})]}):(0,h.jsxs)("li",{className:u.info__item,children:["User Score: ",(0,h.jsx)("span",{className:u.info__value,children:"--"})]}),""!==d.release_date?(0,h.jsxs)("li",{className:u.info__item,children:["Release date: ",(0,h.jsx)("span",{className:u.info__value,children:new Date(d.release_date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]}):(0,h.jsxs)("li",{className:u.info__item,children:["Release date: ",(0,h.jsx)("span",{className:u.info__value,children:"--"})]}),0!==d.budget?(0,h.jsxs)("li",{className:u.info__item,children:["Budget: ",(0,h.jsxs)("span",{className:u.info__value,children:["$",d.budget.toLocaleString()]})]}):"",0!==d.revenue?(0,h.jsxs)("li",{className:u.info__item,children:["Revenue: ",(0,h.jsxs)("span",{className:u.info__value,children:["$",d.revenue.toLocaleString()]})]}):"",0!==d.runtime?(0,h.jsxs)("li",{className:u.info__item,children:["Runtime: ",(0,h.jsx)("span",{className:u.info__value,children:function(e){var t=e/60,n=Math.floor(t),r=60*(t-n),i=Math.round(r),o="".concat(n,1===n?" hour ":" hours "),a="".concat(i,1===i?" minute":" minutes");return 0===n&&(o=""),0===i&&(a=""),o+a}(d.runtime)})]}):"",(0,h.jsxs)("li",{className:u.info__item,children:["Genres: ",(0,h.jsx)("ul",{className:u.genres,children:d.genres.length>0?d.genres.map((function(e,t){var n=e.id,r=e.name;return(0,h.jsx)("li",{className:u.genres__item,children:(t?", ":"")+r},n)})):(0,h.jsx)("p",{className:u.genres__item,children:"Other"})})]})]}),(0,h.jsx)("p",{className:u.overview,children:d.overview}),(0,h.jsxs)("div",{className:u.additional,children:[(0,h.jsx)(s.rU,{to:"/movies/".concat(e,"/cast"),className:u.link,children:"Cast"}),(0,h.jsx)(s.rU,{to:"/movies/".concat(e,"/reviews"),className:u.link,children:"Reviews"})]})]})]}),(0,h.jsx)(o.j3,{})]})}},781:function(e,t,n){n.d(t,{M:function(){return r}});var r=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},592:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(){i=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(P){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof d?t:d,o=Object.create(i.prototype),a=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return S()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,a),o}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var h={};function d(){}function m(){}function v(){}var p={};l(p,a,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(L([])));_&&_!==t&&n.call(_,a)&&(p=_);var y=v.prototype=d.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function i(o,a,c,s){var l=f(e[o],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==r(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){i("next",e,c,s)}),(function(e){i("throw",e,c,s)})):t.resolve(h).then((function(e){u.value=e,c(u)}),(function(e){return i("throw",e,c,s)}))}s(l.arg)}var o;this._invoke=function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return o=o?o.then(r,r):r()}}function j(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=v,l(y,"constructor",v),l(v,"constructor",m),m.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new x(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(y),l(y,s,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function o(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){o(a,r,i,c,s,"next",e)}function s(e){o(a,r,i,c,s,"throw",e)}c(void 0)}))}}n.d(t,{xc:function(){return m},Y5:function(){return d},Hx:function(){return v},vw:function(){return h},wr:function(){return f}});var c="https://api.themoviedb.org/3",s="?api_key=387a2500e741e87c896db50117c25d75";function l(){return u.apply(this,arguments)}function u(){return u=a(i().mark((function e(){var t,n,r,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",t="/trending/movie/week";return l("".concat(c).concat(t).concat(s,"&page=").concat(e))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n="/search/movie",r="&language=en-US&include_adult=false";return l("".concat(c).concat(n).concat(s,"&query=").concat(e,"&page=").concat(t).concat(r))}function d(e){return l("".concat(c).concat("/movie/").concat(e).concat(s).concat("&language=en-US"))}function m(e){return l("".concat(c).concat("/movie/").concat(e,"/credits").concat(s).concat("&language=en-US"))}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n="/movie/",r="&language=en-US";return l("".concat(c).concat(n).concat(e,"/reviews").concat(s).concat(r,"&page=").concat(t))}}}]);
//# sourceMappingURL=movie-details-page.bdc664e4.chunk.js.map