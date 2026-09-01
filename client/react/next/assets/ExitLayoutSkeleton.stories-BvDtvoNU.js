import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{b as n,t as r}from"./client-CUdeMloT.js";import{Un as i,Wn as a,er as o,it as s}from"./TimelineVerticalCommon-CRRubO3-.js";import{n as c,t as l}from"./LayoutDemo-DYArxf2g.js";var u,d,f,p,m,h,g;e((()=>{r(),a(),c(),u=t(),d={title:`Layouts/Exit Layout`,parameters:{layout:`fullscreen`},argTypes:{isLoading:{control:`boolean`},actions:{control:`number`,min:1},content:{control:`number`,min:1},heightAgent:{control:`number`,min:120,step:20},hasAction:{control:`boolean`},hasAgent:{control:`boolean`},hasContent:{control:`boolean`},hasHeading:{control:`boolean`},hasIcon:{control:`boolean`}}},f={title:`Title`,firstSubtitle:`firstSubtitle`},p={src:i,hasBackground:!0,variant:`success`},m=({isLoading:e,hasAction:t=!0,hasAgent:r=!0,hasContent:i=!0,hasHeading:a=!0,hasIcon:c=!0,actions:d=1,content:m=4,heightAgent:h=400})=>(0,u.jsx)(l,{title:`Exit Layout Skeleton Demo`,children:e?(0,u.jsx)(s,{hasAction:t,hasAgent:r,hasContent:i,hasHeading:a,hasIcon:c}):(0,u.jsxs)(n,{headingProps:a?f:void 0,iconProps:c?p:void 0,children:[(0,u.jsx)(n.Content,{children:i?Array.from({length:m},(e,t)=>(0,u.jsx)(o,{children:`Slot CONTENT`},t)):null}),(0,u.jsx)(n.Agent,{children:r?(0,u.jsx)(o,{style:{height:h},children:`AGENT`}):null}),(0,u.jsx)(n.Action,{children:t?Array.from({length:d},(e,t)=>(0,u.jsx)(o,{children:`Slot ACTION`},t)):null})]})}),h={render:m,args:{isLoading:!0,hasAction:!0,hasAgent:!0,hasContent:!0,hasHeading:!0,hasIcon:!0,actions:1,content:4,heightAgent:400}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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