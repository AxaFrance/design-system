import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{Et as a,n as o}from"./distributeur-Ct4qDp97.js";var s=t({Button:()=>f,Default:()=>d,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p,m=e((()=>{o(),r(),c=i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=n.meta({title:`Components/Action`,component:a,args:{onClick:l()}}),d=u.story({name:`Action Link`,render:({...e})=>(0,c.jsx)(a,{...e}),args:{href:`http://www.axa.fr`,icon:`link`,title:`Lien de test`,target:`_blank`,id:`id`}}),f=u.story({name:`Action Button`,render:({onClick:e,...t})=>(0,c.jsx)(a,{onClick:e,...t}),args:{icon:`floppy-disk`,title:`Enregistrer`,id:`id`}}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Action Link",
  render: ({
    ...args
  }) => <Action {...args} />,
  args: {
    href: "http://www.axa.fr",
    icon: "link",
    title: "Lien de test",
    target: "_blank",
    id: "id"
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Action Button",
  render: ({
    onClick,
    ...args
  }) => <Action onClick={onClick} {...args} />,
  args: {
    icon: "floppy-disk",
    title: "Enregistrer",
    id: "id"
  }
})`,...f.input.parameters?.docs?.source}}},p=[`Default`,`Button`]}));m();export{f as Button,d as Default,p as __namedExportsOrder,u as default,m as n,s as t};