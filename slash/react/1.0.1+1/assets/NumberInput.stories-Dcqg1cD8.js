import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{f as t}from"./index-C_FWhylE.js";import{M as p}from"./HelpMessage-Dma0IcN4.js";import"./index-CCQ3W5xA.js";import"./index-CTjT7uj6.js";import{N as r}from"./NumberInput-Npp7rSr4.js";import"./getComponentClassName-C7V7Z2-u.js";/* empty css                 */import"./useInputClassModifier-B4SXY78l.js";import"./Number-WwFhZtHt.js";/* empty css             */const d=["","required","disabled"],T={component:r,title:"Components/Form/Input/Number",argTypes:{onChange:{action:"onChange"}},args:{onChange:t()}},e={name:"NumberInput",render:({classModifier:o,onChange:i,...l})=>m.jsx(r,{classModifier:o.join(" "),onChange:i,...l}),args:{required:!0,classModifier:[],value:5,placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:p.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{classModifier:{options:d,control:{type:"inline-check"}}}};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const j=["NumberInputStory"];export{e as NumberInputStory,j as __namedExportsOrder,T as default};