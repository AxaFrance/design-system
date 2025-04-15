import{j as L}from"./jsx-runtime-D_zvdyIk.js";import{b as y}from"./MessageLF-BKZq1zw3.js";import"./constants-L7817PZo.js";import"./index-DuZrfDUH.js";import{I as v}from"./ItemLabelLF-BABGW16P.js";import{I as D}from"./ItemMessageCommon-DAm0K00A.js";const E=n=>L.jsx(y,{...n,ItemLabelComponent:v,ItemMessageComponent:D}),M={component:E,title:"Components/Form/Input/TextArea",args:{value:"Lorem ipsum",label:"Label",placeholder:"Placeholder",helper:"Informations complémentaires",name:"name",id:"nameid",disabled:!1,required:!1,className:"",buttonLabel:""},argTypes:{onChange:{action:"onChange"}}},t=({onChange:n,...I})=>L.jsx(E,{onChange:n,...I}),e={name:"TextArea",render:t},r={name:"TextArea with description",render:t,args:{description:"Description"}},a={name:"TextArea on error",render:t,args:{classModifier:"error",description:"Description",error:"Error Message"}},o={name:"TextArea with button",render:t,args:{buttonLabel:"En savoir plus",disabled:!1}},s={args:{value:"Placeholder",label:"Label",placeholder:"Placeholder",helper:"Informations complémentaires",name:"name",id:"nameid",disabled:!0,required:!1,className:"",buttonLabel:"En savoir plus"},name:"TextArea disabled",render:t};var i,l,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "TextArea",
  render
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "TextArea with description",
  render,
  args: {
    description: "Description"
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,b,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "TextArea on error",
  render,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message"
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var T,A,g;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "TextArea with button",
  render,
  args: {
    buttonLabel: "En savoir plus",
    disabled: false
  }
}`,...(g=(A=o.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var h,f,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: "Placeholder",
    label: "Label",
    placeholder: "Placeholder",
    helper: "Informations complémentaires",
    name: "name",
    id: "nameid",
    disabled: true,
    required: false,
    className: "",
    buttonLabel: "En savoir plus"
  },
  name: "TextArea disabled",
  render
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const j=["TextAreaStory","TextAreaWithDescriptionStory","TextAreaOnErrorStory","TextAreaWithButton","TextAreaDisabled"],q=Object.freeze(Object.defineProperty({__proto__:null,TextAreaDisabled:s,TextAreaOnErrorStory:a,TextAreaStory:e,TextAreaWithButton:o,TextAreaWithDescriptionStory:r,__namedExportsOrder:j,default:M},Symbol.toStringTag,{value:"Module"}));export{q as T,e as a};
