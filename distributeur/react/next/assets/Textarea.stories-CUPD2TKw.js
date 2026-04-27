import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{x as r}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";import{fn as c}from"./index-CH2Su9EI.js";const m=["","required","disabled"],d={component:r,title:"Components/Form/Input/Textarea",argTypes:{onChange:{action:"onChange"}},args:{onChange:c()}},e={name:"Textarea",render:({classModifier:s,onChange:t,...i})=>l.jsx(r,{classModifier:s.join(" "),onChange:t,...i}),args:{classModifier:[],value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",placeholder:"Your comment",name:"comment",id:"TextareaStoryId",readOnly:!1,disabled:!1,tabIndex:0,autoFocus:!1,className:""},argTypes:{classModifier:{options:m,control:{type:"multi-select"}}}};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    id: "TextareaStoryId",
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["TextareaStory"],y=Object.freeze(Object.defineProperty({__proto__:null,TextareaStory:e,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{y as T,e as a};
