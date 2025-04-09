import{j as B}from"./jsx-runtime-D_zvdyIk.js";import{e as V}from"./index-DuZrfDUH.js";import{c as lt,p as dt}from"./BasePictureApollo-C_yaNSVh.js";function Q(i,t,n){if(n||arguments.length===2)for(var e=0,r=t.length,a;e<r;e++)(a||!(e in t))&&(a||(a=Array.prototype.slice.call(t,0,e)),a[e]=t[e]);return i.concat(a||Array.prototype.slice.call(t))}var y=new Map,et=function(t){return t.cloneNode(!0)},J=function(){return window.location.protocol==="file:"},rt=function(t,n,e){var r=new XMLHttpRequest;r.onreadystatechange=function(){try{if(!/\.svg/i.test(t)&&r.readyState===2){var a=r.getResponseHeader("Content-Type");if(!a)throw new Error("Content type not found");var s=lt.parse(a).type;if(!(s==="image/svg+xml"||s==="text/plain"))throw new Error("Invalid content type: ".concat(s))}if(r.readyState===4){if(r.status===404||r.responseXML===null)throw new Error(J()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+t);if(r.status===200||J()&&r.status===0)e(null,r);else throw new Error("There was a problem injecting the SVG: "+r.status+" "+r.statusText)}}catch(u){if(r.abort(),u instanceof Error)e(u,r);else throw u}},r.open("GET",t),r.withCredentials=n,r.overrideMimeType&&r.overrideMimeType("text/xml"),r.send()},E={},K=function(t,n){E[t]=E[t]||[],E[t].push(n)},pt=function(t){for(var n=function(s,u){setTimeout(function(){if(Array.isArray(E[t])){var f=y.get(t),p=E[t][s];f instanceof SVGSVGElement&&p(null,et(f)),f instanceof Error&&p(f),s===E[t].length-1&&delete E[t]}},0)},e=0,r=E[t].length;e<r;e++)n(e)},vt=function(t,n,e){if(y.has(t)){var r=y.get(t);if(r===void 0){K(t,e);return}if(r instanceof SVGSVGElement){e(null,et(r));return}}y.set(t,void 0),K(t,e),rt(t,n,function(a,s){var u;a?y.set(t,a):((u=s.responseXML)===null||u===void 0?void 0:u.documentElement)instanceof SVGSVGElement&&y.set(t,s.responseXML.documentElement),pt(t)})},ht=function(t,n,e){rt(t,n,function(r,a){var s;r?e(r):((s=a.responseXML)===null||s===void 0?void 0:s.documentElement)instanceof SVGSVGElement&&e(null,a.responseXML.documentElement)})},Et=0,At=function(){return++Et},d=[],Y={},gt="http://www.w3.org/2000/svg",z="http://www.w3.org/1999/xlink",Z=function(t,n,e,r,a,s,u){var f=t.getAttribute("data-src")||t.getAttribute("src");if(!f){u(new Error("Invalid data-src or src attribute"));return}if(d.indexOf(t)!==-1){d.splice(d.indexOf(t),1),t=null;return}d.push(t),t.setAttribute("src","");var p=r?vt:ht;p(f,a,function(l,o){if(!o){d.splice(d.indexOf(t),1),t=null,u(l);return}var v=t.getAttribute("id");v&&o.setAttribute("id",v);var m=t.getAttribute("title");m&&o.setAttribute("title",m);var b=t.getAttribute("width");b&&o.setAttribute("width",b);var w=t.getAttribute("height");w&&o.setAttribute("height",w);var R=Array.from(new Set(Q(Q(Q([],(o.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(t.getAttribute("class")||"").split(" "),!0))).join(" ").trim();o.setAttribute("class",R);var x=t.getAttribute("style");x&&o.setAttribute("style",x),o.setAttribute("data-src",f);var G=[].filter.call(t.attributes,function(c){return/^data-\w[\w-]*$/.test(c.name)});if(Array.prototype.forEach.call(G,function(c){c.name&&c.value&&o.setAttribute(c.name,c.value)}),e){var A={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},C,h,g,L,T;Object.keys(A).forEach(function(c){C=c,g=A[c],h=o.querySelectorAll(C+"[id]");for(var at=function(X,xt){L=h[X].id,T=L+"-"+At();var M;Array.prototype.forEach.call(g,function(P){M=o.querySelectorAll("["+P+'*="'+L+'"]');for(var O=0,ct=M.length;O<ct;O++){var $=M[O].getAttribute(P);$&&!$.match(new RegExp('url\\("?#'+L+'"?\\)'))||M[O].setAttribute(P,"url(#"+T+")")}});for(var U=o.querySelectorAll("[*|href]"),W=[],N=0,ut=U.length;N<ut;N++){var D=U[N].getAttributeNS(z,"href");D&&D.toString()==="#"+h[X].id&&W.push(U[N])}for(var F=0,ft=W.length;F<ft;F++)W[F].setAttributeNS(z,"href","#"+T);h[X].id=T},I=0,st=h.length;I<st;I++)at(I)})}o.removeAttribute("xmlns:a");for(var j=o.querySelectorAll("script"),k=[],_,q,S=0,nt=j.length;S<nt;S++)q=j[S].getAttribute("type"),(!q||q==="application/ecmascript"||q==="application/javascript"||q==="text/javascript")&&(_=j[S].innerText||j[S].textContent,_&&k.push(_),o.removeChild(j[S]));if(k.length>0&&(n==="always"||n==="once"&&!Y[f])){for(var H=0,it=k.length;H<it;H++)new Function(k[H])(window);Y[f]=!0}var ot=o.querySelectorAll("style");if(Array.prototype.forEach.call(ot,function(c){c.textContent+=""}),o.setAttribute("xmlns",gt),o.setAttribute("xmlns:xlink",z),s(o),!t.parentNode){d.splice(d.indexOf(t),1),t=null,u(new Error("Parent node is null"));return}t.parentNode.replaceChild(o,t),d.splice(d.indexOf(t),1),t=null,u(null,o)})},St=function(t,n){var e=n===void 0?{}:n,r=e.afterAll,a=r===void 0?function(){}:r,s=e.afterEach,u=s===void 0?function(){}:s,f=e.beforeEach,p=f===void 0?function(){}:f,l=e.cacheRequests,o=l===void 0?!0:l,v=e.evalScripts,m=v===void 0?"never":v,b=e.httpRequestWithCredentials,w=b===void 0?!1:b,R=e.renumerateIRIElements,x=R===void 0?!0:R;if(t&&"length"in t)for(var G=0,A=0,C=t.length;A<C;A++)Z(t[A],m,x,o,w,p,function(h,g){u(h,g),t&&"length"in t&&t.length===++G&&a(G)});else t?Z(t,m,x,o,w,p,function(h,g){u(h,g),a(1),t=null}):a(0)};const yt=["fill","stroke"],mt=(i,t)=>{const n={};i==null||i.getAttributeNames().forEach(e=>{(e.startsWith("aria-")||yt.includes(e))&&(n[e]=i.getAttribute(e))}),Object.keys(n).forEach(e=>{t.setAttribute(e,n[e])})},bt=(i,{beforeEach:t=()=>{},...n}={})=>{i&&St(i,{...n,beforeEach:e=>{dt.sanitize(e,{USE_PROFILES:{svg:!0,svgFilters:!0},IN_PLACE:!0}),mt(i,e),t(e)}})},tt=(i,t)=>{i.getAttributeNames().forEach(e=>{t.setAttribute(e,i.getAttribute(e))})},Gt=({src:i,alt:t,width:n=24,height:e=24,...r})=>{const a=V.useRef(null),[s,u]=V.useState(!1);return V.useLayoutEffect(()=>{s&&u(!1)},[i]),V.useLayoutEffect(()=>{if(s)return;const f=a.current;if(f){const p=document.createElement("div"),l=document.createElement("svg");p.appendChild(l),tt(f,l),l.setAttribute("width",n.toString()),l.setAttribute("height",e.toString()),bt(l,{afterEach:(o,v)=>{o&&u(!0),v&&(f.innerHTML=v.innerHTML,tt(v,f))}})}},[i,n,e,s]),s?t?B.jsx("span",{...r,children:t}):null:B.jsx("svg",{ref:a,"data-src":i,width:n,height:e,...r})};export{Gt as S};
