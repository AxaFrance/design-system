import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./MessageLF-DdJybLL5.js";import{S as c,q as x}from"./constants-BP85GAnv.js";import{r as g}from"./index-DuZrfDUH.js";import{u as f}from"./useIsSmallScreen-B3lIGOTq.js";const b=7,j=4,d=5,w=({numberPage:t,currentPage:e,setCurrentPage:o})=>{const n=Array.from({length:t},(i,h)=>h+1);let s=[...n],r="";return t>b&&(e<d?(r="first",s=[...n.slice(0,d),n[n.length-1]]):e>t-j?(r="last",s=[n[0],...n.slice(-5)]):(r="between",s=[n[0],e-1,e,e+1,n[n.length-1]])),a.jsx("div",{className:"af-pagination-desktop",children:a.jsx("ul",{className:r,children:s.map(i=>a.jsx("li",{"aria-label":`page-${i}`,"aria-current":e===i?"page":void 0,children:a.jsx("button",{type:"button",onClick:()=>o(i),children:i})},`page-${i}`))})})},v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M400-80%200-480l400-400%2056%2057-343%20343%20343%20343-56%2057Z'/%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='m304-82-56-57%20343-343-343-343%2056-57%20400%20400L304-82Z'/%3e%3c/svg%3e",S=({numberPage:t,currentPage:e,setCurrentPage:o})=>{const n=e===1,s=e===t;return a.jsxs("div",{className:"af-pagination-mobile",children:[a.jsx("button",{type:"button",onClick:()=>o(e-1),disabled:n,"aria-label":"Page précédente",children:a.jsx(c,{src:v,className:"arrow"})}),a.jsxs("span",{children:[e," sur ",t]}),a.jsx("button",{type:"button",onClick:()=>o(e+1),disabled:s,"aria-label":"Page suivant",children:a.jsx(c,{src:E,className:"arrow"})})]})},P=({numberPage:t,onChangePage:e,defaultPage:o})=>{const n=f(x.MD),[s,r]=g.useState(o||1);return g.useEffect(()=>{e(s)},[s,e]),a.jsx("div",{className:"af-container-pagination",children:n?a.jsx(S,{numberPage:t,currentPage:s,setCurrentPage:r}):a.jsx(w,{numberPage:t,currentPage:s,setCurrentPage:r})})},_={component:P,title:"Components/Pagination",parameters:{layout:"centered"}},l={name:"Pagination",render:({numberPage:t,onChangePage:e,defaultPage:o})=>a.jsx(P,{numberPage:t,defaultPage:o,onChangePage:e}),args:{numberPage:20,defaultPage:2,onChangePage:()=>{}}};var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Pagination",
  render: ({
    numberPage,
    onChangePage,
    defaultPage
  }) => <Pagination numberPage={numberPage} defaultPage={defaultPage} onChangePage={onChangePage} />,
  args: {
    numberPage: 20,
    defaultPage: 2,
    onChangePage: () => {}
  }
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const C=["Playground"],M=Object.freeze(Object.defineProperty({__proto__:null,Playground:l,__namedExportsOrder:C,default:_},Symbol.toStringTag,{value:"Module"}));export{M as P,l as a};
