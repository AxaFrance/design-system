import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-De-9TtK1.js";import{G as i,St as a,n as o,o as s}from"./distributeur-Ct4qDp97.js";var c,l,u,d,f,p,m=e((()=>{o(),n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=t.meta({component:i,title:`Components/Form/Input/Textarea`,argTypes:{onChange:{action:`onChange`}},args:{onChange:l(),label:`Comment`,name:`comment`,id:`TextareaInputId`,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,required:!0,rows:6,cols:60,placeholder:``,helpMessage:`Enter a comment`,messageType:a.error,message:``,forceDisplayMessage:!1,readOnly:!1,disabled:!1,isVisible:!0,classModifier:``,className:``,tabIndex:0,autoFocus:!0}}),d=u.story({name:`TextareaInput`,render:({onChange:e,...t})=>(0,c.jsx)(i,{onChange:e,...t}),args:{}}),f=u.story({name:`TextareaInput with help button`,render:({onChange:e,...t})=>(0,c.jsx)(i,{onChange:e,...t,children:(0,c.jsx)(s,{mode:`hover`,children:`Help`})})}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "TextareaInput",
  render: ({
    onChange,
    ...args
  }) => <TextareaInput onChange={onChange} {...args} />,
  args: {}
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "TextareaInput with help button",
  render: ({
    onChange,
    ...args
  }) => <TextareaInput onChange={onChange} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </TextareaInput>
})`,...f.input.parameters?.docs?.source}}},p=[`TextareaInputStory`,`TextAreaInputWithChildren`]}));m();export{f as TextAreaInputWithChildren,d as TextareaInputStory,p as __namedExportsOrder,u as default,m as t};