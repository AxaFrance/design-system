import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-G7nTXt62.js";import{M as s,C as a,a as c}from"./index-C1Am9llY.js";import{L as p,a as r}from"./Link.stories-CNrFqPFi.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzqRD9Gq.js";import"./index-BdSKqQiB.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Loader-C1uJHYLx.js";/* empty css              */import"./save-DY1Uaxua.js";import"./tslib.es6-Duv2rsQ1.js";import"./index-C2cC0QQF.js";function t(o){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:p}),`
`,n.jsx(e.h2,{id:"link",children:"Link"}),`
`,n.jsx(e.h3,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Link } from "@axa-fr/design-system-slash-react";
`})}),`
`,n.jsx(e.h3,{id:"use",children:"Use"}),`
`,n.jsx(e.h4,{id:"link-example",children:"Link Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const LinkExample = () => (
  <Link href="http://www.axa.fr" target="_blank">
    Lien vers AXA
  </Link>
);
`})}),`
`,n.jsx(e.h4,{id:"playground",children:"Playground:"}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h4,{id:"use-link-with-react-router-dom",children:"Use Link with react-router-dom:"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Link"})," component is interoperable with other libraries like ",n.jsx(e.code,{children:"react-router-dom"}),". In this case, you need to use the ",n.jsx(e.code,{children:"component"}),` prop to specify the link component to use.
The `,n.jsx(e.code,{children:"component"})," prop overrides the root element, which is by default an ",n.jsx(e.code,{children:"a"})," tag, and all associated props."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Link as RouterLink } from "react-router-dom";

export const LinkExample = () => (
  <Link component={RouterLink} to="/contact">
    Go to Contact Page
  </Link>
);
`})})]})}function E(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{E as default};
