import{g as v,j as s}from"./index-Ux8cKTtA.js";import{P as u}from"./index-DnIm5lsL.js";import{C as A,b as I}from"./card-CH6lMluf.js";import{I as G}from"./Image-9A3VGZZW.js";import{b as w,a as C}from"./useCustomQuery-hBYjSbYL.js";import{S}from"./separator-BmGOUraz.js";import{S as t}from"./SkeletonLoader-CrQWQg3K.js";import{G as P}from"./index-C5b1UAoW.js";import{f as L}from"./router-DQohkvhc.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";function J(){var r,i,o,n,l,x,m,c,p,h,g,j,f,N,b,y;const{id:d}=L(),a=w({api:`${v.getApartmentDetailsById}/${d}`,options:{enabled:!!d}}),e=C({api:`${v.getGeoLocation}`,config:{apartmentId:d},options:{enabled:!!((i=(r=a==null?void 0:a.data)==null?void 0:r.data[0])!=null&&i.id)}});return a!=null&&a.isLoading?s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx(A,{children:s.jsxs(I,{children:[s.jsx(t,{}),s.jsx(t,{}),s.jsx(t,{})]})})}):s.jsx(u,{title:"GeoMap",children:s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(G,{src:"/assets/image/category.png",alt:"GeoMap",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"GeoMap"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),s.jsx(S,{}),s.jsx(A,{children:s.jsx(I,{children:s.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(n=(o=a==null?void 0:a.data)==null?void 0:o.data[0])==null?void 0:n.apartmentCode})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(x=(l=a==null?void 0:a.data)==null?void 0:l.data[0])==null?void 0:x.apartmentName})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(c=(m=a==null?void 0:a.data)==null?void 0:m.data[0])==null?void 0:c.mobileNo})})]})})}),s.jsx(S,{}),s.jsx(P,{latId:(h=(p=e==null?void 0:e.data)==null?void 0:p.data)==null?void 0:h.latitude,longId:(j=(g=e==null?void 0:e.data)==null?void 0:g.data)==null?void 0:j.longitude,holdingNo:"Holding No: 1234",propAddress:"Address: Deoghar",property_id:"Property Id: 1234",centerMap:{lat:String((N=(f=e==null?void 0:e.data)==null?void 0:f.data)==null?void 0:N.latitude),lng:String((y=(b=e==null?void 0:e.data)==null?void 0:b.data)==null?void 0:y.longitude),id:"1234",address:"Deoghar",holding:"Holding No: 1234",realImg:"https://google.com"},handleSingleView:()=>{}})]})})}export{J as default};