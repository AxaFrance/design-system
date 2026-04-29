import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./LoaderApollo-BOCy7keK.js";/* empty css               */import{r as n}from"./index-CtOEgLBf.js";import{S as p}from"./SkeletonCommon-DJUXOOYL.js";import"./index-BjCk13Vd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xQ9y_n2y.js";const k={title:"Components/Skeleton",component:p},l=c=>{const[t,i]=n.useState(!0);return n.useEffect(()=>{const m=setInterval(()=>{i(d=>!d)},5e3);return()=>clearInterval(m)},[t]),e.jsx("div",{className:"skeleton-wrapper-demo",children:e.jsx(p,{...c,isLoading:t,children:e.jsxs("div",{className:"skeleton-wrapper-content",children:[e.jsx("p",{children:"Ceci est mon contenu à charger"}),e.jsx("p",{children:"Ceci est mon contenu à charger"}),e.jsx("p",{children:"mon contenu"})]})})})},r={args:{grid:[[8],[8],[5]]},render:l};var o,s,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    grid: [[8], [8], [5]]
  },
  render: RenderWrapper
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const E=["WrapperMode"];export{r as WrapperMode,E as __namedExportsOrder,k as default};
