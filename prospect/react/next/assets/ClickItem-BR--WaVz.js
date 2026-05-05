import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C8Tw6Lm5.js";import{t as r}from"./mdx-react-shim-B5BYO_WN.js";import{i,l as a,n as o,s}from"./blocks-B2Oe2WTt.js";import{ClickItemAgentStory as c,ClickItemDefault as l,ClickItemLargeStory as u,ClickItemMediumStory as d,ClickItemSmallStory as f,n as p,t as m}from"./ClickItem.stories-CA1rUeiH.js";function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m,name:`ClickItem`}),`
`,(0,_.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { ClickItem } from "@axa-fr/canopee-react/prospect";
import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

const MyComponent = () => (
  <>
    <ClickItem icon={callIcon} state="default" variant="small" title="Titre" />
  </>
);
`})}),`
`,(0,_.jsx)(t.h2,{id:`uses`,children:`Uses`}),`
`,(0,_.jsx)(t.p,{children:`The Click Item component is an interactive element designed to trigger an action when selected. It can be used alone or integrated into lists, menus, or tables to enable fast and intuitive interactions.`}),`
`,(0,_.jsx)(t.p,{children:`The component comes in four variants: large, medium, small, and agent and the entire element is clickable.`}),`
`,(0,_.jsxs)(t.p,{children:[`If it's used within a parent component that already handles click events (i.e., the parent itself has an `,(0,_.jsx)(t.code,{children:`onClick`}),` handler), you `,(0,_.jsxs)(t.strong,{children:[`shouldn't provide an `,(0,_.jsx)(t.code,{children:`onClick`}),` function as a prop to this component`]}),`.
In such cases, the component will automatically behave as a `,(0,_.jsx)(t.strong,{children:`display-only element`}),`, allowing the parent to manage all click interactions.`]}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`clickitem-variants`,children:`ClickItem Variants`}),`
`,(0,_.jsx)(t.h3,{id:`large`,children:`Large`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(t.h3,{id:`medium`,children:`Medium`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(t.h3,{id:`small`,children:`Small`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(t.h3,{id:`agent`,children:`Agent`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(i,{of:c})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),r(),a(),p()}))();export{g as default};