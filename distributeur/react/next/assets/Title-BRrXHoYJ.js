import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{n as c,r as l,t as u}from"./Title.stories-BZjKwWSw.js";function d(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`title`,children:`Title`}),`
`,(0,p.jsx)(t.h3,{id:`use-of-title`,children:`Use of Title`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Title } from "@axa-fr/canopee-react/distributeur";

export const MyComponent = () => (
  <Title className="af-title--custom">Sample Title</Title>
);
`})}),`
`,(0,p.jsx)(t.p,{children:`The title can also contain any React component. Simply pass it into :`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`the `,(0,p.jsx)(t.code,{children:`contentLeft`}),` prop if you want it to be displayed between the title and the separator.`]}),`
`,(0,p.jsxs)(t.li,{children:[`the `,(0,p.jsx)(t.code,{children:`contentRight`}),` prop if you want it to be displayed after the separator.`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`By default, the title displays a separator line. Use `,(0,p.jsx)(t.code,{children:`withDivider={false}`}),` to hide the separator line.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Title } from "@axa-fr/canopee-react/distributeur";

export const MyComponent = () => (
  <Title
    className="af-title--custom"
    withDivider={false}
    contentLeft={<Button>Left button</Button>}
    contentRight={<Button>Right button</Button>}
  >
    Title with content
  </Title>
);
`})}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:u}),`
`,(0,p.jsx)(s,{of:u})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),a(),o(),l()})))()}m();export{f as default};