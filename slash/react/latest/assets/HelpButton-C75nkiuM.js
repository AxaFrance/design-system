import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as c,af as n,ag as h}from"./index-De0Pjux1.js";import{H as l,D as s,W as d}from"./HelpButton.stories-D6X3hej0.js";import"./index-CTjT7uj6.js";import"./iframe-Bnpca8an.js";import"../sb-preview/runtime.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-BAAoBoSU.js";/* empty css               */import"./Popover-CVInVo-0.js";import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(t.h1,{id:"helpbutton",children:"HelpButton"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"HelpButton"}),` component is the easiest way to create tooltips in the slash design-system.
It wraps around the more customisable `,e.jsx(t.code,{children:"Popover"})," component with defaults styles. By default the element to be hovered/clicked is a blue circle button with a cursive ",e.jsx(t.code,{children:"i"})," inside."]}),`
`,e.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:s}),`
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
`,e.jsx(n,{of:d,sourceState:"shown"})]})}function L(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{L as default};
