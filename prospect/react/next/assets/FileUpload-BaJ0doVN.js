import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-eNU0SGNV.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-Apjsvtpk.js";import{n as c,r as l,t as u}from"./FileUpload.stories-CAd99bvz.js";function d(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u,name:`FileUpload`}),`
`,(0,p.jsx)(n.h1,{id:`fileupload`,children:`FileUpload`}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`FileUpload`}),` component provides a dropzone and an accessible file input control similar to `,(0,p.jsx)(n.code,{children:`InputFile`}),`, and adds a dedicated area to display uploaded files. The uploaded files area is rendered by providing one or more `,(0,p.jsx)(n.code,{children:`ItemFile`}),` components as `,(0,p.jsx)(n.code,{children:`children`}),`, which gives full flexibility for preview/remove links and per-file error messages.`]}),`
`,(0,p.jsx)(n.p,{children:`Usage example:`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { FileUpload, ItemFile } from "@axa-fr/canopee-react/prospect";

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
`,(0,p.jsx)(n.h3,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(n.p,{children:[`Note: `,(0,p.jsx)(n.code,{children:`FileUpload`}),` inherits all props from the `,(0,p.jsx)(n.code,{children:`InputFile`}),` component. The table below lists the props specific to `,(0,p.jsx)(n.code,{children:`FileUpload`}),` or commonly used with it — consult the `,(0,p.jsx)(n.code,{children:`InputFile`}),` documentation for the full set of inherited props.`]}),`
`,(0,p.jsxs)(`table`,{children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`col`,children:`Prop`}),(0,p.jsx)(`th`,{scope:`col`,children:`Type`}),(0,p.jsx)(`th`,{scope:`col`,children:`Default`}),(0,p.jsx)(`th`,{scope:`col`,children:`Description`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`children`})}),(0,p.jsx)(`td`,{children:`ReactNode`}),(0,p.jsx)(`td`,{children:`-`}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(n.p,{children:[`One or more `,(0,p.jsx)(n.code,{children:`ItemFile`}),` elements representing uploaded files. Using
`,(0,p.jsx)(n.code,{children:`children`}),` allows flexible rendering of preview/remove links and
per-file error messages inside each `,(0,p.jsx)(n.code,{children:`ItemFile`}),`.`]})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`fileListLabel`})}),(0,p.jsx)(`td`,{children:`ReactNode`}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`"Vos fichiers importés :"`})}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(n.p,{children:[`Label displayed above the uploaded files list. If no `,(0,p.jsx)(n.code,{children:`children`}),` are
provided, the list and label are not rendered.`]})})]})]})]}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsxs)(n.p,{children:[`Note: Most native `,(0,p.jsx)(n.code,{children:`<input>`}),` props are supported and forwarded to the internal `,(0,p.jsx)(n.code,{children:`<input type="file">`}),` (except `,(0,p.jsx)(n.code,{children:`type`}),`, which is forced to `,(0,p.jsx)(n.code,{children:`file`}),`).
The `,(0,p.jsx)(n.code,{children:`className`}),` and `,(0,p.jsx)(n.code,{children:`style`}),` props apply to the component container, not the native input element.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(t,{of:c})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),o(),n(),l()})))()}m();export{f as default};