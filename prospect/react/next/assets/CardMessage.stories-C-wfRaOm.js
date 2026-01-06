import{j as a}from"./index-C-iqcyhV.js";import{j as g}from"./LevelSelectorApollo-4whOpfvb.js";import{r as p}from"./index-ZnYipkzV.js";const u={info:"info",warning:"warning",error:"error",neutral:"neutral"},i=({variant:s="info",title:r,text:l,className:t,...m})=>{const d=p.useMemo(()=>g("af-card-message",t,s),[t,s]);return a.jsxs("div",{...m,className:d,children:[r?a.jsx("span",{className:"af-card-message--title",children:r}):null,a.jsx("span",{className:"af-card-message--text",children:l})]})},f={component:i,title:"Components/CardMessage"},e={name:"CardMessage",render:({...s})=>a.jsx(i,{...s}),args:{title:"Title",text:"This is a message"},argTypes:{variant:{options:Object.values(u),control:{type:"select"}}}};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
