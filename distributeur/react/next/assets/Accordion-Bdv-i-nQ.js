import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CjUrzS1v.js";import{i as c,n as l,r as u,t as d}from"./Accordion.stories-CHGLdBhA.js";function f(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,m.jsxs)(t.p,{children:[`Based on `,(0,m.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details`,rel:`nofollow`,children:[(0,m.jsx)(t.code,{children:`summary`}),` and `,(0,m.jsx)(t.code,{children:`details`}),` `,(0,m.jsx)(t.em,{children:`elements`})]}),`, the accordion component is a simple way to hide and show related content on a page.`]}),`
`,(0,m.jsx)(t.h2,{id:`components`,children:`Components`}),`
`,(0,m.jsx)(t.p,{children:`The Accordion is composed of the following components:`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Accordion`}),`: The main container for multiple collapsable sections.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`CollapseItem`}),`: A single collapsable section in the accordion.`]}),`
`]}),`
`,(0,m.jsxs)(t.p,{children:[`Three `,(0,m.jsx)(t.code,{children:`variants`}),` are available :`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`default`}),` with the AXA blue background`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`white`}),` with a white background`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`light`}),` with no background`]}),`
`]}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(s,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(t.h3,{id:`only-one-expanded-at-a-time`,children:`Only one expanded at a time`}),`
`,(0,m.jsxs)(t.p,{children:[`Setting the `,(0,m.jsx)(t.code,{children:`onlyOne`}),` prop on the accordion component will ensure that only one section is expanded at a time.
By default, this is not the case and multiple sections can be expanded at once.`]}),`
`,(0,m.jsx)(t.h3,{id:`opening-sections-by-default`,children:`Opening sections by default`}),`
`,(0,m.jsxs)(t.p,{children:[`You can set the `,(0,m.jsx)(t.code,{children:`open`}),` prop on the `,(0,m.jsx)(t.code,{children:`CollapseItem`}),` component to have a section open by default.
Afterwards, the component becomes uncontrolled and only the user can close it via click or keyboard inputs.`]}),`
`,(0,m.jsx)(t.h3,{id:`light-version`,children:`Light version`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`light`}),` variant can be set on the `,(0,m.jsx)(t.code,{children:`Accordion`}),` component to use a lighter version of the accordion.`]}),`
`,(0,m.jsx)(r,{of:u}),`
`,(0,m.jsx)(s,{of:u}),`
`,(0,m.jsx)(t.h3,{id:`actions`,children:`Actions`}),`
`,(0,m.jsxs)(t.p,{children:[`You can add actions to the header of each `,(0,m.jsx)(t.code,{children:`CollapseCard`}),` by using the `,(0,m.jsx)(t.code,{children:`actions`}),` prop.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Each `,(0,m.jsx)(t.code,{children:`action`}),` should have a `,(0,m.jsx)(t.code,{children:`key`}),`, `,(0,m.jsx)(t.code,{children:`label`}),`, and `,(0,m.jsx)(t.code,{children:`onClick`}),` function. You can also add a `,(0,m.jsx)(t.code,{children:`leftIcon`}),` or `,(0,m.jsx)(t.code,{children:`rightIcon`}),` to display an icon alongside the action label, this prop should be a `,(0,m.jsx)(t.code,{children:`ReactNode`}),`;`]}),`
`,(0,m.jsxs)(t.p,{children:[`You can have a maximum of two actions per `,(0,m.jsx)(t.code,{children:`CollapseCard`}),`.`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),a(),o(),c()})))()}h();export{p as default};