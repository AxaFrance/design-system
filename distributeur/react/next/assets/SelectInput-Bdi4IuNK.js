import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-BXl9jkys.js";import{c as n,d as r,m as i,p as a,s as o,u as s,w as c}from"./iframe-PYnMZM5z.js";import{t as l}from"./mdx-react-shim-7nYgz6d8.js";import{Disabled as u,ErrorStory as d,Grouped as f,RichLabel as p,WithUnit as m,WithoutPlaceholder as h,n as g,t as _}from"./SelectInput.stories-Buwv2Z30.js";function v(e){let i={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{of:_,title:`Form/Experimental/SelectInput`}),`
`,(0,b.jsx)(a,{}),`
`,(0,b.jsx)(i.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,b.jsxs)(i.p,{children:[`This component is `,(0,b.jsx)(i.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,b.jsx)(i.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(r,{}),`
`,(0,b.jsx)(n,{}),`
`,(0,b.jsx)(i.h2,{id:`options`,children:`Options`}),`
`,(0,b.jsxs)(i.p,{children:[`The options are passed as JSX through the `,(0,b.jsx)(i.code,{children:`options`}),` prop. This lets you render `,(0,b.jsx)(i.code,{children:`<option>`}),` elements and group them with `,(0,b.jsx)(i.code,{children:`<optgroup>`}),`.`]}),`
`,(0,b.jsx)(i.pre,{children:(0,b.jsx)(i.code,{className:`language-tsx`,children:`import { SelectInput } from "@axa-fr/canopee-react/distributeur/experimental";

<SelectInput
  label="Country"
  options={
    <>
      <option value="fr">France</option>
      <option value="be">Belgique</option>
      <option value="it" disabled>
        Italie
      </option>
    </>
  }
  onChange={onChange}
/>;
`})}),`
`,(0,b.jsx)(i.h3,{id:`grouped-options`,children:`Grouped options`}),`
`,(0,b.jsx)(o,{of:f}),`
`,(0,b.jsx)(i.pre,{children:(0,b.jsx)(i.code,{className:`language-tsx`,children:`<SelectInput
  label="Country"
  options={
    <>
      <optgroup label="Europe">
        <option value="fr">France</option>
        <option value="es">Espagne</option>
      </optgroup>
      <optgroup label="Amérique">
        <option value="us">États-Unis</option>
      </optgroup>
    </>
  }
/>
`})}),`
`,(0,b.jsx)(i.h2,{id:`usage-with-form-libraries`,children:`Usage with form libraries`}),`
`,(0,b.jsxs)(i.p,{children:[`This component can be used with form libraries like `,(0,b.jsx)(i.a,{href:`https://react-hook-form.com/`,rel:`nofollow`,children:`react-hook-form`}),` or `,(0,b.jsx)(i.a,{href:`https://formik.org/`,rel:`nofollow`,children:`Formik`}),`. It supports controlled and uncontrolled usage patterns.`]}),`
`,(0,b.jsx)(i.p,{children:`You can pass a ref to the component to access the underlying select element, which is useful for form libraries that require direct access to the field.`}),`
`,(0,b.jsx)(i.pre,{children:(0,b.jsx)(i.code,{className:`language-tsx`,children:`import { SelectInput } from "@axa-fr/canopee-react/distributeur/experimental";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectInput label="Country" options={options} {...register("country")} />
      <button type="submit">Submit</button>
    </form>
  );
};
`})}),`
`,(0,b.jsx)(i.h2,{id:`customization-examples`,children:`Customization examples`}),`
`,(0,b.jsx)(i.h3,{id:`disabled-select`,children:`Disabled Select`}),`
`,(0,b.jsxs)(i.p,{children:[`Set the `,(0,b.jsx)(i.code,{children:`disabled`}),` prop to true to disable the select field.`]}),`
`,(0,b.jsx)(o,{of:u}),`
`,(0,b.jsx)(i.h3,{id:`rich-label`,children:`Rich Label`}),`
`,(0,b.jsxs)(i.p,{children:[`If you need to display a label with HTML content, you can pass a ReactNode in the `,(0,b.jsx)(i.code,{children:`label`}),` prop.`]}),`
`,(0,b.jsx)(o,{of:p}),`
`,(0,b.jsx)(i.h3,{id:`error-message`,children:`Error Message`}),`
`,(0,b.jsxs)(i.p,{children:[`If you want to display an error message, you can use the `,(0,b.jsx)(i.code,{children:`errorMessage`}),` prop.
This will render the error message below the select field, and apply the appropriate styles to indicate an error state. The select will also be marked as `,(0,b.jsx)(i.code,{children:`aria-invalid`}),`.`]}),`
`,(0,b.jsx)(o,{of:d}),`
`,(0,b.jsx)(i.h3,{id:`without-placeholder`,children:`Without placeholder`}),`
`,(0,b.jsxs)(i.p,{children:[`By default, an empty option labelled `,(0,b.jsx)(i.code,{children:`- Select -`}),` is rendered first. You can customize it with the `,(0,b.jsx)(i.code,{children:`placeholder`}),` prop, or remove it entirely by passing `,(0,b.jsx)(i.code,{children:`null`}),`.`]}),`
`,(0,b.jsx)(o,{of:h}),`
`,(0,b.jsx)(i.h3,{id:`with-unit`,children:`With Unit`}),`
`,(0,b.jsxs)(i.p,{children:[`If you want to display a unit next to the select field, you can use the `,(0,b.jsx)(i.code,{children:`contentRight`}),` prop. It can be a string or a ReactNode.`]}),`
`,(0,b.jsx)(o,{of:m})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=c(),l(),i(),g()}))();export{y as default};