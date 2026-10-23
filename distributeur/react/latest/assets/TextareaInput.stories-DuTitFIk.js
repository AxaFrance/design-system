import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-DBecIi7S.js";import{Un as a,Wt as o,f as s,t as c}from"./distributeur-wY98V-UD.js";var l=t({TextAreaInputWithChildren:()=>m,TextareaInputStory:()=>p,__namedExportsOrder:()=>h,default:()=>f}),u,d,f,p,m,h;function g(){return(g=e((()=>{c(),r(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=i.meta({component:o,title:`Components/Form/Input/Textarea`,argTypes:{onChange:{action:`onChange`}},args:{onChange:d(),label:`Comment`,name:`comment`,id:`TextareaInputId`,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,required:!0,rows:6,cols:60,placeholder:``,helpMessage:`Enter a comment`,messageType:a.error,message:``,forceDisplayMessage:!1,readOnly:!1,disabled:!1,className:``,tabIndex:0,autoFocus:!0}}),p=f.story({name:`TextareaInput`,render:({onChange:e,...t})=>(0,u.jsx)(o,{onChange:e,...t}),args:{}}),m=f.story({name:`TextareaInput with help button`,render:({onChange:e,...t})=>(0,u.jsx)(o,{onChange:e,...t,hasInfobulle:!0,children:(0,u.jsx)(s,{mode:`hover`,children:`Help`})})}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "TextareaInput",
  render: ({
    onChange,
    ...args
  }) => <TextareaInput onChange={onChange} {...args} />,
  args: {}
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "TextareaInput with help button",
  render: ({
    onChange,
    ...args
  }) => <TextareaInput onChange={onChange} {...args} hasInfobulle>
      <HelpButton mode="hover">Help</HelpButton>
    </TextareaInput>
})`,...m.input.parameters?.docs?.source}}},h=[`TextareaInputStory`,`TextAreaInputWithChildren`]})))()}export{l as n,g as r,p as t};