
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="df469960-8eab-5772-a802-ac6e030da6fc")}catch(e){}}();
import{a as h}from"/catalogo/src/_shared/chunk-QKLQ5ZX4.js";import{c as w,d as x}from"/catalogo/src/_shared/chunk-PXGV7A35.js";import{a as A}from"/catalogo/src/_shared/chunk-VFNCQZGX.js";import{Y as S,Z as v,m as d,p as u,t as P,v as p,wa as b,y as T,z as m}from"/catalogo/src/_shared/chunk-C22R5JBJ.js";import{a as I}from"/catalogo/src/_shared/chunk-3LAOUQIO.js";import{e as s}from"/catalogo/src/_shared/chunk-EMG2WQY5.js";var R=s(I());var n=s(I());T();var e={storeInformationWrapper:"HMese",container:"_1DHFN",information:"mHHoX",storeInformationBox:"crMP6",storeInformationSectionTitle:"u9oIO"};var g=s(A());b();var N=o=>fetch(`${v()}/api/ms/order/store/${o}/statistic/`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","api-key-sumer":S("PUBLIC_API_KEY")}});var t=s(m()),y=({partner:o})=>{let{t:r}=p(),a=o==null?void 0:o.userNetwork,_=`/catalogo/${a==null?void 0:a.urlSummer}/todos-los-productos`,[E,l]=(0,n.useState)([]);return(0,n.useEffect)(()=>{o!=null&&o.userId&&N(o==null?void 0:o.userId).then(async f=>(0,g.camelizeKeys)(await f.json())).then(f=>{l(f)}).catch(()=>{l([])})},[o==null?void 0:o.userId]),(0,t.jsx)("div",{className:e.storeInformationWrapper,role:"store-information-container",children:(0,t.jsx)(h,{copy:r("StoreInformation.internal_title"),breadcrumbs:[{text:r("StoreInformation.internal_breadcrumb_title")}],children:(0,t.jsx)("div",{className:e.container,children:(0,t.jsxs)("div",{className:e.information,children:[(0,t.jsxs)("div",{className:e.storeInformationBox,children:[(0,t.jsx)("h3",{className:e.storeInformationSectionTitle,children:r("StoreInformation.title")}),(0,t.jsx)(x,{textButton:r("StoreInformation.see_products"),to:_,source:"StoreInfoPage",partner:o==null?void 0:o.userDetail})]}),(0,t.jsxs)("div",{className:e.storeInformationBox,children:[(0,t.jsx)("h3",{className:e.storeInformationSectionTitle,children:r("reviews.title")}),(0,t.jsx)(w,{reviews:E,source:"StoreInfoPage",name:(o==null?void 0:o.enterpriseName)||""})]})]})})})})};P();var i=s(m());function c(){let{partner:o}=u();return(0,i.jsx)(R.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(d,{resolve:o,errorElement:(0,i.jsx)("p",{children:"Error"}),children:r=>(0,i.jsx)(y,{partner:r})})})}var B=c;export{B as a};
//# sourceMappingURL=/catalogo/src/_shared/chunk-KFAIBOUN.js.map

//# debugId=df469960-8eab-5772-a802-ac6e030da6fc
