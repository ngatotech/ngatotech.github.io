
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9fcea00f-8410-506c-8d30-8f73ab4e09c0")}catch(e){}}();
import{c as G}from"/catalogo/build/_shared/chunk-EMG2WQY5.js";var K=G((U,F)=>{(function(T,g){typeof U=="object"&&typeof F<"u"?F.exports=g():typeof define=="function"&&define.amd?define(g):(T=typeof globalThis<"u"?globalThis:T||self).dayjs=g()})(U,function(){"use strict";var T=1e3,g=6e4,J=36e5,A="millisecond",w="second",O="minute",b="hour",m="day",W="week",M="month",Z="quarter",y="year",_="date",z="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},I=function(i,n,t){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(t)+i},Q={s:I,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+I(r,2,"0")+":"+I(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,M),s=t-e<0,u=n.clone().add(r+(s?-1:1),M);return+(-(r+(t-e)/(s?e-u:u-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M,y,w:W,d:m,D:_,h:b,m:O,s:w,ms:A,Q:Z}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},Y="en",D={};D[Y]=P;var V="$isDayjsObject",N=function(i){return i instanceof C||!(!i||!i[V])},x=function i(n,t,r){var e;if(!n)return Y;if(typeof n=="string"){var s=n.toLowerCase();D[s]&&(e=s),t&&(D[s]=t,e=s);var u=n.split("-");if(!e&&u.length>1)return i(u[0])}else{var o=n.name;D[o]=n,e=o}return!r&&e&&(Y=e),e||!r&&Y},f=function(i,n){if(N(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new C(t)},a=Q;a.l=x,a.i=N,a.w=function(i,n){return f(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var C=function(){function i(t){this.$L=x(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[V]=!0}var n=i.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,s=r.utc;if(e===null)return new Date(NaN);if(a.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(B);if(u){var o=u[2]-1||0,c=(u[7]||"0").substring(0,3);return s?new Date(Date.UTC(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)):new Date(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return a},n.isValid=function(){return this.$d.toString()!==z},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return a.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,s=!!a.u(r)||r,u=a.p(t),o=function(p,$){var v=a.w(e.$u?Date.UTC(e.$y,$,p):new Date(e.$y,$,p),e);return s?v:v.endOf(m)},c=function(p,$){return a.w(e.toDate()[p].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice($)),e)},h=this.$W,d=this.$M,l=this.$D,k="set"+(this.$u?"UTC":"");switch(u){case y:return s?o(1,0):o(31,11);case M:return s?o(1,d):o(0,d+1);case W:var S=this.$locale().weekStart||0,H=(h<S?h+7:h)-S;return o(s?l-H:l+(6-H),d);case m:case _:return c(k+"Hours",0);case b:return c(k+"Minutes",1);case O:return c(k+"Seconds",2);case w:return c(k+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,s=a.p(t),u="set"+(this.$u?"UTC":""),o=(e={},e[m]=u+"Date",e[_]=u+"Date",e[M]=u+"Month",e[y]=u+"FullYear",e[b]=u+"Hours",e[O]=u+"Minutes",e[w]=u+"Seconds",e[A]=u+"Milliseconds",e)[s],c=s===m?this.$D+(r-this.$W):r;if(s===M||s===y){var h=this.clone().set(_,1);h.$d[o](c),h.init(),this.$d=h.set(_,Math.min(this.$D,h.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[a.p(t)]()},n.add=function(t,r){var e,s=this;t=Number(t);var u=a.p(r),o=function(d){var l=f(s);return a.w(l.date(l.date()+Math.round(d*t)),s)};if(u===M)return this.set(M,this.$M+t);if(u===y)return this.set(y,this.$y+t);if(u===m)return o(1);if(u===W)return o(7);var c=(e={},e[O]=g,e[b]=J,e[w]=T,e)[u]||1,h=this.$d.getTime()+t*c;return a.w(h,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||z;var s=t||"YYYY-MM-DDTHH:mm:ssZ",u=a.z(this),o=this.$H,c=this.$m,h=this.$M,d=e.weekdays,l=e.months,k=e.meridiem,S=function($,v,L,j){return $&&($[v]||$(r,s))||L[v].slice(0,j)},H=function($){return a.s(o%12||12,$,"0")},p=k||function($,v,L){var j=$<12?"AM":"PM";return L?j.toLowerCase():j};return s.replace(E,function($,v){return v||function(L){switch(L){case"YY":return String(r.$y).slice(-2);case"YYYY":return a.s(r.$y,4,"0");case"M":return h+1;case"MM":return a.s(h+1,2,"0");case"MMM":return S(e.monthsShort,h,l,3);case"MMMM":return S(l,h);case"D":return r.$D;case"DD":return a.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return S(e.weekdaysMin,r.$W,d,2);case"ddd":return S(e.weekdaysShort,r.$W,d,3);case"dddd":return d[r.$W];case"H":return String(o);case"HH":return a.s(o,2,"0");case"h":return H(1);case"hh":return H(2);case"a":return p(o,c,!0);case"A":return p(o,c,!1);case"m":return String(c);case"mm":return a.s(c,2,"0");case"s":return String(r.$s);case"ss":return a.s(r.$s,2,"0");case"SSS":return a.s(r.$ms,3,"0");case"Z":return u}return null}($)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var s,u=this,o=a.p(r),c=f(t),h=(c.utcOffset()-this.utcOffset())*g,d=this-c,l=function(){return a.m(u,c)};switch(o){case y:s=l()/12;break;case M:s=l();break;case Z:s=l()/3;break;case W:s=(d-h)/6048e5;break;case m:s=(d-h)/864e5;break;case b:s=d/J;break;case O:s=d/g;break;case w:s=d/T;break;default:s=d}return e?s:a.a(s)},n.daysInMonth=function(){return this.endOf(M).$D},n.$locale=function(){return D[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),s=x(t,r,!0);return s&&(e.$L=s),e},n.clone=function(){return a.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),q=C.prototype;return f.prototype=q,[["$ms",A],["$s",w],["$m",O],["$H",b],["$W",m],["$M",M],["$y",y],["$D",_]].forEach(function(i){q[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),f.extend=function(i,n){return i.$i||(i(n,C,f),i.$i=!0),f},f.locale=x,f.isDayjs=N,f.unix=function(i){return f(1e3*i)},f.en=D[Y],f.Ls=D,f.p={},f})});export{K as a};
//# sourceMappingURL=/catalogo/build/_shared/chunk-TD5CME3J.js.map

//# debugId=9fcea00f-8410-506c-8d30-8f73ab4e09c0
