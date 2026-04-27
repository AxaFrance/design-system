import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{M as d,o,H as c}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";const b=["","required","disabled"],j={component:o,title:"Components/Form/Input/Number",args:{required:!0,classModifier:[],value:5,placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,message:"",messageType:d.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{classModifier:{options:b,control:{type:"inline-check"}}}},e={name:"NumberInput",render:({classModifier:s,...a})=>n.jsx(o,{classModifier:s.join(" "),...a})},r={name:"NumberInput with help button",render:({classModifier:s,...a})=>n.jsx(o,{classModifier:s.join(" "),...a,children:n.jsx(c,{mode:"hover",children:"Help"})})};var t,i,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "NumberInput",
  render: ({
    classModifier,
    ...args
  }) => <NumberInput classModifier={classModifier.join(" ")} {...args} />
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,u,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "NumberInput with help button",
  render: ({
    classModifier,
    ...args
  }) =>
  // Add a button as children to the NumberInput
  <NumberInput classModifier={classModifier.join(" ")} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </NumberInput>
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const x=["NumberInputStory","NumberInputWithChildrenStory"];export{e as NumberInputStory,r as NumberInputWithChildrenStory,x as __namedExportsOrder,j as default};
