import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-BkUoVv_C.js";import{i,l as a,n as o,s}from"./blocks-5rT_svCw.js";import{i as c,n as l,r as u,t as d}from"./Link.stories-CAVMVT1m.js";function f(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:l,name:`Link`}),`
`,(0,m.jsx)(t.h2,{id:`link`,children:`Link`}),`
`,(0,m.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Link } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,m.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`export const LinkComponent = () => (
  <Link openInNewTab href="https://fakelink.com">
    Plus de détails
  </Link>
);
`})}),`
`,(0,m.jsx)(t.h3,{id:`react-router`,children:`React Router`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`as`}),` prop selects the rendered component and infers its props and ref type.
By default, `,(0,m.jsx)(t.code,{children:`Link`}),` renders an HTML anchor. React Router must be installed in the
application, and this example must be rendered inside a router.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Link as RouterLink } from "react-router";
import { Link } from "@axa-fr/canopee-react/prospect";

export const AccountLink = () => (
  <Link as={RouterLink} to="/account">
    Mon compte
  </Link>
);
`})}),`
`,(0,m.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h2,{id:`button-styles`,children:`Button styles`}),`
`,(0,m.jsxs)(t.p,{children:[`Use a `,(0,m.jsx)(t.code,{children:`button-*`}),` variant to display a link with a button style while keeping
anchor semantics. The `,(0,m.jsx)(t.code,{children:`af-btn-client`}),` classes are added automatically.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Link } from "@axa-fr/canopee-react/prospect";

export const LinkButton = () => (
  <Link href="https://fakelink.com" variant="button-secondary">
    Plus de détails
  </Link>
);
`})}),`
`,(0,m.jsxs)(t.p,{children:[`Available variants: `,(0,m.jsx)(t.code,{children:`button-primary`}),`, `,(0,m.jsx)(t.code,{children:`button-primary-business`}),`,
`,(0,m.jsx)(t.code,{children:`button-primary-inverse`}),`, `,(0,m.jsx)(t.code,{children:`button-secondary`}),`, `,(0,m.jsx)(t.code,{children:`button-secondary-inverse`}),`,
`,(0,m.jsx)(t.code,{children:`button-tertiary`}),` and `,(0,m.jsx)(t.code,{children:`button-ghost`}),`.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The disabled examples omit `,(0,m.jsx)(t.code,{children:`href`}),` and use `,(0,m.jsx)(t.code,{children:`role="link"`}),` with
`,(0,m.jsx)(t.code,{children:`aria-disabled="true"`}),` to prevent navigation.`]}),`
`,(0,m.jsx)(o,{of:d})]})}function p(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),n(),a(),c()})))()}h();export{p as default};