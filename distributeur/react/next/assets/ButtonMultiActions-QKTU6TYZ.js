import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{i as c,n as l,r as u,t as d}from"./ButtonMultiActions.stories-DAgWEj64.js";function f(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:l,name:`ButtonMultiActions`}),`
`,(0,m.jsx)(t.h2,{id:`buttonmultiactions`,children:`ButtonMultiActions`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`ButtonMultiActions`}),` is a button that reveals a menu of secondary actions when
activated. Use it when you need to group several related actions (edit,
duplicate, archive, delete...) behind a single trigger, typically in a table
row or a card, instead of displaying every action as its own button.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The component manages the open/closed state, the focus movement between the
trigger and the menu, and the ARIA attributes required for a menu button
pattern. Menu items can be any focusable element (a `,(0,m.jsx)(t.code,{children:`Link`}),` for navigation, or
a `,(0,m.jsx)(t.code,{children:`button`}),` for an in-page action).`]}),`
`,(0,m.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { ButtonMultiActions } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,m.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { ButtonMultiActions, Link } from "@axa-fr/canopee-react/distributeur";

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
`,(0,m.jsx)(t.h3,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(r,{of:u}),`
`,(0,m.jsx)(s,{of:u}),`
`,(0,m.jsx)(t.h2,{id:`accessibility-and-keyboard`,children:`Accessibility and keyboard`}),`
`,(0,m.jsx)(t.p,{children:`The trigger exposes aria-haspopup, aria-expanded and aria-controls.`}),`
`,(0,m.jsx)(t.p,{children:`Keyboard interactions:`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`ArrowDown opens the menu and focuses the first action.`}),`
`,(0,m.jsx)(t.li,{children:`Escape closes the menu.`}),`
`,(0,m.jsx)(t.li,{children:`Clicking outside closes the menu.`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`align`,children:`Align`}),`
`,(0,m.jsx)(t.p,{children:`The menu can be aligned to the left or right of the trigger.`}),`
`,(0,m.jsx)(r,{of:d,sourceState:`shown`}),`
`,(0,m.jsx)(t.h2,{id:`close-behavior`,children:`Close behavior`}),`
`,(0,m.jsx)(t.p,{children:`By default, clicking on an action closes the menu.`})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),a(),o(),c()})))()}h();export{p as default};