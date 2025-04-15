import{g as y}from"./MessageApollo-DOCXRFiq.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-DuZrfDUH.js";const p={info:"info",success:"success",warning:"warning",error:"error",neutral:"neutral"},t=({children:e,className:r,variant:o="info",...f})=>{const j=_.useMemo(()=>y("af-tag",r,o),[r,o]);return s.jsx("div",{className:j,...f,children:s.jsx("span",{className:"af-tag__label",children:e})})},u=()=>s.jsx("div",{className:"af-tag-client-demo",children:Object.values(p).map(e=>s.jsx(t,{variant:e,children:e},e))}),T=({children:e,variant:r,...o})=>s.jsxs(t,{variant:r,...o,children:[e," ",r]});u.__docgenInfo={description:"",methods:[],displayName:"renderTagAll"};T.__docgenInfo={description:"",methods:[],displayName:"renderTag"};const x={component:t,title:"Components/Tag",parameters:{layout:"centered"},argTypes:{}},n={name:"Tag",render:T,args:{children:"Tag",variant:"info"},argTypes:{variant:{options:Object.values(p),control:{type:"select"}}}},a={render:u};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,m,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: renderTagAll
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const h=["Playground","All"],N=Object.freeze(Object.defineProperty({__proto__:null,All:a,Playground:n,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{a as A,n as P,N as T};
