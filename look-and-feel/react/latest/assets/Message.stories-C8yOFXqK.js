import"./constants-CAfflvme.js";import"./FileUploadCommon-BZUq6j8J.js";import{j as s}from"./index-C-iqcyhV.js";import"./index-ZnYipkzV.js";import{B as h}from"./FileUploadLF-CAVpz7bd.js";import{M as n,m as o}from"./MessageLF-CX5dK2rI.js";import{L as M}from"./LinkCommon-DIznEhJc.js";const u=()=>s.jsxs("div",{className:"af-message-demo",children:[Object.values(o).map(e=>s.jsx(n,{variant:e,title:`Title for ${e} with Button`,action:s.jsx(h,{variant:"ghost",children:"Call to action"}),children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non, praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur, deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos nemo cum."},e)),Object.values(o).map(e=>s.jsx(n,{variant:e,title:`Title for ${e} with Link`,action:s.jsx(M,{href:"https://www.axa.fr",openInNewTab:!0,children:"Axa.fr"}),children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non, praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur, deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos nemo cum."},e))]}),p=({variant:e,onClick:g,...f})=>s.jsx(n,{variant:e,onClick:g,...f,title:"Title message",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non, praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur, deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos nemo cum."});u.__docgenInfo={description:"",methods:[],displayName:"renderMessageAll"};p.__docgenInfo={description:"",methods:[],displayName:"renderMessage"};const j={component:n,title:"Components/Message",parameters:{layout:"centered fullscreen"},argTypes:{onClick:{action:"clicked"}}},r={name:"Message",render:p,args:{children:"Message"},argTypes:{variant:{options:Object.values(o),control:{type:"select"}}}},t={render:u};var i,a,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Message",
  render: renderMessage,
  args: {
    children: "Message"
  },
  argTypes: {
    variant: {
      options: Object.values(messageVariants),
      control: {
        type: "select"
      }
    }
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: renderMessageAll
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const x=["Playground","All"],w=Object.freeze(Object.defineProperty({__proto__:null,All:t,Playground:r,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{t as A,w as M,r as P};
