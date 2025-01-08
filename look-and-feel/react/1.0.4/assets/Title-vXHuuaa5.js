import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as c}from"./index-FeUjBnvO.js";import{ae as p,af as o,ag as n}from"./index-DpqKoUO0.js";import{T as m,a as r,b as s,c as l}from"./Title.stories-BBb1Fuow.js";import"./index-uubelm5h.js";import"./iframe-DKPei0sB.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./article-fill-B_-J39Ry.js";import"./Title-BfgsK-DC.js";/* empty css               */import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-k29qJE5v.js";import"./error-BHKM2E7q.js";import"./Svg-CUaNRA4q.js";import"./Button-BjcwjKsb.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-C_sWxrJ4.js";import"./check_box_outline_blank-C3eXZyiA.js";import"./CheckboxSelect-POhRhbxH.js";import"./Loader-Demby5uR.js";import"./Radio-Dr4VedCr.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-CNP8Ih8u.js";import"./RadioSelect-DCZA--Gb.js";import"./Select-DMz3sUqq.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-C8dAt6XO.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-2zi3iYT3.js";import"./arrow_back-DnyUknY1.js";import"./Link-CnMWJ9ii.js";import"./close-DqeJ9fK5.js";import"./Modal-DMFJEU_j.js";import"./Pagination-BC_blc0d.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";import"./DebugGrid-Cic2SHJb.js";function a(i){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...c(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:m}),`
`,t.jsx(e.h2,{id:"title",children:"Title"}),`
`,t.jsx(e.h3,{id:"use-of-title",children:"Use of Title"}),`
`,t.jsx(e.h4,{id:"title-basic",children:"Title Basic"}),`
`,t.jsxs(e.p,{children:["The basic title use ",t.jsx(e.code,{children:"<h1>"})," tag (default value of size is ",t.jsx(e.code,{children:"<TitleSize.XL"}),")"]}),`
`,t.jsxs(e.p,{children:["When you set the size to ",t.jsx(e.code,{children:"<TitleSize.L"}),", this use the ",t.jsx(e.code,{children:"<h2>"})," tag by default."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-look-and-feel-react";

export const TitleBasic = () => <Title>Titre de la page</Title>;
`})}),`
`,t.jsx(o,{of:r}),`
`,t.jsx(n,{of:r}),`
`,t.jsxs(e.p,{children:["If you want to set another level heading tag, you can use the ",t.jsx(e.strong,{children:"level"})," property :"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-look-and-feel-react";

export const TitleH3 = () => (
  <Title level={3}>Titre de la page with h3 tag</Title>
);
`})}),`
`,t.jsx(e.h4,{id:"title-with-icon",children:"Title with icon"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-look-and-feel-react";

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
`,t.jsx(o,{of:s}),`
`,t.jsx(n,{of:s}),`
`,t.jsx(e.h4,{id:"title-without-icon",children:"Title without icon"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-look-and-feel-react";

export const TitleWithIcon = () => (
  <Title firstSubtitle="Sous-titre 1" secondSubtitle="Sous-titre 2">
    Titre de la page
  </Title>
);
`})}),`
`,t.jsx(o,{of:l}),`
`,t.jsx(n,{of:l})]})}function nt(i={}){const{wrapper:e}={...c(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(a,{...i})}):a(i)}export{nt as default};
