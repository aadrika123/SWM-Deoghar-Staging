import{j as e,$ as S,d as w,C as $,_ as p}from"./index-CKexVv7f.js";import{d as y,h as E,r as V}from"./router-CTqkcgir.js";import{u as F,o as R,F as U,S as D,c as T,a as d}from"./SelectField-CJOU9OFV.js";import{u as W}from"./useComonData-Mkhus79Y.js";import{R as o}from"./RHFTextField-D3c84PJ-.js";import{g as z}from"./services-KQnp_8oA.js";import{B as M}from"./ButtonLoading-DeNqAQPL.js";import{u as _,b as G}from"./useCustomQuery-Bm7Wew5S.js";import{R as H}from"./RotatingLoader-D1RfYI6f.js";import{P as k}from"./index-BHeHt4x3.js";import{I as J}from"./Image-CXKymwKi.js";import{C as K,b as O}from"./card-0XrvENI5.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-B8PrYXwh.js";const Q=T().shape({aptName:d().required("Apartment Name is required"),wardNo:d().required("Ward No is required"),aptCode:d().required("Apartment Type is required"),aptAddress:d().required("Apartment Category is required"),pinCode:d().required("Apartment Status is required")});function me(){var l,c,u,x;const q=y(),n=_({}),{getAllUser:m}=W(),{id:i}=E(),a=G({api:`${(l=w)==null?void 0:l.getApartmentById}?id=${i}`,options:{enabled:!!i}}),r=F({resolver:R(Q),defaultValues:{aptName:"",wardNo:"",aptCode:"",aptAddress:"",pinCode:""}});V.useEffect(()=>{var s,t,g,h,f,j,N,A,C,b,v;(s=a==null?void 0:a.data)!=null&&s.data&&(r.setValue("aptName",((g=(t=a==null?void 0:a.data)==null?void 0:t.data)==null?void 0:g.aptName)??""),r.setValue("wardNo",((f=(h=a==null?void 0:a.data)==null?void 0:h.data)==null?void 0:f.wardNo)??""),r.setValue("aptCode",((N=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:N.aptCode)??""),r.setValue("aptAddress",((C=(A=a==null?void 0:a.data)==null?void 0:A.data)==null?void 0:C.aptAddress)??""),r.setValue("pinCode",((v=(b=a==null?void 0:a.data)==null?void 0:b.data)==null?void 0:v.pinCode)??""))},[a]);const P=async s=>{$("Are you sure to pay?","Please confirm",async()=>{try{const t=await n.mutateAsync({api:w.updateApartment,data:{apartmentId:i,apartmentName:s.aptName,wardNo:s.wardNo,apartmentCode:s.aptCode,address:s.aptAddress}});t.data.status?(p.success(t.data.msg),q(`/deoghar-app/apartment-actions/${i}`)):p.error(t.data.msg)}catch(t){p.error(z(t))}})};return e.jsx(k,{title:"Update Apartment",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(J,{src:"/assets/image/category.png",alt:"Update Apartment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Update Apartment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"solid west management system"})]})]}),e.jsx(S,{}),e.jsx(K,{children:e.jsx(O,{children:e.jsx("div",{className:"p-4 md:p-5",children:a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx(H,{})}):e.jsxs(U,{methods:r,onSubmit:r.handleSubmit(P),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(o,{name:"aptName",label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(D,{name:"wardNo",label:"Ward No",selectedText:"Select Ward No",data:((x=(u=(c=m==null?void 0:m.data)==null?void 0:c.data[0].ulbDetails[0])==null?void 0:u.wards)==null?void 0:x.map(s=>({label:String(s),value:String(s)})))??[]})}),e.jsx("div",{children:e.jsx(o,{name:"aptCode",label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{children:e.jsx(o,{name:"aptAddress",label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(o,{type:"number",name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})})]}),e.jsx("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:e.jsx(M,{isLoading:n.isPending,disabled:n.isPending,size:"sm",type:"submit",className:"w-20",children:"Update"})})]})})})})]})})}export{me as default};