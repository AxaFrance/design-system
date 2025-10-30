import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DSfWgH82.js";import"./index-vtxIt_wz.js";import{M as i,a as e}from"./MainContainer.stories-BQpLGI2Q.js";import{M as p,C as s,a as c}from"./index-I7kuriL6.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BH4kSrY1.js";import"./iframe-CSCKzOEt.js";import"./DocsRenderer-CFRXHY34-r9OfmHyb.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";/* empty css               */import"./CardData-BOncjv5M.js";import"./index-63p0MazF.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:i}),`
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
