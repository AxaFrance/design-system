import{j as l}from"./jsx-runtime-QvZ8i92b.js";import{B as u,V as c}from"./Button-GV2C7V7f.js";import{L as m}from"./Link-BQTbBxg2.js";import{A as p}from"./Alert-yYw8AEPN.js";const d=["information","neutral","error","validation","warning"],f={title:"Components/Alert",component:p},t={args:{title:"My Alert title",type:"information",children:"Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",action:l.jsx(m,{openInNewTab:!0,href:"https://fakelink.com",children:"Plus de détails"}),iconSize:24},argTypes:{type:{options:d,control:{type:"select"},defaultValue:"information"}}},n={name:"Alert with Button action",args:{title:"My Alert title",type:"information",children:"Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",action:l.jsx(u,{variant:c.ghost,children:"Actualiser"}),iconSize:24}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    title: "My Alert title",
    type: "information",
    children: "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    action: <Link openInNewTab href="https://fakelink.com">
        Plus de détails
      </Link>,
    iconSize: 24
  },
  argTypes: {
    type: {
      options: MODIFIERS,
      control: {
        type: "select"
      },
      defaultValue: "information"
    }
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Alert with Button action",
  args: {
    title: "My Alert title",
    type: "information",
    children: "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    action: <ButtonClient variant={Variants.ghost}>Actualiser</ButtonClient>,
    iconSize: 24
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const h=["Default","WithButtonAction"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithButtonAction:n,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{v as A,t as D};
