import{j as c}from"./index-C1mcBe1y.js";import{l as s}from"./DropdownCommon-D6SxXhVW.js";import"./constants-CEXjKYPN.js";import"./index-DbaA8R3S.js";const m={component:s,title:"Components/Toggle",parameters:{layout:"centered"}},e={name:"Toggle",render:a=>c.jsx(s,{...a}),args:{disabled:!1}},r={name:"Toggle Checked",render:a=>c.jsx(s,{...a}),args:{disabled:!1,checked:!0},argTypes:{checked:{table:{disable:!0}}}};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Toggle",
  render: args => <Toggle {...args} />,
  args: {
    disabled: false
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var d,g,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Toggle Checked",
  render: args => <Toggle {...args} />,
  args: {
    disabled: false,
    checked: true
  },
  argTypes: {
    checked: {
      table: {
        disable: true
      }
    }
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const p=["Playground","Checked"],f=Object.freeze(Object.defineProperty({__proto__:null,Checked:r,Playground:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,f as T};
