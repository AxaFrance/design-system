import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as u}from"./ContentItemMonoApollo-DgqqRUyG.js";import"./index-DuZrfDUH.js";const h={component:u,title:"Components/Form/Select/Select",args:{value:"Lorem ipsum",label:"Label",disabled:!1,required:!1,placeholder:"Placeholder",errorLabel:""},argTypes:{onChange:{action:"onChange"}}},t=({onChange:g,...b})=>e.jsx("div",{style:{width:300},children:e.jsxs(u,{onChange:g,...b,children:[e.jsx("option",{value:"fun",children:"For fun"}),e.jsx("option",{value:"work",children:"For work"}),e.jsx("option",{value:"drink",children:"For drink"})]})}),r={name:"Select",render:t},o={name:"Select with Error",render:t,args:{error:"Titre du Message"},argTypes:{"aria-errormessage":{control:{type:"select"}}}},a={name:"Select disabled",render:t,args:{label:"Label",description:"Description",disabled:!0,helper:"Information complémentaire"}};var s,n,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Select",
  render
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,i,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,S;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Select disabled",
  render,
  args: {
    label: "Label",
    description: "Description",
    disabled: true,
    helper: "Information complémentaire"
  }
}`,...(S=(p=a.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};const y=["SelectStory","SelectErrorStory","SelectDisabledStory"],v=Object.freeze(Object.defineProperty({__proto__:null,SelectDisabledStory:a,SelectErrorStory:o,SelectStory:r,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{v as S,r as a,o as b,a as c};
