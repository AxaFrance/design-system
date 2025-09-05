import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-G7nTXt62.js";import"./index-Bh30ozP4.js";import{M as i,a as e}from"./MainContainer.stories-DwFeUPVW.js";import{M as p,C as s,a as c}from"./index-BaO9qj_6.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BGLsRr4y.js";import"./iframe-DpnJJ_zw.js";import"./DocsRenderer-CFRXHY34-BtgEgb_i.js";import"./react-18-Cg43Tkb0.js";import"./index-BOKuxaB8.js";/* empty css              */import"./CardData-DL7aZVqJ.js";import"./index-CG6JzWRx.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:i}),`
`,n.jsx(o.h1,{id:"maincontainer",children:"MainContainer"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"MainContainer"}),` component is used to wrap content and provide consistent spacing and alignment across different screen sizes. It ensures that the content is centered and has appropriate margins and background color.
You can use it to wrap all your application main content.`]}),`
`,n.jsx(o.p,{children:"The breakpoints are as follows :"}),`
`,n.jsx(o.p,{children:`| Breakpoint                          | margin (left and right) | comment             |
| ----------------------------------- | ----------------------- | ------------------- |
| Portrait Tablet (772px to 1015px)   | 30px                    |                     |
| Landscape Tablet (1016px to 1271px) | 40px                    |                     |
| S Desktop (1272px to 1431px)        | 56px                    | 150% - Laptop       |
| M Desktop (1432px to 1671px)        | 56px                    | 125% - Laptop       |
| L Desktop (1672px to 1911px)        | 56px                    | 100% - Laptop       |
| XL Desktop (1912 to ∞ px)           | 56px                    | 100% - Large screen |`}),`
`,n.jsx(o.h2,{id:"import",children:"Import"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { MainContainer } from "@axa-fr/design-system-slash-react";
`})}),`
`,n.jsx(o.h2,{id:"use",children:"Use"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`export const MyComponent = () => (
  <MainContainer>
    <p>Hello World</p>
  </MainContainer>
);
`})}),`
`,n.jsx(o.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(s,{of:e}),`
`,n.jsx(c,{of:e})]})}function T(t={}){const{wrapper:o}={...a(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(r,{...t})}):r(t)}export{T as default};
