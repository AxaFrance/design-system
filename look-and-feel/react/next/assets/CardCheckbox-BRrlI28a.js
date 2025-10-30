import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import{M as i,C as a,a as c}from"./index-BZ6eNTzR.js";import{C as l,a as t}from"./CardCheckbox.stories-CX34xCEd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-C4SYf70V.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./ProgressBarCommon-9RdXjFip.js";import"./TimelineVerticalLF-Mc1isiu6.js";import"./home-BuLaEOyh.js";function r(o){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"CardCheckbox"}),`
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
`,e.jsx(c,{of:t})]})}function v(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{v as default};
