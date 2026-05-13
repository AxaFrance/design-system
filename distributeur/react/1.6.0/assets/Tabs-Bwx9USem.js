import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-De-9TtK1.js";import{t as s}from"./mdx-react-shim-BooHXHLT.js";import{ComplexTabs as c,SingleTab as l,n as u,t as d}from"./Tabs.stories-DnvPyiPd.js";function f(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(r.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,m.jsx)(r.p,{children:`To use tabs, import them as follows:`}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-tsx`,children:`import { Tabs } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,m.jsx)(r.h2,{id:`single-tab`,children:`Single Tab`}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-tsx`,children:`const MyComponent = () => (
  <Tabs>
    <Tabs.Tab title="My Title">Content of my first tab</Tabs.Tab>
  </Tabs>
);
`})}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(r.h2,{id:`complex-tabs`,children:`Complex Tabs`}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-tsx`,children:`const TabTitleIconLeft = (
  <span>
    <i className="glyphicon glyphicon-ok" /> Title with left icon
  </span>
);
const TabTitleIconRight = (
  <span>
    Title with right icon <i className="glyphicon glyphicon-facetime-video" />
  </span>
);
const TabTitleBadge = (
  <span>
    Title with badge <Badge classModifier="danger"> 42 </Badge>
  </span>
);
const TabTitleIconBadge = (
  <span>
    Title with badge and left icon
    <Badge classModifier="error"> Lorem ipsum </Badge>
    <i className="glyphicon glyphicon-facetime-video" />
  </span>
);

const MyComponent = () => (
  <Tabs>
    <Tabs.Tab title={TabTitleIconLeft} classModifier="has-icon-left">
      Content of my first tab
    </Tabs.Tab>
    <Tabs.Tab title={TabTitleIconRight} classModifier="has-icon-right">
      Content of my second tab
    </Tabs.Tab>
    <Tabs.Tab title={TabTitleBadge}>Content of my third tab </Tabs.Tab>
    <Tabs.Tab title={TabTitleIconBadge} classModifier="has-icon-left">
      Content of my fifth tab
    </Tabs.Tab>
  </Tabs>
);
`})}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(n,{of:c})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=o(),s(),r(),u()}))();export{p as default};