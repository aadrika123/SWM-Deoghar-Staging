!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var t,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(t){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof x?t:x,i=Object.create(o.prototype),s=new A(n||[]);return a(i,"_invoke",{value:O(e,r,s)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var y="suspendedStart",m="suspendedYield",p="executing",g="completed",v={};function x(){}function j(){}function b(){}var w={};d(w,c,(function(){return this}));var N=Object.getPrototypeOf,L=N&&N(N(P([])));L&&L!==o&&i.call(L,c)&&(w=L);var k=b.prototype=x.prototype=Object.create(w);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,r){function n(o,a,s,c){var l=h(t[o],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==e(d)&&i.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,s,c)}),(function(e){n("throw",e,s,c)})):r.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}})}function O(e,r,n){var o=y;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=_(s,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?g:m,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function P(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(r)+" is not iterable")}return j.prototype=b,a(k,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:j,configurable:!0}),j.displayName=d(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},r.awrap=function(e){return{__await:e}},S(E.prototype),d(E.prototype,l,(function(){return this})),r.AsyncIterator=E,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new E(f(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(k),d(k,u,"Generator"),d(k,c,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=P,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}function o(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){o(a,n,i,s,c,"next",e)}function c(e){o(a,n,i,s,c,"throw",e)}s(void 0)}))}}System.register(["./index-legacy-DNKTp0nq.js","./router-legacy-DYc8ozZp.js","./index-legacy-BBXE4eys.js","./Image-legacy-CzfxQAMc.js","./separator-legacy-BndLkwaE.js","./useCustomQuery-legacy-kyMEKemC.js","./SelectField-legacy-CDe210nZ.js","./RHFTextField-legacy-D04IV6kK.js","./ButtonLoading-legacy-Dtw4UhUc.js","./RotatingLoader-legacy-Ddz_8in4.js","./headlessui-legacy-D7WMeg35.js","./axios-legacy-DkcwMedN.js","./module-legacy-BCMopcEa.js"],(function(e,r){"use strict";var o,a,s,c,l,u,d,f,h,y,m,p,g,v,x,j,b,w,N,L,k;return{setters:[function(e){o=e.c,a=e.j,s=e.B,c=e.C,l=e.d,u=e._},function(e){d=e.r,f=e.L},function(e){h=e.P},function(e){y=e.I},function(e){m=e.S},function(e){p=e.u,g=e.a},function(e){v=e.u,x=e.o,j=e.F,b=e.c,w=e.a},function(e){N=e.R},function(e){L=e.B},function(e){k=e.R},null,null,null],execute:function(){e("default",(function(){var e,n,o=t(d.useState(!1),2),i=o[0],c=o[1],u=g({api:"".concat(l.getRouteList),config:{},options:{enabled:!0}});if(null!=u&&u.isLoading)return a.jsx("div",{className:"flex justify-center items-center h-screen",children:a.jsx(k,{})});return a.jsxs(h,{title:"Route List",children:[i&&a.jsx(E,{open:i,setOpen:c,refetch:u.refetch}),a.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[a.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[a.jsx(y,{src:"/assets/image/category.png",alt:"Route List",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),a.jsxs("div",{className:"",children:[a.jsx("h1",{className:"font-semibold",children:"Route List"}),a.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),a.jsx("div",{className:"flex space-x-3 items-center justify-end",children:a.jsx(s,{size:"sm",onClick:function(){c(!0)},children:"Add Route."})}),a.jsx(m,{}),(null==u||null===(e=u.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.length)>0?a.jsx("div",{className:"grid grid-cols-1 gap-4",children:null===(n=u.data)||void 0===n?void 0:n.data.map((function(e,t){return a.jsxs("div",{className:"flex justify-between items-center p-4 bg-gray-100 rounded-lg",children:[a.jsxs("div",{className:"flex gap-3 items-center",children:[a.jsx(r,{className:"w-8 h-8 rounded-lg bg-gray-200 p-2"}),a.jsxs("div",{children:[a.jsx("h1",{className:"font-semibold",children:null==e?void 0:e.routeName}),a.jsx("p",{className:"text-xs text-gray-500",children:null==e?void 0:e.totalConsumerCount})]})]}),a.jsx(f,{to:"/deoghar-app/route-list-details/".concat(null==e?void 0:e.id,"/").concat(null==e?void 0:e.routeName,"/").concat(null==e?void 0:e.totalConsumerCount),children:a.jsx(s,{size:"sm",children:"View"})})]},t+1)}))}):a.jsx("div",{className:"flex justify-center items-center",children:a.jsx("p",{className:"text-gray-500",children:"No data found"})})]})]})}));
/**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
var r=o("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),S=b().shape({routeName:w().required().label("Route Name"),selectedDate:w().required().label("Select Date")});function E(e){var t=e.open,r=e.setOpen,o=e.title,d=e.refetch,f=p({}),h=function(){return r(!t)},y=v({resolver:x(S),defaultValues:{routeName:"",selectedDate:""}}),m=function(){var e=i(n().mark((function e(t){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!1),c("Are you sure?","Please confirm",i(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.mutateAsync({api:l.postNewRoute,data:t});case 3:(r=e.sent).data.status?(u.success(r.data.msg),d&&d()):u.error(r.data.msg),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u.error(e.t0.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.jsxs("div",{children:[t&&a.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),a.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:a.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:a.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[a.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[a.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:null!=o?o:"Add Reminder"}),a.jsxs("button",{style:{background:"none"},onClick:h,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[a.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),a.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),a.jsx("div",{className:"p-4 md:p-5",children:a.jsxs(j,{methods:y,onSubmit:y.handleSubmit(m),children:[a.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[a.jsx("div",{children:a.jsx(N,{name:"routeName",label:"Route Name"})}),a.jsx("div",{children:a.jsx(N,{name:"selectedDate",label:"Select Date",type:"date"})})]}),a.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[a.jsx(s,{size:"sm",type:"button",onClick:h,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),a.jsx(L,{isLoading:f.isLoading,disabled:f.isLoading,size:"sm",type:"submit",className:"w-20",children:"SUBMIT"})]})]})})]})})})]})}}}}))}();