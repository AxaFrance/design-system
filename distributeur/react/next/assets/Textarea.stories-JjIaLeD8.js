import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{n as r}from"./CardData-HcEAgEId.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{f as c}from"./index-VGPHIPc6.js";const m=["","required","disabled"],d={component:r,title:"Components/Form/Input/Textarea",argTypes:{onChange:{action:"onChange"}},args:{onChange:c()}},e={name:"Textarea",render:({classModifier:s,onChange:t,...i})=>l.jsx(r,{classModifier:s.join(" "),onChange:t,...i}),args:{classModifier:[],value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",placeholder:"Your comment",name:"comment",id:"TextareaStoryId",readOnly:!1,disabled:!1,tabIndex:0,autoFocus:!1,className:""},argTypes:{classModifier:{options:m,control:{type:"multi-select"}}}};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
