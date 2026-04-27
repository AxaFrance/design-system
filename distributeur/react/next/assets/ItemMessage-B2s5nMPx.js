import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-D3yXdDgY.js";import{M as t,T as o,P as c,a as l,C as r}from"./index-BqJXDbDb.js";import{S as d,I as h,a as m,b as p}from"./ItemMessage.stories-DjabgUOp.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DkoVaOu-.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./TextInput-BCjylFYM.js";import"./getClassName-C9dUI_Mz.js";function i(n){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d,title:"Form/Experimental/ItemMessage"}),`
`,e.jsx(o,{}),`
`,e.jsx(s.h2,{id:"️-experimental-component",children:"⚠️ Experimental Component"}),`
`,e.jsxs(s.p,{children:["This component is ",e.jsx(s.strong,{children:"experimental"}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"ItemMessage"})," component displays contextual messages for form fields, such as help text, validation errors, or success confirmations. It supports three variants: a neutral help message (default), an error message with an error icon, and a success message with a success icon."]}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"basic-help-message",children:"Basic Help Message"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"ItemMessage"})," component without a variant to display neutral help text:"]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(s.h3,{id:"error-message",children:"Error Message"}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:'variant="error"'})," to display an error message with an error icon:"]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(s.h3,{id:"success-message",children:"Success Message"}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:'variant="success"'})," to display a success message with a success icon:"]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(s.h3,{id:"with-form-fields",children:"With Form Fields"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"ItemMessage"})," component is typically used within an ",e.jsx(s.code,{children:"InputContainer"})," alongside form fields. Use the ",e.jsx(s.code,{children:"id"})," prop to link the message to the input via ",e.jsx(s.code,{children:"aria-describedby"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import {
  Input,
  InputContainer,
  ItemMessage,
  Label,
} from "@axa-fr/canopee-react/distributeur/experimental";

const MyFormField = () => {
  const [error, setError] = useState("");

  return (
    <InputContainer>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" aria-describedby="email-message" />
      <ItemMessage id="email-message" variant="error">
        {error}
      </ItemMessage>
    </InputContainer>
  );
};
`})}),`
`,e.jsx(s.h2,{id:"features",children:"Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Three Variants"}),": Neutral help text, error messages, and success messages"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automatic Icons"}),": Error and success variants automatically display appropriate icons"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Flexible Content"}),": Accepts any React node as children"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Customizable"}),": Supports custom class names for additional styling"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessible"}),": Can be linked to form controls via the ",e.jsx(s.code,{children:"id"})," prop for screen reader support"]}),`
`]}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use the ",e.jsx(s.code,{children:"id"})," prop to create a unique identifier for the message"]}),`
`,e.jsxs(s.li,{children:["Link the message to form controls using ",e.jsx(s.code,{children:"aria-describedby"})," on the input element"]}),`
`,e.jsx(s.li,{children:"Error messages should be announced to screen readers when validation fails"}),`
`,e.jsx(s.li,{children:"Keep messages concise and clear to benefit all users"}),`
`,e.jsx(s.li,{children:"Ensure sufficient color contrast for different message variants"}),`
`]}),`
`,e.jsx(s.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use variants appropriately"}),": Reserve error messages for validation failures, success messages for confirmations, and help messages for guidance"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keep messages concise"}),": Short, clear messages are easier to understand"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Link to inputs"}),": Always use the ",e.jsx(s.code,{children:"id"})," prop and ",e.jsx(s.code,{children:"aria-describedby"})," to associate messages with their corresponding form fields"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dynamic messages"}),": Update messages in response to user interaction (e.g., show error after blur or submit)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Consistent placement"}),": Place messages below their associated form fields for predictable user experience"]}),`
`]}),`
`,e.jsx(s.h2,{id:"customization",children:"Customization"}),`
`,e.jsxs(s.p,{children:["You can customize the component's appearance using the ",e.jsx(s.code,{children:"className"})," prop:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<ItemMessage className="my-custom-class" variant="error">
  Custom styled error message
</ItemMessage>
`})}),`
`,e.jsx(s.p,{children:"The component uses the following CSS classes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"af-item-message"}),": Base class for all variants"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"af-item-message--error"}),': Applied when variant is "error"']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"af-item-message--success"}),': Applied when variant is "success"']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"af-item-message__icon"}),": Applied to the icon element"]}),`
`]})]})}function E(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{E as default};
