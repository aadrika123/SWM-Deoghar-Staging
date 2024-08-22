import{a as y,u as ae,j as e,B as te,C as se,e as v,_ as g,i as me,h as xe,I as Q}from"./index-Gnm6BNck.js";import{r as b,d as he,h as ge}from"./router-CTqkcgir.js";import{P as ue}from"./index-CQ9-x6Kv.js";import{C as p,b as X}from"./card-DEHK9LO4.js";import{S as Z}from"./separator-HqdWj8wG.js";import{S as f}from"./SkeletonLoader-2dLsahPw.js";import{u as de,o as ie,F as ne,c as re,a as h,S as je}from"./SelectField-BTbQ7UeX.js";import{R as ee}from"./RHFTextField-CCwkCBFE.js";import{R as le}from"./RHFTextArea-CrEnAN3H.js";import{B as oe}from"./ButtonLoading-vd9c6r6W.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";const pe=re().shape({reminderDate:h().required().label("Reminder Date"),reminderTime:h().required().label("Reminder Time"),remarks:h().required().label("Remarks")});function fe({open:n,setOpen:o,title:u,aptData:m}){const{user:r}=y(),d=ae({}),s=()=>o(!n),a=de({resolver:ie(pe),defaultValues:{reminderDate:"",reminderTime:"",remarks:""}}),x=async i=>{se("Are you sure?","Please confirm",async()=>{try{const l=await d.mutateAsync({api:v.postReminder,data:{...i,userId:r==null?void 0:r.id,consumerId:m}});l.data.status?(g.success(l.data.msg),o(!1)):g.error(l.data.msg)}catch(l){g.error(l.msg)}})};return e.jsxs("div",{children:[n&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${n?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:u??"Add Reminder"}),e.jsxs("button",{style:{background:"none"},onClick:s,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(ne,{methods:a,onSubmit:a.handleSubmit(x),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(ee,{name:"reminderDate",label:"Reminder Date",type:"date",isRequired:!0,min:new Date().toISOString().split("T")[0]})}),e.jsx("div",{children:e.jsx(ee,{name:"reminderTime",label:"Reminder Time",type:"time",isRequired:!0})}),e.jsx("div",{className:"col-span-2",children:e.jsx(le,{name:"remarks",label:"Remarks",isRequired:!0})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(te,{size:"sm",type:"button",onClick:s,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(oe,{isLoading:d.isPending,disabled:d.isPending,size:"sm",type:"submit",className:"w-20",children:"SUBMIT"})]})]})})]})})})]})}const be=[{value:"Door Closed",label:"Door Closed"},{value:"No Response from CitizenCitizen Will Pay Next Month",label:"No Response from Citizen"},{value:"Citizen Will Pay Next Day",label:"Citizen Will Pay Next Day"},{value:"Citizen Will Pay Next Month",label:"Citizen Will Pay Next Month"},{value:"Refuses to Pay",label:"Refuses to Pay"},{value:"other",label:"Other"}],ye=re().shape({denyList:h().required("Deny List is required"),latitude:h(),longitude:h(),remarks:h().required("Remarks is required")});function ve({open:n,setOpen:o,title:u,aptData:m}){const r=ae({}),{user:d}=y(),{coords:s,isGeolocationEnabled:a}=me(),x=()=>o(!n),i=de({resolver:ie(ye),defaultValues:{denyList:"",latitude:"",longitude:"",remarks:""}}),l=async j=>{o(!1),se("Are you sure?","Please confirm",async()=>{try{const c=await r.mutateAsync({api:v.postPaymentDeny,data:{...j,userId:d==null?void 0:d.id,consumerId:m}});c.data.status?(g.success(c.data.msg),o(!1)):g.error(c.data.msg)}catch(c){g.error(c.msg)}})};return b.useEffect(()=>{m&&(i.setValue("latitude",String(s==null?void 0:s.latitude)),i.setValue("longitude",String(s==null?void 0:s.longitude))),i.watch("denyList")!=="other"&&i.setValue("remarks",i.watch("denyList")),i.watch("denyList")==="other"&&i.setValue("remarks","")},[i.watch("denyList")]),e.jsxs("div",{children:[n&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${n?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:u??"Add Deny"}),e.jsxs("button",{style:{background:"none"},onClick:x,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:a?e.jsxs(ne,{methods:i,onSubmit:i.handleSubmit(l),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(je,{name:"denyList",label:"Deny List",data:be,isRequired:!0})}),i.watch("denyList")==="other"&&e.jsx("div",{className:"col-span-2",children:e.jsx(le,{name:"remarks",label:"Remarks",isRequired:!0})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(te,{size:"sm",type:"button",onClick:x,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(oe,{isLoading:r.isPending,disabled:r.isPending,size:"sm",type:"submit",className:"w-20",children:"SUBMIT"})]})]}):e.jsx("div",{className:"text-center py-4",children:e.jsx("h1",{className:"text-sm font-semibold text-red-600",children:"Please enable location to continue"})})})]})})})]})}const Ne=[{title:"View & Pay",icon:"/icons/grid.svg",link:"/deoghar-app/consumer-payment",bg:"bg-gradient-to-tl from-[#EEF2FF] to-[#9CC6F7]",accessMenu:["4","5"]},{title:"Transaction History",icon:"/icons/history.svg",link:"/deoghar-app/tran-history",bg:"bg-gradient-to-tl from-[#FFEFE4] to-[#FFBC96]",accessMenu:["4","5"]},{title:"Geo Map",icon:"/icons/location.svg",link:"/deoghar-app/con-geo-map",bg:"bg-gradient-to-tl from-[#E4F6FF] to-[#9ADCFF]",accessMenu:["4","5"]},{title:"Reminder",icon:"/icons/bells.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FEE8FF] to-[#E4AFFF]",accessMenu:["4","5"]},{title:"Deny",icon:"/icons/deniel2.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4","5"]},{title:"Geo Tagging",icon:"/icons/location.svg",link:"/deoghar-app/con-geo-tagging",bg:"bg-gradient-to-tl from-[#E1FFC3] to-[#C9F98D]",accessMenu:["4","5"]},{title:"Update Consumer",icon:"/icons/update.svg",link:"/deoghar-app/update-consumer",bg:"bg-gradient-to-tl from-[#EAD9FF] to-[#C291FF]",accessMenu:["4"]},{title:"Deactivate Consumer",icon:"/icons/deactivate.svg",link:"/deoghar-app/con-deactivated",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4"]},{title:"Payment Adjustment",icon:"/icons/cur.svg",bg:"bg-gradient-to-tl from-[#FFF5CE] to-[#FCD451]",link:"/deoghar-app/demand-con-adjust",accessMenu:["4"]},{title:"Print Demand",icon:"/icons/denial.svg",bg:"bg-gradient-to-tl from-[#E1FFC3] to-[#C9F98D]",link:"/deoghar-app/print-demand-con",accessMenu:["4"]},{title:"Add Renter",icon:"/icons/add-consumer.svg",bg:"bg-gradient-to-tl from-[#E4F6FF] to-[#9ADCFF]",link:"/deoghar-app/add-renter",accessMenu:["4"]}];function Te(){var x,i,l,j,c,N,k,C,F,w,A,$,R,M,L,P,E,S,T,I,z,q,B,O,V,D,W,G,H,U,_,Y;const{user:n}=y(),[o,u]=b.useState(!1),[m,r]=b.useState(!1),d=he(),{id:s}=ge(),a=xe({api:`${v.getConsumerDetailsById}/${s}`,options:{enabled:!!s}});return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(p,{children:e.jsxs(X,{children:[e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{})]})})}):e.jsxs(ue,{title:"Consumer Action",children:[o&&e.jsx(fe,{open:o,setOpen:u,aptData:(x=a==null?void 0:a.data)==null?void 0:x.data[0].id}),m&&e.jsx(ve,{open:m,setOpen:r,aptData:(i=a==null?void 0:a.data)==null?void 0:i.data[0].id}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(Q,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Consumer Action"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Consumer action details here."})]})]}),e.jsx(Z,{}),e.jsx(p,{children:e.jsx(X,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer No:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(j=(l=a==null?void 0:a.data)==null?void 0:l.data[0])==null?void 0:j.consumerNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(N=(c=a==null?void 0:a.data)==null?void 0:c.data[0])==null?void 0:N.consumerName})}),((C=(k=a==null?void 0:a.data)==null?void 0:k.data[0])==null?void 0:C.holdingNo)!=""&&((w=(F=a==null?void 0:a.data)==null?void 0:F.data[0])==null?void 0:w.holdingNo)!=null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Holding No:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(($=(A=a==null?void 0:a.data)==null?void 0:A.data[0])==null?void 0:$.holdingNo)??"--"})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Mobile:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(M=(R=a==null?void 0:a.data)==null?void 0:R.data[0])==null?void 0:M.mobileNo})}),((P=(L=a==null?void 0:a.data)==null?void 0:L.data[0])==null?void 0:P.monthlyDemand)>"0"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(S=(E=a==null?void 0:a.data)==null?void 0:E.data[0])==null?void 0:S.monthlyDemand})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(I=(T=a==null?void 0:a.data)==null?void 0:T.data[0])==null?void 0:I.totalDemand})}),((q=(z=a==null?void 0:a.data)==null?void 0:z.data[0])==null?void 0:q.totalDemand)>"0"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(O=(B=a==null?void 0:a.data)==null?void 0:B.data[0])==null?void 0:O.demandFrom})})]}),((D=(V=a==null?void 0:a.data)==null?void 0:V.data[0])==null?void 0:D.totalDemand)>"0"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(G=(W=a==null?void 0:a.data)==null?void 0:W.data[0])==null?void 0:G.demandUpto})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer type:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(U=(H=a==null?void 0:a.data)==null?void 0:H.data[0])==null?void 0:U.cansumerType})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(Y=(_=a==null?void 0:a.data)==null?void 0:_.data[0])==null?void 0:Y.Address})})]})})}),e.jsx(Z,{}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:Ne.map((t,ce)=>t.accessMenu.includes(`${n==null?void 0:n.userTypeId}`)&&e.jsxs("div",{className:"flex items-center flex-col cursor-pointer mt-2",children:[e.jsx(p,{onClick:()=>{var J,K;t.title==="View & Pay"&&d(`${t.link}/${s}`),t.title=="Update Consumer"&&d(`${t.link}/${s}`),t.title=="All Flats List"&&d(`${t.link}/${s}`),t.title=="Transaction History"&&d(`${t.link}?id=${s}&tranType=consumerId`),t.title=="Update Apartment"&&d(`${t.link}/${s}`),t.title=="Payment Adjustment"&&d(`${t.link}/${s}`),t.title=="Deactivate Apartment"&&d(`${t.link}/${s}`),t.title=="Geo Tagging"&&d(`${t.link}/${s}`),t.title=="Geo Map"&&d(`${t.link}/${s}`),t.title=="Reminder"&&u(!0),t.title=="Deny"&&r(!0),t.title=="Adjust Demand"&&d(`${t.link}/${s}`),t.title=="Add Renter"&&d(`${t.link}/${s}`),t.title=="Deactivate Consumer"&&d(`${t.link}/${s}`),t.title=="Print Demand"&&(((K=(J=a==null?void 0:a.data)==null?void 0:J.data[0])==null?void 0:K.totalDemand)>"0"?d(`${t.link}/${s}`):g.error("Outstanding demand is 0, so you can not print demand."))},className:"w-[52px] h-[52px] flex items-center justify-center bg-[#12743B] rounded-2xl",children:e.jsx(Q,{src:t.icon,alt:"icon"})}),e.jsx("p",{className:"text-xs font-bold text-gray-800 mt-2 text-center",children:t.title})]},ce+1))})]})]})}export{Te as default};