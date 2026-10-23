import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,f as a,g as o,h as s,l as c,m as l}from"./iframe-DBecIi7S.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./DateInput.stories-DH2DGeFh.js";function _(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{of:g,title:`Form/Experimental/DateInput`}),`
`,(0,y.jsx)(l,{}),`
`,(0,y.jsx)(t.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,y.jsxs)(t.p,{children:[`This component is `,(0,y.jsx)(t.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(a,{}),`
`,(0,y.jsx)(c,{}),`
`,(0,y.jsx)(t.h2,{id:`value-format`,children:`Value format`}),`
`,(0,y.jsxs)(t.p,{children:[`The `,(0,y.jsx)(t.code,{children:`value`}),`, `,(0,y.jsx)(t.code,{children:`defaultValue`}),`, `,(0,y.jsx)(t.code,{children:`min`}),` and `,(0,y.jsx)(t.code,{children:`max`}),` props accept either a `,(0,y.jsx)(t.code,{children:`Date`}),` object or an ISO date string (`,(0,y.jsx)(t.code,{children:`YYYY-MM-DD`}),`).
`,(0,y.jsx)(t.code,{children:`Date`}),` objects are automatically formatted to the format expected by the native date input.`]}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import { DateInput } from "@axa-fr/canopee-react/distributeur/experimental";

<DateInput
  label="Birth date"
  value={new Date("1990-03-28")}
  onChange={onChange}
/>;
`})}),`
`,(0,y.jsx)(t.h2,{id:`usage-with-form-libraries`,children:`Usage with form libraries`}),`
`,(0,y.jsxs)(t.p,{children:[`This component can be used with form libraries like `,(0,y.jsx)(t.a,{href:`https://react-hook-form.com/`,rel:`nofollow`,children:`react-hook-form`}),` or `,(0,y.jsx)(t.a,{href:`https://formik.org/`,rel:`nofollow`,children:`Formik`}),`. It supports controlled and uncontrolled usage patterns.`]}),`
`,(0,y.jsx)(t.p,{children:`You can pass a ref to the component to access the underlying input element, which is useful for form libraries that require direct access to the input.`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import { DateInput } from "@axa-fr/canopee-react/distributeur/experimental";
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
`,(0,y.jsx)(t.h2,{id:`customization-examples`,children:`Customization examples`}),`
`,(0,y.jsx)(t.h3,{id:`disabled-input`,children:`Disabled Input`}),`
`,(0,y.jsxs)(t.p,{children:[`Set the `,(0,y.jsx)(t.code,{children:`disabled`}),` prop to true to disable the input field.`]}),`
`,(0,y.jsx)(r,{of:f}),`
`,(0,y.jsx)(t.h3,{id:`rich-label`,children:`Rich Label`}),`
`,(0,y.jsxs)(t.p,{children:[`If you need to display a label with HTML content, you can pass a ReactNode in the `,(0,y.jsx)(t.code,{children:`label`}),` prop.`]}),`
`,(0,y.jsx)(r,{of:d}),`
`,(0,y.jsx)(t.h3,{id:`error-message`,children:`Error Message`}),`
`,(0,y.jsxs)(t.p,{children:[`If you want to display an error message, you can use the `,(0,y.jsx)(t.code,{children:`errorMessage`}),` prop.
This will render the error message below the input field, and apply the appropriate styles to indicate an error state. The input will also be marked as `,(0,y.jsx)(t.code,{children:`aria-invalid`}),`.`]}),`
`,(0,y.jsx)(r,{of:m}),`
`,(0,y.jsx)(t.h3,{id:`date-boundaries`,children:`Date boundaries`}),`
`,(0,y.jsxs)(t.p,{children:[`Use the `,(0,y.jsx)(t.code,{children:`min`}),` and `,(0,y.jsx)(t.code,{children:`max`}),` props to restrict the range of selectable dates.`]}),`
`,(0,y.jsx)(r,{of:u}),`
`,(0,y.jsx)(t.h3,{id:`with-unit`,children:`With Unit`}),`
`,(0,y.jsxs)(t.p,{children:[`If you want to display a unit next to the input field, you can use the `,(0,y.jsx)(t.code,{children:`contentRight`}),` prop. It can be a string or a ReactNode.`]}),`
`,(0,y.jsx)(r,{of:p})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),o(),s(),h()})))()}b();export{v as default};