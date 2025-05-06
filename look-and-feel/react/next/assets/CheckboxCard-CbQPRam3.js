import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BJaai1kI.js";import{M as i,C as a,a as l}from"./index-CQkFM6Sh.js";import{C as c,a as r}from"./CheckboxCard.stories-DXSejra6.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CsXdhf9F.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ContentItemMonoLF-D0_1Lemi.js";import"./constants-Bav1AsHf.js";import"./home-BuLaEOyh.js";function t(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"checkboxcard",children:"CheckboxCard"}),`
`,e.jsx(n.h3,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"CheckboxCard"}),"component import it like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { CheckboxCard } from "@axa-fr/design-system-look-and-feel-react";
# ou
import { CheckboxCard } from "@axa-fr/design-system-apollo-react/lf";


const MyComponent = () => (
  <CheckboxCard
    type="vertical"
    options={[
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        name: "paris",
        value: "paris",
        icon: <Home />,
      },
      {
        label: "Bruxelles",
        description: "Capitale de la Belgique",
        name: "bruxelles",
        value: "bruxelles",
        icon: <Home />,
      },
      {
        label: "Lille",
        name: "lille",
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
`,e.jsxs(n.p,{children:["The CheckboxCard component has 2 modes: ",e.jsx(n.code,{children:"vertical"})," (default) and ",e.jsx(n.code,{children:"horizontal"}),`.
You can see them in action in the stories below.`]}),`
`,e.jsx(n.p,{children:"Select Checkbox"}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(l,{of:r})]})}function v(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{v as default};
