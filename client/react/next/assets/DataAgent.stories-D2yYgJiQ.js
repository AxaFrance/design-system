import{j as t}from"./index-C-iqcyhV.js";import{e as _}from"./LevelSelectorLF-BOPJTp8z.js";import{r as c}from"./index-ZnYipkzV.js";import{u as b,B as k}from"./constants-DIJr0UP1.js";import{C as D}from"./ClickItemLF-I-LB0Hc3.js";import{C as w}from"./ContentItemMonoLF-qzYBBmIP.js";import{D as E}from"./DividerCommon-BFbvSiAd.js";import{a as m}from"./account_balance_wallet-fill-DgcPlY6e.js";import{a as u}from"./index-B-lxVbXh.js";const N=({className:e,agentProps:i,agentContractProps:p,contents:a,clickContents:n,texteOrias:g,DividerComponent:o,ContentItemMonoComponent:r,ClickItemComponent:d,isCompact:y=!0})=>{const T=c.useMemo(()=>_("af-data-agent",e),[e]),A=b(k.SM),j=()=>t.jsxs(t.Fragment,{children:[t.jsxs("section",{className:"af-data-agent__intro",children:[t.jsx(r,{...i,type:"picture"}),p?t.jsx(r,{...p,type:"stick"}):null]}),t.jsx(o,{}),a&&(a==null?void 0:a.length)>0?t.jsx("section",{className:"af-data-agent__info-content",children:a.map(l=>t.jsxs(c.Fragment,{children:[t.jsx(r,{...l,type:"icon"}),t.jsx(o,{className:"af-data-agent__line"})]},`content--${crypto.randomUUID()}`))}):null,n&&(n==null?void 0:n.length)>0?t.jsx("section",{className:"af-data-agent__info-click-content",children:n.map(l=>t.jsxs(c.Fragment,{children:[t.jsx(d,{...l,variant:"small"}),t.jsx(o,{className:"af-data-agent__line"})]},`clickContent--${crypto.randomUUID()}`))}):null,!!g&&t.jsx("p",{className:"af-data-agent__text-orias",children:g})]}),C=()=>t.jsx("section",{className:"af-data-agent__intro",children:t.jsx(d,{...i,basePictureProps:{src:i.picture,alt:i.title},variant:"agent"})});return t.jsx("section",{className:T,children:A&&y?C():j()})},h=e=>t.jsx(N,{...e,DividerComponent:E,ClickItemComponent:D,ContentItemMonoComponent:w}),B="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M795-120q-116%200-236.5-56T335-335Q232-438%20176-558.5T120-795q0-19%2013-32t32-13h140q14%200%2024%2010t14%2025l27%20126q2%2014-.5%2025.5T359-634L259-533q26%2044%2055%2082t64%2072q37%2038%2078%2069.5t86%2055.5l95-98q10-11%2023-15t26-2l119%2026q15%204%2025%2016t10%2027v135q0%2019-13%2032t-32%2013Z'/%3e%3c/svg%3e",f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M320-160v-580q0-24.75%2017.63-42.38Q355.25-800%20380-800h280q24.75%200%2042.38%2017.62Q720-764.75%20720-740v140h60q41.67%200%2070.83%2029.17Q880-541.67%20880-500v280q0%2024.75-17.62%2042.37Q844.75-160%20820-160H320Zm-135%2040q42%200%2073.5-31.5T290-225v-310q0-42-31.5-73.5T185-640q-42%200-73.5%2031.5T80-535v310q0%2042%2031.5%2073.5T185-120Zm195-480h280v-140H380v140Zm250%20200q17%200%2028.5-11.5T670-440q0-17-11.5-28.5T630-480q-17%200-28.5%2011.5T590-440q0%2017%2011.5%2028.5T630-400Zm120%200q17%200%2028.5-11.5T790-440q0-17-11.5-28.5T750-480q-17%200-28.5%2011.5T710-440q0%2017%2011.5%2028.5T750-400ZM630-280q17%200%2028.5-11.5T670-320q0-17-11.5-28.5T630-360q-17%200-28.5%2011.5T590-320q0%2017%2011.5%2028.5T630-280Zm120%200q17%200%2028.5-11.5T790-320q0-17-11.5-28.5T750-360q-17%200-28.5%2011.5T710-320q0%2017%2011.5%2028.5T750-280Zm-310%200h80q12.75%200%2021.38-8.63Q550-297.25%20550-310v-140q0-12.75-8.62-21.38Q532.75-480%20520-480h-80q-12.75%200-21.37%208.62Q410-462.75%20410-450v140q0%2012.75%208.63%2021.37Q427.25-280%20440-280Z'/%3e%3c/svg%3e",M={title:"Components/DataAgent",component:h},s={name:"DataAgent",render:({...e})=>t.jsx(h,{...e}),args:{agentProps:{picture:"https://dummyimage.com/48/48/fff&text=A",title:"Michel Lhote",subtitle:"AXA Assurance & Banque",type:"picture"},agentContractProps:{title:"Contrat rattaché",subtitle:"Assurance Vie, Auto, Habitation, Complémentaire santé",type:"stick"},contents:[{type:"icon",icon:B,subtitle1:"01 23 34 45 67",title:""},{type:"icon",icon:f,subtitle1:"01 23 34 45 67",title:""},{type:"icon",icon:f,subtitle1:"01 23 34 45 67",title:""}],clickContents:[{variant:"small",icon:m,title:"Envoyer un message",onClick:u("Clicked on Envoyer un message")},{variant:"small",icon:m,title:"Envoyer un message à l’agent",onClick:u("Clicked on Envoyer un message à l’agent")},{variant:"small",icon:m,title:"Accéder à plus d’informations",onClick:u("Clicked on Accéder à plus d’informations")}],texteOrias:"N° Orias (orias.fr) : 10057601 - 10057601",isCompact:!0}};var q,v,x;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "DataAgent",
  render: ({
    ...args
  }) => <DataAgent {...args} />,
  args: {
    agentProps: {
      picture: "https://dummyimage.com/48/48/fff&text=A",
      title: "Michel Lhote",
      subtitle: "AXA Assurance & Banque",
      type: "picture"
    },
    agentContractProps: {
      title: "Contrat rattaché",
      subtitle: "Assurance Vie, Auto, Habitation, Complémentaire santé",
      type: "stick"
    },
    contents: [{
      type: "icon",
      icon: call,
      subtitle1: "01 23 34 45 67",
      title: ""
    }, {
      type: "icon",
      icon: fax,
      subtitle1: "01 23 34 45 67",
      title: ""
    }, {
      type: "icon",
      icon: fax,
      subtitle1: "01 23 34 45 67",
      title: ""
    }],
    clickContents: [{
      variant: "small",
      icon: accountBalanceWallet,
      title: "Envoyer un message",
      onClick: action("Clicked on Envoyer un message")
    }, {
      variant: "small",
      icon: accountBalanceWallet,
      title: "Envoyer un message à l’agent",
      onClick: action("Clicked on Envoyer un message à l’agent")
    }, {
      variant: "small",
      icon: accountBalanceWallet,
      title: "Accéder à plus d’informations",
      onClick: action("Clicked on Accéder à plus d’informations")
    }],
    texteOrias: "N° Orias (orias.fr) : 10057601 - 10057601",
    isCompact: true
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const Q=["Default"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:Q,default:M},Symbol.toStringTag,{value:"Module"}));export{W as D,s as a};
