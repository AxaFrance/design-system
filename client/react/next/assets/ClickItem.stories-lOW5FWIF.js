import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{L as r,t as i}from"./client-D92F0iso.js";import{dn as a,un as o}from"./LoaderCommon-C19GLX9C.js";import{n as s,t as c}from"./account_balance_wallet-fill-XRa06JC2.js";var l=t({ClickItemAgentStory:()=>y,ClickItemDefault:()=>h,ClickItemLargeStory:()=>g,ClickItemMediumStory:()=>_,ClickItemSmallStory:()=>v,__namedExportsOrder:()=>b,default:()=>f}),u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{i(),s(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Components/List/ClickItem`,component:r},p={icon:c,title:`Titre`,state:`default`,ariaLabelForActionIcon:`Aller à la page de détails`,onClick:d(`ClickItem has been clicked`)},m={state:{options:Object.values(o),control:{type:`select`}},variant:{options:Object.values(a),control:{type:`select`}}},h={name:`ClickItem`,render:({...e})=>(0,u.jsx)(r,{...e}),args:{...p,subtitle:`Sous-titre`,tagLabel:`Texte`,tagProps:{variant:`info`},basePictureProps:{src:`https://picsum.photos/48`,alt:`random image`},textSecondary:`Texte secondaire`,textTertiary:`Texte tertiaire`,variant:`large`},argTypes:m},g={name:`ClickItem Large`,render:({...e})=>(0,u.jsx)(r,{...e}),args:{...p,subtitle:`Sous-titre`,tagLabel:`Texte`,tagProps:{variant:`info`},textSecondary:`Texte secondaire`,textTertiary:`Texte tertiaire`,variant:`large`},argTypes:m},_={name:`ClickItem Medium`,render:({...e})=>(0,u.jsx)(r,{...e}),args:{...p,subtitle:`Sous-titre`,tagLabel:`Texte`,tagProps:{variant:`info`},variant:`medium`},argTypes:{state:m.state}},v={name:`ClickItem Small`,render:({...e})=>(0,u.jsx)(r,{...e}),args:{...p,variant:`small`},argTypes:{state:m.state}},y={name:`ClickItem Agent`,render:({...e})=>(0,u.jsx)(r,{...e}),args:{basePictureProps:{src:`https://picsum.photos/48`,alt:`random image`},title:`Titre`,subtitle:`Sous-titre`,state:`default`,variant:`agent`,ariaLabelForActionIcon:`Aller à la page de détails`,onClick:d(`ClickItem has been clicked`)},argTypes:{state:m.state}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`ClickItemDefault`,`ClickItemLargeStory`,`ClickItemMediumStory`,`ClickItemSmallStory`,`ClickItemAgentStory`]}));x();export{y as ClickItemAgentStory,h as ClickItemDefault,g as ClickItemLargeStory,_ as ClickItemMediumStory,v as ClickItemSmallStory,b as __namedExportsOrder,f as default,x as n,l as t};