import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,f as a,g as o,h as s,l as c,m as l}from"./iframe-DBecIi7S.js";import{n as u,r as d,t as f}from"./Label.stories-BLlxV5gv.js";function p(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:f,title:`Form/Experimental/Label`}),`
`,(0,h.jsx)(l,{}),`
`,(0,h.jsx)(t.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,h.jsxs)(t.p,{children:[`This component is `,(0,h.jsx)(t.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,h.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`Label`}),` component provides a styled form label with optional required field indicator. It extends the native HTML `,(0,h.jsx)(t.code,{children:`<label>`}),` element with consistent styling and accessibility features.`]}),`
`,(0,h.jsxs)(t.p,{children:[`This component is designed to be used within an `,(0,h.jsx)(t.code,{children:`InputContainer`}),` and automatically positions itself in the designated grid area.`]}),`
`,(0,h.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(a,{}),`
`,(0,h.jsx)(c,{}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`Label`}),` component accepts all standard label attributes and automatically links to form controls via the `,(0,h.jsx)(t.code,{children:`htmlFor`}),` prop.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import {
  Input,
  InputContainer,
  Label,
} from "@axa-fr/canopee-react/distributeur/experimental";

const MyFormField = () => {
  return (
    <InputContainer>
      <Label htmlFor="username">Username</Label>
      <Input id="username" type="text" />
    </InputContainer>
  );
};
`})}),`
`,(0,h.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,h.jsx)(t.h3,{id:`required-field-indicator`,children:`Required Field Indicator`}),`
`,(0,h.jsxs)(t.p,{children:[`Set the `,(0,h.jsx)(t.code,{children:`required`}),` prop to display an asterisk (*) after the label text, indicating that the field is required.`]}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Note:`}),` The required indicator is purely presentational. It does not enforce validation. You must still set the `,(0,h.jsx)(t.code,{children:`required`}),` attribute on the input element for validation.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<Label htmlFor="email" required>
  Email
</Label>
<Input id="email" type="email" required />
`})}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Always use the `,(0,h.jsx)(t.code,{children:`htmlFor`}),` prop to associate the label with its input field`]}),`
`,(0,h.jsxs)(t.li,{children:[`The `,(0,h.jsx)(t.code,{children:`htmlFor`}),` value should match the `,(0,h.jsx)(t.code,{children:`id`}),` of the corresponding input`]}),`
`,(0,h.jsx)(t.li,{children:`Screen readers will announce the label text when the input receives focus`}),`
`,(0,h.jsxs)(t.li,{children:[`The required asterisk is marked with `,(0,h.jsx)(t.code,{children:`aria-hidden`}),` to avoid redundant announcements`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Keep label text clear and concise`}),`
`,(0,h.jsx)(t.li,{children:`Use sentence case for label text (capitalize only the first word)`}),`
`,(0,h.jsx)(t.li,{children:`Place labels consistently (all above or all beside inputs)`}),`
`,(0,h.jsxs)(t.li,{children:[`For required fields, use both the visual indicator and the `,(0,h.jsx)(t.code,{children:`required`}),` attribute on the input`]}),`
`,(0,h.jsx)(t.li,{children:`Consider providing help text for complex or ambiguous labels`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,h.jsxs)(t.p,{children:[`The component accepts all standard label props, including `,(0,h.jsx)(t.code,{children:`className`}),` for custom styling:`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<Label htmlFor="field" className="my-custom-label">
  Custom Label
</Label>
`})})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),o(),s(),d()})))()}g();export{m as default};