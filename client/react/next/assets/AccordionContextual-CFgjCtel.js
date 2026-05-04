import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-rw17kmD6.js";import{t as r}from"./mdx-react-shim-okekR0or.js";import{i,l as a,n as o,s}from"./blocks-DqZwWlVi.js";import{AccordionContextualInfoStory as c,AccordionContextualReverseStory as l,AccordionContextualWarningStory as u,n as d,t as f}from"./AccordionContextual.stories-HU1_sjAe.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:f,name:`AccordionContextual`}),`
`,(0,h.jsx)(t.h1,{id:`accordioncontextual`,children:`AccordionContextual`}),`
`,(0,h.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { AccordionContextual } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,h.jsx)(t.h2,{id:`uses`,children:`Uses`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`AccordionContextual`}),` component is a secondary interactive component that allows displaying or hiding additional content. It provides smooth navigation without overloading the page, by presenting non-essential information to the user journey.`]}),`
`,(0,h.jsxs)(t.p,{children:[`When the user clicks on the summary to open or close the accordion you can use the `,(0,h.jsx)(t.code,{children:`onClick`}),` function prop to do something at that moment. (you will get the native event as `,(0,h.jsx)(t.code,{children:`onClick`}),` parameter)`]}),`
`,(0,h.jsx)(t.h3,{id:`accordion-contextual`,children:`Accordion Contextual`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import bankIcon from "@material-symbols/svg-700/rounded/account_balance-fill.svg";

export const AccordionContextualComponent = () => (
  <AccordionContextual icon={bankIcon} title="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionContextual>
);
`})}),`
`,(0,h.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(t.h3,{id:`accordion-contextual-info`,children:`Accordion Contextual Info`}),`
`,(0,h.jsx)(o,{of:c}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(t.h3,{id:`accordion-contextual-warning`,children:`Accordion Contextual Warning`}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsx)(t.h3,{id:`accordion-contextual-reverse`,children:`Accordion Contextual Reverse`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`export const AccordionContextualComponent = () => (
  <AccordionContextual variant="reverse" title="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionContextual>
);
`})}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(i,{of:l})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),r(),a(),d()}))();export{m as default};