import{j as a,d as S,C as M,_ as d}from"./index-DBRziMuY.js";import{u as $,o as I,F as B,c as q,a as E}from"./SelectField-DXQKsmso.js";import{g as L}from"./services-KQnp_8oA.js";import{R as T}from"./RHFTextArea-Bwm0b87m.js";import{B as _}from"./button-DHxVcdNT.js";import{d as z,h as H}from"./router-CTqkcgir.js";import{P as O}from"./index-DsnVnRtf.js";import{C as r,b as i}from"./card-COjADVbK.js";import{I as U}from"./Image-DHd-ujsl.js";import{u as V,b as G}from"./useCustomQuery-CrVOwswB.js";import{S as C}from"./separator-DHtuCtTX.js";import{S as n}from"./SkeletonLoader-DX-Q_nZS.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";const J=q().shape({remarks:E().required("Remark is required")});function na(){var l,m,c,o,h,j,p,v,f,g,N,b,y,u,A,k;const P=z(),R=V({}),{id:t}=H(),s=G({api:`${S.getApartmentDetailsById}/${t}`,options:{enabled:!!t}}),x=$({resolver:I(J),defaultValues:{remarks:""}}),w=async F=>{M("Are you sure?","Please confirm",async()=>{try{const e=await R.mutateAsync({api:S.apartmentDeactivate,data:{apartmentId:t,remarks:F.remarks}});e.data.status?(d.success(e.data.msg),P(`/deoghar-app/apartment-actions/${t}`)):d.error(e.data.msg)}catch(e){d.error(L(e))}})};return s!=null&&s.isLoading?a.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:a.jsx(r,{children:a.jsxs(i,{children:[a.jsx(n,{}),a.jsx(n,{}),a.jsx(n,{})]})})}):a.jsx(O,{title:"Deactivate Apartment",children:a.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[a.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[a.jsx(U,{src:"/assets/image/category.png",alt:"Deactivate Apartment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),a.jsxs("div",{className:"",children:[a.jsx("h1",{className:"font-semibold",children:"Deactivate Apartment"}),a.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),a.jsx(C,{}),a.jsx(r,{children:a.jsx(i,{children:a.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(m=(l=s==null?void 0:s.data)==null?void 0:l.data[0])==null?void 0:m.apartmentCode})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(o=(c=s==null?void 0:s.data)==null?void 0:c.data[0])==null?void 0:o.apartmentName})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(j=(h=s==null?void 0:s.data)==null?void 0:h.data[0])==null?void 0:j.mobileNo})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(p=s==null?void 0:s.data)==null?void 0:p.totalAptMonthlyDemand})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(v=s==null?void 0:s.data)==null?void 0:v.totalAptDemand})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(g=(f=s==null?void 0:s.data)==null?void 0:f.data[0])==null?void 0:g.demandFrom})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(b=(N=s==null?void 0:s.data)==null?void 0:N.data[0])==null?void 0:b.demandUpto})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(u=(y=s==null?void 0:s.data)==null?void 0:y.data)==null?void 0:u.length})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(k=(A=s==null?void 0:s.data)==null?void 0:A.data[0])==null?void 0:k.address})})]})})}),a.jsx(C,{}),a.jsx(r,{children:a.jsx(i,{children:a.jsx(B,{methods:x,onSubmit:x.handleSubmit(w),children:a.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[a.jsx("div",{children:a.jsx(T,{name:"remarks",label:"Remarks"})}),a.jsx("div",{className:"flex justify-end",children:a.jsx(_,{type:"submit",size:"sm",variant:"destructive",children:"Deactivate"})})]})})})})]})})}export{na as default};