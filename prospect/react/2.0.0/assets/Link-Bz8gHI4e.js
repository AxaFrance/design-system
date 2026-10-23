import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-DwCjzDam.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-BYpdgX0H.js";import{n as c,r as l,t as u}from"./Link.stories-7xcwbWRd.js";function d(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u,name:`Link`}),`
`,(0,p.jsx)(n.h2,{id:`link`,children:`Link`}),`
`,(0,p.jsx)(n.h3,{id:`import`,children:`Import`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Link } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,p.jsx)(n.h3,{id:`use`,children:`Use`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`export const LinkComponent = () => (\r
  <Link openInNewTab href="https://fakelink.com">\r
    Plus de détails\r
  </Link>\r
);
`})}),`
`,(0,p.jsx)(n.h3,{id:`react-router`,children:`React Router`}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`as`}),` prop selects the rendered component and infers its props and ref type.\r
By default, `,(0,p.jsx)(n.code,{children:`Link`}),` renders an HTML anchor. React Router must be installed in the\r
application, and this example must be rendered inside a router.`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Link as RouterLink } from "react-router";\r
import { Link } from "@axa-fr/canopee-react/prospect";\r
\r
export const AccountLink = () => (\r
  <Link as={RouterLink} to="/account">\r
    Mon compte\r
  </Link>\r
);
`})}),`
`,(0,p.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(t,{of:c})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),o(),n(),l()})))()}m();export{f as default};