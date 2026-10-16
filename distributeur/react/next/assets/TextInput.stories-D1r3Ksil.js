import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-CUw-2XJG.js";import{Jt as a,Un as o,f as s,t as c}from"./distributeur-BR8zYeHf.js";import{n as l,t as u}from"./inputTypes-wO1KVrGt.js";var d=t({TextInputErrorStory:()=>g,TextInputRichLabelStory:()=>v,TextInputStory:()=>h,TextInputSuccessStory:()=>_,TextInputWithAppendChildren:()=>y,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{c(),r(),u(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m=i.meta({component:a,title:`Components/Form/Input/Text`,argTypes:{onChange:{action:`onChange`}},args:{onChange:p()}}),h=m.story({name:`TextInput`,render:({onChange:e,...t})=>(0,f.jsx)(a,{onChange:e,...t}),args:{value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,message:`message`,className:``,type:`text`,label:`Your name`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!1,messageType:o.error,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,"aria-disabled":!1},argTypes:{type:{options:l,control:{type:`select`}}}}),g=m.story({name:`TextInputError`,render:({onChange:e,...t})=>(0,f.jsx)(a,{onChange:e,...t}),args:{required:!0,value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,type:`text`,label:`Your name`,message:`The field is required`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!0,messageType:o.error,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,"aria-disabled":!1},argTypes:{type:{options:l,control:{type:`select`}}}}),_=m.story({name:`TextInputSuccess`,render:({onChange:e,...t})=>(0,f.jsx)(a,{onChange:e,...t}),args:{required:!0,value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,type:`text`,label:`Your name`,message:`Success Message Type`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!0,messageType:o.success,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,"aria-disabled":!1},argTypes:{type:{options:l,control:{type:`select`}}}}),v=m.story({name:`TextInputRichLabel`,render:({onChange:e,...t})=>(0,f.jsx)(a,{onChange:e,...t}),args:{required:!0,value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,type:`text`,label:(0,f.jsxs)(`span`,{children:[`Place name `,(0,f.jsx)(`em`,{children:`optional`})]}),message:`The field is required`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!1,messageType:o.error},argTypes:{type:{options:l,control:{type:`select`}}}}),y=m.story({name:`TextInput with help button`,render:({onChange:e,...t})=>(0,f.jsx)(a,{onChange:e,...t,hasInfobulle:!0,children:(0,f.jsx)(s,{mode:`hover`,children:`asdasd`})}),args:{required:!0,value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,type:`text`,helpMessage:`Aide à la saisie`,label:`Your name`}}),h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "TextInput",
  render: ({
    onChange,
    ...args
  }) => <TextInput onChange={onChange} {...args} />,
  args: {
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
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "TextInput with help button",
  render: ({
    onChange,
    ...args
  }) => <TextInput onChange={onChange} {...args} hasInfobulle>
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
})`,...y.input.parameters?.docs?.source}}},b=[`TextInputStory`,`TextInputErrorStory`,`TextInputSuccessStory`,`TextInputRichLabelStory`,`TextInputWithAppendChildren`]})))()}export{d as a,_ as i,v as n,x as o,h as r,g as t};