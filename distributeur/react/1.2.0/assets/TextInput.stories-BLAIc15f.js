import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{m as s,M as i}from"./CardData-D-Zc8gNU.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{H as D}from"./index-CLDkzSQa.js";import{f as Y}from"./index-VGPHIPc6.js";import{i as m}from"./inputTypes-yk8eVPCn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./Popover-DNB-Ornh.js";const H={component:s,title:"Components/Form/Input/Text",argTypes:{onChange:{action:"onChange"}},args:{onChange:Y()}},r={name:"TextInput",render:({onChange:e,...a})=>n.jsx(s,{onChange:e,...a}),args:{classModifier:"required",value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,message:"message",className:"",type:"text",label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:i.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{type:{options:m,control:{type:"select"}}}},o={name:"TextInputError",render:({onChange:e,...a})=>n.jsx(s,{onChange:e,...a}),args:{required:!0,value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",type:"text",label:"Your name",message:"The field is required",helpMessage:"Aide à la saisie",forceDisplayMessage:!0,messageType:i.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{type:{options:m,control:{type:"select"}}}},t={name:"TextInputSuccess",render:({onChange:e,...a})=>n.jsx(s,{onChange:e,...a}),args:{required:!0,value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",type:"text",label:"Your name",message:"Success Message Type",helpMessage:"Aide à la saisie",forceDisplayMessage:!0,messageType:i.success,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{type:{options:m,control:{type:"select"}}}},l={name:"TextInputRichLabel",render:({onChange:e,...a})=>n.jsx(s,{onChange:e,...a}),args:{required:!0,value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",type:"text",label:n.jsxs("span",{children:["Place name ",n.jsx("em",{children:"optional"})]}),message:"The field is required",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:i.error},argTypes:{type:{options:m,control:{type:"select"}}}},p={name:"TextInput with help button",render:({onChange:e,...a})=>n.jsx(s,{onChange:e,...a,children:n.jsx(D,{mode:"hover",children:"asdasd"})}),args:{required:!0,value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",type:"text",helpMessage:"Aide à la saisie",label:"Your name"}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,y,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,T,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var b,I,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(I=l.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var M,N,S;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "TextInput with help button",
  render: ({
    onChange,
    ...args
  }) => <TextInput onChange={onChange} {...args}>
      <HelpButton mode="hover">asdasd</HelpButton>
    </TextInput>,
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
    helpMessage: "Aide à la saisie",
    label: "Your name"
  }
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const B=["TextInputStory","TextInputErrorStory","TextInputSuccessStory","TextInputRichLabelStory","TextInputWithAppendChildren"];export{o as TextInputErrorStory,l as TextInputRichLabelStory,r as TextInputStory,t as TextInputSuccessStory,p as TextInputWithAppendChildren,B as __namedExportsOrder,H as default};
