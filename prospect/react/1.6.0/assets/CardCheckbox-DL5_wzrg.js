import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C8Tw6Lm5.js";import{t as r}from"./mdx-react-shim-B5BYO_WN.js";import{i,l as a,n as o,s}from"./blocks-B2Oe2WTt.js";import{CardCheckboxStory as c,CardCheckboxTextStory as l,n as u,t as d}from"./CardCheckbox.stories-MW2TicDC.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`CardCheckbox`}),`
`,(0,m.jsx)(t.h1,{id:`cardcheckbox-components`,children:`CardCheckbox components`}),`
`,(0,m.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,m.jsxs)(t.p,{children:[`To use the `,(0,m.jsx)(t.code,{children:`CardCheckbox`}),`component import it like this:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { CardCheckbox } from "@axa-fr/canopee-react/prospect";

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
`,(0,m.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsxs)(t.p,{children:[`The CardCheckbox component has 2 types: `,(0,m.jsx)(t.code,{children:`vertical`}),` (default) and `,(0,m.jsx)(t.code,{children:`horizontal`}),`.
You can see them in action in the stories below.`]}),`
`,(0,m.jsx)(o,{of:c}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`cardcheckbox-with-checkboxtext`,children:`CardCheckbox with CheckboxText`}),`
`,(0,m.jsxs)(t.p,{children:[`The CardCheckbox component can also use the CheckboxText for the options.
You have to set the `,(0,m.jsx)(t.code,{children:`mode`}),` prop to `,(0,m.jsx)(t.code,{children:`text`}),` and provide the options with the `,(0,m.jsx)(t.code,{children:`description`}),` and `,(0,m.jsx)(t.code,{children:`subtitle`}),` properties.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { CardCheckbox } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <CardCheckbox
    type="vertical"
    name="city"
    label="Choisissez des villes"
    mode="text"
    options={[
      {
        label: "Paris",
        value: "paris",
        description: "Capitale de la France",
        subtitle: "Nord",
      },
      {
        label: "Bruxelles",
        value: "bruxelles",
        description: "Capitale de la Belgique",
      },
      {
        label: "Lille",
        value: "lille",
        checked: true,
      },
    ]}
  />
);
`})}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(i,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),a(),u()}))();export{p as default};