import{j as s}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{u as E,v as O,w as S,x as D,N as L,H as Y,M as _}from"./Loader-C6nTMx6t.js";import{r as c}from"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as q}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const g=({message:e,children:a,helpMessage:r,id:I,label:M,classNameContainerLabel:b,classNameContainerInput:N,forceDisplayMessage:i,messageType:o,isVisible:y,className:C,disabled:l=!1,classModifier:h="",required:x,...j})=>{const F=c.useId(),t=c.useId(),d=I??F,{inputClassModifier:T,inputFieldClassModifier:m}=S(h,l,!!a,x),v=E(e,i,o);return s.jsxs(O,{label:M,id:d,message:e,messageType:o,isVisible:y,forceDisplayMessage:i,className:C,classModifier:m,classNameContainerLabel:b,classNameContainerInput:N,errorId:t,children:[s.jsxs(D,{className:"af-form__text",classModifier:m,children:[s.jsx(L,{id:d,classModifier:T,disabled:l,"aria-describedby":t,"aria-invalid":v,...j}),a]}),s.jsx(Y,{message:r,isVisible:!e})]})},A=["","required","disabled"],G={component:g,title:"Components/Form/Input/Number",argTypes:{onChange:{action:"onChange"}},args:{onChange:q()}},n={name:"NumberInput",render:({classModifier:e,onChange:a,...r})=>s.jsx(g,{classModifier:e.join(" "),onChange:a,...r}),args:{required:!0,classModifier:[],value:5,placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,message:"",messageType:_.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{classModifier:{options:A,control:{type:"inline-check"}}}};var p,u,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const J=["NumberInputStory"];export{n as NumberInputStory,J as __namedExportsOrder,G as default};
