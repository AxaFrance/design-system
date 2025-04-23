import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as d}from"./TimelineVerticalLF-CftmzlYV.js";import{r as p}from"./index-DuZrfDUH.js";const u={info:"info",warning:"warning",error:"error",neutral:"neutral"},i=({variant:s="info",title:r,text:m,className:t,...l})=>{const g=p.useMemo(()=>d("af-card-message",t,s),[t,s]);return a.jsxs("div",{...l,className:g,children:[r&&a.jsx("span",{className:"af-card-message--title",children:r}),a.jsx("span",{className:"af-card-message--text",children:m})]})},f={component:i,title:"Components/CardMessage"},e={name:"CardMessage",render:({...s})=>a.jsx(i,{...s}),args:{title:"Title",text:"This is a message"},argTypes:{variant:{options:Object.values(u),control:{type:"select"}}}};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "CardMessage",
  render: ({
    ...args
  }) => <CardMessage {...args} />,
  args: {
    title: "Title",
    text: "This is a message"
  },
  argTypes: {
    variant: {
      options: Object.values(cardMessageVariants),
      control: {
        type: "select"
      }
    }
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const x=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{T as C,e as D};
