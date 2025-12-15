import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as i}from"./index-DSfWgH82.js";import"./index-CVtoD865.js";import{I as t,P as s}from"./InputFile.stories-C0B_UAwj.js";import{M as l,C as c,a as o}from"./index-Cj33uzRq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-CZ0HQCtr.js";import"./iframe-BLG79sZX.js";import"./DocsRenderer-CFRXHY34-DWTqTFM1.js";import"./react-18-C_RNIbSA.js";import"./LevelSelectorLF-BOPJTp8z.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,name:"InputFile"}),`
`,e.jsx(n.h1,{id:"inputfile",children:"InputFile"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"InputFile"})," component provides a dropzone and an accessible file input control, featuring an enriched label, an action button and a status message (error/success). It is designed to integrate with the ",e.jsx(n.code,{children:"ItemLabel"})," / ",e.jsx(n.code,{children:"ItemMessage"})," components to deliver consistent labeling and user feedback."]}),`
`,e.jsx(n.p,{children:"Usage example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { InputFile } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <InputFile
    id="invoice"
    label="Upload a document"
    description="Select a file or drop it in the area"
    helper="Accepted formats: PDF, JPG - Max size 5MB"
    dropzoneLabels={{
      dropzone: "Drag & drop",
      or: "or",
      button: "Choose a file",
    }}
  />
);
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Prop"}),e.jsx("th",{scope:"col",children:"Type"}),e.jsx("th",{scope:"col",children:"Default"}),e.jsx("th",{scope:"col",children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Visible label text displayed for the control."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"description"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.p,{children:"Descriptive text that complements the label (shown near the label)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sideButtonLabel"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:'Label for an optional side action button (e.g. "Browse").'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSideButtonClick"})}),e.jsx("td",{children:e.jsx("code",{children:"(e: MouseEvent) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Click handler for the side button."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"moreButtonLabel"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:'Label for the "more info" button (info).'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onMoreButtonClick"})}),e.jsx("td",{children:e.jsx("code",{children:"(e: MouseEvent) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Click handler for the info button."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"labelProps"})}),e.jsx("td",{children:"Partial of ItemLabel props"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.p,{children:`Additional options to customize the label appearance/behavior (size,
tone, helpers).`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"helper"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsxs(n.p,{children:["Helper text displayed under the control. When present it is linked via"," ",`
`,e.jsx("code",{children:"aria-describedby"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dropzoneLabels"})}),e.jsx("td",{children:e.jsx("code",{children:e.jsx("pre",{children:`{
  dropzone?,
  or?,
  button?
}`})})}),e.jsx("td",{children:e.jsx("code",{children:e.jsx("pre",{children:`{
  "dropzone": "Glisser et déposer un fichier",
  "or": "ou",
  "button": "Importer fichier"
}`})})}),e.jsx("td",{children:e.jsx(n.p,{children:`Labels for the dropzone area. Each field is optional and will fall back
to the default when omitted.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"message"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.p,{children:`Status message associated with the control (e.g. error or success
message).`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"messageType"})}),e.jsx("td",{children:e.jsx("code",{children:"'error' / 'success' / 'info'"})}),e.jsx("td",{children:e.jsx("code",{children:"'error'"})}),e.jsx("td",{children:e.jsx(n.p,{children:"Type of the displayed message (affects rendering and ARIA attributes)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Automatically generated if missing"}),e.jsx("td",{children:e.jsxs(n.p,{children:["The field id (used for ",e.jsx("code",{children:"htmlFor"}),","," ",`
`,e.jsx("code",{children:"aria-describedby"}),", ",e.jsx("code",{children:"aria-errormessage"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"required"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"Indicates the field is required."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"accept"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsxs(n.p,{children:["Values accepted by the input (e.g. ",e.jsx("code",{children:'".pdf,image/*"'}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"multiple"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"Allows selecting multiple files."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"Disables the control."})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: Most native ",e.jsx(n.code,{children:"<input>"})," props are supported and will be forwarded to the internal ",e.jsx(n.code,{children:"input"})," element (except ",e.jsx(n.code,{children:"type"}),", which is forced to ",e.jsx(n.code,{children:"file"}),")."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note 2: The ",e.jsx(n.code,{children:"className"})," and ",e.jsx(n.code,{children:"style"})," props are NOT applied to the internal ",e.jsx(n.code,{children:'<input type="file">'})," element; they are applied to the component's parent container so you can style the drop area, button, etc."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h2,{id:"best-practices-and-accessibility",children:"Best practices and accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Provide an explicit ",e.jsx(n.code,{children:"id"})," (or use the generated one) so the ",e.jsx(n.code,{children:"label"})," (",e.jsx(n.code,{children:"htmlFor"}),") correctly targets the file input."]}),`
`,e.jsxs(n.li,{children:["When a ",e.jsx(n.code,{children:"helper"})," or a ",e.jsx(n.code,{children:"message"})," is present, they are linked via ",e.jsx(n.code,{children:"aria-describedby"})," / ",e.jsx(n.code,{children:"aria-errormessage"}),". Do not rely on color alone to indicate an error: provide explicit text."]}),`
`,e.jsxs(n.li,{children:["If an error message is shown, ",e.jsx(n.code,{children:"aria-invalid"})," is set on the input and ",e.jsx(n.code,{children:"aria-errormessage"})," points to the message id."]}),`
`,e.jsxs(n.li,{children:["Action buttons (side / more) must have an accessible name (visible text or ",e.jsx(n.code,{children:"aria-label"}),") for voice command users."]}),`
`,e.jsx(n.li,{children:"The component ensures screen-reader-friendly labels and avoids adding static elements to the tab order unnecessarily."}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility-examples",children:"Accessibility examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Example with a programmatic error message and focus on the first invalid field:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputFile
  id="contract"
  label="Upload the contract"
  helper="PDF only"
  message="The file is too large"
  messageType="error"
  required
/>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Example with a side button and additional ARIA attributes:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputFile
  id="proof"
  label="Proof of address"
  sideButtonLabel="Browse"
  onSideButtonClick={() => {
    /* open picker */
  }}
  sideButtonProps={{ "aria-label": "Browse files" }}
/>
`})})]})}function M(d={}){const{wrapper:n}={...i(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{M as default};
