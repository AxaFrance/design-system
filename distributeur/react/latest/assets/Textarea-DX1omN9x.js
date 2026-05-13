import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-De-9TtK1.js";import{t as s}from"./mdx-react-shim-BooHXHLT.js";import{TextareaStory as c,n as l,t as u}from"./Textarea.stories-XQyn0Q3Z.js";import{TextareaInputStory as d,t as f}from"./TextareaInput.stories-DsVexW8E.js";function p(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsxs)(r.ol,{children:[`
`,(0,h.jsx)(r.li,{children:(0,h.jsx)(r.a,{href:`#textarea`,children:`Textarea`})}),`
`,(0,h.jsx)(r.li,{children:(0,h.jsx)(r.a,{href:`#textareainput`,children:`TextareaInput`})}),`
`]}),`
`,(0,h.jsx)(r.h2,{id:`textarea`,children:`Textarea`}),`
`,(0,h.jsx)(r.h3,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`import { Textarea } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.h3,{id:`use`,children:`Use`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`const TextareaReturn = () => (
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
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n,{of:c}),`
`,(0,h.jsx)(r.h2,{id:`textareainput`,children:`TextareaInput`}),`
`,(0,h.jsx)(r.h3,{id:`import-1`,children:`Import`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`import {
  MessageTypes,
  TextareaInput,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.h3,{id:`use-1`,children:`Use`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`const TextareaInputReturn = () => (
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
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n,{of:d}),`
`,(0,h.jsx)(r.h2,{id:`required`,children:`Required`}),`
`,(0,h.jsxs)(r.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,h.jsx)(r.code,{children:`required`}),` prop to `,(0,h.jsx)(r.code,{children:`true`}),`.`]}),`
`,(0,h.jsxs)(r.p,{children:[`Alternatively you can to add to the `,(0,h.jsx)(r.code,{children:`classModifier`}),` the value `,(0,h.jsx)(r.code,{children:`required`}),`. This behaviour exists to keep backward compatibility but might disapear in the future.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=o(),s(),r(),l(),f()}))();export{m as default};