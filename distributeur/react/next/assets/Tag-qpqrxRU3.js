import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DSfWgH82.js";import{M as l,C as s,a as r}from"./index-BNcKkJy0.js";import{T as t,M as h,D as c,a as o}from"./Tag.stories-C2LkIyNe.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-pHUrhwar.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CardData-HcEAgEId.js";function d(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(n.h2,{id:"tag",children:"Tag"}),`
`,e.jsx(n.h3,{id:"info",children:"Info"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Tag"})," component is used to display a tag with a text or an icon. The component ",e.jsx(n.code,{children:"Badge"})," was deprecated in favor of ",e.jsx(n.code,{children:"Tag"}),"."]}),`
`,e.jsxs(n.p,{children:["You can use ",e.jsx(n.code,{children:"af-badge"})," but it will be replaced by ",e.jsx(n.code,{children:"af-tag"})," which takes precedence. ",e.jsx(n.code,{children:"af-badge"})," is deprecated and will be removed in the next major version."]}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tag } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SimpleTag = () => <Tag classModifier="success">Lorem ipsum</Tag>;
`})}),`
`,e.jsx(n.h3,{id:"with-icon",children:"With Icon"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const WithIconTag = () => (
  <Tag variant="error">
    <Svg src={iconBell} />3 errors
  </Tag>
);
`})}),`
`,e.jsx(n.h2,{id:"tag-with-modifiers",children:"Tag with modifiers"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Tag"})," component exists in the following variants:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"success"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"warning"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"info"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"error"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"black"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"purple"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"gray"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"white"})}),`
`]}),`
`,e.jsx(n.p,{children:"The white variant is designed to be used on dark backgrounds."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"sample-tag",children:"Sample Tag"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"tag-with-icon",children:"Tag with icon"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(r,{of:o})]})}function C(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{C as default};
