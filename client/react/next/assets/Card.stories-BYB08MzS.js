import{j as e}from"./index-C-iqcyhV.js";import{o as _,H as j}from"./CardLF-DLd5PwB1.js";import"./index-ZnYipkzV.js";const t=({as:r,children:C,className:p,...u})=>{const g=r||"div";return e.jsx(g,{className:_({baseClassName:"af-card",className:p}),...u,children:C})},m=e.jsxs(e.Fragment,{children:[e.jsx(j,{level:2,className:"af-card__title",children:"My card title"}),e.jsx("p",{children:"My card content"})]}),x={title:"Components/Card",component:t},n={name:"Basic Content",render:r=>e.jsx(t,{...r}),args:{children:m}},a={render:r=>e.jsx(t,{...r}),args:{children:m,as:"button",type:"button"},argTypes:{onClick:{action:"onClick"}}};var s,o,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Basic Content",
  render: args => <Card {...args} />,
  args: {
    children: BASIC_CONTENT
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const N=["Default","ButtonCard"],h=Object.freeze(Object.defineProperty({__proto__:null,ButtonCard:a,Default:n,__namedExportsOrder:N,default:x},Symbol.toStringTag,{value:"Module"}));export{a as B,h as C,n as D};
