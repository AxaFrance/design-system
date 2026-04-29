import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-D3yXdDgY.js";import"./index-nkQJgN1y.js";import{D as l,a,b as o}from"./DataAgent.stories-CiGv7I1n.js";import{M as m,C as i,a as c}from"./index-D5npZezI.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-Bog_Xr1w.js";import"./iframe-Di2GpNPw.js";import"./DocsRenderer-CFRXHY34-CLspAd3I.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./LoaderApollo-DcYYkGhI.js";import"./index-BjCk13Vd.js";/* empty css               */import"./alternate_email-fill-BNP5iA9o.js";import"./ClickItemApollo-CZ5E-CZg.js";import"./ContentItemMonoApollo-D7NFH_eG.js";import"./ContentItemMonoCore-MZXn9TbY.js";import"./DividerCommon-DvDRQmwR.js";import"./account_balance-fill-CoD1cDje.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(m,{of:l,name:"DataAgent"}),`
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
`,n.jsx(i,{of:a}),`
`,n.jsx(c,{of:a}),`
`,n.jsx(t.h2,{id:"compact",children:"Compact"}),`
`,n.jsxs(t.p,{children:["Use ",n.jsx(t.code,{children:'variant="compact"'}),` to force the compact layout (header only — avatar + name + subtitle) regardless of screen size.
This is useful when the DataAgent is embedded in a constrained layout such as a desktop sidebar.`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`<DataAgent
  agentProps={{
    picture: "https://dummyimage.com/48/48/fff&text=A",
    subtitle: "AXA Assurance & Banque",
    title: "Michel Lhote",
    type: "picture",
  }}
  variant="compact"
/>
`})}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(c,{of:o})]})}function O(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{O as default};
