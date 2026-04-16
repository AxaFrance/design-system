import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-D3yXdDgY.js";import"./index-ITpRZIm7.js";import{S as p,a as t}from"./Slider.stories-Bn34rj3x.js";import{SliderInputStory as r}from"./SliderInput.stories-BvnGqU8h.js";import{M as l,C as i,a as s}from"./index-Dx4R3tXQ.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-DEj0pZEM.js";import"./iframe-pGGH7Veo.js";import"./DocsRenderer-CFRXHY34-Cu8QtulW.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./EditorialMessage-2-PygE6c.js";import"./getClassName-C9dUI_Mz.js";import"./index-BjCk13Vd.js";import"./index-CH2Su9EI.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:p}),`
`,e.jsx(n.h1,{id:"slider",children:"Slider"}),`
`,e.jsx(n.h2,{id:"default-slider",children:"Default Slider"}),`
`,e.jsx(n.p,{children:"To use the Slider, import it like that:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Slider } from "@axa-fr/canopee-react/distributeur";

const MyComponent = () => (
  <Slider
    id={id}
    name={name}
    options={options}
    onChangeComplete={({ id, name, value }) => {
      console.log(id, name, value);
    }}
  />
);
`})}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h2,{id:"sliderinput",children:"SliderInput"}),`
`,e.jsx(n.p,{children:"To use the SliderInput, import it like that:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SliderInput } from "@axa-fr/canopee-react/distributeur";

const MyComponent = () => (
  <SliderInput
    id={id}
    name={name}
    label={label}
    options={options}
    onChangeComplete={({ id, name, value }) => {
      console.log(id, name, value);
    }}
    message={message}
    messageType={MessageTypes.error}
  />
);
`})}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(s,{of:r})]})}function N(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{N as default};
