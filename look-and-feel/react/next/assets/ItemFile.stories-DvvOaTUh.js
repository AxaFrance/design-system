import{g as N,F as y,G as F,d as G,x as w,I as O,j as k,p as m}from"./FooterLF-iLynpOeG.js";import{v as E}from"./constants-CV-fF2s4.js";import{j as e}from"./index-C1mcBe1y.js";import"./index-DbaA8R3S.js";const z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M261-120q-24%200-42-18t-18-42v-570h-41v-60h188v-30h264v30h188v60h-41v570q0%2024-18%2042t-42%2018H261Zm106-146h60v-399h-60v399Zm166%200h60v-399h-60v399Z'/%3e%3c/svg%3e",D=({state:s,ItemIconComponent:t,ItemSpinnerComponent:a})=>{const o=N("af-icon",`af-icon__${s}`);return s==="loading"?e.jsx(a,{size:24,className:"af-item-file__spinner"}):e.jsx(t,{className:o,size:"S",src:s==="success"?y:F})},Z={success:"success",error:"error",loading:"loading"},$=({className:s,state:t,title:a,subTitle:o,errorMessage:r,deleteIcon:l,visibilityIcon:h,success:x,ItemSpinnerComponent:b,ItemIconComponent:M,ItemMessageComponent:C,...S})=>{const T=G("af-item-file",r&&"af-item-file--error",s);return e.jsxs("section",{className:T,...S,children:[e.jsxs("div",{className:"af-item-file__body",children:[e.jsx(D,{state:t,ItemIconComponent:M,ItemSpinnerComponent:b}),e.jsx("p",{className:"af-item-file__title",children:a}),e.jsx("p",{className:"af-item-file__subtitle",children:o}),e.jsxs("div",{className:"af-item-file__actions",children:[t==="success"&&h,l]})]}),e.jsx(C,{message:r??x,messageType:r?"error":"success"})]})},q=({onDeleteClick:s,onVisibilityClick:t,ariaLabelVisibility:a,ariaLabelDelete:o,filename:r,...l})=>e.jsx($,{ItemMessageComponent:k,ItemIconComponent:O,ItemSpinnerComponent:w,deleteIcon:e.jsx(m,{src:z,onClick:s,"aria-label":o||`Suppression du fichier ${r}`}),visibilityIcon:e.jsx(m,{src:E,onClick:t,"aria-label":a||`Observer le fichier ${r}`}),...l}),L={title:"Components/Form/ItemFile",component:q,argTypes:{state:{options:Object.values(Z),control:{type:"select"}}}},n={args:{state:"success",title:"IMG_879687880.jpg",subTitle:"0.12 Mo"}},i={args:{state:"loading",title:"IMG_879687880.jpg",subTitle:"0.12 Mo"}},c={args:{state:"error",title:"IMG_879687880.jpg",subTitle:"0.12 Mo",errorMessage:"Titre du message"}};var p,g,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    state: "success",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo"
  }
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,I,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    state: "loading",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo"
  }
}`,...(f=(I=i.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var j,_,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    state: "error",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo",
    errorMessage: "Titre du message"
  }
}`,...(v=(_=c.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const B=["Default","Loading","Error"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Error:c,Loading:i,__namedExportsOrder:B,default:L},Symbol.toStringTag,{value:"Module"}));export{n as D,A as I};
