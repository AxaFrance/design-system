import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{M as c,y as o,H as d}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";import{fn as g}from"./index-CH2Su9EI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";const H={component:o,title:"Components/Form/Input/Textarea",argTypes:{onChange:{action:"onChange"}},args:{onChange:g(),label:"Comment",name:"comment",id:"TextareaInputId",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",required:!0,rows:6,cols:60,placeholder:"",helpMessage:"Enter a comment",messageType:c.error,message:"",forceDisplayMessage:!1,readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",tabIndex:0,autoFocus:!0}},e={name:"TextareaInput",render:({onChange:r,...t})=>n.jsx(o,{onChange:r,...t}),args:{}},a={name:"TextareaInput with help button",render:({onChange:r,...t})=>n.jsx(o,{onChange:r,...t,children:n.jsx(d,{mode:"hover",children:"Help"})})};var s,p,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "TextareaInput",
  render: ({
    onChange,
    ...args
  }) => <TextareaInput onChange={onChange} {...args} />,
  args: {}
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,u,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "TextareaInput with help button",
  render: ({
    onChange,
    ...args
  }) => <TextareaInput onChange={onChange} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </TextareaInput>
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const j=["TextareaInputStory","TextAreaInputWithChildren"];export{a as TextAreaInputWithChildren,e as TextareaInputStory,j as __namedExportsOrder,H as default};
