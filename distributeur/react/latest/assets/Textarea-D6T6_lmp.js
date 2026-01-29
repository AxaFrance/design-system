import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DSfWgH82.js";import"./index-W5lOLZQP.js";import{T as l,a}from"./Textarea.stories-CYyOgmIO.js";import{TextareaInputStory as t}from"./TextareaInput.stories-Bi1JJ-hN.js";import{M as p,C as o,a as s}from"./index-D5nSs15M.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BB9upFFP.js";import"./iframe-C0OJtToi.js";import"./DocsRenderer-CFRXHY34-DZB6gQIv.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./CardData-BIJbskTL.js";import"./index-63p0MazF.js";import"./index-VGPHIPc6.js";import"./index-gMQblwGn.js";import"./Popover-fnJAgU7M.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:l}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#textarea",children:"Textarea"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#textareainput",children:"TextareaInput"})}),`
`]}),`
`,e.jsx(n.h2,{id:"textarea",children:"Textarea"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Textarea } from "@axa-fr/canopee-react/distributeur";
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
`,e.jsx(o,{of:a}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"textareainput",children:"TextareaInput"}),`
`,e.jsx(n.h3,{id:"import-1",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MessageTypes, TextareaInput } from "@axa-fr/canopee-react/distributeur";
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
`,e.jsx(o,{of:t}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h2,{id:"required",children:"Required"}),`
`,e.jsxs(n.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(n.code,{children:"required"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively you can to add to the ",e.jsx(n.code,{children:"classModifier"})," the value ",e.jsx(n.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]})]})}function D(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{D as default};
