import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-G7nTXt62.js";import{M as h,C as e,a as r}from"./index-inFIbY5J.js";import{C as u,D as i,V as a,H as s,a as c}from"./Card.stories-wmdU6LJQ.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-qokhP2PY.js";import"./index-CG6JzWRx.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";/* empty css               */import"./CardData-Eef1XmUi.js";import"./index-28pPPJTf.js";import"./villa-BhFUGjo6.js";function d(n){const o={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:u}),`
`,t.jsx(o.h2,{id:"card",children:"Card"}),`
`,t.jsx(o.h3,{id:"import",children:"Import"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { Card } from "@axa-fr/design-system-slash-react";
`})}),`
`,t.jsx(o.h3,{id:"use",children:"Use"}),`
`,t.jsx(o.h4,{id:"card-button-default",children:"Card Button Default"}),`
`,t.jsx(e,{of:i}),`
`,t.jsx(r,{of:i}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";

const MyCard = () => (
  <Card id="id" onClick={() => action()} iconSrc={villaIcon}>
    Contenu
  </Card>
);
`})}),`
`,t.jsxs(o.p,{children:["You can use the property ",t.jsx(o.code,{children:"error"})," if you want to put the icon and the text in red. This is a boolean property, with ",t.jsx(o.code,{children:"false"})," as default value."]}),`
`,t.jsxs(o.p,{children:["You can use the property ",t.jsx(o.code,{children:"active"})," if you want to put the icon and the text in white and the background in blue (selected state). This is a boolean property, with ",t.jsx(o.code,{children:"false"})," as default value."]}),`
`,t.jsx(o.h4,{id:"card-button-vertical-without-icon",children:"Card Button vertical without icon"}),`
`,t.jsx(e,{of:a}),`
`,t.jsx(r,{of:a}),`
`,t.jsx(o.h4,{id:"card-button-horizontal",children:"Card Button horizontal"}),`
`,t.jsx(e,{of:s}),`
`,t.jsx(r,{of:s}),`
`,t.jsx(o.h4,{id:"card-button-horizontal-without-icon",children:"Card Button horizontal without icon"}),`
`,t.jsx(e,{of:c}),`
`,t.jsx(r,{of:c})]})}function B(n={}){const{wrapper:o}={...l(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(d,{...n})}):d(n)}export{B as default};
