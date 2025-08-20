import{j as m}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{h as t,g as e,M as c}from"./Loader-B7zP7CXa.js";import{r as g}from"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as y}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const T={component:t,title:"Components/Form/Input/Radio",argTypes:{onChange:{action:"onChange"}},args:{onChange:y()}},n={name:"RadioInput",render:({value:d,...a})=>{const[p,u]=g.useState(d);return m.jsx(t,{...a,value:p,onChange:o=>{var s;u(o.target.value),(s=a.onChange)==null||s.call(a,o)}})},args:{label:"Where are you ?",required:!0,mode:e.classic,value:"paris",classModifier:"",isChecked:!1,readOnly:!1,disabled:!1,name:"placeName",forceDisplayMessage:!0,messageType:c.error,message:"",options:[{label:"Paris",value:"paris"},{label:"Lille",value:"lille"},{label:"Madrid",value:"madrid"}]},argTypes:{onChange:{action:"onChange"},mode:{options:[e.classic,e.default,e.inline,e.card],control:{type:"inline-radio"}},value:{options:["empty","paris","lille","madrid"],mapping:{empty:""},control:{type:"inline-radio"}}}};var r,l,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "RadioInput",
  render: ({
    value,
    ...args
  }) => {
    const [newValue, setValue] = useState(value);
    return <RadioInput {...args} value={newValue} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: "Where are you ?",
    required: true,
    mode: RadioModes.classic,
    value: "paris",
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
      options: [RadioModes.classic, RadioModes.default, RadioModes.inline, RadioModes.card],
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
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const x=["RadioInputStory"];export{n as RadioInputStory,x as __namedExportsOrder,T as default};
