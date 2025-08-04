import{j as r}from"./index-C1mcBe1y.js";import{D as w,j as h,h as y}from"./DropdownCommon-D4v7v8fJ.js";import"./constants-NM_6GOSE.js";import"./index-DbaA8R3S.js";const b=a=>r.jsx(w,{...a,ItemLabelComponent:y,ItemMessageComponent:h}),S={component:b,title:"Components/Form/Input/Dropdown",args:{value:"Lorem ipsum",description:"Description",label:"Label",disabled:!1,required:!0,placeholder:"Placeholder",buttonLabel:"En savoir plus",error:"",helper:"Information complémentaires"},argTypes:{onChange:{action:"onChange"}}},s=({onChange:a,...g})=>r.jsx("div",{style:{width:300},children:r.jsxs(b,{onChange:a,...g,children:[r.jsx("option",{value:"fun",children:"For fun"}),r.jsx("option",{value:"work",children:"For work"}),r.jsx("option",{value:"drink",children:"For drink"})]})}),e={name:"Dropdown",render:s},o={name:"Dropdown with Error",render:s,args:{error:"Titre du Message"},argTypes:{"aria-errormessage":{control:{type:"select"}}}},n={name:"Dropdown disabled",render:s,args:{label:"Label",description:"Description",disabled:!0,helper:"Information complémentaire"}};var t,p,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Dropdown",
  render
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(D=(u=n.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};const f=["DropdownStory","DropdownErrorStory","DropdownDisabledStory"],E=Object.freeze(Object.defineProperty({__proto__:null,DropdownDisabledStory:n,DropdownErrorStory:o,DropdownStory:e,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{E as D,e as a,o as b,n as c};
