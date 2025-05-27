import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./ToggleCommon-em_8mnX9.js";import"./constants-Bpx9Jtx0.js";import{r as c}from"./index-DuZrfDUH.js";import{C as g}from"./ContentItemMonoLF-B9nKVKHA.js";import{C as s}from"./ContentItemDuoLF-Cqp0Hc6p.js";import{L as i}from"./List-CNILiCdv.js";import{S as x}from"./Skeleton-IvVpZTym.js";import"./_commonjsHelpers-CqkleIqs.js";import"./BasePictureCommon-CRzmH7pi.js";import"./Card-CNpxkB3-.js";const f=({children:l,isLoading:o,lists:a=[],classModifierList:t})=>o?a.map(({lines:n=1,grid:d})=>e.jsx(i,{classModifier:t,children:[...Array(n).keys()].map(()=>e.jsx(x,{grid:d},crypto.randomUUID()))},crypto.randomUUID())):l,q={title:"Components/SkeletonList",component:f},j=({lists:l,...o})=>{const[a,t]=c.useState(!0);return c.useEffect(()=>{const n=setInterval(()=>{t(d=>!d)},5e3);return()=>clearInterval(n)},[a]),e.jsxs(f,{...o,lists:l,classModifierList:"skeleton-list-demo",isLoading:a,children:[e.jsxs(i,{classModifier:"extra-padding skeleton-list-demo",children:[e.jsx(s,{label:"Nom",value:"Doe",classModifier:"large"}),e.jsx(s,{label:"Prénom",value:"John",classModifier:"large"}),e.jsx(s,{label:"Adresse",value:"4 allée du Châteaux blanc",classModifier:"large"}),e.jsx(s,{label:"Ville",value:"Wasquehal",classModifier:"large"}),e.jsx(s,{label:"Code postal",value:"59290",classModifier:"large"}),e.jsx(s,{label:"Pays",value:"France",classModifier:"large"}),e.jsx(s,{label:"Date de naissance",value:"01/01/1970",classModifier:"large"}),e.jsx(s,{label:"Poste",value:"Développeur",classModifier:"large"}),e.jsx(s,{label:"Ancienneté",value:"10 ans",classModifier:"large"})]}),e.jsxs(i,{classModifier:"extra-padding skeleton-list-demo",children:[e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"}),e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"}),e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"})]}),e.jsx(i,{classModifier:"extra-padding",children:e.jsx(g,{secondaryText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque aspernatur ullam officia deserunt temporibus sapiente nam reiciendis iste fugiat harum exercitationem placeat, explicabo aperiam ab nemo aliquam eaque ipsa!",children:"Commentaire"})})]})},r={args:{lists:[{grid:[[3,9]],lines:10},{grid:[[3,9]],lines:3},{grid:[[6],[12],[12],[12]]}],isLoading:!0},render:j};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    lists: [{
      grid: [[3, 9]],
      lines: 10
    }, {
      grid: [[3, 9]],
      lines: 3
    }, {
      grid: [[6], [12], [12], [12]]
    }],
    isLoading: true
  },
  render: Render
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const E=["Default"];export{r as Default,E as __namedExportsOrder,q as default};
