import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-G7nTXt62.js";import{M as d,C as s,a as t}from"./index-DOKw80--.js";import{A as a,D as i,L as c}from"./Accordion.stories-C4kK_dYB.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-1IhOjDPQ.js";import"./index-BdSKqQiB.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";/* empty css              */import"./Loader-Cvyl5QsW.js";function l(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.p,{children:["Based on ",e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",rel:"nofollow",children:[e.jsx(n.code,{children:"summary"})," and ",e.jsx(n.code,{children:"details"})," ",e.jsx(n.em,{children:"elements"})]}),", the accordion component is a simple way to hide and show related content on a page."]}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsx(n.p,{children:"The Accordion is composed of the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Accordion"}),": The main container for multiple collapsable sections."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CollapseItem"}),": A single collapsable section in the accordion."]}),`
`]}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"only-one-expanded-at-a-time",children:"Only one expanded at a time"}),`
`,e.jsxs(n.p,{children:["Setting the ",e.jsx(n.code,{children:"onlyOne"}),` prop on the accordion component will ensure that only one section is expanded at a time.
By default, this is not the case and multiple sections can be expanded at once.`]}),`
`,e.jsx(n.h3,{id:"opening-sections-by-default",children:"Opening sections by default"}),`
`,e.jsxs(n.p,{children:["You can set the ",e.jsx(n.code,{children:"open"})," prop on the ",e.jsx(n.code,{children:"CollapseItem"}),` component to have a section open by default.
Afterwards, the component becomes uncontrolled and only the user can close it via click or keyboard inputs.`]}),`
`,e.jsx(n.h3,{id:"light-version",children:"Light version"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"light"})," classModifier can be set on the ",e.jsx(n.code,{children:"Accordion"})," component to use a lighter version of the accordion."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t,{of:c})]})}function v(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{v as default};
