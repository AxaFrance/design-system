import{j as r}from"./index-C-iqcyhV.js";import{H as p}from"./SkeletonLF-ByPLQ7Mf.js";import"./index-ZnYipkzV.js";import{C as t}from"./CardCommon-BgdYCE32.js";const m=r.jsxs(r.Fragment,{children:[r.jsx(p,{level:2,className:"af-card__title",children:"My card title"}),r.jsx("p",{children:"My card content"})]}),C={title:"Components/Card",component:t},e={name:"Basic Content",render:a=>r.jsx(t,{...a}),args:{children:m}},n={render:a=>r.jsx(t,{...a}),args:{children:m,as:"button",type:"button"},argTypes:{onClick:{action:"onClick"}}};var o,s,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Basic Content",
  render: args => <Card {...args} />,
  args: {
    children: BASIC_CONTENT
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Card {...args} />,
  args: {
    children: BASIC_CONTENT,
    as: "button",
    type: "button"
  },
  argTypes: {
    onClick: {
      action: "onClick"
    }
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const u=["Default","ButtonCard"],x=Object.freeze(Object.defineProperty({__proto__:null,ButtonCard:n,Default:e,__namedExportsOrder:u,default:C},Symbol.toStringTag,{value:"Module"}));export{n as B,x as C,e as D};
