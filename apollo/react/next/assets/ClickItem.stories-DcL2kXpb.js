import{j as e}from"./index-C1mcBe1y.js";import{v as Q,m as z,u as D,I as O}from"./DropdownCommon-DxFMijcD.js";import"./index-DbaA8R3S.js";import{B as E}from"./BasePictureCommon-8UEGIQkk.js";const R={small:"small",medium:"medium",large:"large",agent:"agent"},u={default:"default",disabled:"disabled",loading:"loading"},$=({className:t="",state:a="default",variant:n="large",icon:s,title:r,subtitle:i,textSecondary:o,textTertiary:x,tagLabel:B,tagProps:k,basePictureProps:F,onClick:M,ariaLabelForActionIcon:N,ClickItemContentComponent:V,ClickItemSuffixComponent:Z,ClickItemPrefixComponent:H})=>e.jsxs("div",{className:["af-apollo-click-item",`af-apollo-click-item--${n}`,`af-apollo-click-item--${a}`,t].filter(Boolean).join(" "),children:[e.jsx("div",{className:"af-apollo-click-item__leading",children:e.jsx(H,{variant:n,state:a,basePictureProps:F,icon:s})}),e.jsx("div",{className:"af-apollo-click-item__content",children:e.jsx(V,{title:r,subtitle:i,textSecondary:o,textTertiary:x,tagLabel:B,tagProps:{...k??{},variant:a==="disabled"?"neutral":k==null?void 0:k.variant}})}),e.jsx("div",{className:"af-apollo-click-item__trailing",children:e.jsx(Z,{variant:n,state:a,onClick:M,ariaLabelForActionIcon:N})})]}),G=({title:t,subtitle:a,textSecondary:n,textTertiary:s,tagLabel:r,tagProps:i,TagComponent:o})=>e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"af-apollo-click-item__title",children:e.jsx("span",{children:t})}),a&&e.jsx("p",{className:"af-apollo-click-item__subtitle",children:a}),n&&e.jsx("p",{className:"af-apollo-click-item__secondary",children:n}),s&&e.jsx("p",{className:"af-apollo-click-item__tertiary",children:s}),r&&e.jsx("div",{className:"af-apollo-click-item__tag-container",children:e.jsx(o,{...i,children:r})})]}),J=t=>e.jsx(G,{...t,TagComponent:Q}),K="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M686-450H190q-13%200-21.5-8.5T160-480q0-13%208.5-21.5T190-510h496L459-737q-9-9-9-21t9-21q9-9%2021-9t21%209l278%20278q5%205%207%2010t2%2011q0%206-2%2011t-7%2010L501-181q-9%209-21%209t-21-9q-9-9-9-21t9-21l227-227Z'/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M530-481%20353-658q-9-9-8.5-21t9.5-21q9-9%2021.5-9t21.5%209l198%20198q5%205%207%2010t2%2011q0%206-2%2011t-7%2010L396-261q-9%209-21%208.5t-21-9.5q-9-9-9-21.5t9-21.5l176-176Z'/%3e%3c/svg%3e",W=({state:t,variant:a,trailingClickIcon:n,ariaLabelForActionIcon:s,onClick:r,IconComponent:i,SpinnerComponent:o,ClickIconComponent:x})=>a==="large"?t==="loading"?e.jsx(o,{size:32}):e.jsx(x,{src:n,"aria-label":s,disabled:t==="disabled",onClick:r}):a==="small"?e.jsx(i,{src:U,"aria-label":s}):a==="agent"?e.jsx(x,{src:n,"aria-label":s,onClick:r}):null,X=t=>e.jsx(W,{trailingClickIcon:K,IconComponent:O,SpinnerComponent:D,ClickIconComponent:z,...t}),Y=({state:t,variant:a,icon:n,basePictureProps:s,IconComponent:r,BasePictureComponent:i})=>s&&a==="agent"?e.jsx(i,{...s}):n?e.jsx(r,{role:"presentation",src:n,variant:t==="disabled"&&a!=="small"?"disabled":"primary"}):null,ee=t=>e.jsx(Y,{BasePictureComponent:E,...t,IconComponent:O}),l=t=>e.jsx($,{ClickItemContentComponent:J,ClickItemSuffixComponent:X,ClickItemPrefixComponent:ee,...t}),C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M212-271v-279q0-12.75%208.68-21.38%208.67-8.62%2021.5-8.62%2012.82%200%2021.32%208.62%208.5%208.63%208.5%2021.38v279q0%2012.75-8.68%2021.37-8.67%208.63-21.5%208.63-12.82%200-21.32-8.63-8.5-8.62-8.5-21.37Zm242%200v-279q0-12.75%208.68-21.38%208.67-8.62%2021.5-8.62%2012.82%200%2021.32%208.62%208.5%208.63%208.5%2021.38v279q0%2012.75-8.68%2021.37-8.67%208.63-21.5%208.63-12.82%200-21.32-8.63-8.5-8.62-8.5-21.37ZM110-121q-12.75%200-21.37-8.68-8.63-8.67-8.63-21.5%200-12.82%208.63-21.32Q97.25-181%20110-181h740q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32-8.63%208.5-21.38%208.5H110Zm578-150v-279q0-12.75%208.68-21.38%208.67-8.62%2021.5-8.62%2012.82%200%2021.32%208.62%208.5%208.63%208.5%2021.38v279q0%2012.75-8.68%2021.37-8.67%208.63-21.5%208.63-12.82%200-21.32-8.63-8.5-8.62-8.5-21.37Zm166-369H103q-9.58%200-16.29-6.71Q80-653.42%2080-663v-17q0-6%203.5-11.5T92-700l358-204q14.17-8%2030-8t30%208l357%20203q6%204%209.5%2010t3.5%2013.5v10.23q0%2011.59-7.47%2019.43Q865.05-640%20854-640Z'/%3e%3c/svg%3e",te={title:"Components/List/ClickItem",component:l},c={name:"ClickItem",render:({...t})=>e.jsx(l,{...t}),args:{icon:C,basePictureProps:{src:"https://picsum.photos/48",alt:"random image"},title:"Titre",subtitle:"Sous-titre",textSecondary:"Texte secondaire",textTertiary:"Texte tertiaire",tagLabel:"Texte",tagProps:{variant:"info"},state:"default",variant:"large",ariaLabelForActionIcon:"Aller à la page de détails"},argTypes:{state:{options:Object.values(u),control:{type:"select"}},variant:{options:Object.values(R),control:{type:"select"}}}},m={name:"ClickItem Large",render:({...t})=>e.jsx(l,{...t}),args:{icon:C,title:"Titre",subtitle:"Sous-titre",textSecondary:"Texte secondaire",textTertiary:"Texte tertiaire",tagLabel:"Texte",tagProps:{variant:"info"},state:"default",variant:"large",ariaLabelForActionIcon:"Aller à la page de détails"},argTypes:{state:{options:Object.values(u),control:{type:"select"}}}},d={name:"ClickItem Medium",render:({...t})=>e.jsx(l,{...t}),args:{icon:C,title:"Titre",subtitle:"Sous-titre",tagLabel:"Texte",tagProps:{variant:"info"},state:"default",variant:"medium",ariaLabelForActionIcon:"Aller à la page de détails"},argTypes:{state:{options:Object.values(u),control:{type:"select"}}}},p={name:"ClickItem Small",render:({...t})=>e.jsx(l,{...t}),args:{icon:C,title:"Titre",state:"default",variant:"small"},argTypes:{state:{options:Object.values(u),control:{type:"select"}}}},g={name:"ClickItem Agent",render:({...t})=>e.jsx(l,{...t}),args:{basePictureProps:{src:"https://picsum.photos/48",alt:"random image"},title:"Titre",subtitle:"Sous-titre",state:"default",variant:"agent",ariaLabelForActionIcon:"Aller à la page de détails"},argTypes:{state:{options:Object.values(u),control:{type:"select"}}}};var I,v,b;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "ClickItem",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    icon: accountBalance,
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
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,S,j;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "ClickItem Large",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    icon: accountBalance,
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
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var T,y,h;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "ClickItem Medium",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    icon: accountBalance,
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
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var q,_,w;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "ClickItem Small",
  render: ({
    ...args
  }) => <ClickItem {...args} />,
  args: {
    icon: accountBalance,
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
}`,...(w=(_=p.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var L,A,P;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(A=g.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const ae=["ClickItemDefault","ClickItemLargeStory","ClickItemMediumStory","ClickItemSmallStory","ClickItemAgentStory"],le=Object.freeze(Object.defineProperty({__proto__:null,ClickItemAgentStory:g,ClickItemDefault:c,ClickItemLargeStory:m,ClickItemMediumStory:d,ClickItemSmallStory:p,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{le as C,c as a,m as b,d as c,p as d,g as e};
