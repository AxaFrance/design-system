import{j as L}from"./jsx-runtime-Cw0GR0a5.js";import{r as K,g as xt,R as G}from"./index-CTjT7uj6.js";import{r as Ot}from"./index-vZN_Bsf0.js";import{g as Rt}from"./getComponentClassName-C7V7Z2-u.js";var ze=function(t){return t.reduce(function(r,n){var a=n[0],o=n[1];return r[a]=o,r},{})},Xe=typeof window<"u"&&window.document&&window.document.createElement?K.useLayoutEffect:K.useEffect,j="top",C="bottom",B="right",N="left",je="auto",ue=[j,C,B,N],ee="start",fe="end",Et="clippingParents",nt="viewport",ie="popper",Pt="reference",Ye=ue.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+fe])},[]),at=[].concat(ue,[je]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+fe])},[]),At="beforeRead",Mt="read",Tt="afterRead",jt="beforeMain",Nt="main",St="afterMain",Dt="beforeWrite",qt="write",Ct="afterWrite",Bt=[At,Mt,Tt,jt,Nt,St,Dt,qt,Ct];function H(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=D(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=D(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ne(e){if(typeof ShadowRoot>"u")return!1;var t=D(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function $t(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},o=t.elements[r];!q(o)||!H(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(f){var i=a[f];i===!1?o.removeAttribute(f):o.setAttribute(f,i===!0?"":i)}))})}function kt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],o=t.attributes[n]||{},f=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=f.reduce(function(s,p){return s[p]="",s},{});!q(a)||!H(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const Lt={name:"applyStyles",enabled:!0,phase:"write",fn:$t,effect:kt,requires:["computeStyles"]};function W(e){return e.split("-")[0]}var J=Math.max,xe=Math.min,te=Math.round;function Me(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ot(){return!/^((?!chrome|android).)*safari/i.test(Me())}function re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&q(e)&&(a=e.offsetWidth>0&&te(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&te(n.height)/e.offsetHeight||1);var f=Q(e)?D(e):window,i=f.visualViewport,s=!ot()&&r,p=(n.left+(s&&i?i.offsetLeft:0))/a,c=(n.top+(s&&i?i.offsetTop:0))/o,l=n.width/a,m=n.height/o;return{width:l,height:m,top:c,right:p+l,bottom:c+m,left:p,x:p,y:c}}function Se(e){var t=re(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function it(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ne(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(e){return D(e).getComputedStyle(e)}function Wt(e){return["table","td","th"].indexOf(H(e))>=0}function F(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function Oe(e){return H(e)==="html"?e:e.assignedSlot||e.parentNode||(Ne(e)?e.host:null)||F(e)}function Ke(e){return!q(e)||V(e).position==="fixed"?null:e.offsetParent}function Ht(e){var t=/firefox/i.test(Me()),r=/Trident/i.test(Me());if(r&&q(e)){var n=V(e);if(n.position==="fixed")return null}var a=Oe(e);for(Ne(a)&&(a=a.host);q(a)&&["html","body"].indexOf(H(a))<0;){var o=V(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function le(e){for(var t=D(e),r=Ke(e);r&&Wt(r)&&V(r).position==="static";)r=Ke(r);return r&&(H(r)==="html"||H(r)==="body"&&V(r).position==="static")?t:r||Ht(e)||t}function De(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function se(e,t,r){return J(e,xe(t,r))}function Vt(e,t,r){var n=se(e,t,r);return n>r?r:n}function st(){return{top:0,right:0,bottom:0,left:0}}function ct(e){return Object.assign({},st(),e)}function ft(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var _t=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ct(typeof t!="number"?t:ft(t,ue))};function Ft(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,f=r.modifiersData.popperOffsets,i=W(r.placement),s=De(i),p=[N,B].indexOf(i)>=0,c=p?"height":"width";if(!(!o||!f)){var l=_t(a.padding,r),m=Se(o),u=s==="y"?j:N,h=s==="y"?C:B,v=r.rects.reference[c]+r.rects.reference[s]-f[s]-r.rects.popper[c],d=f[s]-r.rects.reference[s],b=le(o),O=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,R=v/2-d/2,y=l[u],g=O-m[c]-l[h],w=O/2-m[c]/2+R,x=se(y,w,g),A=s;r.modifiersData[n]=(t={},t[A]=x,t.centerOffset=x-w,t)}}function It(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||it(t.elements.popper,a)&&(t.elements.arrow=a))}const Ut={name:"arrow",enabled:!0,phase:"main",fn:Ft,effect:It,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ne(e){return e.split("-")[1]}var zt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Xt(e,t){var r=e.x,n=e.y,a=t.devicePixelRatio||1;return{x:te(r*a)/a||0,y:te(n*a)/a||0}}function Ge(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,f=e.offsets,i=e.position,s=e.gpuAcceleration,p=e.adaptive,c=e.roundOffsets,l=e.isFixed,m=f.x,u=m===void 0?0:m,h=f.y,v=h===void 0?0:h,d=typeof c=="function"?c({x:u,y:v}):{x:u,y:v};u=d.x,v=d.y;var b=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),R=N,y=j,g=window;if(p){var w=le(r),x="clientHeight",A="clientWidth";if(w===D(r)&&(w=F(r),V(w).position!=="static"&&i==="absolute"&&(x="scrollHeight",A="scrollWidth")),w=w,a===j||(a===N||a===B)&&o===fe){y=C;var P=l&&w===g&&g.visualViewport?g.visualViewport.height:w[x];v-=P-n.height,v*=s?1:-1}if(a===N||(a===j||a===C)&&o===fe){R=B;var E=l&&w===g&&g.visualViewport?g.visualViewport.width:w[A];u-=E-n.width,u*=s?1:-1}}var M=Object.assign({position:i},p&&zt),$=c===!0?Xt({x:u,y:v},D(r)):{x:u,y:v};if(u=$.x,v=$.y,s){var T;return Object.assign({},M,(T={},T[y]=O?"0":"",T[R]=b?"0":"",T.transform=(g.devicePixelRatio||1)<=1?"translate("+u+"px, "+v+"px)":"translate3d("+u+"px, "+v+"px, 0)",T))}return Object.assign({},M,(t={},t[y]=O?v+"px":"",t[R]=b?u+"px":"",t.transform="",t))}function Yt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,f=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,p={placement:W(t.placement),variation:ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ge(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ge(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Kt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Yt,data:{}};var ge={passive:!0};function Gt(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,f=n.resize,i=f===void 0?!0:f,s=D(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&p.forEach(function(c){c.addEventListener("scroll",r.update,ge)}),i&&s.addEventListener("resize",r.update,ge),function(){o&&p.forEach(function(c){c.removeEventListener("scroll",r.update,ge)}),i&&s.removeEventListener("resize",r.update,ge)}}const Jt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Gt,data:{}};var Qt={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,function(t){return Qt[t]})}var Zt={start:"end",end:"start"};function Je(e){return e.replace(/start|end/g,function(t){return Zt[t]})}function qe(e){var t=D(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ce(e){return re(F(e)).left+qe(e).scrollLeft}function er(e,t){var r=D(e),n=F(e),a=r.visualViewport,o=n.clientWidth,f=n.clientHeight,i=0,s=0;if(a){o=a.width,f=a.height;var p=ot();(p||!p&&t==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:f,x:i+Ce(e),y:s}}function tr(e){var t,r=F(e),n=qe(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=J(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),f=J(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+Ce(e),s=-n.scrollTop;return V(a||r).direction==="rtl"&&(i+=J(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:f,x:i,y:s}}function Be(e){var t=V(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function pt(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:q(e)&&Be(e)?e:pt(Oe(e))}function ce(e,t){var r;t===void 0&&(t=[]);var n=pt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=D(n),f=a?[o].concat(o.visualViewport||[],Be(n)?n:[]):n,i=t.concat(f);return a?i:i.concat(ce(Oe(f)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function rr(e,t){var r=re(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Qe(e,t,r){return t===nt?Te(er(e,r)):Q(t)?rr(t,r):Te(tr(F(e)))}function nr(e){var t=ce(Oe(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,n=r&&q(e)?le(e):e;return Q(n)?t.filter(function(a){return Q(a)&&it(a,n)&&H(a)!=="body"}):[]}function ar(e,t,r,n){var a=t==="clippingParents"?nr(e):[].concat(t),o=[].concat(a,[r]),f=o[0],i=o.reduce(function(s,p){var c=Qe(e,p,n);return s.top=J(c.top,s.top),s.right=xe(c.right,s.right),s.bottom=xe(c.bottom,s.bottom),s.left=J(c.left,s.left),s},Qe(e,f,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ut(e){var t=e.reference,r=e.element,n=e.placement,a=n?W(n):null,o=n?ne(n):null,f=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(a){case j:s={x:f,y:t.y-r.height};break;case C:s={x:f,y:t.y+t.height};break;case B:s={x:t.x+t.width,y:i};break;case N:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var p=a?De(a):null;if(p!=null){var c=p==="y"?"height":"width";switch(o){case ee:s[p]=s[p]-(t[c]/2-r[c]/2);break;case fe:s[p]=s[p]+(t[c]/2-r[c]/2);break}}return s}function pe(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,f=o===void 0?e.strategy:o,i=r.boundary,s=i===void 0?Et:i,p=r.rootBoundary,c=p===void 0?nt:p,l=r.elementContext,m=l===void 0?ie:l,u=r.altBoundary,h=u===void 0?!1:u,v=r.padding,d=v===void 0?0:v,b=ct(typeof d!="number"?d:ft(d,ue)),O=m===ie?Pt:ie,R=e.rects.popper,y=e.elements[h?O:m],g=ar(Q(y)?y:y.contextElement||F(e.elements.popper),s,c,f),w=re(e.elements.reference),x=ut({reference:w,element:R,strategy:"absolute",placement:a}),A=Te(Object.assign({},R,x)),P=m===ie?A:w,E={top:g.top-P.top+b.top,bottom:P.bottom-g.bottom+b.bottom,left:g.left-P.left+b.left,right:P.right-g.right+b.right},M=e.modifiersData.offset;if(m===ie&&M){var $=M[a];Object.keys(E).forEach(function(T){var I=[B,C].indexOf(T)>=0?1:-1,U=[j,C].indexOf(T)>=0?"y":"x";E[T]+=$[U]*I})}return E}function or(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,f=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,p=s===void 0?at:s,c=ne(n),l=c?i?Ye:Ye.filter(function(h){return ne(h)===c}):ue,m=l.filter(function(h){return p.indexOf(h)>=0});m.length===0&&(m=l);var u=m.reduce(function(h,v){return h[v]=pe(e,{placement:v,boundary:a,rootBoundary:o,padding:f})[W(v)],h},{});return Object.keys(u).sort(function(h,v){return u[h]-u[v]})}function ir(e){if(W(e)===je)return[];var t=we(e);return[Je(e),t,Je(t)]}function sr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,f=r.altAxis,i=f===void 0?!0:f,s=r.fallbackPlacements,p=r.padding,c=r.boundary,l=r.rootBoundary,m=r.altBoundary,u=r.flipVariations,h=u===void 0?!0:u,v=r.allowedAutoPlacements,d=t.options.placement,b=W(d),O=b===d,R=s||(O||!h?[we(d)]:ir(d)),y=[d].concat(R).reduce(function(Z,_){return Z.concat(W(_)===je?or(t,{placement:_,boundary:c,rootBoundary:l,padding:p,flipVariations:h,allowedAutoPlacements:v}):_)},[]),g=t.rects.reference,w=t.rects.popper,x=new Map,A=!0,P=y[0],E=0;E<y.length;E++){var M=y[E],$=W(M),T=ne(M)===ee,I=[j,C].indexOf($)>=0,U=I?"width":"height",S=pe(t,{placement:M,boundary:c,rootBoundary:l,altBoundary:m,padding:p}),k=I?T?B:N:T?C:j;g[U]>w[U]&&(k=we(k));var de=we(k),z=[];if(o&&z.push(S[$]<=0),i&&z.push(S[k]<=0,S[de]<=0),z.every(function(Z){return Z})){P=M,A=!1;break}x.set(M,z)}if(A)for(var ve=h?3:1,Re=function(_){var oe=y.find(function(he){var X=x.get(he);if(X)return X.slice(0,_).every(function(Ee){return Ee})});if(oe)return P=oe,"break"},ae=ve;ae>0;ae--){var me=Re(ae);if(me==="break")break}t.placement!==P&&(t.modifiersData[n]._skip=!0,t.placement=P,t.reset=!0)}}const cr={name:"flip",enabled:!0,phase:"main",fn:sr,requiresIfExists:["offset"],data:{_skip:!1}};function Ze(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function et(e){return[j,B,C,N].some(function(t){return e[t]>=0})}function fr(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,f=pe(t,{elementContext:"reference"}),i=pe(t,{altBoundary:!0}),s=Ze(f,n),p=Ze(i,a,o),c=et(s),l=et(p);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}const pr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:fr};function ur(e,t,r){var n=W(e),a=[N,j].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=o[0],i=o[1];return f=f||0,i=(i||0)*a,[N,B].indexOf(n)>=0?{x:i,y:f}:{x:f,y:i}}function lr(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,f=at.reduce(function(c,l){return c[l]=ur(l,t.rects,o),c},{}),i=f[t.placement],s=i.x,p=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=f}const dr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:lr};function vr(e){var t=e.state,r=e.name;t.modifiersData[r]=ut({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const mr={name:"popperOffsets",enabled:!0,phase:"read",fn:vr,data:{}};function hr(e){return e==="x"?"y":"x"}function yr(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,f=r.altAxis,i=f===void 0?!1:f,s=r.boundary,p=r.rootBoundary,c=r.altBoundary,l=r.padding,m=r.tether,u=m===void 0?!0:m,h=r.tetherOffset,v=h===void 0?0:h,d=pe(t,{boundary:s,rootBoundary:p,padding:l,altBoundary:c}),b=W(t.placement),O=ne(t.placement),R=!O,y=De(b),g=hr(y),w=t.modifiersData.popperOffsets,x=t.rects.reference,A=t.rects.popper,P=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,E=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(w){if(o){var T,I=y==="y"?j:N,U=y==="y"?C:B,S=y==="y"?"height":"width",k=w[y],de=k+d[I],z=k-d[U],ve=u?-A[S]/2:0,Re=O===ee?x[S]:A[S],ae=O===ee?-A[S]:-x[S],me=t.elements.arrow,Z=u&&me?Se(me):{width:0,height:0},_=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:st(),oe=_[I],he=_[U],X=se(0,x[S],Z[S]),Ee=R?x[S]/2-ve-X-oe-E.mainAxis:Re-X-oe-E.mainAxis,mt=R?-x[S]/2+ve+X+he+E.mainAxis:ae+X+he+E.mainAxis,Pe=t.elements.arrow&&le(t.elements.arrow),ht=Pe?y==="y"?Pe.clientTop||0:Pe.clientLeft||0:0,ke=(T=M==null?void 0:M[y])!=null?T:0,yt=k+Ee-ke-ht,gt=k+mt-ke,Le=se(u?xe(de,yt):de,k,u?J(z,gt):z);w[y]=Le,$[y]=Le-k}if(i){var We,wt=y==="x"?j:N,bt=y==="x"?C:B,Y=w[g],ye=g==="y"?"height":"width",He=Y+d[wt],Ve=Y-d[bt],Ae=[j,N].indexOf(b)!==-1,_e=(We=M==null?void 0:M[g])!=null?We:0,Fe=Ae?He:Y-x[ye]-A[ye]-_e+E.altAxis,Ie=Ae?Y+x[ye]+A[ye]-_e-E.altAxis:Ve,Ue=u&&Ae?Vt(Fe,Y,Ie):se(u?Fe:He,Y,u?Ie:Ve);w[g]=Ue,$[g]=Ue-Y}t.modifiersData[n]=$}}const gr={name:"preventOverflow",enabled:!0,phase:"main",fn:yr,requiresIfExists:["offset"]};function wr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function br(e){return e===D(e)||!q(e)?qe(e):wr(e)}function xr(e){var t=e.getBoundingClientRect(),r=te(t.width)/e.offsetWidth||1,n=te(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Or(e,t,r){r===void 0&&(r=!1);var n=q(t),a=q(t)&&xr(t),o=F(t),f=re(e,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((H(t)!=="body"||Be(o))&&(i=br(t)),q(t)?(s=re(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):o&&(s.x=Ce(o))),{x:f.left+i.scrollLeft-s.x,y:f.top+i.scrollTop-s.y,width:f.width,height:f.height}}function Rr(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var f=[].concat(o.requires||[],o.requiresIfExists||[]);f.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&a(s)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function Er(e){var t=Rr(e);return Bt.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function Pr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Ar(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var tt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Mr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?tt:a;return function(i,s,p){p===void 0&&(p=o);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},tt,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},l=[],m=!1,u={state:c,setOptions:function(b){var O=typeof b=="function"?b(c.options):b;v(),c.options=Object.assign({},o,c.options,O),c.scrollParents={reference:Q(i)?ce(i):i.contextElement?ce(i.contextElement):[],popper:ce(s)};var R=Er(Ar([].concat(n,c.options.modifiers)));return c.orderedModifiers=R.filter(function(y){return y.enabled}),h(),u.update()},forceUpdate:function(){if(!m){var b=c.elements,O=b.reference,R=b.popper;if(rt(O,R)){c.rects={reference:Or(O,le(R),c.options.strategy==="fixed"),popper:Se(R)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(E){return c.modifiersData[E.name]=Object.assign({},E.data)});for(var y=0;y<c.orderedModifiers.length;y++){if(c.reset===!0){c.reset=!1,y=-1;continue}var g=c.orderedModifiers[y],w=g.fn,x=g.options,A=x===void 0?{}:x,P=g.name;typeof w=="function"&&(c=w({state:c,options:A,name:P,instance:u})||c)}}}},update:Pr(function(){return new Promise(function(d){u.forceUpdate(),d(c)})}),destroy:function(){v(),m=!0}};if(!rt(i,s))return u;u.setOptions(p).then(function(d){!m&&p.onFirstUpdate&&p.onFirstUpdate(d)});function h(){c.orderedModifiers.forEach(function(d){var b=d.name,O=d.options,R=O===void 0?{}:O,y=d.effect;if(typeof y=="function"){var g=y({state:c,name:b,instance:u,options:R}),w=function(){};l.push(g||w)}})}function v(){l.forEach(function(d){return d()}),l=[]}return u}}var Tr=[Jt,mr,Kt,Lt,dr,cr,gr,Ut,pr],jr=Mr({defaultModifiers:Tr}),Nr=typeof Element<"u",Sr=typeof Map=="function",Dr=typeof Set=="function",qr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function be(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,a;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!be(e[n],t[n]))return!1;return!0}var o;if(Sr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;for(o=e.entries();!(n=o.next()).done;)if(!be(n.value[1],t.get(n.value[0])))return!1;return!0}if(Dr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(qr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;if(Nr&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&e.$$typeof)&&!be(e[a[n]],t[a[n]]))return!1;return!0}return e!==e&&t!==t}var Cr=function(t,r){try{return be(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Br=xt(Cr);var $r=[],kr=function(t,r,n){n===void 0&&(n={});var a=K.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||$r},f=K.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),i=f[0],s=f[1],p=K.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(u){var h=u.state,v=Object.keys(h.elements);Ot.flushSync(function(){s({styles:ze(v.map(function(d){return[d,h.styles[d]||{}]})),attributes:ze(v.map(function(d){return[d,h.attributes[d]]}))})})},requires:["computeStyles"]}},[]),c=K.useMemo(function(){var m={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[p,{name:"applyStyles",enabled:!1}])};return Br(a.current,m)?a.current||m:(a.current=m,m)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,p]),l=K.useRef();return Xe(function(){l.current&&l.current.setOptions(c)},[c]),Xe(function(){if(!(t==null||r==null)){var m=n.createPopper||jr,u=m(t,r,c);return l.current=u,function(){u.destroy(),l.current=null}}},[t,r,n.createPopper]),{state:l.current?l.current.state:null,styles:i.styles,attributes:i.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}};const Lr="af-popover__container",lt=({placement:e,children:t,isOpen:r,target:n,className:a,classModifier:o,onMouseEnter:f,onMouseLeave:i})=>{const s=Rt(a,o,Lr),[p,c]=G.useState(null),[l,m]=G.useState(null),[u,h]=G.useState(null),{styles:v,attributes:d}=kr(p,l,{modifiers:[{name:"arrow",options:{element:u}},{name:"offset",options:{offset:[0,8]}}],placement:e});return L.jsxs("div",{className:s,children:[L.jsx("div",{ref:c,className:"af-popover__container-over",role:"presentation",children:n}),r&&L.jsxs("div",{ref:m,onMouseEnter:f,onMouseLeave:i,style:v.popper,"data-popper-placement":e,className:"af-popover__container-pop",...d.popper,children:[L.jsx("div",{children:t}),L.jsx("div",{ref:h,style:v.arrow,className:"af-popover__arrow"})]})]})};lt.__docgenInfo={description:"",methods:[],displayName:"AnimatedPopover",props:{placement:{required:!0,tsType:{name:"Placement"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},target:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const Wr="af-popover__container",$e=({children:e,isOpen:t,placement:r="auto",className:n=Wr,classModifier:a,element:o,onMouseEnter:f,onMouseLeave:i})=>L.jsx(lt,{target:e,placement:r,isOpen:t,className:n,classModifier:a,onMouseEnter:f,onMouseLeave:i,children:o});$e.__docgenInfo={description:"",methods:[],displayName:"PopoverBase",props:{placement:{required:!1,tsType:{name:"Placement"},description:"",defaultValue:{value:'"auto"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"af-popover__container"',computed:!1}},classModifier:{required:!1,tsType:{name:"string"},description:""},element:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const dt=({children:e,placement:t,className:r,classModifier:n,element:a})=>{const o=G.useRef(null),[f,i]=G.useState(!1),[s,p]=G.useState(!1),c=(h,v)=>{if(s||!o.current||v===f){h.stopPropagation();return}i(d=>v??!d)},l=h=>{h.key==="Enter"&&c(h)},m=()=>{p(!0)},u=()=>{p(!1)};return L.jsx("div",{role:"button",tabIndex:0,ref:o,className:"af-popover__wrapper af-popover__wrapper--click",onKeyDown:l,onClick:c,onBlur:h=>c(h,!1),children:L.jsx($e,{onMouseEnter:m,onMouseLeave:u,isOpen:f,placement:t,className:r,classModifier:n,element:a,children:e})})};dt.__docgenInfo={description:"",methods:[],displayName:"PopoverClick",props:{className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},element:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const vt=({children:e,placement:t,className:r,classModifier:n,element:a})=>{const[o,f]=G.useState(!1),i=()=>{f(!0)},s=()=>{f(!1)};return L.jsx("div",{role:"button",tabIndex:0,className:"af-popover__wrapper af-popover__wrapper--over",onMouseEnter:i,onMouseLeave:s,onFocus:i,onBlur:s,children:L.jsx($e,{isOpen:o,placement:t,className:r,classModifier:n,element:a,children:e})})};vt.__docgenInfo={description:"",methods:[],displayName:"PopoverOver",props:{className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},element:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Hr=({children:e,placement:t="top",className:r,classModifier:n,mode:a="click",popoverElement:o})=>{const f=a==="click"?dt:vt;return L.jsx(f,{className:r,classModifier:n,placement:t,element:o,children:e})};Hr.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:"",defaultValue:{value:'"top"',computed:!1}},mode:{required:!1,tsType:{name:"union",raw:'"hover" | "click"',elements:[{name:"literal",value:'"hover"'},{name:"literal",value:'"click"'}]},description:"",defaultValue:{value:'"click"',computed:!1}},popoverElement:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{Hr as P};