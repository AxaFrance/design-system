import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-D3yXdDgY.js";import{M as l,C as o,a}from"./index-D9MEyJ6n.js";import{T as d,a as r,b as c}from"./TabBar.stories-CU-5bmH0.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-KxSLfSyi.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./LoaderApollo-BOCy7keK.js";/* empty css               */import"./index-CH2Su9EI.js";function i(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:d,name:"TabBar"}),`
`,n.jsx(t.h1,{id:"tabbar",children:"TabBar"}),`
`,n.jsx(t.h2,{id:"how-to-use",children:"How to use"}),`
`,n.jsx(t.p,{children:"To use the tabbar component import it like that:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { TabBar } from "@axa-fr/canopee-react/prospect";

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
`,n.jsxs(t.p,{children:["You can define the default selected tab with the ",n.jsx(t.code,{children:"preSelectedTabIndex"})," prop."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { TabBar } from "@axa-fr/canopee-react/prospect";

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
`,n.jsxs(t.p,{children:["You can also customize the alignment of the tabs with the ",n.jsx(t.code,{children:"direction"})," prop."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { TabBar, tabBarDirection } from "@axa-fr/canopee-react/prospect";

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
`,n.jsxs(t.p,{children:["You can also handle the tab selection with the ",n.jsx(t.code,{children:"handleSelectTab"})," function in each item."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { TabBar } from "@axa-fr/canopee-react/prospect";

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
`,n.jsx(t.h2,{id:"with-text-content",children:"With text content"}),`
`,n.jsx(o,{of:r}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(t.h2,{id:"with-reactnode-content",children:"With ReactNode content"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(a,{of:c})]})}function w(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{w as default};
