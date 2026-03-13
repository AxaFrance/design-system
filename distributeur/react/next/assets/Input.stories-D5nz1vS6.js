import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{I as s}from"./TextInput-CCiFuaKV.js";import"./index-ZnYipkzV.js";const h={title:"Experimental/Form/Atoms/Input",component:s,argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},type:{control:{type:"select"},options:["text","email","password","number","tel","url"]},onChange:{action:"changed",table:{disable:!0}}}},r={name:"Default",render:e=>o.jsx(s,{...e}),args:{placeholder:"Enter text..."}},a={name:"Disabled",render:e=>o.jsx(s,{...e}),args:{placeholder:"Disabled input",disabled:!0,value:"Cannot edit this"}},n={name:"Required",render:e=>o.jsx(s,{...e}),args:{placeholder:"Required field",required:!0}},t={name:"Invalid",render:e=>o.jsx(s,{...e}),args:{placeholder:"Invalid input","aria-invalid":!0,value:"Invalid value"}};var l,d,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Default",
  render: args => <Input {...args} />,
  args: {
    placeholder: "Enter text..."
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Disabled",
  render: args => <Input {...args} />,
  args: {
    placeholder: "Disabled input",
    disabled: true,
    value: "Cannot edit this"
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Required",
  render: args => <Input {...args} />,
  args: {
    placeholder: "Required field",
    required: true
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,I,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Invalid",
  render: args => <Input {...args} />,
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
    value: "Invalid value"
  }
}`,...(S=(I=t.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const x=["DefaultStory","DisabledStory","RequiredStory","InvalidStory"],q=Object.freeze(Object.defineProperty({__proto__:null,DefaultStory:r,DisabledStory:a,InvalidStory:t,RequiredStory:n,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{a as D,t as I,n as R,q as S};
