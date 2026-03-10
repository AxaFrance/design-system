import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import{M as p,C as o,a}from"./index-PxNXGCko.js";import{T as m,a as r,b as c}from"./TabBar.stories-BBUGIsBb.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bi_GDnHg.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./FormLayout-Djfd9aiW.js";/* empty css               */function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:m,name:"TabBar"}),`
`,t.jsx(n.h1,{id:"tabbar",children:"TabBar"}),`
`,t.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,t.jsx(n.p,{children:"To use the tabbar component import it like that:"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { TabBar } from "@axa-fr/canopee-react/prospect";

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
`,t.jsxs(n.p,{children:["You can define the default selected tab with the ",t.jsx(n.code,{children:"preSelectedTabIndex"})," prop."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { TabBar } from "@axa-fr/canopee-react/prospect";

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
`,t.jsxs(n.p,{children:["You can also customize the alignment of the tabs with the ",t.jsx(n.code,{children:"direction"})," prop."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { TabBar, tabBarDirection } from "@axa-fr/canopee-react/prospect";

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
`,t.jsx(n.h2,{id:"with-text-content",children:"With text content"}),`
`,t.jsx(o,{of:r}),`
`,t.jsx(a,{of:r}),`
`,t.jsx(n.h2,{id:"with-reactnode-content",children:"With ReactNode content"}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(a,{of:c})]})}function w(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i(e)}export{w as default};
