import{j as m}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{A as r}from"./CardData-CaJ79gES.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as l}from"./index-28pPPJTf.js";const g={title:"Components/Action",component:r,args:{onClick:l()}},n={name:"Action Link",render:({...e})=>m.jsx(r,{...e}),args:{href:"http://www.axa.fr",icon:"link",title:"Lien de test",target:"_blank",id:"id"}},t={name:"Action Button",render:({onClick:e,...p})=>m.jsx(r,{onClick:e,...p}),args:{icon:"floppy-disk",title:"Enregistrer",id:"id"}};var o,i,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const u=["Default","Button"],w=Object.freeze(Object.defineProperty({__proto__:null,Button:t,Default:n,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{w as A,t as B,n as D};
