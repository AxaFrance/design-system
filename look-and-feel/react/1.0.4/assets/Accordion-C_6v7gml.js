import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as a}from"./index-FeUjBnvO.js";import{ae as d,af as t,ag as i}from"./index-DpqKoUO0.js";import{A as m,a as r,b as s}from"./Accordion.stories-CUH9xmDl.js";import"./index-uubelm5h.js";import"./iframe-DKPei0sB.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./call-fill-Nx5D3UHq.js";import"./Title-BfgsK-DC.js";/* empty css               */import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-k29qJE5v.js";import"./error-BHKM2E7q.js";import"./Svg-CUaNRA4q.js";import"./Button-BjcwjKsb.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-C_sWxrJ4.js";import"./check_box_outline_blank-C3eXZyiA.js";import"./CheckboxSelect-POhRhbxH.js";import"./Loader-Demby5uR.js";import"./Radio-Dr4VedCr.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-CNP8Ih8u.js";import"./RadioSelect-DCZA--Gb.js";import"./Select-DMz3sUqq.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-C8dAt6XO.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-2zi3iYT3.js";import"./arrow_back-DnyUknY1.js";import"./Link-CnMWJ9ii.js";import"./close-DqeJ9fK5.js";import"./Modal-DMFJEU_j.js";import"./Pagination-BC_blc0d.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";import"./DebugGrid-Cic2SHJb.js";function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:m,name:"Accordion"}),`
`,o.jsx(e.h1,{id:"accordion",children:"Accordion"}),`
`,o.jsx(e.h2,{id:"import",children:"Import"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { Accordion } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,o.jsx(e.h2,{id:"uses",children:"Uses"}),`
`,o.jsxs(e.p,{children:["You can force to open or close the accordion with the ",o.jsx(e.code,{children:"isOpen"})," prop. (if no ",o.jsx(e.code,{children:"onClick"})," prop is given, the component will use the ",o.jsx(e.code,{children:"isOpen"})," prop as a default value)"]}),`
`,o.jsxs(e.p,{children:["When the user clicks on the summary to open or close the accordion you can use the ",o.jsx(e.code,{children:"onClick"})," function prop to do something at that moment. (you will get the native event as ",o.jsx(e.code,{children:"onClick"})," parameter)"]}),`
`,o.jsxs(e.p,{children:["Two styles of this component are possible, you can use the boolean prop ",o.jsx(e.code,{children:"isTitleFirst"})," to see them. (default is ",o.jsx(e.code,{children:"true"}),")"]}),`
`,o.jsxs(e.p,{children:["You can change the ",o.jsx(e.code,{children:"className"})," or add a ",o.jsx(e.code,{children:"classModifier"})," if you want to custom the component."]}),`
`,o.jsxs(e.p,{children:["You can also add/change the props of the ",o.jsx(e.code,{children:"Tag"})," component inside of the ",o.jsx(e.code,{children:"Accordion"}),"."]}),`
`,o.jsx(e.h3,{id:"accordion-1",children:"Accordion"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`export const AccordionComponent = () => (
  <Accordion
    icon={<Svg src={callIcon} />}
    title="Titre onglet"
    subtitle="Titre onglet"
    tag="En attente"
    date="01/01/2021"
    value="+ 686,00 €"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </Accordion>
);
`})}),`
`,o.jsx(t,{of:r}),`
`,o.jsx(i,{of:r}),`
`,o.jsx(e.h3,{id:"accordion-with-card",children:"Accordion with Card"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`export const AccordionWithCardComponent = () => (
  <Card classModifier="large accordion">
    <Accordion
      icon={<Svg src={callIcon} />}
      title="Titre onglet"
      subtitle="Titre onglet"
      tag="En attente"
      date="01/01/2021"
      value="+ 686,00 €"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna
      et tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget
      tortor nec massa lobortis bibendum. Morbi eget ligula porttitor, euismod
      odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis
      nisl.
    </Accordion>
  </Card>
);
`})}),`
`,o.jsx(t,{of:s}),`
`,o.jsx(i,{of:s})]})}function to(n={}){const{wrapper:e}={...a(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(c,{...n})}):c(n)}export{to as default};
