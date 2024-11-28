import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{f as t}from"./index-C_FWhylE.js";import{R as s,a as n}from"./Radio-D02AoQTW.js";import"./index-CTjT7uj6.js";import"./RadioItem-RNtBv8XU.js";import"./HelpMessage-Dma0IcN4.js";import"./index-CCQ3W5xA.js";import"./getComponentClassName-C7V7Z2-u.js";import"./getOptionClassName-B6m0JZo2.js";const M={component:s,title:"Components/Form/Input/Radio",argTypes:{onChange:{action:"onChange"}},args:{onChange:t()}},e={name:"Radio",render:({classModifier:a,...r})=>d.jsx(s,{classModifier:a==null?void 0:a.join(" "),...r}),args:{mode:n.classic,value:"",classModifier:[],isChecked:!1,readOnly:!1,disabled:!1,name:"placeName",options:[{label:"Paris",value:"paris"},{label:"Lille",value:"lille"},{label:"Madrid",value:"madrid"}]},argTypes:{onChange:{action:"onChange"},mode:{options:[n.classic,n.default,n.inline],control:{type:"inline-radio"}},value:{options:["empty","paris","lille","madrid"],mapping:{empty:""},control:{type:"inline-radio"}},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Radio",
  render: ({
    classModifier,
    ...args
  }) => <Radio classModifier={classModifier?.join(" ")} {...args} />,
  args: {
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["RadioStory"];export{e as RadioStory,b as __namedExportsOrder,M as default};
