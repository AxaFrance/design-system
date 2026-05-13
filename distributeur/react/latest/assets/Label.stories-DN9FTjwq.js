import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{r as a,t as o}from"./distributeur-experimental-CBCB-5EC.js";var s=t({DefaultStory:()=>u,RequiredStory:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f,p=e((()=>{o(),r(),c=i(),l=n.meta({title:`Experimental/Form/Atoms/Label`,component:a,argTypes:{children:{control:`text`},required:{control:`boolean`}}}),u=l.story({name:`Default`,render:({children:e,...t})=>(0,c.jsx)(a,{...t,children:e}),args:{children:`Label text`,htmlFor:`input-id`}}),d=l.story({name:`Required`,render:({children:e,...t})=>(0,c.jsx)(a,{...t,children:e}),args:{children:`Required field`,htmlFor:`input-id`,required:!0}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Default",
  render: ({
    children,
    ...args
  }) => <Label {...args}>{children}</Label>,
  args: {
    children: "Label text",
    htmlFor: "input-id"
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Required",
  render: ({
    children,
    ...args
  }) => <Label {...args}>{children}</Label>,
  args: {
    children: "Required field",
    htmlFor: "input-id",
    required: true
  }
})`,...d.input.parameters?.docs?.source}}},f=[`DefaultStory`,`RequiredStory`]}));p();export{u as DefaultStory,d as RequiredStory,f as __namedExportsOrder,l as default,p as n,s as t};