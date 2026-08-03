import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{M as n,bt as r,ht as i,mt as a,t as o}from"./prospect-Dl5gilUL.js";import{n as s,t as c}from"./LayoutDemo-CRa0E9Ar.js";var l,u,d,f,p;e((()=>{o(),i(),s(),l=t(),u={title:`Layouts/Exit Layout`,parameters:{layout:`fullscreen`},argTypes:{showAgent:{control:`boolean`},actions:{control:`number`,min:1},content:{control:`number`,min:1}}},d=({headingProps:e,showAgent:t,iconProps:i,actions:a=1,content:o=4,heightAgent:s=400})=>(0,l.jsx)(c,{title:`Form Layout Title`,children:(0,l.jsxs)(n,{headingProps:e,iconProps:i,children:[(0,l.jsx)(n.Content,{children:Array.from({length:o},(e,t)=>(0,l.jsx)(r,{children:`Slot CONTENT`},t))}),(0,l.jsx)(n.Agent,{children:t?(0,l.jsx)(r,{style:{height:s},children:`AGENT`}):null}),(0,l.jsx)(n.Action,{children:Array.from({length:a},(e,t)=>(0,l.jsx)(r,{children:`Slot ACTION`},t))})]})}),f={name:`ExitLayout`,render:d,args:{headingProps:{title:`Title`,firstSubtitle:`firstSubtitle`},showAgent:!0,iconProps:{src:a,hasBackground:!0,variant:`success`}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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