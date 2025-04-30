import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{T as E}from"./CheckboxCardApollo-BPVS6ktD.js";import"./index-DuZrfDUH.js";const v={component:E,title:"Components/Form/Input/TextArea",args:{value:"Placeholder",label:"Label",placeholder:"Placeholder",helper:"1800 caractères maximum.",name:"name",id:"nameid",disabled:!1,required:!1,className:"",buttonLabel:""},argTypes:{onChange:{action:"onChange"}}},s=({onChange:f,...y})=>D.jsx(E,{onChange:f,...y}),e={name:"TextArea",render:s},r={name:"TextArea with description",render:s,args:{description:"Description"}},a={name:"TextArea with button",render:s,args:{buttonLabel:"En savoir plus"}},t={name:"TextArea on error",render:s,args:{classModifier:"error",description:"Description",error:"Error Message"}},o={name:"TextArea disabled",render:s,args:{buttonLabel:"En savoir plus",disabled:!0}};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "TextArea",
  render
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "TextArea with description",
  render,
  args: {
    description: "Description"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "TextArea with button",
  render,
  args: {
    buttonLabel: "En savoir plus"
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var T,b,A;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "TextArea on error",
  render,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message"
  }
}`,...(A=(b=t.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var g,h,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "TextArea disabled",
  render,
  args: {
    buttonLabel: "En savoir plus",
    disabled: true
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const L=["TextAreaStory","TextAreaWithDescriptionStory","TextAreaWithButton","TextAreaOnErrorStory","TextAreaDisabled"],O=Object.freeze(Object.defineProperty({__proto__:null,TextAreaDisabled:o,TextAreaOnErrorStory:t,TextAreaStory:e,TextAreaWithButton:a,TextAreaWithDescriptionStory:r,__namedExportsOrder:L,default:v},Symbol.toStringTag,{value:"Module"}));export{O as T,e as a};
