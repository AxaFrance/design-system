import{j as o}from"./index-C-iqcyhV.js";import{a as v}from"./index-B-lxVbXh.js";import"./ClickIconApollo-DAzyCCdM.js";import"./index-ZnYipkzV.js";import{C as t,a as P,c as L,b as h}from"./account_balance_wallet-fill-D_VI_WJP.js";const j={title:"Components/List/ClickItem",component:t},l={icon:P,title:"Titre",state:"default",ariaLabelForActionIcon:"Aller à la page de détails",onClick:v("ClickItem has been clicked")},c={state:{options:Object.values(h),control:{type:"select"}},variant:{options:Object.values(L),control:{type:"select"}}},a={name:"ClickItem",render:({...e})=>o.jsx(t,{...e}),args:{...l,subtitle:"Sous-titre",tagLabel:"Texte",tagProps:{variant:"info"},basePictureProps:{src:"https://picsum.photos/48",alt:"random image"},textSecondary:"Texte secondaire",textTertiary:"Texte tertiaire",variant:"large"},argTypes:c},r={name:"ClickItem Large",render:({...e})=>o.jsx(t,{...e}),args:{...l,subtitle:"Sous-titre",tagLabel:"Texte",tagProps:{variant:"info"},textSecondary:"Texte secondaire",textTertiary:"Texte tertiaire",variant:"large"},argTypes:c},s={name:"ClickItem Medium",render:({...e})=>o.jsx(t,{...e}),args:{...l,subtitle:"Sous-titre",tagLabel:"Texte",tagProps:{variant:"info"},variant:"medium"},argTypes:{state:c.state}},n={name:"ClickItem Small",render:({...e})=>o.jsx(t,{...e}),args:{...l,variant:"small"},argTypes:{state:c.state}},i={name:"ClickItem Agent",render:({...e})=>o.jsx(t,{...e}),args:{basePictureProps:{src:"https://picsum.photos/48",alt:"random image"},title:"Titre",subtitle:"Sous-titre",state:"default",variant:"agent",ariaLabelForActionIcon:"Aller à la page de détails",onClick:v("ClickItem has been clicked")},argTypes:{state:c.state}};var m,g,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "ClickItem",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    ...baseArgs,
    subtitle: "Sous-titre",
    tagLabel: "Texte",
    tagProps: {
      variant: "info" as TagVariants
    },
    basePictureProps: {
      src: "https://picsum.photos/48",
      alt: "random image"
    },
    textSecondary: "Texte secondaire",
    textTertiary: "Texte tertiaire",
    variant: "large" as ClickItemVariants
  },
  argTypes: defaultArgTypes
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var d,u,k;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "ClickItem Large",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    ...baseArgs,
    subtitle: "Sous-titre",
    tagLabel: "Texte",
    tagProps: {
      variant: "info" as TagVariants
    },
    textSecondary: "Texte secondaire",
    textTertiary: "Texte tertiaire",
    variant: "large"
  },
  argTypes: defaultArgTypes
}`,...(k=(u=r.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var C,T,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "ClickItem Medium",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    ...baseArgs,
    subtitle: "Sous-titre",
    tagLabel: "Texte",
    tagProps: {
      variant: "info" as TagVariants
    },
    variant: "medium"
  },
  argTypes: {
    state: defaultArgTypes.state
  }
}`,...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var b,y,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "ClickItem Small",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    ...baseArgs,
    variant: "small" as ClickItemVariants
  },
  argTypes: {
    state: defaultArgTypes.state
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,f,A;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "ClickItem Agent",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    basePictureProps: {
      src: "https://picsum.photos/48",
      alt: "random image"
    },
    title: "Titre",
    subtitle: "Sous-titre",
    state: "default" as ClickItemStates,
    variant: "agent" as ClickItemVariants,
    ariaLabelForActionIcon: "Aller à la page de détails",
    onClick: action("ClickItem has been clicked")
  },
  argTypes: {
    state: defaultArgTypes.state
  }
}`,...(A=(f=i.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const V=["ClickItemDefault","ClickItemLargeStory","ClickItemMediumStory","ClickItemSmallStory","ClickItemAgentStory"],E=Object.freeze(Object.defineProperty({__proto__:null,ClickItemAgentStory:i,ClickItemDefault:a,ClickItemLargeStory:r,ClickItemMediumStory:s,ClickItemSmallStory:n,__namedExportsOrder:V,default:j},Symbol.toStringTag,{value:"Module"}));export{E as C,r as a,s as b,n as c,i as d};
