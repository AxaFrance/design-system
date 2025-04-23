import"./TimelineVerticalApollo-DogVadyS.js";import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./index-DuZrfDUH.js";import{T as o,t as m}from"./TagCommon-C3twVvuv.js";const g=()=>n.jsx("div",{className:"af-tag-client-demo",children:Object.values(m).map(e=>n.jsx(o,{variant:e,children:e},e))}),T=({children:e,variant:s,...u})=>n.jsxs(o,{variant:s,...u,children:[e," ",s]});g.__docgenInfo={description:"",methods:[],displayName:"renderTagAll"};T.__docgenInfo={description:"",methods:[],displayName:"renderTag"};const y={component:o,title:"Components/Tag",parameters:{layout:"centered"},argTypes:{}},r={name:"Tag",render:T,args:{children:"Tag",variant:"info"},argTypes:{variant:{options:Object.values(m),control:{type:"select"}}}},a={render:g};var t,c,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const f=["Playground","All"],b=Object.freeze(Object.defineProperty({__proto__:null,All:a,Playground:r,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{a as A,r as P,b as T};
