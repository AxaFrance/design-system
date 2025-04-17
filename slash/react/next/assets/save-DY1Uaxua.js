import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./index-DbaA8R3S.js";import{_ as P}from"./tslib.es6-Duv2rsQ1.js";import{J as lt,K as vt}from"./Loader-C1uJHYLx.js";var w=new Map,et=function(t){return t.cloneNode(!0)},J=function(){return window.location.protocol==="file:"},rt=function(t,i,e){var r=new XMLHttpRequest;r.onreadystatechange=function(){try{if(!/\.svg/i.test(t)&&r.readyState===2){var u=r.getResponseHeader("Content-Type");if(!u)throw new Error("Content type not found");var a=lt.parse(u).type;if(!(a==="image/svg+xml"||a==="text/plain"))throw new Error("Invalid content type: ".concat(a))}if(r.readyState===4){if(r.status===404||r.responseXML===null)throw new Error(J()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+t);if(r.status===200||J()&&r.status===0)e(null,r);else throw new Error("There was a problem injecting the SVG: "+r.status+" "+r.statusText)}}catch(s){if(r.abort(),s instanceof Error)e(s,r);else throw s}},r.open("GET",t),r.withCredentials=i,r.overrideMimeType&&r.overrideMimeType("text/xml"),r.send()},g={},K=function(t,i){g[t]=g[t]||[],g[t].push(i)},dt=function(t){for(var i=function(a,s){setTimeout(function(){if(Array.isArray(g[t])){var f=w.get(t),d=g[t][a];f instanceof SVGSVGElement&&d(null,et(f)),f instanceof Error&&d(f),a===g[t].length-1&&delete g[t]}},0)},e=0,r=g[t].length;e<r;e++)i(e)},ht=function(t,i,e){if(w.has(t)){var r=w.get(t);if(r===void 0){K(t,e);return}if(r instanceof SVGSVGElement){e(null,et(r));return}}w.set(t,void 0),K(t,e),rt(t,i,function(u,a){var s;u?w.set(t,u):((s=a.responseXML)===null||s===void 0?void 0:s.documentElement)instanceof SVGSVGElement&&w.set(t,a.responseXML.documentElement),dt(t)})},pt=function(t,i,e){rt(t,i,function(r,u){var a;r?e(r):((a=u.responseXML)===null||a===void 0?void 0:a.documentElement)instanceof SVGSVGElement&&e(null,u.responseXML.documentElement)})},gt=0,mt=function(){return++gt},v=[],$={},At="http://www.w3.org/2000/svg",Q="http://www.w3.org/1999/xlink",Y=function(t,i,e,r,u,a,s){var f=t.getAttribute("data-src")||t.getAttribute("src");if(!f){s(new Error("Invalid data-src or src attribute"));return}if(v.indexOf(t)!==-1){v.splice(v.indexOf(t),1),t=null;return}v.push(t),t.setAttribute("src","");var d=r?ht:pt;d(f,u,function(l,n){if(!n){v.splice(v.indexOf(t),1),t=null,s(l);return}var h=t.getAttribute("id");h&&n.setAttribute("id",h);var S=t.getAttribute("title");S&&n.setAttribute("title",S);var b=t.getAttribute("width");b&&n.setAttribute("width",b);var y=t.getAttribute("height");y&&n.setAttribute("height",y);var R=Array.from(new Set(P(P(P([],(n.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(t.getAttribute("class")||"").split(" "),!0))).join(" ").trim();n.setAttribute("class",R);var x=t.getAttribute("style");x&&n.setAttribute("style",x),n.setAttribute("data-src",f);var G=[].filter.call(t.attributes,function(c){return/^data-\w[\w-]*$/.test(c.name)});if(Array.prototype.forEach.call(G,function(c){c.name&&c.value&&n.setAttribute(c.name,c.value)}),e){var m={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},L,p,A,C,T;Object.keys(m).forEach(function(c){L=c,A=m[c],p=n.querySelectorAll(L+"[id]");for(var at=function(X,xt){C=p[X].id,T=C+"-"+mt();var k;Array.prototype.forEach.call(A,function(F){k=n.querySelectorAll("["+F+'*="'+C+'"]');for(var H=0,ct=k.length;H<ct;H++){var B=k[H].getAttribute(F);B&&!B.match(new RegExp('url\\("?#'+C+'"?\\)'))||k[H].setAttribute(F,"url(#"+T+")")}});for(var U=n.querySelectorAll("[*|href]"),Z=[],N=0,ut=U.length;N<ut;N++){var z=U[N].getAttributeNS(Q,"href");z&&z.toString()==="#"+p[X].id&&Z.push(U[N])}for(var W=0,ft=Z.length;W<ft;W++)Z[W].setAttributeNS(Q,"href","#"+T);p[X].id=T},V=0,st=p.length;V<st;V++)at(V)})}n.removeAttribute("xmlns:a");for(var q=n.querySelectorAll("script"),M=[],_,j,E=0,nt=q.length;E<nt;E++)j=q[E].getAttribute("type"),(!j||j==="application/ecmascript"||j==="application/javascript"||j==="text/javascript")&&(_=q[E].innerText||q[E].textContent,_&&M.push(_),n.removeChild(q[E]));if(M.length>0&&(i==="always"||i==="once"&&!$[f])){for(var I=0,it=M.length;I<it;I++)new Function(M[I])(window);$[f]=!0}var ot=n.querySelectorAll("style");if(Array.prototype.forEach.call(ot,function(c){c.textContent+=""}),n.setAttribute("xmlns",At),n.setAttribute("xmlns:xlink",Q),a(n),!t.parentNode){v.splice(v.indexOf(t),1),t=null,s(new Error("Parent node is null"));return}t.parentNode.replaceChild(n,t),v.splice(v.indexOf(t),1),t=null,s(null,n)})},Et=function(t,i){var e=i===void 0?{}:i,r=e.afterAll,u=r===void 0?function(){}:r,a=e.afterEach,s=a===void 0?function(){}:a,f=e.beforeEach,d=f===void 0?function(){}:f,l=e.cacheRequests,n=l===void 0?!0:l,h=e.evalScripts,S=h===void 0?"never":h,b=e.httpRequestWithCredentials,y=b===void 0?!1:b,R=e.renumerateIRIElements,x=R===void 0?!0:R;if(t&&"length"in t)for(var G=0,m=0,L=t.length;m<L;m++)Y(t[m],S,x,n,y,d,function(p,A){s(p,A),t&&"length"in t&&t.length===++G&&u(G)});else t?Y(t,S,x,n,y,d,function(p,A){s(p,A),u(1),t=null}):u(0)};const wt=["fill","stroke"],St=(o,t)=>{const i={};o==null||o.getAttributeNames().forEach(e=>{(e.startsWith("aria-")||wt.includes(e))&&(i[e]=o.getAttribute(e))}),Object.keys(i).forEach(e=>{t.setAttribute(e,i[e])})},bt=(o,{beforeEach:t=()=>{},...i}={})=>{Et(o,{...i,beforeEach:e=>{vt.sanitize(e,{USE_PROFILES:{svg:!0,svgFilters:!0},IN_PLACE:!0}),St(o,e),t(e)}})},tt=(o,t)=>{o.getAttributeNames().forEach(e=>{t.setAttribute(e,o.getAttribute(e))})},Lt=({src:o,alt:t,width:i=24,height:e=24,...r})=>{const u=O.useRef(null),[a,s]=O.useState(!1);return O.useLayoutEffect(()=>{a&&s(!1)},[o]),O.useLayoutEffect(()=>{if(a)return;const f=u.current;if(f){const d=document.createElement("div"),l=document.createElement("svg");d.appendChild(l),tt(f,l),l.setAttribute("width",i.toString()),l.setAttribute("height",e.toString()),bt(l,{afterEach:(n,h)=>{n&&s(!0),h&&(f.innerHTML=h.innerHTML,tt(h,f))}})}},[o,i,e,a]),a?t?D.jsx("span",{...r,children:t}):null:D.jsx("svg",{ref:u,"data-src":o,...r})},Ct="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M840-683v503q0%2024-18%2042t-42%2018H180q-24%200-42-18t-18-42v-600q0-24%2018-42t42-18h503l157%20157Zm-60%2027L656-780H180v600h600v-476ZM479.76-245q43.24%200%2073.74-30.26%2030.5-30.27%2030.5-73.5%200-43.24-30.26-73.74-30.27-30.5-73.5-30.5-43.24%200-73.74%2030.26-30.5%2030.27-30.5%2073.5%200%2043.24%2030.26%2073.74%2030.27%2030.5%2073.5%2030.5ZM233-584h358v-143H233v143Zm-53-72v476-600%20124Z'/%3e%3c/svg%3e";export{Lt as S,Ct as s};
