import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,f as a,g as o,h as s,l as c,m as l}from"./iframe-CUw-2XJG.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./SelectInput.stories-CSwAjwin.js";function v(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{of:u,title:`Form/Experimental/SelectInput`}),`
`,(0,b.jsx)(l,{}),`
`,(0,b.jsx)(t.h2,{id:`️-experimental-component`,children:`⚠️ Experimental Component`}),`
`,(0,b.jsxs)(t.p,{children:[`This component is `,(0,b.jsx)(t.strong,{children:`experimental`}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,(0,b.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(a,{}),`
`,(0,b.jsx)(c,{}),`
`,(0,b.jsx)(t.h2,{id:`options`,children:`Options`}),`
`,(0,b.jsxs)(t.p,{children:[`The options are passed as JSX through the `,(0,b.jsx)(t.code,{children:`options`}),` prop. This lets you render `,(0,b.jsx)(t.code,{children:`<option>`}),` elements and group them with `,(0,b.jsx)(t.code,{children:`<optgroup>`}),`.`]}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { SelectInput } from "@axa-fr/canopee-react/distributeur/experimental";

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
`,(0,b.jsx)(t.h3,{id:`grouped-options`,children:`Grouped options`}),`
`,(0,b.jsx)(r,{of:h}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`<SelectInput
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
`,(0,b.jsx)(t.h2,{id:`usage-with-form-libraries`,children:`Usage with form libraries`}),`
`,(0,b.jsxs)(t.p,{children:[`This component can be used with form libraries like `,(0,b.jsx)(t.a,{href:`https://react-hook-form.com/`,rel:`nofollow`,children:`react-hook-form`}),` or `,(0,b.jsx)(t.a,{href:`https://formik.org/`,rel:`nofollow`,children:`Formik`}),`. It supports controlled and uncontrolled usage patterns.`]}),`
`,(0,b.jsx)(t.p,{children:`You can pass a ref to the component to access the underlying select element, which is useful for form libraries that require direct access to the field.`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { SelectInput } from "@axa-fr/canopee-react/distributeur/experimental";
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
`,(0,b.jsx)(t.h2,{id:`customization-examples`,children:`Customization examples`}),`
`,(0,b.jsx)(t.h3,{id:`disabled-select`,children:`Disabled Select`}),`
`,(0,b.jsxs)(t.p,{children:[`Set the `,(0,b.jsx)(t.code,{children:`disabled`}),` prop to true to disable the select field.`]}),`
`,(0,b.jsx)(r,{of:_}),`
`,(0,b.jsx)(t.h3,{id:`rich-label`,children:`Rich Label`}),`
`,(0,b.jsxs)(t.p,{children:[`If you need to display a label with HTML content, you can pass a ReactNode in the `,(0,b.jsx)(t.code,{children:`label`}),` prop.`]}),`
`,(0,b.jsx)(r,{of:f}),`
`,(0,b.jsx)(t.h3,{id:`error-message`,children:`Error Message`}),`
`,(0,b.jsxs)(t.p,{children:[`If you want to display an error message, you can use the `,(0,b.jsx)(t.code,{children:`errorMessage`}),` prop.
This will render the error message below the select field, and apply the appropriate styles to indicate an error state. The select will also be marked as `,(0,b.jsx)(t.code,{children:`aria-invalid`}),`.`]}),`
`,(0,b.jsx)(r,{of:p}),`
`,(0,b.jsx)(t.h3,{id:`without-placeholder`,children:`Without placeholder`}),`
`,(0,b.jsxs)(t.p,{children:[`By default, an empty option labelled `,(0,b.jsx)(t.code,{children:`- Select -`}),` is rendered first. You can customize it with the `,(0,b.jsx)(t.code,{children:`placeholder`}),` prop, or remove it entirely by passing `,(0,b.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,b.jsx)(r,{of:g}),`
`,(0,b.jsx)(t.h3,{id:`with-unit`,children:`With Unit`}),`
`,(0,b.jsxs)(t.p,{children:[`If you want to display a unit next to the select field, you can use the `,(0,b.jsx)(t.code,{children:`contentRight`}),` prop. It can be a string or a ReactNode.`]}),`
`,(0,b.jsx)(r,{of:m})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),o(),s(),d()})))()}x();export{y as default};