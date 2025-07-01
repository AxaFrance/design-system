import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BJaai1kI.js";import{M as l,C as t,a as r}from"./index-CNZQxH3x.js";import{A as m,a as i,b as s,c}from"./AccordionCore.stories-ZyhoJYV3.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C2T7czDh.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DropdownCommon-NF_fOQWV.js";import"./constants-D6dHHZfR.js";import"./AccordionCore-BtQsztln.js";import"./getComponentClassName-BnzZem_Y.js";import"./Card-DwAsNEuw.js";function a(n){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:m,name:"AccordionCore"}),`
`,e.jsx(o.h1,{id:"accordioncore",children:"AccordionCore"}),`
`,e.jsx(o.h2,{id:"import",children:"Import"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { AccordionCore } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,e.jsx(o.h2,{id:"uses",children:"Uses"}),`
`,e.jsxs(o.p,{children:["You can force to open or close the accordion with the ",e.jsx(o.code,{children:"isOpen"})," prop. (if no ",e.jsx(o.code,{children:"onClick"})," prop is given, the component will use the ",e.jsx(o.code,{children:"isOpen"})," prop as a default value)"]}),`
`,e.jsxs(o.p,{children:["When the user clicks on the summary to open or close the accordion you can use the ",e.jsx(o.code,{children:"onClick"})," function prop to do something at that moment. (you will get the native event as ",e.jsx(o.code,{children:"onClick"})," parameter)"]}),`
`,e.jsxs(o.p,{children:["You can change the ",e.jsx(o.code,{children:"className"})," or add a ",e.jsx(o.code,{children:"classModifier"})," if you want to custom the component."]}),`
`,e.jsx(o.h3,{id:"accordioncore-1",children:"AccordionCore"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export const AccordionCoreComponent = () => (
  <AccordionCore title="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionCore>
);
`})}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(o.h3,{id:"accordioncore-with-custom-styled-title",children:"AccordionCore with custom styled title"}),`
`,e.jsx(o.p,{children:"With that example you can see the surface that you can style in the title part. (you can also override the AccordionCore style to remove the gap between the title and the arrow to style more width)"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export const AccordionCoreWithCustomStyledTitleComponent = () => (
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
`,e.jsx(t,{of:s}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(o.h3,{id:"accordioncore-with-card",children:"AccordionCore with Card"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export const AccordionCoreWithCardComponent = () => (
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
`,e.jsx(t,{of:c}),`
`,e.jsx(r,{of:c})]})}function S(n={}){const{wrapper:o}={...d(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}export{S as default};
