import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{W as r,t as i}from"./client-BA4V0FF1.js";import{yr as a}from"./MessageBarCommon-Bs3XJyGc.js";import{n as o,t as s}from"./LayoutDemo-BcaUytJi.js";import"./layout-D-szCo83.js";var c=t({FitContent:()=>y,LeftCenterRight:()=>v,TopCenterRight:()=>g,TopLeftCenter:()=>h,TopLeftCenterRight:()=>_,__namedExportsOrder:()=>b,default:()=>m}),l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),o(),l=n(),u=(0,l.jsx)(a,{className:`af-card--layout`,children:`top content`}),d=(0,l.jsx)(a,{className:`af-card--layout af-card--layout--plainheight`,children:`left content`}),f=(0,l.jsx)(a,{className:`af-card--layout af-card--layout--plainheight`,children:`center content`}),p=(0,l.jsx)(a,{className:`af-card--layout af-card--layout--plainheight`,children:`right content`}),m={title:`Layouts/Columns Layout`,component:r,parameters:{layout:`fullscreen`},decorators:[e=>(0,l.jsx)(s,{mainProps:{className:`layout-demo`},title:`Car insurance`,children:(0,l.jsx)(e,{})})],argTypes:{children:{control:!1},headingProps:{control:`object`},isFit:{control:!1}},args:{headingProps:{children:`Your title`,firstSubtitle:`Subtitle`}}},h={name:`Top + Left + Center`,render:e=>(0,l.jsxs)(r,{...e,children:[(0,l.jsx)(r.Top,{children:u}),(0,l.jsx)(r.Left,{children:d}),(0,l.jsx)(r.Content,{children:f})]})},g={name:`Top + Center + Right`,render:e=>(0,l.jsxs)(r,{...e,children:[(0,l.jsx)(r.Top,{children:u}),(0,l.jsx)(r.Content,{children:f}),(0,l.jsx)(r.Right,{children:p})]})},_={name:`Top + Left + Center + Right`,render:e=>(0,l.jsxs)(r,{...e,children:[(0,l.jsx)(r.Top,{children:u}),(0,l.jsx)(r.Left,{children:d}),(0,l.jsx)(r.Content,{children:f}),(0,l.jsx)(r.Right,{children:p})]})},v={name:`Left + Center + Right`,render:e=>(0,l.jsxs)(r,{...e,children:[(0,l.jsx)(r.Left,{children:d}),(0,l.jsx)(r.Content,{children:f}),(0,l.jsx)(r.Right,{children:p})]})},y={name:`Center Only + isFit`,args:{isFit:!0},argTypes:{isFit:{control:`boolean`}},render:e=>(0,l.jsx)(r,{...e,children:(0,l.jsx)(r.Content,{children:f})})},b=[`TopLeftCenter`,`TopCenterRight`,`TopLeftCenterRight`,`LeftCenterRight`,`FitContent`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Top + Left + Center",
  render: args => <ColumnsLayout {...args}>
      <ColumnsLayout.Top>{topContent}</ColumnsLayout.Top>
      <ColumnsLayout.Left>{leftContent}</ColumnsLayout.Left>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
    </ColumnsLayout>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Top + Center + Right",
  render: args => <ColumnsLayout {...args}>
      <ColumnsLayout.Top>{topContent}</ColumnsLayout.Top>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
      <ColumnsLayout.Right>{rightContent}</ColumnsLayout.Right>
    </ColumnsLayout>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Top + Left + Center + Right",
  render: args => <ColumnsLayout {...args}>
      <ColumnsLayout.Top>{topContent}</ColumnsLayout.Top>
      <ColumnsLayout.Left>{leftContent}</ColumnsLayout.Left>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
      <ColumnsLayout.Right>{rightContent}</ColumnsLayout.Right>
    </ColumnsLayout>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Left + Center + Right",
  render: args => <ColumnsLayout {...args}>
      <ColumnsLayout.Left>{leftContent}</ColumnsLayout.Left>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
      <ColumnsLayout.Right>{rightContent}</ColumnsLayout.Right>
    </ColumnsLayout>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Center Only + isFit",
  args: {
    isFit: true
  },
  argTypes: {
    isFit: {
      control: "boolean"
    }
  },
  render: args => <ColumnsLayout {...args}>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
    </ColumnsLayout>
}`,...y.parameters?.docs?.source}}}})))()}export{h as a,g as i,y as n,_ as o,v as r,x as s,c as t};