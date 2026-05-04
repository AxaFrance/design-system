import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CrCwfpcW.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-B6pS4pdr.js";import{t as s}from"./mdx-react-shim-gngZ-MEU.js";import{LinkAsAnchorStory as c,n as l,t as u}from"./Link.stories-Doqd-zIC.js";function d(e){let r={code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(r.h2,{id:`link`,children:`Link`}),`
`,(0,p.jsx)(r.h3,{id:`import`,children:`Import`}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-tsx`,children:`import { Link } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,p.jsx)(r.h3,{id:`use`,children:`Use`}),`
`,(0,p.jsx)(r.h4,{id:`link-example`,children:`Link Example:`}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-tsx`,children:`export const LinkExample = () => (
  <Link href="http://www.axa.fr" target="_blank">
    Lien vers AXA
  </Link>
);
`})}),`
`,(0,p.jsx)(r.h4,{id:`playground`,children:`Playground:`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(r.h4,{id:`use-link-with-react-router-dom`,children:`Use Link with react-router-dom:`}),`
`,(0,p.jsxs)(r.p,{children:[`The `,(0,p.jsx)(r.code,{children:`Link`}),` component is interoperable with other libraries like `,(0,p.jsx)(r.code,{children:`react-router-dom`}),`. In this case, you need to use the `,(0,p.jsx)(r.code,{children:`component`}),` prop to specify the link component to use.
The `,(0,p.jsx)(r.code,{children:`component`}),` prop overrides the root element, which is by default an `,(0,p.jsx)(r.code,{children:`a`}),` tag, and all associated props.`]}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-tsx`,children:`import { Link as RouterLink } from "react-router-dom";

export const LinkExample = () => (
  <Link component={RouterLink} to="/contact">
    Go to Contact Page
  </Link>
);
`})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=o(),s(),r(),l()}))();export{f as default};