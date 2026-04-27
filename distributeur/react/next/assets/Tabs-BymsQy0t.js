import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-D3yXdDgY.js";import"./index-Buq8Z7Kx.js";import{T as l,S as e,C as s}from"./Tabs.stories-DwXjvitN.js";import{M as T,C as o,a as i}from"./index-BqJXDbDb.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-D4uq0Cmk.js";import"./iframe-DkoVaOu-.js";import"./DocsRenderer-CFRXHY34-B7pFMfNt.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-BjCk13Vd.js";import"./index-CH2Su9EI.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(a){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(T,{of:l}),`
`,n.jsx(t.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsx(t.p,{children:"To use tabs, import them as follows:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Tabs } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,n.jsx(t.h2,{id:"single-tab",children:"Single Tab"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`const MyComponent = () => (
  <Tabs>
    <Tabs.Tab title="My Title">Content of my first tab</Tabs.Tab>
  </Tabs>
);
`})}),`
`,n.jsx(o,{of:e}),`
`,n.jsx(i,{of:e}),`
`,n.jsx(t.h2,{id:"complex-tabs",children:"Complex Tabs"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`const TabTitleIconLeft = (
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
`,n.jsx(o,{of:s}),`
`,n.jsx(i,{of:s})]})}function S(a={}){const{wrapper:t}={...c(),...a.components};return t?n.jsx(t,{...a,children:n.jsx(r,{...a})}):r(a)}export{S as default};
