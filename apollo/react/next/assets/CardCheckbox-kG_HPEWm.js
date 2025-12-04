import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import{M as i,C as a,a as c}from"./index-DKHHadyU.js";import{C as l,a as r}from"./CardCheckbox.stories-CTa89nlS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-CbMVGN7F.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./ItemPaginationApollo-chh4BP9L.js";import"./home-BuLaEOyh.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"CardCheckbox"}),`
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
`,e.jsxs(n.p,{children:["The CardCheckbox component has 2 modes: ",e.jsx(n.code,{children:"vertical"})," (default) and ",e.jsx(n.code,{children:"horizontal"}),`.
You can see them in action in the stories below.`]}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(c,{of:r})]})}function y(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{y as default};
