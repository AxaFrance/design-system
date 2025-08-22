import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-G7nTXt62.js";import{M as d,C as i,a as o}from"./index-D9LNzAZb.js";import{T as h,M as l,D as a,a as r}from"./Tag.stories-BCuMxViK.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DfXypsGB.js";import"./index-CG6JzWRx.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";/* empty css              */import"./Loader-BUdWO9VK.js";function t(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(n.h2,{id:"tag",children:"Tag"}),`
`,e.jsx(n.h3,{id:"info",children:"Info"}),`
`,e.jsx(n.p,{children:"The Tag component is used to display a tag with a text or an icon. The component Badge was deprecated in favor of Tag."}),`
`,e.jsxs(n.p,{children:["You can use ",e.jsx(n.code,{children:"af-badge"})," but it will be replaced by ",e.jsx(n.code,{children:"af-tag"})," which takes precedence. ",e.jsx(n.code,{children:"af-badge"})," is deprecated and will be removed in the next major version."]}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tag } from "@axa-fr/design-system-slash-react";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SimpleTag = () => <Tag classModifier="success">Lorem ipsum</Tag>;
`})}),`
`,e.jsx(n.h3,{id:"with-icon",children:"With Icon"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const WithIconTag = () => (
  <Tag classModifier="error">
    <i className="glyphicon glyphicon-bell" />
  </Tag>
);
`})}),`
`,e.jsx(n.h2,{id:"tag-with-modifiers",children:"Tag with modifiers"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"sample-tag",children:"Sample Tag"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"tag-with-icon",children:"Tag with icon"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(o,{of:r})]})}function D(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{D as default};
