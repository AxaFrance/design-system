import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-DTWLKPUo.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-Ct6J50RV.js";import{a as c,i as l,n as u,r as d,t as f}from"./Card.stories-BVFncqpD.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...s(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:u,name:`Card`}),`
`,(0,h.jsx)(n.h1,{id:`card`,children:`Card`}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.strong,{children:`Card`}),` component is a simple wrapper that adds `,(0,h.jsx)(n.strong,{children:`padding and a border`}),`.
Use the `,(0,h.jsx)(n.code,{children:`as`}),` prop to control the underlying HTML element.`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Use the `,(0,h.jsx)(n.code,{children:`className`}),` prop to add custom classes if needed.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`import { Card, Heading } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,h.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`// Basic card
<Card>
  <Heading level={2} className="af-card__title">My card title</Heading>
  <p>My card content</p>
</Card>

// Clickable card rendered as a button
<Card as="button" type="button" onClick={handleClick}>
  <Heading level={2} className="af-card__title">My card title</Heading>
  <p>My card content</p>
</Card>

// Unstyled variant (removes border and padding)
<Card variant="unstyled">
  <p>My card content</p>
</Card>
`})}),`
`,(0,h.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(n.h3,{id:`basic-content`,children:`Basic content`}),`
`,(0,h.jsx)(r,{of:d}),`
`,(0,h.jsx)(t,{of:d}),`
`,(0,h.jsx)(n.h3,{id:`button-card`,children:`Button card`}),`
`,(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(t,{of:f}),`
`,(0,h.jsx)(n.h3,{id:`unstyled`,children:`Unstyled`}),`
`,(0,h.jsx)(r,{of:l}),`
`,(0,h.jsx)(t,{of:l})]})}function m(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=a(),o(),n(),c()})))()}g();export{m as default};