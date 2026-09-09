import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{t as n,x as r}from"./client-DCbnl1Ts.js";import{Jn as i,ir as a,ot as o,qn as s}from"./MessageBarCommon-UhC0MWfb.js";import{n as c,t as l}from"./LayoutDemo-DkjrifcW.js";var u,d,f,p,m,h,g;e((()=>{n(),i(),c(),u=t(),d={title:`Layouts/Exit Layout`,parameters:{layout:`fullscreen`},argTypes:{isLoading:{control:`boolean`},actions:{control:`number`,min:1},content:{control:`number`,min:1},heightAgent:{control:`number`,min:120,step:20},hasAction:{control:`boolean`},hasAgent:{control:`boolean`},hasContent:{control:`boolean`},hasHeading:{control:`boolean`},hasIcon:{control:`boolean`}}},f={title:`Title`,firstSubtitle:`firstSubtitle`},p={src:s,hasBackground:!0,variant:`success`},m=({isLoading:e,hasAction:t=!0,hasAgent:n=!0,hasContent:i=!0,hasHeading:s=!0,hasIcon:c=!0,actions:d=1,content:m=4,heightAgent:h=400})=>(0,u.jsx)(l,{title:`Exit Layout Skeleton Demo`,children:e?(0,u.jsx)(o,{hasAction:t,hasAgent:n,hasContent:i,hasHeading:s,hasIcon:c}):(0,u.jsxs)(r,{headingProps:s?f:void 0,iconProps:c?p:void 0,children:[(0,u.jsx)(r.Content,{children:i?Array.from({length:m},(e,t)=>(0,u.jsx)(a,{children:`Slot CONTENT`},t)):null}),(0,u.jsx)(r.Agent,{children:n?(0,u.jsx)(a,{style:{height:h},children:`AGENT`}):null}),(0,u.jsx)(r.Action,{children:t?Array.from({length:d},(e,t)=>(0,u.jsx)(a,{children:`Slot ACTION`},t)):null})]})}),h={render:m,args:{isLoading:!0,hasAction:!0,hasAgent:!0,hasContent:!0,hasHeading:!0,hasIcon:!0,actions:1,content:4,heightAgent:400}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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