import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-B6pS4pdr.js";import{St as i,n as a,o,q as s}from"./distributeur-DmtDXCQS.js";import{n as c,t as l}from"./inputTypes-IHEh6vSN.js";var u,d,f,p,m,h,g,_,v,y=e((()=>{a(),n(),l(),u=r(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=t.meta({component:s,title:`Components/Form/Input/Text`,argTypes:{onChange:{action:`onChange`}},args:{onChange:d()}}),p=f.story({name:`TextInput`,render:({onChange:e,...t})=>(0,u.jsx)(s,{onChange:e,...t}),args:{classModifier:`required`,value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,message:`message`,className:``,type:`text`,label:`Your name`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!1,messageType:i.error,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,"aria-disabled":!1},argTypes:{type:{options:c,control:{type:`select`}}}}),m=f.story({name:`TextInputError`,render:({onChange:e,...t})=>(0,u.jsx)(s,{onChange:e,...t}),args:{required:!0,value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,type:`text`,label:`Your name`,message:`The field is required`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!0,messageType:i.error,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,"aria-disabled":!1},argTypes:{type:{options:c,control:{type:`select`}}}}),h=f.story({name:`TextInputSuccess`,render:({onChange:e,...t})=>(0,u.jsx)(s,{onChange:e,...t}),args:{required:!0,value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,type:`text`,label:`Your name`,message:`Success Message Type`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!0,messageType:i.success,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,"aria-disabled":!1},argTypes:{type:{options:c,control:{type:`select`}}}}),g=f.story({name:`TextInputRichLabel`,render:({onChange:e,...t})=>(0,u.jsx)(s,{onChange:e,...t}),args:{required:!0,value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,type:`text`,label:(0,u.jsxs)(`span`,{children:[`Place name `,(0,u.jsx)(`em`,{children:`optional`})]}),message:`The field is required`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!1,messageType:i.error},argTypes:{type:{options:c,control:{type:`select`}}}}),_=f.story({name:`TextInput with help button`,render:({onChange:e,...t})=>(0,u.jsx)(s,{onChange:e,...t,children:(0,u.jsx)(o,{mode:`hover`,children:`asdasd`})}),args:{required:!0,value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,type:`text`,helpMessage:`Aide à la saisie`,label:`Your name`}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v=[`TextInputStory`,`TextInputErrorStory`,`TextInputSuccessStory`,`TextInputRichLabelStory`,`TextInputWithAppendChildren`]}));y();export{m as TextInputErrorStory,g as TextInputRichLabelStory,p as TextInputStory,h as TextInputSuccessStory,_ as TextInputWithAppendChildren,v as __namedExportsOrder,f as default,y as t};