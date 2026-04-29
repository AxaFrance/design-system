import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{a as o}from"./index-B-lxVbXh.js";import"./LoaderApollo-CG_ZHi44.js";/* empty css               */import"./index-CtOEgLBf.js";import{a as d,D as r}from"./alternate_email-fill-CI7sRtE0.js";import{a as t}from"./account_balance-fill-CoD1cDje.js";const g={title:"Components/DataAgent",component:r},e={name:"DataAgent",render:({...a})=>m.jsx(r,{...a}),args:{agentProps:{picture:"https://dummyimage.com/48/48/fff&text=A",title:"Michel Lhote",subtitle:"AXA Assurance & Banque",type:"picture"},agentContractProps:{title:"Contrat rattaché",subtitle:"Assurance Vie, Auto, Habitation, Complémentaire santé",type:"stick"},contents:[{type:"icon",icon:t,subtitle1:"6 place du 14 juillet 28 240 Ivry la Bataille"},{type:"icon",icon:t,subtitle1:"01 23 34 45 67"},{type:"icon",icon:t,subtitle1:"Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00"}],clickContents:[{variant:"large",icon:d,title:"Nous contacter",onClick:o("Clicked on Nous contacter")},{variant:"small",icon:t,title:"Prendre rendez-vous",onClick:o("Clicked on Prendre rendez-vous")},{variant:"small",icon:t,title:"Voir le site-web",onClick:o("Clicked on Voir le site-web")}],texteOrias:"N° Orias (orias.fr) : 10057601 - 10057601",isCompact:!0}},n={name:"DataAgent Desktop Compact",render:({...a})=>m.jsx(r,{...a}),args:{agentProps:{picture:"https://dummyimage.com/48/48/fff&text=A",title:"Michel Lhote",subtitle:"AXA Assurance & Banque",type:"picture"},variant:"compact"}};var i,c,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      subtitle1: "6 place du 14 juillet 28 240 Ivry la Bataille"
    }, {
      type: "icon",
      icon: accountBalance,
      subtitle1: "01 23 34 45 67"
    }, {
      type: "icon",
      icon: accountBalance,
      subtitle1: "Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00"
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
    texteOrias: "N° Orias (orias.fr) : 10057601 - 10057601",
    isCompact: true
  }
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var l,u,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "DataAgent Desktop Compact",
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
    variant: "compact"
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const A=["Default","DesktopCompact"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:e,DesktopCompact:n,__namedExportsOrder:A,default:g},Symbol.toStringTag,{value:"Module"}));export{D,e as a,n as b};
