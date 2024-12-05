import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as c}from"./index-FeUjBnvO.js";import{ae as l,af as i,ag as t}from"./index-76RxyfIK.js";import{R as d,a as s}from"./Radio.stories-CAgFBoz7.js";import{RadioSelectStory as r}from"./RadioSelect.stories-D_wAqtGW.js";import"./index-uubelm5h.js";import"./iframe-DZQkH6iP.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./Radio-CYDN5Meu.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./Svg-C4poEASt.js";import"./InputError-BsZAaKA6.js";import"./error-BHKM2E7q.js";import"./home-BuLaEOyh.js";import"./RadioSelect-CY_JYun0.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
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
`,e.jsx(t,{of:r})]})}function q(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{q as default};
