import{j as c}from"./jsx-runtime-Cw0GR0a5.js";import{f as l}from"./index-C_FWhylE.js";import{T as s}from"./Textarea-CaJXX67o.js";const m=["","required","disabled"],d={component:s,title:"Components/Form/Input/Textarea",argTypes:{onChange:{action:"onChange"}},args:{onChange:l()}},e={name:"Textarea",render:({classModifier:r,onChange:t,...i})=>c.jsx(s,{classModifier:r.join(" "),onChange:t,...i}),args:{classModifier:[],value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",placeholder:"Your comment",name:"comment",id:"commentid",readOnly:!1,disabled:!1,tabIndex:0,autoFocus:!1,className:""},argTypes:{classModifier:{options:m,control:{type:"multi-select"}}}};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Textarea",
  render: ({
    classModifier,
    onChange,
    ...args
  }) => <Textarea classModifier={classModifier.join(" ")} onChange={onChange} {...args} />,
  args: {
    classModifier: [] as string[],
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    placeholder: "Your comment",
    name: "comment",
    id: "commentid",
    readOnly: false,
    disabled: false,
    tabIndex: 0,
    autoFocus: false,
    className: ""
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "multi-select"
      }
    }
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const p=["TextareaStory"],x=Object.freeze(Object.defineProperty({__proto__:null,TextareaStory:e,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{x as T,e as a};
