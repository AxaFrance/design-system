import{j as t}from"./index-C1mcBe1y.js";import{b as u}from"./account_balance_wallet-fill-DXqnmHYk.js";import{g as C,o as x,n as s}from"./TimelineVerticalLF-Cek_46yE.js";import"./index-DbaA8R3S.js";import{C as j}from"./ContentItemMonoLF-DxmUX_Kw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const I=({className:o,state:m,ContentItemMonoComponent:p,contentItemProps:l,ToggleComponent:g,...n})=>{const d=C("af-content-item-duo-action",o);return t.jsxs("div",{className:d,children:[t.jsx(p,{...l}),t.jsx("div",{className:"af-action-container",children:m==="edit"?n.buttons:t.jsx(g,{...n.toggleProps})})]})},c=o=>t.jsx(I,{...o,ContentItemMonoComponent:j,ToggleComponent:x}),T={component:c,title:"Components/ContentItemDuoAction",args:{contentItemProps:{type:"icon",iconProps:{hasBackground:!0,src:u},title:"Texte principale",subtitle1:"Texte secondaire",subtitle2:"Texte tertiare"},buttons:t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"ghost",children:"Modifier"}),t.jsx(s,{variant:"ghost",children:"Supprimer"})]})}},e={name:"ContentItemDuoAction",render:o=>t.jsx(c,{...o}),argTypes:{state:{options:["edit","toggle"],control:{type:"select"}},toggleProps:{control:{type:"object"}}}};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "ContentItemDuoAction",
  render: (props: ContentItemDuoActionProps) => <ContentItemDuoAction {...props} />,
  argTypes: {
    state: {
      options: ["edit", "toggle"],
      control: {
        type: "select"
      }
    },
    toggleProps: {
      control: {
        type: "object"
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const v=["Playground"];export{e as Playground,v as __namedExportsOrder,T as default};
