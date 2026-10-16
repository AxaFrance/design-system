import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{n as c,r as l,t as u}from"./Number.stories-CdgP1AD5.js";import{r as d,t as f}from"./NumberInput.stories-Bn7Hq8_N.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:`number-field`,children:`Number Field`}),`
`,(0,h.jsx)(t.p,{children:`The Number field component exposes a native HTML number input. Therefore, it accepts a specific range of characters :`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`number [0-9]`}),`
`,(0,h.jsx)(t.li,{children:`"e" for exposant`}),`
`,(0,h.jsx)(t.li,{children:`"," and "." as sperator`}),`
`,(0,h.jsx)(t.li,{children:`negative value with "-"`}),`
`]}),`
`,(0,h.jsxs)(t.ol,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#number`,children:`Number`})}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.a,{href:`#numberinput`,children:`NumberInput`}),`
`,(0,h.jsxs)(t.ol,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#numberinput-required`,children:`NumberInput Required`})}),`
`]}),`
`]}),`
`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`number`,children:`Number`}),`
`,(0,h.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`import { Number } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(t.p,{children:`or`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`import { Number } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`const numberInput = () => (
  <form className="af-form" name="myform">
    <Number
      id="uniqueid"
      name="numberName"
      value={2.9}
      placeholder="0.0"
      onChange={(e) => {
        console.log(e);
      }}
    />
    <HelpMessage message="Enter the place name, ex : Webcenter" />
  </form>
);
export default numberInput;
`})}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(s,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`numberinput`,children:`NumberInput`}),`
`,(0,h.jsx)(t.h3,{id:`import-1`,children:`Import`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`import { NumberInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(t.p,{children:`or`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`import { NumberInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(t.h3,{id:`use-1`,children:`Use`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`const NumberInputReturn = () => (
  <div>
    <form className="af-form" name="myform">
      <NumberInput
        id="uniqueid"
        value={10}
        label="Place name"
        name="placeName"
        onChange={(e) => {
          console.log(e);
        }}
        messageType={MessageTypes.error}
        classNameContainerLabel="col-md-2"
        classNameContainerInput="col-md-10"
        helpMessage="Enter the place name, ex : Webcenter"
      >
        <Help mode={PopoverModes.click} placement={PopoverPlacements.right}>
          Lorem ipsum dolor sit amet
        </Help>
      </NumberInput>
    </form>
  </div>
);
export default NumberInputReturn;
`})}),`
`,(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(t.h3,{id:`numberinput-required`,children:`NumberInput Required`}),`
`,(0,h.jsxs)(t.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,h.jsx)(t.code,{children:`required`}),` prop to `,(0,h.jsx)(t.code,{children:`true`}),`.`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),a(),o(),l(),d()})))()}g();export{m as default};