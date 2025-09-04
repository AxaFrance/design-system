import{j as e}from"./index-C1mcBe1y.js";import"./ToggleCommon-Bd6Twcqw.js";import"./constants-B4wGOyiU.js";import{r as c}from"./index-DbaA8R3S.js";import{C as g}from"./ContentItemMonoLF-a5H3GY-h.js";import{C as s}from"./ContentItemDuoLF-BolT7nTZ.js";import{L as r}from"./List-BhrKgHmm.js";import{S as x}from"./Skeleton-z7fGkJgK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./Card-DXoKYAJb.js";const f=({children:l,isLoading:t,lists:a=[],classModifierList:o})=>t?a.map(({lines:n=1,grid:d})=>e.jsx(r,{classModifier:o,children:[...Array(n).keys()].map(()=>e.jsx(x,{grid:d},crypto.randomUUID()))},crypto.randomUUID())):l,q={title:"Components/SkeletonList",component:f},j=({lists:l,...t})=>{const[a,o]=c.useState(!0);return c.useEffect(()=>{const n=setInterval(()=>{o(d=>!d)},5e3);return()=>clearInterval(n)},[a]),e.jsxs(f,{...t,lists:l,classModifierList:"skeleton-list-demo",isLoading:a,children:[e.jsxs(r,{classModifier:"extra-padding skeleton-list-demo",children:[e.jsx(s,{label:"Nom",value:"Doe",classModifier:"large"}),e.jsx(s,{label:"Prénom",value:"John",classModifier:"large"}),e.jsx(s,{label:"Adresse",value:"4 allée du Châteaux blanc",classModifier:"large"}),e.jsx(s,{label:"Ville",value:"Wasquehal",classModifier:"large"}),e.jsx(s,{label:"Code postal",value:"59290",classModifier:"large"}),e.jsx(s,{label:"Pays",value:"France",classModifier:"large"}),e.jsx(s,{label:"Date de naissance",value:"01/01/1970",classModifier:"large"}),e.jsx(s,{label:"Poste",value:"Développeur",classModifier:"large"}),e.jsx(s,{label:"Ancienneté",value:"10 ans",classModifier:"large"})]}),e.jsxs(r,{classModifier:"extra-padding skeleton-list-demo",children:[e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"}),e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"}),e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"})]}),e.jsx(r,{classModifier:"extra-padding",children:e.jsx(g,{title:"Commentaire",type:"stick",subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque aspernatur ullam officia deserunt temporibus sapiente nam reiciendis iste fugiat harum exercitationem placeat, explicabo aperiam ab nemo aliquam eaque ipsa!"})})]})},i={args:{lists:[{grid:[[3,9]],lines:10},{grid:[[3,9]],lines:3},{grid:[[6],[12],[12],[12]]}],isLoading:!0},render:j};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const E=["Default"];export{i as Default,E as __namedExportsOrder,q as default};
