import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-G7nTXt62.js";import{M as s,C as n,A as d}from"./index-DwbxShAS.js";import{C as c,a as h,b as o,c as l}from"./CardData.stories-C3rPCHhJ.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-1Xyl9_bu.js";import"./index-CG6JzWRx.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";/* empty css               */import"./CardData-LgXDUIZL.js";import"./Divider-BFhC3nf-.js";function a(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(t.h1,{id:"carddata",children:"CardData"}),`
`,e.jsxs(t.p,{children:["The component ",e.jsx(t.code,{children:"CardData"})," is used to display a card with a title, an icon, and content. It can also include a subtitle and additional content on the right side of the header."]}),`
`,e.jsx(t.h2,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { CardData } from "@axa-fr/design-system-slash-react";
`})}),`
`,e.jsx(t.h2,{id:"utilisation",children:"Utilisation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import Svg from "@/assets/ton_svg.svg";

export const Component = () => (
  <CardData title="Titre de la carte" icon={Svg}>
    <p>Contenu de la carte</p>
  </CardData>
);
`})}),`
`,e.jsx(t.h3,{id:"carddata-1",children:"CardData"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h3,{id:"carddata-with-subtitle",children:"CardData with subTitle"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(t.h3,{id:"carddata-with-contentright",children:"CardData with contentRight"}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t.h2,{id:"arguments",children:"Arguments"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"title"})," property corresponds to the main title of the card."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"subTitle"})," property allows you to add a subtitle just below the title."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"description"})," property allows you to add a description below the title and subtitle."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"icon"})," property allows you to specify the icon to display. You can put the string value of the svg."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"contentFitAllSize"})," property allows you to specify whether the content should take up all available space and have no margin around it. By default, this property is set to ",e.jsx(t.code,{children:"false"}),"."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"variant"})," property allows you to change the background color of the icon. Variants are ",e.jsx(t.code,{children:"error"}),", ",e.jsx(t.code,{children:"warning"}),", ",e.jsx(t.code,{children:"information"}),", ",e.jsx(t.code,{children:"success"}),", ",e.jsx(t.code,{children:"default"}),", ",e.jsx(t.code,{children:"dark"}),", ",e.jsx(t.code,{children:"gray"}),", and ",e.jsx(t.code,{children:"purple"}),"."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"contentRight"})," property allows you to add content to the right of the header."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"withDivider"})," property allows you to add a divider below the header. By default, this property is set to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsx(d,{story:o})]})}function M(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{M as default};
