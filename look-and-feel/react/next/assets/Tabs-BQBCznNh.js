import{j as e}from"./index-C1mcBe1y.js";import{useMDXComponents as i}from"./index-G7nTXt62.js";import{M as a,C as o,a as c}from"./index-ChBUqMwK.js";import{T as m,a as s,b as d,c as l}from"./Tabs.stories-CiqI9WJ0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-D3xl6GhD.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./TimelineVerticalLF-9OIG-ar8.js";import"./ProgressBarCommon-_6RIV1Pi.js";import"./constants-B463cnah.js";import"./visibility-fill-CUq5Rz3Z.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m,name:"Tabs"}),`
`,e.jsx(t.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(t.p,{children:["Tabs component is ",e.jsx(t.strong,{children:"deprecated"})," and will be removed in the next major version. Please use the TabBar component instead."]}),`
`,e.jsxs(t.p,{children:["More info here : ",e.jsx(t.a,{href:"https://axafrance.github.io/design-system/apollo",rel:"nofollow",children:"Apollo documentation"})]}),`
`,e.jsx(t.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(t.p,{children:"To use the tabs component import it like that:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Tabs } from "@axa-fr/design-system-look-and-feel-react";
import accessTime from "@material-symbols/svg-400/outlined/schedule.svg";
import { Svg } from "../../Svg";

const MyComponent = () => (
  <Tabs
    items={[
      { title: "Tab 1", content: "Content 1" },
      { title: "Tab 2", content: "Content 2", icon: <Svg src={accessTime} /> },
      { title: "Tab 3", content: "Content 3" },
    ]}
    direction={Direction.center}
    preSelectedTabIndex={0}
  />
);
`})}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(t.h2,{id:"tabs-with-left-direction",children:"Tabs with left direction"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t.h2,{id:"content-with-reactnode",children:"Content with ReactNode"}),`
`,e.jsx(o,{of:l})]})}function S(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{S as default};
