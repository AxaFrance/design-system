import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BL8mseS1.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./iframe-CUw-2XJG.js";import{On as o,kn as s,t as c}from"./distributeur-BR8zYeHf.js";import{n as l,t as u}from"./villa-Bz1bQDXT.js";var d=t({RadioStory:()=>h,__namedExportsOrder:()=>g,default:()=>m}),f,p,m,h,g;function _(){return(_=e((()=>{c(),u(),f=n(),i(),p=r(),m=a.type().meta({title:`Components/Form/Input/Radio`,argTypes:{onChange:{action:`onChange`}}}),h=m.story({name:`Radio`,render:({value:e,onChange:t,...n})=>{let[r,i]=(0,f.useState)(e);return(0,p.jsx)(o,{...n,value:r,onChange:e=>{i(e.target.value),t&&t(e)}})},args:{mode:s.classic,orientation:void 0,value:``,required:!1,isChecked:!1,readOnly:!1,disabled:!1,name:`placeName`,options:[{label:`Paris`,value:`paris`,icon:l},{label:`Lille`,value:`lille`,icon:l},{label:`Madrid`,value:`madrid`,icon:l,disabled:!0}]},argTypes:{onChange:{action:`onChange`},mode:{options:Object.values(s),control:{type:`inline-radio`}},orientation:{options:[`horizontal`,`vertical`],control:{type:`inline-radio`}},value:{options:[`empty`,`paris`,`lille`,`madrid`],mapping:{empty:``},control:{type:`inline-radio`}}}}),h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...h.input.parameters?.docs?.source}}},g=[`RadioStory`]})))()}export{d as n,_ as r,h as t};