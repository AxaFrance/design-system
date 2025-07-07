import{j as r}from"./index-DK-fRI8B.js";import{D as b,g as h,f as y}from"./DropdownCommon-BzkJySau.js";import"./index-DbaA8R3S.js";const g=a=>r.jsx(b,{...a,ItemLabelComponent:y,ItemMessageComponent:h}),f={component:g,title:"Components/Form/Dropdown/Dropdown",args:{value:"Lorem ipsum",description:"Description",label:"Label",disabled:!1,required:!0,placeholder:"Placeholder",buttonLabel:"En savoir plus",error:"",helper:"Information complémentaires"},argTypes:{onChange:{action:"onChange"}}},s=({onChange:a,...w})=>r.jsx("div",{style:{width:300},children:r.jsxs(g,{onChange:a,...w,children:[r.jsx("option",{value:"fun",children:"For fun"}),r.jsx("option",{value:"work",children:"For work"}),r.jsx("option",{value:"drink",children:"For drink"})]})}),e={name:"Dropdown",render:s},o={name:"Dropdown with Error",render:s,args:{error:"Titre du Message"},argTypes:{"aria-errormessage":{control:{type:"select"}}}},n={name:"Dropdown disabled",render:s,args:{label:"Label",description:"Description",disabled:!0,helper:"Information complémentaire"}};var t,d,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Dropdown",
  render
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Dropdown with Error",
  render,
  args: {
    error: "Titre du Message"
  },
  argTypes: {
    "aria-errormessage": {
      control: {
        type: "select"
      }
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,u,D;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Dropdown disabled",
  render,
  args: {
    label: "Label",
    description: "Description",
    disabled: true,
    helper: "Information complémentaire"
  }
}`,...(D=(u=n.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};const S=["DropdownStory","DropdownErrorStory","DropdownDisabledStory"],E=Object.freeze(Object.defineProperty({__proto__:null,DropdownDisabledStory:n,DropdownErrorStory:o,DropdownStory:e,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{E as D,e as a,o as b,n as c};
