import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,f as a,g as o,h as s,l as c,m as l}from"./iframe-CjUrzS1v.js";import{a as u,i as d,n as f,r as p,t as m}from"./ItemMessage.stories-CqFmc8tC.js";function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:d,title:`Form/Experimental/ItemMessage`}),`
`,(0,_.jsx)(l,{}),`
`,(0,_.jsx)(t.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,_.jsxs)(t.p,{children:[`This component is `,(0,_.jsx)(t.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,_.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`ItemMessage`}),` component displays contextual messages for form fields, such as help text, validation errors, or success confirmations. It supports three variants: a neutral help message (default), an error message with an error icon, and a success message with a success icon.`]}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(a,{}),`
`,(0,_.jsx)(c,{}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(t.h3,{id:`basic-help-message`,children:`Basic Help Message`}),`
`,(0,_.jsxs)(t.p,{children:[`Use the `,(0,_.jsx)(t.code,{children:`ItemMessage`}),` component without a variant to display neutral help text:`]}),`
`,(0,_.jsx)(r,{of:f}),`
`,(0,_.jsx)(t.h3,{id:`error-message`,children:`Error Message`}),`
`,(0,_.jsxs)(t.p,{children:[`Set `,(0,_.jsx)(t.code,{children:`variant="error"`}),` to display an error message with an error icon:`]}),`
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`success-message`,children:`Success Message`}),`
`,(0,_.jsxs)(t.p,{children:[`Set `,(0,_.jsx)(t.code,{children:`variant="success"`}),` to display a success message with a success icon:`]}),`
`,(0,_.jsx)(r,{of:p}),`
`,(0,_.jsx)(t.h3,{id:`with-form-fields`,children:`With Form Fields`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`ItemMessage`}),` component is typically used within an `,(0,_.jsx)(t.code,{children:`InputContainer`}),` alongside form fields. Use the `,(0,_.jsx)(t.code,{children:`id`}),` prop to link the message to the input via `,(0,_.jsx)(t.code,{children:`aria-describedby`}),`:`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import {
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
`,(0,_.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Three Variants`}),`: Neutral help text, error messages, and success messages`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Automatic Icons`}),`: Error and success variants automatically display appropriate icons`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Flexible Content`}),`: Accepts any React node as children`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Customizable`}),`: Supports custom class names for additional styling`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Accessible`}),`: Can be linked to form controls via the `,(0,_.jsx)(t.code,{children:`id`}),` prop for screen reader support`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`Use the `,(0,_.jsx)(t.code,{children:`id`}),` prop to create a unique identifier for the message`]}),`
`,(0,_.jsxs)(t.li,{children:[`Link the message to form controls using `,(0,_.jsx)(t.code,{children:`aria-describedby`}),` on the input element`]}),`
`,(0,_.jsx)(t.li,{children:`Error messages should be announced to screen readers when validation fails`}),`
`,(0,_.jsx)(t.li,{children:`Keep messages concise and clear to benefit all users`}),`
`,(0,_.jsx)(t.li,{children:`Ensure sufficient color contrast for different message variants`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Use variants appropriately`}),`: Reserve error messages for validation failures, success messages for confirmations, and help messages for guidance`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Keep messages concise`}),`: Short, clear messages are easier to understand`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Link to inputs`}),`: Always use the `,(0,_.jsx)(t.code,{children:`id`}),` prop and `,(0,_.jsx)(t.code,{children:`aria-describedby`}),` to associate messages with their corresponding form fields`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Dynamic messages`}),`: Update messages in response to user interaction (e.g., show error after blur or submit)`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Consistent placement`}),`: Place messages below their associated form fields for predictable user experience`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,_.jsxs)(t.p,{children:[`You can customize the component's appearance using the `,(0,_.jsx)(t.code,{children:`className`}),` prop:`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<ItemMessage className="my-custom-class" variant="error">
  Custom styled error message
</ItemMessage>
`})}),`
`,(0,_.jsx)(t.p,{children:`The component uses the following CSS classes:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`af-item-message`}),`: Base class for all variants`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`af-item-message--error`}),`: Applied when variant is "error"`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`af-item-message--success`}),`: Applied when variant is "success"`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`af-item-message__icon`}),`: Applied to the icon element`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),o(),s(),u()})))()}v();export{g as default};