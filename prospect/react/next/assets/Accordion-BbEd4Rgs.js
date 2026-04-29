import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-D3yXdDgY.js";import{M as p,C as i,a as r}from"./index-pCfiA5Xu.js";import{A as h,a as t,b as c,c as s,d as a,e as d}from"./Accordion.stories-BeheSBnA.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DBaeIcud.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./LoaderApollo-CnKuE_r4.js";/* empty css               */import"./AccordionCoreApollo-D4ZPFDIl.js";import"./account_balance-fill-BrliCjlS.js";function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:h,name:"Accordion"}),`
`,o.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,o.jsx(n.h2,{id:"import",children:"Import"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from "@axa-fr/canopee-react/prospect";
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
`,o.jsx(i,{of:t}),`
`,o.jsx(r,{of:t}),`
`,o.jsx(n.h3,{id:"accordion-primary",children:"Accordion Primary"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(r,{of:c}),`
`,o.jsx(n.h3,{id:"accordion-secondary",children:"Accordion secondary"}),`
`,o.jsx(i,{of:s}),`
`,o.jsx(r,{of:s}),`
`,o.jsx(n.h3,{id:"accordion-primary-plain",children:"Accordion Primary plain"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

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
`,o.jsx(i,{of:a}),`
`,o.jsx(r,{of:a}),`
`,o.jsx(n.h3,{id:"accordion-secondary-plain",children:"Accordion secondary plain"}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(r,{of:d})]})}function T(e={}){const{wrapper:n}={...m(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(l,{...e})}):l(e)}export{T as default};
