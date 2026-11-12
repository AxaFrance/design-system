import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-tv3KQEW_.js";import{i,l as a,n as o,s}from"./blocks-D74w0bgk.js";import{a as c,i as l,n as u,r as d,t as f}from"./PatternWithAction.stories-BlqTE7st.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...r(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:u}),`
`,(0,h.jsx)(t.h1,{id:`patternwithaction`,children:`PatternWithAction`}),`
`,(0,h.jsx)(t.p,{children:`Section composed of an optional heading, an optional call to action and content.
The action follows content in the DOM and keyboard order. On desktop (above
1023px), it is visually aligned to the right of the heading; on mobile and
tablet, it is displayed after the content.`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { Button, PatternWithAction } from "@axa-fr/canopee-react/prospect";

<main className="grid">
  <PatternWithAction headingProps={{ children: "Mes derniers documents" }}>
    <p>Content</p>
    <PatternWithAction.Action>
      <Button variant="secondary">Afficher mes documents</Button>
    </PatternWithAction.Action>
  </PatternWithAction>
</main>;
`})}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Description`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`headingProps`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`Heading`}),` props. The heading level defaults to `,(0,h.jsx)(t.code,{children:`2`}),`.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsxs)(t.td,{children:[`Content. Wrap the call to action in `,(0,h.jsx)(t.code,{children:`PatternWithAction.Action`}),`.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsxs)(t.td,{children:[`Native `,(0,h.jsx)(t.code,{children:`section`}),` props`]}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`id`}),`, `,(0,h.jsx)(t.code,{children:`className`}),`, `,(0,h.jsx)(t.code,{children:`style`}),`, `,(0,h.jsx)(t.code,{children:`ref`}),`, ARIA attributes, etc.`]})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`All direct `,(0,h.jsx)(t.code,{children:`PatternWithAction.Action`}),` slots are displayed after content in the
DOM; on desktop they are visually aligned with the heading. Slots may be
repeated and nested in fragments. Other children are content. An action
returned by a custom component is treated as content because the layout cannot
inspect a component's rendered output. The heading area is omitted when there
is no heading.`]}),`
`,(0,h.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,h.jsxs)(t.p,{children:[`Use inside `,(0,h.jsx)(t.code,{children:`.grid`}),`, either directly or through an uninterrupted chain of
`,(0,h.jsx)(t.code,{children:`.subgrid`}),` containers. The component adds `,(0,h.jsx)(t.code,{children:`subgrid`}),` automatically, so its
content (for example `,(0,h.jsx)(t.code,{children:`PatternMozaicGrid`}),`) inherits the parent's columns.
The vertical gap uses `,(0,h.jsx)(t.code,{children:`--rem-16`}),`.`]}),`
`,(0,h.jsx)(t.h2,{id:`with-action`,children:`With action`}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`without-action`,children:`Without action`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`custom-heading-level`,children:`Custom heading level`}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`debug-grid`,children:`Debug grid`}),`
`,(0,h.jsxs)(t.p,{children:[`The stories include `,(0,h.jsx)(t.code,{children:`DebugGrid`}),`. Use the `,(0,h.jsx)(t.strong,{children:`Grid`}),` toggle at the bottom left of
the canvas to show or hide the grid columns.`]})]})}function m(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),n(),a(),c()})))()}g();export{m as default};