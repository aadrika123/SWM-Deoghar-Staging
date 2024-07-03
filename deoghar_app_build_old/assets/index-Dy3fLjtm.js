import{g as k,j as e,d as U,_ as l,C as H}from"./index-DDBl9555.js";import{u as J,o as K,F as Q,c as W,e as X,a as $}from"./SelectField-JgfnMCYN.js";import{R as o}from"./RHFTextField-DObLdURv.js";import{r as Y}from"./resizeImage-Bbgb61Gn.js";import{B as Z}from"./button-C237c5Ap.js";import{d as D,r as ee,h as se}from"./router-CTqkcgir.js";import{P as ae}from"./index-rhBaYdYa.js";import{C as c,b as x}from"./card-CjYhmd1s.js";import{I as E}from"./Image-Cn_wY8YA.js";import{u as te,b as de}from"./useCustomQuery-Drtt0bmr.js";import{S as m}from"./separator-BqncX2Xy.js";import{S as h}from"./SkeletonLoader-DRWOXZAj.js";import{O as ie}from"./OverLayLoader-BABs976A.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-C_OdpX1i.js";const re=W().shape({photo:X().required("Photo is required"),longitude:$().required("Longitude is required"),latitude:$().required("Latitude is required")});function Ce(){var p,u,f,N,b,v,y,C,L,S,w,F,P,T,G,I,R,q,A;const j=te({}),B=D(),[g,M]=ee.useState(""),{coords:r,isGeolocationEnabled:V}=k(),{id:n}=se(),s=de({api:`${U.getConsumerDetailsById}/${n}`,options:{enabled:!!n}}),t=J({resolver:K(re),defaultValues:{photo:null,longitude:"",latitude:""}}),z=async d=>{if(!V){l.error("Please enable your location");return}const a=new FormData;a.append("photo",d.photo),a.append("latitude",d.latitude),a.append("longitude",d.longitude),a.append("consumerId",String(n)),H("Are you sure?","Please confirm",async()=>{try{const i=await j.mutateAsync({api:U.postGeoTagging,data:a});i.data.status?(l.success(i.data.msg),B(`/deoghar-app/consumer-actions/${n}`)):l.error(i.data.msg)}catch(i){l.error(i.msg)}})},_=async d=>{const a=d.target.files[0];if(!a)return;const i=await Y(a),O=new File([i],a==null?void 0:a.name,{type:"image/*"});t.setValue("photo",O),t.setValue("latitude",String(r==null?void 0:r.latitude)),t.setValue("longitude",String(r==null?void 0:r.longitude)),M(URL.createObjectURL(O)||URL.createObjectURL(a))};return s!=null&&s.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(c,{children:e.jsxs(x,{children:[e.jsx(h,{}),e.jsx(h,{}),e.jsx(h,{})]})})}):e.jsxs(ae,{title:"Geo Tagging Consumer",children:[j.isPending&&e.jsx(ie,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(E,{src:"/assets/image/category.png",alt:"Geo Tagging Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Geo Tagging Consumer"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=(p=s==null?void 0:s.data)==null?void 0:p.data[0])==null?void 0:u.consumerNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(N=(f=s==null?void 0:s.data)==null?void 0:f.data[0])==null?void 0:N.consumerName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(v=(b=s==null?void 0:s.data)==null?void 0:b.data[0])==null?void 0:v.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(C=(y=s==null?void 0:s.data)==null?void 0:y.data[0])==null?void 0:C.monthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(S=(L=s==null?void 0:s.data)==null?void 0:L.data[0])==null?void 0:S.totalDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=(w=s==null?void 0:s.data)==null?void 0:w.data[0])==null?void 0:F.demandFrom})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(T=(P=s==null?void 0:s.data)==null?void 0:P.data[0])==null?void 0:T.demandUpto})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(I=(G=s==null?void 0:s.data)==null?void 0:G.data)==null?void 0:I.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(q=(R=s==null?void 0:s.data)==null?void 0:R.data[0])==null?void 0:q.Address})})]})})}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsx(Q,{methods:t,onSubmit:t.handleSubmit(z),children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 py-2 mt-1",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx(o,{type:"file",label:"Photo",accept:"image/*",onChange:d=>{_(d)}}),e.jsx("p",{className:"text-xs text-red-500",children:(A=t.formState.errors.photo)==null?void 0:A.message})]}),g&&e.jsx("div",{className:"flex justify-center col-span-2",children:e.jsx(E,{src:g,alt:"Geo Tagging Consumer",className:"w-32 h-32 object-cover rounded-lg bg-gray-200 p-2"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.watch("longitude"),label:"Longitude",placeholder:"Enter Longitude"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.watch("latitude"),label:"Latitude",placeholder:"Enter Latitude"})}),e.jsx(m,{className:"col-span-2"}),e.jsx("div",{className:"flex col-span-2 justify-end w-full",children:e.jsx(Z,{className:"w-full",type:"submit",size:"sm",children:"SUBMIT"})})]})})})})]})]})}export{Ce as default};