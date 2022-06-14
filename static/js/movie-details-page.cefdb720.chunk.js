/*! For license information please see movie-details-page.cefdb720.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{3286:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(885),i=n(2791),a=n(6871),o=n(9592),c=n(7781),s=n(3504),l={details:"MovieDetailsPage_details__MxCsO",go_back:"MovieDetailsPage_go_back__uizG5",go_back__icon:"MovieDetailsPage_go_back__icon__7Yf02",image_wrapper:"MovieDetailsPage_image_wrapper__NgNJ1",image:"MovieDetailsPage_image__sFnXI",title_wrapper:"MovieDetailsPage_title_wrapper__Cubld",title:"MovieDetailsPage_title__NXSYn",tagline:"MovieDetailsPage_tagline__jPIU7",info:"MovieDetailsPage_info__zYwL+",info__item:"MovieDetailsPage_info__item__+4ulN",info__value:"MovieDetailsPage_info__value__mu55b",genres:"MovieDetailsPage_genres__vtNcU",overview:"MovieDetailsPage_overview__nmJiU",additional:"MovieDetailsPage_additional__qJQ-D",additional__button:"MovieDetailsPage_additional__button__JdFZu",star:"MovieDetailsPage_star__mQacK"},u=n(3439),f=n(184);function h(){var e=(0,a.UO)().movieId,t=(0,i.useState)(""),n=(0,r.Z)(t,2),h=n[0],d=n[1],m=(0,i.useState)(null),v=(0,r.Z)(m,2),p=v[0],_=v[1],g=(0,i.useState)(""),y=(0,r.Z)(g,2),w=y[0],x=y[1],j=(0,a.s0)(),b=(0,a.TH)().state;return(0,i.useEffect)((function(){if(null!==b&&void 0!==b&&b.from){var e=b.from,t=e.pathname,n=e.search;_(t),x(n)}}),[null===b||void 0===b?void 0:b.from]),(0,i.useEffect)((function(){(0,o.Y5)(e).then((function(e){var t;t=e,function(e,t){var n=[];e.map((function(e){return t.includes(e.id)&&n.push(e.name),n}))}(c.M,t.genres),d(e),console.log(e)}))}),[e]),(0,f.jsxs)(f.Fragment,{children:[h&&(0,f.jsxs)("div",{className:l.details,children:[(0,f.jsxs)("div",{className:l.image_wrapper,children:[h.poster_path?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h.poster_path),alt:h.original_title,className:l.image}):(0,f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:h.original_title,className:l.image}),(0,f.jsx)("button",{onClick:function(){null!==p?j("".concat(p).concat(w)):j("/",{replace:!0})},className:l.go_back,children:(0,f.jsx)("svg",{className:l.go_back__icon,width:"16",height:"16","aria-label":"logo",children:(0,f.jsx)("use",{href:"".concat(u.Z,"#arrow-back")})})})]}),(0,f.jsxs)("div",{className:l.description,children:[(0,f.jsxs)("div",{className:l.title_wrapper,children:[(0,f.jsx)("h2",{className:l.title,children:h.original_title}),""!==h.tagline?(0,f.jsxs)("p",{className:l.tagline,children:['"',h.tagline,'"']}):""]}),(0,f.jsxs)("ul",{className:l.info,children:[0!==h.vote_average?(0,f.jsxs)("li",{className:l.info__item,children:["User Score: ",(0,f.jsxs)("span",{className:l.info__value,children:[(0,f.jsx)("span",{className:l.star,children:(0,f.jsx)("i",{className:"fa fa-star-o"})}),"\xa0",h.vote_average]})]}):(0,f.jsxs)("li",{className:l.info__item,children:["User Score: ",(0,f.jsxs)("span",{className:l.info__value,children:[(0,f.jsx)("span",{className:l.star,children:(0,f.jsx)("i",{className:"fa fa-star-o"})}),"\xa0--"]})]}),""!==h.release_date?(0,f.jsxs)("li",{className:l.info__item,children:["Release date: ",(0,f.jsx)("span",{className:l.info__value,children:new Date(h.release_date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]}):(0,f.jsxs)("li",{className:l.info__item,children:["Release date: ",(0,f.jsx)("span",{className:l.info__value,children:"--"})]}),0!==h.budget?(0,f.jsxs)("li",{className:l.info__item,children:["Budget: ",(0,f.jsxs)("span",{className:l.info__value,children:["$",h.budget.toLocaleString()]})]}):"",0!==h.revenue?(0,f.jsxs)("li",{className:l.info__item,children:["Revenue: ",(0,f.jsxs)("span",{className:l.info__value,children:["$",h.revenue.toLocaleString()]})]}):"",0!==h.runtime?(0,f.jsxs)("li",{className:l.info__item,children:["Runtime: ",(0,f.jsx)("span",{className:l.info__value,children:function(e){var t=e/60,n=Math.floor(t),r=60*(t-n),i=Math.round(r),a="".concat(n,1===n?" hour ":" hours "),o="".concat(i,1===i?" minute":" minutes");return 0===n&&(a=""),0===i&&(o=""),a+o}(h.runtime)})]}):"",(0,f.jsxs)("li",{className:l.info__item,children:["Genres: ",(0,f.jsx)("ul",{className:l.genres,children:h.genres.length>0?h.genres.map((function(e,t){var n=e.id,r=e.name;return(0,f.jsx)("li",{className:l.genres__item,children:(t?", ":"")+r},n)})):(0,f.jsx)("p",{className:l.genres__item,children:"Other"})})]})]}),(0,f.jsx)("p",{className:l.overview,children:h.overview}),(0,f.jsxs)("div",{className:l.additional,children:[(0,f.jsx)(s.rU,{to:"/movies/".concat(e,"/cast"),className:l.additional__button,children:"Cast"}),(0,f.jsx)(s.rU,{to:"/movies/".concat(e,"/reviews"),className:l.additional__button,children:"Reviews"})]})]})]}),(0,f.jsx)(a.j3,{})]})}},7781:function(e,t,n){n.d(t,{M:function(){return r}});var r=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},9592:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(){i=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof d?t:d,a=Object.create(i.prototype),o=new L(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return P()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var c=j(o,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,o),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var h={};function d(){}function m(){}function v(){}var p={};l(p,o,(function(){return this}));var _=Object.getPrototypeOf,g=_&&_(_(k([])));g&&g!==t&&n.call(g,o)&&(p=g);var y=v.prototype=d.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function i(a,o,c,s){var l=f(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==r(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){i("next",e,c,s)}),(function(e){i("throw",e,c,s)})):t.resolve(h).then((function(e){u.value=e,c(u)}),(function(e){return i("throw",e,c,s)}))}s(l.arg)}var a;this._invoke=function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return a=a?a.then(r,r):r()}}function j(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=v,l(y,"constructor",v),l(v,"constructor",m),m.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new x(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),l(y,s,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function a(e,t,n,r,i,a,o){try{var c=e[a](o),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function c(e){a(o,r,i,c,s,"next",e)}function s(e){a(o,r,i,c,s,"throw",e)}c(void 0)}))}}n.d(t,{xc:function(){return m},Y5:function(){return d},Hx:function(){return v},vw:function(){return h},wr:function(){return f}});var c="https://api.themoviedb.org/3",s="?api_key=387a2500e741e87c896db50117c25d75";function l(){return u.apply(this,arguments)}function u(){return u=o(i().mark((function e(){var t,n,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",t="/trending/movie/week";return l("".concat(c).concat(t).concat(s,"&page=").concat(e))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n="/search/movie",r="&language=en-US&include_adult=false";return l("".concat(c).concat(n).concat(s,"&query=").concat(e,"&page=").concat(t).concat(r))}function d(e){return l("".concat(c).concat("/movie/").concat(e).concat(s).concat("&language=en-US"))}function m(e){return l("".concat(c).concat("/movie/").concat(e,"/credits").concat(s).concat("&language=en-US"))}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n="/movie/",r="&language=en-US";return l("".concat(c).concat(n).concat(e,"/reviews").concat(s).concat(r,"&page=").concat(t))}}}]);
//# sourceMappingURL=movie-details-page.cefdb720.chunk.js.map