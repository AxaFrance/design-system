import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ht as r,M as i,t as a}from"./client-DZrBRInO.js";import{Q as o,q as s}from"./MessageBarCommon-BNZr9BP9.js";var c,l,u;function d(){return(d=e((()=>{a(),c=n(),l=()=>(0,c.jsxs)(`div`,{className:`af-message-demo`,children:[Object.values(s).map(e=>(0,c.jsx)(i,{variant:e,title:`Title for ${e} with Button`,action:(0,c.jsx)(r,{variant:`ghost`,children:`Call to action`}),children:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non, praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur, deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos nemo cum.`},e)),Object.values(s).map(e=>(0,c.jsx)(i,{variant:e,title:`Title for ${e} with Link`,action:(0,c.jsx)(o,{href:`https://www.axa.fr`,openInNewTab:!0,children:`Axa.fr`}),children:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non, praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur, deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos nemo cum.`},e))]}),u=({variant:e,onClick:t,...n})=>(0,c.jsx)(i,{variant:e,onClick:t,...n,title:`Title message`,children:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non, praesentium inventore dolor in saepe harum ad ducimus sapiente tenetur, deleniti fugit provident necessitatibus? Vero reiciendis doloremque eos nemo cum.`}),l.__docgenInfo={description:``,methods:[],displayName:`renderMessageAll`},u.__docgenInfo={description:``,methods:[],displayName:`renderMessage`}})))()}var f=t({All:()=>h,Playground:()=>m,__namedExportsOrder:()=>g,default:()=>p}),p,m,h,g;function _(){return(_=e((()=>{a(),d(),p={component:i,title:`Components/Message`,parameters:{layout:`centered fullscreen`},argTypes:{onClick:{action:`clicked`}}},m={name:`Message`,render:u,args:{children:`Message`},argTypes:{variant:{options:Object.values(s),control:{type:`select`}}}},h={render:l},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: renderMessageAll
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`All`]})))()}export{_ as i,f as n,m as r,h as t};