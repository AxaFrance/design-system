import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-DBecIi7S.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./FileInput.stories-BxyjeOOv.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.h1,{id:`file-input`,children:`File Input`}),`
`,(0,g.jsxs)(t.ol,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.a,{href:`#fileinput`,children:`FileInput`}),`
`,(0,g.jsxs)(t.ol,{children:[`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#fileinput-required`,children:`FileInput Required`})}),`
`]}),`
`]}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#file`,children:`File`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#file-with-values`,children:`File with values`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#file-with-errors`,children:`File with errors`})}),`
`]}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`fileinput`,children:`FileInput`}),`
`,(0,g.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`import { FileInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const FileInputReturn = () => (
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
`,(0,g.jsx)(r,{of:p}),`
`,(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h3,{id:`fileinput-required`,children:`FileInput Required`}),`
`,(0,g.jsxs)(t.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,g.jsx)(t.code,{children:`required`}),` prop to `,(0,g.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,g.jsx)(t.h2,{id:`file`,children:`File`}),`
`,(0,g.jsx)(t.h3,{id:`import-1`,children:`Import`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`import { File } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(t.h3,{id:`use-1`,children:`Use`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const fileReturn = () => (
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
`,(0,g.jsx)(r,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`file-with-values`,children:`File with values`}),`
`,(0,g.jsx)(t.h3,{id:`import-2`,children:`Import`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`import {
  File,
  FileTable,
  HelpMessage,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(t.h3,{id:`use-2`,children:`Use`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const values = [
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
`,(0,g.jsx)(r,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`file-with-errors`,children:`File with errors`}),`
`,(0,g.jsx)(t.h3,{id:`import-3`,children:`Import`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`import {
  File,
  FileTable,
  HelpMessage,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(t.h3,{id:`use-3`,children:`Use`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const values = [
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
`,(0,g.jsx)(r,{of:l})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),a(),o(),d()})))()}_();export{h as default};