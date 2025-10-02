import{j as e}from"./index-C1mcBe1y.js";import{useMDXComponents as s}from"./index-G7nTXt62.js";import{M as i,C as a,a as c}from"./index-B4eerBIc.js";import{C as l,a as t}from"./CardCheckbox.stories-QZ09_Nwh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-D3vkhsvm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./TimelineVerticalLF-DcdxnoW7.js";import"./home-BuLaEOyh.js";function r(o){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"CardCheckbox"}),`
`,e.jsx(n.h2,{id:"cardcheckbox-components",children:"CardCheckbox components"}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"CardCheckbox"}),"component import it like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { CardCheckbox } from "@axa-fr/design-system-apollo-react/lf";

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
`,e.jsxs(n.p,{children:["The CardCheckbox component has 2 modes: ",e.jsx(n.code,{children:"vertical"})," (default) and ",e.jsx(n.code,{children:"horizontal"}),`.
You can see them in action in the stories below.`]}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(c,{of:t})]})}function g(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{g as default};
