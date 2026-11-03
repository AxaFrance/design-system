import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-DBVbtB0w.js";import{i,l as a,n as o,s}from"./blocks-CEJSJFmd.js";import{i as c,n as l,r as u,t as d}from"./TabBar.stories-Qy-SEySA.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:u,name:`TabBar`}),`
`,(0,m.jsx)(t.h1,{id:`tabbar`,children:`TabBar`}),`
`,(0,m.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,m.jsx)(t.p,{children:`To use the tabbar component import it like that:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { TabBar } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <TabBar
    items={[
      { title: "Tab 1", content: "Content 1" },
      { title: "Tab 2", content: "Content 2" },
      { title: "Tab 3", content: "Content 3" },
    ]}
  />
);
`})}),`
`,(0,m.jsxs)(t.p,{children:[`You can define the default selected tab with the `,(0,m.jsx)(t.code,{children:`preSelectedTabIndex`}),` prop.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { TabBar } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <TabBar
    items={[
      { title: "Tab 1", content: "Content 1" },
      { title: "Tab 2", content: "Content 2" },
      { title: "Tab 3", content: "Content 3" },
    ]}
    preSelectedTabIndex={1}
  />
);
`})}),`
`,(0,m.jsxs)(t.p,{children:[`You can also customize the alignment of the tabs with the `,(0,m.jsx)(t.code,{children:`direction`}),` prop.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { TabBar, tabBarDirection } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <TabBar
    items={[
      { title: "Tab 1", content: "Content 1" },
      { title: "Tab 2", content: "Content 2" },
      { title: "Tab 3", content: "Content 3" },
    ]}
    direction={tabBarDirection.center}
  />
);
`})}),`
`,(0,m.jsxs)(t.p,{children:[`You can also handle the tab selection with the `,(0,m.jsx)(t.code,{children:`handleSelectTab`}),` function in each item.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { TabBar } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <TabBar
    items={[
      {
        title: "Tab 1",
        content: "Content 1",
        handleSelectTab: () => console.log("Tab 1 selected"),
      },
      {
        title: "Tab 2",
        content: "Content 2",
        handleSelectTab: () => console.log("Tab 2 selected"),
      },
      {
        title: "Tab 3",
        content: "Content 3",
        handleSelectTab: () => console.log("Tab 3 selected"),
      },
    ]}
  />
);
`})}),`
`,(0,m.jsx)(t.h2,{id:`with-text-content`,children:`With text content`}),`
`,(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`with-reactnode-content`,children:`With ReactNode content`}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(i,{of:l})]})}function p(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),n(),a(),c()})))()}h();export{p as default};