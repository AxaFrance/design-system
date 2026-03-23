import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import"./index-Q4s7pUpp.js";import{I as o,a as i}from"./InputDate.stories-BDyzd4WF.js";import{M as a,C as p,a as c}from"./index-zNUjFu_s.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-D9Rmy6J_.js";import"./iframe-D4QtDAAY.js";import"./DocsRenderer-CFRXHY34-BT2DuH8x.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./ExitLayoutApollo-BN7lIbV9.js";import"./index-63p0MazF.js";/* empty css               */import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"InputDate"}),`
`,e.jsx(t.h1,{id:"inputdate",children:"InputDate"}),`
`,e.jsx(t.p,{children:"To use the InputDate import it like that:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { InputDate } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <>
    <InputDate
      moreButtonLabel="En savoir plus"
      description="Description"
      helper="Informations complémentaires"
      id="uniqueId"
      label="Date de naissance"
      message=""
      name="birthDate"
      onChange={() => {}}
      hidePicker={false}
      required
    />
  </>
);
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"(Important) Note:"})," the ",e.jsx(t.code,{children:"hidePicker={true}"}),` prop both visually hides and functionnaly disables the date picker on browsers supporting WebKit without impacting accessibility.
For browsers `,e.jsx(t.em,{children:e.jsx(t.strong,{children:"not supporting WebKit"})})," (such as Firefox), the date picker ",e.jsx(t.em,{children:e.jsx(t.strong,{children:"is still visually visible"})})," but the functionnality is disabled (we use a JavaScript trick to achieve that). ",e.jsx(t.em,{children:e.jsx(t.strong,{children:"Be aware that there might be some accessibility issues"})})," (specifically with form submissions on Enter key press)."]}),`
`,e.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(p,{of:i}),`
`,e.jsx(c,{of:i})]})}function M(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{M as default};
