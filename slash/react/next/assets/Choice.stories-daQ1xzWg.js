import{j as t}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{d as i}from"./Loader-DdGl5Gfc.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as l}from"./index-28pPPJTf.js";const c={component:i,title:"Components/Form/Input/Choice",argTypes:{onChange:{action:"onChange"}},args:{onChange:l()}},e={name:"Choice",render:({classModifier:n,...s})=>t.jsx(i,{classModifier:n==null?void 0:n.join(" "),...s}),args:{name:"placeName",placeholder:"Paris",id:"uniqueid",classModifier:[],readOnly:!1,disabled:!1,value:!1},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}},value:{options:[void 0,!0,!1],control:{type:"inline-radio"}}}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
    disabled: false,
    value: false
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
    },
    value: {
      options: [undefined, true, false],
      control: {
        type: "inline-radio"
      }
    }
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const d=["ChoiceStory"],C=Object.freeze(Object.defineProperty({__proto__:null,ChoiceStory:e,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{C,e as a};
