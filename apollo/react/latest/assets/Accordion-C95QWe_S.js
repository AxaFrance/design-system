import{j as n}from"./index-C-iqcyhV.js";import{useMDXComponents as m}from"./index-DSfWgH82.js";import{M as p,C as i,a as r}from"./index-B4V2J_It.js";import{A as h,a as t,b as c,c as s,d as a,e as d}from"./Accordion.stories-Dj78tsiO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-UFig1MUP.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./ItemPaginationApollo-S-a6kIDq.js";import"./AccordionCoreApollo-NaJSfCgq.js";import"./account_balance-fill-BrliCjlS.js";function l(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:h,name:"Accordion"}),`
`,n.jsx(o.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsx(o.h2,{id:"import",children:"Import"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Accordion } from "@axa-fr/design-system-apollo-react";
`})}),`
`,n.jsx(o.h2,{id:"uses",children:"Uses"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"Accordion"})," component displays content in a collapsible panel with a customizable summary section. It supports icons, titles, subtitles, tags, dates, and additional info fields."]}),`
`,n.jsxs(o.p,{children:["When the user clicks on the summary to open or close the accordion you can use the ",n.jsx(o.code,{children:"onClick"})," function prop to do something at that moment. (you will get the native event as ",n.jsx(o.code,{children:"onClick"})," parameter)"]}),`
`,n.jsxs(o.p,{children:["You can also add/change the props of the ",n.jsx(o.code,{children:"Tag"})," component inside of the ",n.jsx(o.code,{children:"Accordion"}),"."]}),`
`,n.jsx(o.h3,{id:"accordion-1",children:"Accordion"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

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
`,n.jsx(o.h3,{id:"accordion-playground",children:"Accordion Playground"}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(o.h3,{id:"accordion-primary",children:"Accordion Primary"}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(o.h3,{id:"accordion-secondary",children:"Accordion secondary"}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(r,{of:s}),`
`,n.jsx(o.h3,{id:"accordion-primary-plain",children:"Accordion Primary plain"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

export const AccordionComponent = () => (
  <Accordion
    icon={<Svg src={callIcon} />}
    title="Titre onglet"
    subtitle="Titre onglet"
    tag="En attente"
    date="01/01/2021"
    info="+ 686,00 €"
    isPlain
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </Accordion>
);
`})}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(o.h3,{id:"accordion-secondary-plain",children:"Accordion secondary plain"}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(r,{of:d})]})}function N(e={}){const{wrapper:o}={...m(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(l,{...e})}):l(e)}export{N as default};
