import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{ct as n,lt as r,mt as i,o as a,t as o}from"./prospect-BkzNz-1t.js";import{n as s,t as c}from"./LayoutDemo-O1gxauVD.js";var l,u,d,f,p;e((()=>{o(),r(),s(),l=t(),u={title:`Layouts/Exit Layout`,parameters:{layout:`fullscreen`},argTypes:{showAgent:{control:`boolean`},actions:{control:`number`,min:1},content:{control:`number`,min:1}}},d=({headingProps:e,showAgent:t,iconProps:n,actions:r=1,content:o=4,heightAgent:s=400})=>(0,l.jsx)(c,{title:`Form Layout Title`,children:(0,l.jsxs)(a,{headingProps:e,iconProps:n,children:[(0,l.jsx)(a.Content,{children:Array.from({length:o},(e,t)=>(0,l.jsx)(i,{children:`Slot CONTENT`},t))}),(0,l.jsx)(a.Agent,{children:t?(0,l.jsx)(i,{style:{height:s},children:`AGENT`}):null}),(0,l.jsx)(a.Action,{children:Array.from({length:r},(e,t)=>(0,l.jsx)(i,{children:`Slot ACTION`},t))})]})}),f={name:`ExitLayout`,render:d,args:{headingProps:{title:`Title`,firstSubtitle:`firstSubtitle`},showAgent:!0,iconProps:{src:n,hasBackground:!0,variant:`success`}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "ExitLayout",
  render: Demo,
  args: {
    headingProps: {
      title: "Title",
      firstSubtitle: "firstSubtitle"
    },
    showAgent: true,
    iconProps: {
      src: check,
      hasBackground: true,
      variant: "success"
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`ExitLayoutStory`]}))();export{f as ExitLayoutStory,p as __namedExportsOrder,u as default};