import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Bi9baAJ0.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-CjYPSWt0.js";import{t as s}from"./mdx-react-shim-VAf8tnUT.js";import{Default as c,n as l,t as u}from"./ItemFormHelper.stories-nApauYNJ.js";function d(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(r.h1,{id:`itemformhelper`,children:`ItemFormHelper`}),`
`,(0,p.jsxs)(r.p,{children:[(0,p.jsx)(r.code,{children:`ItemFormHelper`}),` is a small status row used inside a form helper to show the
progress of a given step. Each item carries an icon and a label, and switches
visual state through the `,(0,p.jsx)(r.code,{children:`variant`}),` prop.`]}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-tsx`,children:`import { ItemFormHelper } from "@axa-fr/canopee-react/distributeur";

export const MyFormHelper = () => (
  <ItemFormHelper variant="inprogress" label="Identité" />
);
`})}),`
`,(0,p.jsx)(r.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(r.p,{children:[`The `,(0,p.jsx)(r.code,{children:`variant`}),` prop drives the icon and the default label:`]}),`
`,(0,p.jsxs)(r.ul,{children:[`
`,(0,p.jsxs)(r.li,{children:[(0,p.jsx)(r.code,{children:`todo`}),` — step is pending (default label: "à compléter").`]}),`
`,(0,p.jsxs)(r.li,{children:[(0,p.jsx)(r.code,{children:`inprogress`}),` — step is currently being filled (default label: "en cours").`]}),`
`,(0,p.jsxs)(r.li,{children:[(0,p.jsx)(r.code,{children:`validated`}),` — step has been completed (default label: "validé").`]}),`
`]}),`
`,(0,p.jsxs)(r.p,{children:[`Pass a `,(0,p.jsx)(r.code,{children:`label`}),` to override the default text.`]}),`
`,(0,p.jsx)(r.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=o(),s(),r(),l()}))();export{f as default};