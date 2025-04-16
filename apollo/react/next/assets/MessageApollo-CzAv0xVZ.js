import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-DuZrfDUH.js";import{g as en}from"./_commonjsHelpers-CqkleIqs.js";const Cn={blue:"blue",gray:"gray",white:"white"},Me="af-spinner",tn=({size:r=40,variant:n="blue",text:s="Chargement en cours"})=>_.jsx("div",{role:"alert","aria-busy":!0,"aria-label":s,"aria-live":"assertive",className:[Me,`${Me}--${n}`,`${Me}--${r}`].filter(Boolean).join(" "),style:{"--spinner-size":r}});tn.displayName="Spinner";var ge={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Et;function nn(){if(Et)return ge;Et=1;var r=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,n=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,s=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,a=/\\([\u000b\u0020-\u00ff])/g,f=/([\\"])/g,l=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;ge.format=u,ge.parse=h;function u(m){if(!m||typeof m!="object")throw new TypeError("argument obj is required");var p=m.parameters,T=m.type;if(!T||!l.test(T))throw new TypeError("invalid type");var b=T;if(p&&typeof p=="object")for(var L,N=Object.keys(p).sort(),A=0;A<N.length;A++){if(L=N[A],!s.test(L))throw new TypeError("invalid parameter name");b+="; "+L+"="+k(p[L])}return b}function h(m){if(!m)throw new TypeError("argument string is required");var p=typeof m=="object"?B(m):m;if(typeof p!="string")throw new TypeError("argument string is required to be a string");var T=p.indexOf(";"),b=T!==-1?p.slice(0,T).trim():p.trim();if(!l.test(b))throw new TypeError("invalid media type");var L=new z(b.toLowerCase());if(T!==-1){var N,A,I;for(r.lastIndex=T;A=r.exec(p);){if(A.index!==T)throw new TypeError("invalid parameter format");T+=A[0].length,N=A[1].toLowerCase(),I=A[2],I.charCodeAt(0)===34&&(I=I.slice(1,-1),I.indexOf("\\")!==-1&&(I=I.replace(a,"$1"))),L.parameters[N]=I}if(T!==p.length)throw new TypeError("invalid parameter format")}return L}function B(m){var p;if(typeof m.getHeader=="function"?p=m.getHeader("content-type"):typeof m.headers=="object"&&(p=m.headers&&m.headers["content-type"]),typeof p!="string")throw new TypeError("content-type header is missing from object");return p}function k(m){var p=String(m);if(s.test(p))return p;if(p.length>0&&!n.test(p))throw new TypeError("invalid parameter value");return'"'+p.replace(f,"\\$1")+'"'}function z(m){this.parameters=Object.create(null),this.type=m}return ge}var wn=nn();/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */const{entries:It,setPrototypeOf:ht,isFrozen:rn,getPrototypeOf:on,getOwnPropertyDescriptor:an}=Object;let{freeze:v,seal:F,create:xt}=Object,{apply:ze,construct:Ge}=typeof Reflect<"u"&&Reflect;v||(v=function(n){return n});F||(F=function(n){return n});ze||(ze=function(n,s,a){return n.apply(s,a)});Ge||(Ge=function(n,s){return new n(...s)});const Ee=U(Array.prototype.forEach),At=U(Array.prototype.pop),se=U(Array.prototype.push),Ae=U(String.prototype.toLowerCase),Pe=U(String.prototype.toString),yt=U(String.prototype.match),le=U(String.prototype.replace),sn=U(String.prototype.indexOf),ln=U(String.prototype.trim),H=U(Object.prototype.hasOwnProperty),w=U(RegExp.prototype.test),ce=cn(TypeError);function U(r){return function(n){for(var s=arguments.length,a=new Array(s>1?s-1:0),f=1;f<s;f++)a[f-1]=arguments[f];return ze(r,n,a)}}function cn(r){return function(){for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return Ge(r,s)}}function c(r,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ae;ht&&ht(r,null);let a=n.length;for(;a--;){let f=n[a];if(typeof f=="string"){const l=s(f);l!==f&&(rn(n)||(n[a]=l),f=l)}r[f]=!0}return r}function fn(r){for(let n=0;n<r.length;n++)H(r,n)||(r[n]=null);return r}function V(r){const n=xt(null);for(const[s,a]of It(r))H(r,s)&&(Array.isArray(a)?n[s]=fn(a):a&&typeof a=="object"&&a.constructor===Object?n[s]=V(a):n[s]=a);return n}function fe(r,n){for(;r!==null;){const a=an(r,n);if(a){if(a.get)return U(a.get);if(typeof a.value=="function")return U(a.value)}r=on(r)}function s(){return null}return s}const St=v(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ke=v(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ue=v(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),un=v(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Fe=v(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),pn=v(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Rt=v(["#text"]),bt=v(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),He=v(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Lt=v(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),he=v(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),mn=F(/\{\{[\w\W]*|[\w\W]*\}\}/gm),dn=F(/<%[\w\W]*|[\w\W]*%>/gm),Tn=F(/\${[\w\W]*}/gm),_n=F(/^data-[\-\w.\u00B7-\uFFFF]/),gn=F(/^aria-[\-\w]+$/),Ct=F(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),En=F(/^(?:\w+script|data):/i),hn=F(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),wt=F(/^html$/i),An=F(/^[a-z][.\w]*(-[.\w]+)+$/i);var Nt=Object.freeze({__proto__:null,MUSTACHE_EXPR:mn,ERB_EXPR:dn,TMPLIT_EXPR:Tn,DATA_ATTR:_n,ARIA_ATTR:gn,IS_ALLOWED_URI:Ct,IS_SCRIPT_OR_DATA:En,ATTR_WHITESPACE:hn,DOCTYPE_NAME:wt,CUSTOM_ELEMENT:An});const ue={element:1,text:3,progressingInstruction:7,comment:8,document:9},yn=function(){return typeof window>"u"?null:window},Sn=function(n,s){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let a=null;const f="data-tt-policy-suffix";s&&s.hasAttribute(f)&&(a=s.getAttribute(f));const l="dompurify"+(a?"#"+a:"");try{return n.createPolicy(l,{createHTML(u){return u},createScriptURL(u){return u}})}catch{return console.warn("TrustedTypes policy "+l+" could not be created."),null}};function Dt(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:yn();const n=i=>Dt(i);if(n.version="3.1.7",n.removed=[],!r||!r.document||r.document.nodeType!==ue.document)return n.isSupported=!1,n;let{document:s}=r;const a=s,f=a.currentScript,{DocumentFragment:l,HTMLTemplateElement:u,Node:h,Element:B,NodeFilter:k,NamedNodeMap:z=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:m,DOMParser:p,trustedTypes:T}=r,b=B.prototype,L=fe(b,"cloneNode"),N=fe(b,"remove"),A=fe(b,"nextSibling"),I=fe(b,"childNodes"),M=fe(b,"parentNode");if(typeof u=="function"){const i=s.createElement("template");i.content&&i.content.ownerDocument&&(s=i.content.ownerDocument)}let E,X="";const{implementation:Z,createNodeIterator:Ft,createDocumentFragment:Ht,getElementsByTagName:Bt}=s,{importNode:zt}=a;let G={};n.isSupported=typeof It=="function"&&typeof M=="function"&&Z&&Z.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ye,ERB_EXPR:Se,TMPLIT_EXPR:Re,DATA_ATTR:Gt,ARIA_ATTR:jt,IS_SCRIPT_OR_DATA:Wt,ATTR_WHITESPACE:We,CUSTOM_ELEMENT:Yt}=Nt;let{IS_ALLOWED_URI:Ye}=Nt,y=null;const $e=c({},[...St,...ke,...Ue,...Fe,...Rt]);let S=null;const Xe=c({},[...bt,...He,...Lt,...he]);let g=Object.seal(xt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),re=null,be=null,qe=!0,Le=!0,Ve=!1,Ze=!0,K=!1,Ne=!0,q=!1,Oe=!1,Ie=!1,Q=!1,pe=!1,me=!1,Ke=!0,Qe=!1;const $t="user-content-";let xe=!0,oe=!1,J={},ee=null;const Je=c({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let et=null;const tt=c({},["audio","video","img","source","image","track"]);let Ce=null;const nt=c({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),de="http://www.w3.org/1998/Math/MathML",Te="http://www.w3.org/2000/svg",Y="http://www.w3.org/1999/xhtml";let te=Y,we=!1,De=null;const Xt=c({},[de,Te,Y],Pe);let ie=null;const qt=["application/xhtml+xml","text/html"],Vt="text/html";let R=null,ne=null;const Zt=s.createElement("form"),rt=function(e){return e instanceof RegExp||e instanceof Function},ve=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ne&&ne===e)){if((!e||typeof e!="object")&&(e={}),e=V(e),ie=qt.indexOf(e.PARSER_MEDIA_TYPE)===-1?Vt:e.PARSER_MEDIA_TYPE,R=ie==="application/xhtml+xml"?Pe:Ae,y=H(e,"ALLOWED_TAGS")?c({},e.ALLOWED_TAGS,R):$e,S=H(e,"ALLOWED_ATTR")?c({},e.ALLOWED_ATTR,R):Xe,De=H(e,"ALLOWED_NAMESPACES")?c({},e.ALLOWED_NAMESPACES,Pe):Xt,Ce=H(e,"ADD_URI_SAFE_ATTR")?c(V(nt),e.ADD_URI_SAFE_ATTR,R):nt,et=H(e,"ADD_DATA_URI_TAGS")?c(V(tt),e.ADD_DATA_URI_TAGS,R):tt,ee=H(e,"FORBID_CONTENTS")?c({},e.FORBID_CONTENTS,R):Je,re=H(e,"FORBID_TAGS")?c({},e.FORBID_TAGS,R):{},be=H(e,"FORBID_ATTR")?c({},e.FORBID_ATTR,R):{},J=H(e,"USE_PROFILES")?e.USE_PROFILES:!1,qe=e.ALLOW_ARIA_ATTR!==!1,Le=e.ALLOW_DATA_ATTR!==!1,Ve=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,K=e.SAFE_FOR_TEMPLATES||!1,Ne=e.SAFE_FOR_XML!==!1,q=e.WHOLE_DOCUMENT||!1,Q=e.RETURN_DOM||!1,pe=e.RETURN_DOM_FRAGMENT||!1,me=e.RETURN_TRUSTED_TYPE||!1,Ie=e.FORCE_BODY||!1,Ke=e.SANITIZE_DOM!==!1,Qe=e.SANITIZE_NAMED_PROPS||!1,xe=e.KEEP_CONTENT!==!1,oe=e.IN_PLACE||!1,Ye=e.ALLOWED_URI_REGEXP||Ct,te=e.NAMESPACE||Y,g=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(g.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(g.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(g.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),K&&(Le=!1),pe&&(Q=!0),J&&(y=c({},Rt),S=[],J.html===!0&&(c(y,St),c(S,bt)),J.svg===!0&&(c(y,ke),c(S,He),c(S,he)),J.svgFilters===!0&&(c(y,Ue),c(S,He),c(S,he)),J.mathMl===!0&&(c(y,Fe),c(S,Lt),c(S,he))),e.ADD_TAGS&&(y===$e&&(y=V(y)),c(y,e.ADD_TAGS,R)),e.ADD_ATTR&&(S===Xe&&(S=V(S)),c(S,e.ADD_ATTR,R)),e.ADD_URI_SAFE_ATTR&&c(Ce,e.ADD_URI_SAFE_ATTR,R),e.FORBID_CONTENTS&&(ee===Je&&(ee=V(ee)),c(ee,e.FORBID_CONTENTS,R)),xe&&(y["#text"]=!0),q&&c(y,["html","head","body"]),y.table&&(c(y,["tbody"]),delete re.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=e.TRUSTED_TYPES_POLICY,X=E.createHTML("")}else E===void 0&&(E=Sn(T,f)),E!==null&&typeof X=="string"&&(X=E.createHTML(""));v&&v(e),ne=e}},ot=c({},["mi","mo","mn","ms","mtext"]),it=c({},["annotation-xml"]),Kt=c({},["title","style","font","a","script"]),at=c({},[...ke,...Ue,...un]),st=c({},[...Fe,...pn]),Qt=function(e){let t=M(e);(!t||!t.tagName)&&(t={namespaceURI:te,tagName:"template"});const o=Ae(e.tagName),d=Ae(t.tagName);return De[e.namespaceURI]?e.namespaceURI===Te?t.namespaceURI===Y?o==="svg":t.namespaceURI===de?o==="svg"&&(d==="annotation-xml"||ot[d]):!!at[o]:e.namespaceURI===de?t.namespaceURI===Y?o==="math":t.namespaceURI===Te?o==="math"&&it[d]:!!st[o]:e.namespaceURI===Y?t.namespaceURI===Te&&!it[d]||t.namespaceURI===de&&!ot[d]?!1:!st[o]&&(Kt[o]||!at[o]):!!(ie==="application/xhtml+xml"&&De[e.namespaceURI]):!1},j=function(e){se(n.removed,{element:e});try{M(e).removeChild(e)}catch{N(e)}},_e=function(e,t){try{se(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{se(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!S[e])if(Q||pe)try{j(t)}catch{}else try{t.setAttribute(e,"")}catch{}},lt=function(e){let t=null,o=null;if(Ie)e="<remove></remove>"+e;else{const O=yt(e,/^[\r\n\t ]+/);o=O&&O[0]}ie==="application/xhtml+xml"&&te===Y&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const d=E?E.createHTML(e):e;if(te===Y)try{t=new p().parseFromString(d,ie)}catch{}if(!t||!t.documentElement){t=Z.createDocument(te,"template",null);try{t.documentElement.innerHTML=we?X:d}catch{}}const x=t.body||t.documentElement;return e&&o&&x.insertBefore(s.createTextNode(o),x.childNodes[0]||null),te===Y?Bt.call(t,q?"html":"body")[0]:q?t.documentElement:x},ct=function(e){return Ft.call(e.ownerDocument||e,e,k.SHOW_ELEMENT|k.SHOW_COMMENT|k.SHOW_TEXT|k.SHOW_PROCESSING_INSTRUCTION|k.SHOW_CDATA_SECTION,null)},ft=function(e){return e instanceof m&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof z)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},ut=function(e){return typeof h=="function"&&e instanceof h},$=function(e,t,o){G[e]&&Ee(G[e],d=>{d.call(n,t,o,ne)})},pt=function(e){let t=null;if($("beforeSanitizeElements",e,null),ft(e))return j(e),!0;const o=R(e.nodeName);if($("uponSanitizeElement",e,{tagName:o,allowedTags:y}),e.hasChildNodes()&&!ut(e.firstElementChild)&&w(/<[/\w]/g,e.innerHTML)&&w(/<[/\w]/g,e.textContent)||e.nodeType===ue.progressingInstruction||Ne&&e.nodeType===ue.comment&&w(/<[/\w]/g,e.data))return j(e),!0;if(!y[o]||re[o]){if(!re[o]&&dt(o)&&(g.tagNameCheck instanceof RegExp&&w(g.tagNameCheck,o)||g.tagNameCheck instanceof Function&&g.tagNameCheck(o)))return!1;if(xe&&!ee[o]){const d=M(e)||e.parentNode,x=I(e)||e.childNodes;if(x&&d){const O=x.length;for(let P=O-1;P>=0;--P){const W=L(x[P],!0);W.__removalCount=(e.__removalCount||0)+1,d.insertBefore(W,A(e))}}}return j(e),!0}return e instanceof B&&!Qt(e)||(o==="noscript"||o==="noembed"||o==="noframes")&&w(/<\/no(script|embed|frames)/i,e.innerHTML)?(j(e),!0):(K&&e.nodeType===ue.text&&(t=e.textContent,Ee([ye,Se,Re],d=>{t=le(t,d," ")}),e.textContent!==t&&(se(n.removed,{element:e.cloneNode()}),e.textContent=t)),$("afterSanitizeElements",e,null),!1)},mt=function(e,t,o){if(Ke&&(t==="id"||t==="name")&&(o in s||o in Zt))return!1;if(!(Le&&!be[t]&&w(Gt,t))){if(!(qe&&w(jt,t))){if(!S[t]||be[t]){if(!(dt(e)&&(g.tagNameCheck instanceof RegExp&&w(g.tagNameCheck,e)||g.tagNameCheck instanceof Function&&g.tagNameCheck(e))&&(g.attributeNameCheck instanceof RegExp&&w(g.attributeNameCheck,t)||g.attributeNameCheck instanceof Function&&g.attributeNameCheck(t))||t==="is"&&g.allowCustomizedBuiltInElements&&(g.tagNameCheck instanceof RegExp&&w(g.tagNameCheck,o)||g.tagNameCheck instanceof Function&&g.tagNameCheck(o))))return!1}else if(!Ce[t]){if(!w(Ye,le(o,We,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&sn(o,"data:")===0&&et[e])){if(!(Ve&&!w(Wt,le(o,We,"")))){if(o)return!1}}}}}}return!0},dt=function(e){return e!=="annotation-xml"&&yt(e,Yt)},Tt=function(e){$("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:S};let d=t.length;for(;d--;){const x=t[d],{name:O,namespaceURI:P,value:W}=x,ae=R(O);let C=O==="value"?W:ln(W);if(o.attrName=ae,o.attrValue=C,o.keepAttr=!0,o.forceKeepAttr=void 0,$("uponSanitizeAttribute",e,o),C=o.attrValue,o.forceKeepAttr||(_e(O,e),!o.keepAttr))continue;if(!Ze&&w(/\/>/i,C)){_e(O,e);continue}K&&Ee([ye,Se,Re],gt=>{C=le(C,gt," ")});const _t=R(e.nodeName);if(mt(_t,ae,C)){if(Qe&&(ae==="id"||ae==="name")&&(_e(O,e),C=$t+C),Ne&&w(/((--!?|])>)|<\/(style|title)/i,C)){_e(O,e);continue}if(E&&typeof T=="object"&&typeof T.getAttributeType=="function"&&!P)switch(T.getAttributeType(_t,ae)){case"TrustedHTML":{C=E.createHTML(C);break}case"TrustedScriptURL":{C=E.createScriptURL(C);break}}try{P?e.setAttributeNS(P,O,C):e.setAttribute(O,C),ft(e)?j(e):At(n.removed)}catch{}}}$("afterSanitizeAttributes",e,null)},Jt=function i(e){let t=null;const o=ct(e);for($("beforeSanitizeShadowDOM",e,null);t=o.nextNode();)$("uponSanitizeShadowNode",t,null),!pt(t)&&(t.content instanceof l&&i(t.content),Tt(t));$("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,o=null,d=null,x=null;if(we=!i,we&&(i="<!-->"),typeof i!="string"&&!ut(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw ce("dirty is not a string, aborting")}else throw ce("toString is not a function");if(!n.isSupported)return i;if(Oe||ve(e),n.removed=[],typeof i=="string"&&(oe=!1),oe){if(i.nodeName){const W=R(i.nodeName);if(!y[W]||re[W])throw ce("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof h)t=lt("<!---->"),o=t.ownerDocument.importNode(i,!0),o.nodeType===ue.element&&o.nodeName==="BODY"||o.nodeName==="HTML"?t=o:t.appendChild(o);else{if(!Q&&!K&&!q&&i.indexOf("<")===-1)return E&&me?E.createHTML(i):i;if(t=lt(i),!t)return Q?null:me?X:""}t&&Ie&&j(t.firstChild);const O=ct(oe?i:t);for(;d=O.nextNode();)pt(d)||(d.content instanceof l&&Jt(d.content),Tt(d));if(oe)return i;if(Q){if(pe)for(x=Ht.call(t.ownerDocument);t.firstChild;)x.appendChild(t.firstChild);else x=t;return(S.shadowroot||S.shadowrootmode)&&(x=zt.call(a,x,!0)),x}let P=q?t.outerHTML:t.innerHTML;return q&&y["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&w(wt,t.ownerDocument.doctype.name)&&(P="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+P),K&&Ee([ye,Se,Re],W=>{P=le(P,W," ")}),E&&me?E.createHTML(P):P},n.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ve(i),Oe=!0},n.clearConfig=function(){ne=null,Oe=!1},n.isValidAttribute=function(i,e,t){ne||ve({});const o=R(i),d=R(e);return mt(o,d,t)},n.addHook=function(i,e){typeof e=="function"&&(G[i]=G[i]||[],se(G[i],e))},n.removeHook=function(i){if(G[i])return At(G[i])},n.removeHooks=function(i){G[i]&&(G[i]=[])},n.removeAllHooks=function(){G={}},n}var Dn=Dt(),Be={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ot;function Rn(){return Ot||(Ot=1,function(r){(function(){var n={}.hasOwnProperty;function s(){for(var l="",u=0;u<arguments.length;u++){var h=arguments[u];h&&(l=f(l,a(h)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return s.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var h in l)n.call(l,h)&&l[h]&&(u=f(u,h));return u}function f(l,u){return u?l?l+" "+u:l+u:l}r.exports?(s.default=s,r.exports=s):window.classNames=s})()}(Be)),Be.exports}var bn=Rn();const vt=en(bn),Ln=r=>r?r.split(" ").filter(Boolean).at(-1):null,Nn=r=>r?r.split(" "):[],je=(r,n,s)=>{if(!r)return"";const a=Ln(r),l=Nn(s).filter(u=>/\S/.test(u)).map(u=>`${a}--${u}`);return vt(r,n,l)},Mt=D.forwardRef(({className:r,classModifier:n="",label:s,description:a,helper:f,error:l,buttonLabel:u,onButtonClick:h,required:B,sideButtonLabel:k,ItemLabelComponent:z,ItemMessageComponent:m,onSideButtonClick:p,...T},b)=>{const L=je("af-form__input-textarea",r,n);let N=D.useId();N=T.id||N;const A=D.useId(),I=D.useId();return _.jsxs("div",{className:"af-form__input-container",children:[_.jsx(z,{label:s,description:a,buttonLabel:u,onButtonClick:h,sideButtonLabel:k,onSideButtonClick:p,required:B,inputId:N,idLabel:I}),_.jsx("textarea",{id:N,className:L,ref:b,"aria-errormessage":A,"aria-invalid":!!l,...T}),f&&_.jsx("span",{className:"af-form__input-helper",children:f}),_.jsx(m,{id:A,message:l})]})});Mt.displayName="TextArea";Mt.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{classModifier:{defaultValue:{value:'""',computed:!1},required:!1}}};const Pt=D.forwardRef(({id:r,required:n,label:s,error:a,placeholder:f,children:l,helper:u,success:h,description:B,buttonLabel:k,onButtonClick:z,sideButtonLabel:m,onSideButtonClick:p,ItemLabelComponent:T,ItemMessageComponent:b,...L},N)=>{const A=D.useId(),I=D.useId();let M=D.useId();M=r||M;const E=vt("af-form__select-input",a&&"af-form__select-input--error");return _.jsxs("div",{children:[_.jsx(T,{label:s,description:B,buttonLabel:k,onButtonClick:z,sideButtonLabel:m,onSideButtonClick:p,required:n,inputId:M,idLabel:A}),_.jsxs("select",{className:E,...L,ref:N,id:M,children:[!!f&&_.jsx("option",{disabled:!0,value:"",children:f}),l]}),u&&_.jsx("span",{className:"af-form__input-helper",children:u}),_.jsx(b,{id:I,message:a||h,messageType:a?"error":"success"})]})});Pt.displayName="Select";Pt.__docgenInfo={description:"",methods:[],displayName:"Select"};const kt=D.forwardRef(({unit:r,className:n,classModifier:s="",helper:a,error:f,success:l,label:u,description:h,buttonLabel:B,onButtonClick:k,required:z,sideButtonLabel:m,onSideButtonClick:p,ItemLabelComponent:T,ItemMessageComponent:b,"aria-errormessage":L,...N},A)=>{const I=je("af-form__input-text",n,s+(f||L?" error":""));let M=D.useId();M=N.id||M;const E=D.useId(),X=D.useId(),Z=D.useId();return _.jsxs("div",{className:"af-form__input-container",children:[_.jsx(T,{label:u,description:h,buttonLabel:B,onButtonClick:k,sideButtonLabel:m,onSideButtonClick:p,required:z,inputId:M,idLabel:Z}),_.jsxs("div",{className:"af-form__input-variant",children:[_.jsx("input",{id:M,className:I,type:"text",required:z,ref:A,"aria-labelledby":Z,"aria-errormessage":L??E,"aria-invalid":!!(f||L),"aria-describedby":X,...N}),r]}),a&&_.jsx("span",{id:X,className:"af-form__input-helper",children:a}),_.jsx(b,{id:E,message:f||l,messageType:f?"error":"success"})]})});kt.displayName="TextInput";kt.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{classModifier:{defaultValue:{value:'""',computed:!1},required:!1}}};const Ut=D.forwardRef(({className:r,...n},s)=>{let a=D.useId();return a=n.id??a,_.jsxs("label",{className:je("af-toggle",r),htmlFor:a,children:[_.jsx("div",{className:"af-toggle__root",children:_.jsx("span",{className:"af-toggle__handle"})}),_.jsx("input",{...n,ref:s,type:"checkbox",id:a})]})});Ut.displayName="Toggle";Ut.__docgenInfo={description:"",methods:[],displayName:"Toggle"};export{tn as S,Ut as T,Pt as a,Mt as b,kt as c,wn as d,je as g,Dn as p,Cn as s};
