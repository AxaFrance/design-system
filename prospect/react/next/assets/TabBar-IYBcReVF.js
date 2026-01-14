import{j as n}from"./index-C-iqcyhV.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import{M as p,C as o,a}from"./index-B9oP-U0u.js";import{T as d,a as r,b as c}from"./TabBar.stories-DcnUBufH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-CNa9wdvT.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./SkeletonApollo-Cce1vNXK.js";function i(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:d,name:"TabBar"}),`
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
`,n.jsx(t.h2,{id:"with-text-content",children:"With text content"}),`
`,n.jsx(o,{of:r}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(t.h2,{id:"with-reactnode-content",children:"With ReactNode content"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(a,{of:c})]})}function M(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{M as default};
