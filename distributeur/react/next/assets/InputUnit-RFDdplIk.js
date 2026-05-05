import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,d as r,m as i,p as a,s as o,u as s,w as c}from"./iframe-De-9TtK1.js";import{t as l}from"./mdx-react-shim-BooHXHLT.js";import{DefaultStory as u,PercentageStory as d,TextUnitStory as f,n as p,t as m}from"./InputUnit.stories-By_cZTMY.js";function h(e){let i={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m,title:`Form/Experimental/InputUnit`}),`
`,(0,_.jsx)(a,{}),`
`,(0,_.jsx)(i.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,_.jsxs)(i.p,{children:[`This component is `,(0,_.jsx)(i.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,_.jsx)(i.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsxs)(i.p,{children:[`The `,(0,_.jsx)(i.code,{children:`InputUnit`}),` component displays a unit of measurement or suffix next to an input field. It's commonly used to show currency symbols, percentages, or other measurement units.`]}),`
`,(0,_.jsxs)(i.p,{children:[`This component is designed to be used within an `,(0,_.jsx)(i.code,{children:`InputContainer`}),` and automatically positions itself in the designated grid area.`]}),`
`,(0,_.jsx)(i.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(r,{}),`
`,(0,_.jsx)(n,{}),`
`,(0,_.jsx)(i.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsxs)(i.p,{children:[`The `,(0,_.jsx)(i.code,{children:`InputUnit`}),` component accepts any React children, typically a string representing the unit.`]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-tsx`,children:`import {
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
`,(0,_.jsx)(i.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(i.h3,{id:`currency-symbol`,children:`Currency Symbol`}),`
`,(0,_.jsx)(i.p,{children:`The most common use case is displaying currency symbols.`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(i.h3,{id:`percentage`,children:`Percentage`}),`
`,(0,_.jsx)(i.p,{children:`Display percentage symbols for rate inputs.`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(i.h3,{id:`text-unit`,children:`Text Unit`}),`
`,(0,_.jsx)(i.p,{children:`You can also use longer text descriptions as units.`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(i.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,_.jsxs)(i.ul,{children:[`
`,(0,_.jsx)(i.li,{children:`Keep unit text concise and clear`}),`
`,(0,_.jsx)(i.li,{children:`Use standard symbols when available (€, $, %, etc.)`}),`
`,(0,_.jsx)(i.li,{children:`Consider internationalization when displaying units`}),`
`,(0,_.jsx)(i.li,{children:`Use semantic HTML for complex units if needed`}),`
`]}),`
`,(0,_.jsx)(i.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(i.p,{children:[`The unit is displayed as a `,(0,_.jsx)(i.code,{children:`<span>`}),` element and is read by screen readers as part of the form field context. Ensure that the input label clearly indicates what the unit represents for better accessibility.`]})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=c(),l(),i(),p()}))();export{g as default};