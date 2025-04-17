import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as l}from"./MessageLF-Czj-naCN.js";import"./constants-uyijA-ls.js";import{r as p}from"./index-DuZrfDUH.js";const i=({className:s,classModifier:n})=>{const d=p.useMemo(()=>l("af-divider",s,n),[s,n]);return e.jsx("hr",{className:d})},c={title:"Components/Divider",component:i},r={name:"Divider",render:s=>e.jsxs("div",{children:[e.jsx("span",{children:"Hello"}),e.jsx(i,{...s})," ",e.jsx("span",{children:"world!"})]}),args:{classModifier:" "},argTypes:{classModifier:{control:{type:"text"},defaultValue:" "}}};var o,a,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Divider",
  render: args => <div>
      <span>Hello</span>
      <Divider {...args} /> <span>world!</span>
    </div>,
  args: {
    classModifier: " "
  },
  argTypes: {
    classModifier: {
      control: {
        type: "text"
      },
      defaultValue: " "
    }
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const m=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{v as D,r as a};
