import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{f as p}from"./index-Bm9fFANh.js";import{M as l}from"./HelpMessage-D9o_4RmS.js";import"./getComponentClassName-CfMiunrP.js";import"./index-C33_amOP.js";import{C as o}from"./ChoiceInput-DSJTTGzc.js";import"./useInputClassModifier-B4SXY78l.js";import"./useOptionsWithId-aTvNHBF1.js";import"./Choice-CUOzbXId.js";import"./Radio-CJcO5WkX.js";import"./RadioItem-QFzOzOYt.js";import"./getOptionClassName-DxuJt0H1.js";import"./RadioInput-_ZEfJbsU.js";const q={component:o,title:"Components/Form/Input/Choice",argTypes:{onChange:{action:"onChange"}},args:{onChange:p()}},e={name:"ChoiceInput",render:({classModifier:n,...i})=>t.jsx(o,{classModifier:n==null?void 0:n.join(" "),...i}),args:{name:"placeName",required:!0,label:"Place type",placeholder:"Paris",messageType:l.error,forceDisplayMessage:!1,message:"",id:"uniqueid",classModifier:[],isVisible:!0,readOnly:!1,disabled:!1},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    message: "",
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
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const j=["ChoiceInputStory"];export{e as ChoiceInputStory,j as __namedExportsOrder,q as default};
