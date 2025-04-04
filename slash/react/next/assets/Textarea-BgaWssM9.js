import{j as e}from"./index-DK-fRI8B.js";import{useMDXComponents as l}from"./index-G7nTXt62.js";import"./index-MHoihwiz.js";import{T as c,a}from"./Textarea.stories-BPaNBa8J.js";import{TextareaInputStory as t}from"./TextareaInput.stories-3og5y0Wt.js";import{M as d,C as s,a as o}from"./index-LT2Ngm1G.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./preview-hmjBYRrH.js";import"./iframe-Cpv8qdJn.js";import"./DocsRenderer-CFRXHY34-BawmW22F.js";import"./react-18-DOac64BB.js";/* empty css              */import"./Loader-B6DV6uP2.js";import"./index-C2cC0QQF.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#textarea",children:"Textarea"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#textareainput",children:"TextareaInput"})}),`
`]}),`
`,e.jsx(n.h2,{id:"textarea",children:"Textarea"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Textarea } from "@axa-fr/design-system-slash-react";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const TextareaReturn = () => (
  <form className="af-form" name="myform">
    <Textarea
      id="uniqueId"
      value=""
      onChange={(e) => {
        console.log(e);
      }}
      name="textareainputName"
      rows={6}
      cols={60}
    />
  </form>
);
export default TextareaReturn;
`})}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"textareainput",children:"TextareaInput"}),`
`,e.jsx(n.h3,{id:"import-1",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MessageTypes, TextareaInput } from "@axa-fr/design-system-slash-react";
`})}),`
`,e.jsx(n.h3,{id:"use-1",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const TextareaInputReturn = () => (
  <form className="af-form" name="myform">
    <TextareaInput
      id="uniqueId"
      value=""
      onChange={(e) => {
        console.log(e);
      }}
      label="Place type"
      name="textareainputName"
      rows={6}
      cols={60}
      helpMessage="Enter the place type"
      messageType={MessageTypes.error}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
    />
  </form>
);
export default TextareaInputReturn;
`})}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.h2,{id:"required",children:"Required"}),`
`,e.jsxs(n.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(n.code,{children:"required"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively you can to add to the ",e.jsx(n.code,{children:"classModifier"})," the value ",e.jsx(n.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]})]})}function R(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{R as default};
