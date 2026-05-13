import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-De-9TtK1.js";import{t as s}from"./mdx-react-shim-BooHXHLT.js";import{NumberStory as c,n as l,t as u}from"./Number.stories-Cj38HKul.js";import{NumberInputStory as d,t as f}from"./NumberInput.stories-Cbh_Dyaj.js";function p(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.h1,{id:`number-field`,children:`Number Field`}),`
`,(0,h.jsx)(r.p,{children:`The Number field component exposes a native HTML number input. Therefore, it accepts a specific range of characters :`}),`
`,(0,h.jsxs)(r.ul,{children:[`
`,(0,h.jsx)(r.li,{children:`number [0-9]`}),`
`,(0,h.jsx)(r.li,{children:`"e" for exposant`}),`
`,(0,h.jsx)(r.li,{children:`"," and "." as sperator`}),`
`,(0,h.jsx)(r.li,{children:`negative value with "-"`}),`
`]}),`
`,(0,h.jsxs)(r.ol,{children:[`
`,(0,h.jsx)(r.li,{children:(0,h.jsx)(r.a,{href:`#number`,children:`Number`})}),`
`,(0,h.jsxs)(r.li,{children:[(0,h.jsx)(r.a,{href:`#numberinput`,children:`NumberInput`}),`
`,(0,h.jsxs)(r.ol,{children:[`
`,(0,h.jsx)(r.li,{children:(0,h.jsx)(r.a,{href:`#numberinput-required`,children:`NumberInput Required`})}),`
`]}),`
`]}),`
`]}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(r.h2,{id:`number`,children:`Number`}),`
`,(0,h.jsx)(r.h3,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`import { Number } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.p,{children:`or`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`import { Number } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.h3,{id:`use`,children:`Use`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`const numberInput = () => (
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
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n,{of:c}),`
`,(0,h.jsx)(r.h2,{id:`numberinput`,children:`NumberInput`}),`
`,(0,h.jsx)(r.h3,{id:`import-1`,children:`Import`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`import { NumberInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.p,{children:`or`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`import { NumberInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.h3,{id:`use-1`,children:`Use`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`const NumberInputReturn = () => (
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
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(r.h3,{id:`numberinput-required`,children:`NumberInput Required`}),`
`,(0,h.jsxs)(r.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,h.jsx)(r.code,{children:`required`}),` prop to `,(0,h.jsx)(r.code,{children:`true`}),`.`]}),`
`,(0,h.jsxs)(r.p,{children:[`Alternatively you can to add to the `,(0,h.jsx)(r.code,{children:`classModifier`}),` the value `,(0,h.jsx)(r.code,{children:`required`}),`. This behaviour exists to keep backward compatibility but might disapear in the future.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=o(),s(),r(),l(),f()}))();export{m as default};