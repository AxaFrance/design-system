import{j as t}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{f as r,M as l}from"./Loader-MKkxOcwp.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as p}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const h={component:r,title:"Components/Form/Input/Choice",argTypes:{onChange:{action:"onChange"}},args:{onChange:p()}},e={name:"ChoiceInput",render:({classModifier:n,...i})=>t.jsx(r,{classModifier:n==null?void 0:n.join(" "),...i}),args:{name:"placeName",required:!0,label:"Place type",placeholder:"Paris",messageType:l.error,forceDisplayMessage:!1,classNameContainerInput:"col-md-10",classNameContainerLabel:"col-md-2",message:"",id:"uniqueid",classModifier:[],isVisible:!0,readOnly:!1,disabled:!1,value:void 0},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}},value:{options:[void 0,!0,!1],control:{type:"inline-radio"}}}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    classNameContainerInput: "col-md-10",
    classNameContainerLabel: "col-md-2",
    message: "",
    id: "uniqueid",
    classModifier: [],
    isVisible: true,
    readOnly: false,
    disabled: false,
    value: undefined
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
    },
    value: {
      options: [undefined, true, false],
      control: {
        type: "inline-radio"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const b=["ChoiceInputStory"];export{e as ChoiceInputStory,b as __namedExportsOrder,h as default};
