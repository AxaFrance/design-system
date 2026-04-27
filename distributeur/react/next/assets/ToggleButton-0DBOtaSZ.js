import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-D3yXdDgY.js";import"./index-Buq8Z7Kx.js";import{T as s,D as e}from"./ToggleButton.stories-CNEZ0zVT.js";import{M as a,C as l,a as m}from"./index-BqJXDbDb.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-D4uq0Cmk.js";import"./iframe-DkoVaOu-.js";import"./DocsRenderer-CFRXHY34-B7pFMfNt.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-BjCk13Vd.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:s}),`
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
`,o.jsx(m,{of:e})]})}function X(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{X as default};
