import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{f as p}from"./index-C_FWhylE.js";import{M as l}from"./HelpMessage-IVok9Gud.js";import"./getComponentClassName-BBtdTm69.js";import"./index-CTjT7uj6.js";import{C as o}from"./ChoiceInput-gP13tvqR.js";import"./useInputClassModifier-B4SXY78l.js";import"./useOptionsWithId-BhtwyMuM.js";import"./Choice-DwfIdKqD.js";import"./Radio-CQP4-0qJ.js";import"./RadioItem-BqdDckBA.js";import"./getOptionClassName-C-PokU6N.js";import"./RadioInput-TIE-3deB.js";const q={component:o,title:"Components/Form/Input/Choice",argTypes:{onChange:{action:"onChange"}},args:{onChange:p()}},e={name:"ChoiceInput",render:({classModifier:n,...i})=>t.jsx(o,{classModifier:n==null?void 0:n.join(" "),...i}),args:{name:"placeName",required:!0,label:"Place type",placeholder:"Paris",messageType:l.error,forceDisplayMessage:!1,message:"",id:"uniqueid",classModifier:[],isVisible:!0,readOnly:!1,disabled:!1},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
