import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as h,N as I,M}from"./CardData-B32OAxNP.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{H as g}from"./index-DqAI6EUb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./Popover-sESXc_TR.js";const o=({children:r,...s})=>e.jsx(h,{...s,renderInput:({id:p,classModifier:c,ariaInvalid:b,errorId:f,...N})=>e.jsxs(e.Fragment,{children:[e.jsx(I,{id:p,classModifier:c,"aria-describedby":f,"aria-invalid":b,...N}),r]})}),j=["","required","disabled"],E={component:o,title:"Components/Form/Input/Number",args:{required:!0,classModifier:[],value:5,placeholder:"Your name",name:"name",id:"nameid",readOnly:!1,disabled:!1,autoFocus:!1,className:"",label:"Your name",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,message:"",messageType:M.error,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10","aria-disabled":!1},argTypes:{classModifier:{options:j,control:{type:"inline-check"}}}},a={name:"NumberInput",render:({classModifier:r,...s})=>e.jsx(o,{classModifier:r.join(" "),...s})},n={name:"NumberInput with help button",render:({classModifier:r,...s})=>e.jsx(o,{classModifier:r.join(" "),...s,children:e.jsx(g,{mode:"hover",children:"Help"})})};var t,i,m;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "NumberInput",
  render: ({
    classModifier,
    ...args
  }) => <NumberInput classModifier={classModifier.join(" ")} {...args} />
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "NumberInput with help button",
  render: ({
    classModifier,
    ...args
  }) =>
  // Add a button as children to the NumberInput
  <NumberInput classModifier={classModifier.join(" ")} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </NumberInput>
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const O=["NumberInputStory","NumberInputWithChildrenStory"];export{a as NumberInputStory,n as NumberInputWithChildrenStory,O as __namedExportsOrder,E as default};
