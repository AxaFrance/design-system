import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-B5MMbqJF.js";import{n as c,r as l,t as u}from"./ItemFormHelper.stories-Bj5dqccn.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`itemformhelper`,children:`ItemFormHelper`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`ItemFormHelper`}),` is a small status row used inside a form helper to show the
progress of a given step. Each item carries an icon and a label, and switches
visual state through the `,(0,p.jsx)(t.code,{children:`variant`}),` prop. The `,(0,p.jsx)(t.code,{children:`FormHelper`}),` uses it for its
legend and `,(0,p.jsx)(t.code,{children:`ListFormHelper`}),` for each step.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { ItemFormHelper } from "@axa-fr/canopee-react/distributeur";

export const MyFormHelper = () => (
  <ItemFormHelper variant="inprogress" label="Identité" />
);
`})}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`variant`}),` prop drives the icon and the default state text:`]}),`
`,(0,p.jsxs)(t.p,{children:[`| Figma "Step state" | `,(0,p.jsx)(t.code,{children:`variant`}),`    | Default state text |
| ------------------ | ------------ | ------------------ |
| Todo               | `,(0,p.jsx)(t.code,{children:`todo`}),`       | "à compléter"      |
| Active             | `,(0,p.jsx)(t.code,{children:`inprogress`}),` | "en cours"         |
| Done               | `,(0,p.jsx)(t.code,{children:`validated`}),`  | "validé"           |`]}),`
`,(0,p.jsx)(t.h2,{id:`label-and-state`,children:`Label and state`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Without `,(0,p.jsx)(t.code,{children:`label`}),`, the item shows its state text (legend usage).`]}),`
`,(0,p.jsxs)(t.li,{children:[`With `,(0,p.jsx)(t.code,{children:`label`}),`, the item shows the label (the name of the step) and the state
text is visually hidden: screen readers read "Identité, en cours".`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`stateLabel`}),` replaces the default state text, e.g. for another language.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The icon is decorative (`,(0,p.jsx)(t.code,{children:`aria-hidden`}),`): the state is always given as text.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The root is a `,(0,p.jsx)(t.code,{children:`span`}),`: the item can be used in a list, a link or a title.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:u}),`
`,(0,p.jsx)(s,{of:u})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),a(),o(),l()})))()}m();export{f as default};