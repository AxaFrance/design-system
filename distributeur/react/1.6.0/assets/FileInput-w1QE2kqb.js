import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-De-9TtK1.js";import{t as s}from"./mdx-react-shim-BooHXHLT.js";import{FileInputStory as c,FileStory as l,FileWithErrorsStory as u,FileWithValuesStory as d,n as f,t as p}from"./FileInput.stories-DmNbqyIK.js";function m(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.h1,{id:`file-input`,children:`File Input`}),`
`,(0,g.jsxs)(r.ol,{children:[`
`,(0,g.jsxs)(r.li,{children:[(0,g.jsx)(r.a,{href:`#fileinput`,children:`FileInput`}),`
`,(0,g.jsxs)(r.ol,{children:[`
`,(0,g.jsx)(r.li,{children:(0,g.jsx)(r.a,{href:`#fileinput-required`,children:`FileInput Required`})}),`
`]}),`
`]}),`
`,(0,g.jsx)(r.li,{children:(0,g.jsx)(r.a,{href:`#file`,children:`File`})}),`
`,(0,g.jsx)(r.li,{children:(0,g.jsx)(r.a,{href:`#file-with-values`,children:`File with values`})}),`
`,(0,g.jsx)(r.li,{children:(0,g.jsx)(r.a,{href:`#file-with-errors`,children:`File with errors`})}),`
`]}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(r.h2,{id:`fileinput`,children:`FileInput`}),`
`,(0,g.jsx)(r.h3,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-javascript`,children:`import { FileInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(r.h3,{id:`use`,children:`Use`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`const FileInputReturn = () => (
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
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(n,{of:c}),`
`,(0,g.jsx)(r.h3,{id:`fileinput-required`,children:`FileInput Required`}),`
`,(0,g.jsxs)(r.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,g.jsx)(r.code,{children:`required`}),` prop to `,(0,g.jsx)(r.code,{children:`true`}),`.`]}),`
`,(0,g.jsxs)(r.p,{children:[`Alternatively you can to add to the `,(0,g.jsx)(r.code,{children:`classModifier`}),` the value `,(0,g.jsx)(r.code,{children:`required`}),`. This behaviour exists to keep backward compatibility but might disapear in the future.`]}),`
`,(0,g.jsx)(r.h2,{id:`file`,children:`File`}),`
`,(0,g.jsx)(r.h3,{id:`import-1`,children:`Import`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-javascript`,children:`import { File } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(r.h3,{id:`use-1`,children:`Use`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`const fileReturn = () => (
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
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(r.h2,{id:`file-with-values`,children:`File with values`}),`
`,(0,g.jsx)(r.h3,{id:`import-2`,children:`Import`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-javascript`,children:`import {
  File,
  FileTable,
  HelpMessage,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(r.h3,{id:`use-2`,children:`Use`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`const values = [
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
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r.h2,{id:`file-with-errors`,children:`File with errors`}),`
`,(0,g.jsx)(r.h3,{id:`import-3`,children:`Import`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-javascript`,children:`import {
  File,
  FileTable,
  HelpMessage,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(r.h3,{id:`use-3`,children:`Use`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`const values = [
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
`,(0,g.jsx)(i,{of:u})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=o(),s(),r(),f()}))();export{h as default};