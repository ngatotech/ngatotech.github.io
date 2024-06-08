
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b2aaebfd-5d62-59ad-9f7e-34d4bc5de17f")}catch(e){}}();
import{a as P}from"/catalogo/build/_shared/chunk-WSOL5QRX.js";import{c as b}from"/catalogo/build/_shared/chunk-SHT4H6EZ.js";import{z as B}from"/catalogo/build/_shared/chunk-C22R5JBJ.js";import{a as O}from"/catalogo/build/_shared/chunk-3LAOUQIO.js";import{e as n}from"/catalogo/build/_shared/chunk-EMG2WQY5.js";var c=n(O()),T=n(P());var t={buttonWrapper:"c0lab",withPersonalization:"Er0FA",isSpecial:"_6e9Nm",hasFill:"_64gdb",isWhite:"T7m20",button1:"Bdt-B",button2:"xRpik",isBlack:"M3f0B",isSecondary:"Vn004",isTertiary:"BIry9",square:"-GzWS","mid-rounded":"WtIMn",rounded:"yMb1A",link:"qe6dS",short:"HX2YI"};var r=n(B()),R=({appearance:$="normal",isFilled:y=!1,isWhite:U=!1,isBlack:M=!1,isSecondary:S=!1,isTertiary:N=!1,isSpecial:W=!1,size:k="normal",hasPersonalization:E,className:F,disabled:s,isLoading:u,children:i,leftIcon:_,rightIcon:q,onClick:a})=>{let{theme:o}=b(),x=(0,c.useMemo)(()=>{var e,l,d,p,f,m;return((l=(e=o==null?void 0:o.config)==null?void 0:e.button)==null?void 0:l.rounded)==="full"?"rounded":((p=(d=o==null?void 0:o.config)==null?void 0:d.button)==null?void 0:p.rounded)==="semi"?"mid-rounded":((m=(f=o==null?void 0:o.config)==null?void 0:f.button)==null?void 0:m.rounded)==="square"?"square":""},[o]),z=o.template.BUTTON==="BUTTON_1"?"button1":o.template.BUTTON==="BUTTON_2"?"button2":"button1",C=e=>{!s&&a&&a(e)};return(0,r.jsxs)("button",{type:"button",className:`
				${t.buttonWrapper} 
				${t[z]} 
				${t[x]} 
				${t[$]} 
				${t[k]} 
				${E&&t.withPersonalization} 
				${y&&t.hasFill} 
				${U&&t.isWhite}
				${M&&t.isBlack} 
				${S&&t.isSecondary}
				${N&&t.isTertiary}
				${W&&t.isSpecial}
				${F}
			`,role:"button",disabled:s,onClick:C,children:[!u&&_,i?u?(0,r.jsx)(T.UiLoader,{size:20}):i:null,!u&&q]})},I=R;export{I as a};
//# sourceMappingURL=/catalogo/build/_shared/chunk-TRHZMVRB.js.map

//# debugId=b2aaebfd-5d62-59ad-9f7e-34d4bc5de17f
