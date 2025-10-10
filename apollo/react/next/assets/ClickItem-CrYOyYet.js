import{j as n}from"./index-C1mcBe1y.js";import{useMDXComponents as d}from"./index-G7nTXt62.js";import{M as h,C as i,a as o}from"./index-BgkGpeR5.js";import{C as p,a as s,b as a,c as l,d as r,e as c}from"./ClickItem.stories-DP0unDLs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-CF9flL7t.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./TimelineVerticalApollo-BkVTbh5b.js";import"./account_balance-fill-DEkYDUqy.js";function m(t){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{of:p,name:"ClickItem"}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ClickItem } from "@axa-fr/design-system-apollo-react";
import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

const MyComponent = () => (
  <>
    <ClickItem icon={callIcon} state="default" variant="small" title="Titre" />
  </>
);
`})}),`
`,n.jsx(e.h2,{id:"uses",children:"Uses"}),`
`,n.jsx(e.p,{children:"The Click Item component is an interactive element designed to trigger an action when selected. It can be used alone or integrated into lists, menus, or tables to enable fast and intuitive interactions."}),`
`,n.jsx(e.p,{children:"The component comes in four variants: large, medium, small, and agent and the entire element is clickable."}),`
`,n.jsxs(e.p,{children:["If it's used within a parent component that already handles click events (i.e., the parent itself has an ",n.jsx(e.code,{children:"onClick"})," handler), you ",n.jsxs(e.strong,{children:["shouldn't provide an ",n.jsx(e.code,{children:"onClick"})," function as a prop to this component"]}),`.
In such cases, the component will automatically behave as a `,n.jsx(e.strong,{children:"display-only element"}),", allowing the parent to manage all click interactions."]}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(o,{of:s}),`
`,n.jsx(e.h2,{id:"clickitem-variants",children:"ClickItem Variants"}),`
`,n.jsx(e.h3,{id:"large",children:"Large"}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(o,{of:a}),`
`,n.jsx(e.h3,{id:"medium",children:"Medium"}),`
`,n.jsx(i,{of:l}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.h3,{id:"small",children:"Small"}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(o,{of:r}),`
`,n.jsx(e.h3,{id:"agent",children:"Agent"}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(o,{of:c})]})}function D(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(m,{...t})}):m(t)}export{D as default};
