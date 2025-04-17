import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as x}from"./index-BJaai1kI.js";import{M as l,C as o,a as i}from"./index-Jze3YmTl.js";import{C as d,D as r,a as s,b as c,c as m}from"./ContentItemMono.stories-BspTYC1S.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Da-EwMVB.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./MessageLF-BBtJ4LfU.js";import"./constants-zb1GzTEX.js";import"./List-DDNNOW_7.js";import"./Card-CJ-QhHZN.js";import"./ContentItemMono-4MfhEaAA.js";function a(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",pre:"pre",...x(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:d,name:"ContentItemMono"}),`
`,n.jsx(e.h1,{id:"contentitemmono",children:"ContentItemMono"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#import",children:"Import"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#contentitemmono",children:"ContentItemMono"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#contentitemmono-with-icon",children:"ContentItemMono with icon"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#contentitemmono-with-stick",children:"ContentItemMono with stick"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#contentitemmono-list",children:"ContentItemMono List"})}),`
`]}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ContentItemMono } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,n.jsx(e.h2,{id:"uses",children:"Uses"}),`
`,n.jsx(e.h3,{id:"contentitemmono-1",children:"ContentItemMono"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const ContentListMonoComponent = () => (
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
`,n.jsx(e.h3,{id:"contentitemmono-with-icon",children:"ContentItemMono with icon"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const ContentListMonoComponent = () => (
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
`,n.jsx(o,{of:s}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(e.h3,{id:"contentitemmono-with-stick",children:"ContentItemMono with stick"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const ContentListMonoComponent = () => (
  <ContentItemMono secondaryText="Texte secondaire" hasStick>
    Texte principal
  </ContentItemMono>
);
`})}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(e.h3,{id:"contentitemmono-list",children:"ContentItemMono List"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const ContentItemMonoListComponent = () => (
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
`,n.jsx(o,{of:m}),`
`,n.jsx(i,{of:m})]})}function D(t={}){const{wrapper:e}={...x(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{D as default};
