import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CjUrzS1v.js";import{n as c,r as l,t as u}from"./Link.stories-DCBLywPF.js";function d(e){let t={code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`link`,children:`Link`}),`
`,(0,p.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Link } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,p.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,p.jsx)(t.h4,{id:`link-example`,children:`Link Example:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`export const LinkExample = () => (
  <Link href="http://www.axa.fr" target="_blank">
    Lien vers AXA
  </Link>
);
`})}),`
`,(0,p.jsx)(t.h4,{id:`playground`,children:`Playground:`}),`
`,(0,p.jsx)(r,{of:u}),`
`,(0,p.jsx)(s,{of:u}),`
`,(0,p.jsx)(t.h4,{id:`use-link-with-react-router-dom`,children:`Use Link with react-router-dom:`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`Link`}),` component is interoperable with other libraries like `,(0,p.jsx)(t.code,{children:`react-router-dom`}),`. In this case, you need to use the `,(0,p.jsx)(t.code,{children:`component`}),` prop to specify the link component to use.
The `,(0,p.jsx)(t.code,{children:`component`}),` prop overrides the root element, which is by default an `,(0,p.jsx)(t.code,{children:`a`}),` tag, and all associated props.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Link as RouterLink } from "react-router-dom";

export const LinkExample = () => (
  <Link component={RouterLink} to="/contact">
    Go to Contact Page
  </Link>
);
`})})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),a(),o(),l()})))()}m();export{f as default};