
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="40815c60-5b1e-56cf-81dd-cf38ca28ef00")}catch(e){}}();
import{a as te}from"/catalogo/src/_shared/chunk-3LAOUQIO.js";import{c as l}from"/catalogo/src/_shared/chunk-EMG2WQY5.js";var C=l((Qe,v)=>{v.exports=function(t,r,n){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");typeof r=="function"&&(n=r,r={}),r=r||{},n=n||function(){},a.type=r.type||"text/javascript",a.charset=r.charset||"utf8",a.async="async"in r?!!r.async:!0,a.src=t,r.attrs&&re(a,r.attrs),r.text&&(a.text=""+r.text);var u="onload"in a?h:ne;u(a,n),a.onload||h(a,n),o.appendChild(a)};function re(e,t){for(var r in t)e.setAttribute(r,t[r])}function h(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function ne(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});var H=l((Ge,L)=>{"use strict";var oe=function(t){return ae(t)&&!ie(t)};function ae(e){return!!e&&typeof e=="object"}function ie(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||ue(e)}var ce=typeof Symbol=="function"&&Symbol.for,se=ce?Symbol.for("react.element"):60103;function ue(e){return e.$$typeof===se}function fe(e){return Array.isArray(e)?[]:{}}function f(e,t){return t.clone!==!1&&t.isMergeableObject(e)?c(fe(e),e,t):e}function le(e,t,r){return e.concat(t).map(function(n){return f(n,r)})}function _e(e,t){if(!t.customMerge)return c;var r=t.customMerge(e);return typeof r=="function"?r:c}function de(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function U(e){return Object.keys(e).concat(de(e))}function I(e,t){try{return t in e}catch{return!1}}function pe(e,t){return I(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function me(e,t,r){var n={};return r.isMergeableObject(e)&&U(e).forEach(function(o){n[o]=f(e[o],r)}),U(t).forEach(function(o){pe(e,o)||(I(e,o)&&r.isMergeableObject(t[o])?n[o]=_e(o,r)(e[o],t[o],r):n[o]=f(t[o],r))}),n}function c(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||le,r.isMergeableObject=r.isMergeableObject||oe,r.cloneUnlessOtherwiseSpecified=f;var n=Array.isArray(t),o=Array.isArray(e),a=n===o;return a?n?r.arrayMerge(e,t,r):me(e,t,r):f(t,r)}c.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,o){return c(n,o,r)},{})};var ye=c;L.exports=ye});var D=l((ke,j)=>{var Oe=Object.create,_=Object.defineProperty,we=Object.getOwnPropertyDescriptor,be=Object.getOwnPropertyNames,Ae=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty,Me=(e,t)=>{for(var r in t)_(e,r,{get:t[r],enumerable:!0})},P=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of be(t))!Te.call(e,o)&&o!==r&&_(e,o,{get:()=>t[o],enumerable:!(n=we(t,o))||n.enumerable});return e},y=(e,t,r)=>(r=e!=null?Oe(Ae(e)):{},P(t||!e||!e.__esModule?_(r,"default",{value:e,enumerable:!0}):r,e)),ge=e=>P(_({},"__esModule",{value:!0}),e),N={};Me(N,{callPlayer:()=>$e,getConfig:()=>De,getSDK:()=>je,isBlobUrl:()=>Be,isMediaStream:()=>Ke,lazy:()=>ve,omit:()=>xe,parseEndTime:()=>Pe,parseStartTime:()=>He,queryString:()=>Re,randomString:()=>Ne,supportsWebKitPresentationMode:()=>Xe});j.exports=ge(N);var Se=y(te()),Ee=y(C()),he=y(H()),ve=e=>Se.default.lazy(async()=>{let t=await e();return typeof t.default=="function"?t:t.default}),Ce=/[?&#](?:start|t)=([0-9hms]+)/,Ue=/[?&#]end=([0-9hms]+)/,m=/(\d+)(h|m|s)/g,Ie=/^\d+$/;function R(e,t){if(e instanceof Array)return;let r=e.match(t);if(r){let n=r[1];if(n.match(m))return Le(n);if(Ie.test(n))return parseInt(n)}}function Le(e){let t=0,r=m.exec(e);for(;r!==null;){let[,n,o]=r;o==="h"&&(t+=parseInt(n,10)*60*60),o==="m"&&(t+=parseInt(n,10)*60),o==="s"&&(t+=parseInt(n,10)),r=m.exec(e)}return t}function He(e){return R(e,Ce)}function Pe(e){return R(e,Ue)}function Ne(){return Math.random().toString(36).substr(2,5)}function Re(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function p(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}var s={},je=function(t,r,n=null,o=()=>!0,a=Ee.default){let u=p(r);return u&&o(u)?Promise.resolve(u):new Promise((g,S)=>{if(s[t]){s[t].push({resolve:g,reject:S});return}s[t]=[{resolve:g,reject:S}];let E=i=>{s[t].forEach(d=>d.resolve(i))};if(n){let i=window[n];window[n]=function(){i&&i(),E(p(r))}}a(t,i=>{i?(s[t].forEach(d=>d.reject(i)),s[t]=null):n||E(p(r))})})};function De(e,t){return(0,he.default)(t.config,e.config)}function xe(e,...t){let r=[].concat(...t),n={},o=Object.keys(e);for(let a of o)r.indexOf(a)===-1&&(n[a]=e[a]);return n}function $e(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function Ke(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Be(e){return/^blob:/.test(e)}function Xe(e=document.createElement("video")){let t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}});var Je=l((et,ee)=>{var b=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,We=Object.getOwnPropertyNames,ze=Object.prototype.hasOwnProperty,Fe=(e,t)=>{for(var r in t)b(e,r,{get:t[r],enumerable:!0})},Ye=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of We(t))!ze.call(e,o)&&o!==r&&b(e,o,{get:()=>t[o],enumerable:!(n=Ve(t,o))||n.enumerable});return e},qe=e=>Ye(b({},"__esModule",{value:!0}),e),$={};Fe($,{AUDIO_EXTENSIONS:()=>A,DASH_EXTENSIONS:()=>G,FLV_EXTENSIONS:()=>k,HLS_EXTENSIONS:()=>M,MATCH_URL_DAILYMOTION:()=>q,MATCH_URL_FACEBOOK:()=>X,MATCH_URL_FACEBOOK_WATCH:()=>V,MATCH_URL_KALTURA:()=>Q,MATCH_URL_MIXCLOUD:()=>Z,MATCH_URL_SOUNDCLOUD:()=>K,MATCH_URL_STREAMABLE:()=>W,MATCH_URL_TWITCH_CHANNEL:()=>Y,MATCH_URL_TWITCH_VIDEO:()=>F,MATCH_URL_VIDYARD:()=>J,MATCH_URL_VIMEO:()=>B,MATCH_URL_WISTIA:()=>z,MATCH_URL_YOUTUBE:()=>O,VIDEO_EXTENSIONS:()=>T,canPlay:()=>Ze});ee.exports=qe($);var x=D(),O=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,K=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,B=/vimeo\.com\/(?!progressive_redirect).+/,X=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,V=/^https?:\/\/fb\.watch\/.+$/,W=/streamable\.com\/([a-z0-9]+)$/,z=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,F=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Y=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,q=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Z=/mixcloud\.com\/([^/]+\/[^/]+)/,J=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Q=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,A=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,T=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,M=/\.(m3u8)($|\?)/i,G=/\.(mpd)($|\?)/i,k=/\.(flv)($|\?)/i,w=e=>{if(e instanceof Array){for(let t of e)if(typeof t=="string"&&w(t)||w(t.src))return!0;return!1}return(0,x.isMediaStream)(e)||(0,x.isBlobUrl)(e)?!0:A.test(e)||T.test(e)||M.test(e)||G.test(e)||k.test(e)},Ze={youtube:e=>e instanceof Array?e.every(t=>O.test(t)):O.test(e),soundcloud:e=>K.test(e)&&!A.test(e),vimeo:e=>B.test(e)&&!T.test(e)&&!M.test(e),facebook:e=>X.test(e)||V.test(e),streamable:e=>W.test(e),wistia:e=>z.test(e),twitch:e=>F.test(e)||Y.test(e),dailymotion:e=>q.test(e),mixcloud:e=>Z.test(e),vidyard:e=>J.test(e),kaltura:e=>Q.test(e),file:w}});export{H as a,D as b,Je as c};
//# sourceMappingURL=/catalogo/src/_shared/chunk-G2IF2JEE.js.map

//# debugId=40815c60-5b1e-56cf-81dd-cf38ca28ef00
