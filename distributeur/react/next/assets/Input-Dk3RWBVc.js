import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CrCwfpcW.js";import{c as n,d as r,m as i,p as a,s as o,u as s,w as c}from"./iframe-B6pS4pdr.js";import{t as l}from"./mdx-react-shim-gngZ-MEU.js";import{DisabledStory as u,InvalidStory as d,RequiredStory as f,n as p,t as m}from"./Input.stories-kgxLMEL-.js";function h(e){let i={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m,title:`Form/Experimental/Input`}),`
`,(0,_.jsx)(a,{}),`
`,(0,_.jsx)(i.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,_.jsxs)(i.p,{children:[`This component is `,(0,_.jsx)(i.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,_.jsx)(i.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsxs)(i.p,{children:[`The `,(0,_.jsx)(i.code,{children:`Input`}),` component is a low-level form input component that provides a styled HTML input element. It serves as the foundation for more complex input components like `,(0,_.jsx)(i.code,{children:`TextInput`}),`.`]}),`
`,(0,_.jsxs)(i.p,{children:[`This component is a wrapper around the native HTML `,(0,_.jsx)(i.code,{children:`input`}),` element with predefined styles and accessibility features. It's typically used in combination with other form components like `,(0,_.jsx)(i.code,{children:`Label`}),`, `,(0,_.jsx)(i.code,{children:`InputContainer`}),`, and `,(0,_.jsx)(i.code,{children:`InputUnit`}),` to create complete form fields.`]}),`
`,(0,_.jsx)(i.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(r,{}),`
`,(0,_.jsx)(n,{}),`
`,(0,_.jsx)(i.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsxs)(i.p,{children:[`The `,(0,_.jsx)(i.code,{children:`Input`}),` component forwards all props to the underlying HTML input element, making it fully compatible with standard input attributes.`]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-tsx`,children:`import { Input } from "@axa-fr/design-system-slash-react/experimental";

const MyComponent = () => {
  return <Input type="text" placeholder="Enter your name" />;
};
`})}),`
`,(0,_.jsx)(i.h2,{id:`states`,children:`States`}),`
`,(0,_.jsx)(i.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,_.jsxs)(i.p,{children:[`Set the `,(0,_.jsx)(i.code,{children:`disabled`}),` prop to true to disable the input field.`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(i.h3,{id:`required`,children:`Required`}),`
`,(0,_.jsxs)(i.p,{children:[`Set the `,(0,_.jsx)(i.code,{children:`required`}),` prop to mark the input as required.`]}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(i.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,_.jsxs)(i.p,{children:[`Use the `,(0,_.jsx)(i.code,{children:`aria-invalid`}),` attribute to mark the input as invalid. This will apply error styling.`]}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(i.h2,{id:`form-integration`,children:`Form Integration`}),`
`,(0,_.jsxs)(i.p,{children:[`This component can be used with form libraries like `,(0,_.jsx)(i.a,{href:`https://react-hook-form.com/`,rel:`nofollow`,children:`react-hook-form`}),` or `,(0,_.jsx)(i.a,{href:`https://formik.org/`,rel:`nofollow`,children:`Formik`}),`. It supports controlled and uncontrolled usage patterns and forwards refs properly.`]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-tsx`,children:`import { Input } from "@axa-fr/design-system-slash-react/experimental";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Input {...register("fieldName")} />
    </form>
  );
};
`})})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=c(),l(),i(),p()}))();export{g as default};