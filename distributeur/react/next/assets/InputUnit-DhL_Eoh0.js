import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,f as a,g as o,h as s,l as c,m as l}from"./iframe-CjUrzS1v.js";import{a as u,i as d,n as f,r as p,t as m}from"./InputUnit.stories-BGxWZ-oM.js";function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:f,title:`Form/Experimental/InputUnit`}),`
`,(0,_.jsx)(l,{}),`
`,(0,_.jsx)(t.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,_.jsxs)(t.p,{children:[`This component is `,(0,_.jsx)(t.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,_.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`InputUnit`}),` component displays a unit of measurement or suffix next to an input field. It's commonly used to show currency symbols, percentages, or other measurement units.`]}),`
`,(0,_.jsxs)(t.p,{children:[`This component is designed to be used within an `,(0,_.jsx)(t.code,{children:`InputContainer`}),` and automatically positions itself in the designated grid area.`]}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(a,{}),`
`,(0,_.jsx)(c,{}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`InputUnit`}),` component accepts any React children, typically a string representing the unit.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import {
  Input,
  InputContainer,
  InputUnit,
  Label,
} from "@axa-fr/canopee-react/distributeur/experimental";

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
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`currency-symbol`,children:`Currency Symbol`}),`
`,(0,_.jsx)(t.p,{children:`The most common use case is displaying currency symbols.`}),`
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`percentage`,children:`Percentage`}),`
`,(0,_.jsx)(t.p,{children:`Display percentage symbols for rate inputs.`}),`
`,(0,_.jsx)(r,{of:p}),`
`,(0,_.jsx)(t.h3,{id:`text-unit`,children:`Text Unit`}),`
`,(0,_.jsx)(t.p,{children:`You can also use longer text descriptions as units.`}),`
`,(0,_.jsx)(r,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Keep unit text concise and clear`}),`
`,(0,_.jsx)(t.li,{children:`Use standard symbols when available (€, $, %, etc.)`}),`
`,(0,_.jsx)(t.li,{children:`Consider internationalization when displaying units`}),`
`,(0,_.jsx)(t.li,{children:`Use semantic HTML for complex units if needed`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`The unit is displayed as a `,(0,_.jsx)(t.code,{children:`<span>`}),` element and is read by screen readers as part of the form field context. Ensure that the input label clearly indicates what the unit represents for better accessibility.`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),o(),s(),u()})))()}v();export{g as default};