import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{f as l}from"./index-C_FWhylE.js";import{R as s}from"./RadioItem-BqdDckBA.js";const m={component:s,title:"Components/Form/Input/Radio",argTypes:{onChange:{action:"onChange"}},args:{onChange:l()}},e={name:"RadioItem",render:({classModifier:n,onChange:t,...i})=>d.jsx(s,{classModifier:n==null?void 0:n.join(" "),onChange:t,...i}),args:{label:"Paris",value:"",isChecked:!1,readOnly:!1,disabled:!1,name:"placeName",id:"where-are-you"},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}}}};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "RadioItem",
  render: ({
    classModifier,
    onChange,
    ...args
  }) => <RadioItem classModifier={classModifier?.join(" ")} onChange={onChange} {...args} />,
  args: {
    label: "Paris",
    value: "",
    isChecked: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    id: "where-are-you"
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const c=["RadioItemStory"],h=Object.freeze(Object.defineProperty({__proto__:null,RadioItemStory:e,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{h as R,e as a};
