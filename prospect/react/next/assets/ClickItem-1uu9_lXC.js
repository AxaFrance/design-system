import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-eNU0SGNV.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-Apjsvtpk.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./ClickItem.stories-axumZyXr.js";function h(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...s(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:d,name:`ClickItem`}),`
`,(0,_.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-tsx`,children:`import { ClickItem } from "@axa-fr/canopee-react/prospect";
import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

const MyComponent = () => (
  <>
    <ClickItem icon={callIcon} state="default" variant="small" title="Titre" />
  </>
);
`})}),`
`,(0,_.jsx)(n.h2,{id:`uses`,children:`Uses`}),`
`,(0,_.jsx)(n.p,{children:`The Click Item component is an interactive element designed to trigger an action when selected. It can be used alone or integrated into lists, menus, or tables to enable fast and intuitive interactions.`}),`
`,(0,_.jsx)(n.p,{children:`The component comes in four variants: large, medium, small, and agent and the entire element is clickable.`}),`
`,(0,_.jsxs)(n.p,{children:[`If it's used within a parent component that already handles click events (i.e., the parent itself has an `,(0,_.jsx)(n.code,{children:`onClick`}),` handler), you `,(0,_.jsxs)(n.strong,{children:[`shouldn't provide an `,(0,_.jsx)(n.code,{children:`onClick`}),` function as a prop to this component`]}),`.
In such cases, the component will automatically behave as a `,(0,_.jsx)(n.strong,{children:`display-only element`}),`, allowing the parent to manage all click interactions.`]}),`
`,(0,_.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(r,{of:u}),`
`,(0,_.jsx)(t,{of:u}),`
`,(0,_.jsx)(n.h2,{id:`clickitem-variants`,children:`ClickItem Variants`}),`
`,(0,_.jsx)(n.h3,{id:`large`,children:`Large`}),`
`,(0,_.jsx)(r,{of:f}),`
`,(0,_.jsx)(t,{of:f}),`
`,(0,_.jsx)(n.h3,{id:`medium`,children:`Medium`}),`
`,(0,_.jsx)(r,{of:l}),`
`,(0,_.jsx)(t,{of:l}),`
`,(0,_.jsx)(n.h3,{id:`small`,children:`Small`}),`
`,(0,_.jsx)(r,{of:c}),`
`,(0,_.jsx)(t,{of:c}),`
`,(0,_.jsx)(n.h3,{id:`agent`,children:`Agent`}),`
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(t,{of:m})]})}function g(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=a(),o(),n(),p()})))()}v();export{g as default};