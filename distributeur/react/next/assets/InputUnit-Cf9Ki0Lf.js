import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-D3yXdDgY.js";import{M as o,T as a,P as c,a as l,C as i}from"./index-BqJXDbDb.js";import{S as d,D as p,P as h,T as m}from"./InputUnit.stories-BjqWC4oN.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DkoVaOu-.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./TextInput-BCjylFYM.js";import"./getClassName-C9dUI_Mz.js";function s(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d,title:"Form/Experimental/InputUnit"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"️-experimental-component",children:"⚠️ Experimental Component"}),`
`,e.jsxs(n.p,{children:["This component is ",e.jsx(n.strong,{children:"experimental"}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"InputUnit"})," component displays a unit of measurement or suffix next to an input field. It's commonly used to show currency symbols, percentages, or other measurement units."]}),`
`,e.jsxs(n.p,{children:["This component is designed to be used within an ",e.jsx(n.code,{children:"InputContainer"})," and automatically positions itself in the designated grid area."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"InputUnit"})," component accepts any React children, typically a string representing the unit."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  Input,
  InputContainer,
  InputUnit,
  Label,
} from "@axa-fr/design-system-slash-react/experimental";

const PriceField = () => {
  return (
    <InputContainer>
      <Label htmlFor="price">Price</Label>
      <Input id="price" type="number" />
      <InputUnit>€</InputUnit>
    </InputContainer>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"currency-symbol",children:"Currency Symbol"}),`
`,e.jsx(n.p,{children:"The most common use case is displaying currency symbols."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"percentage",children:"Percentage"}),`
`,e.jsx(n.p,{children:"Display percentage symbols for rate inputs."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"text-unit",children:"Text Unit"}),`
`,e.jsx(n.p,{children:"You can also use longer text descriptions as units."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep unit text concise and clear"}),`
`,e.jsx(n.li,{children:"Use standard symbols when available (€, $, %, etc.)"}),`
`,e.jsx(n.li,{children:"Consider internationalization when displaying units"}),`
`,e.jsx(n.li,{children:"Use semantic HTML for complex units if needed"}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The unit is displayed as a ",e.jsx(n.code,{children:"<span>"})," element and is read by screen readers as part of the form field context. Ensure that the input label clearly indicates what the unit represents for better accessibility."]})]})}function v(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{v as default};
