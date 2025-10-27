import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as a}from"./index-DSfWgH82.js";import{M as d,C as n,a as s}from"./index-D0luk2Dq.js";import{T as h,a as o,b as r,c as l}from"./Title.stories-Cs1wGZD5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-D85iZmE8.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./TimelineVerticalLF-BZCfRUvo.js";import"./ProgressBarCommon-Cz9LA5Bv.js";import"./constants-PUNMfwC1.js";import"./visibility-fill-CUq5Rz3Z.js";import"./Title-CjwVGDWp.js";import"./IconBg-CgXi6YCA.js";import"./article-fill-B_-J39Ry.js";function c(i){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(t.h2,{id:"title",children:"Title"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Warning:"})," This component is deprecated. Please use ",e.jsx(t.code,{children:"Heading"})," instead."]}),`
`]}),`
`,e.jsx(t.h3,{id:"use-of-title",children:"Use of Title"}),`
`,e.jsx(t.h4,{id:"title-basic",children:"Title Basic"}),`
`,e.jsxs(t.p,{children:["The basic title use ",e.jsx(t.code,{children:"<h1>"})," tag (default value of size is ",e.jsx(t.code,{children:"<TitleSize.XL"}),")"]}),`
`,e.jsxs(t.p,{children:["When you set the size to ",e.jsx(t.code,{children:"<TitleSize.L"}),", this use the ",e.jsx(t.code,{children:"<h2>"})," tag by default."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-look-and-feel-react";

export const TitleBasic = () => <Title>Titre de la page</Title>;
`})}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(s,{of:o}),`
`,e.jsxs(t.p,{children:["If you want to set another level heading tag, you can use the ",e.jsx(t.strong,{children:"level"})," property :"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-look-and-feel-react";

export const TitleH3 = () => (
  <Title level={3}>Titre de la page with h3 tag</Title>
);
`})}),`
`,e.jsx(t.h4,{id:"title-with-icon",children:"Title with icon"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-look-and-feel-react";

export const TitleWithIcon = () => (
  <Title
    firstSubtitle="Sous-titre 1"
    secondSubtitle="Sous-titre 2"
    icon={<Svg src={article} />}
  >
    Titre de la page
  </Title>
);
`})}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(t.h4,{id:"title-without-icon",children:"Title without icon"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-look-and-feel-react";

export const TitleWithIcon = () => (
  <Title firstSubtitle="Sous-titre 1" secondSubtitle="Sous-titre 2">
    Titre de la page
  </Title>
);
`})}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(s,{of:l})]})}function I(i={}){const{wrapper:t}={...a(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(c,{...i})}):c(i)}export{I as default};
