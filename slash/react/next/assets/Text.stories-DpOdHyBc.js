import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./Loader-C1uJHYLx.js";/* empty css              */import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as p}from"./index-28pPPJTf.js";import{i as c}from"./inputTypes-yk8eVPCn.js";const m=["","required","disabled"],d={component:a,title:"Components/Form/Input/Text",argTypes:{onChange:{action:"onChange"}},args:{onChange:p()}},e={name:"Text",render:({classModifier:t,onChange:r,...i})=>l.jsx(a,{classModifier:t.join(" "),onChange:r,...i}),args:{classModifier:[],value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",type:"text"},argTypes:{classModifier:{options:m,control:{type:"multi-select"}},type:{options:c,control:{type:"select"}}}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Text",
  render: ({
    classModifier,
    onChange,
    ...args
  }) => <Text classModifier={classModifier.join(" ")} onChange={onChange} {...args} />,
  args: {
    classModifier: [] as string[],
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text"
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "multi-select"
      }
    },
    type: {
      options: inputTypes,
      control: {
        type: "select"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const f=["TextStory"],S=Object.freeze(Object.defineProperty({__proto__:null,TextStory:e,__namedExportsOrder:f,default:d},Symbol.toStringTag,{value:"Module"}));export{S as T,e as a};
