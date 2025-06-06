import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-G7nTXt62.js";import{M as i,C as s,a}from"./index-HC-kI5Q5.js";import{L as c}from"./Link.stories-B6d5l7ex.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cjh_RQwr.js";import"./index-BdSKqQiB.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Loader-D_HZkG_i.js";/* empty css              */import"./save-D8mDODGD.js";import"./tslib.es6-Duv2rsQ1.js";import"./index-28pPPJTf.js";function r(o){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"link",children:"Link"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Link } from "@axa-fr/design-system-slash-react";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.h4,{id:"link-example",children:"Link Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const LinkExample = () => (
  <Link href="http://www.axa.fr" target="_blank">
    Lien vers AXA
  </Link>
);
`})}),`
`,e.jsx(n.h4,{id:"playground",children:"Playground:"}),`
`,e.jsx(s,{of:void 0}),`
`,e.jsx(a,{of:void 0}),`
`,e.jsx(n.h4,{id:"use-link-with-react-router-dom",children:"Use Link with react-router-dom:"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Link"})," component is interoperable with other libraries like ",e.jsx(n.code,{children:"react-router-dom"}),". In this case, you need to use the ",e.jsx(n.code,{children:"component"}),` prop to specify the link component to use.
The `,e.jsx(n.code,{children:"component"})," prop overrides the root element, which is by default an ",e.jsx(n.code,{children:"a"})," tag, and all associated props."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Link as RouterLink } from "react-router-dom";

export const LinkExample = () => (
  <Link component={RouterLink} to="/contact">
    Go to Contact Page
  </Link>
);
`})})]})}function b(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{b as default};
