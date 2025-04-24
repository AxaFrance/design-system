import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{b as L}from"./TimelineVerticalApollo-CgK76z1b.js";import"./index-DuZrfDUH.js";import{I}from"./ItemLabelApollo-CvczpiNC.js";import{I as M}from"./ItemMessageCommon-tW9wGOBH.js";const y=n=>E.jsx(L,{...n,ItemLabelComponent:I,ItemMessageComponent:M}),j={component:y,title:"Components/Form/Input/TextArea",args:{value:"Placeholder",label:"Label",placeholder:"Placeholder",helper:"1800 caractères maximum.",name:"name",id:"nameid",disabled:!1,required:!1,className:"",buttonLabel:""},argTypes:{onChange:{action:"onChange"}}},s=({onChange:n,...D})=>E.jsx(y,{onChange:n,...D}),e={name:"TextArea",render:s},r={name:"TextArea with description",render:s,args:{description:"Description"}},a={name:"TextArea with button",render:s,args:{buttonLabel:"En savoir plus"}},t={name:"TextArea on error",render:s,args:{classModifier:"error",description:"Description",error:"Error Message"}},o={name:"TextArea disabled",render:s,args:{buttonLabel:"En savoir plus",disabled:!0}};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "TextArea",
  render
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "TextArea with description",
  render,
  args: {
    description: "Description"
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,x,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "TextArea with button",
  render,
  args: {
    buttonLabel: "En savoir plus"
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,A,g;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "TextArea on error",
  render,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message"
  }
}`,...(g=(A=t.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var h,S,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "TextArea disabled",
  render,
  args: {
    buttonLabel: "En savoir plus",
    disabled: true
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const v=["TextAreaStory","TextAreaWithDescriptionStory","TextAreaWithButton","TextAreaOnErrorStory","TextAreaDisabled"],P=Object.freeze(Object.defineProperty({__proto__:null,TextAreaDisabled:o,TextAreaOnErrorStory:t,TextAreaStory:e,TextAreaWithButton:a,TextAreaWithDescriptionStory:r,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{P as T,e as a};
