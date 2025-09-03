import{j as e}from"./index-C1mcBe1y.js";import{useMDXComponents as m}from"./index-G7nTXt62.js";import{M as d,C as o,a as i}from"./index-CwfQGcsQ.js";import{C as h,a as s,b as a,c as r,d as l}from"./ClickItem.stories-DYvLi-xq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-CWBkmzEu.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./ToggleCommon-DUfTbsFe.js";import"./account_balance_wallet-fill-CxVPeUxa.js";function c(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h,name:"ClickItem"}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ClickItem } from "@axa-fr/design-system-apollo-react/lf";
import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

const MyComponent = () => (
  <>
    <ClickItem icon={callIcon} state="default" variant="small" title="Titre" />
  </>
);
`})}),`
`,e.jsx(n.h3,{id:"uses",children:"Uses"}),`
`,e.jsx(n.p,{children:"The Click Item component is an interactive element designed to trigger an action when selected. It can be used alone or integrated into lists, menus, or tables to enable fast and intuitive interactions."}),`
`,e.jsx(n.p,{children:"The component comes in four variants: large, medium, small, and agent. The entire element is clickable."}),`
`,e.jsxs(n.p,{children:["If it's used within a parent component that already handles click events (i.e., the parent itself has an ",e.jsx(n.code,{children:"onClick"})," handler), you ",e.jsxs(n.strong,{children:["shouldn't provide an ",e.jsx(n.code,{children:"onClick"})," function as a prop to this component"]}),`.
In such cases, the component will automatically behave as a `,e.jsx(n.strong,{children:"display-only element"}),", allowing the parent to manage all click interactions."]}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h3,{id:"agent",children:"Agent"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(i,{of:l})]})}function w(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{w as default};
