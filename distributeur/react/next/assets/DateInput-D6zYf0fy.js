import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-BXl9jkys.js";import{c as n,d as r,m as i,p as a,s as o,u as s,w as c}from"./iframe-PYnMZM5z.js";import{t as l}from"./mdx-react-shim-7nYgz6d8.js";import{Disabled as u,ErrorStory as d,RichLabel as f,WithBoundaries as p,WithUnit as m,n as h,t as g}from"./DateInput.stories-DSN-Mg77.js";function _(e){let i={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{of:g,title:`Form/Experimental/DateInput`}),`
`,(0,y.jsx)(a,{}),`
`,(0,y.jsx)(i.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,y.jsxs)(i.p,{children:[`This component is `,(0,y.jsx)(i.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,y.jsx)(i.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(r,{}),`
`,(0,y.jsx)(n,{}),`
`,(0,y.jsx)(i.h2,{id:`value-format`,children:`Value format`}),`
`,(0,y.jsxs)(i.p,{children:[`The `,(0,y.jsx)(i.code,{children:`value`}),`, `,(0,y.jsx)(i.code,{children:`defaultValue`}),`, `,(0,y.jsx)(i.code,{children:`min`}),` and `,(0,y.jsx)(i.code,{children:`max`}),` props accept either a `,(0,y.jsx)(i.code,{children:`Date`}),` object or an ISO date string (`,(0,y.jsx)(i.code,{children:`YYYY-MM-DD`}),`).
`,(0,y.jsx)(i.code,{children:`Date`}),` objects are automatically formatted to the format expected by the native date input.`]}),`
`,(0,y.jsx)(i.pre,{children:(0,y.jsx)(i.code,{className:`language-tsx`,children:`import { DateInput } from "@axa-fr/canopee-react/distributeur/experimental";

<DateInput
  label="Birth date"
  value={new Date("1990-03-28")}
  onChange={onChange}
/>;
`})}),`
`,(0,y.jsx)(i.h2,{id:`usage-with-form-libraries`,children:`Usage with form libraries`}),`
`,(0,y.jsxs)(i.p,{children:[`This component can be used with form libraries like `,(0,y.jsx)(i.a,{href:`https://react-hook-form.com/`,rel:`nofollow`,children:`react-hook-form`}),` or `,(0,y.jsx)(i.a,{href:`https://formik.org/`,rel:`nofollow`,children:`Formik`}),`. It supports controlled and uncontrolled usage patterns.`]}),`
`,(0,y.jsx)(i.p,{children:`You can pass a ref to the component to access the underlying input element, which is useful for form libraries that require direct access to the input.`}),`
`,(0,y.jsx)(i.pre,{children:(0,y.jsx)(i.code,{className:`language-tsx`,children:`import { DateInput } from "@axa-fr/canopee-react/distributeur/experimental";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DateInput label="Birth date" {...register("birthDate")} />
      <button type="submit">Submit</button>
    </form>
  );
};
`})}),`
`,(0,y.jsx)(i.h2,{id:`customization-examples`,children:`Customization examples`}),`
`,(0,y.jsx)(i.h3,{id:`disabled-input`,children:`Disabled Input`}),`
`,(0,y.jsxs)(i.p,{children:[`Set the `,(0,y.jsx)(i.code,{children:`disabled`}),` prop to true to disable the input field.`]}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(i.h3,{id:`rich-label`,children:`Rich Label`}),`
`,(0,y.jsxs)(i.p,{children:[`If you need to display a label with HTML content, you can pass a ReactNode in the `,(0,y.jsx)(i.code,{children:`label`}),` prop.`]}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(i.h3,{id:`error-message`,children:`Error Message`}),`
`,(0,y.jsxs)(i.p,{children:[`If you want to display an error message, you can use the `,(0,y.jsx)(i.code,{children:`errorMessage`}),` prop.
This will render the error message below the input field, and apply the appropriate styles to indicate an error state. The input will also be marked as `,(0,y.jsx)(i.code,{children:`aria-invalid`}),`.`]}),`
`,(0,y.jsx)(o,{of:d}),`
`,(0,y.jsx)(i.h3,{id:`date-boundaries`,children:`Date boundaries`}),`
`,(0,y.jsxs)(i.p,{children:[`Use the `,(0,y.jsx)(i.code,{children:`min`}),` and `,(0,y.jsx)(i.code,{children:`max`}),` props to restrict the range of selectable dates.`]}),`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(i.h3,{id:`with-unit`,children:`With Unit`}),`
`,(0,y.jsxs)(i.p,{children:[`If you want to display a unit next to the input field, you can use the `,(0,y.jsx)(i.code,{children:`contentRight`}),` prop. It can be a string or a ReactNode.`]}),`
`,(0,y.jsx)(o,{of:m})]})}function v(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,y.jsx)(n,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=c(),l(),i(),h()}))();export{v as default};