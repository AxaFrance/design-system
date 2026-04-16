import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{L as a}from"./TextInput-BCjylFYM.js";import"./index-CtOEgLBf.js";const m={title:"Experimental/Form/Atoms/Label",component:a,argTypes:{children:{control:"text"},required:{control:"boolean"}}},e={name:"Default",render:({children:n,...t})=>u.jsx(a,{...t,children:n}),args:{children:"Label text",htmlFor:"input-id"}},r={name:"Required",render:({children:n,...t})=>u.jsx(a,{...t,children:n}),args:{children:"Required field",htmlFor:"input-id",required:!0}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Default",
  render: ({
    children,
    ...args
  }) => <Label {...args}>{children}</Label>,
  args: {
    children: "Label text",
    htmlFor: "input-id"
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Required",
  render: ({
    children,
    ...args
  }) => <Label {...args}>{children}</Label>,
  args: {
    children: "Required field",
    htmlFor: "input-id",
    required: true
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const p=["DefaultStory","RequiredStory"],f=Object.freeze(Object.defineProperty({__proto__:null,DefaultStory:e,RequiredStory:r,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{r as R,f as S};
