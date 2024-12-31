import{j as l}from"./jsx-runtime-Cw0GR0a5.js";import{f as t}from"./index-C_FWhylE.js";import{a as e}from"./Radio-CQP4-0qJ.js";import{R as s}from"./RadioInput-TIE-3deB.js";import{M as p}from"./HelpMessage-IVok9Gud.js";import"./getComponentClassName-BBtdTm69.js";import"./index-CTjT7uj6.js";import"./RadioItem-BqdDckBA.js";import"./getOptionClassName-C-PokU6N.js";import"./useInputClassModifier-B4SXY78l.js";import"./useOptionsWithId-BhtwyMuM.js";const v={component:s,title:"Components/Form/Input/Radio",argTypes:{onChange:{action:"onChange"}},args:{onChange:t()}},a={name:"RadioInput",render:({...i})=>l.jsx(s,{...i}),args:{label:"Where are you ?",required:!0,mode:e.classic,value:"",classModifier:"",isChecked:!1,readOnly:!1,disabled:!1,name:"placeName",forceDisplayMessage:!0,messageType:p.error,message:"",options:[{label:"Paris",value:"paris"},{label:"Lille",value:"lille"},{label:"Madrid",value:"madrid"}]},argTypes:{onChange:{action:"onChange"},mode:{options:[e.classic,e.default,e.inline],control:{type:"inline-radio"}},value:{options:["empty","paris","lille","madrid"],mapping:{empty:""},control:{type:"inline-radio"}}}};var n,o,r;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const C=["RadioInputStory"];export{a as RadioInputStory,C as __namedExportsOrder,v as default};
