import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BJaai1kI.js";import{M as d,C as n,a as s}from"./index-BEmDlrhg.js";import{T as h,a as o,b as r,c as l}from"./Title.stories-BB5DlPr0.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BWPf5dMU.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ToggleCommon-CYdO7kJC.js";import"./constants-CfTcsyJm.js";import"./Title-CKGSGquH.js";import"./IconBg-vwlz7vCI.js";import"./article-fill-B_-J39Ry.js";function a(i){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(t.h2,{id:"title",children:"Title"}),`
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
`,e.jsx(s,{of:l})]})}function I(i={}){const{wrapper:t}={...c(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(a,{...i})}):a(i)}export{I as default};
