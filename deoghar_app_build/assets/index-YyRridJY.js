import{j as e,B as T,g as R,e as P,h as W,I as $}from"./index-DYaVSqIe.js";import{u as B,r as F}from"./router-DWxcwEcu.js";import{C as E,b as I}from"./card-Bf5yCQTz.js";import{P as L}from"./index-LN84eF7k.js";import{P as k}from"./index-Dh77cC6v.js";import{u as q,F as z,c as H,a as n,o as V}from"./switch-bajEgHlu.js";import{R as G}from"./RHFTextField-61HZI6Uw.js";import{R as u}from"./SelectField-Bo8RYg9K.js";import{u as _,a as J}from"./useComonData-2Ne9JpIX.js";import{S as c}from"./separator-BjDD7lkT.js";import"./headlessui-DlCzxctq.js";import"./axios-BrYcoDUu.js";function K({consumerData:s}){var d,l;const i=B();return s!=null&&s.isFetching?e.jsx(e.Fragment,{children:Array.from({length:10}).map((a,m)=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"animate-pulse flex space-x-4",children:e.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})},m+1))}):e.jsx(e.Fragment,{children:s.status==="success"&&((l=(d=s==null?void 0:s.data)==null?void 0:d.data)==null?void 0:l.length)>0?s.data.data.map(a=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Consumer No :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500 w-30 truncate",children:a.consumerNo})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Consumer Name :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500 w-30 truncate",children:a.consumerName})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Ward No :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:a.wardNo})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Category :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:a.cansumerCategory})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Type :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:a.cansumerType})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Paid Status :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:a.paidStatus==="Paid"?e.jsx("span",{className:"px-2 py-1 text-xs font-semibold flex justify-start items-center border border-green-500 text-green-500 rounded-lg",children:a.paidStatus}):e.jsx("span",{className:"px-2 py-1 text-xs font-semibold flex justify-start items-center border border-red-500 text-red-500 rounded-lg",children:a.paidStatus})})]}),e.jsx(c,{}),e.jsx("div",{className:"col-span-1 w-full",children:e.jsx(T,{onClick:()=>i("/deoghar-app/consumer-actions/".concat(a.id)),variant:"outline",className:"w-full rounded-lg ",size:"sm",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-600",children:"VIEW DETAILS"})})})]})},a.id)):e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"No Data Found"})})})})}const M=H().shape({consumerCategory:n(),consumerNo:n(),consumertype:n(),wardNo:n().when("consumerNo",{is:s=>s=="",then:()=>n().required().label("Ward no"),otherwise:()=>n().notRequired().label("Ward no")})});function de(){var h,g,j,N,p,y,f,b,v,w,C,S;const{getAllUser:s}=_(),{getConsumerAddFormData:i}=J(),[d,l]=F.useState(1),[a,m]=F.useState(10),r=q({resolver:V(M),defaultValues:{consumerCategory:"0",consumerNo:"",consumertype:"",wardNo:""}}),o=R({api:P.getConsumerListByCategory,config:{consumerCategory:r.watch("consumerCategory")=="0"?"":r.watch("consumerCategory"),consumerNo:r.watch("consumerNo"),consumertype:r.watch("consumertype"),wardNo:r.watch("wardNo"),page:d,perPage:a},value:[d,l],options:{enabled:d>1||d>10}}),x=W({api:"".concat(P.getConsumerTypeByCategory,"/").concat(r.watch("consumerCategory")),options:{enabled:!!r.watch("consumerCategory")&&r.watch("consumerCategory")!="0"}}),A=async t=>{l(1),m(10),o.refetch()};return e.jsx(k,{title:"Search Consumer",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx($,{src:"/assets/icons/searchConsumer.svg",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Search Consumer"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Search consumer details here."})]})]}),e.jsx(c,{}),e.jsx(E,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:e.jsx(I,{className:"px-6 text-sm",children:e.jsx(z,{methods:r,onSubmit:r.handleSubmit(A),children:e.jsxs("div",{className:"grid",children:[e.jsx("div",{className:"mt-4",children:e.jsx(G,{name:"consumerNo",label:"Consumer No",className:"w-full"})}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{name:"wardNo",label:"Ward No",className:"w-full",data:(N=(j=(g=(h=s==null?void 0:s.data)==null?void 0:h.data[0].ulbDetails[0])==null?void 0:g.wards)==null?void 0:j.map(t=>({label:String(t),value:String(t)})))!=null?N:[]})}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{name:"consumerCategory",label:"Consumer Category",className:"w-full",data:(b=(f=(y=(p=i==null?void 0:i.data)==null?void 0:p.data)==null?void 0:y.consumerCategory)==null?void 0:f.map(t=>({label:String(t.name),value:String(t.id)})))!=null?b:[]})}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{name:"consumertype",label:"Consumer Type",className:"w-full",data:(S=(C=(w=(v=x==null?void 0:x.data)==null?void 0:v.data)==null?void 0:w.consumerTypeList)==null?void 0:C.map(t=>({label:String(t.name),value:String(t.id)})))!=null?S:[]})}),e.jsx("div",{className:"flex justify-end mt-5",children:e.jsx(T,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24 bg-green-500 hover:bg-green-600",children:"Search"})})]})})})}),e.jsx(c,{className:"mt-2 mb-2"}),e.jsx(K,{consumerData:o}),(o==null?void 0:o.status)==="success"&&e.jsxs(e.Fragment,{children:[e.jsx(L,{page:d,perPage:a,totalPage:10,setPage:t=>l(t)}),e.jsx(c,{})]})]})})}export{de as default};