import{j as s}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import"./CardData-B-EetlV8.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{M as x}from"./Message--8wl97yk.js";import{g as _}from"./generateId-LF6-RKcC.js";import{f as o}from"./index-VGPHIPc6.js";const i=({messages:e=[],isVisible:p=!0,title:f="Invalid form",classModifier:t="error",...S})=>{const y=e.filter(n=>!!n);if(!e||!p||y.length===0)return null;const h=t==="danger"?"warning":t;return s.jsx(x,{title:f,variant:h,...S,children:s.jsx("ul",{className:"af-summary__message-list",children:e.map(n=>s.jsx("li",{className:"af-summary__message-item",children:n},`message_${_({message:n})}`))})})},b={title:"Components/Summary",component:i,argTypes:{classModifier:{options:["success","info","danger","error"],control:{type:"select"}}},args:{onClose:o()}},j=["Field Author is required","Field PlaceName is required"],r={name:"Simple Summary in error",render:e=>s.jsx(i,{...e}),args:{messages:j,isVisible:!0,onClose:o(),classModifier:"error"}},a={name:"Summary in success with react nodes in messages",render:e=>s.jsx(i,{...e}),args:{messages:[s.jsx("strong",{children:"This text is in bold"},"1"),s.jsx("em",{children:"and this one in italic"},"2")],title:"Congratulations on submitting a flawless form",isVisible:!0,onClose:o(),classModifier:"success"}};var m,l,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Simple Summary in error",
  render: args => <Summary {...args} />,
  args: {
    messages,
    isVisible: true,
    onClose: fn(),
    classModifier: "error"
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,d,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Summary in success with react nodes in messages",
  render: args => <Summary {...args} />,
  args: {
    messages: [<strong key="1">This text is in bold</strong>, <em key="2">and this one in italic</em>],
    title: "Congratulations on submitting a flawless form",
    isVisible: true,
    onClose: fn(),
    classModifier: "success"
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const C=["Template","Success"],q=Object.freeze(Object.defineProperty({__proto__:null,Success:a,Template:r,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{q as S,r as T,a};
