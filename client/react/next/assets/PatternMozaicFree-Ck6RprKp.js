import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-D1Cs0fwN.js";import{i,l as a,n as o,s}from"./blocks-Bz77zPe8.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./PatternMozaicFree.stories-y0qZdvEs.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...r(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:u}),`
`,(0,g.jsx)(t.h1,{id:`patternmozaicfree`,children:`PatternMozaicFree`}),`
`,(0,g.jsxs)(t.p,{children:[`Arranges content in equal-width columns independently of the application's grid.
Unlike `,(0,g.jsx)(t.code,{children:`PatternMozaicGrid`}),`, `,(0,g.jsx)(t.code,{children:`cols`}),` sets the `,(0,g.jsx)(t.strong,{children:`number of columns`}),`, not the span
of each child. Five columns are possible even inside the 12-column application grid.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { Card, PatternMozaicFree } from "@axa-fr/canopee-react/client";

<PatternMozaicFree cols={3}>
  <Card>First card</Card>
  <Card>Second card</Card>
  <Card>Third card</Card>
</PatternMozaicFree>;
`})}),`
`,(0,g.jsx)(t.h2,{id:`responsive-layout`,children:`Responsive layout`}),`
`,(0,g.jsxs)(t.p,{children:[`The layout uses one column on mobile and tablet. Above 1023px, it uses `,(0,g.jsx)(t.code,{children:`cols`}),`
equal-width columns (2 by default). Use positive whole numbers.
The gap and block padding use `,(0,g.jsx)(t.code,{children:`--rem-16`}),`.`]}),`
`,(0,g.jsxs)(t.p,{children:[`The component works on its own or inside `,(0,g.jsx)(t.code,{children:`.grid`}),` and `,(0,g.jsx)(t.code,{children:`.subgrid`}),` containers.
It does not add `,(0,g.jsx)(t.code,{children:`subgrid`}),` or change the styles of its React children.
Native section props, including `,(0,g.jsx)(t.code,{children:`className`}),`, `,(0,g.jsx)(t.code,{children:`style`}),`, `,(0,g.jsx)(t.code,{children:`ref`}),` and ARIA attributes,
are forwarded to the root element.`]}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`three-columns`,children:`Three columns`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`five-independent-columns`,children:`Five independent columns`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`marketing-cards`,children:`Marketing cards`}),`
`,(0,g.jsx)(o,{of:c})]})}function h(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),n(),a(),d()})))()}_();export{h as default};