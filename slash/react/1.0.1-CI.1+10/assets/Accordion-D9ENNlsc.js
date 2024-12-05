import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as l}from"./index-DSkyVWTJ.js";import{ae as d,af as t,ag as i}from"./index-TnGExe58.js";import{A as a,D as s,L as c}from"./Accordion.stories-DX-zmx5n.js";import"./index-CTjT7uj6.js";import"./iframe-C5tovS4N.js";import"../sb-preview/runtime.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./Accordion-9xC_6UG_.js";import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";function r(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.p,{children:["Based on ",e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",rel:"nofollow",children:[e.jsx(n.code,{children:"summary"})," and ",e.jsx(n.code,{children:"details"})," ",e.jsx(n.em,{children:"elements"})]}),", the accordion component is a simple way to hide and show related content on a page."]}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsx(n.p,{children:"The Accordion is composed of the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Accordion"}),": The main container for multiple collapsable sections."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CollapseItem"}),": A single collapsable section in the accordion."]}),`
`]}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"only-one-expanded-at-a-time",children:"Only one expanded at a time"}),`
`,e.jsxs(n.p,{children:["Setting the ",e.jsx(n.code,{children:"onlyOne"}),` prop on the accordion component will ensure that only one section is expanded at a time.
By default, this is not the case and multiple sections can be expanded at once.`]}),`
`,e.jsx(n.h3,{id:"opening-sections-by-default",children:"Opening sections by default"}),`
`,e.jsxs(n.p,{children:["You can set the ",e.jsx(n.code,{children:"open"})," prop on the ",e.jsx(n.code,{children:"CollapseItem"}),` component to have a section open by default.
Afterwards, the component becomes uncontrolled and only the user can close it via click or keyboard inputs.`]}),`
`,e.jsx(n.h3,{id:"light-version",children:"Light version"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"light"})," classModifier can be set on the ",e.jsx(n.code,{children:"Accordion"})," component to use a lighter version of the accordion."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{of:c})]})}function L(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{L as default};
