import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{g as o,M as p}from"./Loader-D_HZkG_i.js";/* empty css              */import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as l}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const C={component:o,title:"Components/Form/Input/Choice",argTypes:{onChange:{action:"onChange"}},args:{onChange:l()}},e={name:"ChoiceInput",render:({classModifier:n,...i})=>t.jsx(o,{classModifier:n==null?void 0:n.join(" "),...i}),args:{name:"placeName",required:!0,label:"Place type",placeholder:"Paris",messageType:p.error,forceDisplayMessage:!1,message:"",id:"uniqueid",classModifier:[],isVisible:!0,readOnly:!1,disabled:!1},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var a,s,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const M=["ChoiceInputStory"];export{e as ChoiceInputStory,M as __namedExportsOrder,C as default};
