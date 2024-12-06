import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as d}from"./index-FeUjBnvO.js";import{ae as m,af as r,ag as i}from"./index-76RxyfIK.js";import{A as l,a as n,b as s,c}from"./AccordionCore.stories-0BZBmsqV.js";import"./index-uubelm5h.js";import"./iframe-DZQkH6iP.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./Title-CkInkqf4.js";/* empty css               */import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-yYw8AEPN.js";import"./error-BHKM2E7q.js";import"./Svg-C4poEASt.js";import"./Button-GV2C7V7f.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-DPn8M_Uc.js";import"./check_box_outline_blank-caNJpyLE.js";import"./CheckboxSelect-FCKGgETg.js";import"./Loader-DTzMALSS.js";import"./Radio-CYDN5Meu.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-BsZAaKA6.js";import"./RadioSelect-CY_JYun0.js";import"./Select-DPf08Y0e.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-Bbkzdz5M.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-D5jlWA8o.js";import"./arrow_back-DnyUknY1.js";import"./Link-BQTbBxg2.js";import"./close-DqeJ9fK5.js";import"./Modal-CD3ho01h.js";import"./Pagination-R-Zl63vI.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";import"./Skeleton-_BHz5ywW.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:l,name:"AccordionCore"}),`
`,o.jsx(e.h1,{id:"accordioncore",children:"AccordionCore"}),`
`,o.jsx(e.h2,{id:"import",children:"Import"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { AccordionCore } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,o.jsx(e.h2,{id:"uses",children:"Uses"}),`
`,o.jsxs(e.p,{children:["You can force to open or close the accordion with the ",o.jsx(e.code,{children:"isOpen"})," prop. (if no ",o.jsx(e.code,{children:"onClick"})," prop is given, the component will use the ",o.jsx(e.code,{children:"isOpen"})," prop as a default value)"]}),`
`,o.jsxs(e.p,{children:["When the user clicks on the summary to open or close the accordion you can use the ",o.jsx(e.code,{children:"onClick"})," function prop to do something at that moment. (you will get the native event as ",o.jsx(e.code,{children:"onClick"})," parameter)"]}),`
`,o.jsxs(e.p,{children:["You can change the ",o.jsx(e.code,{children:"className"})," or add a ",o.jsx(e.code,{children:"classModifier"})," if you want to custom the component."]}),`
`,o.jsx(e.h3,{id:"accordioncore-1",children:"AccordionCore"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`export const AccordionCoreComponent = () => (
  <AccordionCore title="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionCore>
);
`})}),`
`,o.jsx(r,{of:n}),`
`,o.jsx(i,{of:n}),`
`,o.jsx(e.h3,{id:"accordioncore-with-custom-styled-title",children:"AccordionCore with custom styled title"}),`
`,o.jsx(e.p,{children:"With that example you can see the surface that you can style in the title part. (you can also override the AccordionCore style to remove the gap between the title and the arrow to style more width)"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`export const AccordionCoreWithCustomStyledTitleComponent = () => (
  <AccordionCore
    title=(
      <div
        style={{
          backgroundColor: "red",
          paddingBottom: "32px",
        }}
      />)
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionCore>
);
`})}),`
`,o.jsx(r,{of:s}),`
`,o.jsx(i,{of:s}),`
`,o.jsx(e.h3,{id:"accordioncore-with-card",children:"AccordionCore with Card"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`export const AccordionCoreWithCardComponent = () => (
  <Card classModifier="large accordion">
    <AccordionCore title="Titre onglet">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna
      et tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget
      tortor nec massa lobortis bibendum. Morbi eget ligula porttitor, euismod
      odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis
      nisl.
    </AccordionCore>
  </Card>
);
`})}),`
`,o.jsx(r,{of:c}),`
`,o.jsx(i,{of:c})]})}function to(t={}){const{wrapper:e}={...d(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(a,{...t})}):a(t)}export{to as default};
