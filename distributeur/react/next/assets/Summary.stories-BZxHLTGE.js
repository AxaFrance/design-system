import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-B6pS4pdr.js";import{n as a,p as o}from"./distributeur-DmtDXCQS.js";var s=t({Success:()=>p,Template:()=>f,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m,h=e((()=>{a(),r(),c=i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=n.meta({title:`Components/Summary`,component:o,argTypes:{classModifier:{options:[`success`,`info`,`danger`,`error`],control:{type:`select`}}},args:{onClose:l()}}),d=[`Field Author is required`,`Field PlaceName is required`],f=u.story({name:`Simple Summary in error`,render:e=>(0,c.jsx)(o,{...e}),args:{messages:d,isVisible:!0,onClose:l(),classModifier:`error`}}),p=u.story({name:`Summary in success with react nodes in messages`,render:e=>(0,c.jsx)(o,{...e}),args:{messages:[(0,c.jsx)(`strong`,{children:`This text is in bold`},`1`),(0,c.jsx)(`em`,{children:`and this one in italic`},`2`)],title:`Congratulations on submitting a flawless form`,isVisible:!0,onClose:l(),classModifier:`success`}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Simple Summary in error",
  render: args => <Summary {...args} />,
  args: {
    messages,
    isVisible: true,
    onClose: fn(),
    classModifier: "error"
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Summary in success with react nodes in messages",
  render: args => <Summary {...args} />,
  args: {
    messages: [<strong key="1">This text is in bold</strong>, <em key="2">and this one in italic</em>],
    title: "Congratulations on submitting a flawless form",
    isVisible: true,
    onClose: fn(),
    classModifier: "success"
  }
})`,...p.input.parameters?.docs?.source}}},m=[`Template`,`Success`]}));h();export{p as Success,f as Template,m as __namedExportsOrder,u as default,h as n,s as t};