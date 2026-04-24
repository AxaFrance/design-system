import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./LoaderLF-Cgj3ZsA2.js";/* empty css               */import{d}from"./LoaderCommon-DCg8_8er.js";import{r as g}from"./index-CtOEgLBf.js";const u={info:"info",warning:"warning",error:"error",neutral:"neutral"},i=({variant:s="info",title:r,text:m,className:t,...l})=>{const p=g.useMemo(()=>d("af-card-message",t,s),[t,s]);return a.jsxs("div",{...l,className:p,children:[r?a.jsx("span",{className:"af-card-message--title",children:r}):null,a.jsx("span",{className:"af-card-message--text",children:m})]})},f={component:i,title:"Components/CardMessage"},e={name:"CardMessage",render:({...s})=>a.jsx(i,{...s}),args:{title:"Title",text:"This is a message"},argTypes:{variant:{options:Object.values(u),control:{type:"select"}}}};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const x=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{_ as C,e as D};
