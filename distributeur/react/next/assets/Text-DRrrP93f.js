import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DSfWgH82.js";import"./index-DrMi3rJw.js";import{M as l,C as t,a as s}from"./index-BeHmUrzJ.js";import{T as d,a}from"./Text.stories-C3ZamaA0.js";import{TextInputStory as i,TextInputErrorStory as x,TextInputSuccessStory as p,TextInputRichLabelStory as h}from"./TextInput.stories-CIJoiaHE.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BOaJiXSU.js";import"./iframe-DmWZJHAJ.js";import"./DocsRenderer-CFRXHY34-BOZuDv7W.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./index-63p0MazF.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CardData-CisLDHWb.js";import"./index-VGPHIPc6.js";import"./inputTypes-yk8eVPCn.js";import"./index-P5gXvkWX.js";import"./Popover-CM7ICPQG.js";function o(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"input-text",children:"Input Text"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text",children:"Text"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#textinput",children:"TextInput"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#textinput-required",children:"TextInput Required"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#textinput-error",children:"TextInput Error"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#text-success",children:"Text Success"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-disabled",children:"Text Disabled"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#textinput-rich-label",children:"TextInput Rich Label"})}),`
`]}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h2,{id:"text",children:"Text"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Text } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const textReturn = () => (
  <form className="af-form" name="myform">
    <Text id="nameid" name="name" placeholder="Your name" value="John Doe" />
  </form>
);
export default textReturn;
`})}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"textinput",children:"TextInput"}),`
`,e.jsx(n.h3,{id:"import-1",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { TextInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.h3,{id:"use-1",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const textInputReturn = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="nameid"
      name="name"
      label="Your name"
      value="John Doe"
      placeholder="Your name"
      helpMessage="Aide à la saisie"
      onChange={(e) => {
        console.log(e);
      }}
    />
  </form>
);
export default textInputReturn;
`})}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(n.h3,{id:"textinput-required",children:"TextInput Required"}),`
`,e.jsxs(n.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(n.code,{children:"required"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively you can to add to the ",e.jsx(n.code,{children:"classModifier"})," the value ",e.jsx(n.code,{children:"required"}),". This behaviour exists to keep backward compatibility but ",e.jsx(n.em,{children:"might"})," disapear in the future."]}),`
`,e.jsx(n.h2,{id:"textinput-error",children:"TextInput Error"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const textInputError = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="nameid"
      name="name"
      label="Your name"
      value="John Doe"
      placeholder="Your name"
      required
      message="The field is required"
      messageType={MessageTypes.error}
      forceDisplayMessage={true}
    />
  </form>
);
export default textInputError;
`})}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"text-success",children:"Text Success"}),`
`,e.jsx(n.h3,{id:"import-2",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { TextInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.h3,{id:"use-2",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const textSuccess = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="nameid"
      name="name"
      label="Your name"
      value="John Doe"
      placeholder="Your name"
      message="Success Message Type"
      messageType={MessageTypes.success}
      forceDisplayMessage={true}
    />
  </form>
);
export default textSuccess;
`})}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"text-disabled",children:"Text Disabled"}),`
`,e.jsx(n.p,{children:"To achieve Text Disabled, you need to add this :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`disabled = { true };
`})}),`
`,e.jsxs(n.p,{children:["in ",e.jsx(n.strong,{children:"the component of your choice"}),"."]}),`
`,e.jsx(n.h2,{id:"textinput-rich-label",children:"TextInput Rich Label"}),`
`,e.jsx(n.h3,{id:"import-3",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { TextInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.h3,{id:"use-3",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const richLabel = (
  <span>
    Place name <i>optional</i>
  </span>
);

const textInputRichLabel = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="nameid"
      name="name"
      label={richLabel}
      value="John Doe"
      placeholder="Your name"
      helpMessage="Aide à la saisie"
      message="The field is required"
      messageType={MessageTypes.error}
      forceDisplayMessage={true}
    />
  </form>
);
export default textInputRichLabel;
`})}),`
`,e.jsx(t,{of:h})]})}function k(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{k as default};
