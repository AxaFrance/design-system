import{g as S,F as q,G as N,o as y,u as Z,I as F,h as G,m}from"./DropdownCommon-D3g49XyO.js";import{j as e}from"./index-C1mcBe1y.js";import"./index-DbaA8R3S.js";const O="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M261-120q-24.75%200-42.37-17.63Q201-155.25%20201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0%2024-18%2042t-42%2018H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166%200h60v-399h-60v399ZM261-750v570-570Z'/%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480.12-330q70.88%200%20120.38-49.62t49.5-120.5q0-70.88-49.62-120.38T479.88-670Q409-670%20359.5-620.38T310-499.88q0%2070.88%2049.62%20120.38t120.5%2049.5Zm-.36-58q-46.76%200-79.26-32.74-32.5-32.73-32.5-79.5%200-46.76%2032.74-79.26%2032.73-32.5%2079.5-32.5%2046.76%200%2079.26%2032.74%2032.5%2032.73%2032.5%2079.5%200%2046.76-32.74%2079.26-32.73%2032.5-79.5%2032.5Zm.24%20188q-146%200-264-83T40-500q58-134%20176-217t264-83q146%200%20264%2083t176%20217q-58%20134-176%20217t-264%2083Z'/%3e%3c/svg%3e",k=({state:s,ItemIconComponent:t,ItemSpinnerComponent:a})=>{const r=S("af-icon",`af-icon__${s}`);return s==="loading"?e.jsx(a,{size:24,className:"af-item-file__spinner"}):e.jsx(t,{className:r,size:"S",src:s==="success"?q:N})},z={success:"success",error:"error",loading:"loading"},D=({className:s,state:t,title:a,subTitle:r,errorMessage:o,deleteIcon:l,visibilityIcon:j,success:x,ItemSpinnerComponent:M,ItemIconComponent:b,ItemMessageComponent:T,...C})=>{const w=y("af-item-file",o&&"af-item-file--error",s);return e.jsxs("section",{className:w,...C,children:[e.jsxs("div",{className:"af-item-file__body",children:[e.jsx(k,{state:t,ItemIconComponent:b,ItemSpinnerComponent:M}),e.jsx("p",{className:"af-item-file__title",children:a}),e.jsx("p",{className:"af-item-file__subtitle",children:r}),e.jsxs("div",{className:"af-item-file__actions",children:[t==="success"&&j,l]})]}),e.jsx(T,{message:o??x,messageType:o?"error":"success"})]})},$=({onDeleteClick:s,onVisibilityClick:t,ariaLabelVisibility:a,ariaLabelDelete:r,filename:o,...l})=>e.jsx(D,{ItemMessageComponent:G,ItemIconComponent:F,ItemSpinnerComponent:Z,deleteIcon:e.jsx(m,{src:O,onClick:s,"aria-label":r||`Suppression du fichier ${o}`}),visibilityIcon:e.jsx(m,{src:E,onClick:t,"aria-label":a||`Observer le fichier ${o}`}),...l}),B={title:"Components/Form/ItemFile",component:$,argTypes:{state:{options:Object.values(z),control:{type:"select"}}}},n={args:{state:"success",title:"IMG_879687880.jpg",subTitle:"0.12 Mo"}},i={args:{state:"loading",title:"IMG_879687880.jpg",subTitle:"0.12 Mo"}},c={args:{state:"error",title:"IMG_879687880.jpg",subTitle:"0.12 Mo",errorMessage:"Titre du message"}};var p,g,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    state: "success",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo"
  }
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,v,I;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    state: "loading",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo"
  }
}`,...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var h,f,_;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    state: "error",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo",
    errorMessage: "Titre du message"
  }
}`,...(_=(f=c.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const H=["Default","Loading","Error"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Error:c,Loading:i,__namedExportsOrder:H,default:B},Symbol.toStringTag,{value:"Module"}));export{n as D,R as I};
