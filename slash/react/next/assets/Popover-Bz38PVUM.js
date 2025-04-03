import{r as ee,j as P}from"./index-DK-fRI8B.js";import{r as o,R as te,e as D}from"./index-DbaA8R3S.js";import{o as ne,c as re,a as Y,i as T,g as oe}from"./floating-ui.dom-0axdaRjh.js";import{p as se}from"./Loader-D6y4K9Ud.js";var W=typeof document<"u"?o.useLayoutEffect:o.useEffect;function H(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,s;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!H(e[n],t[n]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,s[n]))return!1;for(n=r;n--!==0;){const a=s[n];if(!(a==="_owner"&&e.$$typeof)&&!H(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function z(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function q(e,t){const r=z(e);return Math.round(t*r)/r}function V(e){const t=o.useRef(e);return W(()=>{t.current=e}),t}function le(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:s,elements:{reference:a,floating:f}={},transform:c=!0,whileElementsMounted:u,open:v}=e,[i,h]=o.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[R,l]=o.useState(n);H(R,n)||l(n);const[p,x]=o.useState(null),[y,_]=o.useState(null),O=o.useCallback(g=>{g!==C.current&&(C.current=g,x(g))},[]),d=o.useCallback(g=>{g!==w.current&&(w.current=g,_(g))},[]),m=a||p,M=f||y,C=o.useRef(null),w=o.useRef(null),E=o.useRef(i),B=u!=null,b=V(u),L=V(s),S=V(v),k=o.useCallback(()=>{if(!C.current||!w.current)return;const g={placement:t,strategy:r,middleware:R};L.current&&(g.platform=L.current),re(C.current,w.current,g).then(I=>{const F={...I,isPositioned:S.current!==!1};N.current&&!H(E.current,F)&&(E.current=F,ee.flushSync(()=>{h(F)}))})},[R,t,r,L,S]);W(()=>{v===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,h(g=>({...g,isPositioned:!1})))},[v]);const N=o.useRef(!1);W(()=>(N.current=!0,()=>{N.current=!1}),[]),W(()=>{if(m&&(C.current=m),M&&(w.current=M),m&&M){if(b.current)return b.current(m,M,k);k()}},[m,M,k,b,B]);const A=o.useMemo(()=>({reference:C,floating:w,setReference:O,setFloating:d}),[O,d]),j=o.useMemo(()=>({reference:m,floating:M}),[m,M]),$=o.useMemo(()=>{const g={position:r,left:0,top:0};if(!j.floating)return g;const I=q(j.floating,i.x),F=q(j.floating,i.y);return c?{...g,transform:"translate("+I+"px, "+F+"px)",...z(j.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:I,top:F}},[r,c,j.floating,i.x,i.y]);return o.useMemo(()=>({...i,update:k,refs:A,elements:j,floatingStyles:$}),[i,k,A,j,$])}const ce=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:s}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?Y({element:n.current,padding:s}).fn(r):{}:n?Y({element:n,padding:s}).fn(r):{}}}},ae=(e,t)=>({...ne(e),options:[e,t]}),fe=(e,t)=>({...ce(e),options:[e,t]}),G={...te},ie=G.useInsertionEffect,ue=ie||(e=>e());function de(e){const t=o.useRef(()=>{});return ue(()=>{t.current=e}),o.useCallback(function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t.current==null?void 0:t.current(...n)},[])}var K=typeof document<"u"?o.useLayoutEffect:o.useEffect;function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(this,arguments)}let Q=!1,pe=0;const Z=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+pe++;function me(){const[e,t]=o.useState(()=>Q?Z():void 0);return K(()=>{e==null&&t(Z())},[]),o.useEffect(()=>{Q=!0},[]),e}const ge=G.useId,J=ge||me,he=o.forwardRef(function(t,r){const{context:{placement:n,elements:{floating:s},middlewareData:{arrow:a,shift:f}},width:c=14,height:u=7,tipRadius:v=0,strokeWidth:i=0,staticOffset:h,stroke:R,d:l,style:{transform:p,...x}={},...y}=t,_=J(),[O,d]=o.useState(!1);if(K(()=>{if(!s)return;oe(s).direction==="rtl"&&d(!0)},[s]),!s)return null;const[m,M]=n.split("-"),C=m==="top"||m==="bottom";let w=h;(C&&f!=null&&f.x||!C&&f!=null&&f.y)&&(w=null);const E=i*2,B=E/2,b=c/2*(v/-8+1),L=u/2*v/4,S=!!l,k=w&&M==="end"?"bottom":"top";let N=w&&M==="end"?"right":"left";w&&O&&(N=M==="end"?"left":"right");const A=(a==null?void 0:a.x)!=null?w||a.x:"",j=(a==null?void 0:a.y)!=null?w||a.y:"",$=l||"M0,0"+(" H"+c)+(" L"+(c-b)+","+(u-L))+(" Q"+c/2+","+u+" "+b+","+(u-L))+" Z",g={top:S?"rotate(180deg)":"",left:S?"rotate(90deg)":"rotate(-90deg)",bottom:S?"":"rotate(180deg)",right:S?"rotate(-90deg)":"rotate(90deg)"}[m];return o.createElement("svg",X({},y,{"aria-hidden":!0,ref:r,width:S?c:c+E,height:c,viewBox:"0 0 "+c+" "+(u>c?u:c),style:{position:"absolute",pointerEvents:"none",[N]:A,[k]:j,[m]:C||S?"100%":"calc(100% - "+E/2+"px)",transform:[g,p].filter(I=>!!I).join(" "),...x}}),E>0&&o.createElement("path",{clipPath:"url(#"+_+")",fill:"none",stroke:R,strokeWidth:E+(l?0:1),d:$}),o.createElement("path",{stroke:E&&!l?y.fill:"none",d:$}),o.createElement("clipPath",{id:_},o.createElement("rect",{x:-B,y:B*(S?-1:1),width:c+E,height:c})))});function Re(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(s=>s(r))},on(t,r){e.set(t,[...e.get(t)||[],r])},off(t,r){var n;e.set(t,((n=e.get(t))==null?void 0:n.filter(s=>s!==r))||[])}}}const ve=o.createContext(null),xe=o.createContext(null),we=()=>{var e;return((e=o.useContext(ve))==null?void 0:e.id)||null},Ee=()=>o.useContext(xe);function ye(e){const{open:t=!1,onOpenChange:r,elements:n}=e,s=J(),a=o.useRef({}),[f]=o.useState(()=>Re()),c=we()!=null,[u,v]=o.useState(n.reference),i=de((l,p,x)=>{a.current.openEvent=l?p:void 0,f.emit("openchange",{open:l,event:p,reason:x,nested:c}),r==null||r(l,p,x)}),h=o.useMemo(()=>({setPositionReference:v}),[]),R=o.useMemo(()=>({reference:u||n.reference||null,floating:n.floating||null,domReference:n.reference}),[u,n.reference,n.floating]);return o.useMemo(()=>({dataRef:a,open:t,onOpenChange:i,elements:R,events:f,floatingId:s,refs:h}),[t,i,R,f,s,h])}function Me(e){e===void 0&&(e={});const{nodeId:t}=e,r=ye({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,s=n.elements,[a,f]=o.useState(null),[c,u]=o.useState(null),i=(s==null?void 0:s.domReference)||a,h=o.useRef(null),R=Ee();K(()=>{i&&(h.current=i)},[i]);const l=le({...e,elements:{...s,...c&&{reference:c}}}),p=o.useCallback(d=>{const m=T(d)?{getBoundingClientRect:()=>d.getBoundingClientRect(),contextElement:d}:d;u(m),l.refs.setReference(m)},[l.refs]),x=o.useCallback(d=>{(T(d)||d===null)&&(h.current=d,f(d)),(T(l.refs.reference.current)||l.refs.reference.current===null||d!==null&&!T(d))&&l.refs.setReference(d)},[l.refs]),y=o.useMemo(()=>({...l.refs,setReference:x,setPositionReference:p,domReference:h}),[l.refs,x,p]),_=o.useMemo(()=>({...l.elements,domReference:i}),[l.elements,i]),O=o.useMemo(()=>({...l,...n,refs:y,elements:_,nodeId:t}),[l,y,_,t,n]);return K(()=>{n.dataRef.current.floatingContext=O;const d=R==null?void 0:R.nodesRef.current.find(m=>m.id===t);d&&(d.context=O)}),o.useMemo(()=>({...l,context:O,refs:y,elements:_}),[l,y,_,O])}const Pe="af-popover__container",Ce=({placement:e,children:t,isOpen:r,target:n,className:s,classModifier:a,onMouseEnter:f,onMouseLeave:c})=>{const u=se(s,a,Pe),[v,i]=D.useState(null),[h,R]=D.useState(null),l=o.useRef(null),{floatingStyles:p,context:x}=Me({placement:e,elements:{reference:v,floating:h},middleware:[ae(12),fe({element:l})]});return P.jsxs("div",{className:u,children:[P.jsx("div",{ref:i,className:"af-popover__container-over",role:"presentation",children:n}),r&&P.jsxs("div",{ref:R,onMouseEnter:f,onMouseLeave:c,style:p,"data-popper-placement":e,className:"af-popover__container-pop",children:[P.jsx("div",{children:t}),P.jsx(he,{ref:l,context:x,fill:"white"})]})]})},Se="af-popover__container",U=({children:e,isOpen:t,placement:r="right",className:n=Se,classModifier:s,element:a,onMouseEnter:f,onMouseLeave:c})=>P.jsx(Ce,{target:e,placement:r,isOpen:t,className:n,classModifier:s,onMouseEnter:f,onMouseLeave:c,children:a}),_e=({children:e,placement:t,className:r,classModifier:n,element:s})=>{const a=D.useRef(null),[f,c]=D.useState(!1),[u,v]=D.useState(!1),i=(p,x)=>{if(u||!a.current||x===f){p.stopPropagation();return}c(y=>x??!y)},h=p=>{p.key==="Enter"&&i(p)},R=()=>{v(!0)},l=()=>{v(!1)};return P.jsx("div",{role:"button",tabIndex:0,ref:a,className:"af-popover__wrapper af-popover__wrapper--click",onKeyDown:h,onClick:i,onBlur:p=>i(p,!1),children:P.jsx(U,{onMouseEnter:R,onMouseLeave:l,isOpen:f,placement:t,className:r,classModifier:n,element:s,children:e})})},Oe=({children:e,placement:t,className:r,classModifier:n,element:s})=>{const[a,f]=D.useState(!1),c=()=>{f(!0)},u=()=>{f(!1)};return P.jsx("div",{role:"button",tabIndex:0,className:"af-popover__wrapper af-popover__wrapper--over",onMouseEnter:c,onMouseLeave:u,onFocus:c,onBlur:u,children:P.jsx(U,{isOpen:a,placement:t,className:r,classModifier:n,element:s,children:e})})},Le=({children:e,placement:t="top",className:r,classModifier:n,mode:s="click",popoverElement:a})=>{const f=s==="click"?_e:Oe;return P.jsx(f,{className:r,classModifier:n,placement:t,element:a,children:e})};export{Le as P};
