import{j as p}from"./jsx-runtime-D_zvdyIk.js";import"./LoaderLF-DYChe2bf.js";/* empty css               */import"./LoaderCommon-BvsKcm5d.js";import{r as d}from"./index-CtOEgLBf.js";import{P as n}from"./PaginationLF-B2eivDy9.js";const l={component:n,title:"Components/Pagination",parameters:{layout:"centered"}},f=({numberPages:o,currentPage:s,asItem:i,hidePrevNext:m})=>{const[c,g]=d.useState(s||1),u=P=>{g(P)};return p.jsx(n,{numberPages:o,onChangePage:u,currentPage:c,asItem:i,hidePrevNext:m})},e={render:f,args:{numberPages:20,currentPage:1,asItem:"a",hidePrevNext:!1}};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: renderPagination,
  args: {
    numberPages: 20,
    currentPage: 1,
    asItem: "a",
    hidePrevNext: false
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const x=["Playground"],C=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:x,default:l},Symbol.toStringTag,{value:"Module"}));export{C as P,e as a};
