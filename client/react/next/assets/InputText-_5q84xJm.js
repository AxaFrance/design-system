import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-D3yXdDgY.js";import"./index--O5gABiX.js";import{I as s,a as o,b as p}from"./InputText.stories-wmmYvvhF.js";import{M as m,C as r,a as l}from"./index-_3DQXssf.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-D_nHgV4M.js";import"./iframe-BhUT-97Z.js";import"./DocsRenderer-CFRXHY34-BgCCJmre.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./LoaderLF-DMgW7sdR.js";import"./LoaderCommon-Cyryc8cA.js";import"./index-BjCk13Vd.js";/* empty css               */import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(m,{of:s,name:"InputText"}),`
`,n.jsx(e.h1,{id:"inputtext",children:"InputText"}),`
`,n.jsx(e.p,{children:"To use the InputText import it like that:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { InputText } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <InputText
    value="John Doe"
    label="Label"
    placeholder="Placeholder"
    helper="Informations complémentaires"
    name="name"
    id="nameid"
    required
    buttonLabel="my btn"
  />
);
`})}),`
`,n.jsx(e.h2,{id:"placeholder",children:"Placeholder"}),`
`,n.jsx(r,{of:o}),`
`,n.jsx(l,{of:o}),`
`,n.jsx(e.h2,{id:"warning",children:"Warning"}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"message"})," with ",n.jsx(e.code,{children:'messageType="warning"'})," to display a warning state with orange border and ⚠️ icon."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<InputText
  value="John Doe"
  label="Label"
  message="Warning Message"
  messageType="warning"
/>
`})}),`
`,n.jsx(r,{of:p})]})}function P(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{P as default};
