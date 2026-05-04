import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CrCwfpcW.js";import{c as n,d as r,m as i,p as a,s as o,u as s,w as c}from"./iframe-B6pS4pdr.js";import{t as l}from"./mdx-react-shim-gngZ-MEU.js";import{HorizontalStory as u,VerticalStory as d,WithoutUnitStory as f,n as p,t as m}from"./InputContainer.stories-CHkVILhp.js";function h(e){let i={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m,title:`Form/Experimental/InputContainer`}),`
`,(0,_.jsx)(a,{}),`
`,(0,_.jsx)(i.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,_.jsxs)(i.p,{children:[`This component is `,(0,_.jsx)(i.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,_.jsx)(i.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsxs)(i.p,{children:[`The `,(0,_.jsx)(i.code,{children:`InputContainer`}),` component is a layout component that manages the positioning of form elements using CSS Grid. It coordinates the display of labels, inputs, units, and messages in either horizontal or vertical layouts.`]}),`
`,(0,_.jsxs)(i.p,{children:[`This component is essential for building consistent form layouts and is typically used to wrap `,(0,_.jsx)(i.code,{children:`Label`}),`, `,(0,_.jsx)(i.code,{children:`Input`}),`, `,(0,_.jsx)(i.code,{children:`InputUnit`}),`, and `,(0,_.jsx)(i.code,{children:`ItemMessage`}),` components together.`]}),`
`,(0,_.jsx)(i.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(r,{}),`
`,(0,_.jsx)(n,{}),`
`,(0,_.jsx)(i.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsxs)(i.p,{children:[`The `,(0,_.jsx)(i.code,{children:`InputContainer`}),` component uses CSS Grid to arrange its children. It automatically positions elements based on their CSS class names (grid areas).`]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-tsx`,children:`import {
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
`,(0,_.jsx)(i.h2,{id:`layout-options`,children:`Layout Options`}),`
`,(0,_.jsx)(i.h3,{id:`horizontal-layout-default`,children:`Horizontal Layout (Default)`}),`
`,(0,_.jsx)(i.p,{children:`By default, the container arranges elements horizontally with the label, input, and unit on the same row.`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(i.h3,{id:`vertical-layout`,children:`Vertical Layout`}),`
`,(0,_.jsxs)(i.p,{children:[`Set the `,(0,_.jsx)(i.code,{children:`vertical`}),` prop to true to stack the label above the input.`]}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(i.h3,{id:`without-unit`,children:`Without Unit`}),`
`,(0,_.jsx)(i.p,{children:`The unit element is optional. You can omit it when not needed.`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(i.h2,{id:`grid-areas`,children:`Grid Areas`}),`
`,(0,_.jsx)(i.p,{children:`The container defines the following grid areas that child components automatically fill:`}),`
`,(0,_.jsxs)(i.ul,{children:[`
`,(0,_.jsxs)(i.li,{children:[(0,_.jsx)(i.strong,{children:`label`}),`: Filled by `,(0,_.jsx)(i.code,{children:`Label`}),` components`]}),`
`,(0,_.jsxs)(i.li,{children:[(0,_.jsx)(i.strong,{children:`input`}),`: Filled by `,(0,_.jsx)(i.code,{children:`Input`}),` components`]}),`
`,(0,_.jsxs)(i.li,{children:[(0,_.jsx)(i.strong,{children:`unit`}),`: Filled by `,(0,_.jsx)(i.code,{children:`InputUnit`}),` components`]}),`
`,(0,_.jsxs)(i.li,{children:[(0,_.jsx)(i.strong,{children:`helper-message`}),`: Filled by `,(0,_.jsx)(i.code,{children:`ItemMessage`}),` components`]}),`
`,(0,_.jsxs)(i.li,{children:[(0,_.jsx)(i.strong,{children:`error-message`}),`: Additional area for error messages`]}),`
`]}),`
`,(0,_.jsx)(i.p,{children:`Child components are positioned automatically based on their CSS class names. This makes the container flexible and easy to compose with different combinations of form elements.`}),`
`,(0,_.jsx)(i.h2,{id:`customization`,children:`Customization`}),`
`,(0,_.jsxs)(i.p,{children:[`You can pass a custom `,(0,_.jsx)(i.code,{children:`className`}),` to override or extend the default styling:`]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-tsx`,children:`<InputContainer className="my-custom-container">{/* ... */}</InputContainer>
`})})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=c(),l(),i(),p()}))();export{g as default};