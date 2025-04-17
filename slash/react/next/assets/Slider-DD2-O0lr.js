import{j as At}from"./jsx-runtime-D_zvdyIk.js";import{_ as X,a as We,b as St,c as ze,d as Y,e as te,f as ve}from"./toConsumableArray-CZrnpuDP.js";import{U as Je,O as we,p as Pt}from"./Loader-C1uJHYLx.js";import{r as n}from"./index-DbaA8R3S.js";import{r as Ut}from"./index-BdSKqQiB.js";function Ue(e){var t=n.useRef();t.current=e;var i=n.useCallback(function(){for(var l,a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return(l=t.current)===null||l===void 0?void 0:l.call.apply(l,[t].concat(u))},[]);return i}function It(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var gt=It()?n.useLayoutEffect:n.useEffect,Et=function(t,i){var l=n.useRef(!0);gt(function(){return t(l.current)},i),gt(function(){return l.current=!1,function(){l.current=!0}},[])},mt=function(t,i){Et(function(l){if(!l)return t()},i)};function ht(e){var t=n.useRef(!1),i=n.useState(e),l=X(i,2),a=l[0],u=l[1];n.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function c(v,k){k&&t.current||u(v)}return[a,c]}function Ke(e){return e!==void 0}function jt(e,t){var i=t||{},l=i.defaultValue,a=i.value,u=i.onChange,c=i.postState,v=ht(function(){return Ke(a)?a:Ke(l)?typeof l=="function"?l():l:typeof e=="function"?e():e}),k=X(v,2),b=k[0],y=k[1],s=a!==void 0?a:b,m=c?c(s):s,h=Ue(u),S=ht([s]),f=X(S,2),o=f[0],d=f[1];mt(function(){var C=o[0];b!==C&&h(b,C)},[o]),mt(function(){Ke(a)||y(a)},[a]);var r=Ue(function(C,R){y(C,R),d([s],R)});return[m,r]}function Xt(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,l=new Set;function a(u,c){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,k=l.has(u);if(Je(!k,"Warning: There may be circular references"),k)return!1;if(u===c)return!0;if(i&&v>1)return!1;l.add(u);var b=v+1;if(Array.isArray(u)){if(!Array.isArray(c)||u.length!==c.length)return!1;for(var y=0;y<u.length;y++)if(!a(u[y],c[y],b))return!1;return!0}if(u&&c&&We(u)==="object"&&We(c)==="object"){var s=Object.keys(u);return s.length!==Object.keys(c).length?!1:s.every(function(m){return a(u[m],c[m],b)})}return!1}return a(e,t)}function Qe(e,t,i){return(e-t)/(i-t)}function Ze(e,t,i,l){var a=Qe(t,i,l),u={};switch(e){case"rtl":u.right="".concat(a*100,"%"),u.transform="translateX(50%)";break;case"btt":u.bottom="".concat(a*100,"%"),u.transform="translateY(50%)";break;case"ttb":u.top="".concat(a*100,"%"),u.transform="translateY(-50%)";break;default:u.left="".concat(a*100,"%"),u.transform="translateX(-50%)";break}return u}function $e(e,t){return Array.isArray(e)?e[t]:e}var I={BACKSPACE:8,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},Fe=n.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),Yt=n.createContext({}),Bt=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],Ct=n.forwardRef(function(e,t){var i=e.prefixCls,l=e.value,a=e.valueIndex,u=e.onStartMove,c=e.onDelete,v=e.style,k=e.render,b=e.dragging,y=e.draggingDelete,s=e.onOffsetChange,m=e.onChangeComplete,h=e.onFocus,S=e.onMouseEnter,f=St(e,Bt),o=n.useContext(Fe),d=o.min,r=o.max,C=o.direction,R=o.disabled,w=o.keyboard,N=o.range,B=o.tabIndex,G=o.ariaLabelForHandle,_=o.ariaLabelledByForHandle,x=o.ariaRequired,E=o.ariaValueTextFormatterForHandle,M=o.styles,A=o.classNames,V="".concat(i,"-handle"),j=function(H){R||u(H,a)},z=function(H){h==null||h(H,a)},T=function(H){S(H,a)},fe=function(H){if(!R&&w){var $=null;switch(H.which||H.keyCode){case I.LEFT:$=C==="ltr"||C==="btt"?-1:1;break;case I.RIGHT:$=C==="ltr"||C==="btt"?1:-1;break;case I.UP:$=C!=="ttb"?1:-1;break;case I.DOWN:$=C!=="ttb"?-1:1;break;case I.HOME:$="min";break;case I.END:$="max";break;case I.PAGE_UP:$=2;break;case I.PAGE_DOWN:$=-2;break;case I.BACKSPACE:case I.DELETE:c(a);break}$!==null&&(H.preventDefault(),s($,a))}},ae=function(H){switch(H.which||H.keyCode){case I.LEFT:case I.RIGHT:case I.UP:case I.DOWN:case I.HOME:case I.END:case I.PAGE_UP:case I.PAGE_DOWN:m==null||m();break}},Ee=Ze(C,l,d,r),de={};if(a!==null){var ke;de={tabIndex:R?null:$e(B,a),role:"slider","aria-valuemin":d,"aria-valuemax":r,"aria-valuenow":l,"aria-disabled":R,"aria-label":$e(G,a),"aria-labelledby":$e(_,a),"aria-required":$e(x,a),"aria-valuetext":(ke=$e(E,a))===null||ke===void 0?void 0:ke(l),"aria-orientation":C==="ltr"||C==="rtl"?"horizontal":"vertical",onMouseDown:j,onTouchStart:j,onFocus:z,onMouseEnter:T,onKeyDown:fe,onKeyUp:ae}}var Me=n.createElement("div",ze({ref:t,className:we(V,te(te(te({},"".concat(V,"-").concat(a+1),a!==null&&N),"".concat(V,"-dragging"),b),"".concat(V,"-dragging-delete"),y),A.handle),style:Y(Y(Y({},Ee),v),M.handle)},de,f));return k&&(Me=k(Me,{index:a,prefixCls:i,value:l,dragging:b,draggingDelete:y})),Me}),Vt=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],qt=n.forwardRef(function(e,t){var i=e.prefixCls,l=e.style,a=e.onStartMove,u=e.onOffsetChange,c=e.values,v=e.handleRender,k=e.activeHandleRender,b=e.draggingIndex,y=e.draggingDelete,s=e.onFocus,m=St(e,Vt),h=n.useRef({}),S=n.useState(!1),f=X(S,2),o=f[0],d=f[1],r=n.useState(-1),C=X(r,2),R=C[0],w=C[1],N=function(E){w(E),d(!0)},B=function(E,M){N(M),s==null||s(E)},G=function(E,M){N(M)};n.useImperativeHandle(t,function(){return{focus:function(E){var M;(M=h.current[E])===null||M===void 0||M.focus()},hideHelp:function(){Ut.flushSync(function(){d(!1)})}}});var _=Y({prefixCls:i,onStartMove:a,onOffsetChange:u,render:v,onFocus:B,onMouseEnter:G},m);return n.createElement(n.Fragment,null,c.map(function(x,E){var M=b===E;return n.createElement(Ct,ze({ref:function(V){V?h.current[E]=V:delete h.current[E]},dragging:M,draggingDelete:M&&y,style:$e(l,E),key:E,value:x,valueIndex:E},_))}),k&&o&&n.createElement(Ct,ze({key:"a11y"},_,{value:c[R],valueIndex:null,dragging:b!==-1,draggingDelete:y,render:k,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),Gt=function(t){var i=t.prefixCls,l=t.style,a=t.children,u=t.value,c=t.onClick,v=n.useContext(Fe),k=v.min,b=v.max,y=v.direction,s=v.includedStart,m=v.includedEnd,h=v.included,S="".concat(i,"-text"),f=Ze(y,u,k,b);return n.createElement("span",{className:we(S,te({},"".concat(S,"-active"),h&&s<=u&&u<=m)),style:Y(Y({},f),l),onMouseDown:function(d){d.stopPropagation()},onClick:function(){c(u)}},a)},Kt=function(t){var i=t.prefixCls,l=t.marks,a=t.onClick,u="".concat(i,"-mark");return l.length?n.createElement("div",{className:u},l.map(function(c){var v=c.value,k=c.style,b=c.label;return n.createElement(Gt,{key:v,prefixCls:u,style:k,value:v,onClick:a},b)})):null},Wt=function(t){var i=t.prefixCls,l=t.value,a=t.style,u=t.activeStyle,c=n.useContext(Fe),v=c.min,k=c.max,b=c.direction,y=c.included,s=c.includedStart,m=c.includedEnd,h="".concat(i,"-dot"),S=y&&s<=l&&l<=m,f=Y(Y({},Ze(b,l,v,k)),typeof a=="function"?a(l):a);return S&&(f=Y(Y({},f),typeof u=="function"?u(l):u)),n.createElement("span",{className:we(h,te({},"".concat(h,"-active"),S)),style:f})},zt=function(t){var i=t.prefixCls,l=t.marks,a=t.dots,u=t.style,c=t.activeStyle,v=n.useContext(Fe),k=v.min,b=v.max,y=v.step,s=n.useMemo(function(){var m=new Set;if(l.forEach(function(S){m.add(S.value)}),a&&y!==null)for(var h=k;h<=b;)m.add(h),h+=y;return Array.from(m)},[k,b,y,a,l]);return n.createElement("div",{className:"".concat(i,"-step")},s.map(function(m){return n.createElement(Wt,{prefixCls:i,key:m,value:m,style:u,activeStyle:c})}))},bt=function(t){var i=t.prefixCls,l=t.style,a=t.start,u=t.end,c=t.index,v=t.onStartMove,k=t.replaceCls,b=n.useContext(Fe),y=b.direction,s=b.min,m=b.max,h=b.disabled,S=b.range,f=b.classNames,o="".concat(i,"-track"),d=Qe(a,s,m),r=Qe(u,s,m),C=function(B){!h&&v&&v(B,-1)},R={};switch(y){case"rtl":R.right="".concat(d*100,"%"),R.width="".concat(r*100-d*100,"%");break;case"btt":R.bottom="".concat(d*100,"%"),R.height="".concat(r*100-d*100,"%");break;case"ttb":R.top="".concat(d*100,"%"),R.height="".concat(r*100-d*100,"%");break;default:R.left="".concat(d*100,"%"),R.width="".concat(r*100-d*100,"%")}var w=k||we(o,te(te({},"".concat(o,"-").concat(c+1),c!==null&&S),"".concat(i,"-track-draggable"),v),f.track);return n.createElement("div",{className:w,style:Y(Y({},R),l),onMouseDown:C,onTouchStart:C})},Jt=function(t){var i=t.prefixCls,l=t.style,a=t.values,u=t.startPoint,c=t.onStartMove,v=n.useContext(Fe),k=v.included,b=v.range,y=v.min,s=v.styles,m=v.classNames,h=n.useMemo(function(){if(!b){if(a.length===0)return[];var f=u??y,o=a[0];return[{start:Math.min(f,o),end:Math.max(f,o)}]}for(var d=[],r=0;r<a.length-1;r+=1)d.push({start:a[r],end:a[r+1]});return d},[a,b,u,y]);if(!k)return null;var S=h!=null&&h.length&&(m.tracks||s.tracks)?n.createElement(bt,{index:null,prefixCls:i,start:h[0].start,end:h[h.length-1].end,replaceCls:we(m.tracks,"".concat(i,"-tracks")),style:s.tracks}):null;return n.createElement(n.Fragment,null,S,h.map(function(f,o){var d=f.start,r=f.end;return n.createElement(bt,{index:o,prefixCls:i,style:Y(Y({},$e(l,o)),s.track),start:d,end:r,key:o,onStartMove:c})}))},Qt=130;function yt(e){var t="targetTouches"in e?e.targetTouches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function Zt(e,t,i,l,a,u,c,v,k,b,y){var s=n.useState(null),m=X(s,2),h=m[0],S=m[1],f=n.useState(-1),o=X(f,2),d=o[0],r=o[1],C=n.useState(!1),R=X(C,2),w=R[0],N=R[1],B=n.useState(i),G=X(B,2),_=G[0],x=G[1],E=n.useState(i),M=X(E,2),A=M[0],V=M[1],j=n.useRef(null),z=n.useRef(null),T=n.useRef(null),fe=n.useContext(Yt),ae=fe.onDragStart,Ee=fe.onDragChange;Et(function(){d===-1&&x(i)},[i,d]),n.useEffect(function(){return function(){document.removeEventListener("mousemove",j.current),document.removeEventListener("mouseup",z.current),T.current&&(T.current.removeEventListener("touchmove",j.current),T.current.removeEventListener("touchend",z.current))}},[]);var de=function($,P,K){P!==void 0&&S(P),x($);var J=$;K&&(J=$.filter(function(O,W){return W!==d})),c(J),Ee&&Ee({rawValues:$,deleteIndex:K?d:-1,draggingIndex:d,draggingValue:P})},ke=Ue(function(H,$,P){if(H===-1){var K=A[0],J=A[A.length-1],O=l-K,W=a-J,p=$*(a-l);p=Math.max(p,O),p=Math.min(p,W);var _e=u(K+p);p=_e-K;var re=A.map(function(ie){return ie+p});de(re)}else{var ue=(a-l)*$,le=ve(_);le[H]=A[H];var me=k(le,ue,H,"dist");de(me.values,me.value,P)}}),Me=function($,P,K){$.stopPropagation();var J=K||i,O=J[P];r(P),S(O),V(J),x(J),N(!1);var W=yt($),p=W.pageX,_e=W.pageY,re=!1;ae&&ae({rawValues:J,draggingIndex:P,draggingValue:O});var ue=function(ie){ie.preventDefault();var Q=yt(ie),He=Q.pageX,Le=Q.pageY,Ne=He-p,ne=Le-_e,ee=e.current.getBoundingClientRect(),Re=ee.width,Te=ee.height,he,Ce;switch(t){case"btt":he=-ne/Te,Ce=Ne;break;case"ttb":he=ne/Te,Ce=Ne;break;case"rtl":he=-Ne/Re,Ce=ne;break;default:he=Ne/Re,Ce=ne}re=b?Math.abs(Ce)>Qt&&y<_.length:!1,N(re),ke(P,he,re)},le=function me(ie){ie.preventDefault(),document.removeEventListener("mouseup",me),document.removeEventListener("mousemove",ue),T.current&&(T.current.removeEventListener("touchmove",j.current),T.current.removeEventListener("touchend",z.current)),j.current=null,z.current=null,T.current=null,v(re),r(-1),N(!1)};document.addEventListener("mouseup",le),document.addEventListener("mousemove",ue),$.currentTarget.addEventListener("touchend",le),$.currentTarget.addEventListener("touchmove",ue),j.current=ue,z.current=le,T.current=$.currentTarget},ge=n.useMemo(function(){var H=ve(i).sort(function(O,W){return O-W}),$=ve(_).sort(function(O,W){return O-W}),P={};$.forEach(function(O){P[O]=(P[O]||0)+1}),H.forEach(function(O){P[O]=(P[O]||0)-1});var K=b?1:0,J=Object.values(P).reduce(function(O,W){return O+Math.abs(W)},0);return J<=K?_:i},[i,_,b]);return[d,h,w,ge,Me]}function pt(e,t,i,l,a,u){var c=n.useCallback(function(h){return Math.max(e,Math.min(t,h))},[e,t]),v=n.useCallback(function(h){if(i!==null){var S=e+Math.round((c(h)-e)/i)*i,f=function(C){return(String(C).split(".")[1]||"").length},o=Math.max(f(i),f(t),f(e)),d=Number(S.toFixed(o));return e<=d&&d<=t?d:null}return null},[i,e,t,c]),k=n.useCallback(function(h){var S=c(h),f=l.map(function(r){return r.value});i!==null&&f.push(v(h)),f.push(e,t);var o=f[0],d=t-e;return f.forEach(function(r){var C=Math.abs(S-r);C<=d&&(o=r,d=C)}),o},[e,t,l,i,c,v]),b=function h(S,f,o){var d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof f=="number"){var r,C=S[o],R=C+f,w=[];l.forEach(function(x){w.push(x.value)}),w.push(e,t),w.push(v(C));var N=f>0?1:-1;d==="unit"?w.push(v(C+N*i)):w.push(v(R)),w=w.filter(function(x){return x!==null}).filter(function(x){return f<0?x<=C:x>=C}),d==="unit"&&(w=w.filter(function(x){return x!==C}));var B=d==="unit"?C:R;r=w[0];var G=Math.abs(r-B);if(w.forEach(function(x){var E=Math.abs(x-B);E<G&&(r=x,G=E)}),r===void 0)return f<0?e:t;if(d==="dist")return r;if(Math.abs(f)>1){var _=ve(S);return _[o]=r,h(_,f-N,o,d)}return r}else{if(f==="min")return e;if(f==="max")return t}},y=function(S,f,o){var d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",r=S[o],C=b(S,f,o,d);return{value:C,changed:C!==r}},s=function(S){return u===null&&S===0||typeof u=="number"&&S<u},m=function(S,f,o){var d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",r=S.map(k),C=r[o],R=b(r,f,o,d);if(r[o]=R,a===!1){var w=u||0;o>0&&r[o-1]!==C&&(r[o]=Math.max(r[o],r[o-1]+w)),o<r.length-1&&r[o+1]!==C&&(r[o]=Math.min(r[o],r[o+1]-w))}else if(typeof u=="number"||u===null){for(var N=o+1;N<r.length;N+=1)for(var B=!0;s(r[N]-r[N-1])&&B;){var G=y(r,1,N);r[N]=G.value,B=G.changed}for(var _=o;_>0;_-=1)for(var x=!0;s(r[_]-r[_-1])&&x;){var E=y(r,-1,_-1);r[_-1]=E.value,x=E.changed}for(var M=r.length-1;M>0;M-=1)for(var A=!0;s(r[M]-r[M-1])&&A;){var V=y(r,-1,M-1);r[M-1]=V.value,A=V.changed}for(var j=0;j<r.length-1;j+=1)for(var z=!0;s(r[j+1]-r[j])&&z;){var T=y(r,1,j+1);r[j+1]=T.value,z=T.changed}}return{value:r[o],values:r}};return[k,m]}function en(e){return n.useMemo(function(){if(e===!0||!e)return[!!e,!1,!1,0];var t=e.editable,i=e.draggableTrack,l=e.minCount,a=e.maxCount;return[!0,t,!t&&i,l||0,a]},[e])}var tn=n.forwardRef(function(e,t){var i=e.prefixCls,l=i===void 0?"rc-slider":i,a=e.className,u=e.style,c=e.classNames,v=e.styles,k=e.id,b=e.disabled,y=b===void 0?!1:b,s=e.keyboard,m=s===void 0?!0:s,h=e.autoFocus,S=e.onFocus,f=e.onBlur,o=e.min,d=o===void 0?0:o,r=e.max,C=r===void 0?100:r,R=e.step,w=R===void 0?1:R,N=e.value,B=e.defaultValue,G=e.range,_=e.count,x=e.onChange,E=e.onBeforeChange,M=e.onAfterChange,A=e.onChangeComplete,V=e.allowCross,j=V===void 0?!0:V,z=e.pushable,T=z===void 0?!1:z,fe=e.reverse,ae=e.vertical,Ee=e.included,de=Ee===void 0?!0:Ee,ke=e.startPoint,Me=e.trackStyle,ge=e.handleStyle,H=e.railStyle,$=e.dotStyle,P=e.activeDotStyle,K=e.marks,J=e.dots,O=e.handleRender,W=e.activeHandleRender,p=e.track,_e=e.tabIndex,re=_e===void 0?0:_e,ue=e.ariaLabelForHandle,le=e.ariaLabelledByForHandle,me=e.ariaRequired,ie=e.ariaValueTextFormatterForHandle,Q=n.useRef(null),He=n.useRef(null),Le=n.useMemo(function(){return ae?fe?"ttb":"btt":fe?"rtl":"ltr"},[fe,ae]),Ne=en(G),ne=X(Ne,5),ee=ne[0],Re=ne[1],Te=ne[2],he=ne[3],Ce=ne[4],Z=n.useMemo(function(){return isFinite(d)?d:0},[d]),Oe=n.useMemo(function(){return isFinite(C)?C:100},[C]),xe=n.useMemo(function(){return w!==null&&w<=0?1:w},[w]),kt=n.useMemo(function(){return typeof T=="boolean"?T?xe:!1:T>=0?T:!1},[T,xe]),Xe=n.useMemo(function(){return Object.keys(K||{}).map(function(D){var g=K[D],F={value:Number(D)};return g&&We(g)==="object"&&!n.isValidElement(g)&&("label"in g||"style"in g)?(F.style=g.style,F.label=g.label):F.label=g,F}).filter(function(D){var g=D.label;return g||typeof g=="number"}).sort(function(D,g){return D.value-g.value})},[K]),Mt=pt(Z,Oe,xe,Xe,j,kt),pe=X(Mt,2),Ye=pe[0],et=pe[1],Rt=jt(B,{value:N}),tt=X(Rt,2),be=tt[0],xt=tt[1],q=n.useMemo(function(){var D=be==null?[]:Array.isArray(be)?be:[be],g=X(D,1),F=g[0],L=F===void 0?Z:F,U=be===null?[]:[L];if(ee){if(U=ve(D),_||be===void 0){var ye=_>=0?_+1:2;for(U=U.slice(0,ye);U.length<ye;){var oe;U.push((oe=U[U.length-1])!==null&&oe!==void 0?oe:Z)}}U.sort(function(ce,se){return ce-se})}return U.forEach(function(ce,se){U[se]=Ye(ce)}),U},[be,ee,Z,_,Ye]),Ae=function(g){return ee?g:g[0]},Be=Ue(function(D){var g=ve(D).sort(function(F,L){return F-L});x&&!Xt(g,q,!0)&&x(Ae(g)),xt(g)}),nt=Ue(function(D){D&&Q.current.hideHelp();var g=Ae(q);M==null||M(g),Je(!M,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),A==null||A(g)}),Dt=function(g){if(!(y||!Re||q.length<=he)){var F=ve(q);F.splice(g,1),E==null||E(Ae(F)),Be(F);var L=Math.max(0,g-1);Q.current.hideHelp(),Q.current.focus(L)}},$t=Zt(He,Le,q,Z,Oe,Ye,Be,nt,et,Re,he),Ie=X($t,5),at=Ie[0],wt=Ie[1],Ft=Ie[2],qe=Ie[3],rt=Ie[4],ut=function(g,F){if(!y){var L=ve(q),U=0,ye=0,oe=Oe-Z;q.forEach(function(Se,Ve){var dt=Math.abs(g-Se);dt<=oe&&(oe=dt,U=Ve),Se<g&&(ye=Ve)});var ce=U;Re&&oe!==0&&(!Ce||q.length<Ce)?(L.splice(ye+1,0,g),ce=ye+1):L[U]=g,ee&&!q.length&&_===void 0&&L.push(g);var se=Ae(L);if(E==null||E(se),Be(L),F){var De,Pe;(De=document.activeElement)===null||De===void 0||(Pe=De.blur)===null||Pe===void 0||Pe.call(De),Q.current.focus(ce),rt(F,ce,L)}else M==null||M(se),Je(!M,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),A==null||A(se)}},_t=function(g){g.preventDefault();var F=He.current.getBoundingClientRect(),L=F.width,U=F.height,ye=F.left,oe=F.top,ce=F.bottom,se=F.right,De=g.clientX,Pe=g.clientY,Se;switch(Le){case"btt":Se=(ce-Pe)/U;break;case"ttb":Se=(Pe-oe)/U;break;case"rtl":Se=(se-De)/L;break;default:Se=(De-ye)/L}var Ve=Z+Se*(Oe-Z);ut(Ye(Ve),g)},Ht=n.useState(null),lt=X(Ht,2),Ge=lt[0],it=lt[1],Lt=function(g,F){if(!y){var L=et(q,g,F);E==null||E(Ae(q)),Be(L.values),it(L.value)}};n.useEffect(function(){if(Ge!==null){var D=q.indexOf(Ge);D>=0&&Q.current.focus(D)}it(null)},[Ge]);var Nt=n.useMemo(function(){return Te&&xe===null?!1:Te},[Te,xe]),ot=Ue(function(D,g){rt(D,g),E==null||E(Ae(q))}),ct=at!==-1;n.useEffect(function(){if(!ct){var D=q.lastIndexOf(wt);Q.current.focus(D)}},[ct]);var je=n.useMemo(function(){return ve(qe).sort(function(D,g){return D-g})},[qe]),Tt=n.useMemo(function(){return ee?[je[0],je[je.length-1]]:[Z,je[0]]},[je,ee,Z]),st=X(Tt,2),vt=st[0],ft=st[1];n.useImperativeHandle(t,function(){return{focus:function(){Q.current.focus(0)},blur:function(){var g,F=document,L=F.activeElement;(g=He.current)!==null&&g!==void 0&&g.contains(L)&&(L==null||L.blur())}}}),n.useEffect(function(){h&&Q.current.focus(0)},[]);var Ot=n.useMemo(function(){return{min:Z,max:Oe,direction:Le,disabled:y,keyboard:m,step:xe,included:de,includedStart:vt,includedEnd:ft,range:ee,tabIndex:re,ariaLabelForHandle:ue,ariaLabelledByForHandle:le,ariaRequired:me,ariaValueTextFormatterForHandle:ie,styles:v||{},classNames:c||{}}},[Z,Oe,Le,y,m,xe,de,vt,ft,ee,re,ue,le,me,ie,v,c]);return n.createElement(Fe.Provider,{value:Ot},n.createElement("div",{ref:He,className:we(l,a,te(te(te(te({},"".concat(l,"-disabled"),y),"".concat(l,"-vertical"),ae),"".concat(l,"-horizontal"),!ae),"".concat(l,"-with-marks"),Xe.length)),style:u,onMouseDown:_t,id:k},n.createElement("div",{className:we("".concat(l,"-rail"),c==null?void 0:c.rail),style:Y(Y({},H),v==null?void 0:v.rail)}),p!==!1&&n.createElement(Jt,{prefixCls:l,style:Me,values:q,startPoint:ke,onStartMove:Nt?ot:void 0}),n.createElement(zt,{prefixCls:l,marks:Xe,dots:J,style:$,activeStyle:P}),n.createElement(qt,{ref:Q,prefixCls:l,style:ge,values:qe,draggingIndex:at,draggingDelete:Ft,onStartMove:ot,onOffsetChange:Lt,onFocus:S,onBlur:f,handleRender:O,activeHandleRender:W,onChangeComplete:nt,onDelete:Re?Dt:void 0}),n.createElement(Kt,{prefixCls:l,marks:Xe,onClick:ut})))});const on=({options:e,value:t,defaultValue:i,className:l,classModifier:a,...u})=>{const c=n.useMemo(()=>{const s=e.findIndex(m=>m.value===(i||t));return s!==-1?s:void 0},[i,e,t]),v=n.useMemo(()=>{const s=e.findIndex(m=>m.value===t);return s!==-1?s:void 0},[t,e]),k=n.useMemo(()=>[...e].sort((s,m)=>s.value-m.value).reduce((s,{value:m,label:h},S)=>{const f={...s};return f[S]=h||m,f},{}),[e]),b=n.useMemo(()=>Pt(l,a,"af-slider"),[l,a]),y=n.useCallback((s,m)=>{m&&!Array.isArray(s)&&m({id:u.id,name:u.name,value:e[s].value})},[e,u.id,u.name]);return At.jsx(tn,{...u,min:0,max:e.length-1,onChange:s=>y(s,u.onChange),onChangeComplete:s=>y(s,u.onChangeComplete),marks:k,step:null,className:b,defaultValue:c,value:v,disabled:u.disabled||(a==null?void 0:a.includes("disabled")),"aria-required":a==null?void 0:a.includes("required")})};export{on as S};
