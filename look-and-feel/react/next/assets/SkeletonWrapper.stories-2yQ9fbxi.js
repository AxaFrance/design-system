import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./DropdownCommon-DE7SQs8a.js";import"./constants-CYR1qehH.js";import{r as t}from"./index-DuZrfDUH.js";import{S as c}from"./Skeleton-ClHkwexb.js";import"./_commonjsHelpers-CqkleIqs.js";const v={title:"Components/Skeleton",component:c},l=p=>{const[n,i]=t.useState(!0);return t.useEffect(()=>{const d=setInterval(()=>{i(m=>!m)},5e3);return()=>clearInterval(d)},[n]),e.jsx("div",{className:"skeleton-wrapper-demo",children:e.jsx(c,{...p,isLoading:n,children:e.jsxs("div",{className:"skeleton-wrapper-content",children:[e.jsx("p",{children:"Ceci est mon contenu à charger"}),e.jsx("p",{children:"Ceci est mon contenu à charger"}),e.jsx("p",{children:"mon contenu"})]})})})},r={args:{grid:[[8],[8],[5]]},render:l};var s,o,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    grid: [[8], [8], [5]]
  },
  render: RenderWrapper
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const S=["WrapperMode"];export{r as WrapperMode,S as __namedExportsOrder,v as default};
