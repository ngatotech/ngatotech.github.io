
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d234c8fa-01a6-58fe-b75a-5eb954407a2a")}catch(e){}}();
import{a as C}from"/catalogo/src/_shared/chunk-TRHZMVRB.js";import{c as G}from"/catalogo/src/_shared/chunk-SHT4H6EZ.js";import{D as w,K as R,P as Q,Q as F,R as q,T as $,a as B,c as b,t as U,v as A,wa as k,y as O,z as f}from"/catalogo/src/_shared/chunk-C22R5JBJ.js";import{a as L}from"/catalogo/src/_shared/chunk-3LAOUQIO.js";import{e as p}from"/catalogo/src/_shared/chunk-EMG2WQY5.js";U();k();var W=p(L());O();var S={catalogueSelectedTags:"N2K8F",quantityTitle:"t6yiS",cleanAction:"SBPbF",tags:"f-FPh",tag:"PMme9",text:"MBuKT",close:"_98grO",iconClose:"kpMPo"};k();var T=p(f()),Z=()=>{var s;let[n]=F(),t=((s=n.get("categories"))==null?void 0:s.split("|"))||[],r=q(),o=l=>{t=t.filter(c=>c!==l),t.length===0?r(""):r(`?page=1&categories=${t.join("|")}`,{preventScrollReset:!0})},a=l=>{};return t.length?(0,T.jsx)("div",{className:S.catalogueSelectedTags,children:(0,T.jsx)("div",{className:S.tags,children:t.map(l=>(0,T.jsxs)("button",{className:S.tag,onClick:()=>o(l),children:[(0,T.jsx)("span",{className:S.text,children:l.replace("@"," - ")}),(0,T.jsx)("div",{className:S.close,children:(0,T.jsx)("span",{className:`${S.iconClose} icon-close`})})]},`catalogue-selected-tag-${l}`))})}):null},z=Z;var v={productFilterSkin1Content:"yyQvf",content:"HLFrQ",title:"_5h4Q9",filter:"FUXlw",quantity:"ZUE8e",quantityTitle:"nnWiI"};k();var m=p(f()),D=({showTags:n,showQuantityInTitle:t,onClick:r,productsQuantity:o,isInServicesTab:a})=>{var y,u,e;let{t:s}=A(),[l]=F(),c=((y=l.get("categories"))==null?void 0:y.split("|"))||[],g=((u=l.get("toppings"))==null?void 0:u.split("|"))||[],h=((e=l.get("filterBy"))==null?void 0:e.split(","))||[],d=(0,W.useMemo)(()=>(c==null?void 0:c.length)+(g==null?void 0:g.length)+(h==null?void 0:h.length),[c,g,h]);return(0,m.jsxs)("div",{className:v.productFilterSkin1Content,children:[(0,m.jsxs)("div",{className:v.content,children:[t?(0,m.jsx)("div",{className:v.quantityTitle,children:`${o} ${s("category.products")}`}):(0,m.jsx)("div",{className:v.title,children:s(a?"catalogueMain.all_services":"product_filter.title")}),r&&!a&&(0,m.jsx)(C,{className:`${v.filter}`,rightIcon:(0,m.jsx)("span",{className:"icon-filters"}),hasPersonalization:!0,isSpecial:!0,size:"short",onClick:r,children:d>0&&(0,m.jsx)("span",{className:v.quantity,children:d})})]}),n&&(0,m.jsx)(z,{}),!t&&d>0&&(0,m.jsx)("div",{className:v.quantityTitle,children:`${s("category.showing")} ${o} ${s("category.products")}`})]})};var I=p(f()),gt=({onClick:n,productsQuantity:t})=>{let r=B(),{theme:o}=G(),a=o.template.PRODUCTS_FILTER.PROPS.SHOW_TAGS,s=o.template.PRODUCTS_FILTER.PROPS.SHOW_QUANTITY_IN_TITLE||r.pathname.includes("servicios");return(0,I.jsx)(I.Fragment,{children:o.template.PRODUCTS_FILTER.SKIN===R.PRODUCTS_FILTER_SKIN_1&&(0,I.jsx)(D,{showTags:a,showQuantityInTitle:s,onClick:n,productsQuantity:t,isInServicesTab:!1})})};var _=p(L());var P={pagination1:"o3miZ",btnBlackPagination:"_835j3",itemButton:"_7B-EQ",itemButtonText:"BG5rt",link:"PQnWN",linkPrev:"gTqTm"};k();var K=(n,t,r=!0)=>{if(n.length<=5)return n;let o=[];r?t<=2?(t!==1&&o.push(t),o.push(t+1),o.push(t+2),t!==2&&o.push(t+3)):t>=n.length-1?(t!==n.length-1&&o.push(t-3),o.push(t-2),o.push(t-1),t!==n.length&&o.push(t)):(o.push(t-1),o.push(t),o.push(t+1)):t<=4?o=[2,3,4,5,6]:t>=n.length-3?o=[n.length-5,n.length-4,n.length-3,n.length-2,n.length-1]:(o.push(t-2),o.push(t-1),o.push(t),o.push(t+1),o.push(t+2));let a=[];return o[0]!==1&&(a.push(n[0]),t>(r?3:4)&&a.push({text:"..."})),a=[...a,...n.filter(s=>o.includes(s.page))],o[o.length-1]!==n[n.length-1].page&&(t<=n.length-(r?3:4)&&a.push({text:"..."}),a.push(n[n.length-1])),a};O();k();k();var N=p(L());var M={SELECT_CATALOG_PAGE:"web_select_catalog_page"};U();var H=({page:n})=>{let{storeMetadata:t}=b(),{t:r}=A(),[o]=w({storeMetadata:t}),{pathname:a,search:s}=Q(),l=u=>{o(M.SELECT_CATALOG_PAGE,{payload:u})},c=(0,N.useMemo)(()=>new URLSearchParams(s),[s]),g=(0,N.useCallback)(u=>{let e=c;return e.set("page",String(u)),`${a}?${e.toString()}`},[c,a]),h=(0,N.useMemo)(()=>g(n-1),[n,a]),d=(0,N.useMemo)(()=>g(n+1),[n,a]),y=(0,N.useCallback)(u=>u===n,[n]);return{t:r,logEvent:o,prevLink:h,nextLink:d,launchChangePageEvent:l,isActive:y,createUrlWithPagination:g}};var i=p(f()),X=({pages:n,page:t=1,isMobile:r=!0,className:o})=>{let{t:a,prevLink:s,nextLink:l,isActive:c,createUrlWithPagination:g,launchChangePageEvent:h}=H({pages:n,page:t,isMobile:r}),d=(0,_.useMemo)(()=>Array.from({length:n},(e,x)=>x+1).map(e=>({page:e,link:g(e)})),[n]),y=(0,_.useMemo)(()=>K(d,t,r),[d,t,r]),u=({numberPage:e})=>(0,i.jsx)(C,{isFilled:!0,isBlack:!c(e),className:`${c(e)?"":`${P.btnBlackPagination}`}`,size:"short",children:e});return n>1?(0,i.jsxs)("div",{className:`${P.pagination1} ${o||""}`,children:[t!==1&&(0,i.jsxs)($,{to:s,className:`${P.itemButton} ${P.link} ${P.linkPrev}`,onClick:()=>h("previous"),children:[(0,i.jsx)("span",{className:"icon-arrow-right"}),(0,i.jsx)("span",{children:a("pagination.prev")})]}),y.map((e,x)=>(0,i.jsx)(_.Fragment,{children:e.page&&!c(e.page)?(0,i.jsx)($,{to:e.link,onClick:()=>h(String(e.page)),children:(0,i.jsx)(u,{numberPage:e.page})}):(0,i.jsx)(i.Fragment,{children:e.page?(0,i.jsx)(u,{numberPage:e.page}):(0,i.jsx)(C,{className:P.itemButtonText,size:"short",children:e.text})})},`pagination-item-${x}`)),t!==n&&(0,i.jsxs)($,{to:l,className:`${P.itemButton} ${P.link} ${P.linkNext}`,onClick:()=>h("next"),children:[(0,i.jsx)("span",{children:a("pagination.next")}),(0,i.jsx)("span",{className:"icon-arrow-right"})]})]}):null},E=X;var V=p(f()),Y=n=>(0,V.jsx)(E,{...n}),bt=Y;export{gt as a,bt as b};
//# sourceMappingURL=/catalogo/src/_shared/chunk-EMUO6WQZ.js.map

//# debugId=d234c8fa-01a6-58fe-b75a-5eb954407a2a
