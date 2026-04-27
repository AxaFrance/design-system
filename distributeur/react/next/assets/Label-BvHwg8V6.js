import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-D3yXdDgY.js";import{M as r,T as l,P as a,a as o,C as d}from"./index-BqJXDbDb.js";import{S as c,R as h}from"./Label.stories-CBsttjHk.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DkoVaOu-.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./TextInput-BCjylFYM.js";import"./getClassName-C9dUI_Mz.js";function t(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,title:"Form/Experimental/Label"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"️-experimental-component",children:"⚠️ Experimental Component"}),`
`,e.jsxs(n.p,{children:["This component is ",e.jsx(n.strong,{children:"experimental"}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Label"})," component provides a styled form label with optional required field indicator. It extends the native HTML ",e.jsx(n.code,{children:"<label>"})," element with consistent styling and accessibility features."]}),`
`,e.jsxs(n.p,{children:["This component is designed to be used within an ",e.jsx(n.code,{children:"InputContainer"})," and automatically positions itself in the designated grid area."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(a,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Label"})," component accepts all standard label attributes and automatically links to form controls via the ",e.jsx(n.code,{children:"htmlFor"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  Input,
  InputContainer,
  Label,
} from "@axa-fr/design-system-slash-react/experimental";

const MyFormField = () => {
  return (
    <InputContainer>
      <Label htmlFor="username">Username</Label>
      <Input id="username" type="text" />
    </InputContainer>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsx(n.h3,{id:"required-field-indicator",children:"Required Field Indicator"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"required"})," prop to display an asterisk (*) after the label text, indicating that the field is required."]}),`
`,e.jsx(d,{of:h}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The required indicator is purely presentational. It does not enforce validation. You must still set the ",e.jsx(n.code,{children:"required"})," attribute on the input element for validation."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Label htmlFor="email" required>
  Email
</Label>
<Input id="email" type="email" required />
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always use the ",e.jsx(n.code,{children:"htmlFor"})," prop to associate the label with its input field"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"htmlFor"})," value should match the ",e.jsx(n.code,{children:"id"})," of the corresponding input"]}),`
`,e.jsx(n.li,{children:"Screen readers will announce the label text when the input receives focus"}),`
`,e.jsxs(n.li,{children:["The required asterisk is marked with ",e.jsx(n.code,{children:"aria-hidden"})," to avoid redundant announcements"]}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep label text clear and concise"}),`
`,e.jsx(n.li,{children:"Use sentence case for label text (capitalize only the first word)"}),`
`,e.jsx(n.li,{children:"Place labels consistently (all above or all beside inputs)"}),`
`,e.jsxs(n.li,{children:["For required fields, use both the visual indicator and the ",e.jsx(n.code,{children:"required"})," attribute on the input"]}),`
`,e.jsx(n.li,{children:"Consider providing help text for complex or ambiguous labels"}),`
`]}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsxs(n.p,{children:["The component accepts all standard label props, including ",e.jsx(n.code,{children:"className"})," for custom styling:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Label htmlFor="field" className="my-custom-label">
  Custom Label
</Label>
`})})]})}function F(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{F as default};
