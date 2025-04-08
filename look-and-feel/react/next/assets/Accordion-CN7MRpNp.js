import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BJaai1kI.js";import{M as d,C as t,a as i}from"./index-B7pNX55G.js";import{A as l,a as r,b as s}from"./Accordion.stories-D5Fdsg6F.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-4Cv3lf4P.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DividerLF-CKvozoVK.js";import"./constants-BHfsqxkM.js";import"./AccordionCore-jmrqb9-t.js";import"./useIsSmallScreen-B3lIGOTq.js";import"./Tag-B_-iBL-T.js";import"./Card-DRZHWU7W.js";import"./call-fill-Nx5D3UHq.js";function c(n){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Accordion"}),`
`,e.jsx(o.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(o.h2,{id:"import",children:"Import"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Accordion } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,e.jsx(o.h2,{id:"uses",children:"Uses"}),`
`,e.jsxs(o.p,{children:["You can force to open or close the accordion with the ",e.jsx(o.code,{children:"isOpen"})," prop. (if no ",e.jsx(o.code,{children:"onClick"})," prop is given, the component will use the ",e.jsx(o.code,{children:"isOpen"})," prop as a default value)"]}),`
`,e.jsxs(o.p,{children:["When the user clicks on the summary to open or close the accordion you can use the ",e.jsx(o.code,{children:"onClick"})," function prop to do something at that moment. (you will get the native event as ",e.jsx(o.code,{children:"onClick"})," parameter)"]}),`
`,e.jsxs(o.p,{children:["Two styles of this component are possible, you can use the boolean prop ",e.jsx(o.code,{children:"isTitleFirst"})," to see them. (default is ",e.jsx(o.code,{children:"true"}),")"]}),`
`,e.jsxs(o.p,{children:["You can change the ",e.jsx(o.code,{children:"className"})," or add a ",e.jsx(o.code,{children:"classModifier"})," if you want to custom the component."]}),`
`,e.jsxs(o.p,{children:["You can also add/change the props of the ",e.jsx(o.code,{children:"Tag"})," component inside of the ",e.jsx(o.code,{children:"Accordion"}),"."]}),`
`,e.jsx(o.h3,{id:"accordion-1",children:"Accordion"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export const AccordionComponent = () => (
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
`,e.jsx(t,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(o.h3,{id:"accordion-with-card",children:"Accordion with Card"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export const AccordionWithCardComponent = () => (
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
`,e.jsx(t,{of:s}),`
`,e.jsx(i,{of:s})]})}function T(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(c,{...n})}):c(n)}export{T as default};
