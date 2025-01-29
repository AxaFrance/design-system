import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as t}from"./index-Ch4n-_Zu.js";import{M as a,C as r,a as m}from"./index-XUrgFtkI.js";import{S as c,T as o,a as d}from"./Summary.stories-Daq3qmLd.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./index-Bm9fFANh.js";import"./index-CLdFrMM3.js";import"./Alert-CuYko3ZB.js";import"./getComponentClassName-CfMiunrP.js";function i(n){const s={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(s.h1,{id:"summary",children:"Summary"}),`
`,e.jsx(s.p,{children:`The summary is used to display a list of messages related to a user action.
It is a variation of the alert component.`}),`
`,e.jsxs(s.p,{children:["The component takes a ",e.jsx(s.code,{children:"messages"})," props which is an array of strings or JSX elements."]}),`
`,e.jsx(s.h3,{id:"import",children:"Import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Summary } from "@axa-fr/design-system-slash-react";
`})}),`
`,e.jsx(s.h3,{id:"use",children:"Use"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`export const SummaryForm = () => (
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
`,e.jsx(s.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(s.h3,{id:"modifiers",children:"Modifiers"}),`
`,e.jsxs(s.p,{children:["The modifiers are the same as in the Action component: ",e.jsx(s.code,{children:"error"}),", ",e.jsx(s.code,{children:"info"}),", ",e.jsx(s.code,{children:"success"})," and ",e.jsx(s.code,{children:"warning"}),"."]}),`
`,e.jsx(s.h4,{id:"success",children:"Success"}),`
`,e.jsx(r,{of:d})]})}function X(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{X as default};
