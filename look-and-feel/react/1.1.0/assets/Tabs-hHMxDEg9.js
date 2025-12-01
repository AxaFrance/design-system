import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as i}from"./index-DSfWgH82.js";import{M as a,C as o,a as c}from"./index-BBkeUU6B.js";import{T as m,a as s,b as d,c as l}from"./Tabs.stories-C94-SZ8m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-BOd-RakU.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Skeleton-CM5pNryo.js";import"./ClickIconApollo-dpo4GE3K.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m,name:"Tabs"}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:["Tabs component is ",e.jsx(n.strong,{children:"deprecated"})," and will be removed in the next major version. Please use the TabBar component instead."]}),`
`,e.jsxs(n.p,{children:["More info here : ",e.jsx(n.a,{href:"https://axafrance.github.io/design-system/apollo",rel:"nofollow",children:"Apollo documentation"})]}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(n.p,{children:"To use the tabs component import it like that:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tabs } from "@axa-fr/design-system-look-and-feel-react";
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
`,e.jsx(n.h2,{id:"tabs-with-left-direction",children:"Tabs with left direction"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"content-with-reactnode",children:"Content with ReactNode"}),`
`,e.jsx(o,{of:l})]})}function y(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{y as default};
