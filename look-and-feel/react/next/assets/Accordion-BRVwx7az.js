import{j as o}from"./index-DK-fRI8B.js";import{useMDXComponents as s}from"./index-G7nTXt62.js";import{M as r,C as c,a}from"./index-JPIpSut2.js";import{A as l,a as t}from"./Accordion.stories-nY2qAaPr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-Dv1urgas.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DropdownCommon-D0NIAyEG.js";import"./AccordionCoreLF-B_ce6QPv.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{of:l,name:"Accordion"}),`
`,o.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,o.jsx(n.h2,{id:"import",children:"Import"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from "@axa-fr/design-system-apollo-react/lf";
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
`,o.jsx(c,{of:t}),`
`,o.jsx(a,{of:t})]})}function y(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(i,{...e})}):i(e)}export{y as default};
