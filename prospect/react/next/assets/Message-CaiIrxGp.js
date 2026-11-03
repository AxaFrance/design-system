import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-BkUoVv_C.js";import{i,l as a,n as o,s}from"./blocks-5rT_svCw.js";import{i as c,n as l,r as u,t as d}from"./Message.stories-DjmCBJTt.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:l,name:`Message`}),`
`,(0,m.jsx)(t.h1,{id:`message`,children:`Message`}),`
`,(0,m.jsx)(t.p,{children:`To use the message import it like that:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Message } from "@axa-fr/canopee-react/prospect";

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
`,(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,m.jsxs)(t.p,{children:[`Use the `,(0,m.jsx)(t.code,{children:`variant`}),` prop to change the look of the message. `,(0,m.jsx)(t.a,{href:`#all-variants`,children:`See the examples`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`all-variants`,children:`All variants`}),`
`,(0,m.jsx)(o,{of:d,layout:`fullscreen`})]})}function p(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),n(),a(),c()})))()}h();export{p as default};