import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./ToggleCommon-ueasrSn1.js";import"./index-DuZrfDUH.js";const m={component:s,title:"Components/Toggle",parameters:{layout:"centered"}},e={name:"Toggle",render:a=>l.jsx(s,{...a}),args:{disabled:!1}},r={name:"Toggle Checked",render:a=>l.jsx(s,{...a}),args:{disabled:!1,checked:!0},argTypes:{checked:{table:{disable:!0}}}};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Toggle",
  render: args => <Toggle {...args} />,
  args: {
    disabled: false
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var d,g,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const p=["Playground","Checked"],b=Object.freeze(Object.defineProperty({__proto__:null,Checked:r,Playground:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,b as T};
