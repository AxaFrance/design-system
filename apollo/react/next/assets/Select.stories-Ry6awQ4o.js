import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as h}from"./MessageApollo-CzAv0xVZ.js";import"./index-DuZrfDUH.js";import{I as y}from"./ItemLabelApollo-Bk4Ifcq8.js";import{I as f}from"./ItemMessageCommon-nQokCGjg.js";const g=t=>e.jsx(h,{...t,ItemLabelComponent:y,ItemMessageComponent:f}),j={component:g,title:"Components/Form/Select/Select",args:{value:"Lorem ipsum",label:"Label",disabled:!1,required:!1,placeholder:"Placeholder",errorLabel:""},argTypes:{onChange:{action:"onChange"}}},s=({onChange:t,...b})=>e.jsx("div",{style:{width:300},children:e.jsxs(g,{onChange:t,...b,children:[e.jsx("option",{value:"fun",children:"For fun"}),e.jsx("option",{value:"work",children:"For work"}),e.jsx("option",{value:"drink",children:"For drink"})]})}),r={name:"Select",render:s},o={name:"Select with Error",render:s,args:{error:"Titre du Message"},argTypes:{"aria-errormessage":{control:{type:"select"}}}},a={name:"Select disabled",render:s,args:{label:"Label",description:"Description",disabled:!0,helper:"Information complémentaire"}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Select",
  render
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,m,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Select with Error",
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,S,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Select disabled",
  render,
  args: {
    label: "Label",
    description: "Description",
    disabled: true,
    helper: "Information complémentaire"
  }
}`,...(u=(S=a.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const x=["SelectStory","SelectErrorStory","SelectDisabledStory"],_=Object.freeze(Object.defineProperty({__proto__:null,SelectDisabledStory:a,SelectErrorStory:o,SelectStory:r,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{_ as S,r as a,o as b,a as c};
