import{j as l}from"./jsx-runtime-Cw0GR0a5.js";import{f as p}from"./index-C_FWhylE.js";import{A as r}from"./Action-fIeEoHxC.js";const g={title:"Components/Action",component:r,args:{onClick:p()}},n={name:"Action Link",render:({...t})=>l.jsx(r,{...t}),args:{href:"http://www.axa.fr",icon:"link",title:"Lien de test",target:"_blank",id:"id"}},e={name:"Action Button",render:({onClick:t,...m})=>l.jsx(r,{onClick:t,...m}),args:{icon:"floppy-disk",title:"Enregistrer",id:"id"}};var o,a,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Action Link",
  render: ({
    ...args
  }) => <Action {...args} />,
  args: {
    href: "http://www.axa.fr",
    icon: "link",
    title: "Lien de test",
    target: "_blank",
    id: "id"
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,c,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Action Button",
  render: ({
    onClick,
    ...args
  }) => <Action onClick={onClick} {...args} />,
  args: {
    icon: "floppy-disk",
    title: "Enregistrer",
    id: "id"
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const u=["Default","Button"],x=Object.freeze(Object.defineProperty({__proto__:null,Button:e,Default:n,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{x as A,e as B,n as D};
