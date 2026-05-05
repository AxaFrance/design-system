import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,d as r,m as i,p as a,s as o,u as s,w as c}from"./iframe-De-9TtK1.js";import{t as l}from"./mdx-react-shim-BooHXHLT.js";import{n as u}from"./distributeur-Ct4qDp97.js";import{Disabled as d,ErrorStory as f,RichLabel as p,WithUnit as m,n as h,t as g}from"./TextInput.stories-CzP0EO6s.js";var _=e((()=>{u()}));function v(e){let i={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{of:g,title:`Form/Experimental/TextInput`}),`
`,(0,b.jsx)(a,{}),`
`,(0,b.jsx)(i.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,b.jsxs)(i.p,{children:[`This component is `,(0,b.jsx)(i.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,b.jsx)(i.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(r,{}),`
`,(0,b.jsx)(n,{}),`
`,(0,b.jsx)(i.h2,{id:`usage-with-form-libraries`,children:`Usage with form libraries`}),`
`,(0,b.jsxs)(i.p,{children:[`This component can be used with form libraries like `,(0,b.jsx)(i.a,{href:`https://react-hook-form.com/`,rel:`nofollow`,children:`react-hook-form`}),` or `,(0,b.jsx)(i.a,{href:`https://formik.org/`,rel:`nofollow`,children:`Formik`}),`. It supports controlled and uncontrolled usage patterns.`]}),`
`,(0,b.jsx)(i.p,{children:`You can pass a ref to the component to access the underlying input element, which is useful for form libraries that require direct access to the input.`}),`
`,(0,b.jsx)(i.pre,{children:(0,b.jsx)(i.code,{className:`language-tsx`,children:`import { TextInput } from "@axa-fr/canopee-react/distributeur/experimental";
import { useForm } from "react-hook-form";
const MyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput label="My Input" {...register("myInput")} />
      <button type="submit">Submit</button>
    </form>
  );
};
`})}),`
`,(0,b.jsx)(i.h2,{id:`customization-examples`,children:`Customization examples`}),`
`,(0,b.jsx)(i.h3,{id:`disabled-input`,children:`Disabled Input`}),`
`,(0,b.jsxs)(i.p,{children:[`Set the `,(0,b.jsx)(i.code,{children:`disabled`}),` prop to true to disable the input field.`]}),`
`,(0,b.jsx)(o,{of:d}),`
`,(0,b.jsx)(i.h3,{id:`rich-label`,children:`Rich Label`}),`
`,(0,b.jsxs)(i.p,{children:[`If you need to display a label with HTML content, you can pass a ReactNode in the `,(0,b.jsx)(i.code,{children:`label`}),` prop.`]}),`
`,(0,b.jsx)(o,{of:p}),`
`,(0,b.jsx)(i.h3,{id:`error-message`,children:`Error Message`}),`
`,(0,b.jsxs)(i.p,{children:[`If you want to display an error message, you can use the `,(0,b.jsx)(i.code,{children:`error`}),` prop.
This will render the error message below the input field, and apply the appropriate styles to indicate an error state. The input will also be marked as `,(0,b.jsx)(i.code,{children:`aria-invalid`}),`.`]}),`
`,(0,b.jsx)(o,{of:f}),`
`,(0,b.jsx)(i.h3,{id:`with-unit`,children:`With Unit`}),`
`,(0,b.jsxs)(i.p,{children:[`If you want to display a unit next to the input field, you can use the `,(0,b.jsx)(i.code,{children:`rightContent`}),` prop. It can be a string or a ReactNode. This is useful for inputs that require a unit of measurement, like currency or percentage.`]}),`
`,(0,b.jsx)(i.p,{children:`It can technically be used to display any content on the right side of the input, such as an icon or a button, however, it is primarily intended for units.`}),`
`,(0,b.jsx)(o,{of:m})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=c(),l(),_(),i(),h()}))();export{y as default};