import{j as e}from"./index-C1mcBe1y.js";import"./DropdownCommon-TfDYtUSj.js";import"./constants-BLCDrWDj.js";import{r as n}from"./index-DbaA8R3S.js";import{S as c}from"./Skeleton-Wnqpw9_J.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const S={title:"Components/Skeleton",component:c},l=p=>{const[t,i]=n.useState(!0);return n.useEffect(()=>{const d=setInterval(()=>{i(m=>!m)},5e3);return()=>clearInterval(d)},[t]),e.jsx("div",{className:"skeleton-wrapper-demo",children:e.jsx(c,{...p,isLoading:t,children:e.jsxs("div",{className:"skeleton-wrapper-content",children:[e.jsx("p",{children:"Ceci est mon contenu à charger"}),e.jsx("p",{children:"Ceci est mon contenu à charger"}),e.jsx("p",{children:"mon contenu"})]})})})},r={args:{grid:[[8],[8],[5]]},render:l};var o,s,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    grid: [[8], [8], [5]]
  },
  render: RenderWrapper
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const k=["WrapperMode"];export{r as WrapperMode,k as __namedExportsOrder,S as default};
