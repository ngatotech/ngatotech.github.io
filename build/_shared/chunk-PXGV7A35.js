
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="11534fab-5298-5642-9a63-8d2b8db4ea15")}catch(e){}}();
import{a as ie}from"/catalogo/build/_shared/chunk-TD5CME3J.js";import{a as Ne}from"/catalogo/build/_shared/chunk-A5EJJXK3.js";import{a as ae}from"/catalogo/build/_shared/chunk-WSOL5QRX.js";import{c as H}from"/catalogo/build/_shared/chunk-SHT4H6EZ.js";import{D as te,K as w,S as se,c as V,ha as re,j as we,t as Ie,v as S,wa as C,y as P,z as p}from"/catalogo/build/_shared/chunk-C22R5JBJ.js";import{a as O}from"/catalogo/build/_shared/chunk-3LAOUQIO.js";import{c as oe,e as l}from"/catalogo/build/_shared/chunk-EMG2WQY5.js";var ce=oe((Z,q)=>{(function(e,s){typeof Z=="object"&&typeof q<"u"?q.exports=s():typeof define=="function"&&define.amd?define(s):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_plugin_localizedFormat=s()})(Z,function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(s,a,m){var o=a.prototype,n=o.format;m.en.formats=e,o.format=function(d){d===void 0&&(d="YYYY-MM-DDTHH:mm:ssZ");var c=this.$locale().formats,u=function(i,v){return i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(g,R,T){var k=T&&T.toUpperCase();return R||v[T]||e[T]||v[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(E,A,B){return A||B.slice(1)})})}(d,c===void 0?{}:c);return n.call(this,u)}}})});var de=oe((G,Q)=>{(function(e,s){typeof G=="object"&&typeof Q<"u"?Q.exports=s(ie()):typeof define=="function"&&define.amd?define(["dayjs"],s):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_locale_es=s(e.dayjs)})(G,function(e){"use strict";function s(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=s(e),m={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xE1".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d d\xEDas",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"},ordinal:function(o){return o+"\xBA"}};return a.default.locale(m,null,!0),m})});var x=l(O());var U={textReadMore:"NExU5",btnSeeMore:"mNhPE",readMoreText:"Q6FlK",lines:"J3HIy"};P();var ne=l(ae());var y=l(Ne(),1),be=y.default.domToReact,Re=y.default.htmlToDOM,$e=y.default.attributesToProps,De=y.default.Comment,Ee=y.default.Element,Pe=y.default.ProcessingInstruction,Ce=y.default.Text,J=y.default;var I=l(p()),Me=({text:e,className:s,maxLength:a=100})=>{let{t:m}=S(),[o,n]=(0,x.useState)(),[d,c]=(0,x.useState)(e||"");function u(i){if(document){let v=document.createElement("div");v.innerHTML=i;for(let g=v.childNodes,R=g.length;R--;)if(g[R].nodeType==1)return!0}return!1}return(0,x.useEffect)(()=>{u(e||"")&&c(J(e||""))},[]),(0,I.jsx)("div",{className:`${U.textReadMore} ${s||""}`,children:e&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:`${U.readMoreText}`,children:o?d:J(`${e.substring(0,a)}${e.length>a?"...":""}`)}),(e.split(`
`).length>3||e.length>a)&&(0,I.jsx)(ne.UiButton,{className:`${U.btnSeeMore}`,link:!0,onClick:()=>n(i=>!i),children:o?`${m("readMore.see_less")}`:m("readMore.see_more")})]})})},me=Me;C();P();var K={emptyReviews:"MQXFY",content:"osYeV"};var _=l(p()),le=({source:e,name:s})=>{let{t:a}=S();return(0,_.jsxs)("div",{className:K.emptyReviews,children:[(0,_.jsx)("img",{src:"/prod/assets/web/catalogue/icons/hug.png",alt:"store-icon"}),(0,_.jsxs)("div",{className:K.content,children:[e==="StoreInfoPage"?(0,_.jsx)("h4",{children:a("reviews.emptyStoreReviews")}):(0,_.jsx)("h4",{children:a("reviews.emptyProductReviews")}),e==="StoreInfoPage"&&(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{children:s})," ",a("reviews.emptyStoreReviewsDescription")]})]})]})};var W={stars:"_85ZJ4",star:"disV-"};var h=l(p()),$=({number:e,color:s,fontSize:a})=>{let m=Array.from(Array(Math.round(e)).keys()),o=Array.from(Array(5-Math.round(e)).keys());return(0,h.jsxs)("div",{className:W.stars,children:[m.map(n=>(0,h.jsx)("div",{className:W.star,color:s,role:"star",style:{fontSize:a||"28px"},children:(0,h.jsx)("span",{className:"icon-star-fill"})},n)),o.map(n=>(0,h.jsx)("div",{className:W.star,color:s,role:"star",style:{fontSize:a||"28px"},children:(0,h.jsx)("span",{className:"icon-star"})},n))]})};var j=l(ie()),pe=l(ce());C();var D={review:"vsqza",stars:"gai1a",starItem:"fSEWr",reviewSkin2:"TmJu2",starItem__empty:"ibSbf",reviewDate:"S8JSh",btnSeeMore:"AH3My",description:"wAm7H"};var N=l(p());de();j.default.locale("es");j.default.extend(pe.default);var z=({review:e,skin:s=w.PRODUCT_REVIEWS_SKIN_1})=>{let a=(0,j.default)(e.scoreDate).format("LL"),{theme:m}=H();return(0,N.jsxs)("div",{className:` ${D.review} ${s===w.PRODUCT_REVIEWS_SKIN_2?D.reviewSkin2:""}`,children:[(0,N.jsx)("div",{className:D.stars,children:(0,N.jsx)($,{color:`${m.themeColors.button}`,number:e.stars})}),(0,N.jsx)("div",{className:D.reviewDate,children:a}),e.customerComments&&(0,N.jsx)("div",{className:D.description,children:(0,N.jsx)(me,{colorText:"#0C1220",text:e.customerComments,underLine:!0})})]})};var L=l(O());P();var ge=(e,s)=>new Date(e.scoreDate).getTime()-new Date(s.scoreDate).getTime(),Te=(e,s)=>new Date(s.scoreDate).getTime()-new Date(e.scoreDate).getTime(),X=(e,s)=>e.sort((a,m)=>s==="DESC"?Te(a,m):ge(a,m));var F=({reviews:e,source:s,name:a})=>{let{t:m}=S(),[o,n]=(0,L.useState)(e),[d,c]=(0,L.useState)("DESC"),u=i=>{c(i),n(X(e,i))};return(0,L.useEffect)(()=>{n(X(e,"DESC"))},[e]),{t:m,reviewsState:o,sortType:d,handleSort:u}};var Y={reviewsSkin1:"WPvvf",productRating:"uskVj",content:"Tc4Du",reviewBox:"IeYvB",controls:"lzfi0"};var f=l(p()),fe=({reviews:e,source:s,name:a})=>{let{t:m,reviewsState:o,sortType:n,handleSort:d}=F({reviews:e,source:s,name:a});return(0,f.jsx)("div",{className:Y.reviewsSkin1,children:e.length>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:Y.content,children:o==null?void 0:o.map((c,u)=>(0,f.jsx)("div",{className:Y.reviewBox,children:(0,f.jsx)(z,{review:c})},`${u}-${c.stars}-${c.scoreDate}`))}),s==="ProductPage"&&(0,f.jsxs)("div",{className:Y.controls,role:"review-controls",children:[(0,f.jsx)("input",{type:"radio",id:"desc",checked:n==="DESC"}),(0,f.jsx)("label",{onClick:()=>{d("DESC")},htmlFor:"desc",children:m("reviews.recent_reviews")}),(0,f.jsx)("input",{type:"radio",id:"asc",checked:n==="ASC"}),(0,f.jsx)("label",{onClick:()=>{d("ASC")},htmlFor:"asc",children:m("reviews.older_reviews")})]})]}):(0,f.jsx)(le,{source:s,name:a})})};var ue=l(O());C();C();var ve={SELECT_STORE_REVIEWS:"web_select_store_reviews"};var b={reviewsSkin2Styled:"hYZJo",reviewsList:"-dDr5",reviewBox:"_5RKhK",reviewsList__simple:"JREjD",reviewsFooter:"ZwIg8",reviewsFooterButton:"USdAj"};P();Ie();var M=l(p()),Se=({reviews:e,source:s,name:a})=>{let{t:m}=S(),{storeMetadata:o}=V(),[n]=te({storeMetadata:o}),{reviewsState:d}=F({reviews:e,source:s,name:a}),[c,u]=(0,ue.useState)(!1),i=()=>{u(!c),n(ve.SELECT_STORE_REVIEWS)};return(0,M.jsxs)("div",{className:`${b.reviewsSkin2Styled}`,children:[(0,M.jsx)("div",{className:`${b.reviewsList} ${d.length<=3?b.reviewsList__simple:""}`,children:d.slice(0,c?void 0:3).map((v,g)=>(0,M.jsx)("div",{className:`${b.reviewBox}`,children:(0,M.jsx)(z,{review:v,skin:w.PRODUCT_REVIEWS_SKIN_2})},`${g}-${v.stars}-${v.scoreDate}`))}),d.length>3&&(0,M.jsx)("div",{className:`${b.reviewsFooter}`,children:(0,M.jsx)("button",{className:`${b.reviewsFooterButton}`,onClick:i,children:m(c?"reviews.hide_all":"reviews.show_all")})})]})};var ee=l(p()),go=({skin:e=w.PRODUCT_REVIEWS_SKIN_1,...s})=>e===w.PRODUCT_REVIEWS_SKIN_2?(0,ee.jsx)(Se,{...s}):(0,ee.jsx)(fe,{...s});P();C();var r={storeInfoContainerStyled:"P83ek",scoreBox:"HQ7lm",scoreBoxStars:"YoZEO",starItem:"E82z4",starItem__empty:"-JNwJ",storeInfoContentStyled:"tebfe",storeInfoGrid:"wd8kD",storeInfoItemStyled:"_8TtfM",boxIcon:"hTMbW",truckSize:"_3c7qq",title:"QLZy3",description:"_7ujM0",storeInfoCopyDetailsStyled:"_8BpMz",storeInfoCopyDetailsExpanded:"e4DOE",info:"_6oSPB"};var ye=l(ae());we();var _e=l(O()),t=l(p()),Co=({source:e,textButton:s,to:a,onViewStoreReviews:m,partner:o})=>{var T,k;let{t:n}=S(),{theme:d}=H(),{storeMetadata:c}=V(),{partnerProfilePicture:u}=re(c),i=c.statisticsResume,v=(0,_e.useMemo)(()=>{var E,A,B;return(E=o==null?void 0:o.logisticConfiguration)!=null&&E.nationalLogisticEnabled?n("StoreInformation.national"):(A=o==null?void 0:o.logisticConfiguration)!=null&&A.localLogisticEnabled||(B=o==null?void 0:o.logisticConfiguration)!=null&&B.customDeliveryEnabled?n("StoreInformation.local"):void 0},[o]),g=()=>{m&&m()};function R(E){return E.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(0,t.jsx)("div",{className:`${r.storeInfoContainerStyled}`,"aria-label":"store-info-container",children:(0,t.jsxs)("div",{className:`${r.storeInfoContentStyled}`,children:[e==="StoreInfoPage"&&(0,t.jsxs)("div",{className:`${r.storeInfoCopyDetailsExpanded}`,children:[(0,t.jsx)("img",{src:u,alt:"logo"}),(0,t.jsxs)("div",{className:`${r.info}`,"aria-label":"store-info-scoreName",children:[(0,t.jsx)("span",{className:`${r.description}`,children:o==null?void 0:o.enterpriseName}),i!=null&&i.score&&(i==null?void 0:i.score)>0?(0,t.jsx)($,{number:i.score,color:`${d.themeColors.button}`}):(0,t.jsx)($,{number:5})]})]}),(0,t.jsxs)("div",{className:`${r.storeInfoGrid}`,children:[e==="ProductPage"&&(0,t.jsxs)("div",{className:`${r.storeInfoItemStyled}`,"aria-label":"store-info-name",children:[(0,t.jsx)("div",{className:`${r.boxIcon}`,children:(0,t.jsx)("span",{className:"icon-store"})}),(0,t.jsxs)("div",{className:`${r.storeInfoCopyDetailsStyled}`,children:[(0,t.jsx)("span",{className:`${r.title}`,children:n("StoreInformation.name")}),(0,t.jsx)("span",{className:`${r.description}`,children:o==null?void 0:o.enterpriseName})]})]}),(0,t.jsxs)("div",{className:`${r.storeInfoItemStyled}`,"aria-label":"store-info-location",children:[(0,t.jsx)("div",{className:`${r.boxIcon}`,children:(0,t.jsx)("span",{className:"icon-map-pin-line"})}),(0,t.jsxs)("div",{className:`${r.storeInfoCopyDetailsStyled}`,children:[(0,t.jsx)("span",{className:`${r.title}`,children:n("StoreInformation.location")}),(0,t.jsxs)("span",{className:`${r.description}`,children:[o!=null&&o.city?`${o==null?void 0:o.storeCity}, `:"",o!=null&&o.country?o==null?void 0:o.country:""]})]})]}),v&&(0,t.jsxs)("div",{className:`${r.storeInfoItemStyled}`,"aria-label":"store-info-coverage",children:[(0,t.jsx)("div",{className:`${r.boxIcon}`,children:(0,t.jsx)("span",{className:`icon-truck ${r.truckSize}`})}),(0,t.jsxs)("div",{className:`${r.storeInfoCopyDetailsStyled}`,children:[(0,t.jsx)("span",{className:`${r.title}`,children:n("StoreInformation.coverage")}),(0,t.jsx)("span",{className:`${r.description}`,children:(0,t.jsx)("span",{className:`${r.description}`,children:v})})]})]}),(0,t.jsxs)("div",{className:`${r.storeInfoItemStyled}`,"aria-label":"store-info-history",children:[(0,t.jsx)("div",{className:`${r.boxIcon}`,children:(0,t.jsx)("span",{className:"icon-shopping-cart"})}),(0,t.jsxs)("div",{className:`${r.storeInfoCopyDetailsStyled}`,children:[(0,t.jsx)("span",{className:`${r.title}`,children:n("StoreInformation.history")}),(0,t.jsxs)("span",{className:`${r.description}`,children:[R((k=(T=i==null?void 0:i.salesCount)==null?void 0:T.toString())!=null?k:"")," ",n("StoreInformation.sales")]})]})]}),e==="ProductPage"&&!(i!=null&&i.score)&&(0,t.jsxs)("div",{className:`${r.storeInfoItemStyled}`,"aria-label":"store-info-withOutscore",children:[(0,t.jsx)("div",{className:`${r.boxIcon}`,children:(0,t.jsx)("span",{className:"icon-star"})}),(0,t.jsxs)("div",{className:`${r.storeInfoCopyDetailsStyled}`,children:[(0,t.jsx)("span",{className:`${r.title}`,children:n("StoreInformation.score")}),(0,t.jsx)("span",{className:`${r.description}`,children:n("StoreInformation.withOutReviews")})]})]})]}),e==="ProductPage"&&!!(i!=null&&i.score)&&(i==null?void 0:i.score)>0&&(0,t.jsxs)("div",{className:`${r.scoreBox}`,"aria-label":"store-info-score",children:[(0,t.jsx)("span",{className:`${r.title}`,children:n("StoreInformation.score")}),(0,t.jsx)("div",{className:`${r.scoreBoxStars}`,children:(0,t.jsx)($,{number:i.score,color:"#E58D09"})})]}),(0,t.jsx)(se,{to:a,children:(0,t.jsx)(ye.UiButton,{link:!0,onClick:g,children:s})})]})})};export{me as a,de as b,go as c,Co as d};
//# sourceMappingURL=/catalogo/build/_shared/chunk-PXGV7A35.js.map

//# debugId=11534fab-5298-5642-9a63-8d2b8db4ea15
