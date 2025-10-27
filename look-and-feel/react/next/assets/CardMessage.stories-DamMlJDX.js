import{j as a}from"./index-C-iqcyhV.js";import{g as p}from"./ProgressBarCommon-Cz9LA5Bv.js";import"./TimelineVerticalLF-BiHdIieJ.js";import{r as d}from"./index-ZnYipkzV.js";const u={info:"info",warning:"warning",error:"error",neutral:"neutral"},i=({variant:s="info",title:r,text:l,className:t,...m})=>{const g=d.useMemo(()=>p("af-card-message",t,s),[t,s]);return a.jsxs("div",{...m,className:g,children:[r?a.jsx("span",{className:"af-card-message--title",children:r}):null,a.jsx("span",{className:"af-card-message--text",children:l})]})},f={component:i,title:"Components/CardMessage"},e={name:"CardMessage",render:({...s})=>a.jsx(i,{...s}),args:{title:"Title",text:"This is a message"},argTypes:{variant:{options:Object.values(u),control:{type:"select"}}}};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const x=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{y as C,e as D};
