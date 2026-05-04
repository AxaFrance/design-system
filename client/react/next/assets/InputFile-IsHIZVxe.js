import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-rw17kmD6.js";import{t as r}from"./mdx-react-shim-okekR0or.js";import{i,l as a,n as o,s}from"./blocks-DqZwWlVi.js";import{Playground as c,n as l,t as u}from"./InputFile.stories-B88s2GIx.js";function d(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u,name:`InputFile`}),`
`,(0,p.jsx)(t.h1,{id:`inputfile`,children:`InputFile`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`InputFile`}),` component provides a dropzone and an accessible file input control, featuring an enriched label, an action button and a status message (error/success). It is designed to integrate with the `,(0,p.jsx)(t.code,{children:`ItemLabel`}),` / `,(0,p.jsx)(t.code,{children:`ItemMessage`}),` components to deliver consistent labeling and user feedback.`]}),`
`,(0,p.jsx)(t.p,{children:`Usage example:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { InputFile } from "@axa-fr/canopee-react/client";

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
`,(0,p.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(`table`,{children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`col`,children:`Prop`}),(0,p.jsx)(`th`,{scope:`col`,children:`Type`}),(0,p.jsx)(`th`,{scope:`col`,children:`Default`}),(0,p.jsx)(`th`,{scope:`col`,children:`Description`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`label`})}),(0,p.jsx)(`td`,{children:`ReactNode`}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:`Visible label text displayed for the control.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`description`})}),(0,p.jsx)(`td`,{children:`ReactNode`}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:(0,p.jsx)(t.p,{children:`Descriptive text that complements the label (shown near the label).`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`sideButtonLabel`})}),(0,p.jsx)(`td`,{children:`ReactNode`}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:`Label for an optional side action button (e.g. "Browse").`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`onSideButtonClick`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`(e: MouseEvent) => void`})}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:`Click handler for the side button.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`moreButtonLabel`})}),(0,p.jsx)(`td`,{children:`ReactNode`}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:`Label for the "more info" button (info).`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`onMoreButtonClick`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`(e: MouseEvent) => void`})}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:`Click handler for the info button.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`labelProps`})}),(0,p.jsx)(`td`,{children:`Partial of ItemLabel props`}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:(0,p.jsx)(t.p,{children:`Additional options to customize the label appearance/behavior (size,
tone, helpers).`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`helper`})}),(0,p.jsx)(`td`,{children:`ReactNode`}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(t.p,{children:[`Helper text displayed under the control. When present it is linked via`,` `,`
`,(0,p.jsx)(`code`,{children:`aria-describedby`}),`.`]})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`dropzoneLabels`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:(0,p.jsx)(`pre`,{children:`{
dropzone?,
or?,
button?
}`})})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:(0,p.jsx)(`pre`,{children:`{
"dropzone": "Glisser et déposer un fichier",
"or": "ou",
"button": "Importer fichier"
}`})})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(t.p,{children:`Labels for the dropzone area. Each field is optional and will fall back
to the default when omitted.`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`message`})}),(0,p.jsx)(`td`,{children:`ReactNode`}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:(0,p.jsx)(t.p,{children:`Status message associated with the control (e.g. error or success
message).`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`messageType`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`'error' / 'success' / 'info'`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`'error'`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(t.p,{children:`Type of the displayed message (affects rendering and ARIA attributes).`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`id`})}),(0,p.jsx)(`td`,{children:`string`}),(0,p.jsx)(`td`,{children:`Automatically generated if missing`}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(t.p,{children:[`The field id (used for `,(0,p.jsx)(`code`,{children:`htmlFor`}),`,`,` `,`
`,(0,p.jsx)(`code`,{children:`aria-describedby`}),`, `,(0,p.jsx)(`code`,{children:`aria-errormessage`}),`).`]})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`required`})}),(0,p.jsx)(`td`,{children:`boolean`}),(0,p.jsx)(`td`,{children:`false`}),(0,p.jsx)(`td`,{children:`Indicates the field is required.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`accept`})}),(0,p.jsx)(`td`,{children:`string`}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(t.p,{children:[`Values accepted by the input (e.g. `,(0,p.jsx)(`code`,{children:`".pdf,image/*"`}),`).`]})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`multiple`})}),(0,p.jsx)(`td`,{children:`boolean`}),(0,p.jsx)(`td`,{children:`false`}),(0,p.jsx)(`td`,{children:`Allows selecting multiple files.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`disabled`})}),(0,p.jsx)(`td`,{children:`boolean`}),(0,p.jsx)(`td`,{children:`false`}),(0,p.jsx)(`td`,{children:`Disables the control.`})]})]})]}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsxs)(t.p,{children:[`Note: Most native `,(0,p.jsx)(t.code,{children:`<input>`}),` props are supported and will be forwarded to the internal `,(0,p.jsx)(t.code,{children:`input`}),` element (except `,(0,p.jsx)(t.code,{children:`type`}),`, which is forced to `,(0,p.jsx)(t.code,{children:`file`}),`).`]}),`
`]}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsxs)(t.p,{children:[`Note 2: The `,(0,p.jsx)(t.code,{children:`className`}),` and `,(0,p.jsx)(t.code,{children:`style`}),` props are NOT applied to the internal `,(0,p.jsx)(t.code,{children:`<input type="file">`}),` element; they are applied to the component's parent container so you can style the drop area, button, etc.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`best-practices-and-accessibility`,children:`Best practices and accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Provide an explicit `,(0,p.jsx)(t.code,{children:`id`}),` (or use the generated one) so the `,(0,p.jsx)(t.code,{children:`label`}),` (`,(0,p.jsx)(t.code,{children:`htmlFor`}),`) correctly targets the file input.`]}),`
`,(0,p.jsxs)(t.li,{children:[`When a `,(0,p.jsx)(t.code,{children:`helper`}),` or a `,(0,p.jsx)(t.code,{children:`message`}),` is present, they are linked via `,(0,p.jsx)(t.code,{children:`aria-describedby`}),` / `,(0,p.jsx)(t.code,{children:`aria-errormessage`}),`. Do not rely on color alone to indicate an error: provide explicit text.`]}),`
`,(0,p.jsxs)(t.li,{children:[`If an error message is shown, `,(0,p.jsx)(t.code,{children:`aria-invalid`}),` is set on the input and `,(0,p.jsx)(t.code,{children:`aria-errormessage`}),` points to the message id.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Action buttons (side / more) must have an accessible name (visible text or `,(0,p.jsx)(t.code,{children:`aria-label`}),`) for voice command users.`]}),`
`,(0,p.jsx)(t.li,{children:`The component ensures screen-reader-friendly labels and avoids adding static elements to the tab order unnecessarily.`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility-examples`,children:`Accessibility examples`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Example with a programmatic error message and focus on the first invalid field:`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<InputFile
  id="contract"
  label="Upload the contract"
  helper="PDF only"
  message="The file is too large"
  messageType="error"
  required
/>
`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Example with a side button and additional ARIA attributes:`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<InputFile
  id="proof"
  label="Proof of address"
  sideButtonLabel="Browse"
  onSideButtonClick={() => {
    /* open picker */
  }}
  sideButtonProps={{ "aria-label": "Browse files" }}
/>
`})})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};