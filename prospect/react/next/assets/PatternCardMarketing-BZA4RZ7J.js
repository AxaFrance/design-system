import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-tv3KQEW_.js";import{i,l as a,n as o,s}from"./blocks-D74w0bgk.js";import{a as c,i as l,n as u,r as d,t as f}from"./PatternCardMarketing.stories-BCqccbJ2.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:u}),`
`,(0,h.jsx)(t.h1,{id:`patterncardmarketing`,children:`PatternCardMarketing`}),`
`,(0,h.jsx)(t.p,{children:`Arranges marketing cards in one column on mobile and tablet, and two equal-width
columns above 1023px. With exactly three cards, the first occupies both rows on
the left and the other two are stacked on the right. With any other card count,
cards flow into the two-column grid without spanning rows.`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import {
  CardMarketing,
  PatternCardMarketing,
} from "@axa-fr/canopee-react/prospect";

<PatternCardMarketing>
  <CardMarketing {...mainOffer} />
  <CardMarketing {...secondOffer} variant="horizontal" />
  <CardMarketing {...thirdOffer} variant="horizontal" />
</PatternCardMarketing>;
`})}),`
`,(0,h.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,h.jsxs)(t.p,{children:[`Pass cards as direct children, not wrapped in additional DOM elements.
The pattern only controls placement: set the cards' `,(0,h.jsx)(t.code,{children:`variant`}),` explicitly.
Rows have equal heights and the gap uses `,(0,h.jsx)(t.code,{children:`--rem-16`}),`.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The layout works independently or inside `,(0,h.jsx)(t.code,{children:`.grid`}),` and `,(0,h.jsx)(t.code,{children:`.subgrid`}),` containers.
Native section props, including `,(0,h.jsx)(t.code,{children:`className`}),`, `,(0,h.jsx)(t.code,{children:`style`}),`, `,(0,h.jsx)(t.code,{children:`ref`}),` and ARIA attributes,
are forwarded to the root element. No theme-specific layout props are required.`]}),`
`,(0,h.jsx)(t.h2,{id:`three-cards`,children:`Three cards`}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`two-cards`,children:`Two cards`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`four-cards`,children:`Four cards`}),`
`,(0,h.jsx)(o,{of:f})]})}function m(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),n(),a(),c()})))()}g();export{m as default};