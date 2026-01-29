import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{M as c,o}from"./CardData-BIJbskTL.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{H as d}from"./index-gMQblwGn.js";import{f as g}from"./index-VGPHIPc6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./Popover-fnJAgU7M.js";const j={component:o,title:"Components/Form/Input/Textarea",argTypes:{onChange:{action:"onChange"}},args:{onChange:g(),label:"Comment",name:"comment",id:"TextareaInputId",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",required:!0,rows:6,cols:60,placeholder:"",helpMessage:"Enter a comment",messageType:c.error,message:"",forceDisplayMessage:!1,readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",tabIndex:0,autoFocus:!0}},e={name:"TextareaInput",render:({onChange:r,...t})=>n.jsx(o,{onChange:r,...t}),args:{}},a={name:"TextareaInput with help button",render:({onChange:r,...t})=>n.jsx(o,{onChange:r,...t,children:n.jsx(d,{mode:"hover",children:"Help"})})};var s,p,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const M=["TextareaInputStory","TextAreaInputWithChildren"];export{a as TextAreaInputWithChildren,e as TextareaInputStory,M as __namedExportsOrder,j as default};
