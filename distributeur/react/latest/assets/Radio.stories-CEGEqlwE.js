import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n,n as r,t as i,w as a}from"./iframe-De-9TtK1.js";import{ht as o,mt as s,n as c}from"./distributeur-Ct4qDp97.js";import{n as l,t as u}from"./villa-DChSwgyV.js";var d,f,p,m,h,g=t((()=>{c(),u(),d=e(n(),1),i(),f=a(),p=r.type().meta({title:`Components/Form/Input/Radio`,argTypes:{onChange:{action:`onChange`}}}),m=p.story({name:`Radio`,render:({classModifier:e,value:t,onChange:n,...r})=>{let[i,a]=(0,d.useState)(t);return(0,f.jsx)(s,{...r,classModifier:e?.join(` `),value:i,onChange:e=>{a(e.target.value),n&&n(e)}})},args:{mode:o.classic,orientation:void 0,value:``,classModifier:[],isChecked:!1,readOnly:!1,disabled:!1,name:`placeName`,options:[{label:`Paris`,value:`paris`,icon:l},{label:`Lille`,value:`lille`,icon:l},{label:`Madrid`,value:`madrid`,icon:l,disabled:!0}]},argTypes:{onChange:{action:`onChange`},mode:{options:Object.values(o),control:{type:`inline-radio`}},orientation:{options:[`horizontal`,`vertical`],control:{type:`inline-radio`}},value:{options:[`empty`,`paris`,`lille`,`madrid`],mapping:{empty:``},control:{type:`inline-radio`}},classModifier:{options:[`disabled`,`required`,`error`],control:{type:`inline-check`}}}}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}},h=[`RadioStory`]}));g();export{m as RadioStory,h as __namedExportsOrder,p as default,g as t};