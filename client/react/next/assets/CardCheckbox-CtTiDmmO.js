import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-C2Y_FAIX.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-DrPFjFh3.js";import{i as c,n as l,r as u,t as d}from"./CardCheckbox.stories-CVWgLnJD.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:u,name:`CardCheckbox`}),`
`,(0,m.jsx)(n.h1,{id:`cardcheckbox-components`,children:`CardCheckbox components`}),`
`,(0,m.jsx)(n.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,m.jsxs)(n.p,{children:[`To use the `,(0,m.jsx)(n.code,{children:`CardCheckbox`}),`component import it like this:`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { CardCheckbox } from "@axa-fr/canopee-react/client";

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
`,(0,m.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsxs)(n.p,{children:[`The CardCheckbox component has 2 types: `,(0,m.jsx)(n.code,{children:`vertical`}),` (default) and `,(0,m.jsx)(n.code,{children:`horizontal`}),`.
You can see them in action in the stories below.`]}),`
`,(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(t,{of:d}),`
`,(0,m.jsx)(n.h2,{id:`cardcheckbox-with-checkboxtext`,children:`CardCheckbox with CheckboxText`}),`
`,(0,m.jsxs)(n.p,{children:[`The CardCheckbox component can also use the CheckboxText for the options.
You have to set the `,(0,m.jsx)(n.code,{children:`mode`}),` prop to `,(0,m.jsx)(n.code,{children:`text`}),` and provide the options with the `,(0,m.jsx)(n.code,{children:`description`}),` and `,(0,m.jsx)(n.code,{children:`subtitle`}),` properties.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { CardCheckbox } from "@axa-fr/canopee-react/client";

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
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(t,{of:l})]})}function p(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=a(),o(),n(),c()})))()}h();export{p as default};