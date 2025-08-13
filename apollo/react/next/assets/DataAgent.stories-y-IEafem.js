import{j as t}from"./index-C1mcBe1y.js";import{a as d}from"./index-B-lxVbXh.js";import{g as q}from"./DropdownCommon-CY8DX785.js";import{r as i}from"./index-DbaA8R3S.js";import{C as A,a as o}from"./account_balance-fill-Cu7S9YfI.js";import{C as _}from"./ContentItemMonoApollo-DHe8_syG.js";import{D as w}from"./DividerCommon-DKfPuOpT.js";const N=e=>{const r=i.useCallback(n=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),c=i.useCallback(()=>window.innerWidth<=e,[e]),a=i.useCallback(()=>!1,[]);return i.useSyncExternalStore(r,c,a)},k={SM:667},D=({className:e,agentProps:r,agentContractProps:c,contents:a,clickContents:n,texteOrias:p,DividerComponent:l,ContentItemMonoComponent:u,ClickItemComponent:g})=>{const j=i.useMemo(()=>q("af-data-agent",e),[e]),b=N(k.SM),y=()=>t.jsxs(t.Fragment,{children:[t.jsxs("section",{className:"af-data-agent__intro",children:[t.jsx(u,{...r,type:"picture"}),c?t.jsx(u,{...c,type:"stick"}):null]}),t.jsx(l,{}),a&&(a==null?void 0:a.length)>0?t.jsx("section",{className:"af-data-agent__info-content",children:a.map(m=>t.jsxs(i.Fragment,{children:[t.jsx(u,{...m,type:"icon"}),t.jsx(l,{className:"af-data-agent__line"})]},`content--${crypto.randomUUID()}`))}):null,n&&(n==null?void 0:n.length)>0?t.jsx("section",{className:"af-data-agent__info-click-content",children:n.map(m=>t.jsxs(i.Fragment,{children:[t.jsx(g,{...m,variant:"small"}),t.jsx(l,{className:"af-data-agent__line"})]},`clickContent--${crypto.randomUUID()}`))}):null,!!p&&t.jsx("p",{className:"af-data-agent__text-orias",children:p})]}),C=()=>t.jsx("section",{className:"af-data-agent__intro",children:t.jsx(g,{...r,basePictureProps:{src:r.picture,alt:r.title},variant:"agent"})});return t.jsx("section",{className:j,children:b?C():y()})},v=e=>t.jsx(D,{...e,DividerComponent:w,ClickItemComponent:A,ContentItemMonoComponent:_}),B="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-80q-83%200-156-31.5T197-197q-54-54-85.5-127T80-480q0-83%2031.5-156T197-763q54-54%20127-85.5T480-880q83%200%20156%2031.5T763-763q54%2054%2085.5%20127T880-480v53q0%2056-39.34%2094.5Q801.31-294%20744-294q-36.08%200-68.04-17.5Q644-329%20627-361q-26%2034-65.08%2050.5Q522.83-294%20480-294q-77.61%200-132.3-54Q293-402%20293-480.01q0-78.02%2054.7-133Q402.39-668%20480-668q77.6%200%20132.3%2054.99Q667-558.02%20667-480v53q0%2030.61%2022.5%2051.81Q712-354%20743.5-354t54-21.19Q820-396.39%20820-427v-53q0-142.38-98.81-241.19T480-820q-142.37%200-241.19%2098.81Q140-622.38%20140-480q0%20142.37%2098.81%20241.19Q337.63-140%20480-140h184q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32Q676.75-80%20664-80H480Zm.06-274Q533-354%20570-390.75T607-480q0-54-37.06-91t-90-37Q427-608%20390-571t-37%2091q0%2052.5%2037.06%2089.25t90%2036.75Z'/%3e%3c/svg%3e",Q={title:"Components/DataAgent",component:v},s={name:"DataAgent",render:({...e})=>t.jsx(v,{...e}),args:{agentProps:{picture:"https://dummyimage.com/48/48/fff&text=A",title:"Michel Lhote",subtitle:"AXA Assurance & Banque",type:"picture"},agentContractProps:{title:"Contrat rattaché",subtitle:"Assurance Vie, Auto, Habitation, Complémentaire santé",type:"stick"},contents:[{type:"icon",icon:o,subtitle1:"6 place du 14 juillet 28 240 Ivry la Bataille",title:""},{type:"icon",icon:o,subtitle1:"01 23 34 45 67",title:""},{type:"icon",icon:o,subtitle1:"Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00",title:""}],clickContents:[{variant:"large",icon:B,title:"Nous contacter",onClick:d("Clicked on Nous contacter")},{variant:"small",icon:o,title:"Prendre rendez-vous",onClick:d("Clicked on Prendre rendez-vous")},{variant:"small",icon:o,title:"Voir le site-web",onClick:d("Clicked on Voir le site-web")}],texteOrias:"N° Orias (orias.fr) : 10057601 - 10057601"}};var h,f,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      icon: accountBalance,
      subtitle1: "6 place du 14 juillet 28 240 Ivry la Bataille",
      title: ""
    }, {
      type: "icon",
      icon: accountBalance,
      subtitle1: "01 23 34 45 67",
      title: ""
    }, {
      type: "icon",
      icon: accountBalance,
      subtitle1: "Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00",
      title: ""
    }],
    clickContents: [{
      variant: "large",
      icon: alternateEmail,
      title: "Nous contacter",
      onClick: action("Clicked on Nous contacter")
    }, {
      variant: "small",
      icon: accountBalance,
      title: "Prendre rendez-vous",
      onClick: action("Clicked on Prendre rendez-vous")
    }, {
      variant: "small",
      icon: accountBalance,
      title: "Voir le site-web",
      onClick: action("Clicked on Voir le site-web")
    }],
    texteOrias: "N° Orias (orias.fr) : 10057601 - 10057601"
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const S=["Default"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:S,default:Q},Symbol.toStringTag,{value:"Module"}));export{L as D,s as a};
