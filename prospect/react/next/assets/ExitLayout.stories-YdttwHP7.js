import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{M as n,mt as r,pt as i,t as a,yt as o}from"./prospect-BPgu04TS.js";import{n as s,t as c}from"./LayoutDemo-Ds6vrU7g.js";var l,u,d,f,p;e((()=>{a(),r(),s(),l=t(),u={title:`Layouts/Exit Layout`,parameters:{layout:`fullscreen`},argTypes:{showAgent:{control:`boolean`},actions:{control:`number`,min:1},content:{control:`number`,min:1}}},d=({headingProps:e,showAgent:t,iconProps:r,actions:i=1,content:a=4,heightAgent:s=400})=>(0,l.jsx)(c,{title:`Form Layout Title`,children:(0,l.jsxs)(n,{headingProps:e,iconProps:r,children:[(0,l.jsx)(n.Content,{children:Array.from({length:a},(e,t)=>(0,l.jsx)(o,{children:`Slot CONTENT`},t))}),(0,l.jsx)(n.Agent,{children:t?(0,l.jsx)(o,{style:{height:s},children:`AGENT`}):null}),(0,l.jsx)(n.Action,{children:Array.from({length:i},(e,t)=>(0,l.jsx)(o,{children:`Slot ACTION`},t))})]})}),f={name:`ExitLayout`,render:d,args:{headingProps:{title:`Title`,firstSubtitle:`firstSubtitle`},showAgent:!0,iconProps:{src:i,hasBackground:!0,variant:`success`}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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