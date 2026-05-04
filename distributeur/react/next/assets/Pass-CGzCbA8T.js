import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CrCwfpcW.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-B6pS4pdr.js";import{t as s}from"./mdx-react-shim-gngZ-MEU.js";import{PassStory as c,n as l,t as u}from"./Pass.stories-DDuURD0N.js";import{PassInputStory as d,t as f}from"./PassInput.stories-BvCemhYm.js";function p(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.h1,{id:`pass-field`,children:`Pass field`}),`
`,(0,h.jsx)(r.p,{children:`The Pass field component exposes a native HTML password input, with a toggle to display in clear text the password, and a color system to evaluate the strength of the password.`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(r.h2,{id:`pass`,children:`Pass`}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n,{of:c}),`
`,(0,h.jsx)(r.h3,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-ts`,children:`import { Pass } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.h3,{id:`modifiers`,children:`Modifiers`}),`
`,(0,h.jsxs)(`table`,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsx)(`tr`,{children:(0,h.jsx)(`th`,{children:`classModifiers`})})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsx)(`tr`,{children:(0,h.jsx)(`td`,{children:`bad`})}),(0,h.jsx)(`tr`,{children:(0,h.jsx)(`td`,{children:`okay`})}),(0,h.jsx)(`tr`,{children:(0,h.jsx)(`td`,{children:`good`})}),(0,h.jsx)(`tr`,{children:(0,h.jsx)(`td`,{children:`verygood`})}),(0,h.jsx)(`tr`,{children:(0,h.jsx)(`td`,{children:`excellent`})})]})]}),`
`,(0,h.jsx)(r.h3,{id:`use`,children:`Use`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-typescript`,children:`const PassInput = () => (
  <form className="af-form" name="myform">
    <Pass
      id="uniqueid"
      classModifier="good"
      onChange={(e) => {
        console.log(e);
      }}
      onToggleType={() => {
        console.log('your function');
      }}
      name="password"
      type="password"
      value="your value"
    />
  </form>
);
`})}),`
`,(0,h.jsx)(r.h2,{id:`passinput`,children:`PassInput`}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n,{of:d}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-typescript`,children:`import { NumberInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.p,{children:`or`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-typescript`,children:`import { NumberInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.h3,{id:`use-1`,children:`Use`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-javascript`,children:`const PassInputReturn = () => (
  <form className="af-form" name="myform">
    <PassInput
      id="uniqueid"
      name="password"
      value=""
      label="Password"
      onChange={(e) => {
        console.log(e);
      }}
      onToggleType={() => console.log("onToggle")}
      helpMessage="8 characters minimum"
    >
      <Help mode={PopoverModes.click} placement={PopoverPlacements.right}>
        Choose a password
      </Help>
    </PassInput>
  </form>
);
export default PassInputReturn;
`})}),`
`,(0,h.jsx)(r.h3,{id:`passinput-required`,children:`PassInput Required`}),`
`,(0,h.jsxs)(r.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,h.jsx)(r.code,{children:`required`}),` prop to `,(0,h.jsx)(r.code,{children:`true`}),`.`]}),`
`,(0,h.jsxs)(r.p,{children:[`Alternatively you can to add to the `,(0,h.jsx)(r.code,{children:`classModifier`}),` the value `,(0,h.jsx)(r.code,{children:`required`}),`. This behaviour exists to keep backward compatibility but might disapear in the future.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=o(),s(),r(),l(),f()}))();export{m as default};