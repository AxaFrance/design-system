import{j as e}from"./index-DK-fRI8B.js";import{useMDXComponents as s}from"./index-G7nTXt62.js";import{M as i,C as a,a as l}from"./index-DjchEO_v.js";import{C as c,a as r}from"./CardCheckbox.stories-B32n9jpU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-DHYK2gtB.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DropdownCommon-WViU_DaO.js";import"./constants-DIAaw9UC.js";import"./home-BuLaEOyh.js";function t(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"cardcheckbox",children:"CardCheckbox"}),`
`,e.jsx(n.h3,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"CardCheckbox"}),"component import it like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { CardCheckbox } from "@axa-fr/design-system-look-and-feel-react";
# ou
import { CardCheckbox } from "@axa-fr/design-system-apollo-react/lf";


const MyComponent = () => (
  <CardCheckbox
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
`,e.jsxs(n.p,{children:["The CardCheckbox component has 2 modes: ",e.jsx(n.code,{children:"vertical"})," (default) and ",e.jsx(n.code,{children:"horizontal"}),`.
You can see them in action in the stories below.`]}),`
`,e.jsx(n.p,{children:"Select Checkbox"}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(l,{of:r})]})}function v(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{v as default};
