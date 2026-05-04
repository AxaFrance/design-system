import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-npIpnPBv.js";import{t as r}from"./mdx-react-shim-Zu--mdCB.js";import{i,l as a,n as o,s}from"./blocks-0mdg8u_Z.js";import{ButtonCard as c,Default as l,n as u,t as d}from"./Card.stories-hNyV-qx8.js";function f(e){let t={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`Card`}),`
`,(0,m.jsx)(t.h1,{id:`card`,children:`Card`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.strong,{children:`Card`}),` component is a simple wrapper that adds an `,(0,m.jsx)(t.strong,{children:`padding and a border`}),`.`,(0,m.jsx)(t.br,{}),`
`,`You can define the semantics you want using the `,(0,m.jsx)(t.code,{children:`as`}),` property.`]}),`
`,(0,m.jsxs)(t.blockquote,{children:[`
`,(0,m.jsxs)(t.p,{children:[`Unlike the previous version of the Look&Feel package, this component does not have a `,(0,m.jsx)(t.code,{children:`classModifier`}),` property.
You can still redefine the value of the `,(0,m.jsx)(t.code,{children:`className`}),` property if needed.*`]}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Card, Heading } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,m.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`export const CardComponent = () => (
  <Card>
    <Heading level={1} className="af-card__title">
      My card title
    </Heading>
    <p>My card content</p>
  </Card>
);
`})}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`export const CardComponent = () => (
  <Card as="button" onClick={handleClick}>
    <Heading level={1} className="af-card__title">
      My card title
    </Heading>
    <p>My card content</p>
  </Card>
);
`})}),`
`,(0,m.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(t.h3,{id:`basic-content`,children:`Basic content`}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h3,{id:`button-card`,children:`Button card`}),`
`,(0,m.jsx)(o,{of:c}),`
`,(0,m.jsx)(i,{of:c})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),a(),u()}))();export{p as default};