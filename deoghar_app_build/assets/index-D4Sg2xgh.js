import{u as ae,a as N,j as e,B as te,C as se,e as v,_ as g,i as xe,h as me,I as j}from"./index-UND7_atw.js";import{r as b,u as he,i as pe}from"./router-DWxcwEcu.js";import{P as ge}from"./index-DXNwgeoC.js";import{C as u,b as X,c as fe}from"./card-DkjVrOjK.js";import{S as Z}from"./separator-C2vIPjcQ.js";import{S as y}from"./SkeletonLoader-PZvwoz4K.js";import{u as ie,F as re,c as le,a as p,o as de}from"./switch-Vvfa2PA0.js";import{R as ee}from"./RHFTextField-uvy3mMpp.js";import{R as ne}from"./RHFTextArea-Bh3xrpd6.js";import{B as oe}from"./ButtonLoading-CnUHyBh9.js";import{R as ue}from"./SelectField-C4OvMt0z.js";import"./headlessui-DlCzxctq.js";import"./axios-BrYcoDUu.js";const je=le().shape({reminderDate:p().required("Apartment Type is required"),reminderTime:p().required("Apartment Category is required"),remarks:p().required("Apartment Status is required")});function ye({open:d,setOpen:i,title:n,aptData:m}){const l=ae({}),{user:o}=N(),s=()=>i(!d),a=ie({resolver:de(je),defaultValues:{reminderDate:"",reminderTime:"",remarks:""}}),h=async r=>{se("Are you sure?","Please confirm",async()=>{try{const c=await l.mutateAsync({api:v.postReminder,data:{...r,userId:o==null?void 0:o.id,apartmentId:m}});c.data.status?(g.success(c.data.msg),i(!1)):g.error(c.data.msg)}catch(c){g.error(c.msg)}})};return e.jsxs("div",{children:[d&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(d?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:n!=null?n:"Add Reminder"}),e.jsxs("button",{style:{background:"none"},onClick:s,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(re,{methods:a,onSubmit:a.handleSubmit(h),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(ee,{isRequired:!0,name:"reminderDate",label:"Reminder Date",type:"date",min:new Date().toISOString().split("T")[0]})}),e.jsx("div",{children:e.jsx(ee,{isRequired:!0,name:"reminderTime",label:"Reminder Time",type:"time"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(ne,{name:"remarks",label:"Remarks",isRequired:!0})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(te,{disabled:l.isLoading,size:"sm",type:"button",onClick:s,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(oe,{disabled:l.isLoading,isLoading:l.isLoading,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]})})]})})})]})}const be=[{value:"Door Closed",label:"Door Closed"},{value:"No Response from CitizenCitizen Will Pay Next Month",label:"No Response from Citizen"},{value:"Citizen Will Pay Next Day",label:"Citizen Will Pay Next Day"},{value:"Citizen Will Pay Next Month",label:"Citizen Will Pay Next Month"},{value:"Refuses to Pay",label:"Refuses to Pay"},{value:"other",label:"Other"}],Ne=le().shape({denyList:p().required("Deny List is required"),latitude:p(),longitude:p(),remarks:p().required("Remarks is required")});function ve({open:d,setOpen:i,title:n,aptData:m}){const l=ae({}),{user:o}=N(),{coords:s,isGeolocationEnabled:a}=xe(),h=()=>i(!d),r=ie({resolver:de(Ne),defaultValues:{denyList:"",latitude:"",longitude:"",remarks:""}}),c=async f=>{se("Are you sure?","Please confirm",async()=>{try{const x=await l.mutateAsync({api:v.postPaymentDeny,data:{...f,userId:o==null?void 0:o.id,apartmentId:m}});x.data.status?(g.success(x.data.msg),i(!1)):g.error(x.data.msg)}catch(x){g.error(x.msg)}})};return b.useEffect(()=>{m&&(r.setValue("latitude",String(s==null?void 0:s.latitude)),r.setValue("longitude",String(s==null?void 0:s.longitude))),r.watch("denyList")!=="other"&&r.setValue("remarks",r.watch("denyList")),r.watch("denyList")==="other"&&r.setValue("remarks","")},[r.watch("denyList")]),e.jsxs("div",{children:[d&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(d?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:n!=null?n:"Add Deny"}),e.jsxs("button",{style:{background:"none"},onClick:h,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:a?e.jsxs(re,{methods:r,onSubmit:r.handleSubmit(c),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(ue,{name:"denyList",label:"Deny List",data:be,isRequired:!0})}),r.watch("denyList")==="other"&&e.jsx("div",{className:"col-span-2",children:e.jsx(ne,{name:"remarks",label:"Remarks",isRequired:!0})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(te,{size:"sm",disabled:l.isLoading,type:"button",onClick:h,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(oe,{isLoading:l.isLoading,disabled:l.isLoading,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]}):e.jsx("div",{className:"text-center py-4",children:e.jsx("h1",{className:"text-sm font-semibold text-red-600",children:"Please enable location to continue"})})})]})})})]})}const we=[{title:"View & Pay",icon:"/icons/grid.svg",link:"/deoghar-app/apartment-payment",bg:"bg-gradient-to-tl from-[#EEF2FF] to-[#9CC6F7]",accessMenu:["4","5"]},{title:"Transaction History",icon:"/icons/history.svg",link:"/deoghar-app/tran-history",bg:"bg-gradient-to-tl from-[#FFEFE4] to-[#FFBC96]",accessMenu:["4","5"]},{title:"Geo Map",icon:"/icons/location.svg",link:"/deoghar-app/apt-geo-map",bg:"bg-gradient-to-tl from-[#E4F6FF] to-[#9ADCFF]",accessMenu:["4","5"]},{title:"Reminder",icon:"/icons/bells.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FEE8FF] to-[#E4AFFF]",accessMenu:["4","5"]},{title:"Deny",icon:"/icons/deniel2.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4","5"]},{title:"Geo Tagging",icon:"/icons/location.svg",link:"/deoghar-app/apt-geo-tagging",bg:"bg-gradient-to-tl from-[#E1FFC3] to-[#C9F98D]",accessMenu:["4","5"]},{title:"All Flats List",icon:"/icons/flats2.svg",link:"/deoghar-app/all-flats-list",bg:"bg-gradient-to-tl from-[#EEEFF2] to-[#D4D8DE]",accessMenu:["4","5"]},{title:"Update Apartment",icon:"/icons/update.svg",link:"/deoghar-app/update-apartment",bg:"bg-gradient-to-tl from-[#EAD9FF] to-[#C291FF]",accessMenu:["4"]},{title:"Deactivate Apartment",icon:"/icons/deactivate.svg",link:"/deoghar-app/deactivate-apt",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4"]},{title:"Payment Adjustment",icon:"/icons/cur.svg",bg:"bg-gradient-to-tl from-[#FFF5CE] to-[#FCD451]",link:"/deoghar-app/demand-apt-adjust",accessMenu:["4"]},{title:"Print Demand",icon:"/icons/denial.svg",bg:"bg-gradient-to-tl from-[#FFF5CE] to-[#FCD451]",link:"/deoghar-app/print-demand",accessMenu:["4"]}];function ze(){var h,r,c,f,x,w,F,k,A,C,E,L,R,M,$,S,P,T,q,z,I,B,O,V,W,D,G,H,_,U,Y,J,K;const{user:d}=N(),i=he(),[n,m]=b.useState(!1),[l,o]=b.useState(!1),{id:s}=pe(),a=me({api:"".concat(v.getApartmentDetailsById,"/").concat(s),options:{enabled:!!s}});return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(u,{children:e.jsxs(X,{children:[e.jsx(y,{}),e.jsx(y,{}),e.jsx(y,{})]})})}):e.jsxs(ge,{title:"Apartment Action",children:[n&&e.jsx(ye,{open:n,setOpen:m,aptData:(h=a==null?void 0:a.data)==null?void 0:h.data[0].id}),l&&e.jsx(ve,{open:l,setOpen:o,aptData:(r=a==null?void 0:a.data)==null?void 0:r.data[0].id}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(j,{src:"/assets/image/apartment.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Apartment Action"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management reminder list."})]})]}),e.jsx(Z,{}),e.jsx(u,{children:e.jsx(X,{children:e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(f=(c=a==null?void 0:a.data)==null?void 0:c.data[0])==null?void 0:f.apartmentCode})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(w=(x=a==null?void 0:a.data)==null?void 0:x.data[0])==null?void 0:w.apartmentName})}),((k=(F=a==null?void 0:a.data)==null?void 0:F.data[0])==null?void 0:k.mobileNo)!=null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(C=(A=a==null?void 0:a.data)==null?void 0:A.data[0])==null?void 0:C.mobileNo})})]}),((E=a==null?void 0:a.data)==null?void 0:E.totalAptMonthlyDemand)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(L=a==null?void 0:a.data)==null?void 0:L.totalAptMonthlyDemand})})]}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(R=a==null?void 0:a.data)==null?void 0:R.totalAptDemand})}),((M=a==null?void 0:a.data)==null?void 0:M.totalAptDemand)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(S=($=a==null?void 0:a.data)==null?void 0:$.data[0])==null?void 0:S.demandFrom})})]}),((P=a==null?void 0:a.data)==null?void 0:P.totalAptDemand)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(q=(T=a==null?void 0:a.data)==null?void 0:T.data[0])==null?void 0:q.demandUpto})})]}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(I=(z=a==null?void 0:a.data)==null?void 0:z.data)==null?void 0:I.length})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(O=(B=a==null?void 0:a.data)==null?void 0:B.data[0])==null?void 0:O.address})}),((W=(V=a==null?void 0:a.data)==null?void 0:V.data[0])==null?void 0:W.applyDate)!=null&&((G=(D=a==null?void 0:a.data)==null?void 0:D.data[0])==null?void 0:G.applyDate)!=""&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apply date:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(_=(H=a==null?void 0:a.data)==null?void 0:H.data[0])==null?void 0:_.applyDate})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apply By:"})}),e.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:e.jsx("h1",{className:"text-xs",children:(Y=(U=a==null?void 0:a.data)==null?void 0:U.data[0])==null?void 0:Y.applyBy})})]})]})})}),e.jsx(Z,{}),((K=(J=a==null?void 0:a.data)==null?void 0:J.data[0])==null?void 0:K.consumerNo)!=null?e.jsx("div",{className:"flex flex-wrap",children:we.map((t,ce)=>t.accessMenu.includes("".concat(d==null?void 0:d.userTypeId))&&e.jsxs("div",{className:"flex items-center flex-col cursor-pointer mt-4 w-1/3",children:[e.jsx(u,{onClick:()=>{var Q;t.title=="View & Pay"&&i("".concat(t.link,"/").concat(s)),t.title=="All Flats List"&&i("".concat(t.link,"/").concat(s)),t.title=="Transaction History"&&i("".concat(t.link,"?id=").concat(s,"&tranType=apartmentId")),t.title=="Update Apartment"&&i("".concat(t.link,"/").concat(s)),t.title=="Payment Adjustment"&&i("".concat(t.link,"/").concat(s)),t.title=="Deactivate Apartment"&&i("".concat(t.link,"/").concat(s)),t.title=="Geo Tagging"&&i("".concat(t.link,"/").concat(s)),t.title=="Geo Map"&&i("".concat(t.link,"/").concat(s)),t.title=="Print Demand"&&(((Q=a==null?void 0:a.data)==null?void 0:Q.totalAptDemand)>0?i("".concat(t.link,"/").concat(s)):g.error("Outstanding demand is 0, so you can not print demand.")),t.title=="Reminder"&&m(!0),t.title=="Deny"&&o(!0)},className:"w-[52px] h-[52px] flex items-center justify-center bg-[#12743B] rounded-2xl",children:e.jsx(j,{src:t.icon,alt:"icon"})}),e.jsx("p",{className:"text-xs font-bold text-gray-800 mt-2 text-center",children:t.title})]},ce+1))}):e.jsx("div",{className:"grid grid-cols-1 gap-4",children:e.jsx(u,{className:"bg-gradient-to-tl from-[#EEEFF2] to-[#D4D8DE] h-full w-full px-2",onClick:()=>{i("/deoghar-app/add-flat?id=".concat(s))},children:e.jsxs("div",{className:"py-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(j,{src:"/assets/image/apartment.png",alt:"Avatar",className:"overflow-hidden w-10 h-10"})}),e.jsx(fe,{className:"text-xs text-center mt-1",children:"Add Flat"})]})})})]})]})}export{ze as default};