import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,d as r,m as i,p as a,s as o,u as s,w as c}from"./iframe-De-9TtK1.js";import{t as l}from"./mdx-react-shim-BooHXHLT.js";import{RequiredStory as u,n as d,t as f}from"./Label.stories-DN9FTjwq.js";function p(e){let i={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:f,title:`Form/Experimental/Label`}),`
`,(0,h.jsx)(a,{}),`
`,(0,h.jsx)(i.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,h.jsxs)(i.p,{children:[`This component is `,(0,h.jsx)(i.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,h.jsx)(i.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsxs)(i.p,{children:[`The `,(0,h.jsx)(i.code,{children:`Label`}),` component provides a styled form label with optional required field indicator. It extends the native HTML `,(0,h.jsx)(i.code,{children:`<label>`}),` element with consistent styling and accessibility features.`]}),`
`,(0,h.jsxs)(i.p,{children:[`This component is designed to be used within an `,(0,h.jsx)(i.code,{children:`InputContainer`}),` and automatically positions itself in the designated grid area.`]}),`
`,(0,h.jsx)(i.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(r,{}),`
`,(0,h.jsx)(n,{}),`
`,(0,h.jsx)(i.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsxs)(i.p,{children:[`The `,(0,h.jsx)(i.code,{children:`Label`}),` component accepts all standard label attributes and automatically links to form controls via the `,(0,h.jsx)(i.code,{children:`htmlFor`}),` prop.`]}),`
`,(0,h.jsx)(i.pre,{children:(0,h.jsx)(i.code,{className:`language-tsx`,children:`import {
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
`,(0,h.jsx)(i.h2,{id:`features`,children:`Features`}),`
`,(0,h.jsx)(i.h3,{id:`required-field-indicator`,children:`Required Field Indicator`}),`
`,(0,h.jsxs)(i.p,{children:[`Set the `,(0,h.jsx)(i.code,{children:`required`}),` prop to display an asterisk (*) after the label text, indicating that the field is required.`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:`Note:`}),` The required indicator is purely presentational. It does not enforce validation. You must still set the `,(0,h.jsx)(i.code,{children:`required`}),` attribute on the input element for validation.`]}),`
`,(0,h.jsx)(i.pre,{children:(0,h.jsx)(i.code,{className:`language-tsx`,children:`<Label htmlFor="email" required>
  Email
</Label>
<Input id="email" type="email" required />
`})}),`
`,(0,h.jsx)(i.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(i.ul,{children:[`
`,(0,h.jsxs)(i.li,{children:[`Always use the `,(0,h.jsx)(i.code,{children:`htmlFor`}),` prop to associate the label with its input field`]}),`
`,(0,h.jsxs)(i.li,{children:[`The `,(0,h.jsx)(i.code,{children:`htmlFor`}),` value should match the `,(0,h.jsx)(i.code,{children:`id`}),` of the corresponding input`]}),`
`,(0,h.jsx)(i.li,{children:`Screen readers will announce the label text when the input receives focus`}),`
`,(0,h.jsxs)(i.li,{children:[`The required asterisk is marked with `,(0,h.jsx)(i.code,{children:`aria-hidden`}),` to avoid redundant announcements`]}),`
`]}),`
`,(0,h.jsx)(i.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,h.jsxs)(i.ul,{children:[`
`,(0,h.jsx)(i.li,{children:`Keep label text clear and concise`}),`
`,(0,h.jsx)(i.li,{children:`Use sentence case for label text (capitalize only the first word)`}),`
`,(0,h.jsx)(i.li,{children:`Place labels consistently (all above or all beside inputs)`}),`
`,(0,h.jsxs)(i.li,{children:[`For required fields, use both the visual indicator and the `,(0,h.jsx)(i.code,{children:`required`}),` attribute on the input`]}),`
`,(0,h.jsx)(i.li,{children:`Consider providing help text for complex or ambiguous labels`}),`
`]}),`
`,(0,h.jsx)(i.h2,{id:`customization`,children:`Customization`}),`
`,(0,h.jsxs)(i.p,{children:[`The component accepts all standard label props, including `,(0,h.jsx)(i.code,{children:`className`}),` for custom styling:`]}),`
`,(0,h.jsx)(i.pre,{children:(0,h.jsx)(i.code,{className:`language-tsx`,children:`<Label htmlFor="field" className="my-custom-label">
  Custom Label
</Label>
`})})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=c(),l(),i(),d()}))();export{m as default};