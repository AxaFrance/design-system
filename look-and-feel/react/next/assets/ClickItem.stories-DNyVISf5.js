import{j as e}from"./index-C1mcBe1y.js";import{w as z,n as D,u as E,I as w}from"./DropdownCommon-DZvgLZEH.js";import"./index-DbaA8R3S.js";import{B as R}from"./BasePictureCommon-DeSgxV4r.js";const $={small:"small",medium:"medium",large:"large",agent:"agent"},u={default:"default",disabled:"disabled",loading:"loading"},G=({className:t="",state:a="default",variant:n="large",icon:s,title:r,subtitle:l,textSecondary:o,textTertiary:k,tagLabel:N,tagProps:x,basePictureProps:V,onClick:F,ariaLabelForActionIcon:M,ClickItemContentComponent:W,ClickItemSuffixComponent:Z,ClickItemPrefixComponent:H})=>e.jsxs("div",{className:["af-apollo-click-item",`af-apollo-click-item--${n}`,`af-apollo-click-item--${a}`,t].filter(Boolean).join(" "),children:[e.jsx("div",{className:"af-apollo-click-item__leading",children:e.jsx(H,{variant:n,state:a,basePictureProps:V,icon:s})}),e.jsx("div",{className:"af-apollo-click-item__content",children:e.jsx(W,{title:r,subtitle:l,textSecondary:o,textTertiary:k,tagLabel:N,tagProps:{...x??{},variant:a==="disabled"?"neutral":x==null?void 0:x.variant}})}),e.jsx("div",{className:"af-apollo-click-item__trailing",children:e.jsx(Z,{variant:n,state:a,onClick:F,ariaLabelForActionIcon:M})})]}),J=({title:t,subtitle:a,textSecondary:n,textTertiary:s,tagLabel:r,tagProps:l,TagComponent:o})=>e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"af-apollo-click-item__title",children:e.jsx("span",{children:t})}),a&&e.jsx("p",{className:"af-apollo-click-item__subtitle",children:a}),n&&e.jsx("p",{className:"af-apollo-click-item__secondary",children:n}),s&&e.jsx("p",{className:"af-apollo-click-item__tertiary",children:s}),r&&e.jsx("div",{className:"af-apollo-click-item__tag-container",children:e.jsx(o,{...l,children:r})})]}),K=t=>e.jsx(J,{...t,TagComponent:z}),B="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M530-481%20353-658q-9-9-8.5-21t9.5-21q9-9%2021.5-9t21.5%209l198%20198q5%205%207%2010t2%2011q0%206-2%2011t-7%2010L396-261q-9%209-21%208.5t-21-9.5q-9-9-9-21.5t9-21.5l176-176Z'/%3e%3c/svg%3e",Q=({state:t,variant:a,trailingClickIcon:n,ariaLabelForActionIcon:s,onClick:r,IconComponent:l,SpinnerComponent:o,ClickIconComponent:k})=>a==="large"?t==="loading"?e.jsx(o,{size:32}):e.jsx(k,{src:n,"aria-label":s,disabled:t==="disabled",onClick:r}):a==="small"?e.jsx(l,{src:B,"aria-label":s}):a==="agent"?e.jsx(k,{src:n,"aria-label":s,onClick:r}):null,U=t=>e.jsx(Q,{trailingClickIcon:B,IconComponent:w,SpinnerComponent:E,ClickIconComponent:D,...t}),X=({state:t,variant:a,icon:n,basePictureProps:s,IconComponent:r,BasePictureComponent:l})=>s&&a==="agent"?e.jsx(l,{...s}):n?e.jsx(r,{role:"presentation",src:n,variant:t==="disabled"&&a!=="small"?"disabled":"primary"}):null,Y=t=>e.jsx(X,{BasePictureComponent:R,...t,IconComponent:w}),i=t=>e.jsx(G,{ClickItemContentComponent:K,ClickItemSuffixComponent:U,ClickItemPrefixComponent:Y,...t}),C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M180-120q-23%200-41.5-18T120-180v-600q0-23%2018.5-41.5T180-840h600q24%200%2042%2018.5t18%2041.5v54H538q-58%200-96%2038t-38%2095v227q0%2057%2038%2095t96%2038h302v53q0%2024-18%2042t-42%2018H180Zm358-173q-34%200-54-20t-20-53v-227q0-34%2020-53.5t54-19.5h269q34%200%2054%2019.5t20%2053.5v227q0%2033-20%2053t-54%2020H538Zm114-123q25%200%2044.5-19.5T716-481q0-25-19.5-44T652-544q-25%200-44.5%2019T588-481q0%2026%2019.5%2045.5T652-416Z'/%3e%3c/svg%3e",ee={title:"Components/List/ClickItem",component:i},c={name:"ClickItem",render:({...t})=>e.jsx(i,{...t}),args:{icon:C,basePictureProps:{src:"https://picsum.photos/48",alt:"random image"},title:"Titre",subtitle:"Sous-titre",textSecondary:"Texte secondaire",textTertiary:"Texte tertiaire",tagLabel:"Texte",tagProps:{variant:"info"},state:"default",variant:"large",ariaLabelForActionIcon:"Aller à la page de détails"},argTypes:{state:{options:Object.values(u),control:{type:"select"}},variant:{options:Object.values($),control:{type:"select"}}}},m={name:"ClickItem Large",render:({...t})=>e.jsx(i,{...t}),args:{icon:C,title:"Titre",subtitle:"Sous-titre",textSecondary:"Texte secondaire",textTertiary:"Texte tertiaire",tagLabel:"Texte",tagProps:{variant:"info"},state:"default",variant:"large",ariaLabelForActionIcon:"Aller à la page de détails"},argTypes:{state:{options:Object.values(u),control:{type:"select"}}}},d={name:"ClickItem Medium",render:({...t})=>e.jsx(i,{...t}),args:{icon:C,title:"Titre",subtitle:"Sous-titre",tagLabel:"Texte",tagProps:{variant:"info"},state:"default",variant:"medium",ariaLabelForActionIcon:"Aller à la page de détails"},argTypes:{state:{options:Object.values(u),control:{type:"select"}}}},p={name:"ClickItem Small",render:({...t})=>e.jsx(i,{...t}),args:{icon:C,title:"Titre",state:"default",variant:"small"},argTypes:{state:{options:Object.values(u),control:{type:"select"}}}},g={name:"ClickItem Agent",render:({...t})=>e.jsx(i,{...t}),args:{basePictureProps:{src:"https://picsum.photos/48",alt:"random image"},title:"Titre",subtitle:"Sous-titre",state:"default",variant:"agent",ariaLabelForActionIcon:"Aller à la page de détails"},argTypes:{state:{options:Object.values(u),control:{type:"select"}}}};var I,b,f;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "ClickItem",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    icon: accountBalanceWallet,
    basePictureProps: {
      src: "https://picsum.photos/48",
      alt: "random image"
    },
    title: "Titre",
    subtitle: "Sous-titre",
    textSecondary: "Texte secondaire",
    textTertiary: "Texte tertiaire",
    tagLabel: "Texte",
    tagProps: {
      variant: "info" as TagVariants
    },
    state: "default" as ClickItemStates,
    variant: "large" as ClickItemVariants,
    ariaLabelForActionIcon: "Aller à la page de détails"
  },
  argTypes: {
    state: {
      options: Object.values(clickItemStates),
      control: {
        type: "select"
      }
    },
    variant: {
      options: Object.values(clickItemVariants),
      control: {
        type: "select"
      }
    }
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,T,S;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "ClickItem Large",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    icon: accountBalanceWallet,
    title: "Titre",
    subtitle: "Sous-titre",
    textSecondary: "Texte secondaire",
    textTertiary: "Texte tertiaire",
    tagLabel: "Texte",
    tagProps: {
      variant: "info" as TagVariants
    },
    state: "default" as ClickItemStates,
    variant: "large",
    ariaLabelForActionIcon: "Aller à la page de détails"
  },
  argTypes: {
    state: {
      options: Object.values(clickItemStates),
      control: {
        type: "select"
      }
    }
  }
}`,...(S=(T=m.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var j,y,h;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "ClickItem Medium",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    icon: accountBalanceWallet,
    title: "Titre",
    subtitle: "Sous-titre",
    tagLabel: "Texte",
    tagProps: {
      variant: "info" as TagVariants
    },
    state: "default" as ClickItemStates,
    variant: "medium" as ClickItemVariants,
    ariaLabelForActionIcon: "Aller à la page de détails"
  },
  argTypes: {
    state: {
      options: Object.values(clickItemStates),
      control: {
        type: "select"
      }
    }
  }
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var _,q,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "ClickItem Small",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    icon: accountBalanceWallet,
    title: "Titre",
    state: "default" as ClickItemStates,
    variant: "small" as ClickItemVariants
  },
  argTypes: {
    state: {
      options: Object.values(clickItemStates),
      control: {
        type: "select"
      }
    }
  }
}`,...(A=(q=p.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var L,P,O;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    ariaLabelForActionIcon: "Aller à la page de détails"
  },
  argTypes: {
    state: {
      options: Object.values(clickItemStates),
      control: {
        type: "select"
      }
    }
  }
}`,...(O=(P=g.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const te=["ClickItemDefault","ClickItemLargeStory","ClickItemMediumStory","ClickItemSmallStory","ClickItemAgentStory"],le=Object.freeze(Object.defineProperty({__proto__:null,ClickItemAgentStory:g,ClickItemDefault:c,ClickItemLargeStory:m,ClickItemMediumStory:d,ClickItemSmallStory:p,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{le as C,m as a,d as b,p as c,g as d};
