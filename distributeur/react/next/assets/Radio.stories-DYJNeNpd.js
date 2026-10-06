import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n,n as r,t as i,w as a}from"./iframe-PYnMZM5z.js";import{_t as o,t as s,vt as c}from"./distributeur-BiOr3XFa.js";import{n as l,t as u}from"./villa-DB9Edd5O.js";var d,f,p,m,h,g=t((()=>{s(),u(),d=e(n(),1),i(),f=a(),p=r.type().meta({title:`Components/Form/Input/Radio`,argTypes:{onChange:{action:`onChange`}}}),m=p.story({name:`Radio`,render:({value:e,onChange:t,...n})=>{let[r,i]=(0,d.useState)(e);return(0,f.jsx)(o,{...n,value:r,onChange:e=>{i(e.target.value),t&&t(e)}})},args:{mode:c.classic,orientation:void 0,value:``,required:!1,isChecked:!1,readOnly:!1,disabled:!1,name:`placeName`,options:[{label:`Paris`,value:`paris`,icon:l},{label:`Lille`,value:`lille`,icon:l},{label:`Madrid`,value:`madrid`,icon:l,disabled:!0}]},argTypes:{onChange:{action:`onChange`},mode:{options:Object.values(c),control:{type:`inline-radio`}},orientation:{options:[`horizontal`,`vertical`],control:{type:`inline-radio`}},value:{options:[`empty`,`paris`,`lille`,`madrid`],mapping:{empty:``},control:{type:`inline-radio`}}}}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Radio",
  render: ({
    value: initValue,
    onChange,
    ...args
  }) => {
    const [value, setValue] = useState(initValue);
    return <Radio {...args} value={value} onChange={e => {
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
    required: false,
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
    }
  }
})`,...m.input.parameters?.docs?.source}}},h=[`RadioStory`]}));g();export{m as RadioStory,h as __namedExportsOrder,p as default,g as t};