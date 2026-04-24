import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-D3yXdDgY.js";import{M as l,C as t,a as r}from"./index-Pz4U8Yps.js";import{C as d,a as c,b as i}from"./CardCheckbox.stories-BMwsc5wm.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BkaJiA2G.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./LoaderCommon-DCg8_8er.js";import"./home-BuLaEOyh.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d,name:"CardCheckbox"}),`
`,e.jsx(n.h1,{id:"cardcheckbox-components",children:"CardCheckbox components"}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"CardCheckbox"}),"component import it like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { CardCheckbox } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <CardCheckbox
    type="vertical"
    name="city"
    label="Choisissez des villes"
    options={[
      {
        label: "Paris",
        value: "paris",
        icon: homeIcon,
        description: "Capitale de la France",
        subtitle: "Nord",
      },
      {
        label: "Bruxelles",
        value: "bruxelles",
        icon: homeIcon,
        description: "Capitale de la Belgique",
      },
      {
        label: "Lille",
        value: "lille",
        icon: homeIcon,
        checked: true,
      },
    ]}
  />
);
`})}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsxs(n.p,{children:["The CardCheckbox component has 2 types: ",e.jsx(n.code,{children:"vertical"})," (default) and ",e.jsx(n.code,{children:"horizontal"}),`.
You can see them in action in the stories below.`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"cardcheckbox-with-checkboxtext",children:"CardCheckbox with CheckboxText"}),`
`,e.jsxs(n.p,{children:[`The CardCheckbox component can also use the CheckboxText for the options.
You have to set the `,e.jsx(n.code,{children:"mode"})," prop to ",e.jsx(n.code,{children:"text"})," and provide the options with the ",e.jsx(n.code,{children:"description"})," and ",e.jsx(n.code,{children:"subtitle"})," properties."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { CardCheckbox } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <CardCheckbox
    type="vertical"
    name="city"
    label="Choisissez des villes"
    mode="text"
    options={[
      {
        label: "Paris",
        value: "paris",
        description: "Capitale de la France",
        subtitle: "Nord",
      },
      {
        label: "Bruxelles",
        value: "bruxelles",
        description: "Capitale de la Belgique",
      },
      {
        label: "Lille",
        value: "lille",
        checked: true,
      },
    ]}
  />
);
`})}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(r,{of:i})]})}function M(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{M as default};
