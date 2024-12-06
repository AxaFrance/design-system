import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as l}from"./index-FeUjBnvO.js";import{ae as a,af as t,ag as s}from"./index-76RxyfIK.js";import{C as m,a as r}from"./Checkbox.stories-CJP9RVWP.js";import{CheckboxSelectStory as i}from"./CheckboxSelect.stories-CxXgDYC-.js";import"./index-uubelm5h.js";import"./iframe-DZQkH6iP.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./Checkbox-DPn8M_Uc.js";import"./check_box_outline_blank-caNJpyLE.js";import"./error-BHKM2E7q.js";import"./index-vAxXS4R5.js";import"./Svg-C4poEASt.js";import"./home-BuLaEOyh.js";import"./CheckboxSelect-FCKGgETg.js";function c(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
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
`,e.jsx(t,{of:i}),`
`,e.jsx(s,{of:i})]})}function D(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{D as default};
