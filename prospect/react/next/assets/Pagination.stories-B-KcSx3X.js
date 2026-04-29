import{j as d}from"./jsx-runtime-D_zvdyIk.js";import"./LoaderApollo-D0xkpJcZ.js";/* empty css               */import{r as p}from"./index-CtOEgLBf.js";import{P as n}from"./PaginationApollo-BVe6oK-Y.js";const l={component:n,title:"Components/Pagination",parameters:{layout:"centered"}},f=({numberPages:o,currentPage:s,asItem:i,hidePrevNext:m})=>{const[c,g]=p.useState(s||1),u=P=>{g(P)};return d.jsx(n,{numberPages:o,onChangePage:u,currentPage:c,asItem:i,hidePrevNext:m})},e={render:f,args:{numberPages:20,currentPage:1,asItem:"a",hidePrevNext:!1}};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: renderPagination,
  args: {
    numberPages: 20,
    currentPage: 1,
    asItem: "a",
    hidePrevNext: false
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const x=["Playground"],S=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:x,default:l},Symbol.toStringTag,{value:"Module"}));export{S as P,e as a};
