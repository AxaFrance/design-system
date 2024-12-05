import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5-DTFagBQj.js";import{ae as o,af as r,ag as t}from"./index-TnGExe58.js";import{F as c,a as l,b as p,c as h,d}from"./FileInput.stories-i1mP6cVA.js";import"./index-CTjT7uj6.js";import"./iframe-C5tovS4N.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./HelpMessage-8RhooMOY.js";import"./index-CCQ3W5xA.js";import"./getComponentClassName-C7V7Z2-u.js";import"./FileInput-63Red2rh.js";import"./useInputClassModifier-B4SXY78l.js";import"./index-BzjuzjN8.js";import"./tslib.es6-Duv2rsQ1.js";import"./Button-BPtTpx5t.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"file-input",children:"File Input"}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { FileInput } from "@axa-fr/design-system-slash-react";
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { File } from "@axa-fr/design-system-slash-react";
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
} from "@axa-fr/design-system-slash-react";
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
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"file-with-errors",children:"File with errors"}),`
`,e.jsx(n.h3,{id:"import-3",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {
  File,
  FileTable,
  HelpMessage,
} from "@axa-fr/design-system-slash-react";
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
`,e.jsx(r,{of:d})]})}function U(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{U as default};
