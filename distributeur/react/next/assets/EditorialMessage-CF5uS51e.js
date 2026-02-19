import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DSfWgH82.js";import"./EditorialMessage-BmsJa9B6.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{M as a,T as d,S as l,D as p,C as o,a as h}from"./index-_uXN_WwG.js";import{E as i,G as t,I as x,P as m,N as j,a as f}from"./EditorialMessage.stories-BIvRq5XY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./iframe-BNh123Mb.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const{deprecate:y}=__STORYBOOK_MODULE_CLIENT_LOGGER__;y("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");function r(n){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(p,{of:i}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { EditorialMessage } from "@axa-fr/canopee-react/distributeur/";
`})}),`
`,e.jsx(s.h2,{id:"use",children:"Use"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`export const EditorialMessageComponent = () => (
  <EditorialMessage type="ecoconception">
    This service is eco-designed to minimize its environmental impact.
  </EditorialMessage>
);
`})}),`
`,e.jsx(s.h2,{id:"types",children:"Types"}),`
`,e.jsxs(s.p,{children:["There are 3 types available for the ",e.jsx(s.code,{children:"EditorialMessage"})," component:"]}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Types"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"ecoconception"}),e.jsx("td",{children:"Displays an eco-conception message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"accessibility"}),e.jsx("td",{children:"Displays an accessibility message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"promotion"}),e.jsx("td",{children:"Displays a promotional message"})]})]})]}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(h,{of:t}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"ecoconception",children:"Ecoconception"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(s.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(s.h3,{id:"promotion",children:"Promotion"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(s.h3,{id:"optional-content",children:"Optional content"}),`
`,e.jsxs(s.p,{children:["At least one of ",e.jsx(s.code,{children:"title"})," or ",e.jsx(s.code,{children:"children"})," props must be provided. But the other one is optional."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(o,{of:f})]})}function I(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{I as default};
