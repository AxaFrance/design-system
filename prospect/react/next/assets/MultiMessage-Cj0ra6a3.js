import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-BP7uUDqO.js";import{t as r}from"./mdx-react-shim-erK6SIsK.js";import{i,l as a,n as o,s}from"./blocks-Ct67zN0G.js";import{Playground as c,n as l,t as u}from"./MultiMessage.stories-DMEAamTw.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u,name:`MultiMessage`}),`
`,(0,p.jsx)(t.h1,{id:`multimessage`,children:`MultiMessage`}),`
`,(0,p.jsx)(t.p,{children:`A carousel of messages sharing the same surface. Use it to group several
related notifications when only one needs to be visible at a time.`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { MultiMessage } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <MultiMessage
    items={[
      { variant: "information", title: "First", children: "..." },
      { variant: "error", title: "Second", children: "..." },
    ]}
  />
);
`})}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(t.p,{children:[`Each item carries its own `,(0,p.jsx)(t.code,{children:`variant`}),` (`,(0,p.jsx)(t.code,{children:`information`}),`, `,(0,p.jsx)(t.code,{children:`validation`}),`, `,(0,p.jsx)(t.code,{children:`warning`}),`,
`,(0,p.jsx)(t.code,{children:`error`}),`, `,(0,p.jsx)(t.code,{children:`neutral`}),`) and the wrapper colors update with the active item. Use
the playground below to switch between them via the `,(0,p.jsx)(t.code,{children:`defaultActiveIndex`}),`
control.`]}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(i,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};