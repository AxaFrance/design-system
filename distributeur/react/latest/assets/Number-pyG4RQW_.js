import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import"./index-DR8yJYGf.js";import{N as o,a as i}from"./Number.stories-Bkz_T8xX.js";import{NumberInputStory as c}from"./NumberInput.stories-CDwVaYXT.js";import{M as l,C as a,a as m}from"./index-DT1SFVMa.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-DMX6ghdZ.js";import"./iframe-B_C0-0Vf.js";import"./DocsRenderer-CFRXHY34-CRODGeW8.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./CardData-D-Zc8gNU.js";import"./index-63p0MazF.js";import"./index-VGPHIPc6.js";import"./index-CLDkzSQa.js";import"./Popover-DNB-Ornh.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"number-field",children:"Number Field"}),`
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
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"number",children:"Number"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Number } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Number } from "@axa-fr/canopee-react/distributeur";
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
`,e.jsx(a,{of:i}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(n.h2,{id:"numberinput",children:"NumberInput"}),`
`,e.jsx(n.h3,{id:"import-1",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { NumberInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { NumberInput } from "@axa-fr/canopee-react/distributeur";
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
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h3,{id:"numberinput-required",children:"NumberInput Required"}),`
`,e.jsxs(n.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(n.code,{children:"required"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively you can to add to the ",e.jsx(n.code,{children:"classModifier"})," the value ",e.jsx(n.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]})]})}function H(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{H as default};
