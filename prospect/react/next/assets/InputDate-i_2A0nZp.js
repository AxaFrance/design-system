import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-D3yXdDgY.js";import"./index-zZI8Y4Za.js";import{I as o,a as s,b as p}from"./InputDate.stories-C31c1tkG.js";import{M as c,C as i,a as l}from"./index-gfoxoP03.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-B9K5X0Vj.js";import"./iframe-B5LcDlnk.js";import"./DocsRenderer-CFRXHY34-B3sVNO9t.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./LoaderApollo-w4L0wNwU.js";import"./index-BjCk13Vd.js";/* empty css               */import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o,name:"InputDate"}),`
`,e.jsx(n.h1,{id:"inputdate",children:"InputDate"}),`
`,e.jsx(n.p,{children:"To use the InputDate import it like that:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { InputDate } from "@axa-fr/canopee-react/prospect";

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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"(Important) Note:"})," the ",e.jsx(n.code,{children:"hidePicker={true}"}),` prop both visually hides and functionnaly disables the date picker on browsers supporting WebKit without impacting accessibility.
For browsers `,e.jsx(n.em,{children:e.jsx(n.strong,{children:"not supporting WebKit"})})," (such as Firefox), the date picker ",e.jsx(n.em,{children:e.jsx(n.strong,{children:"is still visually visible"})})," but the functionnality is disabled (we use a JavaScript trick to achieve that). ",e.jsx(n.em,{children:e.jsx(n.strong,{children:"Be aware that there might be some accessibility issues"})})," (specifically with form submissions on Enter key press)."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h2,{id:"warning",children:"Warning"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"message"})," with ",e.jsx(n.code,{children:'messageType="warning"'})," to display a warning state with an orange border."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputDate
  label="Date de naissance"
  message="Titre du message"
  messageType="warning"
  value={new Date("2000-09-12")}
/>
`})}),`
`,e.jsx(i,{of:p})]})}function S(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{S as default};
