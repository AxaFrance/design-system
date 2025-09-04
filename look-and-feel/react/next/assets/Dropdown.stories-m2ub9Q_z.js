import{j as a}from"./index-C1mcBe1y.js";import{D as y,j as h,h as v}from"./ToggleCommon-CN5m-4Gw.js";import"./constants-DZLbfism.js";import"./index-DbaA8R3S.js";const g=e=>a.jsx(y,{...e,ItemLabelComponent:v,ItemMessageComponent:h}),w=[{label:"For fun",value:"fun"},{label:"For work",value:"work"},{label:"For drink",value:"drink"}],S={component:g,title:"Components/Form/Input/Dropdown",args:{value:"Lorem ipsum",description:"Description",label:"Label",disabled:!1,required:!0,placeholder:"Placeholder",buttonLabel:"En savoir plus",error:"",helper:"Information complémentaires"},argTypes:{onChange:{action:"onChange"},value:{control:{type:"select"},options:["",...w.map(e=>e.value)]}}},t=e=>a.jsx("div",{style:{width:300},children:a.jsx(g,{...e,children:w.map(s=>a.jsx("option",{value:s.value,children:s.label},s.value))})}),r={name:"Dropdown",render:t},o={name:"Dropdown with Error",render:t,args:{error:"Titre du Message"},argTypes:{"aria-errormessage":{control:{type:"select"}}}},n={name:"Dropdown disabled",render:t,args:{label:"Label",description:"Description",disabled:!0,helper:"Information complémentaire"}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Dropdown",
  render
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,b,D;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Dropdown disabled",
  render,
  args: {
    label: "Label",
    description: "Description",
    disabled: true,
    helper: "Information complémentaire"
  }
}`,...(D=(b=n.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const f=["DropdownStory","DropdownErrorStory","DropdownDisabledStory"],L=Object.freeze(Object.defineProperty({__proto__:null,DropdownDisabledStory:n,DropdownErrorStory:o,DropdownStory:r,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{L as D,r as a,o as b,n as c};
