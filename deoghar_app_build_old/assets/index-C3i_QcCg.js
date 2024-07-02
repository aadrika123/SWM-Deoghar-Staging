import{j as e,$,g as v,_ as n}from"./index-Ux8cKTtA.js";import{b as y,f as E,r as P}from"./router-DQohkvhc.js";import{a as V,o as F,F as R,S as U,c as D,b as d}from"./SelectField-CND4v6Ne.js";import{u as T}from"./useComonData-HMVpKrP9.js";import{R as i}from"./RHFTextField-BwIgSdwd.js";import{g as W}from"./services-KQnp_8oA.js";import{B as z}from"./button-Cz3YbAmN.js";import{u as M,b as _}from"./useCustomQuery-hBYjSbYL.js";import{R as G}from"./RotatingLoader-B7lMDfv_.js";import{P as H}from"./index-DnIm5lsL.js";import{I as k}from"./Image-9A3VGZZW.js";import{C as J,b as K}from"./card-CH6lMluf.js";import{C as O}from"./index-D2HPHwkM.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";import"./module-DXGYLL_q.js";const Q=D().shape({aptName:d().required("Apartment Name is required"),wardNo:d().required("Ward No is required"),aptCode:d().required("Apartment Type is required"),aptAddress:d().required("Apartment Category is required"),pinCode:d().required("Apartment Status is required")});function pe(){var p,l,c,u;const w=y(),q=M({}),{getAllUser:m}=T(),{id:o}=E(),a=_({api:`${(p=v)==null?void 0:p.getApartmentById}?id=${o}`,options:{enabled:!!o}}),r=V({resolver:F(Q),defaultValues:{aptName:"",wardNo:"",aptCode:"",aptAddress:"",pinCode:""}});P.useEffect(()=>{var s,t,x,f,g,h,j,N,A,C,b;(s=a==null?void 0:a.data)!=null&&s.data&&(r.setValue("aptName",((x=(t=a==null?void 0:a.data)==null?void 0:t.data)==null?void 0:x.aptName)??""),r.setValue("wardNo",((g=(f=a==null?void 0:a.data)==null?void 0:f.data)==null?void 0:g.wardNo)??""),r.setValue("aptCode",((j=(h=a==null?void 0:a.data)==null?void 0:h.data)==null?void 0:j.aptCode)??""),r.setValue("aptAddress",((A=(N=a==null?void 0:a.data)==null?void 0:N.data)==null?void 0:A.aptAddress)??""),r.setValue("pinCode",((b=(C=a==null?void 0:a.data)==null?void 0:C.data)==null?void 0:b.pinCode)??""))},[a]);const S=async s=>{O("Are you sure to pay?","Please confirm",async()=>{try{const t=await q.mutateAsync({api:v.updateApartment,data:{apartmentId:o,apartmentName:s.aptName,wardNo:s.wardNo,apartmentCode:s.aptCode,address:s.aptAddress}});t.data.status?(n.success(t.data.msg),w(`/deoghar-app/apartment-actions/${o}`)):n.error(t.data.msg)}catch(t){n.error(W(t))}})};return e.jsx(H,{title:"Update Apartment",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(k,{src:"/assets/image/category.png",alt:"Update Apartment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Update Apartment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"solid west management system"})]})]}),e.jsx($,{}),e.jsx(J,{children:e.jsx(K,{children:e.jsx("div",{className:"p-4 md:p-5",children:a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx(G,{})}):e.jsxs(R,{methods:r,onSubmit:r.handleSubmit(S),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(i,{name:"aptName",label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(U,{name:"wardNo",label:"Ward No",selectedText:"Select Ward No",data:((u=(c=(l=m==null?void 0:m.data)==null?void 0:l.data[0].ulbDetails[0])==null?void 0:c.wards)==null?void 0:u.map(s=>({label:String(s),value:String(s)})))??[]})}),e.jsx("div",{children:e.jsx(i,{name:"aptCode",label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{children:e.jsx(i,{name:"aptAddress",label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(i,{type:"number",name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})})]}),e.jsx("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:e.jsx(z,{size:"sm",type:"submit",className:"w-20",children:"Update"})})]})})})})]})})}export{pe as default};