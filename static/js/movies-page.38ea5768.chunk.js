"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{305:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(885),a=t(791),u=t(871),s=t(87),c="SearchField_form__PQ-2B",o="SearchField_input__Q8-+I",i="SearchField_button__sspyl",l="SearchField_icon__XHZPW",h=t(222),f=t(439),m=t(184);var _=function(e){var r=(0,a.useState)(""),t=(0,n.Z)(r,2),u=t[0],s=t[1];return(0,m.jsxs)("form",{className:c,onSubmit:function(r){if(r.preventDefault(),""===u.trim())return s(""),h.Am.info("Input your search query");e.onSubmit(u),s("")},children:[(0,m.jsx)("input",{className:o,type:"text",autoComplete:"off",name:"searchQuery",placeholder:"Search movie...",value:u,onChange:function(e){s(e.currentTarget.value.toLowerCase())}}),(0,m.jsx)("button",{type:"submit",className:i,children:(0,m.jsx)("svg",{className:l,"aria-label":"logo",children:(0,m.jsx)("use",{href:"".concat(f.Z,"#search")})})})]})},y=t(592),d=t(806),p=t(102),v=t(857);function S(e){var r=e.searchQuery,t=(0,a.useState)([]),u=(0,n.Z)(t,2),s=u[0],c=u[1];return(0,a.useEffect)((function(){""!==r&&(0,y.vw)(r).then((function(e){if(!(e.total_results>0))return c([]),h.Am.error("Sorry, there are no images matching your search query. Please try again.");c((0,v.Z)(e.results))}))}),[r]),(0,m.jsx)(d.Z,{children:(0,m.jsx)(p.Z,{data:s})})}function x(){var e,r=(0,a.useState)(""),t=(0,n.Z)(r,2),c=t[0],o=t[1],i=(0,u.s0)(),l=(0,u.TH)(),f=null!==(e=new URLSearchParams(l.search).get("query"))&&void 0!==e?e:"";return(0,a.useEffect)((function(){""!==f&&o(f)}),[f]),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(_,{onSubmit:function(e){if(c===e)return h.Am.info("Input new search query.");i("".concat(l.pathname,"?query=").concat(e)),o(e)}}),(0,m.jsx)(S,{searchQuery:c})]})}}}]);
//# sourceMappingURL=movies-page.38ea5768.chunk.js.map