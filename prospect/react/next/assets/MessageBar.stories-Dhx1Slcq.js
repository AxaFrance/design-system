import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{n as r,t as i}from"./prospect-DuM_XyPt.js";import{n as a,t as o}from"./home-thOKMDY_.js";import{n as s,t as c}from"./account_balance-fill-BsOHNOnD.js";var l=t({Playground:()=>h,__namedExportsOrder:()=>g,default:()=>p}),u,d,f,p,m,h,g,_=e((()=>{i(),s(),a(),u=n(),d=[`info`,`error`],f={accountBalanceIcon:c,homeIcon:o},p={component:r,title:`Components/MessageBar`,parameters:{layout:`fullscreen`,docs:{description:{component:`The description is displayed directly on desktop and uses AccordionCore only on small screens.`}}},decorators:[e=>(0,u.jsx)(`div`,{style:{padding:`1rem`,maxWidth:`900px`,margin:`0 auto`},children:(0,u.jsx)(e,{})})],argTypes:{title:{control:{type:`text`}},description:{control:{type:`text`}},icon:{control:{type:`select`},options:Object.keys(f)},variant:{options:d,control:{type:`select`}},defaultDescriptionOpen:{control:{type:`boolean`},description:`Initial expanded state for the mobile accordion.`},buttonProps:{control:{type:`object`}}}},m=`Vos informations personnelles doivent être actualisées afin de maintenir la protection de vos données.`,h={name:`MessageBar`,args:{title:`Pensez à mettre à jour votre dossier client AXA`,icon:`accountBalanceIcon`,variant:`info`,defaultDescriptionOpen:!0,buttonProps:{children:`Primary`,variant:`primary`},description:m},render:({icon:e,...t})=>(0,u.jsx)(r,{...t,icon:f[e]??e})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "MessageBar",
  args: {
    title: "Pensez à mettre à jour votre dossier client AXA",
    icon: "accountBalanceIcon",
    variant: "info",
    defaultDescriptionOpen: true,
    buttonProps: {
      children: "Primary",
      variant: "primary"
    },
    description: DESCRIPTION
  },
  render: ({
    icon,
    ...args
  }) => <MessageBar {...args} icon={ICONS[icon] ?? icon} />
}`,...h.parameters?.docs?.source}}},g=[`Playground`]}));_();export{h as Playground,g as __namedExportsOrder,p as default,_ as n,l as t};