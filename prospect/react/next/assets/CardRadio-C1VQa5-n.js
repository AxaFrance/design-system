import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DSfWgH82.js";import{M as a,C as s,a as c}from"./index-B-ebDoZy.js";import{C as d,a as i}from"./CardRadio.stories-BKXR_ink.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Pz243Pnu.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./FieldsetApollo-BKmuo9C_.js";/* empty css               */import"./CardRadioApollo-Cpzzasdv.js";import"./CardRadioOptionApollo-DT3PQgl9.js";import"./home-BuLaEOyh.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:d,name:"CardRadio"}),`
`,n.jsx(e.h1,{id:"cardradio-components",children:"CardRadio components"}),`
`,n.jsx(e.h2,{id:"how-to-use",children:"How to use"}),`
`,n.jsxs(e.p,{children:["To use the ",n.jsx(e.code,{children:"CardRadio"}),"component import it like this:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { CardRadio } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <CardRadio
    type="vertical"
    name="city"
    label="Choisissez une ville"
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
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsxs(e.p,{children:["The CardRadio component has 2 modes: ",n.jsx(e.code,{children:"vertical"})," (default) and ",n.jsx(e.code,{children:"horizontal"}),`.
You can see them in action in the stories below.`]}),`
`,n.jsx(s,{of:i}),`
`,n.jsx(c,{of:i})]})}function D(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{D as default};
