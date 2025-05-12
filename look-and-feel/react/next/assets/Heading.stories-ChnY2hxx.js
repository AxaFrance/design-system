import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as m,I as b}from"./ToggleCommon-3782PRwT.js";import"./constants-D4KDvii2.js";import"./index-DuZrfDUH.js";import{T as S}from"./TagCommon-BuJ_rEUs.js";import{b as y}from"./account_balance_wallet-fill-DXqnmHYk.js";const N=({title:a,firstSubtitle:s,secondSubtitle:n,titleComponent:o="h1"})=>e.jsxs("div",{className:"af-heading__title-container",children:[e.jsx(o,{className:"af-heading__title",children:a}),s&&e.jsx("span",{className:"af-heading__subtitle",children:s}),o==="h1"&&n&&e.jsx("span",{className:"af-heading__subtitle",children:n})]}),H={variant:"neutral"},T=({children:a,className:s,firstSubtitle:n,secondSubtitle:o,level:i=1,icon:c,iconProps:l={},tag:g})=>e.jsxs("header",{className:m("af-heading",s),children:[g&&i<3&&e.jsx("div",{className:"af-heading__label",children:g}),c&&i===1&&e.jsx(b,{src:c,size:"L",hasBackground:!0,variant:"secondary",...l,className:m("af-heading__icon",l.className)}),e.jsx(N,{title:a,firstSubtitle:n,titleComponent:`h${i}`,secondSubtitle:o})]}),d=({tag:a,tagProps:s={},...n})=>e.jsx(T,{...n,tag:a&&e.jsx(S,{...H,...s,children:a})}),f=a=>e.jsx("div",{className:"af-heading-client-demo",children:[1,2,3].map(s=>e.jsx(d,{...a,level:s},`story-heading-${s}`))});f.__docgenInfo={description:"",methods:[],displayName:"renderAllHeading"};const P={component:d,title:"Components/Heading",args:{children:"Titre de la page"},argTypes:{className:{type:"string"},iconProps:{control:"object"},tagProps:{control:"object"}}},r={render:a=>e.jsx(d,{...a}),args:{firstSubtitle:"Sous titre 1",secondSubtitle:"Sous titre 2",tag:"Texte",icon:y},argTypes:{level:{options:[1,2,3],control:"inline-radio"}}},t={args:{...r.args},render:f};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var _,j,x;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Playground.args
  },
  render: renderAllHeading
}`,...(x=(j=t.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const A=["Playground","All"],L=Object.freeze(Object.defineProperty({__proto__:null,All:t,Playground:r,__namedExportsOrder:A,default:P},Symbol.toStringTag,{value:"Module"}));export{L as H,r as P};
