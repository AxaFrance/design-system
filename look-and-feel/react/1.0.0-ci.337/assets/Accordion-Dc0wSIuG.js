import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as a}from"./index-FeUjBnvO.js";import{ae as d,af as t,ag as i}from"./index-Cb73D1Ps.js";import{A as m,a as r,b as s}from"./Accordion.stories-B1qPp85y.js";import"./index-uubelm5h.js";import"./iframe-D-IgPWKx.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./Title-5HvLqByk.js";/* empty css               */import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-yYw8AEPN.js";import"./error-BHKM2E7q.js";import"./Svg-C4poEASt.js";import"./Button-GV2C7V7f.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-B4MiBKMF.js";import"./check_box_outline_blank-BvMHvB9Z.js";import"./CheckboxSelect-Dq6IwaT4.js";import"./Loader-DTzMALSS.js";import"./Radio-CYDN5Meu.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-BsZAaKA6.js";import"./RadioSelect-CY_JYun0.js";import"./Select-DPf08Y0e.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-Bbkzdz5M.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-D5jlWA8o.js";import"./arrow_back-DnyUknY1.js";import"./Link-BQTbBxg2.js";import"./close-DqeJ9fK5.js";import"./Modal-CD3ho01h.js";import"./Pagination-R-Zl63vI.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:m,name:"Accordion"}),`
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
`,o.jsx(i,{of:s})]})}function eo(n={}){const{wrapper:e}={...a(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(c,{...n})}):c(n)}export{eo as default};
