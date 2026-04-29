import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-D3yXdDgY.js";import"./index-C3C2XSlO.js";import{H as a,P as t,I as c}from"./Heading.stories-DYW_RZA9.js";import{M as p,C as i,a as d}from"./index-D9cCnVue.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-Drw4MI5R.js";import"./iframe-B1jPbWhO.js";import"./DocsRenderer-CFRXHY34-Bp5dF127.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./LoaderLF-DMgW7sdR.js";import"./LoaderCommon-Cyryc8cA.js";import"./index-BjCk13Vd.js";/* empty css               */import"./account_balance_wallet-fill-DXqnmHYk.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a,name:"Heading"}),`
`,e.jsx(n.h1,{id:"heading",children:"Heading"}),`
`,e.jsx(n.p,{children:"To use the heading import it like that:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Heading } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <>
    <Heading>Titre de la page</Heading>
    <Heading firstSubtitle="Sous titre" level={3}>
      Titre de la page
    </Heading>
  </>
);
`})}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsxs(n.p,{children:["The heading accepts all icon props (the ",e.jsx(n.code,{children:"iconProps"})," props key) except for the ",e.jsx(n.code,{children:"src"})," and all tag props (the ",e.jsx(n.code,{children:"tagProps"})," props key) except for the ",e.jsx(n.code,{children:"children"}),"."]}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h2,{id:"icon-on-top",children:"Icon on top"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:'iconPosition="top"'})," to stack the icon above the title instead of aligning it to the start. Default is ",e.jsx(n.code,{children:'"start"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Heading icon={bank} iconPosition="top">
  Titre de la page
</Heading>
`})}),`
`,e.jsx(i,{of:c})]})}function I(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{I as default};
