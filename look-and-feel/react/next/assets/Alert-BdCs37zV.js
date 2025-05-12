import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-BJaai1kI.js";import{M as i,C as l,a}from"./index-BSpS2c20.js";import{A as d,D as t}from"./Alert.stories-Dj0RpOJG.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BIXiWCQp.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ToggleCommon-3782PRwT.js";import"./constants-D4KDvii2.js";import"./LinkCommon-Jm2eVU7Z.js";import"./open_in_new-UmJTibTG.js";function s(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"alert",children:"Alert"}),`
`,e.jsxs(n.p,{children:["Alert component is ",e.jsx(n.strong,{children:"deprecated"})," and will be removed in the next major version. Please use the Message component instead."]}),`
`,e.jsxs(n.p,{children:["More info here : ",e.jsx(n.a,{href:"https://axafrance.github.io/design-system/apollo/?path=/story/components-message--playground",rel:"nofollow",children:"Message documentation"})]}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Alert } from "@axa-fr/design-system-look-and-feel-react/";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const AlertComponent = () => (
  <Alert type="information" title="My alert title">
    My alert content
  </Alert>
);
`})}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.p,{children:"There are 5 types available for the Alert component :"}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{children:"Types"})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{children:"information"})}),e.jsx("tr",{children:e.jsx("td",{children:"neutral"})}),e.jsx("tr",{children:e.jsx("td",{children:"warning"})}),e.jsx("tr",{children:e.jsx("td",{children:"validation"})}),e.jsx("tr",{children:e.jsx("td",{children:"error"})})]})]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(a,{of:t})]})}function v(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{v as default};
