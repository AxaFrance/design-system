import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as x}from"./index-FeUjBnvO.js";import{ae as p,af as o,ag as i}from"./index-DpqKoUO0.js";import{C as l,D as r,a as m,b as s,c}from"./ContentItemMono.stories-BuLQ2Qo2.js";import"./index-uubelm5h.js";import"./iframe-DKPei0sB.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./Svg-CUaNRA4q.js";import"./Title-BfgsK-DC.js";/* empty css               */import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-k29qJE5v.js";import"./error-BHKM2E7q.js";import"./Button-BjcwjKsb.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-C_sWxrJ4.js";import"./check_box_outline_blank-C3eXZyiA.js";import"./CheckboxSelect-POhRhbxH.js";import"./Loader-Demby5uR.js";import"./Radio-Dr4VedCr.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-CNP8Ih8u.js";import"./RadioSelect-DCZA--Gb.js";import"./Select-DMz3sUqq.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-C8dAt6XO.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-2zi3iYT3.js";import"./arrow_back-DnyUknY1.js";import"./Link-CnMWJ9ii.js";import"./close-DqeJ9fK5.js";import"./Modal-DMFJEU_j.js";import"./Pagination-BC_blc0d.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";import"./DebugGrid-Cic2SHJb.js";function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",pre:"pre",...x(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:l,name:"ContentItemMono"}),`
`,n.jsx(t.h1,{id:"contentitemmono",children:"ContentItemMono"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#import",children:"Import"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#contentitemmono",children:"ContentItemMono"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#contentitemmono-with-icon",children:"ContentItemMono with icon"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#contentitemmono-with-stick",children:"ContentItemMono with stick"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#contentitemmono-list",children:"ContentItemMono List"})}),`
`]}),`
`,n.jsx(t.h2,{id:"import",children:"Import"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { ContentItemMono } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,n.jsx(t.h2,{id:"uses",children:"Uses"}),`
`,n.jsx(t.h3,{id:"contentitemmono-1",children:"ContentItemMono"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`export const ContentListMonoComponent = () => (
  <ContentItemMono
    secondaryText="Texte secondaire"
    tertiaryText="Texte tertiaire"
  >
    Texte principal
  </ContentItemMono>
);
`})}),`
`,n.jsx(o,{of:r}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(t.h3,{id:"contentitemmono-with-icon",children:"ContentItemMono with icon"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`export const ContentListMonoComponent = () => (
  <ContentItemMono
    secondaryText="Texte secondaire"
    tertiaryText="Texte tertiaire"
    leftElement={<Svg src={arrowForward} />}
    isLeftElementCentered
  >
    Texte principal
  </ContentItemMono>
);
`})}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(t.h3,{id:"contentitemmono-with-stick",children:"ContentItemMono with stick"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`export const ContentListMonoComponent = () => (
  <ContentItemMono secondaryText="Texte secondaire" hasStick>
    Texte principal
  </ContentItemMono>
);
`})}),`
`,n.jsx(o,{of:s}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(t.h3,{id:"contentitemmono-list",children:"ContentItemMono List"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`export const ContentItemMonoListComponent = () => (
  <List>
    <ContentItemMono
      secondaryText="Texte secondaire"
      tertiaryText="Texte tertiaire"
    >
      Texte principal
    </ContentItemMono>
    <ContentItemMono
      secondaryText="Texte secondaire"
      tertiaryText="Texte tertiaire"
      leftElement={<Svg src={arrowForward} />}
      isLeftElementCentered
    >
      Texte principal
    </ContentItemMono>
    <ContentItemMono secondaryText="Texte secondaire" hasStick>
      Texte principal
    </ContentItemMono>
  </List>
);
`})}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(i,{of:c})]})}function rn(e={}){const{wrapper:t}={...x(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}export{rn as default};
