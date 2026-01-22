import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DSfWgH82.js";import"./index-b_Ilb_r1.js";import{T as s,D as e}from"./ToggleButton.stories-Dg39XEW4.js";import{M as a,C as l,a as m}from"./index-U_wVezuW.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview--60-oUw0.js";import"./iframe-Ccjd76Ym.js";import"./DocsRenderer-CFRXHY34-MsTpbIfc.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./CardData-CisLDHWb.js";import"./index-63p0MazF.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:s}),`
`,o.jsx(t.h1,{id:"toggle-button",children:"Toggle Button"}),`
`,o.jsx(t.h2,{id:"import",children:"Import"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { ToggleButton } from "@axa-fr/canopee-react/distributeur";
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
`,o.jsx(l,{of:e}),`
`,o.jsx(m,{of:e})]})}function b(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{b as default};
