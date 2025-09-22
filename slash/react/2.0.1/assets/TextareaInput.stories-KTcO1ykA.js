import{j as n}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{M as c,o}from"./CardData-BJfT8iU8.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{H as d}from"./index-A1AY-izJ.js";import{f as g}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./Popover-CyPkh9Yk.js";const M={component:o,title:"Components/Form/Input/Textarea",argTypes:{onChange:{action:"onChange"}},args:{onChange:g(),label:"Comment",name:"comment",id:"TextareaInputId",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",required:!0,rows:6,cols:60,placeholder:"",helpMessage:"Enter a comment",messageType:c.error,message:"",forceDisplayMessage:!1,readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",tabIndex:0,autoFocus:!0}},e={name:"TextareaInput",render:({onChange:a,...t})=>n.jsx(o,{onChange:a,...t}),args:{}},r={name:"TextareaInput with help button",render:({onChange:a,...t})=>n.jsx(o,{onChange:a,...t,children:n.jsx(d,{mode:"hover",children:"Help"})})};var s,p,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "TextareaInput",
  render: ({
    onChange,
    ...args
  }) => <TextareaInput onChange={onChange} {...args} />,
  args: {}
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,u,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "TextareaInput with help button",
  render: ({
    onChange,
    ...args
  }) => <TextareaInput onChange={onChange} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </TextareaInput>
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const S=["TextareaInputStory","TextAreaInputWithChildren"];export{r as TextAreaInputWithChildren,e as TextareaInputStory,S as __namedExportsOrder,M as default};
