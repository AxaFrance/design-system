import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-D3yXdDgY.js";import"./index-BIQrBXmH.js";import{I as o,a as i}from"./InputDate.stories-B3cugHef.js";import{M as a,C as p,a as c}from"./index-JoW6yOSa.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BtQH_W9g.js";import"./iframe-BLBZciu3.js";import"./DocsRenderer-CFRXHY34-CTpWxNdL.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./LoaderLF-DYChe2bf.js";import"./LoaderCommon-BvsKcm5d.js";import"./index-BjCk13Vd.js";/* empty css               */import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"InputDate"}),`
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
`,e.jsx(c,{of:i})]})}function E(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{E as default};
