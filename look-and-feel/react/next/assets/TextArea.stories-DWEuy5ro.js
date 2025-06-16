import{j as L}from"./jsx-runtime-D_zvdyIk.js";import{T as S}from"./ToggleCommon-DHAoizrE.js";import"./constants-Ml-WVx_L.js";import"./index-DuZrfDUH.js";const v={component:S,title:"Components/Form/Input/TextArea",args:{value:"Lorem ipsum",label:"Label",placeholder:"Placeholder",helper:"Informations complémentaires",name:"name",id:"nameid",disabled:!1,required:!1,className:"",buttonLabel:""},argTypes:{onChange:{action:"onChange"}}},s=({onChange:E,...y})=>L.jsx(S,{onChange:E,...y}),e={name:"TextArea",render:s},r={name:"TextArea with description",render:s,args:{description:"Description"}},a={name:"TextArea on error",render:s,args:{classModifier:"error",description:"Description",error:"Error Message"}},n={name:"TextArea with button",render:s,args:{buttonLabel:"En savoir plus",disabled:!1}},o={args:{value:"Placeholder",label:"Label",placeholder:"Placeholder",helper:"Informations complémentaires",name:"name",id:"nameid",disabled:!0,required:!1,className:"",buttonLabel:"En savoir plus"},name:"TextArea disabled",render:s};var t,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "TextArea",
  render
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "TextArea with description",
  render,
  args: {
    description: "Description"
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "TextArea on error",
  render,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message"
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,T,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "TextArea with button",
  render,
  args: {
    buttonLabel: "En savoir plus",
    disabled: false
  }
}`,...(A=(T=n.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const D=["TextAreaStory","TextAreaWithDescriptionStory","TextAreaOnErrorStory","TextAreaWithButton","TextAreaDisabled"],O=Object.freeze(Object.defineProperty({__proto__:null,TextAreaDisabled:o,TextAreaOnErrorStory:a,TextAreaStory:e,TextAreaWithButton:n,TextAreaWithDescriptionStory:r,__namedExportsOrder:D,default:v},Symbol.toStringTag,{value:"Module"}));export{O as T,e as a};
