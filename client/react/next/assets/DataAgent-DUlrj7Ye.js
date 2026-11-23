import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-CZv_J0c4.js";import{i,l as a,n as o,s}from"./blocks-D6-m19dr.js";import{i as c,n as l,r as u,t as d}from"./DataAgent.stories-CaDIH1TG.js";function f(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...r(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`DataAgent`}),`
`,(0,m.jsx)(t.h1,{id:`dataagent`,children:`DataAgent`}),`
`,(0,m.jsxs)(t.blockquote,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Warning:`}),` The `,(0,m.jsx)(t.code,{children:`texteOrias`}),` prop is deprecated. Please use `,(0,m.jsx)(t.code,{children:`oriasText`}),` instead.`]}),`
`]}),`
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
    aria-label="Votre conseiller"
    clickContents={[
      {
        icon: accountBalanceWallet,
        onClick: () => {},
        title: "Envoyer un message",
      },
      {
        icon: accountBalanceWallet,
        onClick: () => {},
        title: "Envoyer un message à l’agent",
      },
      {
        icon: accountBalanceWallet,
        onClick: () => {},
        title: "Accéder à plus d’informations",
      },
    ]}
    contents={[
      {
        iconProps: { src: accountBalanceWallet },
        subtitle1: "01 23 34 45 67",
        title: "",
        type: "icon",
      },
      {
        iconProps: { src: accountBalanceWallet },
        subtitle1: "01 23 34 45 67",
        title: "",
        type: "icon",
      },
      {
        iconProps: { src: accountBalanceWallet },
        subtitle1: "01 23 34 45 67",
        title: "",
        type: "icon",
      },
    ]}
    oriasText="N° Orias (orias.fr) : 10057601 - 10057601"
  />
);
`})}),`
`,(0,m.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`contents-and-click-items`,children:`Contents and click items`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`contents`}),` and `,(0,m.jsx)(t.code,{children:`clickContents`}),` take one to three items each, as the mockup has three content slots
and three click slots (the second and third ones being optional).`]}),`
`,(0,m.jsxs)(t.p,{children:[`Click items always use the `,(0,m.jsx)(t.code,{children:`small`}),` Click Item of the mockup: their `,(0,m.jsx)(t.code,{children:`variant`}),` is ignored.`]}),`
`,(0,m.jsx)(t.h2,{id:`compact`,children:`Compact`}),`
`,(0,m.jsxs)(t.p,{children:[`Use `,(0,m.jsx)(t.code,{children:`variant="compact"`}),` to force the compact layout (header only — avatar + name + subtitle) regardless of screen size.
This is useful when the DataAgent is embedded in a constrained layout such as a desktop sidebar.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The compact layout shows a single Click Item built from `,(0,m.jsx)(t.code,{children:`agentProps`}),`. Pass an `,(0,m.jsx)(t.code,{children:`onClick`}),` in
`,(0,m.jsx)(t.code,{children:`compactClickItemProps`}),` to make it interactive.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<DataAgent
  agentProps={{
    picture: "https://dummyimage.com/48/48/fff&text=A",
    subtitle: "AXA Assurance & Banque",
    title: "Michel Lhote",
    type: "picture",
  }}
  compactClickItemProps={{ onClick: () => {} }}
  variant="compact"
/>
`})}),`
`,(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.p,{children:[`The DataAgent renders a `,(0,m.jsx)(t.code,{children:`section`}),`. Name it with `,(0,m.jsx)(t.code,{children:`aria-label`}),` or `,(0,m.jsx)(t.code,{children:`aria-labelledby`}),` (for example
the id of the heading displayed above it) so that screen readers list it as a region. The
contents and the click items are rendered as lists.`]})]})}function p(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),n(),a(),c()})))()}h();export{p as default};