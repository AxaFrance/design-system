import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{C as s}from"./Card-FCi1q2IJ.js";const p=[" ","elevation-2"],u=e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"af-card__title",children:"My card title"}),e.jsx("p",{children:"My card content"})]}),m={title:"Components/Card",component:s},r={name:"Card",render:a=>e.jsx(s,{...a}),args:{children:u,classModifier:" "},argTypes:{classModifier:{options:p,control:{type:"select"},defaultValue:" "}}},n={render:a=>e.jsx(s,{...a}),args:{children:u,classModifier:" "},argTypes:{classModifier:{options:p,control:{type:"select"},defaultValue:" "},onClick:{action:"onClick"}}};var o,t,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Card",
  render: args => <Card {...args} />,
  args: {
    children: CUSTOM_CHILDREN,
    classModifier: " "
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select"
      },
      defaultValue: " "
    }
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var l,i,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Card {...args} />,
  args: {
    children: CUSTOM_CHILDREN,
    classModifier: " "
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select"
      },
      defaultValue: " "
    },
    onClick: {
      action: "onClick"
    }
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const C=["Default","ButtonCard"],M=Object.freeze(Object.defineProperty({__proto__:null,ButtonCard:n,Default:r,__namedExportsOrder:C,default:m},Symbol.toStringTag,{value:"Module"}));export{n as B,M as C,r as D};
