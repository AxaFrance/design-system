import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{h as d}from"./FormLayout-Dpb6mS7Y.js";/* empty css               */import{r as g}from"./index-ZnYipkzV.js";const u={info:"info",warning:"warning",error:"error",neutral:"neutral"},i=({variant:s="info",title:r,text:l,className:t,...m})=>{const p=g.useMemo(()=>d("af-card-message",t,s),[t,s]);return a.jsxs("div",{...m,className:p,children:[r?a.jsx("span",{className:"af-card-message--title",children:r}):null,a.jsx("span",{className:"af-card-message--text",children:l})]})},f={component:i,title:"Components/CardMessage"},e={name:"CardMessage",render:({...s})=>a.jsx(i,{...s}),args:{title:"Title",text:"This is a message"},argTypes:{variant:{options:Object.values(u),control:{type:"select"}}}};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const x=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{h as C,e as D};
