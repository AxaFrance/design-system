import{j as e}from"./index-C1mcBe1y.js";import{useMDXComponents as o}from"./index-G7nTXt62.js";import"./index-cdjmR0Z_.js";import{P as t,a as n}from"./ProgressBar.stories-CzaKZRgP.js";import{M as i,C as c,a as l}from"./index-BjHgMfkW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./preview-BLXLk6FF.js";import"./iframe-BDRJrVz9.js";import"./DocsRenderer-CFRXHY34-CxrJnCt6.js";import"./react-18-Cg43Tkb0.js";import"./ToggleCommon-U5V52PRy.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function a(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:t}),`
`,e.jsx(r.h1,{id:"progressbar",children:"ProgressBar"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"ProgressBar"})," component displays a visual indicator of progress. It is based on the native HTML ",e.jsx(r.code,{children:"<progress>"})," element and can be customized using standard props."]}),`
`,e.jsxs(r.p,{children:["By default, the maximum value (",e.jsx(r.code,{children:"max"})," prop) is set to ",e.jsx(r.code,{children:"1"}),", which means the ",e.jsx(r.code,{children:"value"}),` prop should be between 0 and 1 (for example, 0.7 for 70%).
You can override the `,e.jsx(r.code,{children:"max"})," prop if you want to use a different scale (for example, ",e.jsx(r.code,{children:"max=100"})," for percentage values)."]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { ProgressBar } from "@axa-fr/design-system-apollo-react/lf";

const MyComponent = () => <ProgressBar value={0.7} />;
`})}),`
`,e.jsx(r.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(c,{of:n,sourceState:"shown"}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(r.h2,{id:"accessibility-indicating-current-progress",children:"Accessibility: Indicating Current Progress"}),`
`,e.jsxs(r.p,{children:["For accessibility, always use the ",e.jsx(r.code,{children:"label"})," prop to provide a descriptive label for the progress bar. This ensures that assistive technologies can correctly announce the purpose and current state of the progress bar."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<ProgressBar value={0.7} label="Loading something..." />
`})}),`
`,e.jsx(r.p,{children:"This approach improves accessibility by associating a visible and programmatic label with the progress bar."}),`
`,e.jsx(r.h3,{id:"screen-reader-behavior",children:"Screen reader behavior"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"By default, screen readers announce the percentage value of the progress bar."}),`
`,e.jsxs(r.li,{children:["If an ",e.jsx(r.code,{children:"aria-label"})," is set, the screen reader will first read the label, then announce the percentage value."]}),`
`,e.jsxs(r.li,{children:["If you want the screen reader to read only a custom text without announcing the percentage, use the ",e.jsx(r.code,{children:"aria-valuetext"})," attribute."]}),`
`]})]})}function C(s={}){const{wrapper:r}={...o(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(a,{...s})}):a(s)}export{C as default};
