import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-eNU0SGNV.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-Apjsvtpk.js";import{i as c,n as l,r as u,t as d}from"./DataAgent.stories-CgWm37aN.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:d,name:`DataAgent`}),`
`,(0,m.jsx)(n.h1,{id:`dataagent`,children:`DataAgent`}),`
`,(0,m.jsx)(n.p,{children:`To use the DataAgent import it like that:`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { DataAgent } from "@axa-fr/canopee-react/prospect";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";

const MyComponent = () => (
  <DataAgent
    agentContractProps={{
      subtitle: "Assurance Vie, Auto, Habitation, Complémentaire santé",
      title: "Contrat rattaché",
      type: "stick",
    }}
    agentProps={{
      picture: "https://dummyimage.com/48/48/fff&text=A",
      subtitle: "AXA Assurance & Banque",
      title: "Michel Lhote",
      type: "picture",
    }}
    clickContents={[
      {
        icon: accountBalance,
        onClick: () => {},
        title: "Envoyer un message",
        variant: "small",
      },
      {
        icon: accountBalance,
        onClick: () => {},
        title: "Envoyer un message à l’agent",
        variant: "small",
      },
      {
        icon: accountBalance,
        onClick: () => {},
        title: "Accéder à plus d’informations",
        variant: "small",
      },
    ]}
    contents={[
      {
        icon: accountBalance,
        subtitle1: "01 23 34 45 67",
        title: "",
        type: "icon",
      },
      {
        icon: accountBalance,
        subtitle1: "01 23 34 45 67",
        title: "",
        type: "icon",
      },
      {
        icon: accountBalance,
        subtitle1: "01 23 34 45 67",
        title: "",
        type: "icon",
      },
    ]}
    texteOrias="N° Orias (orias.fr) : 10057601 - 10057601"
  />
);
`})}),`
`,(0,m.jsx)(n.h2,{id:`default`,children:`Default`}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(t,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`compact`,children:`Compact`}),`
`,(0,m.jsxs)(n.p,{children:[`Use `,(0,m.jsx)(n.code,{children:`variant="compact"`}),` to force the compact layout (header only — avatar + name + subtitle) regardless of screen size.
This is useful when the DataAgent is embedded in a constrained layout such as a desktop sidebar.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<DataAgent
  agentProps={{
    picture: "https://dummyimage.com/48/48/fff&text=A",
    subtitle: "AXA Assurance & Banque",
    title: "Michel Lhote",
    type: "picture",
  }}
  variant="compact"
/>
`})}),`
`,(0,m.jsx)(r,{of:u}),`
`,(0,m.jsx)(t,{of:u})]})}function p(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=a(),o(),n(),c()})))()}h();export{p as default};