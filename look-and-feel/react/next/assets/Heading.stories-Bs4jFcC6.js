import{j as o}from"./index-C-iqcyhV.js";import"./Skeleton-Dv5xsPQu.js";import{H as m}from"./ClickIconApollo-DXcjDcmw.js";import"./index-ZnYipkzV.js";import{b as u}from"./account_balance_wallet-fill-DXqnmHYk.js";const t=m,p=n=>o.jsx("div",{className:"af-heading-client-demo",children:[1,2,3].map(a=>o.jsx(t,{...n,level:a},`story-heading-${a}`))});p.__docgenInfo={description:"",methods:[],displayName:"renderAllHeading"};const S={component:t,title:"Components/Heading",args:{children:"Titre de la page"},argTypes:{className:{type:"string"},iconProps:{control:"object"},tagProps:{control:"object"}}},e={render:n=>o.jsx(t,{...n}),args:{firstSubtitle:"Sous titre 1",secondSubtitle:"Sous titre 2",tag:"Texte",icon:u},argTypes:{level:{options:[1,2,3],control:"inline-radio"}}},r={args:{...e.args},render:p};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Heading {...args} />,
  args: {
    firstSubtitle: "Sous titre 1",
    secondSubtitle: "Sous titre 2",
    tag: "Texte",
    icon: bank
  },
  argTypes: {
    level: {
      options: [1, 2, 3] as HeadingLevel[],
      control: "inline-radio"
    }
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,c,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Playground.args
  },
  render: renderAllHeading
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const b=["Playground","All"],_=Object.freeze(Object.defineProperty({__proto__:null,All:r,Playground:e,__namedExportsOrder:b,default:S},Symbol.toStringTag,{value:"Module"}));export{_ as H,e as P};
