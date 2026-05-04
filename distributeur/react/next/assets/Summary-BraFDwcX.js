import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CrCwfpcW.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-B6pS4pdr.js";import{t as s}from"./mdx-react-shim-gngZ-MEU.js";import{Success as c,Template as l,n as u,t as d}from"./Summary.stories-BZxHLTGE.js";function f(e){let r={code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(r.h1,{id:`summary`,children:`Summary`}),`
`,(0,m.jsx)(r.p,{children:`The summary is used to display a list of messages related to a user action. It
is a variation of the alert component.`}),`
`,(0,m.jsxs)(r.p,{children:[`The component takes a `,(0,m.jsx)(r.code,{children:`messages`}),` props which is an array of strings or JSX
elements.`]}),`
`,(0,m.jsx)(r.h3,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-tsx`,children:`import { Summary } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,m.jsx)(r.h3,{id:`use`,children:`Use`}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-tsx`,children:`export const SummaryForm = () => (
  <Summary
    classModifier="error"
    title="Invalid form"
    messages={[
      <span>Field Author is required</span>,
      "Field PlaceName is required",
    ]}
  />
);
`})}),`
`,(0,m.jsx)(r.h3,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(r.h3,{id:`modifiers`,children:`Modifiers`}),`
`,(0,m.jsxs)(r.p,{children:[`The modifiers are the same as in the Action component: `,(0,m.jsx)(r.code,{children:`error`}),`, `,(0,m.jsx)(r.code,{children:`info`}),`,
`,(0,m.jsx)(r.code,{children:`success`}),` and `,(0,m.jsx)(r.code,{children:`warning`}),`.`]}),`
`,(0,m.jsx)(r.h4,{id:`success`,children:`Success`}),`
`,(0,m.jsx)(i,{of:c})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=o(),s(),r(),u()}))();export{p as default};