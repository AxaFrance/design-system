import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as a}from"./index-DSfWgH82.js";import{M as d,C as i,a as s}from"./index-CR80s0xv.js";import{T as h,a as o,b as r,c as l}from"./Title.stories-jDiLJ7NT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-T6Fun0ki.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Skeleton-BVKE6ZZK.js";import"./TimelineVerticalLF-DlSV4Enj.js";import"./Title-DqbWcfGP.js";import"./IconBg-Nu5JkC3X.js";import"./article-fill-B_-J39Ry.js";function c(n){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
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
`,e.jsx(i,{of:o}),`
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
`,e.jsx(i,{of:r}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(t.h4,{id:"title-without-icon",children:"Title without icon"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-look-and-feel-react";

export const TitleWithIcon = () => (
  <Title firstSubtitle="Sous-titre 1" secondSubtitle="Sous-titre 2">
    Titre de la page
  </Title>
);
`})}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(s,{of:l})]})}function M(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}export{M as default};
