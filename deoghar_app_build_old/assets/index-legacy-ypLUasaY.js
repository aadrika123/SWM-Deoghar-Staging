!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(r){d=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof x?e:x,o=Object.create(a.prototype),s=new k(n||[]);return i(o,"_invoke",{value:O(t,r,s)}),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var m="suspendedStart",y="suspendedYield",p="executing",g="completed",v={};function x(){}function j(){}function b(){}var w={};d(w,c,(function(){return this}));var N=Object.getPrototypeOf,S=N&&N(N(F([])));S&&S!==a&&o.call(S,c)&&(w=S);var L=b.prototype=x.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function D(e,r){function n(a,i,s,c){var l=h(e[a],e,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,a){n(t,e,r,a)}))}return a=a?a.then(o,o):o()}})}function O(t,e,n){var a=m;return function(o,i){if(a===p)throw Error("Generator is already running");if(a===g){if("throw"===o)throw i;return{value:r,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var c=T(s,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===m)throw a=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var l=h(t,e,n);if("normal"===l.type){if(a=n.done?g:y,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=g,n.method="throw",n.arg=l.arg)}}}function T(t,e){var n=e.method,a=t.iterator[n];if(a===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(a,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(o.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return j.prototype=b,i(L,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=d(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},E(D.prototype),d(D.prototype,l,(function(){return this})),n.AsyncIterator=D,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new D(f(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),d(L,u,"Generator"),d(L,c,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=F,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return s.type="throw",s.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,o,i,s=[],c=!0,l=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(s.push(n.value),s.length!==e);c=!0);}catch(t){l=!0,a=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw a}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-BjbP0hYS.js","./router-legacy-BWed7M0P.js","./card-legacy-Cr0OU9O6.js","./index-legacy-Dot2NoDQ.js","./index-legacy-CM-MNlUk.js","./switch-legacy-BxMmym3u.js","./RHFTextField-legacy-CQB9S03c.js","./SelectField-legacy-C7guhOdd.js","./useComonData-legacy-np-mssIK.js","./separator-legacy-faam-GUi.js","./headlessui-legacy-BlMjWznQ.js","./axios-legacy-COJRtORB.js"],(function(t,a){"use strict";var o,i,s,c,l,u,d,f,h,m,y,p,g,v,x,j,b,w,N,S,L,E;return{setters:[function(t){o=t.j,i=t.B,s=t.g,c=t.e,l=t.I},function(t){u=t.u,d=t.r},function(t){f=t.C,h=t.b},function(t){m=t.P},function(t){y=t.P},function(t){p=t.u,g=t.o,v=t.F,x=t.c,j=t.a},function(t){b=t.R},function(t){w=t.R},function(t){N=t.u,S=t.a,L=t.b},function(t){E=t.S},null,null],execute:function(){function a(t){var e,r=t.reminderListData,n=u();return null!=r&&r.isFetching?o.jsx(o.Fragment,{children:Array.from({length:10}).map((function(t,e){return o.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:o.jsx("div",{className:"animate-pulse flex space-x-4",children:o.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[o.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("div",{className:"h-4 bg-gray-200 rounded"}),o.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})},e+1)}))}):o.jsx(o.Fragment,{children:"success"===r.status&&(null==r||null===(e=r.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.length)>0?r.data.data.map((function(t,e){return o.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:""!==t.consumerNo?"Consumer Name :":"Apartment Name :"}),o.jsx("div",{className:"text-xs font-semibold text-gray-500 w-30 truncate",children:""!==t.consumerNo?t.consumerName:t.apartmentName}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Ward No :"}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:t.wardNo}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:""!==t.consumerNo?"Consumer No :":"Apartment Code :"}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:""!==t.consumerNo?t.consumerNo:t.apartmentCode}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Reminder Date :"}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:t.reminderDate}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Date :"}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:t.date}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Address :"}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:t.address}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Remarks :"}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:t.remarks}),o.jsx(E,{className:"col-span-2 w-full"}),o.jsx("div",{children:o.jsx(i,{onClick:function(){""!==t.consumerNo&&n("/deoghar-app/consumer-actions/".concat(t.id)),""!==t.apartmentCode&&n("/deoghar-app/apartment-actions/".concat(t.id))},variant:"outline",className:"w-full rounded-lg ",size:"sm",children:o.jsx("h1",{className:"text-xs font-semibold text-gray-600",children:"VIEW DETAILS"})})}),o.jsx("div",{children:o.jsx(i,{variant:"outline",onClick:function(){""!==t.consumerNo&&n("/deoghar-app/consumer-payment/".concat(t.id)),""!==t.apartmentCode&&n("/deoghar-app/apartment-payment/".concat(t.id))},className:"w-full rounded-lg",size:"sm",children:"PAY"})})]})},e+1)})):o.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:o.jsx("div",{className:"flex items-center justify-center",children:o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"No Data Found"})})})})}t("default",(function(){var t,u,x,j,O,T,A=N().getAllUser,C=S().getConsumerAddFormData,k=n(d.useState(1),2),F=k[0],P=k[1],_=n(d.useState(10),2),I=_[0],R=_[1],G=p({resolver:g(D),defaultValues:{fromDate:(new Date).toISOString().split("T")[0],toDate:(new Date).toISOString().split("T")[0],category:"",consumerType:"",wardNo:""}}),z=s({api:"".concat(c.getReminderList),config:{fromDate:G.watch("fromDate"),toDate:G.watch("toDate"),category:G.watch("category"),type:G.watch("consumerType"),wardNo:G.watch("wardNo")},key:"reminderList",options:{enabled:!0}}),U=function(){var t,n=(t=e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(1),R(10),z.refetch();case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function s(t){r(i,a,o,s,c,"next",t)}function c(t){r(i,a,o,s,c,"throw",t)}s(void 0)}))});return function(t){return n.apply(this,arguments)}}(),V=L(String(G.watch("category"))).consumerCategoryData;return o.jsx(y,{title:"Reminder List",children:o.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[o.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[o.jsx(l,{src:"/assets/image/apartment.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),o.jsxs("div",{className:"",children:[o.jsx("h1",{className:" font-semibold",children:"Reminder List"}),o.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management reminder list."})]})]}),o.jsx(E,{}),o.jsx(f,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:o.jsx(h,{className:"px-6 text-sm",children:o.jsxs(v,{methods:G,onSubmit:G.handleSubmit(U),children:[o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsx("div",{children:o.jsx(b,{name:"fromDate",label:"From Date",type:"date",className:"w-full"})}),o.jsx("div",{children:o.jsx(b,{name:"toDate",label:"To Date",type:"date",className:"w-full"})}),o.jsx("div",{className:"col-span-2",children:o.jsx(w,{name:"wardNo",label:"Ward No",className:"w-full",data:null!==(t=null==A||null===(u=A.data)||void 0===u||null===(u=u.data[0].ulbDetails[0])||void 0===u||null===(u=u.wards)||void 0===u?void 0:u.map((function(t){return{label:String(t),value:String(t)}})))&&void 0!==t?t:[]})}),o.jsx("div",{children:o.jsx(w,{name:"category",label:"Category",className:"w-full",data:null!==(x=null==C||null===(j=C.data)||void 0===j||null===(j=j.data)||void 0===j||null===(j=j.consumerCategory)||void 0===j?void 0:j.map((function(t){return{label:String(t.name),value:String(t.id)}})))&&void 0!==x?x:[]})}),o.jsx("div",{children:o.jsx(w,{name:"consumerType",label:"Consumer Type",className:"w-full",data:null!==(O=null==V||null===(T=V.data)||void 0===T||null===(T=T.data)||void 0===T||null===(T=T.consumerTypeList)||void 0===T?void 0:T.map((function(t){return{label:String(t.name),value:String(t.id)}})))&&void 0!==O?O:[]})})]}),o.jsx("div",{className:"flex justify-end mt-4",children:o.jsx(i,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Search"})})]})})}),o.jsx(E,{}),o.jsx(a,{reminderListData:z}),"success"===(null==z?void 0:z.status)&&o.jsxs(o.Fragment,{children:[o.jsx(m,{page:F,perPage:I,totalPage:10,setPage:function(t){return P(t)}}),o.jsx(E,{})]})]})})}));var D=x().shape({category:j(),consumerType:j(),wardNo:j(),fromDate:j(),toDate:j()})}}}))}();