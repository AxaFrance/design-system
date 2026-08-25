import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{Ct as n,M as r,Ot as i,St as a,j as o,t as s}from"./prospect-DTwhPsB5.js";import{n as c,t as l}from"./LayoutDemo-CQkh9926.js";var u,d,f,p,m,h,g;e((()=>{s(),n(),c(),u=t(),d={title:`Layouts/Exit Layout`,parameters:{layout:`fullscreen`},argTypes:{isLoading:{control:`boolean`},actions:{control:`number`,min:1},content:{control:`number`,min:1},heightAgent:{control:`number`,min:120,step:20},hasAction:{control:`boolean`},hasAgent:{control:`boolean`},hasContent:{control:`boolean`},hasHeading:{control:`boolean`},hasIcon:{control:`boolean`}}},f={title:`Title`,firstSubtitle:`firstSubtitle`},p={src:a,hasBackground:!0,variant:`success`},m=({isLoading:e,hasAction:t=!0,hasAgent:n=!0,hasContent:a=!0,hasHeading:s=!0,hasIcon:c=!0,actions:d=1,content:m=4,heightAgent:h=400})=>(0,u.jsx)(l,{title:`Exit Layout Skeleton Demo`,children:e?(0,u.jsx)(r,{hasAction:t,hasAgent:n,hasContent:a,hasHeading:s,hasIcon:c}):(0,u.jsxs)(o,{headingProps:s?f:void 0,iconProps:c?p:void 0,children:[(0,u.jsx)(o.Content,{children:a?Array.from({length:m},(e,t)=>(0,u.jsx)(i,{children:`Slot CONTENT`},t)):null}),(0,u.jsx)(o.Agent,{children:n?(0,u.jsx)(i,{style:{height:h},children:`AGENT`}):null}),(0,u.jsx)(o.Action,{children:t?Array.from({length:d},(e,t)=>(0,u.jsx)(i,{children:`Slot ACTION`},t)):null})]})}),h={render:m,args:{isLoading:!0,hasAction:!0,hasAgent:!0,hasContent:!0,hasHeading:!0,hasIcon:!0,actions:1,content:4,heightAgent:400}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Demo,
  args: {
    isLoading: true,
    hasAction: true,
    hasAgent: true,
    hasContent: true,
    hasHeading: true,
    hasIcon: true,
    actions: 1,
    content: 4,
    heightAgent: 400
  }
}`,...h.parameters?.docs?.source}}},g=[`ExitLayoutSkeletonDemo`]}))();export{h as ExitLayoutSkeletonDemo,g as __namedExportsOrder,d as default};