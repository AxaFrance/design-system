import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-G7nTXt62.js";import{M as c,C as o,a as h}from"./index-BVYuuVLG.js";import{H as l,D as s,W as d}from"./HelpButton.stories-BNULIMwO.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-2wNiT1NO.js";import"./index-CG6JzWRx.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";/* empty css              */import"./Loader-D6LPEE5j.js";import"./Popover-yxuwOD-m.js";import"./floating-ui.dom-4nhQhKqc.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(t.h1,{id:"helpbutton",children:"HelpButton"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"HelpButton"}),` component is the easiest way to create tooltips in the slash design-system.
It wraps around the more customisable `,e.jsx(t.code,{children:"Popover"})," component with defaults styles. By default the element to be hovered/clicked is a blue circle button with a cursive ",e.jsx(t.code,{children:"i"})," inside."]}),`
`,e.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { HelpButton } from "@axa-fr/design-system-slash-react";

const MyComponent = () => (
  <HelpButton mode="hover">Content of the tooltip</HelpButton>
);
`})}),`
`,e.jsx(t.h3,{id:"mode",children:"Mode"}),`
`,e.jsx(t.p,{children:"There are 2 modes available for the HelpButton component"}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{children:"Modes"})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{children:"hover"})}),e.jsx("tr",{children:e.jsx("td",{children:"click"})})]})]}),`
`,e.jsx(t.h2,{id:"customize",children:"Customize"}),`
`,e.jsxs(t.p,{children:[`If you need rich content inside the tooltip, it is possible to pass HTML as children of the component.
You can also replace the blue circle with custom HTML by changing the `,e.jsx(t.code,{children:"helpButtonContent"})," prop."]}),`
`,e.jsx(o,{of:d,sourceState:"shown"})]})}function v(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{v as default};
