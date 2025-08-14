import{j as s}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{l as n,M as p}from"./Loader-CmhshmuS.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as I}from"./index-28pPPJTf.js";import{i}from"./inputTypes-yk8eVPCn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const j={component:n,title:"Components/Form/Input/Text",argTypes:{onChange:{action:"onChange"}},args:{onChange:I()}},r={name:"TextInput",render:({onChange:e,...a})=>s.jsx(n,{onChange:e,...a}),args:{classModifier:"required",value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,message:"message",className:"",type:"text",label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:p.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{type:{options:i,control:{type:"select"}}}},o={name:"TextInputError",render:({onChange:e,...a})=>s.jsx(n,{onChange:e,...a}),args:{required:!0,value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",type:"text",label:"Your name",message:"The field is required",helpMessage:"Aide à la saisie",forceDisplayMessage:!0,messageType:p.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{type:{options:i,control:{type:"select"}}}},t={name:"TextInputSuccess",render:({onChange:e,...a})=>s.jsx(n,{onChange:e,...a}),args:{required:!0,value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",type:"text",label:"Your name",message:"Success Message Type",helpMessage:"Aide à la saisie",forceDisplayMessage:!0,messageType:p.success,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{type:{options:i,control:{type:"select"}}}},l={name:"TextInputRichLabel",render:({onChange:e,...a})=>s.jsx(n,{onChange:e,...a}),args:{required:!0,value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",type:"text",label:s.jsxs("span",{children:["Place name ",s.jsx("em",{children:"optional"})]}),message:"The field is required",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:p.error},argTypes:{type:{options:i,control:{type:"select"}}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "TextInput",
  render: ({
    onChange,
    ...args
  }) => <TextInput onChange={onChange} {...args} />,
  args: {
    classModifier: "required",
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    message: "message",
    className: "",
    type: "text",
    label: "Your name",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MessageTypes.error,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false
  },
  argTypes: {
    type: {
      options: inputTypes,
      control: {
        type: "select"
      }
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "TextInputError",
  render: ({
    onChange,
    ...args
  }) => <TextInput onChange={onChange} {...args} />,
  args: {
    required: true,
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text",
    label: "Your name",
    message: "The field is required",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: true,
    messageType: MessageTypes.error,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false
  },
  argTypes: {
    type: {
      options: inputTypes,
      control: {
        type: "select"
      }
    }
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,T,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "TextInputSuccess",
  render: ({
    onChange,
    ...args
  }) => <TextInput onChange={onChange} {...args} />,
  args: {
    required: true,
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text",
    label: "Your name",
    message: "Success Message Type",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: true,
    messageType: MessageTypes.success,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false
  },
  argTypes: {
    type: {
      options: inputTypes,
      control: {
        type: "select"
      }
    }
  }
}`,...(h=(T=t.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var x,b,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "TextInputRichLabel",
  render: ({
    onChange,
    ...args
  }) => <TextInput onChange={onChange} {...args} />,
  args: {
    required: true,
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text",
    label: <span>
        Place name <em>optional</em>
      </span>,
    message: "The field is required",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MessageTypes.error
  },
  argTypes: {
    type: {
      options: inputTypes,
      control: {
        type: "select"
      }
    }
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const v=["TextInputStory","TextInputErrorStory","TextInputSuccessStory","TextInputRichLabelStory"];export{o as TextInputErrorStory,l as TextInputRichLabelStory,r as TextInputStory,t as TextInputSuccessStory,v as __namedExportsOrder,j as default};
