import{j as v}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{R as d,h as r}from"./Loader-SN7sVp7s.js";import{r as g}from"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f}from"./index-28pPPJTf.js";import{v as a}from"./villa-BhFUGjo6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const O={component:d,title:"Components/Form/Input/Radio",argTypes:{onChange:{action:"onChange"}},args:{onChange:f()}},n={name:"Radio",render:({classModifier:e,value:p,onChange:o,...c})=>{const[m,u]=g.useState(p);return v.jsx(d,{...c,classModifier:e==null?void 0:e.join(" "),value:m,onChange:i=>{u(i.target.value),o&&o(i)}})},args:{mode:r.classic,orientation:void 0,value:"",classModifier:[],isChecked:!1,readOnly:!1,disabled:!1,name:"placeName",options:[{label:"Paris",value:"paris",icon:a},{label:"Lille",value:"lille",icon:a},{label:"Madrid",value:"madrid",icon:a,disabled:!0}]},argTypes:{onChange:{action:"onChange"},mode:{options:Object.values(r),control:{type:"inline-radio"}},orientation:{options:["horizontal","vertical"],control:{type:"inline-radio"}},value:{options:["empty","paris","lille","madrid"],mapping:{empty:""},control:{type:"inline-radio"}},classModifier:{options:["disabled","required","error"],control:{type:"inline-check"}}}};var l,t,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Radio",
  render: ({
    classModifier,
    value: initValue,
    onChange,
    ...args
  }) => {
    const [value, setValue] = useState(initValue);
    return <Radio {...args} classModifier={classModifier?.join(" ")} value={value} onChange={e => {
      setValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    }} />;
  },
  args: {
    mode: RadioModes.classic,
    orientation: undefined,
    value: "",
    classModifier: [],
    isChecked: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    options: [{
      label: "Paris",
      value: "paris",
      icon: villaIcon
    }, {
      label: "Lille",
      value: "lille",
      icon: villaIcon
    }, {
      label: "Madrid",
      value: "madrid",
      icon: villaIcon,
      disabled: true
    }]
  },
  argTypes: {
    onChange: {
      action: "onChange"
    },
    mode: {
      options: Object.values(RadioModes),
      control: {
        type: "inline-radio"
      }
    },
    orientation: {
      options: ["horizontal", "vertical"],
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
      options: ["disabled", "required", "error"],
      control: {
        type: "inline-check"
      }
    }
  }
}`,...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const S=["RadioStory"];export{n as RadioStory,S as __namedExportsOrder,O as default};
