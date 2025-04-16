import{j as l}from"./index-DK-fRI8B.js";import{j as r,i as e,M as t}from"./Loader-XaWoVSYB.js";/* empty css              */import"./index-DbaA8R3S.js";import{f as d}from"./index-C2cC0QQF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const M={component:r,title:"Components/Form/Input/Radio",argTypes:{onChange:{action:"onChange"}},args:{onChange:d()}},a={name:"RadioInput",render:({...i})=>l.jsx(r,{...i}),args:{label:"Where are you ?",required:!0,mode:e.classic,value:"",classModifier:"",isChecked:!1,readOnly:!1,disabled:!1,name:"placeName",forceDisplayMessage:!0,messageType:t.error,message:"",options:[{label:"Paris",value:"paris"},{label:"Lille",value:"lille"},{label:"Madrid",value:"madrid"}]},argTypes:{onChange:{action:"onChange"},mode:{options:[e.classic,e.default,e.inline],control:{type:"inline-radio"}},value:{options:["empty","paris","lille","madrid"],mapping:{empty:""},control:{type:"inline-radio"}}}};var n,o,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "RadioInput",
  render: ({
    ...args
  }) => <RadioInput {...args} />,
  args: {
    label: "Where are you ?",
    required: true,
    mode: RadioModes.classic,
    value: "",
    classModifier: "",
    isChecked: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    forceDisplayMessage: true,
    messageType: MessageTypes.error,
    message: "",
    options: [{
      label: "Paris",
      value: "paris"
    }, {
      label: "Lille",
      value: "lille"
    }, {
      label: "Madrid",
      value: "madrid"
    }]
  },
  argTypes: {
    onChange: {
      action: "onChange"
    },
    mode: {
      options: [RadioModes.classic, RadioModes.default, RadioModes.inline],
      control: {
        type: "inline-radio"
      }
    },
    value: {
      options: ["empty", "paris", "lille", "madrid"],
      mapping: {
        empty: ""
      },
      control: {
        type: "inline-radio"
      }
    }
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const R=["RadioInputStory"];export{a as RadioInputStory,R as __namedExportsOrder,M as default};
