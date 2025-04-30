import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BJaai1kI.js";import{M as l,C as i,a as t}from"./index-CtTu6wxz.js";import{R as d,a as s}from"./Radio.stories-wWuHr1Qu.js";import{RadioSelectStory as r}from"./RadioSelect.stories-BkNkDJtD.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BkmMJ14J.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./CheckboxCardLF-BlNoDL9I.js";import"./constants-CMDXgj10.js";import"./home-BuLaEOyh.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(n.h1,{id:"radio-components",children:"Radio components"}),`
`,e.jsx(n.h2,{id:"radio",children:"Radio"}),`
`,e.jsx(n.h3,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Radio"}),"component import it like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Radio } from "@axa-fr/design-system-look-and-feel-react/";

const MyComponent = () => (
  <Radio
    name="name"
    value="value"
    label="J'accepte de fournir à AXA mes coordonnées ainsi que les données  relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra  me contacter pour m'accompagner."
  />
);
`})}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h2,{id:"radioselect",children:"RadioSelect"}),`
`,e.jsx(n.h3,{id:"how-to-use-1",children:"How to use"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"RadioSelect"}),"component import it like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { RadioSelect } from "@axa-fr/design-system-look-and-feel-react";

const MyComponent = () => (
  <RadioSelect
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
`,e.jsx(n.h3,{id:"modes",children:"Modes"}),`
`,e.jsxs(n.p,{children:["The RadioSelect component has 2 modes: ",e.jsx(n.code,{children:"vertical"})," (default) and ",e.jsx(n.code,{children:"horizontal"}),`.
You can see them in action in the stories below.`]}),`
`,e.jsx(n.p,{children:"Select Radio"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(t,{of:r})]})}function y(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{y as default};
