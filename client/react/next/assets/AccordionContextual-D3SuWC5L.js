import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-BR0-TDj_.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-38CJBNT-.js";import{a as c,i as l,n as u,r as d,t as f}from"./AccordionContextual.stories-DMAUAt_5.js";function p(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...s(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:l,name:`AccordionContextual`}),`
`,(0,h.jsx)(n.h1,{id:`accordioncontextual`,children:`AccordionContextual`}),`
`,(0,h.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`import { AccordionContextual } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,h.jsx)(n.h2,{id:`uses`,children:`Uses`}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`AccordionContextual`}),` component is a secondary interactive component that allows displaying or hiding additional content. It provides smooth navigation without overloading the page, by presenting non-essential information to the user journey.`]}),`
`,(0,h.jsxs)(n.p,{children:[`When the user clicks on the summary to open or close the accordion you can use the `,(0,h.jsx)(n.code,{children:`onClick`}),` function prop to do something at that moment. (you will get the native event as `,(0,h.jsx)(n.code,{children:`onClick`}),` parameter)`]}),`
`,(0,h.jsx)(n.h3,{id:`accordion-contextual`,children:`Accordion Contextual`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`import bankIcon from "@material-symbols/svg-700/rounded/account_balance-fill.svg";

export const AccordionContextualComponent = () => (
  <AccordionContextual icon={bankIcon} title="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionContextual>
);
`})}),`
`,(0,h.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(n.h3,{id:`accordion-contextual-info`,children:`Accordion Contextual Info`}),`
`,(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(t,{of:f}),`
`,(0,h.jsx)(n.h3,{id:`accordion-contextual-warning`,children:`Accordion Contextual Warning`}),`
`,(0,h.jsx)(r,{of:d}),`
`,(0,h.jsx)(t,{of:d}),`
`,(0,h.jsx)(n.h3,{id:`accordion-contextual-reverse`,children:`Accordion Contextual Reverse`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`export const AccordionContextualComponent = () => (
  <AccordionContextual variant="reverse" title="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionContextual>
);
`})}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(t,{of:u})]})}function m(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=a(),o(),n(),c()})))()}g();export{m as default};