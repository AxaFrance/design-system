import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{B as r,Xt as i,nt as a,t as o}from"./client-BA4V0FF1.js";import{yr as s,zr as c}from"./MessageBarCommon-Bs3XJyGc.js";import{a as l,o as u}from"./settings-fill-xXiKbUtr.js";import{a as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./LayoutDemo.constant-BwaEsiuj.js";import"./layout-D-szCo83.js";var v=t({ContentAndBottom:()=>k,ContentOnly:()=>A,Default:()=>D,TopAndContent:()=>O,__namedExportsOrder:()=>j,default:()=>E}),y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{o(),u(),h(),y=n(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={appNameProps:{label:`Car insurance`},tabMenuProps:g,menuBurgerProps:d,actionChildren:(0,y.jsx)(i,{variant:`secondary`,iconLeft:(0,y.jsx)(c,{src:l,size:`S`}),onClick:b(`Action clicked`),children:`Accéder à AXA Banque`})},S={links:f,socialMedias:m,copyright:_,expandLinkText:p},C=(0,y.jsx)(r.Top,{children:(0,y.jsx)(s,{className:`af-card--layout`,children:`MainLayout.Top`})}),w=(0,y.jsx)(s,{className:`af-card--layout af-card--layout--plainheight`,children:`Children`}),T=(0,y.jsx)(r.Bottom,{children:(0,y.jsx)(s,{className:`af-card--layout`,children:`MainLayout.Bottom`})}),E={title:`Layouts/Main Layout`,component:r,parameters:{layout:`fullscreen`},decorators:[(e,{args:t})=>(0,y.jsxs)(y.Fragment,{children:[t.debugGridProps?(0,y.jsx)(a,{...t.debugGridProps,forceVisible:!0}):null,(0,y.jsx)(e,{args:{...t,debugGridProps:void 0}})]})],argTypes:{children:{control:!1},headerProps:{control:`object`},footerProps:{control:`object`}},args:{className:`layout-demo`,headerProps:x,footerProps:S,debugGridProps:{isCheckedByDefault:!0}}},D={name:`Top + Children + Bottom`,args:{backLinkProps:{href:`#`,children:`Retour`}},render:e=>(0,y.jsxs)(r,{...e,children:[C,w,T]})},O={name:`Top + Children`,render:e=>(0,y.jsxs)(r,{...e,children:[C,w]})},k={name:`Children + Bottom`,render:e=>(0,y.jsxs)(r,{...e,children:[w,T]})},A={name:`Children only`,render:e=>(0,y.jsx)(r,{...e,children:w})},j=[`Default`,`TopAndContent`,`ContentAndBottom`,`ContentOnly`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Top + Children + Bottom",
  args: {
    backLinkProps: {
      href: "#",
      children: "Retour"
    }
  },
  render: args => <MainLayout {...args}>
      {top}
      {content}
      {bottom}
    </MainLayout>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Top + Children",
  render: args => <MainLayout {...args}>
      {top}
      {content}
    </MainLayout>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Children + Bottom",
  render: args => <MainLayout {...args}>
      {content}
      {bottom}
    </MainLayout>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Children only",
  render: args => <MainLayout {...args}>{content}</MainLayout>
}`,...A.parameters?.docs?.source}}}})))()}export{O as a,v as i,A as n,M as o,D as r,k as t};