import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import{M as l,C as o,a}from"./index-DEsSrEuO.js";import{T as m,a as r,b as i}from"./TabBar.stories-CkHf2f_p.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BuIaec4Y.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./FormLayout-BQJhE1A1.js";/* empty css               */function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:m,name:"TabBar"}),`
`,n.jsx(t.h1,{id:"tabbar",children:"TabBar"}),`
`,n.jsx(t.h2,{id:"how-to-use",children:"How to use"}),`
`,n.jsx(t.p,{children:"To use the tabbar component import it like that:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { TabBar } from "@axa-fr/canopee-react/client";

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
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { TabBar } from "@axa-fr/canopee-react/client";

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
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { TabBar, tabBarDirection } from "@axa-fr/canopee-react/client";

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
`,n.jsx(o,{of:i}),`
`,n.jsx(a,{of:i})]})}function w(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{w as default};
