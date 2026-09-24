import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Bu2yob3Z.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-B3-wvepV.js";import{t as s}from"./mdx-react-shim-BJc4rRzj.js";import{AlignRight as c,Playground as l,n as u,t as d}from"./ButtonMultiActions.stories-BhMkHG6T.js";function f(e){let r={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:d,name:`ButtonMultiActions`}),`
`,(0,m.jsx)(r.h2,{id:`buttonmultiactions`,children:`ButtonMultiActions`}),`
`,(0,m.jsxs)(r.p,{children:[(0,m.jsx)(r.code,{children:`ButtonMultiActions`}),` is a button that reveals a menu of secondary actions when
activated. Use it when you need to group several related actions (edit,
duplicate, archive, delete...) behind a single trigger, typically in a table
row or a card, instead of displaying every action as its own button.`]}),`
`,(0,m.jsxs)(r.p,{children:[`The component manages the open/closed state, the focus movement between the
trigger and the menu, and the ARIA attributes required for a menu button
pattern. Menu items can be any focusable element (a `,(0,m.jsx)(r.code,{children:`Link`}),` for navigation, or
a `,(0,m.jsx)(r.code,{children:`button`}),` for an in-page action).`]}),`
`,(0,m.jsx)(r.h3,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-tsx`,children:`import { ButtonMultiActions } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,m.jsx)(r.h3,{id:`use`,children:`Use`}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-tsx`,children:`import { ButtonMultiActions, Link } from "@axa-fr/canopee-react/distributeur";

const Example = () => (
  <ButtonMultiActions label="Actions" menuLabel="Actions supplementaires">
    <Link href="#">Modifier</Link>
    <Link href="#">Dupliquer</Link>
    <button type="button" className="af-slash-link" data-close-menu="true">
      Archiver
    </button>
  </ButtonMultiActions>
);
`})}),`
`,(0,m.jsx)(r.h3,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(r.h2,{id:`accessibility-and-keyboard`,children:`Accessibility and keyboard`}),`
`,(0,m.jsx)(r.p,{children:`The trigger exposes aria-haspopup, aria-expanded and aria-controls.`}),`
`,(0,m.jsx)(r.p,{children:`Keyboard interactions:`}),`
`,(0,m.jsxs)(r.ul,{children:[`
`,(0,m.jsx)(r.li,{children:`ArrowDown opens the menu and focuses the first action.`}),`
`,(0,m.jsx)(r.li,{children:`Escape closes the menu.`}),`
`,(0,m.jsx)(r.li,{children:`Clicking outside closes the menu.`}),`
`]}),`
`,(0,m.jsx)(r.h2,{id:`align`,children:`Align`}),`
`,(0,m.jsx)(r.p,{children:`The menu can be aligned to the left or right of the trigger.`}),`
`,(0,m.jsx)(i,{of:c,sourceState:`shown`}),`
`,(0,m.jsx)(r.h2,{id:`close-behavior`,children:`Close behavior`}),`
`,(0,m.jsx)(r.p,{children:`By default, clicking on an action closes the menu.`})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=o(),s(),r(),u()}))();export{p as default};