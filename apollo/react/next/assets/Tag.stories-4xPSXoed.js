import{v as s,w as g}from"./DropdownCommon-Dj4Eg6q1.js";import{j as n}from"./index-C1mcBe1y.js";import"./index-DbaA8R3S.js";const m=()=>n.jsx("div",{className:"af-tag-client-demo",children:Object.values(g).map(e=>n.jsx(s,{variant:e,children:e},e))}),T=({children:e,variant:o,...u})=>n.jsxs(s,{variant:o,...u,children:[e," ",o]});m.__docgenInfo={description:"",methods:[],displayName:"renderTagAll"};T.__docgenInfo={description:"",methods:[],displayName:"renderTag"};const y={component:s,title:"Components/Tag",parameters:{layout:"centered"},argTypes:{}},r={name:"Tag",render:T,args:{children:"Tag",variant:"info"},argTypes:{variant:{options:Object.values(g),control:{type:"select"}}}},a={render:m};var t,c,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Tag",
  render: renderTag,
  args: {
    children: "Tag",
    variant: "info"
  },
  argTypes: {
    variant: {
      options: Object.values(tagVariants),
      control: {
        type: "select"
      }
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,i,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: renderTagAll
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const f=["Playground","All"],v=Object.freeze(Object.defineProperty({__proto__:null,All:a,Playground:r,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{a as A,r as P,v as T};
