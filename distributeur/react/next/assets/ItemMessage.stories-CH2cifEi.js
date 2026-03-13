import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./TextInput-CCiFuaKV.js";import"./index-ZnYipkzV.js";const S={title:"Experimental/Form/Atoms/ItemMessage",component:t,argTypes:{children:{control:"text"},variant:{control:{type:"inline-radio"},options:[void 0,"error","success"]}}},r={name:"Help Message",render:({children:e,...s})=>o.jsx(t,{...s,children:e}),args:{children:"Help message"},argTypes:{}},a={name:"Error Message",render:({children:e,...s})=>o.jsx(t,{...s,children:e}),args:{variant:"error",children:"Error message"},argTypes:{}},n={name:"Success Message",render:({children:e,...s})=>o.jsx(t,{...s,children:e}),args:{variant:"success",children:"Success message"},argTypes:{}};var c,m,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Help Message",
  render: ({
    children,
    ...args
  }) => <ItemMessage {...args}>{children}</ItemMessage>,
  args: {
    children: "Help message"
  },
  argTypes: {}
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Error Message",
  render: ({
    children,
    ...args
  }) => <ItemMessage {...args}>{children}</ItemMessage>,
  args: {
    variant: "error",
    children: "Error message"
  },
  argTypes: {}
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,M;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Success Message",
  render: ({
    children,
    ...args
  }) => <ItemMessage {...args}>{children}</ItemMessage>,
  args: {
    variant: "success",
    children: "Success message"
  },
  argTypes: {}
}`,...(M=(u=n.parameters)==null?void 0:u.docs)==null?void 0:M.source}}};const y=["ItemMessageHelpStory","ItemMessageErrorStory","ItemMessageSuccessStory"],E=Object.freeze(Object.defineProperty({__proto__:null,ItemMessageErrorStory:a,ItemMessageHelpStory:r,ItemMessageSuccessStory:n,__namedExportsOrder:y,default:S},Symbol.toStringTag,{value:"Module"}));export{r as I,E as S,a,n as b};
