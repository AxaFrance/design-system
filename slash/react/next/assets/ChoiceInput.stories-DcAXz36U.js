import{j as t}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{M as d,f as a}from"./CardData-DYdLQljx.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{H as u}from"./index-9W7FGSRq.js";import{f as h}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./Popover-coFJGebL.js";const S={component:a,title:"Components/Form/Input/Choice",args:{name:"placeName",required:!0,label:"Place type",placeholder:"Paris",messageType:d.error,forceDisplayMessage:!1,classNameContainerInput:"col-md-10",classNameContainerLabel:"col-md-2",message:"",id:"uniqueid",classModifier:[],onChange:h(),isVisible:!0,readOnly:!1,disabled:!1,value:void 0},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}},value:{options:[void 0,!0,!1],control:{type:"inline-radio"}}}},o={name:"ChoiceInput",render:({classModifier:e,...n})=>t.jsx(a,{classModifier:e==null?void 0:e.join(" "),...n})},r={name:"ChoiceInput with help button",render:({classModifier:e,...n})=>t.jsx(a,{classModifier:e==null?void 0:e.join(" "),...n,children:t.jsx(u,{mode:"hover",children:"Help"})})};var s,i,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "ChoiceInput",
  render: ({
    classModifier,
    ...args
  }) => <ChoiceInput classModifier={classModifier?.join(" ")} {...args} />
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "ChoiceInput with help button",
  render: ({
    classModifier,
    ...args
  }) => <ChoiceInput classModifier={classModifier?.join(" ")} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </ChoiceInput>
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const M=["ChoiceInputStory","ChoiceInputWithChildrenStory"];export{o as ChoiceInputStory,r as ChoiceInputWithChildrenStory,M as __namedExportsOrder,S as default};
