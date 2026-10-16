import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-BR0-TDj_.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-38CJBNT-.js";import{i as c,n as l,r as u,t as d}from"./Message.stories-BCaAD2Xn.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:l,name:`Message`}),`
`,(0,m.jsx)(n.h1,{id:`message`,children:`Message`}),`
`,(0,m.jsx)(n.p,{children:`To use the message import it like that:`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Message } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <>
    <Message>My message</Message>
    <Message variant="error">My error message</Message>
  </>
);
`})}),`
`,(0,m.jsx)(n.h2,{id:`title`,children:`Title`}),`
`,(0,m.jsxs)(n.p,{children:[`The title of the message is set by the `,(0,m.jsx)(n.code,{children:`title`}),` prop.
You can set the title level with `,(0,m.jsx)(n.code,{children:`heading`}),` prop : "h2" | "h3" | "h4" | "h5" | "h6", the default is "h4".`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<Message title="My title" heading="h2">
  My message
</Message>
`})}),`
`,(0,m.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(r,{of:u}),`
`,(0,m.jsx)(t,{of:u}),`
`,(0,m.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,m.jsxs)(n.p,{children:[`Use the `,(0,m.jsx)(n.code,{children:`variant`}),` prop to change the look of the message. `,(0,m.jsx)(n.a,{href:`#all-variants`,children:`See the examples`}),`.`]}),`
`,(0,m.jsx)(n.h2,{id:`all-variants`,children:`All variants`}),`
`,(0,m.jsx)(r,{of:d,layout:`fullscreen`})]})}function p(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=a(),o(),n(),c()})))()}h();export{p as default};