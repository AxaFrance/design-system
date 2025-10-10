import{j as n}from"./index-C1mcBe1y.js";import{useMDXComponents as i}from"./index-G7nTXt62.js";import"./index-D6yjojhM.js";import{D as r,a}from"./DataAgent.stories-iBkEuYxw.js";import{M as l,C as c,a as s}from"./index-DVS2yFFV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./preview-B3CzhLN5.js";import"./iframe-C0f0000E.js";import"./DocsRenderer-CFRXHY34-Cyoi39f2.js";import"./react-18-Cg43Tkb0.js";import"./TimelineVerticalLF-B8tcqqoq.js";import"./constants-DLOxiQAl.js";import"./account_balance_wallet-fill-Bl6m0U4x.js";import"./ContentItemMonoLF-DTI00Iqp.js";import"./DividerCommon-B5VtxBpX.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:r,name:"DataAgent"}),`
`,n.jsx(t.h1,{id:"dataagent",children:"DataAgent"}),`
`,n.jsx(t.p,{children:"To use the DataAgent import it like that:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { DataAgent } from "@axa-fr/design-system-apollo-react/lf";
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
`,n.jsx(c,{of:a}),`
`,n.jsx(s,{of:a})]})}function E(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{E as default};
