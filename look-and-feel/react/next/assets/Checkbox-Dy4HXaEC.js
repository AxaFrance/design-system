import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-BJaai1kI.js";import{M as a,C as t,a as s}from"./index-BEmDlrhg.js";import{C as m,a as r}from"./Checkbox.stories-By5yq8m_.js";import{CheckboxSelectStory as c}from"./CheckboxSelect.stories-Bjb4Nt1x.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BWPf5dMU.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ToggleCommon-CYdO7kJC.js";import"./constants-CfTcsyJm.js";import"./CheckboxSelect-B7vu7lU9.js";import"./home-BuLaEOyh.js";function i(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(n.h1,{id:"checkbox-components",children:"Checkbox components"}),`
`,e.jsx(n.h2,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(n.h3,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Checkbox"}),"component import it like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox } from "@axa-fr/design-system-look-and-feel-react";

const MyComponent = () => (
  <Checkbox
    name="name"
    value="value"
    label="J'accepte de fournir à AXA mes coordonnées ainsi que les données  relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra  me contacter pour m'accompagner."
  />
);
`})}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n.h2,{id:"checkboxselect",children:"CheckboxSelect"}),`
`,e.jsx(n.h3,{id:"how-to-use-1",children:"How to use"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"CheckboxSelect"}),"component import it like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { CheckboxSelect } from "@axa-fr/design-system-look-and-feel-react";

const MyComponent = () => (
  <CheckboxSelect
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
`,e.jsxs(n.p,{children:["The CheckboxSelect component has 2 modes: ",e.jsx(n.code,{children:"vertical"})," (default) and ",e.jsx(n.code,{children:"horizontal"}),`.
You can see them in action in the stories below.`]}),`
`,e.jsx(n.p,{children:"Select Checkbox"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(s,{of:c})]})}function w(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{w as default};
