import{j as n}from"./index-C-iqcyhV.js";import{useMDXComponents as i}from"./index-DSfWgH82.js";import"./index-kTmDmDwr.js";import{D as r,a}from"./DataAgent.stories-CV2nbBFp.js";import{M as c,C as s,a as m}from"./index-Dj85IAwr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-De5Vv5UW.js";import"./iframe-D4qeMBF5.js";import"./DocsRenderer-CFRXHY34-DkvzPDlt.js";import"./react-18-C_RNIbSA.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./FieldsetApollo-hGX-QcyY.js";import"./alternate_email-fill-CaD0Nzy4.js";import"./ClickItemApollo-D07C3uhE.js";import"./ContentItemMonoApollo-SLX4yJ31.js";import"./ContentItemMonoCore-CvLSPxTC.js";import"./DividerCommon-CMt7iPlg.js";import"./account_balance-fill-CoD1cDje.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:r,name:"DataAgent"}),`
`,n.jsx(t.h1,{id:"dataagent",children:"DataAgent"}),`
`,n.jsx(t.p,{children:"To use the DataAgent import it like that:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { DataAgent } from "@axa-fr/canopee-react/prospect";
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
`,n.jsx(t.h2,{id:"default",children:"Default"}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(m,{of:a})]})}function O(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{O as default};
