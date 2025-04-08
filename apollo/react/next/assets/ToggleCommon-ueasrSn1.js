import{j as P}from"./jsx-runtime-D_zvdyIk.js";import{r as X}from"./index-DuZrfDUH.js";import{g as Kt}from"./_commonjsHelpers-CqkleIqs.js";const wn={blue:"blue",gray:"gray",white:"white"},ve="af-spinner",Qt=({size:o=40,variant:n="blue",text:a="Chargement en cours"})=>P.jsx("div",{role:"alert","aria-busy":!0,"aria-label":a,"aria-live":"assertive",className:[ve,`${ve}--${n}`,`${ve}--${o}`].filter(Boolean).join(" "),style:{"--spinner-size":o}});Qt.displayName="Spinner";var Ee={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Et;function Jt(){if(Et)return Ee;Et=1;var o=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,n=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,a=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,s=/\\([\u000b\u0020-\u00ff])/g,f=/([\\"])/g,l=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;Ee.format=u,Ee.parse=O;function u(d){if(!d||typeof d!="object")throw new TypeError("argument obj is required");var p=d.parameters,g=d.type;if(!g||!l.test(g))throw new TypeError("invalid type");var w=g;if(p&&typeof p=="object")for(var C,k=Object.keys(p).sort(),I=0;I<k.length;I++){if(C=k[I],!a.test(C))throw new TypeError("invalid parameter name");w+="; "+C+"="+z(p[C])}return w}function O(d){if(!d)throw new TypeError("argument string is required");var p=typeof d=="object"?q(d):d;if(typeof p!="string")throw new TypeError("argument string is required to be a string");var g=p.indexOf(";"),w=g!==-1?p.slice(0,g).trim():p.trim();if(!l.test(w))throw new TypeError("invalid media type");var C=new V(w.toLowerCase());if(g!==-1){var k,I,x;for(o.lastIndex=g;I=o.exec(p);){if(I.index!==g)throw new TypeError("invalid parameter format");g+=I[0].length,k=I[1].toLowerCase(),x=I[2],x.charCodeAt(0)===34&&(x=x.slice(1,-1),x.indexOf("\\")!==-1&&(x=x.replace(s,"$1"))),C.parameters[k]=x}if(g!==p.length)throw new TypeError("invalid parameter format")}return C}function q(d){var p;if(typeof d.getHeader=="function"?p=d.getHeader("content-type"):typeof d.headers=="object"&&(p=d.headers&&d.headers["content-type"]),typeof p!="string")throw new TypeError("content-type header is missing from object");return p}function z(d){var p=String(d);if(a.test(p))return p;if(p.length>0&&!n.test(p))throw new TypeError("invalid parameter value");return'"'+p.replace(f,"\\$1")+'"'}function V(d){this.parameters=Object.create(null),this.type=d}return Ee}var Cn=Jt();/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */const{entries:Nt,setPrototypeOf:_t,isFrozen:en,getPrototypeOf:tn,getOwnPropertyDescriptor:nn}=Object;let{freeze:L,seal:M,create:wt}=Object,{apply:Ge,construct:We}=typeof Reflect<"u"&&Reflect;L||(L=function(n){return n});M||(M=function(n){return n});Ge||(Ge=function(n,a,s){return n.apply(a,s)});We||(We=function(n,a){return new n(...a)});const _e=D(Array.prototype.forEach),ht=D(Array.prototype.pop),se=D(Array.prototype.push),Ae=D(String.prototype.toLowerCase),Pe=D(String.prototype.toString),At=D(String.prototype.match),le=D(String.prototype.replace),rn=D(String.prototype.indexOf),on=D(String.prototype.trim),v=D(Object.prototype.hasOwnProperty),b=D(RegExp.prototype.test),ce=an(TypeError);function D(o){return function(n){for(var a=arguments.length,s=new Array(a>1?a-1:0),f=1;f<a;f++)s[f-1]=arguments[f];return Ge(o,n,s)}}function an(o){return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return We(o,a)}}function c(o,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ae;_t&&_t(o,null);let s=n.length;for(;s--;){let f=n[s];if(typeof f=="string"){const l=a(f);l!==f&&(en(n)||(n[s]=l),f=l)}o[f]=!0}return o}function sn(o){for(let n=0;n<o.length;n++)v(o,n)||(o[n]=null);return o}function $(o){const n=wt(null);for(const[a,s]of Nt(o))v(o,a)&&(Array.isArray(s)?n[a]=sn(s):s&&typeof s=="object"&&s.constructor===Object?n[a]=$(s):n[a]=s);return n}function fe(o,n){for(;o!==null;){const s=nn(o,n);if(s){if(s.get)return D(s.get);if(typeof s.value=="function")return D(s.value)}o=tn(o)}function a(){return null}return a}const yt=L(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ke=L(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ue=L(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ln=L(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Fe=L(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),cn=L(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),St=L(["#text"]),Rt=L(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),He=L(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),bt=L(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),he=L(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),fn=M(/\{\{[\w\W]*|[\w\W]*\}\}/gm),un=M(/<%[\w\W]*|[\w\W]*%>/gm),pn=M(/\${[\w\W]*}/gm),mn=M(/^data-[\-\w.\u00B7-\uFFFF]/),dn=M(/^aria-[\-\w]+$/),Ct=M(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Tn=M(/^(?:\w+script|data):/i),gn=M(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),It=M(/^html$/i),En=M(/^[a-z][.\w]*(-[.\w]+)+$/i);var Lt=Object.freeze({__proto__:null,MUSTACHE_EXPR:fn,ERB_EXPR:un,TMPLIT_EXPR:pn,DATA_ATTR:mn,ARIA_ATTR:dn,IS_ALLOWED_URI:Ct,IS_SCRIPT_OR_DATA:Tn,ATTR_WHITESPACE:gn,DOCTYPE_NAME:It,CUSTOM_ELEMENT:En});const ue={element:1,text:3,progressingInstruction:7,comment:8,document:9},_n=function(){return typeof window>"u"?null:window},hn=function(n,a){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let s=null;const f="data-tt-policy-suffix";a&&a.hasAttribute(f)&&(s=a.getAttribute(f));const l="dompurify"+(s?"#"+s:"");try{return n.createPolicy(l,{createHTML(u){return u},createScriptURL(u){return u}})}catch{return console.warn("TrustedTypes policy "+l+" could not be created."),null}};function Dt(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_n();const n=i=>Dt(i);if(n.version="3.1.7",n.removed=[],!o||!o.document||o.document.nodeType!==ue.document)return n.isSupported=!1,n;let{document:a}=o;const s=a,f=s.currentScript,{DocumentFragment:l,HTMLTemplateElement:u,Node:O,Element:q,NodeFilter:z,NamedNodeMap:V=o.NamedNodeMap||o.MozNamedAttrMap,HTMLFormElement:d,DOMParser:p,trustedTypes:g}=o,w=q.prototype,C=fe(w,"cloneNode"),k=fe(w,"remove"),I=fe(w,"nextSibling"),x=fe(w,"childNodes"),G=fe(w,"parentNode");if(typeof u=="function"){const i=a.createElement("template");i.content&&i.content.ownerDocument&&(a=i.content.ownerDocument)}let E,j="";const{implementation:Z,createNodeIterator:Pt,createDocumentFragment:kt,getElementsByTagName:Ut}=a,{importNode:Ft}=s;let U={};n.isSupported=typeof Nt=="function"&&typeof G=="function"&&Z&&Z.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ye,ERB_EXPR:Se,TMPLIT_EXPR:Re,DATA_ATTR:Ht,ARIA_ATTR:zt,IS_SCRIPT_OR_DATA:Gt,ATTR_WHITESPACE:Be,CUSTOM_ELEMENT:Wt}=Lt;let{IS_ALLOWED_URI:je}=Lt,_=null;const Ye=c({},[...yt,...ke,...Ue,...Fe,...St]);let h=null;const $e=c({},[...Rt,...He,...bt,...he]);let T=Object.seal(wt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),re=null,be=null,Xe=!0,Le=!0,qe=!1,Ve=!0,K=!1,Oe=!0,Y=!1,Ne=!1,we=!1,Q=!1,pe=!1,me=!1,Ze=!0,Ke=!1;const Bt="user-content-";let Ce=!0,oe=!1,J={},ee=null;const Qe=c({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Je=null;const et=c({},["audio","video","img","source","image","track"]);let Ie=null;const tt=c({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),de="http://www.w3.org/1998/Math/MathML",Te="http://www.w3.org/2000/svg",W="http://www.w3.org/1999/xhtml";let te=W,De=!1,xe=null;const jt=c({},[de,Te,W],Pe);let ie=null;const Yt=["application/xhtml+xml","text/html"],$t="text/html";let A=null,ne=null;const Xt=a.createElement("form"),nt=function(e){return e instanceof RegExp||e instanceof Function},Me=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ne&&ne===e)){if((!e||typeof e!="object")&&(e={}),e=$(e),ie=Yt.indexOf(e.PARSER_MEDIA_TYPE)===-1?$t:e.PARSER_MEDIA_TYPE,A=ie==="application/xhtml+xml"?Pe:Ae,_=v(e,"ALLOWED_TAGS")?c({},e.ALLOWED_TAGS,A):Ye,h=v(e,"ALLOWED_ATTR")?c({},e.ALLOWED_ATTR,A):$e,xe=v(e,"ALLOWED_NAMESPACES")?c({},e.ALLOWED_NAMESPACES,Pe):jt,Ie=v(e,"ADD_URI_SAFE_ATTR")?c($(tt),e.ADD_URI_SAFE_ATTR,A):tt,Je=v(e,"ADD_DATA_URI_TAGS")?c($(et),e.ADD_DATA_URI_TAGS,A):et,ee=v(e,"FORBID_CONTENTS")?c({},e.FORBID_CONTENTS,A):Qe,re=v(e,"FORBID_TAGS")?c({},e.FORBID_TAGS,A):{},be=v(e,"FORBID_ATTR")?c({},e.FORBID_ATTR,A):{},J=v(e,"USE_PROFILES")?e.USE_PROFILES:!1,Xe=e.ALLOW_ARIA_ATTR!==!1,Le=e.ALLOW_DATA_ATTR!==!1,qe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ve=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,K=e.SAFE_FOR_TEMPLATES||!1,Oe=e.SAFE_FOR_XML!==!1,Y=e.WHOLE_DOCUMENT||!1,Q=e.RETURN_DOM||!1,pe=e.RETURN_DOM_FRAGMENT||!1,me=e.RETURN_TRUSTED_TYPE||!1,we=e.FORCE_BODY||!1,Ze=e.SANITIZE_DOM!==!1,Ke=e.SANITIZE_NAMED_PROPS||!1,Ce=e.KEEP_CONTENT!==!1,oe=e.IN_PLACE||!1,je=e.ALLOWED_URI_REGEXP||Ct,te=e.NAMESPACE||W,T=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&nt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(T.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&nt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(T.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(T.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),K&&(Le=!1),pe&&(Q=!0),J&&(_=c({},St),h=[],J.html===!0&&(c(_,yt),c(h,Rt)),J.svg===!0&&(c(_,ke),c(h,He),c(h,he)),J.svgFilters===!0&&(c(_,Ue),c(h,He),c(h,he)),J.mathMl===!0&&(c(_,Fe),c(h,bt),c(h,he))),e.ADD_TAGS&&(_===Ye&&(_=$(_)),c(_,e.ADD_TAGS,A)),e.ADD_ATTR&&(h===$e&&(h=$(h)),c(h,e.ADD_ATTR,A)),e.ADD_URI_SAFE_ATTR&&c(Ie,e.ADD_URI_SAFE_ATTR,A),e.FORBID_CONTENTS&&(ee===Qe&&(ee=$(ee)),c(ee,e.FORBID_CONTENTS,A)),Ce&&(_["#text"]=!0),Y&&c(_,["html","head","body"]),_.table&&(c(_,["tbody"]),delete re.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=e.TRUSTED_TYPES_POLICY,j=E.createHTML("")}else E===void 0&&(E=hn(g,f)),E!==null&&typeof j=="string"&&(j=E.createHTML(""));L&&L(e),ne=e}},rt=c({},["mi","mo","mn","ms","mtext"]),ot=c({},["annotation-xml"]),qt=c({},["title","style","font","a","script"]),it=c({},[...ke,...Ue,...ln]),at=c({},[...Fe,...cn]),Vt=function(e){let t=G(e);(!t||!t.tagName)&&(t={namespaceURI:te,tagName:"template"});const r=Ae(e.tagName),m=Ae(t.tagName);return xe[e.namespaceURI]?e.namespaceURI===Te?t.namespaceURI===W?r==="svg":t.namespaceURI===de?r==="svg"&&(m==="annotation-xml"||rt[m]):!!it[r]:e.namespaceURI===de?t.namespaceURI===W?r==="math":t.namespaceURI===Te?r==="math"&&ot[m]:!!at[r]:e.namespaceURI===W?t.namespaceURI===Te&&!ot[m]||t.namespaceURI===de&&!rt[m]?!1:!at[r]&&(qt[r]||!it[r]):!!(ie==="application/xhtml+xml"&&xe[e.namespaceURI]):!1},F=function(e){se(n.removed,{element:e});try{G(e).removeChild(e)}catch{k(e)}},ge=function(e,t){try{se(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{se(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!h[e])if(Q||pe)try{F(t)}catch{}else try{t.setAttribute(e,"")}catch{}},st=function(e){let t=null,r=null;if(we)e="<remove></remove>"+e;else{const y=At(e,/^[\r\n\t ]+/);r=y&&y[0]}ie==="application/xhtml+xml"&&te===W&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const m=E?E.createHTML(e):e;if(te===W)try{t=new p().parseFromString(m,ie)}catch{}if(!t||!t.documentElement){t=Z.createDocument(te,"template",null);try{t.documentElement.innerHTML=De?j:m}catch{}}const S=t.body||t.documentElement;return e&&r&&S.insertBefore(a.createTextNode(r),S.childNodes[0]||null),te===W?Ut.call(t,Y?"html":"body")[0]:Y?t.documentElement:S},lt=function(e){return Pt.call(e.ownerDocument||e,e,z.SHOW_ELEMENT|z.SHOW_COMMENT|z.SHOW_TEXT|z.SHOW_PROCESSING_INSTRUCTION|z.SHOW_CDATA_SECTION,null)},ct=function(e){return e instanceof d&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof V)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},ft=function(e){return typeof O=="function"&&e instanceof O},B=function(e,t,r){U[e]&&_e(U[e],m=>{m.call(n,t,r,ne)})},ut=function(e){let t=null;if(B("beforeSanitizeElements",e,null),ct(e))return F(e),!0;const r=A(e.nodeName);if(B("uponSanitizeElement",e,{tagName:r,allowedTags:_}),e.hasChildNodes()&&!ft(e.firstElementChild)&&b(/<[/\w]/g,e.innerHTML)&&b(/<[/\w]/g,e.textContent)||e.nodeType===ue.progressingInstruction||Oe&&e.nodeType===ue.comment&&b(/<[/\w]/g,e.data))return F(e),!0;if(!_[r]||re[r]){if(!re[r]&&mt(r)&&(T.tagNameCheck instanceof RegExp&&b(T.tagNameCheck,r)||T.tagNameCheck instanceof Function&&T.tagNameCheck(r)))return!1;if(Ce&&!ee[r]){const m=G(e)||e.parentNode,S=x(e)||e.childNodes;if(S&&m){const y=S.length;for(let N=y-1;N>=0;--N){const H=C(S[N],!0);H.__removalCount=(e.__removalCount||0)+1,m.insertBefore(H,I(e))}}}return F(e),!0}return e instanceof q&&!Vt(e)||(r==="noscript"||r==="noembed"||r==="noframes")&&b(/<\/no(script|embed|frames)/i,e.innerHTML)?(F(e),!0):(K&&e.nodeType===ue.text&&(t=e.textContent,_e([ye,Se,Re],m=>{t=le(t,m," ")}),e.textContent!==t&&(se(n.removed,{element:e.cloneNode()}),e.textContent=t)),B("afterSanitizeElements",e,null),!1)},pt=function(e,t,r){if(Ze&&(t==="id"||t==="name")&&(r in a||r in Xt))return!1;if(!(Le&&!be[t]&&b(Ht,t))){if(!(Xe&&b(zt,t))){if(!h[t]||be[t]){if(!(mt(e)&&(T.tagNameCheck instanceof RegExp&&b(T.tagNameCheck,e)||T.tagNameCheck instanceof Function&&T.tagNameCheck(e))&&(T.attributeNameCheck instanceof RegExp&&b(T.attributeNameCheck,t)||T.attributeNameCheck instanceof Function&&T.attributeNameCheck(t))||t==="is"&&T.allowCustomizedBuiltInElements&&(T.tagNameCheck instanceof RegExp&&b(T.tagNameCheck,r)||T.tagNameCheck instanceof Function&&T.tagNameCheck(r))))return!1}else if(!Ie[t]){if(!b(je,le(r,Be,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&rn(r,"data:")===0&&Je[e])){if(!(qe&&!b(Gt,le(r,Be,"")))){if(r)return!1}}}}}}return!0},mt=function(e){return e!=="annotation-xml"&&At(e,Wt)},dt=function(e){B("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:h};let m=t.length;for(;m--;){const S=t[m],{name:y,namespaceURI:N,value:H}=S,ae=A(y);let R=y==="value"?H:on(H);if(r.attrName=ae,r.attrValue=R,r.keepAttr=!0,r.forceKeepAttr=void 0,B("uponSanitizeAttribute",e,r),R=r.attrValue,r.forceKeepAttr||(ge(y,e),!r.keepAttr))continue;if(!Ve&&b(/\/>/i,R)){ge(y,e);continue}K&&_e([ye,Se,Re],gt=>{R=le(R,gt," ")});const Tt=A(e.nodeName);if(pt(Tt,ae,R)){if(Ke&&(ae==="id"||ae==="name")&&(ge(y,e),R=Bt+R),Oe&&b(/((--!?|])>)|<\/(style|title)/i,R)){ge(y,e);continue}if(E&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!N)switch(g.getAttributeType(Tt,ae)){case"TrustedHTML":{R=E.createHTML(R);break}case"TrustedScriptURL":{R=E.createScriptURL(R);break}}try{N?e.setAttributeNS(N,y,R):e.setAttribute(y,R),ct(e)?F(e):ht(n.removed)}catch{}}}B("afterSanitizeAttributes",e,null)},Zt=function i(e){let t=null;const r=lt(e);for(B("beforeSanitizeShadowDOM",e,null);t=r.nextNode();)B("uponSanitizeShadowNode",t,null),!ut(t)&&(t.content instanceof l&&i(t.content),dt(t));B("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,r=null,m=null,S=null;if(De=!i,De&&(i="<!-->"),typeof i!="string"&&!ft(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw ce("dirty is not a string, aborting")}else throw ce("toString is not a function");if(!n.isSupported)return i;if(Ne||Me(e),n.removed=[],typeof i=="string"&&(oe=!1),oe){if(i.nodeName){const H=A(i.nodeName);if(!_[H]||re[H])throw ce("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof O)t=st("<!---->"),r=t.ownerDocument.importNode(i,!0),r.nodeType===ue.element&&r.nodeName==="BODY"||r.nodeName==="HTML"?t=r:t.appendChild(r);else{if(!Q&&!K&&!Y&&i.indexOf("<")===-1)return E&&me?E.createHTML(i):i;if(t=st(i),!t)return Q?null:me?j:""}t&&we&&F(t.firstChild);const y=lt(oe?i:t);for(;m=y.nextNode();)ut(m)||(m.content instanceof l&&Zt(m.content),dt(m));if(oe)return i;if(Q){if(pe)for(S=kt.call(t.ownerDocument);t.firstChild;)S.appendChild(t.firstChild);else S=t;return(h.shadowroot||h.shadowrootmode)&&(S=Ft.call(s,S,!0)),S}let N=Y?t.outerHTML:t.innerHTML;return Y&&_["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&b(It,t.ownerDocument.doctype.name)&&(N="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+N),K&&_e([ye,Se,Re],H=>{N=le(N,H," ")}),E&&me?E.createHTML(N):N},n.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Me(i),Ne=!0},n.clearConfig=function(){ne=null,Ne=!1},n.isValidAttribute=function(i,e,t){ne||Me({});const r=A(i),m=A(e);return pt(r,m,t)},n.addHook=function(i,e){typeof e=="function"&&(U[i]=U[i]||[],se(U[i],e))},n.removeHook=function(i){if(U[i])return ht(U[i])},n.removeHooks=function(i){U[i]&&(U[i]=[])},n.removeAllHooks=function(){U={}},n}var In=Dt(),ze={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ot;function An(){return Ot||(Ot=1,function(o){(function(){var n={}.hasOwnProperty;function a(){for(var l="",u=0;u<arguments.length;u++){var O=arguments[u];O&&(l=f(l,s(O)))}return l}function s(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var O in l)n.call(l,O)&&l[O]&&(u=f(u,O));return u}function f(l,u){return u?l?l+" "+u:l+u:l}o.exports?(a.default=a,o.exports=a):window.classNames=a})()}(ze)),ze.exports}var yn=An();const Sn=Kt(yn),Rn=o=>o?o.split(" ").filter(Boolean).at(-1):null,bn=o=>o?o.split(" "):[],xt=(o,n,a)=>{if(!o)return"";const s=Rn(o),l=bn(a).filter(u=>/\S/.test(u)).map(u=>`${s}--${u}`);return Sn(o,n,l)},Mt=X.forwardRef(({unit:o,className:n,classModifier:a="",helper:s,error:f,success:l,label:u,description:O,buttonLabel:q,onButtonClick:z,required:V,sideButtonLabel:d,onSideButtonClick:p,ItemLabelComponent:g,ItemMessageComponent:w,"aria-errormessage":C,...k},I)=>{const x=xt("af-form__input-text",n,a+(f||C?" error":""));let G=X.useId();G=k.id||G;const E=X.useId(),j=X.useId(),Z=X.useId();return P.jsxs("div",{className:"af-form__input-container",children:[P.jsx(g,{label:u,description:O,buttonLabel:q,onButtonClick:z,sideButtonLabel:d,onSideButtonClick:p,required:V,inputId:G,idLabel:Z}),P.jsxs("div",{className:"af-form__input-variant",children:[P.jsx("input",{id:G,className:x,type:"text",required:V,ref:I,"aria-labelledby":Z,"aria-errormessage":C??E,"aria-invalid":!!(f||C),"aria-describedby":j,...k}),o]}),s&&P.jsx("span",{id:j,className:"af-form__input-helper",children:s}),P.jsx(w,{id:E,message:f||l,messageType:f?"error":"success"})]})});Mt.displayName="TextInput";Mt.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{classModifier:{defaultValue:{value:'""',computed:!1},required:!1}}};const vt=X.forwardRef(({className:o,...n},a)=>{let s=X.useId();return s=n.id??s,P.jsxs("label",{className:xt("af-toggle",o),htmlFor:s,children:[P.jsx("div",{className:"af-toggle__root",children:P.jsx("span",{className:"af-toggle__handle"})}),P.jsx("input",{...n,ref:a,type:"checkbox",id:s})]})});vt.displayName="Toggle";vt.__docgenInfo={description:"",methods:[],displayName:"Toggle"};export{Qt as S,vt as T,Mt as a,Cn as c,xt as g,In as p,wn as s};
