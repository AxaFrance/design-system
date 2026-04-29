import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{H as a}from"./LoaderLF-DYChe2bf.js";/* empty css               */import"./LoaderCommon-BvsKcm5d.js";import"./index-CtOEgLBf.js";import{b}from"./account_balance_wallet-fill-DXqnmHYk.js";const S=n=>s.jsx("div",{className:"af-heading-client-demo",children:[1,2,3,4].map(t=>s.jsx(a,{...n,level:t},`story-heading-${t}`))});S.__docgenInfo={description:"",methods:[],displayName:"renderAllHeading"};const H={component:a,title:"Components/Heading",args:{children:"Titre de la page"},argTypes:{className:{type:"string"},iconProps:{control:"object"},tagProps:{control:"object"},iconPosition:{options:["start","top"],control:"inline-radio"}}},e={render:n=>s.jsx(a,{...n}),args:{firstSubtitle:"Sous titre 1",secondSubtitle:"Sous titre 2",tag:"Texte",icon:b},argTypes:{level:{options:[1,2,3,4],control:"inline-radio"}}},o={args:{...e.args},render:S},r={args:{...e.args,iconPosition:"top"},argTypes:{level:{options:[1,2,3,4],control:"inline-radio"}}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Heading {...args} />,
  args: {
    firstSubtitle: "Sous titre 1",
    secondSubtitle: "Sous titre 2",
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
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const P=["Playground","All","IconOnTop"],h=Object.freeze(Object.defineProperty({__proto__:null,All:o,IconOnTop:r,Playground:e,__namedExportsOrder:P,default:H},Symbol.toStringTag,{value:"Module"}));export{h as H,r as I,e as P};
