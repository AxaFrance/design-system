import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{f as d}from"./index-C_FWhylE.js";import{a as e}from"./Radio-DweL7mc7.js";import{R as l}from"./RadioInput-uSOHO1pX.js";import"./index-CTjT7uj6.js";import"./RadioItem-CQo6a_RZ.js";import"./HelpMessage-8RhooMOY.js";import"./index-CCQ3W5xA.js";import"./getComponentClassName-C7V7Z2-u.js";import"./getOptionClassName-B6m0JZo2.js";import"./useInputClassModifier-B4SXY78l.js";import"./useOptionsWithId-BhtwyMuM.js";const C={component:l,title:"Components/Form/Input/Radio",argTypes:{onChange:{action:"onChange"}},args:{onChange:d()}},n={name:"RadioInput",render:({classModifier:a,...s})=>t.jsx(l,{classModifier:a==null?void 0:a.join(" "),...s}),args:{label:"Where are you ?",required:!0,mode:e.classic,value:"",classModifier:[],isChecked:!1,readOnly:!1,disabled:!1,name:"placeName",options:[{label:"Paris",value:"paris"},{label:"Lille",value:"lille"},{label:"Madrid",value:"madrid"}]},argTypes:{onChange:{action:"onChange"},mode:{options:[e.classic,e.default,e.inline],control:{type:"inline-radio"}},value:{options:["empty","paris","lille","madrid"],mapping:{empty:""},control:{type:"inline-radio"}},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var o,i,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "RadioInput",
  render: ({
    classModifier,
    ...args
  }) => <RadioInput classModifier={classModifier?.join(" ")} {...args} />,
  args: {
    label: "Where are you ?",
    required: true,
    mode: RadioModes.classic,
    value: "",
    classModifier: [],
    isChecked: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
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
    },
    classModifier: {
      options: ["disabled", "required"],
      control: {
        type: "inline-check"
      }
    }
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const I=["RadioInputStory"];export{n as RadioInputStory,I as __namedExportsOrder,C as default};
