import{j as l}from"./jsx-runtime-Cw0GR0a5.js";import{f as c}from"./index-C_FWhylE.js";import{T as a}from"./Text-BENtgf5_.js";import{i as p}from"./inputTypes-yk8eVPCn.js";const d=["","required","disabled"],m={component:a,title:"Components/Form/Input/Text",argTypes:{onChange:{action:"onChange"}},args:{onChange:c()}},e={name:"Text",render:({classModifier:t,onChange:r,...i})=>l.jsx(a,{classModifier:t.join(" "),onChange:r,...i}),args:{classModifier:[],value:"John Doe",placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",type:"text"},argTypes:{classModifier:{options:d,control:{type:"multi-select"}},type:{options:p,control:{type:"select"}}}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const f=["TextStory"],x=Object.freeze(Object.defineProperty({__proto__:null,TextStory:e,__namedExportsOrder:f,default:m},Symbol.toStringTag,{value:"Module"}));export{x as T,e as a};
