import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-DSfWgH82.js";import{M as h,C as e,a as r}from"./index-CCeqW_p3.js";import{C as u,D as i,V as a,H as s,a as c}from"./Card.stories-BzBJHRkv.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Be4JZYIA.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CardData-CAT2AYPU.js";import"./index-VGPHIPc6.js";import"./villa-BhFUGjo6.js";function d(o){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:u}),`
`,t.jsx(n.h2,{id:"card",children:"Card"}),`
`,t.jsx(n.h3,{id:"import",children:"Import"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { Card } from "@axa-fr/design-system-slash-react";
`})}),`
`,t.jsx(n.h3,{id:"use",children:"Use"}),`
`,t.jsx(n.h4,{id:"card-button-default",children:"Card Button Default"}),`
`,t.jsx(e,{of:i}),`
`,t.jsx(r,{of:i}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";

const MyCard = () => (
  <Card id="id" onClick={() => action()} iconSrc={villaIcon}>
    Contenu
  </Card>
);
`})}),`
`,t.jsxs(n.p,{children:["You can use the property ",t.jsx(n.code,{children:"error"})," if you want to put the icon and the text in red. This is a boolean property, with ",t.jsx(n.code,{children:"false"})," as default value."]}),`
`,t.jsxs(n.p,{children:["You can use the property ",t.jsx(n.code,{children:"active"})," if you want to put the icon and the text in white and the background in blue (selected state). This is a boolean property, with ",t.jsx(n.code,{children:"false"})," as default value."]}),`
`,t.jsx(n.h4,{id:"card-button-vertical-without-icon",children:"Card Button vertical without icon"}),`
`,t.jsx(e,{of:a}),`
`,t.jsx(r,{of:a}),`
`,t.jsx(n.h4,{id:"card-button-horizontal",children:"Card Button horizontal"}),`
`,t.jsx(e,{of:s}),`
`,t.jsx(r,{of:s}),`
`,t.jsx(n.h4,{id:"card-button-horizontal-without-icon",children:"Card Button horizontal without icon"}),`
`,t.jsx(e,{of:c}),`
`,t.jsx(r,{of:c})]})}function I(o={}){const{wrapper:n}={...l(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(d,{...o})}):d(o)}export{I as default};
