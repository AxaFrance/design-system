import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{v as S,H as x,M as j}from"./Loader-D5xiBZCh.js";/* empty css              */import{r as l}from"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{S as v}from"./Slider-C3hDXXdF.js";import{f as N}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./toConsumableArray-CZrnpuDP.js";const p=({id:e,children:s,helpMessage:d,message:o,classNameContainerLabel:u,classNameContainerInput:f,label:g,messageType:M,isVisible:y,forceDisplayMessage:C,className:I,classModifier:r,...b})=>{const i=l.useId(),h=l.useMemo(()=>e||i,[i,e]);return n.jsxs(S,{id:h,label:g,message:o,messageType:M,isVisible:y,forceDisplayMessage:C,className:I,classModifier:r,classNameContainerLabel:u,classNameContainerInput:f,children:[n.jsx(v,{...b,id:e,classModifier:r}),s,n.jsx(x,{message:d,isVisible:!o})]})},F=["required","disabled"],V={title:"Components/Form/Input/Slider/SliderInput",component:p,args:{onChange:N()}},T=[{label:"64",value:64},{label:"128",value:128},{label:"256",value:256},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096}],a={name:"SliderInput",render:({classModifier:e,...s})=>n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(p,{classModifier:e.join(" "),...s})}),args:{name:"placeName",options:T,id:"uniqueid",value:2048,disabled:!1,className:"",classModifier:[],label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:j.error},argTypes:{classModifier:{options:F,control:{type:"inline-check"}},onChange:{action:"onChange"},onChangeComplete:{action:"onChangeComplete"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}};var t,m,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Y=["SliderInputStory"];export{a as SliderInputStory,Y as __namedExportsOrder,V as default};
