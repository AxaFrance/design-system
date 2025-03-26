import"./ItemLabelApollo-CwhFgfjk.js";import{j as e}from "./jsx-runtime-D_zvdyIk.js";import{r as f}from "./index-DuZrfDUH.js";import{B as h}from "./ButtonCommon-CB8dsAXx.js";import{S as g}from "./Svg-BouIAPlZ.js";const L="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M453-280h60v-240h-60v240Zm26.98-314q14.02%200%2023.52-9.2T513-626q0-14.45-9.48-24.22-9.48-9.78-23.5-9.78t-23.52%209.78Q447-640.45%20447-626q0%2013.6%209.48%2022.8%209.48%209.2%2023.5%209.2Zm.29%20514q-82.74%200-155.5-31.5Q252-143%20197.5-197.5t-86-127.34Q80-397.68%2080-480.5t31.5-155.66Q143-709%20197.5-763t127.34-85.5Q397.68-880%20480.5-880t155.66%2031.5Q709-817%20763-763t85.5%20127Q880-563%20880-480.27q0%2082.74-31.5%20155.5Q817-252%20763-197.68q-54%2054.31-127%2086Q563-80%20480.27-80Zm.23-60Q622-140%20721-239.5t99-241Q820-622%20721.19-721T480-820q-141%200-240.5%2098.81T140-480q0%20141%2099.5%20240.5t241%2099.5Zm-.5-340Z'/%3e%3c/svg%3e",j=({label:a,description:n,required:m,inputId:u,idLabel:b,sideButtonLabel:o,onSideButtonClick:p,buttonLabel:i,onButtonClick:x,ButtonComponent:s})=>{const r=f.useId();return e.jsxs("div",{className:"af-item-label",children:[e.jsxs("label",{htmlFor:u,id:b,"aria-describedby":n?r:void 0,children:[a," ",m&&e.jsx("span",{"aria-hidden":"true",children:" *"})]}),o&&e.jsx(s,{variant:"ghost",onClick:p,className:"af-item-label__sidebutton",children:o}),n&&e.jsx("span",{id:r,className:"af-item-label__description",children:n}),i&&e.jsx(s,{className:"af-item-label__more",variant:"ghost",iconLeft:e.jsx(g,{src:L,"aria-hidden":"true"}),onClick:x,children:i})]})},v=a=>e.jsx(j,{...a,ButtonComponent:h}),_={title:"Components/Form/ItemLabel",component:v,argTypes:{onSideButtonClick:{action:"clicked on side button"},onButtonClick:{action:"clicked on button"},required:{control:"boolean"}}},t={args:{label:"Label Text",description:"Description Text",required:!1,inputId:"input-id",idLabel:"label-id",sideButtonLabel:"Side Button",buttonLabel:"ButtonLabel"}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Label Text",
    description: "Description Text",
    required: false,
    inputId: "input-id",
    idLabel: "label-id",
    sideButtonLabel: "Side Button",
    buttonLabel: "ButtonLabel"
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const q=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:q,default:_},Symbol.toStringTag,{value:"Module"}));export{t as D,k as I};
