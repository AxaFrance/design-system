import{j as n}from"./index-C-iqcyhV.js";import{useMDXComponents as c}from"./index-DSfWgH82.js";import{M as i,C as o,a as t}from"./index-Dj85IAwr.js";import{C as l,D as a,B as s}from"./Card.stories-CxuOzbU4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-D4qeMBF5.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./FieldsetApollo-hGX-QcyY.js";import"./CardCommon-D_CvEzvh.js";function d(r){const e={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:l,name:"Card"}),`
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
`,n.jsx(t,{of:s})]})}function k(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{k as default};
