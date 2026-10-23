import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,f as a,g as o,h as s,l as c,m as l}from"./iframe-DBecIi7S.js";import{a as u,i as d,n as f,r as p,t as m}from"./InputContainer.stories-C9LzIJ44.js";function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:f,title:`Form/Experimental/InputContainer`}),`
`,(0,_.jsx)(l,{}),`
`,(0,_.jsx)(t.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,_.jsxs)(t.p,{children:[`This component is `,(0,_.jsx)(t.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,_.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`InputContainer`}),` component is a layout component that manages the positioning of form elements using CSS Grid. It coordinates the display of labels, inputs, units, and messages in either horizontal or vertical layouts.`]}),`
`,(0,_.jsxs)(t.p,{children:[`This component is essential for building consistent form layouts and is typically used to wrap `,(0,_.jsx)(t.code,{children:`Label`}),`, `,(0,_.jsx)(t.code,{children:`Input`}),`, `,(0,_.jsx)(t.code,{children:`InputUnit`}),`, and `,(0,_.jsx)(t.code,{children:`ItemMessage`}),` components together.`]}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(a,{}),`
`,(0,_.jsx)(c,{}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`InputContainer`}),` component uses CSS Grid to arrange its children. It automatically positions elements based on their CSS class names (grid areas).`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import {
  Input,
  InputContainer,
  InputUnit,
  Label,
} from "@axa-fr/canopee-react/distributeur/experimental";

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
`,(0,_.jsx)(t.h2,{id:`layout-options`,children:`Layout Options`}),`
`,(0,_.jsx)(t.h3,{id:`horizontal-layout-default`,children:`Horizontal Layout (Default)`}),`
`,(0,_.jsx)(t.p,{children:`By default, the container arranges elements horizontally with the label, input, and unit on the same row.`}),`
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`vertical-layout`,children:`Vertical Layout`}),`
`,(0,_.jsxs)(t.p,{children:[`Set the `,(0,_.jsx)(t.code,{children:`vertical`}),` prop to true to stack the label above the input.`]}),`
`,(0,_.jsx)(r,{of:p}),`
`,(0,_.jsx)(t.h3,{id:`without-unit`,children:`Without Unit`}),`
`,(0,_.jsx)(t.p,{children:`The unit element is optional. You can omit it when not needed.`}),`
`,(0,_.jsx)(r,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`grid-areas`,children:`Grid Areas`}),`
`,(0,_.jsx)(t.p,{children:`The container defines the following grid areas that child components automatically fill:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`label`}),`: Filled by `,(0,_.jsx)(t.code,{children:`Label`}),` components`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`input`}),`: Filled by `,(0,_.jsx)(t.code,{children:`Input`}),` components`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`unit`}),`: Filled by `,(0,_.jsx)(t.code,{children:`InputUnit`}),` components`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`helper-message`}),`: Filled by `,(0,_.jsx)(t.code,{children:`ItemMessage`}),` components`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`error-message`}),`: Additional area for error messages`]}),`
`]}),`
`,(0,_.jsx)(t.p,{children:`Child components are positioned automatically based on their CSS class names. This makes the container flexible and easy to compose with different combinations of form elements.`}),`
`,(0,_.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,_.jsxs)(t.p,{children:[`You can pass a custom `,(0,_.jsx)(t.code,{children:`className`}),` to override or extend the default styling:`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<InputContainer className="my-custom-container">{/* ... */}</InputContainer>
`})})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),o(),s(),u()})))()}v();export{g as default};