import{j as W}from"./index-C1mcBe1y.js";import{T as f}from"./DropdownCommon-GhteRHiC.js";import"./index-DbaA8R3S.js";const _={component:f,title:"Components/Form/Input/TextArea",args:{value:"",label:"Label",placeholder:"Placeholder",helper:"1800 caractères maximum.",name:"name",id:"nameid",disabled:!1,required:!1,className:"",buttonLabel:""},argTypes:{onChange:{action:"onChange"}}},e=({onChange:v,...w})=>W.jsx(f,{onChange:v,...w}),r={name:"TextArea",render:e},a={name:"TextArea with label",render:e,args:{label:"Label",description:"Description",buttonLabel:"En savoir plus"}},t={name:"TextArea with description",render:e,args:{description:"Description"}},s={name:"TextArea with button",render:e,args:{buttonLabel:"En savoir plus"}},o={name:"TextArea on error",render:e,args:{classModifier:"error",description:"Description",error:"Error Message"}},n={name:"TextArea disabled",render:e,args:{buttonLabel:"En savoir plus",disabled:!0}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "TextArea",
  render
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "TextArea with label",
  render,
  args: {
    label: "Label",
    description: "Description",
    buttonLabel: "En savoir plus"
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,b,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "TextArea with description",
  render,
  args: {
    description: "Description"
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var T,A,g;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "TextArea with button",
  render,
  args: {
    buttonLabel: "En savoir plus"
  }
}`,...(g=(A=s.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var h,S,E;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "TextArea on error",
  render,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message"
  }
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var L,y,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "TextArea disabled",
  render,
  args: {
    buttonLabel: "En savoir plus",
    disabled: true
  }
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const j=["TextAreaStory","TextAreaWithLabelStory","TextAreaWithDescriptionStory","TextAreaWithButton","TextAreaOnErrorStory","TextAreaDisabled"],B=Object.freeze(Object.defineProperty({__proto__:null,TextAreaDisabled:n,TextAreaOnErrorStory:o,TextAreaStory:r,TextAreaWithButton:s,TextAreaWithDescriptionStory:t,TextAreaWithLabelStory:a,__namedExportsOrder:j,default:_},Symbol.toStringTag,{value:"Module"}));export{B as T,r as a};
