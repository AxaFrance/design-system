import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-D3yXdDgY.js";import{M as r,T as a,P as l,a as c,C as i}from"./index-BqJXDbDb.js";import{S as d,H as h,V as m,W as p}from"./InputContainer.stories-6_5EyS9i.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DkoVaOu-.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./TextInput-BCjylFYM.js";import"./getClassName-C9dUI_Mz.js";function o(t){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:d,title:"Form/Experimental/InputContainer"}),`
`,n.jsx(a,{}),`
`,n.jsx(e.h2,{id:"️-experimental-component",children:"⚠️ Experimental Component"}),`
`,n.jsxs(e.p,{children:["This component is ",n.jsx(e.strong,{children:"experimental"}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"InputContainer"})," component is a layout component that manages the positioning of form elements using CSS Grid. It coordinates the display of labels, inputs, units, and messages in either horizontal or vertical layouts."]}),`
`,n.jsxs(e.p,{children:["This component is essential for building consistent form layouts and is typically used to wrap ",n.jsx(e.code,{children:"Label"}),", ",n.jsx(e.code,{children:"Input"}),", ",n.jsx(e.code,{children:"InputUnit"}),", and ",n.jsx(e.code,{children:"ItemMessage"})," components together."]}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(l,{}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"InputContainer"})," component uses CSS Grid to arrange its children. It automatically positions elements based on their CSS class names (grid areas)."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  Input,
  InputContainer,
  InputUnit,
  Label,
} from "@axa-fr/design-system-slash-react/experimental";

const MyFormField = () => {
  return (
    <InputContainer>
      <Label htmlFor="amount">Amount</Label>
      <Input id="amount" type="number" />
      <InputUnit>€</InputUnit>
    </InputContainer>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"layout-options",children:"Layout Options"}),`
`,n.jsx(e.h3,{id:"horizontal-layout-default",children:"Horizontal Layout (Default)"}),`
`,n.jsx(e.p,{children:"By default, the container arranges elements horizontally with the label, input, and unit on the same row."}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h3,{id:"vertical-layout",children:"Vertical Layout"}),`
`,n.jsxs(e.p,{children:["Set the ",n.jsx(e.code,{children:"vertical"})," prop to true to stack the label above the input."]}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h3,{id:"without-unit",children:"Without Unit"}),`
`,n.jsx(e.p,{children:"The unit element is optional. You can omit it when not needed."}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.h2,{id:"grid-areas",children:"Grid Areas"}),`
`,n.jsx(e.p,{children:"The container defines the following grid areas that child components automatically fill:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"label"}),": Filled by ",n.jsx(e.code,{children:"Label"})," components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"input"}),": Filled by ",n.jsx(e.code,{children:"Input"})," components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"unit"}),": Filled by ",n.jsx(e.code,{children:"InputUnit"})," components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"helper-message"}),": Filled by ",n.jsx(e.code,{children:"ItemMessage"})," components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"error-message"}),": Additional area for error messages"]}),`
`]}),`
`,n.jsx(e.p,{children:"Child components are positioned automatically based on their CSS class names. This makes the container flexible and easy to compose with different combinations of form elements."}),`
`,n.jsx(e.h2,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:["You can pass a custom ",n.jsx(e.code,{children:"className"})," to override or extend the default styling:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<InputContainer className="my-custom-container">{/* ... */}</InputContainer>
`})})]})}function L(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{L as default};
