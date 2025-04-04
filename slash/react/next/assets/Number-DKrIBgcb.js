import{j as e}from"./index-DK-fRI8B.js";import{useMDXComponents as t}from"./index-G7nTXt62.js";import"./index-jVuSkSw_.js";import{N as o,a as i}from"./Number.stories-BPov12HZ.js";import{NumberInputStory as l}from"./NumberInput.stories-Byb-J70n.js";import{M as m,C as s,a as c}from"./index-GkH5mMKm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./preview-D1KpkOrQ.js";import"./iframe-_qfGYeic.js";import"./DocsRenderer-CFRXHY34-DlNH1WRT.js";import"./react-18-DOac64BB.js";/* empty css              */import"./Loader-Dph_CslH.js";import"./index-C2cC0QQF.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function a(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"number-field",children:"Number Field"}),`
`,e.jsx(n.p,{children:"The Number field component exposes a native HTML number input. Therefore, it accepts a specific range of characters :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"number [0-9]"}),`
`,e.jsx(n.li,{children:'"e" for exposant'}),`
`,e.jsx(n.li,{children:'"," and "." as sperator'}),`
`,e.jsx(n.li,{children:'negative value with "-"'}),`
`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#number",children:"Number"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#numberinput",children:"NumberInput"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#numberinput-required",children:"NumberInput Required"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(n.h2,{id:"number",children:"Number"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Number } from "@axa-fr/design-system";
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Number } from "@axa-fr/design-system/client";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const numberInput = () => (
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
`,e.jsx(s,{of:i}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"numberinput",children:"NumberInput"}),`
`,e.jsx(n.h3,{id:"import-1",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { NumberInput } from "@axa-fr/design-system";
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { NumberInput } from "@axa-fr/design-system/client";
`})}),`
`,e.jsx(n.h3,{id:"use-1",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const NumberInputReturn = () => (
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
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h3,{id:"numberinput-required",children:"NumberInput Required"}),`
`,e.jsxs(n.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(n.code,{children:"required"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively you can to add to the ",e.jsx(n.code,{children:"classModifier"})," the value ",e.jsx(n.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]})]})}function w(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{w as default};
