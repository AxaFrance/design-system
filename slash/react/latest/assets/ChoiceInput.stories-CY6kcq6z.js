import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{f as p}from"./index-C_FWhylE.js";import{M as l}from"./HelpMessage-Cd7UbXG5.js";import"./index-CCQ3W5xA.js";import"./index-CTjT7uj6.js";import{C as o}from"./ChoiceInput-ciUy8TZP.js";import"./getComponentClassName-C7V7Z2-u.js";import"./useInputClassModifier-B4SXY78l.js";import"./useOptionsWithId-BhtwyMuM.js";import"./Choice-B4ebI_gO.js";import"./Radio-CvQ5P06R.js";import"./RadioItem-FNwESqqr.js";import"./getOptionClassName-B6m0JZo2.js";import"./RadioInput-CLpzqv7t.js";const j={component:o,title:"Components/Form/Input/Choice",argTypes:{onChange:{action:"onChange"}},args:{onChange:p()}},e={name:"ChoiceInput",render:({classModifier:n,...i})=>t.jsx(o,{classModifier:n==null?void 0:n.join(" "),...i}),args:{name:"placeName",required:!0,label:"Place type",placeholder:"Paris",messageType:l.error,forceDisplayMessage:!1,message:"",id:"uniqueid",classModifier:[],isVisible:!0,readOnly:!1,disabled:!1},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const x=["ChoiceInputStory"];export{e as ChoiceInputStory,x as __namedExportsOrder,j as default};
