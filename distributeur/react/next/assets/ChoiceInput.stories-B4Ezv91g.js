import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{M as d,f as a}from"./CardData-ma-i57UJ.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{H as u}from"./index-B6RKP-7c.js";import{f as h}from"./index-VGPHIPc6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./Popover-wBIxYm2z.js";const H={component:a,title:"Components/Form/Input/Choice",args:{name:"placeName",required:!0,label:"Place type",placeholder:"Paris",messageType:d.error,forceDisplayMessage:!1,classNameContainerInput:"col-md-10",classNameContainerLabel:"col-md-2",message:"",id:"uniqueid",classModifier:[],onChange:h(),isVisible:!0,readOnly:!1,disabled:!1,value:void 0},argTypes:{onChange:{action:"onChange"},classModifier:{options:["disabled","required"],control:{type:"inline-check"}},value:{options:[void 0,!0,!1],control:{type:"inline-radio"}}}},o={name:"ChoiceInput",render:({classModifier:e,...n})=>t.jsx(a,{classModifier:e==null?void 0:e.join(" "),...n})},r={name:"ChoiceInput with help button",render:({classModifier:e,...n})=>t.jsx(a,{classModifier:e==null?void 0:e.join(" "),...n,children:t.jsx(u,{mode:"hover",children:"Help"})})};var s,i,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const S=["ChoiceInputStory","ChoiceInputWithChildrenStory"];export{o as ChoiceInputStory,r as ChoiceInputWithChildrenStory,S as __namedExportsOrder,H as default};
