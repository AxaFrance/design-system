import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{v as u,N as f,M as g}from"./CardData-DL7aZVqJ.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as b}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const t=({rightElement:s,...n})=>e.jsx(u,{...n,renderInput:({id:r,classModifier:m,ariaInvalid:d,errorId:c,...p})=>e.jsxs(e.Fragment,{children:[e.jsx(f,{id:r,classModifier:m,"aria-describedby":c,"aria-invalid":d,...p}),s]})}),M=["","required","disabled"],T={component:t,title:"Components/Form/Input/Number",argTypes:{onChange:{action:"onChange"}},args:{onChange:b()}},a={name:"NumberInput",render:({classModifier:s,onChange:n,...r})=>e.jsx(t,{classModifier:s.join(" "),onChange:n,...r}),args:{required:!0,classModifier:[],value:5,placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,message:"",messageType:g.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{classModifier:{options:M,control:{type:"inline-check"}}}};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const O=["NumberInputStory"];export{a as NumberInputStory,O as __namedExportsOrder,T as default};
