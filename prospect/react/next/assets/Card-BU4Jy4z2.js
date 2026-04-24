import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-D3yXdDgY.js";import{M as c,C as o,a as t}from"./index-lqoFSYgB.js";import{C as l,D as a,B as s}from"./Card.stories-C-jy3odh.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BR-eN-kk.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./LoaderApollo-BigFYKXL.js";/* empty css               */import"./CardCommon-vm0N6gbM.js";function d(r){const e={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l,name:"Card"}),`
`,n.jsx(e.h1,{id:"card",children:"Card"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Card"})," component is a simple wrapper that adds an ",n.jsx(e.strong,{children:"padding and a border"}),".",n.jsx(e.br,{}),`
`,"You can define the semantics you want using the ",n.jsx(e.code,{children:"as"})," property."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Unlike the previous version of the Look&Feel package, this component does not have a ",n.jsx(e.code,{children:"classModifier"}),` property.
You can still redefine the value of the `,n.jsx(e.code,{children:"className"})," property if needed.*"]}),`
`]}),`
`,n.jsx(e.h3,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Card, Heading } from "@axa-fr/canopee-react/client";
`})}),`
`,n.jsx(e.h3,{id:"use",children:"Use"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const CardComponent = () => (
  <Card>
    <Heading level={1} className="af-card__title">
      My card title
    </Heading>
    <p>My card content</p>
  </Card>
);
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const CardComponent = () => (
  <Card as="button" onClick={handleClick}>
    <Heading level={1} className="af-card__title">
      My card title
    </Heading>
    <p>My card content</p>
  </Card>
);
`})}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(e.h3,{id:"basic-content",children:"Basic content"}),`
`,n.jsx(o,{of:a}),`
`,n.jsx(t,{of:a}),`
`,n.jsx(e.h3,{id:"button-card",children:"Button card"}),`
`,n.jsx(o,{of:s}),`
`,n.jsx(t,{of:s})]})}function N(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{N as default};
