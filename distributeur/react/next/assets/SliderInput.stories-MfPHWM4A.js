import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-De-9TtK1.js";import{St as i,Y as a,n as o}from"./distributeur-Ct4qDp97.js";var s,c,l,u,d,f,p,m=e((()=>{o(),n(),s=r(),{fn:c}=__STORYBOOK_MODULE_TEST__,l=[`required`,`disabled`],u=t.type().meta({title:`Components/Form/Input/Slider/SliderInput`,args:{onChange:c()}}),d=[{label:`64`,value:64},{label:`128`,value:128},{label:`256`,value:256},{label:`1024`,value:1024},{label:`2048`,value:2048},{label:`4096`,value:4096}],f=u.story({name:`SliderInput`,render:({classModifier:e,...t})=>(0,s.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,s.jsx)(a,{classModifier:e.join(` `),...t})}),args:{name:`placeName`,options:d,id:`uniqueid`,value:2048,disabled:!1,className:``,classModifier:[],label:`Your name`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!1,messageType:i.error},argTypes:{classModifier:{options:l,control:{type:`inline-check`}},onChange:{action:`onChange`},onChangeComplete:{action:`onChangeComplete`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p=[`SliderInputStory`]}));m();export{f as SliderInputStory,p as __namedExportsOrder,u as default,m as t};