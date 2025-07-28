import{j as n}from"./index-C1mcBe1y.js";import{useMDXComponents as r}from"./index-G7nTXt62.js";import{M as a,C as s,a as d}from"./index-Bofzwr3v.js";import{C as c,a as i}from"./CardRadio.stories-B-HoIrxX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-C81tK3tZ.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DropdownCommon-BA-fdrq9.js";import"./home-BuLaEOyh.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsx(e.h1,{id:"cardradio-components",children:"CardRadio components"}),`
`,n.jsx(e.h2,{id:"cardradio",children:"CardRadio"}),`
`,n.jsx(e.h3,{id:"how-to-use",children:"How to use"}),`
`,n.jsxs(e.p,{children:["To use the ",n.jsx(e.code,{children:"CardRadio"}),"component import it like this:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { CardRadio } from "@axa-fr/design-system-apollo-react/lf";

const MyComponent = () => (
  <CardRadio
    type="vertical"
    options={[
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        name: "cities",
        value: "paris",
        icon: <Home />,
      },
      {
        label: "Bruxelles",
        description: "Capitale de la Belgique",
        name: "cities",
        value: "bruxelles",
        icon: <Home />,
      },
      {
        label: "Lille",
        name: "cities",
        value: "lille",
        icon: <Home />,
        disabled: true,
        checked: true,
      },
    ]}
  />
);
`})}),`
`,n.jsx(e.h3,{id:"modes",children:"Modes"}),`
`,n.jsxs(e.p,{children:["The CardRadio component has 2 modes: ",n.jsx(e.code,{children:"vertical"})," (default) and ",n.jsx(e.code,{children:"horizontal"}),`.
You can see them in action in the stories below.`]}),`
`,n.jsx(s,{of:i}),`
`,n.jsx(d,{of:i})]})}function v(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{v as default};
