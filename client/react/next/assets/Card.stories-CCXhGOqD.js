import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{H as p}from"./LoaderLF-BrEPfRjY.js";/* empty css               */import"./LoaderCommon-CqRZ_kgL.js";import"./index-CtOEgLBf.js";import{C as a}from"./CardCommon-DYFk5hK7.js";const l=r.jsxs(r.Fragment,{children:[r.jsx(p,{level:2,className:"af-card__title",children:"My card title"}),r.jsx("p",{children:"My card content"})]}),C={title:"Components/Card",component:a},e={name:"Basic Content",render:t=>r.jsx(a,{...t}),args:{children:l}},n={render:t=>r.jsx(a,{...t}),args:{children:l,as:"button",type:"button"},argTypes:{onClick:{action:"onClick"}}};var o,s,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Basic Content",
  render: args => <Card {...args} />,
  args: {
    children: BASIC_CONTENT
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,i,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const u=["Default","ButtonCard"],y=Object.freeze(Object.defineProperty({__proto__:null,ButtonCard:n,Default:e,__namedExportsOrder:u,default:C},Symbol.toStringTag,{value:"Module"}));export{n as B,y as C,e as D};
