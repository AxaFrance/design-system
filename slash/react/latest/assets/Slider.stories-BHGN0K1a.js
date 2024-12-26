import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{f as t}from"./index-C_FWhylE.js";import{S as l}from"./SliderInput-CA5XZ2N0.js";const c=["required","disabled"],m={title:"Components/Form/Input/Slider",component:l,args:{onChange:t()}},d=[{label:"64",value:64},{label:"128",value:128},{label:"256",value:256},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096}],n={name:"Slider",render:({classModifier:i,...e})=>o.jsxs("form",{className:"af-form",name:"myform",children:[JSON.stringify({a:e.className}),o.jsx(l,{classModifier:i.join(" "),...e})]}),args:{name:"placeName",options:d,id:"uniqueid",value:2048,disabled:!1,classModifier:[]},argTypes:{classModifier:{options:c,control:{type:"inline-check"}},onChange:{action:"onChange"},onChangeComplete:{action:"onChangeComplete"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Slider",
  render: ({
    classModifier,
    ...args
  }) => <form className="af-form" name="myform">
      {JSON.stringify({
      a: args.className
    })}
      <Slider classModifier={classModifier.join(" ")} {...args} />
    </form>,
  args: {
    name: "placeName",
    options,
    id: "uniqueid",
    value: 2048,
    disabled: false,
    classModifier: []
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const u=["SliderStory"],S=Object.freeze(Object.defineProperty({__proto__:null,SliderStory:n,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{S,n as a};
