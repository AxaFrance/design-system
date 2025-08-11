import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-G7nTXt62.js";import"./index-DNBN1Q5Q.js";import{S as l,a as t}from"./Slider.stories-Vm-xwwTr.js";import{SliderInputStory as r}from"./SliderInput.stories-BpmBZFKO.js";import{M as p,C as i,a as s}from"./index-DEj4JD8P.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BvL8hSYQ.js";import"./iframe-C09A3D4A.js";import"./DocsRenderer-CFRXHY34-CNYLpgKJ.js";import"./react-18-Cg43Tkb0.js";import"./index-BOKuxaB8.js";/* empty css              */import"./Loader-MKkxOcwp.js";import"./index-CG6JzWRx.js";import"./Slider-ER2o7k9J.js";import"./toConsumableArray-CZrnpuDP.js";import"./index-28pPPJTf.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function a(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:l}),`
`,n.jsx(e.h1,{id:"slider",children:"Slider"}),`
`,n.jsx(e.h2,{id:"default-slider",children:"Default Slider"}),`
`,n.jsx(e.p,{children:"To use the Slider, import it like that:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Slider } from "@axa-fr/design-system-slash-react";

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
`,n.jsx(i,{of:t}),`
`,n.jsx(s,{of:t}),`
`,n.jsx(e.h2,{id:"sliderinput",children:"SliderInput"}),`
`,n.jsx(e.p,{children:"To use the SliderInput, import it like that:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { SliderInput } from "@axa-fr/design-system-slash-react";

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
`,n.jsx(i,{of:r}),`
`,n.jsx(s,{of:r})]})}function w(o={}){const{wrapper:e}={...m(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(a,{...o})}):a(o)}export{w as default};
