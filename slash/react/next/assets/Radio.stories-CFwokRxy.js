import{j as d}from"./index-DK-fRI8B.js";/* empty css              */import{R as s,i as n}from"./Loader-B6DV6uP2.js";import"./index-DbaA8R3S.js";import{f as t}from"./index-C2cC0QQF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const R={component:s,title:"Components/Form/Input/Radio",argTypes:{onChange:{action:"onChange"}},args:{onChange:t()}},e={name:"Radio",render:({classModifier:a,...r})=>d.jsx(s,{classModifier:a==null?void 0:a.join(" "),...r}),args:{mode:n.classic,value:"",classModifier:[],isChecked:!1,readOnly:!1,disabled:!1,name:"placeName",options:[{label:"Paris",value:"paris"},{label:"Lille",value:"lille"},{label:"Madrid",value:"madrid"}]},argTypes:{onChange:{action:"onChange"},mode:{options:[n.classic,n.default,n.inline],control:{type:"inline-radio"}},value:{options:["empty","paris","lille","madrid"],mapping:{empty:""},control:{type:"inline-radio"}},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const h=["RadioStory"];export{e as RadioStory,h as __namedExportsOrder,R as default};
