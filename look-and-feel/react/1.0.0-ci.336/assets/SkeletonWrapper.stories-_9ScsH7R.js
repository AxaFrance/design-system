import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as t}from"./index-uubelm5h.js";import{S as c}from"./Skeleton-_BHz5ywW.js";/* empty css                      */const j={title:"Components/Skeleton",component:c},l=p=>{const[n,d]=t.useState(!0);return t.useEffect(()=>{const i=setInterval(()=>{d(m=>!m)},5e3);return()=>clearInterval(i)},[n]),e.jsx("div",{className:"skeleton-wrapper-demo",children:e.jsx(c,{...p,isLoading:n,children:e.jsxs("div",{className:"skeleton-wrapper-content",children:[e.jsx("p",{children:"Ceci est mon contenu à charger"}),e.jsx("p",{children:"Ceci est mon contenu à charger"}),e.jsx("p",{children:"mon contenu"})]})})})},r={args:{grid:[[8],[8],[5]]},render:l};var s,o,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    grid: [[8], [8], [5]]
  },
  render: RenderWrapper
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const f=["WrapperMode"];export{r as WrapperMode,f as __namedExportsOrder,j as default};
