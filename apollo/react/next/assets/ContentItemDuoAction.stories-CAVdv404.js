import{j as t}from"./index-C-iqcyhV.js";import{b as u}from"./account_balance_wallet-fill-DXqnmHYk.js";import{g as C,r as x,q as r}from"./TimelineVerticalApollo-BA7cnjgh.js";import"./index-ZnYipkzV.js";import{C as j}from"./ContentItemMonoApollo-DPhJ4h2o.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";const y=({className:o,state:m,ContentItemMonoComponent:p,contentItemProps:l,ToggleComponent:g,...n})=>{const d=C("af-content-item-duo-action",o);return t.jsxs("div",{className:d,children:[t.jsx(p,{...l}),t.jsx("div",{className:"af-action-container",children:m==="edit"?n.buttons:t.jsx(g,{...n.toggleProps})})]})},c=o=>t.jsx(y,{...o,ContentItemMonoComponent:j,ToggleComponent:x}),T={component:c,title:"Components/ContentItemDuoAction",args:{contentItemProps:{type:"icon",iconProps:{src:u,variant:"primary",hasBackground:!0},title:"Texte principale",subtitle1:"Texte secondaire",subtitle2:"Texte tertiare"},buttons:t.jsxs(t.Fragment,{children:[t.jsx(r,{variant:"ghost",children:"Modifier"}),t.jsx(r,{variant:"ghost",children:"Supprimer"})]})}},e={name:"ContentItemDuoAction",render:o=>t.jsx(c,{...o}),argTypes:{state:{options:["edit","toggle"],control:{type:"select"}},toggleProps:{control:{type:"object"}}}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
