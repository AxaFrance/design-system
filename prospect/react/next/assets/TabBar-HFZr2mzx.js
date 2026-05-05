import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C8Tw6Lm5.js";import{t as r}from"./mdx-react-shim-B5BYO_WN.js";import{i,l as a,n as o,s}from"./blocks-B2Oe2WTt.js";import{TabBarStory as c,TabBarWithReactNodeStory as l,n as u,t as d}from"./TabBar.stories-t7wLSF7B.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`TabBar`}),`
`,(0,m.jsx)(t.h1,{id:`tabbar`,children:`TabBar`}),`
`,(0,m.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,m.jsx)(t.p,{children:`To use the tabbar component import it like that:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { TabBar } from "@axa-fr/canopee-react/prospect";

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
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { TabBar } from "@axa-fr/canopee-react/prospect";

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
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { TabBar, tabBarDirection } from "@axa-fr/canopee-react/prospect";

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
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { TabBar } from "@axa-fr/canopee-react/prospect";

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
`,(0,m.jsx)(o,{of:c}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`with-reactnode-content`,children:`With ReactNode content`}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(i,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),a(),u()}))();export{p as default};