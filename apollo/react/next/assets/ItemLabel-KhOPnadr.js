import{j as n}from"./index-C1mcBe1y.js";import{useMDXComponents as s}from"./index-G7nTXt62.js";import"./index-DyNSETmo.js";import{I as d,D as i,a as o}from"./ItemLabel.stories-DkWXSqfo.js";import{M as m,C as l,a}from"./index-C1Kh3o5z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./preview-Cqi5P814.js";import"./iframe-CJq1hblf.js";import"./DocsRenderer-CFRXHY34-C64kZU2T.js";import"./react-18-Cg43Tkb0.js";import"./TimelineVerticalApollo-C1uMluts.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(m,{of:d,name:"ItemLabel"}),`
`,n.jsx(e.h1,{id:"itemlabel",children:"ItemLabel"}),`
`,n.jsx(e.p,{children:"To use the ItemLabel import it like that:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ItemLabel } from "@axa-fr/design-system-apollo-react";

const MyComponent = () => (
  <ItemLabel
    label="Label Text"
    description="Description Text"
    required
    inputId="input-id"
    idLabel="label-id"
    sideButtonLabel="Side Button"
    onSideButtonClick={handleClickSideButton}
    buttonLabel="ButtonLabel"
    onButtonClick={handleClickButton}
  />
);
`})}),`
`,n.jsx(e.h2,{id:"default",children:"Default"}),`
`,n.jsx(l,{of:i}),`
`,n.jsx(a,{of:i}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ItemLabel } from "@axa-fr/design-system-apollo-react";

const MyComponent = () => (
  <ItemLabel
    label="Label Text"
    description={
      <>
        une description
        <br />
        sur 2 lignes
      </>
    }
    required
    inputId="input-id"
    idLabel="label-id"
    sideButtonLabel="Side Button"
    onSideButtonClick={handleClickSideButton}
    buttonLabel="ButtonLabel"
    onButtonClick={handleClickButton}
  />
);
`})}),`
`,n.jsx(e.h2,{id:"descriptionmultiline",children:"DescriptionMultiline"}),`
`,n.jsx(l,{of:o}),`
`,n.jsx(a,{of:o})]})}function g(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{g as default};
