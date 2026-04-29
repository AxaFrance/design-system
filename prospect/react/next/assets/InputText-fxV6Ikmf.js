import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-D3yXdDgY.js";import"./index-Cu37pCit.js";import{I as i,a as o,b as p}from"./InputText.stories-_R491-oK.js";import{M as m,C as r,a as l}from"./index-CVOHRZjA.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BB5CyO6v.js";import"./iframe-CU7JFh_d.js";import"./DocsRenderer-CFRXHY34-D8SptEJ_.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./LoaderApollo-BnhFZ_5x.js";import"./index-BjCk13Vd.js";/* empty css               */import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(m,{of:i,name:"InputText"}),`
`,n.jsx(e.h1,{id:"inputtext",children:"InputText"}),`
`,n.jsx(e.p,{children:"To use the InputText import it like that:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { InputText } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <>
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
  </>
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
`,n.jsx(r,{of:p})]})}function v(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{v as default};
