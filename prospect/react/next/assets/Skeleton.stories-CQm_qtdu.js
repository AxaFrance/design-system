import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{k as r}from"./iframe-BojXwg_C.js";import{t as i}from"./jsx-runtime-CXZ2plg1.js";import{m as a,t as o}from"./prospect-BkzNz-1t.js";var s=n({ColGap:()=>h,Default:()=>f,MaxCol:()=>m,Mixed:()=>p,RowGap:()=>g,__namedExportsOrder:()=>_,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v=t((()=>{o(),c=e(r(),1),l=i(),u={title:`Components/Skeleton`,component:a},d=({grid:e,...t})=>{let[n,r]=(0,c.useState)(`3`),[i,o]=(0,c.useState)(`12`),[s,u]=(0,c.useState)(e);return(0,c.useEffect)(()=>{let e=[];for(let t=1;t<=Number(n);t++)e=[...e,[Number(i)]];u(e)},[i,n]),(0,l.jsxs)(`div`,{className:`skeleton-demo`,children:[(0,l.jsxs)(`form`,{children:[(0,l.jsxs)(`label`,{htmlFor:`input-lines`,children:[`Lines : `,(0,l.jsx)(`strong`,{children:n})]}),(0,l.jsx)(`input`,{id:`input-lines`,type:`range`,min:`1`,max:`10`,value:n,onInput:e=>{let{value:t}=e.target;r(t)}}),(0,l.jsxs)(`label`,{htmlFor:`input-cols`,children:[`Cols : `,(0,l.jsx)(`strong`,{children:i})]}),(0,l.jsx)(`input`,{id:`input-cols`,type:`range`,min:`1`,max:`12`,value:i,onInput:e=>{let{value:t}=e.target;o(t)}})]}),(0,l.jsx)(a,{grid:s,...t})]})},f={args:{grid:[[12],[12],[12]],maxCols:12},render:d},p={args:{grid:[[12,10,2,8,4],[6,6],[12,12,12,6]]}},m={args:{grid:[[1,1,1,1,1,1,1,1],[2,2,2,2],[4,4],[8]],maxCols:8}},h={args:{grid:[[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3],[4,4,4],[6,6]],colGap:32}},g={args:{grid:[[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3],[4,4,4],[6,6]],rowGap:32}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    grid: [[12], [12], [12]],
    maxCols: 12
  },
  render: Render
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    grid: [[12, 10, 2, 8, 4], [6, 6], [12, 12, 12, 6]]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    grid: [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2], [4, 4], [8]],
    maxCols: 8
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    grid: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4], [6, 6]],
    colGap: 32
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    grid: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4], [6, 6]],
    rowGap: 32
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Mixed`,`MaxCol`,`ColGap`,`RowGap`]}));v();export{h as ColGap,f as Default,m as MaxCol,p as Mixed,g as RowGap,_ as __namedExportsOrder,u as default,v as n,s as t};