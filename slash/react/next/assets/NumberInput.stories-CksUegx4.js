import{j as e}from"./index-DK-fRI8B.js";/* empty css              */import{L as F,u as T,v as D,N as E,H as L,M as O}from"./Loader-D6y4K9Ud.js";import{r as S}from"./index-DbaA8R3S.js";import{f as Y}from"./index-C2cC0QQF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const c=({message:s,children:a,helpMessage:r,id:p,label:u,classNameContainerLabel:f,classNameContainerInput:g,forceDisplayMessage:M,messageType:b,isVisible:I,className:N,disabled:o=!1,classModifier:y="",required:C,...h})=>{const x=S.useId(),i=p??x,{inputClassModifier:j,inputFieldClassModifier:l}=T(y,o,!!a,C);return e.jsxs(F,{label:u,id:i,message:s,messageType:b,isVisible:I,forceDisplayMessage:M,className:N,classModifier:l,classNameContainerLabel:f,classNameContainerInput:g,children:[e.jsxs(D,{className:"af-form__text",classModifier:l,children:[e.jsx(E,{id:i,classModifier:j,disabled:o,...h}),a]}),e.jsx(L,{message:r,isVisible:!s})]})},_=["","required","disabled"],B={component:c,title:"Components/Form/Input/Number",argTypes:{onChange:{action:"onChange"}},args:{onChange:Y()}},n={name:"NumberInput",render:({classModifier:s,onChange:a,...r})=>e.jsx(c,{classModifier:s.join(" "),onChange:a,...r}),args:{required:!0,classModifier:[],value:5,placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,message:"",messageType:O.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{classModifier:{options:_,control:{type:"inline-check"}}}};var t,m,d;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "NumberInput",
  render: ({
    classModifier,
    onChange,
    ...args
  }) => <NumberInput classModifier={classModifier.join(" ")} onChange={onChange} {...args} />,
  args: {
    required: true,
    classModifier: [] as string[],
    value: 5,
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    label: "Your name",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    message: "",
    messageType: MessageTypes.error,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "inline-check"
      }
    }
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const U=["NumberInputStory"];export{n as NumberInputStory,U as __namedExportsOrder,B as default};
