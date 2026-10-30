import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CjUrzS1v.js";import{i as c,n as l,r as u,t as d}from"./Summary.stories-BDi2ngVr.js";function f(e){let t={code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`summary`,children:`Summary`}),`
`,(0,m.jsx)(t.p,{children:`The summary is used to display a list of messages related to a user action. It
is a variation of the alert component.`}),`
`,(0,m.jsxs)(t.p,{children:[`The component takes a `,(0,m.jsx)(t.code,{children:`messages`}),` props which is an array of strings or JSX
elements.`]}),`
`,(0,m.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Summary } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,m.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`export const SummaryForm = () => (
  <Summary
    variant="error"
    title="Invalid form"
    messages={[
      <span>Field Author is required</span>,
      "Field PlaceName is required",
    ]}
  />
);
`})}),`
`,(0,m.jsx)(t.h3,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(r,{of:u}),`
`,(0,m.jsx)(s,{of:u}),`
`,(0,m.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,m.jsxs)(t.p,{children:[`The variants are the same as in the Action component: `,(0,m.jsx)(t.code,{children:`error`}),`, `,(0,m.jsx)(t.code,{children:`info`}),`,
`,(0,m.jsx)(t.code,{children:`success`}),` and `,(0,m.jsx)(t.code,{children:`warning`}),`.`]}),`
`,(0,m.jsx)(t.h4,{id:`success`,children:`Success`}),`
`,(0,m.jsx)(r,{of:d})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),a(),o(),c()})))()}h();export{p as default};