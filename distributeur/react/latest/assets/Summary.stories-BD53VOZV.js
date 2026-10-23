import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-DBecIi7S.js";import{O as a,t as o}from"./distributeur-wY98V-UD.js";var s=t({Success:()=>p,Template:()=>f,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),r(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=i.meta({title:`Components/Summary`,component:a,argTypes:{className:{options:[`success`,`info`,`danger`,`error`],control:{type:`select`}}},args:{onClose:l()}}),d=[`Field Author is required`,`Field PlaceName is required`],f=u.story({name:`Simple Summary in error`,render:e=>(0,c.jsx)(a,{...e}),args:{messages:d,isVisible:!0,onClose:l(),className:`error`}}),p=u.story({name:`Summary in success with react nodes in messages`,render:e=>(0,c.jsx)(a,{...e}),args:{messages:[(0,c.jsx)(`strong`,{children:`This text is in bold`},`1`),(0,c.jsx)(`em`,{children:`and this one in italic`},`2`)],title:`Congratulations on submitting a flawless form`,isVisible:!0,onClose:l(),className:`success`}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Simple Summary in error",
  render: args => <Summary {...args} />,
  args: {
    messages,
    isVisible: true,
    onClose: fn(),
    className: "error"
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Summary in success with react nodes in messages",
  render: args => <Summary {...args} />,
  args: {
    messages: [<strong key="1">This text is in bold</strong>, <em key="2">and this one in italic</em>],
    title: "Congratulations on submitting a flawless form",
    isVisible: true,
    onClose: fn(),
    className: "success"
  }
})`,...p.input.parameters?.docs?.source}}},m=[`Template`,`Success`]})))()}export{h as i,s as n,f as r,p as t};