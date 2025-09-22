import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-G7nTXt62.js";import{M as a,C as i,a as c}from"./index-DB_TeI63.js";import{A as r,D as s,L as d}from"./Accordion.stories-DRS7y9N9.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BnWqHKAE.js";import"./index-CG6JzWRx.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";/* empty css               */import"./CardData-BEMxqxpw.js";function t(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.p,{children:["Based on ",e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",rel:"nofollow",children:[e.jsx(n.code,{children:"summary"})," and ",e.jsx(n.code,{children:"details"})," ",e.jsx(n.em,{children:"elements"})]}),", the accordion component is a simple way to hide and show related content on a page."]}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsx(n.p,{children:"The Accordion is composed of the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Accordion"}),": The main container for multiple collapsable sections."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CollapseItem"}),": A single collapsable section in the accordion."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Three ",e.jsx(n.code,{children:"variants"})," are available :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"default"})," with the AXA blue background"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"white"})," with a white background"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"light"})," with no background"]}),`
`]}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"only-one-expanded-at-a-time",children:"Only one expanded at a time"}),`
`,e.jsxs(n.p,{children:["Setting the ",e.jsx(n.code,{children:"onlyOne"}),` prop on the accordion component will ensure that only one section is expanded at a time.
By default, this is not the case and multiple sections can be expanded at once.`]}),`
`,e.jsx(n.h3,{id:"opening-sections-by-default",children:"Opening sections by default"}),`
`,e.jsxs(n.p,{children:["You can set the ",e.jsx(n.code,{children:"open"})," prop on the ",e.jsx(n.code,{children:"CollapseItem"}),` component to have a section open by default.
Afterwards, the component becomes uncontrolled and only the user can close it via click or keyboard inputs.`]}),`
`,e.jsx(n.h3,{id:"light-version",children:"Light version"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"light"})," classModifier can be set on the ",e.jsx(n.code,{children:"Accordion"})," component to use a lighter version of the accordion."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(n.h3,{id:"actions",children:"Actions"}),`
`,e.jsxs(n.p,{children:["You can add actions to the header of each ",e.jsx(n.code,{children:"CollapseCard"})," by using the ",e.jsx(n.code,{children:"actions"})," prop."]}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.code,{children:"action"})," should have a ",e.jsx(n.code,{children:"key"}),", ",e.jsx(n.code,{children:"label"}),", and ",e.jsx(n.code,{children:"onClick"})," function. You can also add a ",e.jsx(n.code,{children:"leftIcon"})," or ",e.jsx(n.code,{children:"rightIcon"})," to display an icon alongside the action label, this prop should be a ",e.jsx(n.code,{children:"ReactNode"}),";"]}),`
`,e.jsxs(n.p,{children:["You can have a maximum of two actions per ",e.jsx(n.code,{children:"CollapseCard"}),"."]})]})}function A(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{A as default};
