import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{E as r}from"./LoaderLF-BShaQacd.js";/* empty css               */import{m as x}from"./LoaderCommon-BK1f5602.js";import"./index-CtOEgLBf.js";import{C as n}from"./CardCommon-Cpygv4vE.js";import{L as y}from"./LayoutDemo-os-7l9vr.js";import"./index-BjCk13Vd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xQ9y_n2y.js";import"./DebugGridLF-fNft2QJm.js";import"./FooterCommon-Br0EJX8e.js";import"./LinkCommon-DNqnbIft.js";const w={title:"Layouts/Exit Layout",parameters:{layout:"fullscreen"},argTypes:{showAgent:{control:"boolean"},actions:{control:"number",min:1},content:{control:"number",min:1}}},g=({headingProps:m,showAgent:c,iconProps:l,actions:u=1,content:p=4,heightAgent:d=400})=>t.jsx(y,{title:"Form Layout Title",children:t.jsxs(r,{headingProps:m,iconProps:l,children:[t.jsx(r.Content,{children:Array.from({length:p},(h,e)=>t.jsx(n,{children:"Slot CONTENT"},e))}),t.jsx(r.Agent,{children:c?t.jsx(n,{style:{height:d},children:"AGENT"}):null}),t.jsx(r.Action,{children:Array.from({length:u},(h,e)=>t.jsx(n,{children:"Slot ACTION"},e))})]})}),o={name:"ExitLayout",render:g,args:{headingProps:{title:"Title",firstSubtitle:"firstSubtitle"},showAgent:!0,iconProps:{src:x,hasBackground:!0,variant:"success"}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const D=["ExitLayoutStory"];export{o as ExitLayoutStory,D as __namedExportsOrder,w as default};
