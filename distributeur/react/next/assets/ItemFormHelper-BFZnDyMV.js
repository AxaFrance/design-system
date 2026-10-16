import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{n as c,r as l,t as u}from"./ItemFormHelper.stories-BnACZKu1.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`itemformhelper`,children:`ItemFormHelper`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`ItemFormHelper`}),` is a small status row used inside a form helper to show the
progress of a given step. Each item carries an icon and a label, and switches
visual state through the `,(0,p.jsx)(t.code,{children:`variant`}),` prop.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { ItemFormHelper } from "@axa-fr/canopee-react/distributeur";

export const MyFormHelper = () => (
  <ItemFormHelper variant="inprogress" label="Identité" />
);
`})}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`variant`}),` prop drives the icon and the default label:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`todo`}),` — step is pending (default label: "à compléter").`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`inprogress`}),` — step is currently being filled (default label: "en cours").`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`validated`}),` — step has been completed (default label: "validé").`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`Pass a `,(0,p.jsx)(t.code,{children:`label`}),` to override the default text.`]}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:u}),`
`,(0,p.jsx)(s,{of:u})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),a(),o(),l()})))()}m();export{f as default};