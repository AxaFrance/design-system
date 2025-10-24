import{j as t}from"./index-C1mcBe1y.js";import{b as u}from"./account_balance_wallet-fill-DXqnmHYk.js";import{g as C,T as x}from"./ProgressBarCommon-_6RIV1Pi.js";import{B as r}from"./TimelineVerticalLF-rMGBsxtt.js";import"./index-DbaA8R3S.js";import{C as j}from"./ContentItemMonoLF-96xlIlFN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const I=({className:o,state:m,ContentItemMonoComponent:p,contentItemProps:l,ToggleComponent:g,...n})=>{const d=C("af-content-item-duo-action",o);return t.jsxs("div",{className:d,children:[t.jsx(p,{...l}),t.jsx("div",{className:"af-action-container",children:m==="edit"?n.buttons:t.jsx(g,{...n.toggleProps})})]})},c=o=>t.jsx(I,{...o,ContentItemMonoComponent:j,ToggleComponent:x}),v={component:c,title:"Components/ContentItemDuoAction",args:{contentItemProps:{type:"icon",iconProps:{hasBackground:!0,src:u},title:"Texte principale",subtitle1:"Texte secondaire",subtitle2:"Texte tertiare"},buttons:t.jsxs(t.Fragment,{children:[t.jsx(r,{variant:"ghost",children:"Modifier"}),t.jsx(r,{variant:"ghost",children:"Supprimer"})]})}},e={name:"ContentItemDuoAction",render:o=>t.jsx(c,{...o}),argTypes:{state:{options:["edit","toggle"],control:{type:"select"}},toggleProps:{control:{type:"object"}}}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const N=["Playground"];export{e as Playground,N as __namedExportsOrder,v as default};
