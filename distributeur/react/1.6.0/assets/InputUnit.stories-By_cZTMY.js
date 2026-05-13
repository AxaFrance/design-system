import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{a,t as o}from"./distributeur-experimental-CBCB-5EC.js";var s=t({DefaultStory:()=>u,PercentageStory:()=>d,TextUnitStory:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p,m=e((()=>{o(),r(),c=i(),l=n.meta({title:`Experimental/Form/Atoms/InputUnit`,component:a,argTypes:{children:{control:`text`}}}),u=l.story({name:`Default`,render:({children:e,...t})=>(0,c.jsx)(a,{...t,children:e}),args:{children:`€`}}),d=l.story({name:`Percentage`,render:({children:e,...t})=>(0,c.jsx)(a,{...t,children:e}),args:{children:`%`}}),f=l.story({name:`Text Unit`,render:({children:e,...t})=>(0,c.jsx)(a,{...t,children:e}),args:{children:`per month`}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Default",
  render: ({
    children,
    ...args
  }) => <InputUnit {...args}>{children}</InputUnit>,
  args: {
    children: "€"
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Percentage",
  render: ({
    children,
    ...args
  }) => <InputUnit {...args}>{children}</InputUnit>,
  args: {
    children: "%"
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Text Unit",
  render: ({
    children,
    ...args
  }) => <InputUnit {...args}>{children}</InputUnit>,
  args: {
    children: "per month"
  }
})`,...f.input.parameters?.docs?.source}}},p=[`DefaultStory`,`PercentageStory`,`TextUnitStory`]}));m();export{u as DefaultStory,d as PercentageStory,f as TextUnitStory,p as __namedExportsOrder,l as default,m as n,s as t};