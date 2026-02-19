import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-DSfWgH82.js";import"./index-D1NER0BQ.js";import{S as p,a as t}from"./Slider.stories-DFVpA2BY.js";import{SliderInputStory as r}from"./SliderInput.stories-DeKi2Lmr.js";import{M as l,C as i,a as s}from"./index-_uXN_WwG.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-CPxRtJH0.js";import"./iframe-BNh123Mb.js";import"./DocsRenderer-CFRXHY34-SbgjcJy3.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./EditorialMessage-BmsJa9B6.js";import"./index-63p0MazF.js";import"./Slider-Bs6ZPyaw.js";import"./toConsumableArray-BWYAuU_T.js";import"./index-VGPHIPc6.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:p}),`
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
`,e.jsx(s,{of:r})]})}function _(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{_ as default};
