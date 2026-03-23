import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{E as r}from"./LoaderLF-emSfIVr0.js";/* empty css               */import"./LoaderCommon-BmA7JIbz.js";import"./index-ZnYipkzV.js";import{C as n}from"./CardCommon-C6IDxeR3.js";import{c as x}from"./check-ByUiVwBv.js";import{L as y}from"./LayoutDemo-D6tdWoM0.js";import"./index-63p0MazF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./DebugGridLF-DiVSe8FY.js";import"./FooterCommon-BhANoLil.js";import"./LinkCommon-trhtzq2I.js";const D={title:"Layouts/Exit Layout",parameters:{layout:"fullscreen"},argTypes:{showAgent:{control:"boolean"},actions:{control:"number",min:1},content:{control:"number",min:1}}},g=({headingProps:m,showAgent:c,iconProps:l,actions:u=1,content:p=4,heightAgent:d=400})=>t.jsx(y,{title:"Form Layout Title",children:t.jsxs(r,{headingProps:m,iconProps:l,children:[t.jsx(r.Content,{children:Array.from({length:p},(h,e)=>t.jsx(n,{children:"Slot CONTENT"},e))}),t.jsx(r.Agent,{children:c?t.jsx(n,{style:{height:d},children:"AGENT"}):null}),t.jsx(r.Action,{children:Array.from({length:u},(h,e)=>t.jsx(n,{children:"Slot ACTION"},e))})]})}),o={name:"ExitLayout",render:g,args:{headingProps:{title:"Title",firstSubtitle:"firstSubtitle"},showAgent:!0,iconProps:{src:x,hasBackground:!0,variant:"success"}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const O=["ExitLayoutStory"];export{o as ExitLayoutStory,O as __namedExportsOrder,D as default};
