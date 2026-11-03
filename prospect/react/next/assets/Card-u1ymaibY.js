import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-BkUoVv_C.js";import{i,l as a,n as o,s}from"./blocks-5rT_svCw.js";import{a as c,i as l,n as u,r as d,t as f}from"./Card.stories-PALt_CIL.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...r(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:u,name:`Card`}),`
`,(0,h.jsx)(t.h1,{id:`card`,children:`Card`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.strong,{children:`Card`}),` component is a simple wrapper that adds `,(0,h.jsx)(t.strong,{children:`padding and a border`}),`.
Use the `,(0,h.jsx)(t.code,{children:`as`}),` prop to control the underlying HTML element.`]}),`
`,(0,h.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { Card, Heading } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`// Basic card
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
`,(0,h.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(t.h3,{id:`basic-content`,children:`Basic content`}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(t.h3,{id:`button-card`,children:`Button card`}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(t.h3,{id:`unstyled`,children:`Unstyled`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(i,{of:l})]})}function m(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),n(),a(),c()})))()}g();export{m as default};