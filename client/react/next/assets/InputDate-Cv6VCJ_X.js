import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import"./index-C6rI65b-.js";import{I as o,a as i}from"./InputDate.stories-B5-K4bsW.js";import{M as a,C as p,a as c}from"./index-DngLLpZs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-CJZSnK8w.js";import"./iframe-BlcEP9VK.js";import"./DocsRenderer-CFRXHY34-BIxeq_PG.js";import"./react-18-C_RNIbSA.js";import"./ListLF-BJzeRucZ.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"InputDate"}),`
`,e.jsx(t.h1,{id:"inputdate",children:"InputDate"}),`
`,e.jsx(t.p,{children:"To use the InputDate import it like that:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { InputDate } from "@axa-fr/canopee-react/client";

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
`,e.jsx(c,{of:i})]})}function v(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{v as default};
