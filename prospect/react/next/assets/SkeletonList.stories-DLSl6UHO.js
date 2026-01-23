import"./FieldsetApollo-Dfj4LJqj.js";import{j as e}from"./index-C-iqcyhV.js";import{r as c}from"./index-ZnYipkzV.js";import{S as v}from"./SkeletonCommon-Dze83AcP.js";import{L as l}from"./ListApollo-D2ug1y4K.js";import{C as S}from"./ContentItemMonoApollo-BK0kqm6y.js";import{C as s}from"./ContentItemDuoApollo-BhOlBhEM.js";const k=({children:t,isLoading:o,lists:i=[],className:r,ListComponent:n,SkeletonComponent:m})=>o?i.map(({lines:j=1,grid:f},b)=>e.jsx(n,{className:r,children:[...Array(j).keys()].map((z,L)=>e.jsx(m,{grid:f},L))},b)):t,g=t=>e.jsx(k,{...t,SkeletonComponent:v,ListComponent:l}),x=({lists:t,...o})=>{const[i,r]=c.useState(!0);return c.useEffect(()=>{const n=setInterval(()=>{r(m=>!m)},5e3);return()=>clearInterval(n)},[i]),e.jsx("section",{className:"skeleton-list-page",children:e.jsxs(g,{...o,lists:t,isLoading:i,children:[e.jsxs(l,{children:[e.jsx(s,{label:"Nom",value:"Doe",size:"large"}),e.jsx(s,{label:"Prénom",value:"John",size:"large"}),e.jsx(s,{label:"Adresse",value:"4 allée du Châteaux blanc",size:"large"}),e.jsx(s,{label:"Ville",value:"Wasquehal",size:"large"}),e.jsx(s,{label:"Code postal",value:"59290",size:"large"}),e.jsx(s,{label:"Pays",value:"France",size:"large"}),e.jsx(s,{label:"Date de naissance",value:"01/01/1970",size:"large"}),e.jsx(s,{label:"Poste",value:"Développeur",size:"large"}),e.jsx(s,{label:"Ancienneté",value:"10 ans",size:"large"})]}),e.jsxs(l,{children:[e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"}),e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"}),e.jsx(s,{label:"Infos complémentaires",value:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",classModifier:"large"})]}),e.jsx(l,{children:e.jsx(S,{title:"Commentaire",type:"stick",subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque aspernatur ullam officia deserunt temporibus sapiente nam reiciendis iste fugiat harum exercitationem placeat, explicabo aperiam ab nemo aliquam eaque ipsa!"})})]})})};x.__docgenInfo={description:"",methods:[],displayName:"SkeletonListPage"};const h={title:"Components/Skeleton/SkeletonList",component:g},a={args:{lists:[{grid:[[3,9]],lines:10},{grid:[[3,9]],lines:3},{grid:[[6],[12],[12],[12]]}],isLoading:!0},render:x};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  render: SkeletonListPage
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const C=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:C,default:h},Symbol.toStringTag,{value:"Module"}));export{a as D,E as S};
