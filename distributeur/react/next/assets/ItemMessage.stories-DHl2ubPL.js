import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,r as i}from"./iframe-oztetCSC.js";import{S as a,t as o}from"./distributeur-experimental-BztfwzVk.js";var s=t({ItemMessageErrorStory:()=>d,ItemMessageHelpStory:()=>u,ItemMessageSuccessStory:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{o(),r(),c=n(),l=i.meta({title:`Experimental/Form/Atoms/ItemMessage`,component:a,argTypes:{children:{control:`text`},variant:{control:{type:`inline-radio`},options:[void 0,`error`,`success`]}}}),u=l.story({name:`Help Message`,render:({children:e,...t})=>(0,c.jsx)(a,{...t,children:e}),args:{children:`Help message`},argTypes:{}}),d=l.story({name:`Error Message`,render:({children:e,...t})=>(0,c.jsx)(a,{...t,children:e}),args:{variant:`error`,children:`Error message`},argTypes:{}}),f=l.story({name:`Success Message`,render:({children:e,...t})=>(0,c.jsx)(a,{...t,children:e}),args:{variant:`success`,children:`Success message`},argTypes:{}}),p=[`ItemMessageHelpStory`,`ItemMessageErrorStory`,`ItemMessageSuccessStory`],u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Help Message",
  render: ({
    children,
    ...args
  }) => <ItemMessage {...args}>{children}</ItemMessage>,
  args: {
    children: "Help message"
  },
  argTypes: {}
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Error Message",
  render: ({
    children,
    ...args
  }) => <ItemMessage {...args}>{children}</ItemMessage>,
  args: {
    variant: "error",
    children: "Error message"
  },
  argTypes: {}
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Success Message",
  render: ({
    children,
    ...args
  }) => <ItemMessage {...args}>{children}</ItemMessage>,
  args: {
    variant: "success",
    children: "Success message"
  },
  argTypes: {}
})`,...f.input.parameters?.docs?.source}}}})))()}export{m as a,s as i,u as n,f as r,d as t};