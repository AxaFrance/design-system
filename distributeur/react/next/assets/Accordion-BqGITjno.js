import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CrCwfpcW.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-B6pS4pdr.js";import{t as s}from"./mdx-react-shim-gngZ-MEU.js";import{Default as c,Light as l,n as u,t as d}from"./Accordion.stories-C3oYNFHL.js";function f(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(r.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,m.jsxs)(r.p,{children:[`Based on `,(0,m.jsxs)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details`,rel:`nofollow`,children:[(0,m.jsx)(r.code,{children:`summary`}),` and `,(0,m.jsx)(r.code,{children:`details`}),` `,(0,m.jsx)(r.em,{children:`elements`})]}),`, the accordion component is a simple way to hide and show related content on a page.`]}),`
`,(0,m.jsx)(r.h2,{id:`components`,children:`Components`}),`
`,(0,m.jsx)(r.p,{children:`The Accordion is composed of the following components:`}),`
`,(0,m.jsxs)(r.ul,{children:[`
`,(0,m.jsxs)(r.li,{children:[(0,m.jsx)(r.code,{children:`Accordion`}),`: The main container for multiple collapsable sections.`]}),`
`,(0,m.jsxs)(r.li,{children:[(0,m.jsx)(r.code,{children:`CollapseItem`}),`: A single collapsable section in the accordion.`]}),`
`]}),`
`,(0,m.jsxs)(r.p,{children:[`Three `,(0,m.jsx)(r.code,{children:`variants`}),` are available :`]}),`
`,(0,m.jsxs)(r.ul,{children:[`
`,(0,m.jsxs)(r.li,{children:[(0,m.jsx)(r.code,{children:`default`}),` with the AXA blue background`]}),`
`,(0,m.jsxs)(r.li,{children:[(0,m.jsx)(r.code,{children:`white`}),` with a white background`]}),`
`,(0,m.jsxs)(r.li,{children:[(0,m.jsx)(r.code,{children:`light`}),` with no background`]}),`
`]}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(n,{of:c}),`
`,(0,m.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(r.h3,{id:`only-one-expanded-at-a-time`,children:`Only one expanded at a time`}),`
`,(0,m.jsxs)(r.p,{children:[`Setting the `,(0,m.jsx)(r.code,{children:`onlyOne`}),` prop on the accordion component will ensure that only one section is expanded at a time.
By default, this is not the case and multiple sections can be expanded at once.`]}),`
`,(0,m.jsx)(r.h3,{id:`opening-sections-by-default`,children:`Opening sections by default`}),`
`,(0,m.jsxs)(r.p,{children:[`You can set the `,(0,m.jsx)(r.code,{children:`open`}),` prop on the `,(0,m.jsx)(r.code,{children:`CollapseItem`}),` component to have a section open by default.
Afterwards, the component becomes uncontrolled and only the user can close it via click or keyboard inputs.`]}),`
`,(0,m.jsx)(r.h3,{id:`light-version`,children:`Light version`}),`
`,(0,m.jsxs)(r.p,{children:[`The `,(0,m.jsx)(r.code,{children:`light`}),` classModifier can be set on the `,(0,m.jsx)(r.code,{children:`Accordion`}),` component to use a lighter version of the accordion.`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(r.h3,{id:`actions`,children:`Actions`}),`
`,(0,m.jsxs)(r.p,{children:[`You can add actions to the header of each `,(0,m.jsx)(r.code,{children:`CollapseCard`}),` by using the `,(0,m.jsx)(r.code,{children:`actions`}),` prop.`]}),`
`,(0,m.jsxs)(r.p,{children:[`Each `,(0,m.jsx)(r.code,{children:`action`}),` should have a `,(0,m.jsx)(r.code,{children:`key`}),`, `,(0,m.jsx)(r.code,{children:`label`}),`, and `,(0,m.jsx)(r.code,{children:`onClick`}),` function. You can also add a `,(0,m.jsx)(r.code,{children:`leftIcon`}),` or `,(0,m.jsx)(r.code,{children:`rightIcon`}),` to display an icon alongside the action label, this prop should be a `,(0,m.jsx)(r.code,{children:`ReactNode`}),`;`]}),`
`,(0,m.jsxs)(r.p,{children:[`You can have a maximum of two actions per `,(0,m.jsx)(r.code,{children:`CollapseCard`}),`.`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=o(),s(),r(),u()}))();export{p as default};