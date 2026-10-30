import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,f as a,g as o,h as s,l as c,m as l}from"./iframe-CjUrzS1v.js";import{a as u,i as d,n as f,r as p,t as m}from"./Input.stories-CPmxPn9H.js";function h(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:f,title:`Form/Experimental/Input`}),`
`,(0,_.jsx)(l,{}),`
`,(0,_.jsx)(t.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,_.jsxs)(t.p,{children:[`This component is `,(0,_.jsx)(t.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,_.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`Input`}),` component is a low-level form input component that provides a styled HTML input element. It serves as the foundation for more complex input components like `,(0,_.jsx)(t.code,{children:`TextInput`}),`.`]}),`
`,(0,_.jsxs)(t.p,{children:[`This component is a wrapper around the native HTML `,(0,_.jsx)(t.code,{children:`input`}),` element with predefined styles and accessibility features. It's typically used in combination with other form components like `,(0,_.jsx)(t.code,{children:`Label`}),`, `,(0,_.jsx)(t.code,{children:`InputContainer`}),`, and `,(0,_.jsx)(t.code,{children:`InputUnit`}),` to create complete form fields.`]}),`
`,(0,_.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,_.jsx)(a,{}),`
`,(0,_.jsx)(c,{}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`Input`}),` component forwards all props to the underlying HTML input element, making it fully compatible with standard input attributes.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { Input } from "@axa-fr/canopee-react/distributeur/experimental";

const MyComponent = () => {
  return <Input type="text" placeholder="Enter your name" />;
};
`})}),`
`,(0,_.jsx)(t.h2,{id:`states`,children:`States`}),`
`,(0,_.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,_.jsxs)(t.p,{children:[`Set the `,(0,_.jsx)(t.code,{children:`disabled`}),` prop to true to disable the input field.`]}),`
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`required`,children:`Required`}),`
`,(0,_.jsxs)(t.p,{children:[`Set the `,(0,_.jsx)(t.code,{children:`required`}),` prop to mark the input as required.`]}),`
`,(0,_.jsx)(r,{of:d}),`
`,(0,_.jsx)(t.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,_.jsxs)(t.p,{children:[`Use the `,(0,_.jsx)(t.code,{children:`aria-invalid`}),` attribute to mark the input as invalid. This will apply error styling.`]}),`
`,(0,_.jsx)(r,{of:p}),`
`,(0,_.jsx)(t.h2,{id:`form-integration`,children:`Form Integration`}),`
`,(0,_.jsxs)(t.p,{children:[`This component can be used with form libraries like `,(0,_.jsx)(t.a,{href:`https://react-hook-form.com/`,rel:`nofollow`,children:`react-hook-form`}),` or `,(0,_.jsx)(t.a,{href:`https://formik.org/`,rel:`nofollow`,children:`Formik`}),`. It supports controlled and uncontrolled usage patterns and forwards refs properly.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { Input } from "@axa-fr/canopee-react/distributeur/experimental";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Input {...register("fieldName")} />
    </form>
  );
};
`})})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),o(),s(),u()})))()}v();export{g as default};