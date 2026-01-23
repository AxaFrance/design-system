import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import"./index-W5lOLZQP.js";import{M as o,C as r,a as t}from"./index-D5nSs15M.js";import{F as c,a as l,b as p,c as d,d as h}from"./FileInput.stories-DPwXk_xC.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BB9upFFP.js";import"./iframe-C0OJtToi.js";import"./DocsRenderer-CFRXHY34-DZB6gQIv.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./index-63p0MazF.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CardData-BIJbskTL.js";import"./index-VGPHIPc6.js";function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"file-input",children:"File Input"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#fileinput",children:"FileInput"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#fileinput-required",children:"FileInput Required"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#file",children:"File"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#file-with-values",children:"File with values"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#file-with-errors",children:"File with errors"})}),`
`]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h2,{id:"fileinput",children:"FileInput"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { FileInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const FileInputReturn = () => (
  <FileInput
    id="uniqueid"
    label="Picture"
    name="placeImage"
    accept="image/jpeg, image/png, application/*"
    onChange={(e) => {
      console.log(e);
    }}
    helpMessage="Take a photo af a place"
    messageType={MessageTypes.error}
  />
);
export default FileInputReturn;
`})}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h3,{id:"fileinput-required",children:"FileInput Required"}),`
`,e.jsxs(n.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(n.code,{children:"required"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively you can to add to the ",e.jsx(n.code,{children:"classModifier"})," the value ",e.jsx(n.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]}),`
`,e.jsx(n.h2,{id:"file",children:"File"}),`
`,e.jsx(n.h3,{id:"import-1",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { File } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.h3,{id:"use-1",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const fileReturn = () => (
  <form className="af-form" name="myform">
    <File
      id="uniqueid"
      name="placeImage"
      accept="image/jpeg, image/png, application/*"
      onChange={(e) => {
        console.log(e);
      }}
      label="Browse"
      icon="open"
    />
  </form>
);
export default fileReturn;
`})}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"file-with-values",children:"File with values"}),`
`,e.jsx(n.h3,{id:"import-2",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {
  File,
  FileTable,
  HelpMessage,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.h3,{id:"use-2",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const values = [
  {
    id: "000003",
    file: {
      name: "error-file.jpg",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
      type: "image",
    },
  },
  {
    id: "000004",
    file: {
      name: "fichier.png",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
      type: "image",
    },
  },
  {
    id: "000005",
    file: {
      name: "fichier.csv",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
    },
  },
];

const FileWithValues = () => (
  <form className="af-form" name="myform">
    <File
      id="uniqueid"
      name="placeImage"
      accept="image/jpeg, image/png, application/*"
      onChange={() => {
        console.log("your function");
      }}
      label="Browse"
      icon="open"
    />
    <FileTable
      errors={[]}
      values={values}
      onClick={(e) => {
        console.log(e);
      }}
    />
    <HelpMessage message="Enter the place name, ex : Webcenter" />
  </form>
);
export default FileWithValues;
`})}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"file-with-errors",children:"File with errors"}),`
`,e.jsx(n.h3,{id:"import-3",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {
  File,
  FileTable,
  HelpMessage,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.h3,{id:"use-3",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const values = [
  {
    id: "000003",
    file: {
      name: "error-file.jpg",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
      type: "image",
    },
  },
  {
    id: "000004",
    file: {
      name: "fichier.png",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
      type: "image",
    },
  },
  {
    id: "000005",
    file: {
      name: "fichier.csv",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
    },
  },
];

let errors = [
  {
    id: "000003",
    file: {
      name: "error-file.jpg",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
    },
  },
  {
    id: "000004",
    file: {
      name: "fichier.png",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
    },
  },
  {
    id: "000005",
    file: {
      name: "fichier.csv",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
    },
  },
];

const FileWithErrors = () => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File
        id="uniqueid"
        name="placeImage"
        accept="image/jpeg, image/png, application/*"
        multiple={false}
        label="Browse"
        icon="open"
        onChange={(e) => e}
      />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable
        errors={errors}
        values={values}
        onClick={(e) => {
          console.log(e);
        }}
      />
    </div>
  </form>
);
export default FileWithErrors;
`})}),`
`,e.jsx(r,{of:h})]})}function T(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{T as default};
