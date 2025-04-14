import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./MessageLF-DdJybLL5.js";import"./constants-BP85GAnv.js";import{r as c}from"./index-DuZrfDUH.js";import{L as i}from"./List-BqH0EKaS.js";import{C as s}from"./ContentItemDuo-qJRCEoNc.js";import{C as g}from"./ContentItemMono-DXrwfW8j.js";import{S as x}from"./Skeleton-2DBysJJ2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Card-C_kBG7ab.js";const f=({children:l,isLoading:o,lists:a=[],classModifierList:t})=>o?a.map(({lines:n=1,grid:d})=>e.jsx(i,{classModifier:t,children:[...Array(n).keys()].map(()=>e.jsx(x,{grid:d},crypto.randomUUID()))},crypto.randomUUID())):l,S={title:"Components/SkeletonList",component:f},j=({lists:l,...o})=>{const[a,t]=c.useState(!0);return c.useEffect(()=>{const n=setInterval(()=>{t(d=>!d)},5e3);return()=>clearInterval(n)},[a]),e.jsxs(f,{...o,lists:l,classModifierList:"skeleton-list-demo",isLoading:a,children:[e.jsxs(i,{classModifier:"extra-padding skeleton-list-demo",children:[e.jsx(s,{label:"Nom",value:"Doe",classModifier:"large"}),e.jsx(s,{label:"Prénom",value:"John",classModifier:"large"}),e.jsx(s,{label:"Adresse",value:"4 allée du Châteaux blanc",classModifier:"large"}),e.jsx(s,{label:"Ville",value:"Wasquehal",classModifier:"large"}),e.jsx(s,{label:"Code postal",value:"59290",classModifier:"large"}),e.jsx(s,{label:"Pays",value:"France",classModifier:"large"}),e.jsx(s,{label:"Date de naissance",value:"01/01/1970",classModifier:"large"}),e.jsx(s,{label:"Poste",value:"Développeur",classModifier:"large"}),e.jsx(s,{label:"Ancienneté",value:"10 ans",classModifier:"large"})]}),e.jsxs(i,{classModifier:"extra-padding skeleton-list-demo",children:[e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"}),e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"}),e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"})]}),e.jsx(i,{classModifier:"extra-padding",children:e.jsx(g,{secondaryText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque aspernatur ullam officia deserunt temporibus sapiente nam reiciendis iste fugiat harum exercitationem placeat, explicabo aperiam ab nemo aliquam eaque ipsa!",children:"Commentaire"})})]})},r={args:{lists:[{grid:[[3,9]],lines:10},{grid:[[3,9]],lines:3},{grid:[[6],[12],[12],[12]]}],isLoading:!0},render:j};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const q=["Default"];export{r as Default,q as __namedExportsOrder,S as default};
