import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CjUrzS1v.js";import{n as c,r as l,t as u}from"./Textarea.stories-BEzx5ooX.js";import{r as d,t as f}from"./TextareaInput.stories-DKZoH1Xk.js";function p(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(t.ol,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#textarea`,children:`Textarea`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#textareainput`,children:`TextareaInput`})}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`textarea`,children:`Textarea`}),`
`,(0,h.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`import { Textarea } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`const TextareaReturn = () => (
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
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(s,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`textareainput`,children:`TextareaInput`}),`
`,(0,h.jsx)(t.h3,{id:`import-1`,children:`Import`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`import {
  MessageTypes,
  TextareaInput,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(t.h3,{id:`use-1`,children:`Use`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`const TextareaInputReturn = () => (
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
`,(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(s,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`required`,children:`Required`}),`
`,(0,h.jsxs)(t.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,h.jsx)(t.code,{children:`required`}),` prop to `,(0,h.jsx)(t.code,{children:`true`}),`.`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),a(),o(),l(),d()})))()}g();export{m as default};