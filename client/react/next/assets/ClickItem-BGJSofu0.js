import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-D1Cs0fwN.js";import{i,l as a,n as o,s}from"./blocks-Bz77zPe8.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./ClickItem.stories-DFp-hOCQ.js";function m(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...r(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:c,name:`ClickItem`}),`
`,(0,g.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { ClickItem } from "@axa-fr/canopee-react/client";
import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

const MyComponent = () => (
  <>
    <ClickItem icon={callIcon} state="default" variant="small" title="Titre" />
  </>
);
`})}),`
`,(0,g.jsx)(t.h3,{id:`uses`,children:`Uses`}),`
`,(0,g.jsx)(t.p,{children:`The Click Item component is an interactive element designed to trigger an action when selected. It can be used alone or integrated into lists, menus, or tables to enable fast and intuitive interactions.`}),`
`,(0,g.jsx)(t.p,{children:`The component comes in four variants: large, medium, small, and agent. The entire element is clickable.`}),`
`,(0,g.jsxs)(t.p,{children:[`If it's used within a parent component that already handles click events (i.e., the parent itself has an `,(0,g.jsx)(t.code,{children:`onClick`}),` handler), you `,(0,g.jsxs)(t.strong,{children:[`shouldn't provide an `,(0,g.jsx)(t.code,{children:`onClick`}),` function as a prop to this component`]}),`.
In such cases, the component will automatically behave as a `,(0,g.jsx)(t.strong,{children:`display-only element`}),`, allowing the parent to manage all click interactions.`]}),`
`,(0,g.jsx)(t.h3,{id:`large`,children:`Large`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(t.h3,{id:`medium`,children:`Medium`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(i,{of:f}),`
`,(0,g.jsx)(t.h3,{id:`small`,children:`Small`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(t.h3,{id:`agent`,children:`Agent`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(i,{of:p})]})}function h(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),n(),a(),d()})))()}_();export{h as default};