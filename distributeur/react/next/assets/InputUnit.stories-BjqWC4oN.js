import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b as s}from"./TextInput-BCjylFYM.js";import"./index-CtOEgLBf.js";const x={title:"Experimental/Form/Atoms/InputUnit",component:s,argTypes:{children:{control:"text"}}},n={name:"Default",render:({children:e,...r})=>o.jsx(s,{...r,children:e}),args:{children:"€"}},t={name:"Percentage",render:({children:e,...r})=>o.jsx(s,{...r,children:e}),args:{children:"%"}},a={name:"Text Unit",render:({children:e,...r})=>o.jsx(s,{...r,children:e}),args:{children:"per month"}};var c,i,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Default",
  render: ({
    children,
    ...args
  }) => <InputUnit {...args}>{children}</InputUnit>,
  args: {
    children: "€"
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Percentage",
  render: ({
    children,
    ...args
  }) => <InputUnit {...args}>{children}</InputUnit>,
  args: {
    children: "%"
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Text Unit",
  render: ({
    children,
    ...args
  }) => <InputUnit {...args}>{children}</InputUnit>,
  args: {
    children: "per month"
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const S=["DefaultStory","PercentageStory","TextUnitStory"],I=Object.freeze(Object.defineProperty({__proto__:null,DefaultStory:n,PercentageStory:t,TextUnitStory:a,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{n as D,t as P,I as S,a as T};
