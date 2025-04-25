import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as x}from"./index-BJaai1kI.js";import{M as l,C as o,a as i}from"./index-GyUru7kY.js";import{C as d,D as r,a as s,b as c,c as m}from"./ContentItemMono.stories-BhlqxIRQ.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-tCiYm4zj.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./HeadingLF-hpBGbsIi.js";import"./constants-DYFyjPA0.js";import"./Svg-DvPC_CAO.js";import"./List-BpUd1PP3.js";import"./Card-BshUJHa2.js";import"./ContentItemMono-xf9x8hA4.js";function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",pre:"pre",...x(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:d,name:"ContentItemMono"}),`
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
`,n.jsx(o,{of:s}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(t.h3,{id:"contentitemmono-with-stick",children:"ContentItemMono with stick"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`export const ContentListMonoComponent = () => (
  <ContentItemMono secondaryText="Texte secondaire" hasStick>
    Texte principal
  </ContentItemMono>
);
`})}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(i,{of:c}),`
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
`,n.jsx(o,{of:m}),`
`,n.jsx(i,{of:m})]})}function E(e={}){const{wrapper:t}={...x(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}export{E as default};
