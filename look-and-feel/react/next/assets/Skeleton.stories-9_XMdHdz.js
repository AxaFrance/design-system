import{j as e}from"./index-C-iqcyhV.js";import"./Skeleton-CojCj7Cx.js";import"./ProgressBarCommon-9RdXjFip.js";import"./TimelineVerticalLF-BxTEzNOM.js";import{r as p}from"./index-ZnYipkzV.js";import{S as _}from"./Skeleton-Crs-Klwz.js";const F={title:"Components/Skeleton",component:_},I=({grid:w,...k})=>{const[i,y]=p.useState("3"),[l,E]=p.useState("12"),[L,D]=p.useState(w),N=r=>{const{value:s}=r.target;y(s)},O=r=>{const{value:s}=r.target;E(s)};return p.useEffect(()=>{let r=[];for(let s=1;s<=Number(i);s++)r=[...r,[Number(l)]];D(r)},[l,i]),e.jsxs("div",{className:"skeleton-demo",children:[e.jsxs("form",{children:[e.jsxs("label",{htmlFor:"input-lines",children:["Lines : ",e.jsx("strong",{children:i})]}),e.jsx("input",{id:"input-lines",type:"range",min:"1",max:"10",value:i,onInput:N}),e.jsxs("label",{htmlFor:"input-cols",children:["Cols : ",e.jsx("strong",{children:l})]}),e.jsx("input",{id:"input-cols",type:"range",min:"1",max:"12",value:l,onInput:O})]}),e.jsx(_,{grid:L,...k})]})},o={args:{grid:[[12],[12],[12]],maxCols:12},render:I},a={args:{grid:[[12,10,2,8,4],[6,6],[12,12,12,6]]}},t={args:{grid:[[1,1,1,1,1,1,1,1],[2,2,2,2],[4,4],[8]],maxCols:8}},n={args:{grid:[[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3],[4,4,4],[6,6]],colGap:32}},c={args:{grid:[[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3],[4,4,4],[6,6]],rowGap:32}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    grid: [[12], [12], [12]],
    maxCols: 12
  },
  render: Render
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,x,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    grid: [[12, 10, 2, 8, 4], [6, 6], [12, 12, 12, 6]]
  }
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var C,j,f;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    grid: [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2], [4, 4], [8]],
    maxCols: 8
  }
}`,...(f=(j=t.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var h,G,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    grid: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4], [6, 6]],
    colGap: 32
  }
}`,...(b=(G=n.parameters)==null?void 0:G.docs)==null?void 0:b.source}}};var v,M,R;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    grid: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4], [6, 6]],
    rowGap: 32
  }
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const z=["Default","Mixed","MaxCol","ColGap","RowGap"],J=Object.freeze(Object.defineProperty({__proto__:null,ColGap:n,Default:o,MaxCol:t,Mixed:a,RowGap:c,__namedExportsOrder:z,default:F},Symbol.toStringTag,{value:"Module"}));export{n as C,o as D,a as M,c as R,J as S,t as a};
