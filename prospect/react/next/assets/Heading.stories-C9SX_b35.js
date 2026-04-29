import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{H as a}from"./LoaderApollo-D0xkpJcZ.js";/* empty css               */import"./index-CtOEgLBf.js";import{b as S}from"./account_balance-B8UiBJSK.js";const y=n=>s.jsx("div",{className:"af-heading-client-demo",children:[1,2,3,4].map(t=>s.jsx(a,{...n,level:t},`story-heading-${t}`))});y.__docgenInfo={description:"",methods:[],displayName:"renderAllHeading"};const b={component:a,title:"Components/Heading",args:{children:"Titre de la page"},argTypes:{className:{type:"string"},iconProps:{control:"object"},tagProps:{control:"object"},iconPosition:{options:["start","top"],control:"inline-radio"}}},e={render:n=>s.jsx(a,{...n}),args:{firstSubtitle:"Sous Titre 1",secondSubtitle:"Sous Titre 2",tag:"Texte",icon:S},argTypes:{level:{options:[1,2,3,4],control:"inline-radio"}}},o={args:{...e.args},render:y},r={args:{...e.args,iconPosition:"top"},argTypes:{level:{options:[1,2,3,4],control:"inline-radio"}}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Heading {...args} />,
  args: {
    firstSubtitle: "Sous Titre 1",
    secondSubtitle: "Sous Titre 2",
    tag: "Texte",
    icon: bank
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4] as HeadingLevel[],
      control: "inline-radio"
    }
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Playground.args
  },
  render: renderAllHeading
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,T;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    iconPosition: "top"
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4] as HeadingLevel[],
      control: "inline-radio"
    }
  }
}`,...(T=(u=r.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const H=["Playground","All","IconOnTop"],v=Object.freeze(Object.defineProperty({__proto__:null,All:o,IconOnTop:r,Playground:e,__namedExportsOrder:H,default:b},Symbol.toStringTag,{value:"Module"}));export{v as H,r as I,e as P};
