(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(a,b,c){"use strict";var d=c(1296),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g={"$$typeof":!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};function i(a){return d.isMemo(a)?g:h[a.$$typeof]||e}h[d.ForwardRef]={"$$typeof":!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h[d.Memo]=g;var j=Object.defineProperty,k=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,n=Object.getPrototypeOf,o=Object.prototype;function p(a,b,c){if("string"!=typeof b){if(o){var d=n(b);d&&d!==o&&p(a,d,c)}var e=k(b);l&&(e=e.concat(l(b)));for(var g=i(a),h=i(b),q=0;q<e.length;++q){var r=e[q];if(!f[r]&&!(c&&c[r])&&!(h&&h[r])&&!(g&&g[r])){var s=m(b,r);try{j(a,r,s)}catch(t){}}}}return a}a.exports=p},6103:function(a,b){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c="function"==typeof Symbol&&Symbol.for,d=c?Symbol.for("react.element"):60103,e=c?Symbol.for("react.portal"):60106,f=c?Symbol.for("react.fragment"):60107,g=c?Symbol.for("react.strict_mode"):60108,h=c?Symbol.for("react.profiler"):60114,i=c?Symbol.for("react.provider"):60109,j=c?Symbol.for("react.context"):60110,k=c?Symbol.for("react.async_mode"):60111,l=c?Symbol.for("react.concurrent_mode"):60111,m=c?Symbol.for("react.forward_ref"):60112,n=c?Symbol.for("react.suspense"):60113,o=c?Symbol.for("react.suspense_list"):60120,p=c?Symbol.for("react.memo"):60115,q=c?Symbol.for("react.lazy"):60116,r=c?Symbol.for("react.block"):60121,s=c?Symbol.for("react.fundamental"):60117,t=c?Symbol.for("react.responder"):60118,u=c?Symbol.for("react.scope"):60119;function v(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case d:switch(a=a.type){case k:case l:case f:case h:case g:case n:return a;default:switch(a=a&&a.$$typeof){case j:case m:case q:case p:case i:return a;default:return b}}case e:return b}}}function w(a){return v(a)===l}b.AsyncMode=k,b.ConcurrentMode=l,b.ContextConsumer=j,b.ContextProvider=i,b.Element=d,b.ForwardRef=m,b.Fragment=f,b.Lazy=q,b.Memo=p,b.Portal=e,b.Profiler=h,b.StrictMode=g,b.Suspense=n,b.isAsyncMode=function(a){return w(a)||v(a)===k},b.isConcurrentMode=w,b.isContextConsumer=function(a){return v(a)===j},b.isContextProvider=function(a){return v(a)===i},b.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===d},b.isForwardRef=function(a){return v(a)===m},b.isFragment=function(a){return v(a)===f},b.isLazy=function(a){return v(a)===q},b.isMemo=function(a){return v(a)===p},b.isPortal=function(a){return v(a)===e},b.isProfiler=function(a){return v(a)===h},b.isStrictMode=function(a){return v(a)===g},b.isSuspense=function(a){return v(a)===n},b.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===f||a===l||a===h||a===g||a===n||a===o||"object"==typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===i||a.$$typeof===j||a.$$typeof===m||a.$$typeof===s||a.$$typeof===t||a.$$typeof===u||a.$$typeof===r)},b.typeOf=v},1296:function(a,b,c){"use strict";a.exports=c(6103)},1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(3302)}])},3302:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.r(b),c.d(b,{default:function(){return bK}});var e,f=c(5893);c(906);var g=c(9008),h=c.n(g),i=function(a){return(0,f.jsxs)("div",{children:[(0,f.jsx)("header",{children:(0,f.jsx)("h2",{children:"Web3-Nicoin-Next"})}),(0,f.jsx)("aside",{children:(0,f.jsx)("div",{children:"Menu goes here (coming soon)"})}),(0,f.jsx)("article",{children:a})]})},j=i;function k(){return(k=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var l=c(7294),m=c.t(l,2);function n(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}function o(a){return null!==a&&"object"==typeof a&&a.constructor===Object}function p(a,b,c={clone:!0}){let d=c.clone?k({},a):a;return o(a)&&o(b)&&Object.keys(b).forEach(e=>{"__proto__"!==e&&(o(b[e])&&e in a&&o(a[e])?d[e]=p(a[e],b[e],c):d[e]=b[e])}),d}let q=["values","unit","step"],r=a=>{let b=Object.keys(a).map(b=>({key:b,val:a[b]}))||[];return b.sort((a,b)=>a.val-b.val),b.reduce((a,b)=>k({},a,{[b.key]:b.val}),{})};var s={borderRadius:4};let t={xs:0,sm:600,md:900,lg:1200,xl:1536},u={keys:["xs","sm","md","lg","xl"],up:a=>`@media (min-width:${t[a]}px)`};function v(a,b,c=!0){if(!b||"string"!=typeof b)return null;if(a&&a.vars&&c){let d=`vars.${b}`.split(".").reduce((a,b)=>a&&a[b]?a[b]:null,a);if(null!=d)return d}return b.split(".").reduce((a,b)=>a&&null!=a[b]?a[b]:null,a)}var w=function(a,b){return b?p(a,b,{clone:!1}):a};let x={m:"margin",p:"padding"},y={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},z={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},A=function(a){let b={};return c=>(void 0===b[c]&&(b[c]=a(c)),b[c])}(a=>{if(a.length>2){if(!z[a])return[a];a=z[a]}let[b,c]=a.split(""),d=x[b],e=y[c]||"";return Array.isArray(e)?e.map(a=>d+a):[d+e]}),B=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],C=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],D=[...B,...C];function E(a){return function(a,b,c,d){var e;let f=null!=(e=v(a,b,!1))?e:8;return"number"==typeof f?a=>"string"==typeof a?a:f*a:Array.isArray(f)?a=>"string"==typeof a?a:f[a]:"function"==typeof f?f:()=>void 0}(a,"spacing",8,"spacing")}function F(a,b){let c=E(a.theme);return Object.keys(a).map(d=>(function(a,b,c,d){var e,f;if(-1===b.indexOf(c))return null;let g=A(c),h=(e=g,f=d,a=>e.reduce((b,c)=>(b[c]=function(a,b){if("string"==typeof b||null==b)return b;let c=a(Math.abs(b));return b>=0?c:"number"==typeof c?-c:`-${c}`}(f,a),b),{})),i=a[c];return function(a,b,c){let d=a.theme||{};if(Array.isArray(b)){let e=d.breakpoints||u;return b.reduce((a,d,f)=>(a[e.up(e.keys[f])]=c(b[f]),a),{})}if("object"==typeof b){let f=d.breakpoints||u;return Object.keys(b).reduce((a,d)=>{if(-1!==Object.keys(f.values||t).indexOf(d)){let e=f.up(d);a[e]=c(b[d],d)}else{let g=d;a[g]=b[g]}return a},{})}let g=c(b);return g}(a,i,h)})(a,b,d,c)).reduce(w,{})}function G(a){return F(a,B)}function H(a){return F(a,C)}function I(a){return F(a,D)}G.propTypes={},G.filterProps=B,H.propTypes={},H.filterProps=C,I.propTypes={},I.filterProps=D;let J=["breakpoints","palette","spacing","shape"];var K=function(a={},...b){let{breakpoints:c={},palette:d={},spacing:e,shape:f={}}=a,g=n(a,J),h=function(a){let{values:b={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:c="px",step:d=5}=a,e=n(a,q),f=r(b),g=Object.keys(f);function h(a){let d="number"==typeof b[a]?b[a]:a;return`@media (min-width:${d}${c})`}function i(a){let e="number"==typeof b[a]?b[a]:a;return`@media (max-width:${e-d/100}${c})`}function j(a,e){let f=g.indexOf(e);return`@media (min-width:${"number"==typeof b[a]?b[a]:a}${c}) and (max-width:${(-1!==f&&"number"==typeof b[g[f]]?b[g[f]]:e)-d/100}${c})`}return k({keys:g,values:f,up:h,down:i,between:j,only:function(a){return g.indexOf(a)+1<g.length?j(a,g[g.indexOf(a)+1]):h(a)},not:function(a){let b=g.indexOf(a);return 0===b?h(g[1]):b===g.length-1?i(g[b]):j(a,g[g.indexOf(a)+1]).replace("@media","@media not all and")},unit:c},e)}(c),i=function(a=8){if(a.mui)return a;let b=E({spacing:a}),c=(...a)=>{let c=0===a.length?[1]:a;return c.map(a=>{let c=b(a);return"number"==typeof c?`${c}px`:c}).join(" ")};return c.mui=!0,c}(e),j=p({breakpoints:h,direction:"ltr",components:{},palette:k({mode:"light"},d),spacing:i,shape:k({},s,f)},g);return b.reduce((a,b)=>p(a,b),j)};let L=l.createContext(null);var M=L,N=function(a=null){var b;let c=function(){let a=l.useContext(M);return a}();return c&&0!==Object.keys(b=c).length?c:a};let O=K();function P(a=O){return N(a)}var Q=P;function R(a){let b="https://mui.com/production-error/?code="+a;for(let c=1;c<arguments.length;c+=1)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified MUI error #"+a+"; visit "+b+" for the full message."}function S(a,b=0,c=1){return Math.min(Math.max(b,a),c)}function T(a){if(a.type)return a;if("#"===a.charAt(0))return T(function(a){a=a.slice(1);let b=RegExp(`.{1,${a.length>=6?2:1}}`,"g"),c=a.match(b);return c&&1===c[0].length&&(c=c.map(a=>a+a)),c?`rgb${4===c.length?"a":""}(${c.map((a,b)=>b<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}(a));let b=a.indexOf("("),c=a.substring(0,b);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(c))throw Error(R(9,a));let d=a.substring(b+1,a.length-1),e;if("color"===c){if(e=(d=d.split(" ")).shift(),4===d.length&&"/"===d[3].charAt(0)&&(d[3]=d[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(e))throw Error(R(10,e))}else d=d.split(",");return d=d.map(a=>parseFloat(a)),{type:c,values:d,colorSpace:e}}function U(a){let{type:b,colorSpace:c}=a,{values:d}=a;return -1!==b.indexOf("rgb")?d=d.map((a,b)=>b<3?parseInt(a,10):a):-1!==b.indexOf("hsl")&&(d[1]=`${d[1]}%`,d[2]=`${d[2]}%`),d=-1!==b.indexOf("color")?`${c} ${d.join(" ")}`:`${d.join(", ")}`,`${b}(${d})`}function V(a){let b="hsl"===(a=T(a)).type?T(function(a){a=T(a);let{values:b}=a,c=b[0],d=b[1]/100,e=b[2]/100,f=d*Math.min(e,1-e),g=(a,b=(a+c/30)%12)=>e-f*Math.max(Math.min(b-3,9-b,1),-1),h="rgb",i=[Math.round(255*g(0)),Math.round(255*g(8)),Math.round(255*g(4))];return"hsla"===a.type&&(h+="a",i.push(b[3])),U({type:h,values:i})}(a)).values:a.values;return Number((.2126*(b=b.map(b=>("color"!==a.type&&(b/=255),b<=.03928?b/12.92:((b+.055)/1.055)**2.4)))[0]+.7152*b[1]+.0722*b[2]).toFixed(3))}var W={black:"#000",white:"#fff"},X={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Y={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Z={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},$={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},_={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},aa={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ab={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};let ac=["mode","contrastThreshold","tonalOffset"],ad={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:W.white,default:W.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},ae={text:{primary:W.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:W.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function af(a,b,c,d){let e=d.light||d,f=d.dark||1.5*d;a[b]||(a.hasOwnProperty(c)?a[b]=a[c]:"light"===b?a.light=function a(b,c){if(b=T(b),c=S(c),-1!==b.type.indexOf("hsl"))b.values[2]+=(100-b.values[2])*c;else if(-1!==b.type.indexOf("rgb"))for(let d=0;d<3;d+=1)b.values[d]+=(255-b.values[d])*c;else if(-1!==b.type.indexOf("color"))for(let e=0;e<3;e+=1)b.values[e]+=(1-b.values[e])*c;return U(b)}(a.main,e):"dark"===b&&(a.dark=function a(b,c){if(b=T(b),c=S(c),-1!==b.type.indexOf("hsl"))b.values[2]*=1-c;else if(-1!==b.type.indexOf("rgb")|| -1!==b.type.indexOf("color"))for(let d=0;d<3;d+=1)b.values[d]*=1-c;return U(b)}(a.main,f)))}let ag=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"],ah={textTransform:"uppercase"},ai='"Roboto", "Helvetica", "Arial", sans-serif';function aj(...a){return`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,0.2),${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,0.14),${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,0.12)`}let ak=["none",aj(0,2,1,-1,0,1,1,0,0,1,3,0),aj(0,3,1,-2,0,2,2,0,0,1,5,0),aj(0,3,3,-2,0,3,4,0,0,1,8,0),aj(0,2,4,-1,0,4,5,0,0,1,10,0),aj(0,3,5,-1,0,5,8,0,0,1,14,0),aj(0,3,5,-1,0,6,10,0,0,1,18,0),aj(0,4,5,-2,0,7,10,1,0,2,16,1),aj(0,5,5,-3,0,8,10,1,0,3,14,2),aj(0,5,6,-3,0,9,12,1,0,3,16,2),aj(0,6,6,-3,0,10,14,1,0,4,18,3),aj(0,6,7,-4,0,11,15,1,0,4,20,3),aj(0,7,8,-4,0,12,17,2,0,5,22,4),aj(0,7,8,-4,0,13,19,2,0,5,24,4),aj(0,7,9,-4,0,14,21,2,0,5,26,4),aj(0,8,9,-5,0,15,22,2,0,6,28,5),aj(0,8,10,-5,0,16,24,2,0,6,30,5),aj(0,8,11,-5,0,17,26,2,0,6,32,5),aj(0,9,11,-5,0,18,28,2,0,7,34,6),aj(0,9,12,-6,0,19,29,2,0,7,36,6),aj(0,10,13,-6,0,20,31,3,0,8,38,7),aj(0,10,13,-6,0,21,33,3,0,8,40,7),aj(0,10,14,-6,0,22,35,3,0,8,42,7),aj(0,11,14,-7,0,23,36,3,0,9,44,8),aj(0,11,15,-7,0,24,38,3,0,9,46,8)];var al=ak;let am=["duration","easing","delay"],an={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},ao={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ap(a){return`${Math.round(a)}ms`}function aq(a){if(!a)return 0;let b=a/36;return Math.round((4+15*b**.25+b/5)*10)}var ar={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};let as=["breakpoints","mixins","spacing","palette","transitions","typography","shape"],at=function a(b={},...c){var d,e;let{mixins:f={},palette:g={},transitions:h={},typography:i={}}=b,j=n(b,as);if(b.vars)throw Error(R(18));let l=function(a){let{mode:b="light",contrastThreshold:c=3,tonalOffset:d=.2}=a,e=n(a,ac),f=a.primary||function(a="light"){return"dark"===a?{main:_[200],light:_[50],dark:_[400]}:{main:_[700],light:_[400],dark:_[800]}}(b),g=a.secondary||function(a="light"){return"dark"===a?{main:Y[200],light:Y[50],dark:Y[400]}:{main:Y[500],light:Y[300],dark:Y[700]}}(b),h=a.error||function(a="light"){return"dark"===a?{main:Z[500],light:Z[300],dark:Z[700]}:{main:Z[700],light:Z[400],dark:Z[800]}}(b),i=a.info||function(a="light"){return"dark"===a?{main:aa[400],light:aa[300],dark:aa[700]}:{main:aa[700],light:aa[500],dark:aa[900]}}(b),j=a.success||function(a="light"){return"dark"===a?{main:ab[400],light:ab[300],dark:ab[700]}:{main:ab[800],light:ab[500],dark:ab[900]}}(b),l=a.warning||function(a="light"){return"dark"===a?{main:$[400],light:$[300],dark:$[700]}:{main:"#ed6c02",light:$[500],dark:$[900]}}(b);function m(a){let b=function(a,b){let c=V(a),d=V(b);return(Math.max(c,d)+.05)/(Math.min(c,d)+.05)}(a,ae.text.primary)>=c?ae.text.primary:ad.text.primary;return b}let o=({color:a,name:b,mainShade:c=500,lightShade:e=300,darkShade:f=700})=>{if(!(a=k({},a)).main&&a[c]&&(a.main=a[c]),!a.hasOwnProperty("main"))throw Error(R(11,b?` (${b})`:"",c));if("string"!=typeof a.main)throw Error(R(12,b?` (${b})`:"",JSON.stringify(a.main)));return af(a,"light",e,d),af(a,"dark",f,d),a.contrastText||(a.contrastText=m(a.main)),a},q=p(k({common:k({},W),mode:b,primary:o({color:f,name:"primary"}),secondary:o({color:g,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:o({color:h,name:"error"}),warning:o({color:l,name:"warning"}),info:o({color:i,name:"info"}),success:o({color:j,name:"success"}),grey:X,contrastThreshold:c,getContrastText:m,augmentColor:o,tonalOffset:d},{dark:ae,light:ad}[b]),e);return q}(g),m=K(b),o=p(m,{mixins:(d=m.breakpoints,e=f,k({toolbar:{minHeight:56,[d.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[d.up("sm")]:{minHeight:64}}},e)),palette:l,shadows:al.slice(),typography:function(a,b){let c="function"==typeof b?b(a):b,{fontFamily:d=ai,fontSize:e=14,fontWeightLight:f=300,fontWeightRegular:g=400,fontWeightMedium:h=500,fontWeightBold:i=700,htmlFontSize:j=16,allVariants:l,pxToRem:m}=c,o=n(c,ag),q=e/14,r=m||(a=>`${a/j*q}rem`),s=(a,b,c,e,f)=>{var g;return k({fontFamily:d,fontWeight:a,fontSize:r(b),lineHeight:c},d===ai?{letterSpacing:`${Math.round(1e5*(g=e/b))/1e5}em`}:{},f,l)},t={h1:s(f,96,1.167,-1.5),h2:s(f,60,1.2,-.5),h3:s(g,48,1.167,0),h4:s(g,34,1.235,.25),h5:s(g,24,1.334,0),h6:s(h,20,1.6,.15),subtitle1:s(g,16,1.75,.15),subtitle2:s(h,14,1.57,.1),body1:s(g,16,1.5,.15),body2:s(g,14,1.43,.15),button:s(h,14,1.75,.4,ah),caption:s(g,12,1.66,.4),overline:s(g,12,2.66,1,ah)};return p(k({htmlFontSize:j,pxToRem:r,fontFamily:d,fontSize:e,fontWeightLight:f,fontWeightRegular:g,fontWeightMedium:h,fontWeightBold:i},t),o,{clone:!1})}(l,i),transitions:function(a){let b=k({},an,a.easing),c=k({},ao,a.duration),d=(a=["all"],d={})=>{let{duration:e=c.standard,easing:f=b.easeInOut,delay:g=0}=d;return n(d,am),(Array.isArray(a)?a:[a]).map(a=>`${a} ${"string"==typeof e?e:ap(e)} ${f} ${"string"==typeof g?g:ap(g)}`).join(",")};return k({getAutoHeightDuration:aq,create:d},a,{easing:b,duration:c})}(h),zIndex:k({},ar)});return o=p(o,j),o=c.reduce((a,b)=>p(a,b),o)}();var au=at,av=function(){function a(a){var b=this;this._insertTag=function(a){var c;c=0===b.tags.length?b.insertionPoint?b.insertionPoint.nextSibling:b.prepend?b.container.firstChild:b.before:b.tags[b.tags.length-1].nextSibling,b.container.insertBefore(a,c),b.tags.push(a)},this.isSpeedy=void 0===a.speedy||a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var b=a.prototype;return b.hydrate=function(a){a.forEach(this._insertTag)},b.insert=function(a){if(this.ctr%(this.isSpeedy?65e3:1)==0){var b,c;this._insertTag((b=this,(c=document.createElement("style")).setAttribute("data-emotion",b.key),void 0!==b.nonce&&c.setAttribute("nonce",b.nonce),c.appendChild(document.createTextNode("")),c.setAttribute("data-s",""),c))}var d=this.tags[this.tags.length-1];if(this.isSpeedy){var e=function(a){if(a.sheet)return a.sheet;for(var b=0;b<document.styleSheets.length;b++)if(document.styleSheets[b].ownerNode===a)return document.styleSheets[b]}(d);try{e.insertRule(a,e.cssRules.length)}catch(f){}}else d.appendChild(document.createTextNode(a));this.ctr++},b.flush=function(){this.tags.forEach(function(a){return a.parentNode&&a.parentNode.removeChild(a)}),this.tags=[],this.ctr=0},a}(),aw=Math.abs,ax=String.fromCharCode,ay=Object.assign;function az(a){return a.trim()}function aA(a,b,c){return a.replace(b,c)}function aB(a,b){return a.indexOf(b)}function aC(a,b){return 0|a.charCodeAt(b)}function aD(a,b,c){return a.slice(b,c)}function aE(a){return a.length}function aF(a){return a.length}function aG(a,b){return b.push(a),a}var aH=1,aI=1,aJ=0,aK=0,aL=0,aM="";function aN(a,b,c,d,e,f,g){return{value:a,root:b,parent:c,type:d,props:e,children:f,line:aH,column:aI,length:g,return:""}}function aO(a,b){return ay(aN("",null,null,"",null,null,0),a,{length:-a.length},b)}function aP(){return aL=aK>0?aC(aM,--aK):0,aI--,10===aL&&(aI=1,aH--),aL}function aQ(){return aL=aK<aJ?aC(aM,aK++):0,aI++,10===aL&&(aI=1,aH++),aL}function aR(){return aC(aM,aK)}function aS(a,b){return aD(aM,a,b)}function aT(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function aU(a){return aH=aI=1,aJ=aE(aM=a),aK=0,[]}function aV(a){return aM="",a}function aW(a){return az(aS(aK-1,aZ(91===a?a+2:40===a?a+1:a)))}function aX(a){for(;aL=aR();)if(aL<33)aQ();else break;return aT(a)>2||aT(aL)>3?"":" "}function aY(a,b){for(;--b&&aQ()&& !(aL<48)&&!(aL>102)&&(!(aL>57)||!(aL<65))&&(!(aL>70)||!(aL<97)););return aS(a,aK+(b<6&&32==aR()&&32==aQ()))}function aZ(a){for(;aQ();)switch(aL){case a:return aK;case 34:case 39:34!==a&&39!==a&&aZ(aL);break;case 40:41===a&&aZ(a);break;case 92:aQ()}return aK}function a$(a,b){for(;aQ();)if(a+aL===57)break;else if(a+aL===84&&47===aR())break;return"/*"+aS(b,aK-1)+"*"+ax(47===a?a:aQ())}function a_(a){for(;!aT(aR());)aQ();return aS(a,aK)}var a0="-ms-",a1="-moz-",a2="-webkit-",a3="comm",a4="rule",a5="decl",a6="@keyframes";function a7(a,b){for(var c="",d=aF(a),e=0;e<d;e++)c+=b(a[e],e,a,b)||"";return c}function a8(a,b,c,d){switch(a.type){case"@import":case a5:return a.return=a.return||a.value;case a3:return"";case a6:return a.return=a.value+"{"+a7(a.children,d)+"}";case a4:a.value=a.props.join(",")}return aE(c=a7(a.children,d))?a.return=a.value+"{"+c+"}":""}function a9(a,b){var c,d;switch(c=a,((((d=b)<<2^aC(c,0))<<2^aC(c,1))<<2^aC(c,2))<<2^aC(c,3)){case 5103:return a2+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a2+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return a2+a+a1+a+a0+a+a;case 6828:case 4268:return a2+a+a0+a+a;case 6165:return a2+a+a0+"flex-"+a+a;case 5187:return a2+a+aA(a,/(\w+).+(:[^]+)/,a2+"box-$1$2"+a0+"flex-$1$2")+a;case 5443:return a2+a+a0+"flex-item-"+aA(a,/flex-|-self/,"")+a;case 4675:return a2+a+a0+"flex-line-pack"+aA(a,/align-content|flex-|-self/,"")+a;case 5548:return a2+a+a0+aA(a,"shrink","negative")+a;case 5292:return a2+a+a0+aA(a,"basis","preferred-size")+a;case 6060:return a2+"box-"+aA(a,"-grow","")+a2+a+a0+aA(a,"grow","positive")+a;case 4554:return a2+aA(a,/([^-])(transform)/g,"$1"+a2+"$2")+a;case 6187:return aA(aA(aA(a,/(zoom-|grab)/,a2+"$1"),/(image-set)/,a2+"$1"),a,"")+a;case 5495:case 3959:return aA(a,/(image-set\([^]*)/,a2+"$1$`$1");case 4968:return aA(aA(a,/(.+:)(flex-)?(.*)/,a2+"box-pack:$3"+a0+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a2+a+a;case 4095:case 3583:case 4068:case 2532:return aA(a,/(.+)-inline(.+)/,a2+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(aE(a)-1-b>6)switch(aC(a,b+1)){case 109:if(45!==aC(a,b+4))break;case 102:return aA(a,/(.+:)(.+)-([^]+)/,"$1"+a2+"$2-$3$1"+a1+(108==aC(a,b+3)?"$3":"$2-$3"))+a;case 115:return~aB(a,"stretch")?a9(aA(a,"stretch","fill-available"),b)+a:a}break;case 4949:if(115!==aC(a,b+1))break;case 6444:switch(aC(a,aE(a)-3-(~aB(a,"!important")&&10))){case 107:return aA(a,":",":"+a2)+a;case 101:return aA(a,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a2+(45===aC(a,14)?"inline-":"")+"box$3$1"+a2+"$2$3$1"+a0+"$2box$3")+a}break;case 5936:switch(aC(a,b+11)){case 114:return a2+a+a0+aA(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return a2+a+a0+aA(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return a2+a+a0+aA(a,/[svh]\w+-[tblr]{2}/,"lr")+a}return a2+a+a0+a+a}return a}function ba(a,b,c,d,e,f,g,h,i){for(var j=0,k=0,l=g,m=0,n=0,o=0,p=1,q=1,r=1,s=0,t="",u=e,v=f,w=d,x=t;q;)switch(o=s,s=aQ()){case 40:if(108!=o&&58==x.charCodeAt(l-1)){-1!=aB(x+=aA(aW(s),"&","&\f"),"&\f")&&(r=-1);break}case 34:case 39:case 91:x+=aW(s);break;case 9:case 10:case 13:case 32:x+=aX(o);break;case 92:x+=aY(aK-1,7);continue;case 47:switch(aR()){case 42:case 47:aG(bc(a$(aQ(),aK),b,c),i);break;default:x+="/"}break;case 123*p:h[j++]=aE(x)*r;case 125*p:case 59:case 0:switch(s){case 0:case 125:q=0;case 59+k:n>0&&aE(x)-l&&aG(n>32?bd(x+";",d,c,l-1):bd(aA(x," ","")+";",d,c,l-2),i);break;case 59:x+=";";default:if(aG(w=bb(x,b,c,j,k,e,h,t,u=[],v=[],l),f),123===s){if(0===k)ba(x,b,w,w,u,f,l,h,v);else switch(m){case 100:case 109:case 115:ba(a,w,w,d&&aG(bb(a,w,w,0,0,e,h,t,e,u=[],l),v),e,v,l,h,d?u:v);break;default:ba(x,w,w,w,[""],v,0,h,v)}}}j=k=n=0,p=r=1,t=x="",l=g;break;case 58:l=1+aE(x),n=o;default:if(p<1){if(123==s)--p;else if(125==s&&0==p++&&125==aP())continue}switch(x+=ax(s),s*p){case 38:r=k>0?1:(x+="\f",-1);break;case 44:h[j++]=(aE(x)-1)*r,r=1;break;case 64:45===aR()&&(x+=aW(aQ())),m=aR(),k=l=aE(t=x+=a_(aK)),s++;break;case 45:45===o&&2==aE(x)&&(p=0)}}return f}function bb(a,b,c,d,e,f,g,h,i,j,k){for(var l=e-1,m=0===e?f:[""],n=aF(m),o=0,p=0,q=0;o<d;++o)for(var r=0,s=aD(a,l+1,l=aw(p=g[o])),t=a;r<n;++r)(t=az(p>0?m[r]+" "+s:aA(s,/&\f/g,m[r])))&&(i[q++]=t);return aN(a,b,c,0===e?a4:h,i,j,k)}function bc(a,b,c){return aN(a,b,c,a3,ax(aL),aD(a,2,-2),0)}function bd(a,b,c,d){return aN(a,b,c,a5,aD(a,0,d),aD(a,d+1,-1),d)}var be=function(a,b,c){for(var d=0,e=0;d=e,e=aR(),38===d&&12===e&&(b[c]=1),!aT(e);)aQ();return aS(a,aK)},bf=function(a,b){var c=-1,d=44;do switch(aT(d)){case 0:38===d&&12===aR()&&(b[c]=1),a[c]+=be(aK-1,b,c);break;case 2:a[c]+=aW(d);break;case 4:if(44===d){a[++c]=58===aR()?"&\f":"",b[c]=a[c].length;break}default:a[c]+=ax(d)}while(d=aQ());return a},bg=new WeakMap,bh=function(a){if("rule"===a.type&&a.parent&&!(a.length<1)){for(var b=a.value,c=a.parent,d=a.column===c.column&&a.line===c.line;"rule"!==c.type;)if(!(c=c.parent))return;if((1!==a.props.length||58===b.charCodeAt(0)||bg.get(c))&&!d){bg.set(a,!0);for(var e,f,g=[],h=(e=b,f=g,aV(bf(aU(e),f))),i=c.props,j=0,k=0;j<h.length;j++)for(var l=0;l<i.length;l++,k++)a.props[k]=g[j]?h[j].replace(/&\f/g,i[l]):i[l]+" "+h[j]}}},bi=function(a){if("decl"===a.type){var b=a.value;108===b.charCodeAt(0)&&98===b.charCodeAt(2)&&(a.return="",a.value="")}},bj=[function(a,b,c,d){if(a.length> -1&&!a.return)switch(a.type){case a5:a.return=a9(a.value,a.length);break;case a6:return a7([aO(a,{value:aA(a.value,"@","@"+a2)})],d);case a4:if(a.length)return function(a,b){return a.map(b).join("")}(a.props,function(b){var c,e;switch(c=b,(c=/(::plac\w+|:read-\w+)/.exec(c))?c[0]:c){case":read-only":case":read-write":return a7([aO(a,{props:[aA(b,/:(read-\w+)/,":"+a1+"$1")]})],d);case"::placeholder":return a7([aO(a,{props:[aA(b,/:(plac\w+)/,":"+a2+"input-$1")]}),aO(a,{props:[aA(b,/:(plac\w+)/,":"+a1+"$1")]}),aO(a,{props:[aA(b,/:(plac\w+)/,a0+"input-$1")]})],d)}return""})}}],bk=function(a){for(var b,c=0,d=0,e=a.length;e>=4;++d,e-=4)b=(65535&(b=255&a.charCodeAt(d)|(255&a.charCodeAt(++d))<<8|(255&a.charCodeAt(++d))<<16|(255&a.charCodeAt(++d))<<24))*1540483477+((b>>>16)*59797<<16),b^=b>>>24,c=(65535&b)*1540483477+((b>>>16)*59797<<16)^(65535&c)*1540483477+((c>>>16)*59797<<16);switch(e){case 3:c^=(255&a.charCodeAt(d+2))<<16;case 2:c^=(255&a.charCodeAt(d+1))<<8;case 1:c^=255&a.charCodeAt(d),c=(65535&c)*1540483477+((c>>>16)*59797<<16)}return c^=c>>>13,(((c=(65535&c)*1540483477+((c>>>16)*59797<<16))^c>>>15)>>>0).toString(36)},bl={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bm=/[A-Z]|^ms/g,bn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,bo=function(a){return 45===a.charCodeAt(1)},bp=function(a){return null!=a&&"boolean"!=typeof a},bq=function(a){var b=Object.create(null);return function(c){return void 0===b[c]&&(b[c]=a(c)),b[c]}}(function(a){return bo(a)?a:a.replace(bm,"-$&").toLowerCase()}),br=function(a,b){switch(a){case"animation":case"animationName":if("string"==typeof b)return b.replace(bn,function(a,b,c){return e={name:b,styles:c,next:e},b})}return 1===bl[a]||bo(a)||"number"!=typeof b||0===b?b:b+"px"};function bs(a,b,c){if(null==c)return"";if(void 0!==c.__emotion_styles)return c;switch(typeof c){case"boolean":return"";case"object":if(1===c.anim)return e={name:c.name,styles:c.styles,next:e},c.name;if(void 0!==c.styles){var d,f=c.next;if(void 0!==f)for(;void 0!==f;)e={name:f.name,styles:f.styles,next:e},f=f.next;return c.styles+";"}return bt(a,b,c);case"function":if(void 0!==a){var g=e,h=c(a);return e=g,bs(a,b,h)}}if(null==b)return c;var i=b[c];return void 0!==i?i:c}function bt(a,b,c){var d="";if(Array.isArray(c))for(var e=0;e<c.length;e++)d+=bs(a,b,c[e])+";";else for(var f in c){var g=c[f];if("object"!=typeof g)null!=b&& void 0!==b[g]?d+=f+"{"+b[g]+"}":bp(g)&&(d+=bq(f)+":"+br(f,g)+";");else if(Array.isArray(g)&&"string"==typeof g[0]&&(null==b|| void 0===b[g[0]]))for(var h=0;h<g.length;h++)bp(g[h])&&(d+=bq(f)+":"+br(f,g[h])+";");else{var i=bs(a,b,g);switch(f){case"animation":case"animationName":d+=bq(f)+":"+i+";";break;default:d+=f+"{"+i+"}"}}}return d}var bu,bv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,bw=function(a,b,c){if(1===a.length&&"object"==typeof a[0]&&null!==a[0]&& void 0!==a[0].styles)return a[0];var d,f,g=!0,h="";e=void 0;var i=a[0];null==i|| void 0===i.raw?(g=!1,h+=bs(c,b,i)):h+=i[0];for(var j=1;j<a.length;j++)h+=bs(c,b,a[j]),g&&(h+=i[j]);bv.lastIndex=0;for(var k="";null!==(f=bv.exec(h));)k+="-"+f[1];return{name:bk(h)+k,styles:h,next:e}},bx=!!m.useInsertionEffect&&m.useInsertionEffect||l.useLayoutEffect,by=({}.hasOwnProperty,(0,l.createContext)("undefined"!=typeof HTMLElement?function(a){var b=a.key;if("css"===b){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(a){-1!==a.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(a),a.setAttribute("data-s",""))})}var d=a.stylisPlugins||bj,e={},f=[];g=a.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+b+' "]'),function(a){for(var b=a.getAttribute("data-emotion").split(" "),c=1;c<b.length;c++)e[b[c]]=!0;f.push(a)});var g,h,i,j,k,l=[a8,function(a){return function(b){!b.root&&(b=b.return)&&a(b)}}(function(a){i.insert(a)})],m=(j=[bh,bi].concat(d,l),k=aF(j),function(a,b,c,d){for(var e="",f=0;f<k;f++)e+=j[f](a,b,c,d)||"";return e}),n=function(a){var b;return a7(aV(ba("",null,null,null,[""],b=aU(b=a),0,[0],b)),m)};h=function(a,b,c,d){i=c,n(a?a+"{"+b.styles+"}":b.styles),d&&(o.inserted[b.name]=!0)};var o={key:b,sheet:new av({key:b,container:g,nonce:a.nonce,speedy:a.speedy,prepend:a.prepend,insertionPoint:a.insertionPoint}),nonce:a.nonce,inserted:e,registered:{},insert:h};return o.sheet.hydrate(f),o}({key:"css"}):null));by.Provider;var bz=(0,l.createContext)({}),bA=function(a){var b=a.split(".");return b[b.length-1]};c(8679);var bB=function(a,b,c){var d=a.key+"-"+b.name;!1===c&& void 0===a.registered[d]&&(a.registered[d]=b.styles)},bC=function(a,b,c){bB(a,b,c);var d=a.key+"-"+b.name;if(void 0===a.inserted[b.name]){var e=b;do a.insert(b===e?"."+d:"",e,a.sheet,!0),e=e.next;while(void 0!==e)}},bD=function(a){return(0,l.forwardRef)(function(b,c){var d=(0,l.useContext)(by);return a(b,d,c)})}(function(a,b){var c=bw([a.styles],void 0,(0,l.useContext)(bz)),d=(0,l.useRef)();return bx(function(){var a=b.key+"-global",e=new b.sheet.constructor({key:a,nonce:b.sheet.nonce,container:b.sheet.container,speedy:b.sheet.isSpeedy}),f=!1,g=document.querySelector('style[data-emotion="'+a+" "+c.name+'"]');return b.sheet.tags.length&&(e.before=b.sheet.tags[0]),null!==g&&(f=!0,g.setAttribute("data-emotion",a),e.hydrate([g])),d.current=[e,f],function(){e.flush()}},[b]),bx(function(){var a=d.current,e=a[0];if(a[1]){a[1]=!1;return}if(void 0!==c.next&&bC(b,c.next,!0),e.tags.length){var f=e.tags[e.tags.length-1].nextElementSibling;e.before=f,e.flush()}b.insert("",c,e,!1)},[b,c.name]),null});function bE(a){let{styles:b,defaultTheme:c={}}=a;return(0,f.jsx)(bD,{styles:"function"==typeof b?a=>{var d;return b(null==(d=a)||0===Object.keys(d).length?c:a)}:b})}var bF=function(a){return(0,f.jsx)(bE,k({},a,{defaultTheme:au}))};let bG=(a,b)=>k({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},b&&{colorScheme:a.palette.mode}),bH=a=>k({color:(a.vars||a).palette.text.primary},a.typography.body1,{backgroundColor:(a.vars||a).palette.background.default,"@media print":{backgroundColor:(a.vars||a).palette.common.white}}),bI=(a,b=!1)=>{var c,d;let e={html:bG(a,b),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:a.typography.fontWeightBold},body:k({margin:0},bH(a),{"&::backdrop":{backgroundColor:(a.vars||a).palette.background.default}})},f=null==(c=a.components)?void 0:null==(d=c.MuiCssBaseline)?void 0:d.styleOverrides;return f&&(e=[e,f]),e};var bJ=function(a){let b=function({props:a,name:b}){return function({props:a,name:b,defaultTheme:c}){let d=Q(c),e=function(a){let{theme:b,name:c,props:d}=a;return b&&b.components&&b.components[c]&&b.components[c].defaultProps?function(a,b){let c=k({},b);return Object.keys(a).forEach(b=>{void 0===c[b]&&(c[b]=a[b])}),c}(b.components[c].defaultProps,d):d}({theme:d,name:b,props:a});return e}({props:a,name:b,defaultTheme:au})}({props:a,name:"MuiCssBaseline"}),{children:c,enableColorScheme:d=!1}=b;return(0,f.jsxs)(l.Fragment,{children:[(0,f.jsx)(bF,{styles:a=>bI(a,d)}),c]})},bK=function(a){var b=a.Component,c=a.pageProps,e=b.getLayout||j;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h(),{children:[(0,f.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,f.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),(0,f.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),(0,f.jsx)(bJ,{})]}),e((0,f.jsx)(b,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}({},c)))]})}},906:function(){},9008:function(a,b,c){a.exports=c(5443)}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])