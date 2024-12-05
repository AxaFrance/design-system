import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{f as p}from"./index-C_FWhylE.js";import{M as l}from"./HelpMessage-8RhooMOY.js";import"./index-CCQ3W5xA.js";import"./index-CTjT7uj6.js";import{C as s}from"./ChoiceInput-B-AiHzmE.js";import"./getComponentClassName-C7V7Z2-u.js";import"./useInputClassModifier-B4SXY78l.js";import"./useOptionsWithId-BhtwyMuM.js";import"./Choice-D7sDQVe0.js";import"./Radio-DweL7mc7.js";import"./RadioItem-CQo6a_RZ.js";import"./getOptionClassName-B6m0JZo2.js";import"./RadioInput-CG2q86-n.js";const j={component:s,title:"Components/Form/Input/Choice",argTypes:{onChange:{action:"onChange"}},args:{onChange:p()}},e={name:"ChoiceInput",render:({classModifier:n,...i})=>t.jsx(s,{classModifier:n==null?void 0:n.join(" "),...i}),args:{name:"placeName",required:!0,label:"Place type",placeholder:"Paris",messageType:l.error,forceDisplayMessage:!1,id:"uniqueid",classModifier:[],isVisible:!0,readOnly:!1,disabled:!1},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "ChoiceInput",
  render: ({
    classModifier,
    ...args
  }) => <ChoiceInput classModifier={classModifier?.join(" ")} {...args} />,
  args: {
    name: "placeName",
    required: true,
    label: "Place type",
    placeholder: "Paris",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    id: "uniqueid",
    classModifier: [],
    isVisible: true,
    readOnly: false,
    disabled: false
  },
  argTypes: {
    onChange: {
      action: "onChange"
    },
    classModifier: {
      options: ["disabled", "required"],
      control: {
        type: "inline-check"
      }
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=["ChoiceInputStory"];export{e as ChoiceInputStory,x as __namedExportsOrder,j as default};
