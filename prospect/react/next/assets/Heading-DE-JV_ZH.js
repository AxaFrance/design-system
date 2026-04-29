import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-D3yXdDgY.js";import"./index-nkQJgN1y.js";import{H as a,P as t,I as c}from"./Heading.stories-Dh7OA5GL.js";import{M as d,C as i,a as p}from"./index-D5npZezI.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-Bog_Xr1w.js";import"./iframe-Di2GpNPw.js";import"./DocsRenderer-CFRXHY34-CLspAd3I.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./LoaderApollo-DcYYkGhI.js";import"./index-BjCk13Vd.js";/* empty css               */import"./account_balance-B8UiBJSK.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a,name:"Heading"}),`
`,n.jsx(e.h1,{id:"heading",children:"Heading"}),`
`,n.jsx(e.p,{children:"To use the heading import it like that:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Heading } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <>
    <Heading>Heading</Heading>
    <Heading firstSubtitle="Subtitle" level={3}>
      Heading
    </Heading>
  </>
);
`})}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsxs(e.p,{children:["The heading accepts all icon props (the ",n.jsx(e.code,{children:"iconProps"})," props key) except for the ",n.jsx(e.code,{children:"src"})," and all tag props (the ",n.jsx(e.code,{children:"tagProps"})," props key) except for the ",n.jsx(e.code,{children:"children"}),"."]}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(p,{of:t}),`
`,n.jsx(e.h2,{id:"icon-on-top",children:"Icon on top"}),`
`,n.jsxs(e.p,{children:["Set ",n.jsx(e.code,{children:'iconPosition="top"'})," to stack the icon above the title instead of aligning it to the start. Default is ",n.jsx(e.code,{children:'"start"'}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Heading icon={bank} iconPosition="top">
  Titre de la page
</Heading>
`})}),`
`,n.jsx(i,{of:c})]})}function v(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{v as default};
