import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-tv3KQEW_.js";import{i,l as a,n as o,s}from"./blocks-D74w0bgk.js";import{a as c,i as l,n as u,r as d,t as f}from"./PatternMozaicGrid.stories-m0sgu-fP.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...r(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:u}),`
`,(0,h.jsx)(t.h1,{id:`patternmozaicgrid`,children:`PatternMozaicGrid`}),`
`,(0,h.jsx)(t.p,{children:`Arranges direct children on the application's responsive grid. Every child
receives the same column span for each breakpoint.`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { Card, PatternMozaicGrid } from "@axa-fr/canopee-react/prospect";

<main className="grid">
  <PatternMozaicGrid data-cols-mobile={4} data-cols-desktop-small={3}>
    <Card>First card</Card>
    <Card>Second card</Card>
    <Card>Third card</Card>
  </PatternMozaicGrid>
</main>;
`})}),`
`,(0,h.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,h.jsxs)(t.p,{children:[`Use inside `,(0,h.jsx)(t.code,{children:`.grid`}),`, either directly or through an uninterrupted chain of
`,(0,h.jsx)(t.code,{children:`.subgrid`}),` containers. The component adds `,(0,h.jsx)(t.code,{children:`subgrid`}),` automatically and inherits
the parent's columns and horizontal gaps. Its vertical gap uses `,(0,h.jsx)(t.code,{children:`--rem-16`}),`.`]}),`
`,(0,h.jsxs)(t.p,{children:[`Column values describe `,(0,h.jsx)(t.strong,{children:`the span of each child`}),`, not the number of children
per row. On a full-width grid, a span of 4 means one item per row on mobile
(4 columns) and two per row on tablet (8 columns). A span of 3 means four
items per row on desktop (12 columns).`]}),`
`,(0,h.jsxs)(t.p,{children:[`Inside a narrower subgrid, spans are limited to the available columns.
Children must forward their `,(0,h.jsx)(t.code,{children:`style`}),` prop to their root DOM element.
`,(0,h.jsx)(t.code,{children:`Card`}),` and `,(0,h.jsx)(t.code,{children:`CardMarketing`}),` support this. Pass elements directly, not wrapped in
a fragment: fragments do not forward styles to their children.
Existing inline styles are preserved, except the responsive column variables,
which are controlled by this layout.`]}),`
`,(0,h.jsx)(t.h2,{id:`debug-grid`,children:`Debug grid`}),`
`,(0,h.jsxs)(t.p,{children:[`The stories render `,(0,h.jsx)(t.code,{children:`DebugGrid`}),` behind the content so you can check how each
child aligns with the grid columns at every breakpoint. Use the `,(0,h.jsx)(t.strong,{children:`Grid`}),` toggle
at the bottom left of the canvas to hide or show the columns.`]}),`
`,(0,h.jsx)(t.h2,{id:`props-and-inheritance`,children:`Props and inheritance`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Breakpoint`}),(0,h.jsx)(t.th,{children:`Default`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:`All`}),(0,h.jsx)(t.td,{children:`Direct elements to arrange`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`cols`})}),(0,h.jsx)(t.td,{children:`All`}),(0,h.jsxs)(t.td,{children:[`Initial fallback: `,(0,h.jsx)(t.code,{children:`2`})]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`data-cols-mobile`})}),(0,h.jsx)(t.td,{children:`Up to 667px`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`cols`})})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`data-cols-tablet`})}),(0,h.jsx)(t.td,{children:`Above 667px`}),(0,h.jsx)(t.td,{children:`Mobile value`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`data-cols-desktop-small`})}),(0,h.jsx)(t.td,{children:`Above 1023px`}),(0,h.jsx)(t.td,{children:`Tablet value`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`data-cols-desktop-medium`})}),(0,h.jsx)(t.td,{children:`Above 1279px`}),(0,h.jsx)(t.td,{children:`Small desktop value`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`data-cols-desktop-large`})}),(0,h.jsx)(t.td,{children:`Above 1599px`}),(0,h.jsx)(t.td,{children:`Medium desktop value`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`Use positive whole numbers. Missing values inherit from the previous breakpoint.
For example, `,(0,h.jsx)(t.code,{children:`data-cols-mobile={4}`}),` and `,(0,h.jsx)(t.code,{children:`data-cols-desktop-small={3}`}),` are enough
for 4 columns per child on mobile/tablet and 3 on all desktop sizes.`]}),`
`,(0,h.jsxs)(t.p,{children:[`Native section props, such as `,(0,h.jsx)(t.code,{children:`id`}),`, `,(0,h.jsx)(t.code,{children:`className`}),`, `,(0,h.jsx)(t.code,{children:`style`}),`, `,(0,h.jsx)(t.code,{children:`ref`}),` and ARIA
attributes, are forwarded to the root. Custom classes are merged with the
layout classes.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`responsive`,children:`Responsive`}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`all-breakpoints`,children:`All breakpoints`}),`
`,(0,h.jsx)(t.p,{children:`Resize the viewport to compare spans at all five breakpoints.`}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`with-cardmarketing`,children:`With CardMarketing`}),`
`,(0,h.jsx)(o,{of:l})]})}function m(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),n(),a(),c()})))()}g();export{m as default};