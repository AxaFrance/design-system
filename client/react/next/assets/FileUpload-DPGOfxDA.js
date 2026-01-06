import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as l}from"./index-DSfWgH82.js";import"./index-CwgO_Dbp.js";import{F as s,P as o}from"./FileUpload.stories-eRSwZNOV.js";import{M as d,C as t,a as c}from"./index-DzmUaGBp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-f1KBOeli.js";import"./iframe-D8t-sgR3.js";import"./DocsRenderer-CFRXHY34-BOOmEpaX.js";import"./react-18-C_RNIbSA.js";import"./LevelSelectorLF-BDFLWfNa.js";import"./ItemFileLF-BNrG8-Zd.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s,name:"FileUpload"}),`
`,e.jsx(n.h1,{id:"fileupload",children:"FileUpload"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FileUpload"})," component provides a dropzone and an accessible file input control similar to ",e.jsx(n.code,{children:"InputFile"}),", and adds a dedicated area to display uploaded files. The uploaded files area is rendered by providing one or more ",e.jsx(n.code,{children:"ItemFile"})," components as ",e.jsx(n.code,{children:"children"}),", which gives full flexibility for preview/remove links and per-file error messages."]}),`
`,e.jsx(n.p,{children:"Usage example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { FileUpload, ItemFile } from "@axa-fr/canopee-react/client";

const Example = () => (
  <FileUpload
    id="attachments"
    label="Attach supporting documents"
    description="Drop files here or use the button to select"
    helper="Up to 2 files — pdf, png, jpg — 5 MB max each"
    fileListLabel="Your uploaded files:"
  >
    <ItemFile
      file={
        new File([new Uint8Array(1024)], "example.jpg", { type: "image/jpg" })
      }
    />
    <ItemFile
      file={
        new File([new Uint8Array(1024)], "contract.pdf", {
          type: "application/pdf",
        })
      }
      errorMessage="This file is larger than 5MB"
    />
  </FileUpload>
);
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["Note: ",e.jsx(n.code,{children:"FileUpload"})," inherits all props from the ",e.jsx(n.code,{children:"InputFile"})," component. The table below lists the props specific to ",e.jsx(n.code,{children:"FileUpload"})," or commonly used with it — consult the ",e.jsx(n.code,{children:"InputFile"})," documentation for the full set of inherited props."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Prop"}),e.jsx("th",{scope:"col",children:"Type"}),e.jsx("th",{scope:"col",children:"Default"}),e.jsx("th",{scope:"col",children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsxs(n.p,{children:["One or more ",e.jsx(n.code,{children:"ItemFile"}),` elements representing uploaded files. Using
`,e.jsx(n.code,{children:"children"}),` allows flexible rendering of preview/remove links and
per-file error messages inside each `,e.jsx(n.code,{children:"ItemFile"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fileListLabel"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:e.jsx("code",{children:'"Vos fichiers importés :"'})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Label displayed above the uploaded files list. If no ",e.jsx(n.code,{children:"children"}),` are
provided, the list and label are not rendered.`]})})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: Most native ",e.jsx(n.code,{children:"<input>"})," props are supported and forwarded to the internal ",e.jsx(n.code,{children:'<input type="file">'})," (except ",e.jsx(n.code,{children:"type"}),", which is forced to ",e.jsx(n.code,{children:"file"}),`).
The `,e.jsx(n.code,{children:"className"})," and ",e.jsx(n.code,{children:"style"})," props apply to the component container, not the native input element."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(c,{of:o})]})}function M(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{M as default};
