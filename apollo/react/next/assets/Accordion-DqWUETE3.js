import{j as o}from"./index-C1mcBe1y.js";import{useMDXComponents as d}from"./index-G7nTXt62.js";import{M as l,C as i,a as t}from"./index-p0g87jAq.js";import{A as m,a as r,b as c,c as s}from"./Accordion.stories-B4jzj4NI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-D4cE8pam.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FooterApollo-CIUCdgT2.js";import"./AccordionCoreApollo-BeQullDp.js";import"./account_balance-fill-BrliCjlS.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{of:m,name:"Accordion"}),`
`,o.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,o.jsx(n.h2,{id:"import",children:"Import"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from "@axa-fr/design-system-apollo-react";
`})}),`
`,o.jsx(n.h2,{id:"uses",children:"Uses"}),`
`,o.jsxs(n.p,{children:["The ",o.jsx(n.code,{children:"Accordion"})," component displays content in a collapsible panel with a customizable summary section. It supports icons, titles, subtitles, tags, dates, and additional info fields."]}),`
`,o.jsxs(n.p,{children:["When the user clicks on the summary to open or close the accordion you can use the ",o.jsx(n.code,{children:"onClick"})," function prop to do something at that moment. (you will get the native event as ",o.jsx(n.code,{children:"onClick"})," parameter)"]}),`
`,o.jsxs(n.p,{children:["You can also add/change the props of the ",o.jsx(n.code,{children:"Tag"})," component inside of the ",o.jsx(n.code,{children:"Accordion"}),"."]}),`
`,o.jsx(n.h3,{id:"accordion-1",children:"Accordion"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

export const AccordionComponent = () => (
  <Accordion
    icon={<Svg src={callIcon} />}
    title="Titre onglet"
    subtitle="Titre onglet"
    tag="En attente"
    date="01/01/2021"
    info="+ 686,00 €"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </Accordion>
);
`})}),`
`,o.jsx(n.h3,{id:"accordion-playground",children:"Accordion Playground"}),`
`,o.jsx(i,{of:r}),`
`,o.jsx(t,{of:r}),`
`,o.jsx(n.h3,{id:"accordion-primary",children:"Accordion Primary"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(t,{of:c}),`
`,o.jsx(n.h3,{id:"accordion-secondary",children:"Accordion secondary"}),`
`,o.jsx(i,{of:s}),`
`,o.jsx(t,{of:s})]})}function I(e={}){const{wrapper:n}={...d(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(a,{...e})}):a(e)}export{I as default};
