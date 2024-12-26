import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{f as t}from"./index-C_FWhylE.js";import{a as r}from"./SliderInput-CA5XZ2N0.js";import{M as m}from"./HelpMessage-B9HNfJNg.js";import"./getComponentClassName-BBtdTm69.js";import"./index-CTjT7uj6.js";import"./toConsumableArray-DStN4ZWv.js";import"./extends-CF3RwP-h.js";const c=["required","disabled"],S={title:"Components/Form/Input/Slider/SliderInput",component:r,args:{onChange:t()}},p=[{label:"64",value:64},{label:"128",value:128},{label:"256",value:256},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096}],e={name:"SliderInput",render:({classModifier:l,...i})=>n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(r,{classModifier:l.join(" "),...i})}),args:{name:"placeName",options:p,id:"uniqueid",value:2048,disabled:!1,className:"",classModifier:[],label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:m.error},argTypes:{classModifier:{options:c,control:{type:"inline-check"}},onChange:{action:"onChange"},onChangeComplete:{action:"onChangeComplete"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "SliderInput",
  render: ({
    classModifier,
    ...args
  }) => <form className="af-form" name="myform">
      <SliderInput classModifier={classModifier.join(" ")} {...args} />
    </form>,
  args: {
    name: "placeName",
    options,
    id: "uniqueid",
    value: 2048,
    disabled: false,
    className: "",
    classModifier: [],
    label: "Your name",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MessageTypes.error
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "inline-check"
      }
    },
    onChange: {
      action: "onChange"
    },
    onChangeComplete: {
      action: "onChangeComplete"
    },
    onBlur: {
      action: "onBlur"
    },
    onFocus: {
      action: "onFocus"
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const I=["SliderInputStory"];export{e as SliderInputStory,I as __namedExportsOrder,S as default};
