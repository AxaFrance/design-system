import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{i as c,n as l,r as u,t as d}from"./Tabs.stories-DhrGsG5B.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,m.jsx)(t.p,{children:`To use tabs, import them as follows:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Tabs } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,m.jsx)(t.h2,{id:`single-tab`,children:`Single Tab`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`const MyComponent = () => (
  <Tabs>
    <Tabs.Tab title="My Title">Content of my first tab</Tabs.Tab>
  </Tabs>
);
`})}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(s,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`complex-tabs`,children:`Complex Tabs`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`const TabTitleIconLeft = (
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
    Title with badge <Tag variant="danger"> 42 </Tag>
  </span>
);
const TabTitleIconBadge = (
  <span>
    Title with badge and left icon
    <Tag variant="error"> Lorem ipsum </Tag>
    <i className="glyphicon glyphicon-facetime-video" />
  </span>
);

const MyComponent = () => (
  <Tabs>
    <Tabs.Tab title={TabTitleIconLeft} className="has-icon-left">
      Content of my first tab
    </Tabs.Tab>
    <Tabs.Tab title={TabTitleIconRight} className="has-icon-right">
      Content of my second tab
    </Tabs.Tab>
    <Tabs.Tab title={TabTitleBadge}>Content of my third tab </Tabs.Tab>
    <Tabs.Tab title={TabTitleIconBadge} className="has-icon-left">
      Content of my fifth tab
    </Tabs.Tab>
  </Tabs>
);
`})}),`
`,(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(s,{of:d})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),a(),o(),c()})))()}h();export{p as default};