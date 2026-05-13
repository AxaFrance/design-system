import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-BkDSX2uU.js";import{t as r}from"./mdx-react-shim-ByL6om5n.js";import{i,l as a,n as o,s}from"./blocks-BXnQ6LPM.js";import{All as c,Playground as l,n as u,t as d}from"./Message.stories-BA668BLN.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`Message`}),`
`,(0,m.jsx)(t.h1,{id:`message`,children:`Message`}),`
`,(0,m.jsx)(t.p,{children:`To use the message import it like that:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Message } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <>
    <Message>My message</Message>
    <Message variant="error">My error message</Message>
  </>
);
`})}),`
`,(0,m.jsx)(t.h2,{id:`title`,children:`Title`}),`
`,(0,m.jsxs)(t.p,{children:[`The title of the message is set by the `,(0,m.jsx)(t.code,{children:`title`}),` prop.
You can set the title level with `,(0,m.jsx)(t.code,{children:`heading`}),` prop : "h2" | "h3" | "h4" | "h5" | "h6", the default is "h4".`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Message title="My title" heading="h2">
  My message
</Message>
`})}),`
`,(0,m.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,m.jsxs)(t.p,{children:[`Use the `,(0,m.jsx)(t.code,{children:`variant`}),` prop to change the look of the message. `,(0,m.jsx)(t.a,{href:`#all-variants`,children:`See the examples`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`all-variants`,children:`All variants`}),`
`,(0,m.jsx)(o,{of:c,layout:`fullscreen`})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),a(),u()}))();export{p as default};