import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-D3yXdDgY.js";import"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";import{M as s,T as a,P as l,a as c,C as r}from"./index-BqJXDbDb.js";import{S as h,D as p,R as d,E as m,W as u}from"./TextInput.stories-C3Fa-AYS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./iframe-DkoVaOu-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./TextInput-BCjylFYM.js";import"./index-CH2Su9EI.js";function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h,title:"Form/Experimental/TextInput"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"️-experimental-component",children:"⚠️ Experimental Component"}),`
`,e.jsxs(n.p,{children:["This component is ",e.jsx(n.strong,{children:"experimental"}),` and may change in future releases. You can however use it in your projects, but be aware that the API might change.
We welcome your feedback and contributions to improve this component.`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"usage-with-form-libraries",children:"Usage with form libraries"}),`
`,e.jsxs(n.p,{children:["This component can be used with form libraries like ",e.jsx(n.a,{href:"https://react-hook-form.com/",rel:"nofollow",children:"react-hook-form"})," or ",e.jsx(n.a,{href:"https://formik.org/",rel:"nofollow",children:"Formik"}),". It supports controlled and uncontrolled usage patterns."]}),`
`,e.jsx(n.p,{children:"You can pass a ref to the component to access the underlying input element, which is useful for form libraries that require direct access to the input."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextInput } from "@axa-fr/canopee-react/distributeur/experimental";
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
`,e.jsx(n.h2,{id:"customization-examples",children:"Customization examples"}),`
`,e.jsx(n.h3,{id:"disabled-input",children:"Disabled Input"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"disabled"})," prop to true to disable the input field."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"rich-label",children:"Rich Label"}),`
`,e.jsxs(n.p,{children:["If you need to display a label with HTML content, you can pass a ReactNode in the ",e.jsx(n.code,{children:"label"})," prop."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h3,{id:"error-message",children:"Error Message"}),`
`,e.jsxs(n.p,{children:["If you want to display an error message, you can use the ",e.jsx(n.code,{children:"error"}),` prop.
This will render the error message below the input field, and apply the appropriate styles to indicate an error state. The input will also be marked as `,e.jsx(n.code,{children:"aria-invalid"}),"."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"with-unit",children:"With Unit"}),`
`,e.jsxs(n.p,{children:["If you want to display a unit next to the input field, you can use the ",e.jsx(n.code,{children:"rightContent"})," prop. It can be a string or a ReactNode. This is useful for inputs that require a unit of measurement, like currency or percentage."]}),`
`,e.jsx(n.p,{children:"It can technically be used to display any content on the right side of the input, such as an icon or a button, however, it is primarily intended for units."}),`
`,e.jsx(r,{of:u})]})}function F(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{F as default};
