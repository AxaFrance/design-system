import{j as e}from"./index-DK-fRI8B.js";import"./DropdownCommon-4Q54LZ3p.js";import"./constants-BTX1ITMg.js";import"./index-DbaA8R3S.js";import{C as s}from"./Card-CF3jYttO.js";const p=[" ","elevation-2"],m=e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"af-card__title",children:"My card title"}),e.jsx("p",{children:"My card content"})]}),u={title:"Components/Card",component:s},r={name:"Card",render:a=>e.jsx(s,{...a}),args:{children:m,classModifier:" "},argTypes:{classModifier:{options:p,control:{type:"select"},defaultValue:" "}}},n={render:a=>e.jsx(s,{...a}),args:{children:m,classModifier:" "},argTypes:{classModifier:{options:p,control:{type:"select"},defaultValue:" "},onClick:{action:"onClick"}}};var o,t,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const C=["Default","ButtonCard"],_=Object.freeze(Object.defineProperty({__proto__:null,ButtonCard:n,Default:r,__namedExportsOrder:C,default:u},Symbol.toStringTag,{value:"Module"}));export{n as B,_ as C,r as D};
