import{g as m,j as e,B as ie,F as le,_ as re}from"./index-Cn5xDO1F.js";import{h as me}from"./moment-BjLXg0w5.js";import{a as ye,o as ue,F as be,S as oe,c as fe,b as i}from"./SelectField-3rS98xnU.js";import{R as l}from"./RHFTextField-BuaeBQTq.js";import{B as ge}from"./button-BUjwbGzf.js";import{b as ve,f as we}from"./router-DQohkvhc.js";import{P as Me}from"./index-CivxP6ki.js";import{C as o,b as c}from"./card-C8izw3rS.js";import{T as Ce,a as Ue,b as ce,c as p,d as Pe,e as j,H as Ae}from"./table-D6IxU3fa.js";import{u as Se,b as qe,a as xe}from"./useCustomQuery-DkwPn-t_.js";import{S as N}from"./separator-D7xTCwRY.js";import{S as y}from"./SkeletonLoader-KrJJX8dt.js";import{I as De}from"./Image-0tXDnn-F.js";import{C as ke}from"./index-C5qIt-LQ.js";import{O as Ie}from"./OverLayLoader-Dc6F3XSi.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";import"./module-DICVzz-u.js";const Re=fe().shape({paymentMode:i().required("Payment mode is required"),paidUpto:i().required("Payment amount is required"),bankName:i().when("paymentMode",{is:"Dd",then:()=>i()}),branchName:i().when("paymentMode",{is:"Dd",then:()=>i()}),chequeDate:i().when("paymentMode",{is:"Dd",then:()=>i()}),chequeNo:i().when("paymentMode",{is:"Dd",then:()=>i()})});function Ze(){var u,b,f,g,v,w,M,C,U,P,A,S,q,D,k,I,R,_,B,F,T,L,Y,O,E,H,$,W,Q,V,J,K;const he=ve(),{mutateAsync:pe,isPending:je}=Se({}),{id:t}=we(),a=qe({api:`${m.getConsumerDetailsById}/${t}`,options:{enabled:!!t}}),r=ye({resolver:ue(Re)}),x=xe({api:m.getPaymentData,config:{consumerId:t},options:{enabled:!!t}}),n=xe({api:m.getCalculatedAmount,config:{consumerId:t,payUpto:r.watch("paidUpto")},value:[r.watch("paidUpto")],options:{enabled:!!r.watch("paidUpto")&&!!t}}),Ne=async s=>{ke("Are you sure to pay?","Please confirm",async()=>{var h,z,G,X,Z,ee,ae,se,de,te,ne;try{if((s==null?void 0:s.paymentMode)=="Card"){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE",keyData:{amount:(z=(h=n.data)==null?void 0:h.data)==null?void 0:z.totaldemand,consumerId:t,paidUpto:s.paidUpto,paymentMode:s.paymentMode,api:ie+m.postPayment,token:localStorage.getItem("token"),redirectUrl:le+"/deoghar-app/payment-receipt",payload:{consumerId:t,paidAmount:(G=n.data)==null?void 0:G.data.totaldemand,paymentMode:s.paymentMode,paidUpto:s.paidUpto}}}));return}if((s==null?void 0:s.paymentMode)=="QR"){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE_WITH_QR",keyData:{amount:(Z=(X=n.data)==null?void 0:X.data)==null?void 0:Z.totaldemand,consumerId:t,paidUpto:s.paidUpto,paymentMode:s.paymentMode,api:ie+m.postPayment,token:localStorage.getItem("token"),redirectUrl:le+"/deoghar-app/payment-receipt",payload:{consumerId:t,paidAmount:(ee=n.data)==null?void 0:ee.data.totaldemand,paymentMode:s.paymentMode,paidUpto:s.paidUpto}}}));return}else{const d=await pe({api:m.postPayment,data:s.paymentMode==="Cash"?{consumerId:t,paidAmount:(ae=n.data)==null?void 0:ae.data.totaldemand,paymentMode:s.paymentMode,paidUpto:s.paidUpto}:{consumerId:t,paidAmount:(se=n.data)==null?void 0:se.data.totaldemand,paymentMode:s.paymentMode,paidUpto:s.paidUpto,bankName:s.bankName,branchName:s.branchName,chequeNo:s.chequeNo,chequeDate:s.chequeDate}});(de=d==null?void 0:d.data)!=null&&de.status?(re.success(d==null?void 0:d.data.msg),he(`/deoghar-app/payment-receipt/${(ne=(te=d==null?void 0:d.data)==null?void 0:te.data)==null?void 0:ne.transactionNo}`,{replace:!0})):re.error(d==null?void 0:d.data.msg)}}catch{}})};return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(o,{children:e.jsxs(c,{children:[e.jsx(y,{}),e.jsx(y,{}),e.jsx(y,{})]})})}):e.jsxs(Me,{title:"Consumer Payment",children:[je&&e.jsx(Ie,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(De,{src:"/assets/image/category.png",alt:"Consumer Payment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Consumer Payment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Consumer payment details here."})]})]}),e.jsx(N,{}),e.jsx(o,{children:e.jsx(c,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer No:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(b=(u=a==null?void 0:a.data)==null?void 0:u.data[0])==null?void 0:b.consumerNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(g=(f=a==null?void 0:a.data)==null?void 0:f.data[0])==null?void 0:g.consumerName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Mobile:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(w=(v=a==null?void 0:a.data)==null?void 0:v.data[0])==null?void 0:w.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(C=(M=a==null?void 0:a.data)==null?void 0:M.data[0])==null?void 0:C.monthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(P=(U=a==null?void 0:a.data)==null?void 0:U.data[0])==null?void 0:P.totalDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(S=(A=a==null?void 0:a.data)==null?void 0:A.data[0])==null?void 0:S.demandUpto})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(D=(q=a==null?void 0:a.data)==null?void 0:q.data[0])==null?void 0:D.demandFrom})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer type:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(I=(k=a==null?void 0:a.data)==null?void 0:k.data[0])==null?void 0:I.cansumerType})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(_=(R=a==null?void 0:a.data)==null?void 0:R.data[0])==null?void 0:_.Address})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apply Date:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=(B=a==null?void 0:a.data)==null?void 0:B.data[0])==null?void 0:F.applyDate})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apply By:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(L=(T=a==null?void 0:a.data)==null?void 0:T.data[0])==null?void 0:L.applyBy})})]})})}),e.jsx(N,{}),((E=(O=(Y=a==null?void 0:a.data)==null?void 0:Y.data[0])==null?void 0:O.activeDemandDetails)==null?void 0:E.length)>0?e.jsxs(e.Fragment,{children:[" ",e.jsx(o,{children:e.jsx(c,{children:e.jsxs("div",{className:"py-6",children:[e.jsx("div",{className:"px-4 mb-2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand Detail"})}),e.jsx(N,{}),e.jsx("div",{children:e.jsxs(Ce,{children:[e.jsx(Ue,{children:e.jsxs(ce,{children:[e.jsx(p,{children:"Demand from"}),e.jsx(p,{children:"Demand upto"}),e.jsx(p,{children:"Amount"}),e.jsx(p,{children:"Status"})]})}),e.jsx(Pe,{children:(W=($=(H=a==null?void 0:a.data)==null?void 0:H.data[0])==null?void 0:$.activeDemandDetails)==null?void 0:W.map((s,h)=>e.jsxs(ce,{children:[e.jsx(j,{children:me(s.payment_from).format("DD-MMM-YYYY")}),e.jsx(j,{children:me(s.payment_to).format("DD-MMM-YYYY")}),e.jsx(j,{children:s.total_tax}),e.jsx(j,{children:s.paid_status==0?e.jsx("span",{className:"text-red-500",children:"Unpaid"}):e.jsx("span",{className:"text-green-500",children:"Paid"})})]},h+1))})]})})]})})}),e.jsx(N,{}),e.jsx(o,{"x-chunk":"dashboard-05-chunk-4",children:e.jsx(c,{children:e.jsxs(be,{methods:r,onSubmit:r.handleSubmit(Ne),children:[e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{children:e.jsx(oe,{name:"paidUpto",label:"Payment Amount",className:"w-full",data:((J=(V=(Q=x==null?void 0:x.data)==null?void 0:Q.data)==null?void 0:V.demand)==null?void 0:J.map(s=>({label:String(s.payment_to),value:String(s.payment_to)})))??[]})}),e.jsx("div",{children:e.jsx(oe,{name:"paymentMode",label:"Payment Mode",className:"w-full",data:[{label:"Cash",value:"Cash"},{label:"Cheque",value:"Cheque"},{label:"DD",value:"Dd"},{label:"Card",value:"Card"},{label:"QR",value:"QR"}]})}),{Cheque:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(l,{name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(l,{name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(l,{name:"chequeNo",label:"Cheque Number",className:"w-full"})}),e.jsx("div",{children:e.jsx(l,{type:"date",name:"chequeDate",label:"Cheque Date",className:"w-full"})})]}),Dd:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(l,{name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(l,{name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(l,{name:"chequeNo",label:"DD Number",className:"w-full"})}),e.jsx("div",{children:e.jsx(l,{name:"chequeDate",type:"date",label:"DD Date",className:"w-full"})})]})}[r.watch("paymentMode")]]}),e.jsx("div",{className:"grid grid-cols-1 gap-6 mt-4",children:e.jsxs(ge,{type:"submit",className:"mx-auto",disabled:n.isLoading||x.isLoading,children:[e.jsx(Ae,{className:"mr-2 h-4 w-4"}),n!=null&&n.isLoading?"Calculating...":`Pay Now ₹ ${((K=n.data)==null?void 0:K.data.totaldemand)??0}`]})})]})})})]}):e.jsx(o,{children:e.jsx(c,{children:e.jsx("div",{className:"py-2 flex justify-center items-center",children:e.jsx("h1",{className:"text-base font-semibold text-center text-green-600",children:"You have no outstanding demand"})})})})]})]})}export{Ze as default};