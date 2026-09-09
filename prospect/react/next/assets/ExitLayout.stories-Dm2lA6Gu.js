import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{At as n,M as r,Tt as i,t as a,wt as o}from"./prospect-DGL8wJif.js";import{n as s,t as c}from"./LayoutDemo-B9GTHQX6.js";var l,u,d,f,p;e((()=>{a(),i(),s(),l=t(),u={title:`Layouts/Exit Layout`,parameters:{layout:`fullscreen`},argTypes:{showAgent:{control:`boolean`},actions:{control:`number`,min:1},content:{control:`number`,min:1}}},d=({headingProps:e,showAgent:t,iconProps:i,actions:a=1,content:o=4,heightAgent:s=400})=>(0,l.jsx)(c,{title:`Form Layout Title`,children:(0,l.jsxs)(r,{headingProps:e,iconProps:i,children:[(0,l.jsx)(r.Content,{children:Array.from({length:o},(e,t)=>(0,l.jsx)(n,{children:`Slot CONTENT`},t))}),(0,l.jsx)(r.Agent,{children:t?(0,l.jsx)(n,{style:{height:s},children:`AGENT`}):null}),(0,l.jsx)(r.Action,{children:Array.from({length:a},(e,t)=>(0,l.jsx)(n,{children:`Slot ACTION`},t))})]})}),f={name:`ExitLayout`,render:d,args:{headingProps:{title:`Title`,firstSubtitle:`firstSubtitle`},showAgent:!0,iconProps:{src:o,hasBackground:!0,variant:`success`}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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