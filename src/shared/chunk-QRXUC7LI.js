
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="af8b5660-4b57-5802-bc6d-d2bcded92c94")}catch(e){}}();
import{ra as f,wa as P,z as d}from"/catalogo/src/_shared/chunk-C22R5JBJ.js";import{a as y}from"/catalogo/src/_shared/chunk-3LAOUQIO.js";import{e as c}from"/catalogo/src/_shared/chunk-EMG2WQY5.js";var e=c(y());P();var p=c(d()),g=e.default.createContext({isLoggedIn:!1,user:null,setUser:t=>{}});function S({children:t,url:x,callback:a,onError:i,tokenKey:u="accessToken"}){let[m,h]=(0,e.useState)(null),[v,l]=(0,e.useState)(!1),[n,A]=f(u,"");(0,e.useEffect)(()=>{let o=window.location.search,w=new URLSearchParams(o),s=n!=null&&n.length?n:w.get(u);s&&fetch(x,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${s}`}}).then(r=>r.json()).then(r=>{h(r),l(!0),A(s),a&&a(r)}).catch(()=>{i&&i()})},[]);let C=o=>{h(o),l(o!==null)};return(0,p.jsx)(g.Provider,{value:{isLoggedIn:v,user:m,setUser:C},children:t})}function U(){let t=(0,e.useContext)(g);if(t===void 0)throw new Error("Context must be used within a Provider");return t}export{S as a,U as b};
//# sourceMappingURL=/catalogo/src/_shared/chunk-QRXUC7LI.js.map

//# debugId=af8b5660-4b57-5802-bc6d-d2bcded92c94
