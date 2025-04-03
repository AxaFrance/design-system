import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BJaai1kI.js";import{M as a,C as o,a as c}from"./index-iHBxfcbg.js";import{T as m,a as s,b as d,c as p}from"./Tabs.stories-CI6MtfW3.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BQ2JjsQF.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DividerLF-CGkXvTAL.js";import"./constants-CfWbtzFy.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:m,name:"Tabs"}),`
`,t.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,t.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,t.jsx(n.p,{children:"To use the tabs component import it like that:"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { Tabs } from "@axa-fr/design-system-look-and-feel-react";
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
`,t.jsx(o,{of:s}),`
`,t.jsx(c,{of:s}),`
`,t.jsx(n.h2,{id:"tabs-with-left-direction",children:"Tabs with left direction"}),`
`,t.jsx(o,{of:d}),`
`,t.jsx(n.h2,{id:"content-with-reactnode",children:"Content with ReactNode"}),`
`,t.jsx(o,{of:p})]})}function y(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i(e)}export{y as default};
