import{j as o}from"./index-C-iqcyhV.js";import{useMDXComponents as l}from"./index-DSfWgH82.js";import{M as d,C as t,a as i}from"./index-BG-gvhfB.js";import{A as m,a as r,b as a,c}from"./AccordionContextual.stories-CmQ8A7CF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-PYdvcFtJ.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./FieldsetLF-BHfV-a9y.js";import"./AccordionCoreLF-DCKa_vDM.js";import"./account_balance-fill-BrliCjlS.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:m,name:"AccordionContextual"}),`
`,o.jsx(n.h1,{id:"accordioncontextual",children:"AccordionContextual"}),`
`,o.jsx(n.h2,{id:"import",children:"Import"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { AccordionContextual } from "@axa-fr/canopee-react/client";
`})}),`
`,o.jsx(n.h2,{id:"uses",children:"Uses"}),`
`,o.jsxs(n.p,{children:["The ",o.jsx(n.code,{children:"AccordionContextual"})," component is a secondary interactive component that allows displaying or hiding additional content. It provides smooth navigation without overloading the page, by presenting non-essential information to the user journey."]}),`
`,o.jsxs(n.p,{children:["When the user clicks on the summary to open or close the accordion you can use the ",o.jsx(n.code,{children:"onClick"})," function prop to do something at that moment. (you will get the native event as ",o.jsx(n.code,{children:"onClick"})," parameter)"]}),`
`,o.jsx(n.h3,{id:"accordion-contextual",children:"Accordion Contextual"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import bankIcon from "@material-symbols/svg-700/rounded/account_balance-fill.svg";

export const AccordionContextualComponent = () => (
  <AccordionContextual icon={bankIcon} title="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionContextual>
);
`})}),`
`,o.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,o.jsx(n.h3,{id:"accordion-contextual-info",children:"Accordion Contextual Info"}),`
`,o.jsx(t,{of:r}),`
`,o.jsx(i,{of:r}),`
`,o.jsx(n.h3,{id:"accordion-contextual-warning",children:"Accordion Contextual Warning"}),`
`,o.jsx(t,{of:a}),`
`,o.jsx(i,{of:a}),`
`,o.jsx(n.h3,{id:"accordion-contextual-reverse",children:"Accordion Contextual Reverse"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`export const AccordionContextualComponent = () => (
  <AccordionContextual variant="reverse" title="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionContextual>
);
`})}),`
`,o.jsx(t,{of:c}),`
`,o.jsx(i,{of:c})]})}function N(e={}){const{wrapper:n}={...l(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{N as default};
