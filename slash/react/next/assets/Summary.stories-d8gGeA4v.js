import{j as s}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import"./Loader-CmhshmuS.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{M as x}from"./Message-CHU1J-ui.js";import{g as _}from"./generateId-LF6-RKcC.js";import{f as o}from"./index-28pPPJTf.js";const i=({messages:e=[],isVisible:p=!0,title:f="Invalid form",classModifier:t="error",...y})=>{const S=e.filter(a=>!!a);if(!e||!p||S.length===0)return null;const h=t==="danger"?"warning":t;return s.jsx(x,{icon:"glyphicon glyphicon-warning-sign",title:f,variant:h,...y,children:s.jsx("ul",{className:"af-summary__message-list",children:e.map(a=>s.jsx("li",{className:"af-summary__message-item",children:a},`message_${_({message:a})}`))})})},b={title:"Components/Summary",component:i,argTypes:{classModifier:{options:["success","info","danger","error"],control:{type:"select"}}},args:{onClose:o()}},j=["Field Author is required","Field PlaceName is required"],r={name:"Simple Summary in error",render:e=>s.jsx(i,{...e}),args:{messages:j,isVisible:!0,onClose:o(),classModifier:"error"}},n={name:"Summary in success with react nodes in messages",render:e=>s.jsx(i,{...e}),args:{messages:[s.jsx("strong",{children:"This text is in bold"},"1"),s.jsx("em",{children:"and this one in italic"},"2")],title:"Congratulations on submitting a flawless form",isVisible:!0,onClose:o(),classModifier:"success"}};var m,l,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Simple Summary in error",
  render: args => <Summary {...args} />,
  args: {
    messages,
    isVisible: true,
    onClose: fn(),
    classModifier: "error"
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,g,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Summary in success with react nodes in messages",
  render: args => <Summary {...args} />,
  args: {
    messages: [<strong key="1">This text is in bold</strong>, <em key="2">and this one in italic</em>],
    title: "Congratulations on submitting a flawless form",
    isVisible: true,
    onClose: fn(),
    classModifier: "success"
  }
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const C=["Template","Success"],q=Object.freeze(Object.defineProperty({__proto__:null,Success:n,Template:r,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{q as S,r as T,n as a};
