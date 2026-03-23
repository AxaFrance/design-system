import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DSfWgH82.js";import"./index-B9NoS1le.js";import{D as r,a}from"./DataAgent.stories-X8ZrhmjO.js";import{M as c,C as l,a as s}from"./index-DphQ8Pyt.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-B0LVywEy.js";import"./iframe-DPwl6srd.js";import"./DocsRenderer-CFRXHY34-CURFWGK4.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./LoaderLF-emSfIVr0.js";import"./LoaderCommon-BmA7JIbz.js";import"./index-63p0MazF.js";/* empty css               */import"./DataAgentLF-BKEQhVoC.js";import"./ClickItemLF-Bx8CF2D4.js";import"./ContentItemMonoLF-zvHlTw5A.js";import"./ContentItemMonoCore-D0BJG1Il.js";import"./DividerCommon-BCwyoHn0.js";import"./account_balance_wallet-fill-DgcPlY6e.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:r,name:"DataAgent"}),`
`,n.jsx(t.h1,{id:"dataagent",children:"DataAgent"}),`
`,n.jsx(t.p,{children:"To use the DataAgent import it like that:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { DataAgent } from "@axa-fr/canopee-react/client";
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
`,n.jsx(t.h2,{id:"default",children:"Default"}),`
`,n.jsx(l,{of:a}),`
`,n.jsx(s,{of:a})]})}function P(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{P as default};
