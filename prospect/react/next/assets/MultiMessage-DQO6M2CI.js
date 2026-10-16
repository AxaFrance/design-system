import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-CxnOZA08.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-DO_PX2D8.js";import{n as c,r as l,t as u}from"./MultiMessage.stories-DV3Ac_te.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u,name:`MultiMessage`}),`
`,(0,p.jsx)(n.h1,{id:`multimessage`,children:`MultiMessage`}),`
`,(0,p.jsx)(n.p,{children:`A carousel of messages sharing the same surface. Use it to group several
related notifications when only one needs to be visible at a time.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { MultiMessage } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <MultiMessage
    items={[
      { variant: "information", title: "First", children: "..." },
      { variant: "error", title: "Second", children: "..." },
    ]}
  />
);
`})}),`
`,(0,p.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(n.p,{children:[`Each item carries its own `,(0,p.jsx)(n.code,{children:`variant`}),` (`,(0,p.jsx)(n.code,{children:`information`}),`, `,(0,p.jsx)(n.code,{children:`validation`}),`, `,(0,p.jsx)(n.code,{children:`warning`}),`,
`,(0,p.jsx)(n.code,{children:`error`}),`, `,(0,p.jsx)(n.code,{children:`neutral`}),`) and the wrapper colors update with the active item. Use
the playground below to switch between them via the `,(0,p.jsx)(n.code,{children:`defaultActiveIndex`}),`
control.`]}),`
`,(0,p.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(t,{of:c})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),o(),n(),l()})))()}m();export{f as default};