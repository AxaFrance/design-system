import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-D3yXdDgY.js";import{M as s,T as a,P as l,a as d,C as r}from"./index-BqJXDbDb.js";import{S as c,D as p,R as m,I as h}from"./Input.stories-C4N_yRhG.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DkoVaOu-.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./TextInput-BCjylFYM.js";import"./getClassName-C9dUI_Mz.js";function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,title:"Form/Experimental/Input"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"️-experimental-component",children:"⚠️ Experimental Component"}),`
`,e.jsxs(n.p,{children:["This component is ",e.jsx(n.strong,{children:"experimental"}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Input"})," component is a low-level form input component that provides a styled HTML input element. It serves as the foundation for more complex input components like ",e.jsx(n.code,{children:"TextInput"}),"."]}),`
`,e.jsxs(n.p,{children:["This component is a wrapper around the native HTML ",e.jsx(n.code,{children:"input"})," element with predefined styles and accessibility features. It's typically used in combination with other form components like ",e.jsx(n.code,{children:"Label"}),", ",e.jsx(n.code,{children:"InputContainer"}),", and ",e.jsx(n.code,{children:"InputUnit"})," to create complete form fields."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Input"})," component forwards all props to the underlying HTML input element, making it fully compatible with standard input attributes."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Input } from "@axa-fr/design-system-slash-react/experimental";

const MyComponent = () => {
  return <Input type="text" placeholder="Enter your name" />;
};
`})}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"disabled"})," prop to true to disable the input field."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"required"})," prop to mark the input as required."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"aria-invalid"})," attribute to mark the input as invalid. This will apply error styling."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"form-integration",children:"Form Integration"}),`
`,e.jsxs(n.p,{children:["This component can be used with form libraries like ",e.jsx(n.a,{href:"https://react-hook-form.com/",rel:"nofollow",children:"react-hook-form"})," or ",e.jsx(n.a,{href:"https://formik.org/",rel:"nofollow",children:"Formik"}),". It supports controlled and uncontrolled usage patterns and forwards refs properly."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Input } from "@axa-fr/design-system-slash-react/experimental";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Input {...register("fieldName")} />
    </form>
  );
};
`})})]})}function S(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{S as default};
