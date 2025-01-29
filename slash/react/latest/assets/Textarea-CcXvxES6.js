import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-Ch4n-_Zu.js";import"./DocsRenderer-CFRXHY34-11Y2Aw13.js";import{M as c,C as a,a as t}from"./index-XUrgFtkI.js";import{T as m,a as o}from"./Textarea.stories-CzkTfJLA.js";import{TextareaInputStory as s}from"./TextareaInput.stories-DnitWav6.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./react-18-EAsyrTGL.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./index-Bm9fFANh.js";import"./Textarea-D5K0SVgm.js";import"./getComponentClassName-CfMiunrP.js";import"./HelpMessage-D9o_4RmS.js";import"./TextareaInput-CYppWOX7.js";/* empty css                 */import"./useInputClassModifier-B4SXY78l.js";function i(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:m}),`
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
`,e.jsx(a,{of:o}),`
`,e.jsx(t,{of:o}),`
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
`,e.jsx(a,{of:s}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h2,{id:"required",children:"Required"}),`
`,e.jsxs(n.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(n.code,{children:"required"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively you can to add to the ",e.jsx(n.code,{children:"classModifier"})," the value ",e.jsx(n.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]})]})}function D(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{D as default};
