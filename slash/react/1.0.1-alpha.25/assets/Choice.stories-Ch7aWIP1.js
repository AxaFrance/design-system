import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{f as c}from"./index-C_FWhylE.js";import{C as s}from"./Choice-BRhdZkYB.js";const d={component:s,title:"Components/Form/Input/Choice",argTypes:{onChange:{action:"onChange"}},args:{onChange:c()}},e={name:"Choice",render:({classModifier:n,...i})=>t.jsx(s,{classModifier:n==null?void 0:n.join(" "),...i}),args:{name:"placeName",placeholder:"Paris",id:"uniqueid",classModifier:[],readOnly:!1,disabled:!1},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Choice",
  render: ({
    classModifier,
    ...args
  }) => <Choice classModifier={classModifier?.join(" ")} {...args} />,
  args: {
    name: "placeName",
    placeholder: "Paris",
    id: "uniqueid",
    classModifier: [],
    readOnly: false,
    disabled: false
  },
  argTypes: {
    onChange: {
      action: "onChange"
    },
    classModifier: {
      options: ["disabled", "required"],
      control: {
        type: "inline-check"
      }
    }
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const l=["ChoiceStory"],g=Object.freeze(Object.defineProperty({__proto__:null,ChoiceStory:e,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{g as C,e as a};
