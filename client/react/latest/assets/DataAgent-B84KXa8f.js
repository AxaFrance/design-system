import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-BkDSX2uU.js";import{t as r}from"./mdx-react-shim-ByL6om5n.js";import{i,l as a,n as o,s}from"./blocks-BXnQ6LPM.js";import{Default as c,DesktopCompact as l,n as u,t as d}from"./DataAgent.stories-1WBOTO8_.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`DataAgent`}),`
`,(0,m.jsx)(t.h1,{id:`dataagent`,children:`DataAgent`}),`
`,(0,m.jsx)(t.p,{children:`To use the DataAgent import it like that:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { DataAgent } from "@axa-fr/canopee-react/client";
import accountBalanceWallet from "@material-symbols/svg-400/rounded/account_balance_wallet-fill.svg";

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
        icon: accountBalanceWallet,
        onClick: () => {},
        title: "Envoyer un message",
        variant: "small",
      },
      {
        icon: accountBalanceWallet,
        onClick: () => {},
        title: "Envoyer un message à l’agent",
        variant: "small",
      },
      {
        icon: accountBalanceWallet,
        onClick: () => {},
        title: "Accéder à plus d’informations",
        variant: "small",
      },
    ]}
    contents={[
      {
        icon: accountBalanceWallet,
        subtitle1: "01 23 34 45 67",
        title: "",
        type: "icon",
      },
      {
        icon: accountBalanceWallet,
        subtitle1: "01 23 34 45 67",
        title: "",
        type: "icon",
      },
      {
        icon: accountBalanceWallet,
        subtitle1: "01 23 34 45 67",
        title: "",
        type: "icon",
      },
    ]}
    texteOrias="N° Orias (orias.fr) : 10057601 - 10057601"
  />
);
`})}),`
`,(0,m.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,m.jsx)(o,{of:c}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`compact`,children:`Compact`}),`
`,(0,m.jsxs)(t.p,{children:[`Use `,(0,m.jsx)(t.code,{children:`variant="compact"`}),` to force the compact layout (header only — avatar + name + subtitle) regardless of screen size.
This is useful when the DataAgent is embedded in a constrained layout such as a desktop sidebar.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<DataAgent
  agentProps={{
    picture: "https://dummyimage.com/48/48/fff&text=A",
    subtitle: "AXA Assurance & Banque",
    title: "Michel Lhote",
    type: "picture",
  }}
  variant="compact"
/>
`})}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(i,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),a(),u()}))();export{p as default};