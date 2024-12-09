import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as t}from"./index-DSkyVWTJ.js";import{ae as a,af as n,ag as m}from"./index-AE88scO9.js";import{S as c,T as o,a as d}from"./Summary.stories-DOj4cRPA.js";import"./index-CTjT7uj6.js";import"./iframe-mlOKciba.js";import"../sb-preview/runtime.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./index-BBlvDU0u.js";import"./Alert-Brt1fapE.js";import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";function i(r){const s={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
`,e.jsx(n,{of:o}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(s.h3,{id:"modifiers",children:"Modifiers"}),`
`,e.jsxs(s.p,{children:["The modifiers are the same as in the Action component: ",e.jsx(s.code,{children:"error"}),", ",e.jsx(s.code,{children:"info"}),", ",e.jsx(s.code,{children:"success"})," and ",e.jsx(s.code,{children:"warning"}),"."]}),`
`,e.jsx(s.h4,{id:"success",children:"Success"}),`
`,e.jsx(n,{of:d})]})}function I(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(i,{...r})}):i(r)}export{I as default};
