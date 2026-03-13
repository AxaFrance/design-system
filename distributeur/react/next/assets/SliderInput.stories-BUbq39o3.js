import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{v as r,M as t}from"./EditorialMessage-CBdb0VIF.js";import"./getClassName-BnhbFbQd.js";import"./index-ZnYipkzV.js";import{f as m}from"./index-VGPHIPc6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";const c=["required","disabled"],S={title:"Components/Form/Input/Slider/SliderInput",component:r,args:{onChange:m()}},p=[{label:"64",value:64},{label:"128",value:128},{label:"256",value:256},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096}],e={name:"SliderInput",render:({classModifier:l,...i})=>n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(r,{classModifier:l.join(" "),...i})}),args:{name:"placeName",options:p,id:"uniqueid",value:2048,disabled:!1,className:"",classModifier:[],label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:t.error},argTypes:{classModifier:{options:c,control:{type:"inline-check"}},onChange:{action:"onChange"},onChangeComplete:{action:"onChangeComplete"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
