import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DSfWgH82.js";import{M as d,C as e,a as i}from"./index-DT1SFVMa.js";import{A as l,D as r,B as s}from"./Action.stories-6XSoqs6a.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B_C0-0Vf.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CardData-D-Zc8gNU.js";import"./index-VGPHIPc6.js";function a(o){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(t.h2,{id:"action",children:"Action"}),`
`,n.jsx(t.h3,{id:"import",children:"Import"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Action } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,n.jsx(t.h3,{id:"use",children:"Use"}),`
`,n.jsx(t.h4,{id:"link-action-button-example",children:"Link Action Button Example:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`export const LinkAction = () => (
  <Action
    id="id"
    icon="link"
    href="http://www.axa.fr"
    title="Test Link"
    target="_blank"
  />
);
`})}),`
`,n.jsx(t.h4,{id:"playground",children:"Playground:"}),`
`,n.jsx(e,{of:r}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(t.h4,{id:"action-button-example",children:"Action Button Example:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`const ButtonAction = () => <Action id="id" icon="floppy-disk" title="Save" />;
`})}),`
`,n.jsx(t.h4,{id:"playground-1",children:"Playground:"}),`
`,n.jsx(e,{of:s}),`
`,n.jsx(i,{of:s})]})}function B(o={}){const{wrapper:t}={...c(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(a,{...o})}):a(o)}export{B as default};
