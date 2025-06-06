import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{a as h}from"./Loader-CimcINoe.js";/* empty css              */import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{g as x}from"./generateId-LF6-RKcC.js";import{f as o}from"./index-28pPPJTf.js";const i=({messages:e=[],isVisible:g=!0,title:p="Invalid form",classModifier:f="error",...y})=>{const S=e.filter(a=>!!a);return!e||!g||S.length===0?null:s.jsx(h,{icon:"glyphicon glyphicon-warning-sign",title:p,classModifier:f,...y,children:s.jsx("ul",{className:"af-summary__message-list",children:e.map(a=>s.jsx("li",{className:"af-summary__message-item",children:a},`message_${x({message:a})}`))})})},_={title:"Components/Summary",component:i,argTypes:{classModifier:{options:["success","info","danger","error"],control:{type:"select"}}},args:{onClose:o()}},b=["Field Author is required","Field PlaceName is required"],r={name:"Simple Summary in error",render:e=>s.jsx(i,{...e}),args:{messages:b,isVisible:!0,onClose:o(),classModifier:"error"}},n={name:"Summary in success with react nodes in messages",render:e=>s.jsx(i,{...e}),args:{messages:[s.jsx("strong",{children:"This text is in bold"},"1"),s.jsx("em",{children:"and this one in italic"},"2")],title:"Congratulations on submitting a flawless form",isVisible:!0,onClose:o(),classModifier:"success"}};var t,m,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Simple Summary in error",
  render: args => <Summary {...args} />,
  args: {
    messages,
    isVisible: true,
    onClose: fn(),
    classModifier: "error"
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Summary in success with react nodes in messages",
  render: args => <Summary {...args} />,
  args: {
    messages: [<strong key="1">This text is in bold</strong>, <em key="2">and this one in italic</em>],
    title: "Congratulations on submitting a flawless form",
    isVisible: true,
    onClose: fn(),
    classModifier: "success"
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const j=["Template","Success"],O=Object.freeze(Object.defineProperty({__proto__:null,Success:n,Template:r,__namedExportsOrder:j,default:_},Symbol.toStringTag,{value:"Module"}));export{O as S,r as T,n as a};
