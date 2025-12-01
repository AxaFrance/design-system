import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import"./index-BsA9qrDn.js";import{T as i,D as e}from"./ToggleButton.stories-DXPv1jOg.js";import{M as l,C as a,a as m}from"./index-CCeqW_p3.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-liW2cays.js";import"./iframe-Be4JZYIA.js";import"./DocsRenderer-CFRXHY34-BXUbS0rk.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./CardData-CAT2AYPU.js";import"./index-63p0MazF.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{of:i}),`
`,o.jsx(t.h1,{id:"toggle-button",children:"Toggle Button"}),`
`,o.jsx(t.h2,{id:"import",children:"Import"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { ToggleButton } from "@axa-fr/design-system-slash-react";
`})}),`
`,o.jsx(t.h2,{id:"use",children:"Use"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`const actionToggle = {
  icon: "menu-hamburger",
  title: "Toggle",
};

const ToggleButtonLayout = ({
  children,
  idControl,
}: TToggleButtonLayoutProps) => (
  <ToggleButton idControl={idControl}>{children}</ToggleButton>
);
export default ToggleButtonLayout;
`})}),`
`,o.jsx(t.h2,{id:"stories",children:"Stories"}),`
`,o.jsx(a,{of:e}),`
`,o.jsx(m,{of:e})]})}function X(n={}){const{wrapper:t}={...s(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{X as default};
