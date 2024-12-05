import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{ae as a,af as o,ag as c}from"./index-76RxyfIK.js";import{T as m,a as s,b as p,c as d}from"./Tabs.stories-CcjeDlS0.js";import"./index-uubelm5h.js";import"./iframe-DZQkH6iP.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./bluetooth_searching-BicIGu-i.js";import"./Tabs-uQNR_BBt.js";import"./index-vAxXS4R5.js";import"./Svg-C4poEASt.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:m,name:"Tabs"}),`
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
`,t.jsx(o,{of:p}),`
`,t.jsx(n.h2,{id:"content-with-reactnode",children:"Content with ReactNode"}),`
`,t.jsx(o,{of:d})]})}function N(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i(e)}export{N as default};
