import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5-oX4yH2bX.js";import{ae as a,af as i,ag as m}from"./index-CZU2_GCj.js";import{N as l,a as s}from"./Number.stories-DZQ_x0JE.js";import{NumberInputStory as c}from"./NumberInput.stories-iJ3JA11i.js";import"./index-CTjT7uj6.js";import"./iframe-BW26-0SR.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./Number-mDHl-xrJ.js";/* empty css             */import"./getComponentClassName-BBtdTm69.js";import"./HelpMessage-B9HNfJNg.js";import"./NumberInput-DaJ4fH8-.js";/* empty css                 */import"./useInputClassModifier-B4SXY78l.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"number-field",children:"Number Field"}),`
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
`,e.jsx(a,{of:l}),`
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
`,e.jsx(i,{of:s}),`
`,e.jsx(m,{of:s}),`
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
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"numberinput-required",children:"NumberInput Required"}),`
`,e.jsxs(n.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(n.code,{children:"required"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively you can to add to the ",e.jsx(n.code,{children:"classModifier"})," the value ",e.jsx(n.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]})]})}function E(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{E as default};
