import{j as c}from"./index-DK-fRI8B.js";/* empty css              */import{p as _e,b as zr,L as Lr,u as Mr,v as Nr,H as Ae,M as Wr}from"./Loader-D6y4K9Ud.js";import{r as f,e as Kr}from"./index-DbaA8R3S.js";import{g as br}from"./_commonjsHelpers-CqkleIqs.js";import{a as B,b as $,c as qr}from"./tslib.es6-Duv2rsQ1.js";import{f as Br}from"./index-C2cC0QQF.js";var De={exports:{}},Fe,He;function $r(){if(He)return Fe;He=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Fe=e,Fe}var xe,Ve;function Hr(){if(Ve)return xe;Ve=1;var e=$r();function r(){}function n(){}return n.resetWarningCache=r,xe=function(){function t(u,l,g,D,F,v){if(v!==e){var j=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw j.name="Invariant Violation",j}}t.isRequired=t;function i(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:i,element:t,elementType:t,instanceOf:i,node:t,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:r};return o.PropTypes=o,o},xe}var Ue;function Vr(){return Ue||(Ue=1,De.exports=Hr()()),De.exports}var Ur=Vr();const d=br(Ur);var Gr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Q(e,r){var n=Yr(e);if(typeof n.path!="string"){var t=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof t=="string"&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Yr(e){var r=e.name,n=r&&r.lastIndexOf(".")!==-1;if(n&&!e.type){var t=r.split(".").pop().toLowerCase(),i=Gr.get(t);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var Jr=[".DS_Store","Thumbs.db"];function Qr(e){return B(this,void 0,void 0,function(){return $(this,function(r){return se(e)&&Xr(e)?[2,nn(e.dataTransfer,e.type)]:Zr(e)?[2,en(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,rn(e)]:[2,[]]})})}function Xr(e){return se(e.dataTransfer)}function Zr(e){return se(e)&&se(e.target)}function se(e){return typeof e=="object"&&e!==null}function en(e){return we(e.target.files).map(function(r){return Q(r)})}function rn(e){return B(this,void 0,void 0,function(){var r;return $(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(t){return t.getFile()}))];case 1:return r=n.sent(),[2,r.map(function(t){return Q(t)})]}})})}function nn(e,r){return B(this,void 0,void 0,function(){var n,t;return $(this,function(i){switch(i.label){case 0:return e===null?[2,[]]:e.items?(n=we(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,n]:[4,Promise.all(n.map(tn))]):[3,2];case 1:return t=i.sent(),[2,Ge(Dr(t))];case 2:return[2,Ge(we(e.files).map(function(o){return Q(o)}))]}})})}function Ge(e){return e.filter(function(r){return Jr.indexOf(r.name)===-1})}function we(e){if(e===null)return[];for(var r=[],n=0;n<e.length;n++){var t=e[n];r.push(t)}return r}function tn(e){if(typeof e.webkitGetAsEntry!="function")return Ye(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Fr(r):Ye(e)}function Dr(e){return e.reduce(function(r,n){return qr(r,Array.isArray(n)?Dr(n):[n])},[])}function Ye(e){var r=e.getAsFile();if(!r)return Promise.reject(e+" is not a File");var n=Q(r);return Promise.resolve(n)}function an(e){return B(this,void 0,void 0,function(){return $(this,function(r){return[2,e.isDirectory?Fr(e):on(e)]})})}function Fr(e){var r=e.createReader();return new Promise(function(n,t){var i=[];function o(){var u=this;r.readEntries(function(l){return B(u,void 0,void 0,function(){var g,D,F;return $(this,function(v){switch(v.label){case 0:if(l.length)return[3,5];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return g=v.sent(),n(g),[3,4];case 3:return D=v.sent(),t(D),[3,4];case 4:return[3,6];case 5:F=Promise.all(l.map(an)),i.push(F),o(),v.label=6;case 6:return[2]}})})},function(l){t(l)})}o()})}function on(e){return B(this,void 0,void 0,function(){return $(this,function(r){return[2,new Promise(function(n,t){e.file(function(i){var o=Q(i,e.fullPath);n(o)},function(i){t(i)})})]})})}var ae={},Je;function sn(){return Je||(Je=1,ae.__esModule=!0,ae.default=function(e,r){if(e&&r){var n=Array.isArray(r)?r:r.split(","),t=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return n.some(function(u){var l=u.trim().toLowerCase();return l.charAt(0)==="."?t.toLowerCase().endsWith(l):l.endsWith("/*")?o===l.replace(/\/.*$/,""):i===l})}return!0}),ae}var ln=sn();const cn=br(ln);function Qe(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function Xe(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Qe(Object(n),!0).forEach(function(t){xr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function xr(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function Ze(e,r){return dn(e)||fn(e,r)||pn(e,r)||un()}function un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pn(e,r){if(e){if(typeof e=="string")return er(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return er(e,r)}}function er(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function fn(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],i=!0,o=!1,u,l;try{for(n=n.call(e);!(i=(u=n.next()).done)&&(t.push(u.value),!(r&&t.length===r));i=!0);}catch(g){o=!0,l=g}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return t}}function dn(e){if(Array.isArray(e))return e}var mn="file-invalid-type",gn="file-too-large",vn="file-too-small",yn="too-many-files",hn=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var n=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:mn,message:"File type must be ".concat(n)}},rr=function(r){return{code:gn,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},nr=function(r){return{code:vn,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},bn={code:yn,message:"Too many files"};function jr(e,r){var n=e.type==="application/x-moz-file"||cn(e,r);return[n,n?null:hn(r)]}function wr(e,r,n){if(V(e.size))if(V(r)&&V(n)){if(e.size>n)return[!1,rr(n)];if(e.size<r)return[!1,nr(r)]}else{if(V(r)&&e.size<r)return[!1,nr(r)];if(V(n)&&e.size>n)return[!1,rr(n)]}return[!0,null]}function V(e){return e!=null}function Dn(e){var r=e.files,n=e.accept,t=e.minSize,i=e.maxSize,o=e.multiple,u=e.maxFiles;return!o&&r.length>1||o&&u>=1&&r.length>u?!1:r.every(function(l){var g=jr(l,n),D=Ze(g,1),F=D[0],v=wr(l,t,i),j=Ze(v,1),E=j[0];return F&&E})}function le(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function oe(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function tr(e){e.preventDefault()}function Fn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function xn(e){return e.indexOf("Edge/")!==-1}function jn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Fn(e)||xn(e)}function C(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=arguments[u];return r.some(function(l){return!le(t)&&l&&l.apply(void 0,[t].concat(o)),le(t)})}}function ir(){return"showOpenFilePicker"in window}function wn(e){return e=typeof e=="string"?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter(function(r){return r==="audio/*"||r==="video/*"||r==="image/*"||r==="text/*"||/\w+\/[-+.\w]+/g.test(r)}).reduce(function(r,n){return Xe(Xe({},r),{},xr({},n,[]))},{}):{}}]}var On=["children"],Cn=["open"],En=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],_n=["refKey","onChange","onClick"];function An(e){return In(e)||Pn(e)||Or(e)||Tn()}function Tn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function In(e){if(Array.isArray(e))return Oe(e)}function je(e,r){return kn(e)||Rn(e,r)||Or(e,r)||Sn()}function Sn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Or(e,r){if(e){if(typeof e=="string")return Oe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oe(e,r)}}function Oe(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Rn(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],i=!0,o=!1,u,l;try{for(n=n.call(e);!(i=(u=n.next()).done)&&(t.push(u.value),!(r&&t.length===r));i=!0);}catch(g){o=!0,l=g}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return t}}function kn(e){if(Array.isArray(e))return e}function ar(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function m(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?ar(Object(n),!0).forEach(function(t){Ce(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ar(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ce(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function ce(e,r){if(e==null)return{};var n=zn(e,r),t,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function zn(e,r){if(e==null)return{};var n={},t=Object.keys(e),i,o;for(o=0;o<t.length;o++)i=t[o],!(r.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Te=f.forwardRef(function(e,r){var n=e.children,t=ce(e,On),i=Er(t),o=i.open,u=ce(i,Cn);return f.useImperativeHandle(r,function(){return{open:o}},[o]),Kr.createElement(f.Fragment,null,n(m(m({},u),{},{open:o})))});Te.displayName="Dropzone";var Cr={disabled:!1,getFilesFromEvent:Qr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1};Te.defaultProps=Cr;Te.propTypes={children:d.func,accept:d.oneOfType([d.string,d.arrayOf(d.string)]),multiple:d.bool,preventDropOnDocument:d.bool,noClick:d.bool,noKeyboard:d.bool,noDrag:d.bool,noDragEventsBubbling:d.bool,minSize:d.number,maxSize:d.number,maxFiles:d.number,disabled:d.bool,getFilesFromEvent:d.func,onFileDialogCancel:d.func,onFileDialogOpen:d.func,useFsAccessApi:d.bool,onDragEnter:d.func,onDragLeave:d.func,onDragOver:d.func,onDrop:d.func,onDropAccepted:d.func,onDropRejected:d.func,validator:d.func};var Ee={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function Er(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=m(m({},Cr),e),n=r.accept,t=r.disabled,i=r.getFilesFromEvent,o=r.maxSize,u=r.minSize,l=r.multiple,g=r.maxFiles,D=r.onDragEnter,F=r.onDragLeave,v=r.onDragOver,j=r.onDrop,E=r.onDropAccepted,I=r.onDropRejected,S=r.onFileDialogCancel,R=r.onFileDialogOpen,_=r.useFsAccessApi,A=r.preventDropOnDocument,L=r.noClick,k=r.noKeyboard,M=r.noDrag,x=r.noDragEventsBubbling,z=r.validator,T=f.useMemo(function(){return typeof R=="function"?R:or},[R]),P=f.useMemo(function(){return typeof S=="function"?S:or},[S]),y=f.useRef(null),p=f.useRef(null),pe=f.useReducer(Ln,Ee),X=je(pe,2),Z=X[0],w=X[1],Tr=Z.isFocused,Ie=Z.isFileDialogActive,Se=Z.draggedFiles,Re=function(){Ie&&setTimeout(function(){if(p.current){var s=p.current.files;s.length||(w({type:"closeDialog"}),P())}},300)};f.useEffect(function(){return _&&ir()?function(){}:(window.addEventListener("focus",Re,!1),function(){window.removeEventListener("focus",Re,!1)})},[p,Ie,P,_]);var N=f.useRef([]),ke=function(s){y.current&&y.current.contains(s.target)||(s.preventDefault(),N.current=[])};f.useEffect(function(){return A&&(document.addEventListener("dragover",tr,!1),document.addEventListener("drop",ke,!1)),function(){A&&(document.removeEventListener("dragover",tr),document.removeEventListener("drop",ke))}},[y,A]);var ze=f.useCallback(function(a){a.preventDefault(),a.persist(),te(a),N.current=[].concat(An(N.current),[a.target]),oe(a)&&Promise.resolve(i(a)).then(function(s){le(a)&&!x||(w({draggedFiles:s,isDragActive:!0,type:"setDraggedFiles"}),D&&D(a))})},[i,D,x]),Le=f.useCallback(function(a){a.preventDefault(),a.persist(),te(a);var s=oe(a);if(s&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return s&&v&&v(a),!1},[v,x]),Me=f.useCallback(function(a){a.preventDefault(),a.persist(),te(a);var s=N.current.filter(function(b){return y.current&&y.current.contains(b)}),h=s.indexOf(a.target);h!==-1&&s.splice(h,1),N.current=s,!(s.length>0)&&(w({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),oe(a)&&F&&F(a))},[y,F,x]),ee=f.useCallback(function(a,s){var h=[],b=[];a.forEach(function(O){var H=jr(O,n),q=je(H,2),de=q[0],me=q[1],ge=wr(O,u,o),ie=je(ge,2),ve=ie[0],ye=ie[1],he=z?z(O):null;if(de&&ve&&!he)h.push(O);else{var be=[me,ye];he&&(be=be.concat(he)),b.push({file:O,errors:be.filter(function(kr){return kr})})}}),(!l&&h.length>1||l&&g>=1&&h.length>g)&&(h.forEach(function(O){b.push({file:O,errors:[bn]})}),h.splice(0)),w({acceptedFiles:h,fileRejections:b,type:"setFiles"}),j&&j(h,b,s),b.length>0&&I&&I(b,s),h.length>0&&E&&E(h,s)},[w,l,n,u,o,g,j,E,I,z]),re=f.useCallback(function(a){a.preventDefault(),a.persist(),te(a),N.current=[],oe(a)&&Promise.resolve(i(a)).then(function(s){le(a)&&!x||ee(s,a)}),w({type:"reset"})},[i,ee,x]),W=f.useCallback(function(){if(_&&ir()){w({type:"openDialog"}),T();var a={multiple:l,types:wn(n)};window.showOpenFilePicker(a).then(function(s){return i(s)}).then(function(s){return ee(s,null)}).catch(function(s){return P(s)}).finally(function(){return w({type:"closeDialog"})});return}p.current&&(w({type:"openDialog"}),T(),p.current.value=null,p.current.click())},[w,T,P,_,ee,n,l]),Ne=f.useCallback(function(a){!y.current||!y.current.isEqualNode(a.target)||(a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),W())},[y,p,W]),We=f.useCallback(function(){w({type:"focus"})},[]),Ke=f.useCallback(function(){w({type:"blur"})},[]),qe=f.useCallback(function(){L||(jn()?setTimeout(W,0):W())},[p,L,W]),K=function(s){return t?null:s},fe=function(s){return k?null:K(s)},ne=function(s){return M?null:K(s)},te=function(s){x&&s.stopPropagation()},Pr=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.refKey,h=s===void 0?"ref":s,b=a.role,O=a.onKeyDown,H=a.onFocus,q=a.onBlur,de=a.onClick,me=a.onDragEnter,ge=a.onDragOver,ie=a.onDragLeave,ve=a.onDrop,ye=ce(a,En);return m(m(Ce({onKeyDown:fe(C(O,Ne)),onFocus:fe(C(H,We)),onBlur:fe(C(q,Ke)),onClick:K(C(de,qe)),onDragEnter:ne(C(me,ze)),onDragOver:ne(C(ge,Le)),onDragLeave:ne(C(ie,Me)),onDrop:ne(C(ve,re)),role:typeof b=="string"&&b!==""?b:"button"},h,y),!t&&!k?{tabIndex:0}:{}),ye)}},[y,Ne,We,Ke,qe,ze,Le,Me,re,k,M,t]),Ir=f.useCallback(function(a){a.stopPropagation()},[]),Sr=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.refKey,h=s===void 0?"ref":s,b=a.onChange,O=a.onClick,H=ce(a,_n),q=Ce({accept:n,multiple:l,type:"file",style:{display:"none"},onChange:K(C(b,re)),onClick:K(C(O,Ir)),autoComplete:"off",tabIndex:-1},h,p);return m(m({},q),H)}},[p,n,l,re,t]),Be=Se.length,$e=Be>0&&Dn({files:Se,accept:n,minSize:u,maxSize:o,multiple:l,maxFiles:g}),Rr=Be>0&&!$e;return m(m({},Z),{},{isDragAccept:$e,isDragReject:Rr,isFocused:Tr&&!t,getRootProps:Pr,getInputProps:Sr,rootRef:y,inputRef:p,open:K(W)})}function Ln(e,r){switch(r.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},Ee),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=r.isDragActive,t=r.draggedFiles;return m(m({},e),{},{draggedFiles:t,isDragActive:n});case"setFiles":return m(m({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return m({},Ee);default:return e}}function or(){}const ue=({className:e,classModifier:r,id:n,name:t,disabled:i,onChange:o,multiple:u=!0,maxSize:l=2e7,minSize:g=0,accept:D,readOnly:F,placeholder:v="Glissez/déposez vos fichiers",label:j="Parcourir",icon:E="open",...I})=>{const S=f.useId(),R=f.useId(),_=(x,z)=>{if(!o)return;const T=x.map(p=>({id:S,file:{...p,lastModified:p.lastModified,name:p.name,type:p.type,size:p.size,stream:p.stream,arrayBuffer:p.arrayBuffer,slice:p.slice,text:p.text,preview:URL.createObjectURL(p)}})),P=z.map(p=>({id:R,file:{errors:p.errors,file:{...p.file,lastModified:p.file.lastModified,name:p.file.name,type:p.file.type,size:p.file.size}}}));o({values:T,errors:P,name:t,fileAction:"add",id:n})},{getRootProps:A,getInputProps:L,open:k}=Er({onDrop:_,minSize:g,maxSize:l,multiple:u,accept:D,disabled:i}),M=_e(e,r,"af-form__file-input");return c.jsxs("div",{className:M,children:[c.jsxs("div",{...A({className:"drop-box"}),children:[c.jsx("input",{...L({id:n,name:t,readOnly:F,...I})}),c.jsx("div",{children:v})]}),c.jsxs(zr,{type:"button",className:"af-btn",classModifier:"file hasIconLeft",onClick:k,disabled:i,children:[c.jsx("i",{className:`glyphicon glyphicon-${E}`})," ",j]})]})},Mn=({errors:e})=>c.jsxs("div",{className:"af-form__file-errors",children:[c.jsx("span",{children:"Le chargement de certains fichiers a échoué : "}),c.jsx("ul",{className:"af-form__file-errors-list",children:e&&e.map(r=>c.jsxs("li",{children:[r.file.name," (",r.file.size,")"]},r.file.name))})]}),Nn=({className:e,classModifier:r,file:n,disabled:t,id:i,onClick:o})=>{const u=_e(e,r,"af-form__file-line");return c.jsxs("li",{className:u,children:[n&&n.type&&n.type.startsWith("image")?c.jsx("i",{className:"glyphicon glyphicon-picture"}):c.jsx("i",{className:"glyphicon glyphicon-file"}),c.jsx("span",{children:n.name}),c.jsx("span",{children:n.size}),c.jsx("button",{disabled:t,type:"button",className:"af-link af-link--delete-file",onClick:()=>o(i),children:c.jsx("span",{className:"af-link__text",children:"Supprimer"})})]})},Pe=({errors:e,values:r,className:n,classModifier:t,disabled:i,onClick:o})=>{const u=_e(n,t,"custom-table-file af-file-table");return c.jsxs("div",{className:u,children:[e&&e.length>0&&c.jsx(Mn,{errors:e}),r&&r.length>0&&c.jsx("ul",{className:"af-form__file-list",children:r.map(({file:l,id:g})=>c.jsx(Nn,{disabled:i,file:l,onClick:o,id:g},g))})]})},_r=({values:e=[],name:r="",onChange:n,classModifier:t="",message:i,children:o,helpMessage:u,id:l="",forceDisplayMessage:g,messageType:D,classNameContainerLabel:F,classNameContainerInput:v,label:j,isVisible:E,className:I,errors:S,fileLabel:R,disabled:_=!1,required:A,...L})=>{const k=(y,p)=>{const pe=e.filter(X=>X.id!==y);n({values:pe,name:r,id:p,fileAction:"delete"})},M=f.useId(),x=l??M,{inputClassModifier:z,inputFieldClassModifier:T}=Mr(t,_,!!o,A),P=`${T} label-top`;return c.jsxs(Lr,{label:j,id:x,message:i,messageType:D,isVisible:E,forceDisplayMessage:g,className:I,classModifier:P,classNameContainerLabel:F,classNameContainerInput:v,children:[c.jsxs(Nr,{className:"af-form__file",classModifier:T,children:[c.jsx(ue,{id:x,name:r,onChange:n,disabled:_,classModifier:z,label:R,required:A||(t==null?void 0:t.includes("required")),...L}),o]}),c.jsx(Ae,{message:u,isVisible:!i}),c.jsx(Pe,{errors:S,values:e,onClick:y=>k(y,x),classModifier:t})]})},Wn={component:_r,title:"Components/Form/Input/File",argTypes:{onChange:{action:"onChange"}},args:{onChange:Br()}},U={name:"FileInput",render:({onChange:e,...r})=>c.jsx(_r,{onChange:e,...r}),args:{required:!0,label:"Image",fileLabel:"Browse",name:"placeImage",id:"inputuniqueid",accept:"image/jpeg, image/png, application/*",helpMessage:"Take a photo af a place",messageType:Wr.error,multiple:!0,isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"}},G={name:"File",render:({onChange:e,...r})=>c.jsx(ue,{onChange:e,...r}),args:{label:"Image",name:"placeImage",id:"inputuniqueid",accept:"image/jpeg, image/png, application/*",multiple:!0,isVisible:!0,icon:"open"}},Kn=[{file:{name:"refused-extension-file.svg",preview:"",size:100}},{file:{name:"too-big-file.jpg",size:100},errors:{}},{file:{name:"error-file.jpg",preview:"",size:100}}],Ar=[{id:"000003",file:{name:"error-file.jpg",size:100,preview:"https://via.placeholder.com/150Cx50",type:"image"}},{id:"000004",file:{name:"fichier.png",size:100,preview:"https://via.placeholder.com/150Cx50",type:"image"}},{id:"000005",file:{name:"fichier.csv",preview:"https://via.placeholder.com/150Cx50",size:100}}],Y={name:"File with values",render:({onChange:e,...r})=>c.jsxs(c.Fragment,{children:[c.jsx(ue,{onChange:e,...r}),c.jsx(Ae,{message:"Enter the place name, ex : Webcenter"}),c.jsx(Pe,{errors:[],values:Ar,onClick:()=>{},classModifier:""})]})},J={name:"File with errors",render:({onChange:e,...r})=>c.jsxs(c.Fragment,{children:[c.jsx(ue,{onChange:e,...r}),c.jsx(Ae,{message:"Enter the place name, ex : Webcenter"}),c.jsx(Pe,{errors:Kn,values:Ar,onClick:()=>{},classModifier:""})]})};var sr,lr,cr;U.parameters={...U.parameters,docs:{...(sr=U.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  name: "FileInput",
  render: ({
    onChange,
    ...args
  }) => <FileInput onChange={onChange} {...args} />,
  args: {
    required: true,
    label: "Image",
    fileLabel: "Browse",
    name: "placeImage",
    id: "inputuniqueid",
    accept: "image/jpeg, image/png, application/*",
    helpMessage: "Take a photo af a place",
    messageType: MessageTypes.error,
    multiple: true,
    isVisible: true,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10"
  }
}`,...(cr=(lr=U.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var ur,pr,fr;G.parameters={...G.parameters,docs:{...(ur=G.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  name: "File",
  render: ({
    onChange,
    ...args
  }) => <File onChange={onChange} {...args} />,
  args: {
    label: "Image",
    name: "placeImage",
    id: "inputuniqueid",
    accept: "image/jpeg, image/png, application/*",
    multiple: true,
    isVisible: true,
    icon: "open"
  }
}`,...(fr=(pr=G.parameters)==null?void 0:pr.docs)==null?void 0:fr.source}}};var dr,mr,gr;Y.parameters={...Y.parameters,docs:{...(dr=Y.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  name: "File with values",
  render: ({
    onChange,
    ...args
  }) => <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable errors={[]} values={values} onClick={() => {}} classModifier="" />
    </>
}`,...(gr=(mr=Y.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var vr,yr,hr;J.parameters={...J.parameters,docs:{...(vr=J.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  name: "File with errors",
  render: ({
    onChange,
    ...args
  }) => <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable errors={errors} values={values} onClick={() => {}} classModifier="" />
    </>
}`,...(hr=(yr=J.parameters)==null?void 0:yr.docs)==null?void 0:hr.source}}};const qn=["FileInputStory","FileStory","FileWithValuesStory","FileWithErrorsStory"],Jn=Object.freeze(Object.defineProperty({__proto__:null,FileInputStory:U,FileStory:G,FileWithErrorsStory:J,FileWithValuesStory:Y,__namedExportsOrder:qn,default:Wn},Symbol.toStringTag,{value:"Module"}));export{Jn as F,U as a,G as b,Y as c,J as d};
