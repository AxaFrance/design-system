import{j as o}from"./index-C1mcBe1y.js";import{H as a}from"./DropdownCommon-6uE27r1f.js";import"./index-DbaA8R3S.js";import{b as m}from"./account_balance-B8UiBJSK.js";const p=n=>o.jsx("div",{className:"af-heading-client-demo",children:[1,2,3].map(s=>o.jsx(a,{...n,level:s},`story-heading-${s}`))});p.__docgenInfo={description:"",methods:[],displayName:"renderAllHeading"};const u={component:a,title:"Components/Heading",args:{children:"Titre de la page"},argTypes:{className:{type:"string"},iconProps:{control:"object"},tagProps:{control:"object"}}},e={render:n=>o.jsx(a,{...n}),args:{firstSubtitle:"Sous Titre 1",secondSubtitle:"Sous Titre 2",tag:"Texte",icon:m},argTypes:{level:{options:[1,2,3],control:"inline-radio"}}},r={args:{...e.args},render:p};var t,i,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Heading {...args} />,
  args: {
    firstSubtitle: "Sous Titre 1",
    secondSubtitle: "Sous Titre 2",
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
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const S=["Playground","All"],H=Object.freeze(Object.defineProperty({__proto__:null,All:r,Playground:e,__namedExportsOrder:S,default:u},Symbol.toStringTag,{value:"Module"}));export{H,e as P};
