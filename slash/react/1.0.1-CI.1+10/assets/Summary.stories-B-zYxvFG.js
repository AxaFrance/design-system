import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{f as o}from"./index-C_FWhylE.js";import{S as a}from"./index-12yj6lRe.js";const d={title:"Components/Summary",component:a,argTypes:{classModifier:{options:["success","info","danger","error"],control:{type:"select"}}},args:{onClose:o()}},g=["Field Author is required","Field PlaceName is required"],e={name:"Simple Summary in error",render:n=>r.jsx(a,{...n}),args:{messages:g,isVisible:!0,onClose:o(),classModifier:"error"}},s={name:"Summary in success with react nodes in messages",render:n=>r.jsx(a,{...n}),args:{messages:[r.jsx("strong",{children:"This text is in bold"},"1"),r.jsx("em",{children:"and this one in italic"},"2")],title:"Congratulations on submitting a flawless form",isVisible:!0,onClose:o(),classModifier:"success"}};var i,t,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Simple Summary in error",
  render: args => <Summary {...args} />,
  args: {
    messages,
    isVisible: true,
    onClose: fn(),
    classModifier: "error"
  }
}`,...(m=(t=e.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Summary in success with react nodes in messages",
  render: args => <Summary {...args} />,
  args: {
    messages: [<strong key="1">This text is in bold</strong>, <em key="2">and this one in italic</em>],
    title: "Congratulations on submitting a flawless form",
    isVisible: true,
    onClose: fn(),
    classModifier: "success"
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const p=["Template","Success"],b=Object.freeze(Object.defineProperty({__proto__:null,Success:s,Template:e,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{b as S,e as T,s as a};
