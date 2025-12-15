import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DSfWgH82.js";import{M as a,C as n,a as m}from"./index-DT1SFVMa.js";import{S as c,T as o,a as d}from"./Summary.stories-CQ0GsSFS.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B_C0-0Vf.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CardData-D-Zc8gNU.js";import"./Message-BItak4bz.js";import"./info-fill-BDWUZ-2L.js";import"./generateId-LF6-RKcC.js";import"./index-VGPHIPc6.js";function i(s){const r={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(r.h1,{id:"summary",children:"Summary"}),`
`,e.jsx(r.p,{children:`The summary is used to display a list of messages related to a user action. It
is a variation of the alert component.`}),`
`,e.jsxs(r.p,{children:["The component takes a ",e.jsx(r.code,{children:"messages"}),` props which is an array of strings or JSX
elements.`]}),`
`,e.jsx(r.h3,{id:"import",children:"Import"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Summary } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(r.h3,{id:"use",children:"Use"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`export const SummaryForm = () => (
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
`,e.jsx(r.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(r.h3,{id:"modifiers",children:"Modifiers"}),`
`,e.jsxs(r.p,{children:["The modifiers are the same as in the Action component: ",e.jsx(r.code,{children:"error"}),", ",e.jsx(r.code,{children:"info"}),`,
`,e.jsx(r.code,{children:"success"})," and ",e.jsx(r.code,{children:"warning"}),"."]}),`
`,e.jsx(r.h4,{id:"success",children:"Success"}),`
`,e.jsx(n,{of:d})]})}function w(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(i,{...s})}):i(s)}export{w as default};
