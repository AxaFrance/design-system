import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{v as f,M as g}from"./CardData-LgXDUIZL.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{S as M}from"./Slider-BuGxOILi.js";import{f as h}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./toConsumableArray-CZrnpuDP.js";const l=({children:a,name:o,options:t,label:m,...p})=>e.jsx(f,{label:m,...p,renderInput:({id:c,classModifier:d,...u})=>e.jsxs(e.Fragment,{children:[e.jsx(M,{id:c,classModifier:d,name:o,options:t,...u}),a]})}),S=["required","disabled"],D={title:"Components/Form/Input/Slider/SliderInput",component:l,args:{onChange:h()}},y=[{label:"64",value:64},{label:"128",value:128},{label:"256",value:256},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096}],n={name:"SliderInput",render:({classModifier:a,...o})=>e.jsx("form",{className:"af-form",name:"myform",children:e.jsx(l,{classModifier:a.join(" "),...o})}),args:{name:"placeName",options:y,id:"uniqueid",value:2048,disabled:!1,className:"",classModifier:[],label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:g.error},argTypes:{classModifier:{options:S,control:{type:"inline-check"}},onChange:{action:"onChange"},onChangeComplete:{action:"onChangeComplete"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}};var s,r,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const E=["SliderInputStory"];export{n as SliderInputStory,E as __namedExportsOrder,D as default};
