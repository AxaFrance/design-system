import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-rw17kmD6.js";import{t as r}from"./mdx-react-shim-okekR0or.js";import{i,l as a,n as o,s}from"./blocks-DqZwWlVi.js";import{InputTextPlaygroundStory as c,InputTextWarningStory as l,n as u,t as d}from"./InputText.stories-Bgt7Tfrf.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`InputText`}),`
`,(0,m.jsx)(t.h1,{id:`inputtext`,children:`InputText`}),`
`,(0,m.jsx)(t.p,{children:`To use the InputText import it like that:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { InputText } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <InputText
    value="John Doe"
    label="Label"
    placeholder="Placeholder"
    helper="Informations complémentaires"
    name="name"
    id="nameid"
    required
    buttonLabel="my btn"
  />
);
`})}),`
`,(0,m.jsx)(t.h2,{id:`placeholder`,children:`Placeholder`}),`
`,(0,m.jsx)(o,{of:c}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`warning`,children:`Warning`}),`
`,(0,m.jsxs)(t.p,{children:[`Use `,(0,m.jsx)(t.code,{children:`message`}),` with `,(0,m.jsx)(t.code,{children:`messageType="warning"`}),` to display a warning state with orange border and ⚠️ icon.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<InputText
  value="John Doe"
  label="Label"
  message="Warning Message"
  messageType="warning"
/>
`})}),`
`,(0,m.jsx)(o,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),a(),u()}))();export{p as default};