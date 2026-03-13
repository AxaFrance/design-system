import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{a as o,L as s,I as i,b as g}from"./TextInput-CCiFuaKV.js";import"./index-ZnYipkzV.js";const I={title:"Experimental/Form/Atoms/InputContainer",component:o,argTypes:{vertical:{control:"boolean"}}},r={name:"Horizontal Layout",render:e=>t.jsxs(o,{...e,children:[t.jsx(s,{htmlFor:"input-1",children:"Label"}),t.jsx(i,{id:"input-1",placeholder:"Enter text"}),t.jsx(g,{children:"€"})]}),args:{vertical:!1}},n={name:"Vertical Layout",render:e=>t.jsxs(o,{...e,children:[t.jsx(s,{htmlFor:"input-2",children:"Label"}),t.jsx(i,{id:"input-2",placeholder:"Enter text"}),t.jsx(g,{children:"€"})]}),args:{vertical:!0}},a={name:"Without Unit",render:e=>t.jsxs(o,{...e,children:[t.jsx(s,{htmlFor:"input-3",children:"Label"}),t.jsx(i,{id:"input-3",placeholder:"Enter text"})]}),args:{vertical:!1}};var l,p,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Horizontal Layout",
  render: args => <InputContainer {...args}>
      <Label htmlFor="input-1">Label</Label>
      <Input id="input-1" placeholder="Enter text" />
      <InputUnit>€</InputUnit>
    </InputContainer>,
  args: {
    vertical: false
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Vertical Layout",
  render: args => <InputContainer {...args}>
      <Label htmlFor="input-2">Label</Label>
      <Input id="input-2" placeholder="Enter text" />
      <InputUnit>€</InputUnit>
    </InputContainer>,
  args: {
    vertical: true
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,x,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Without Unit",
  render: args => <InputContainer {...args}>
      <Label htmlFor="input-3">Label</Label>
      <Input id="input-3" placeholder="Enter text" />
    </InputContainer>,
  args: {
    vertical: false
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const L=["HorizontalStory","VerticalStory","WithoutUnitStory"],f=Object.freeze(Object.defineProperty({__proto__:null,HorizontalStory:r,VerticalStory:n,WithoutUnitStory:a,__namedExportsOrder:L,default:I},Symbol.toStringTag,{value:"Module"}));export{r as H,f as S,n as V,a as W};
