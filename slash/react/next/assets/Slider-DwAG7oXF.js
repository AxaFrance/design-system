import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-G7nTXt62.js";import"./index-BvnbUSDJ.js";import{S as l,a as t}from"./Slider.stories-BICHOlo3.js";import{SliderInputStory as r}from"./SliderInput.stories-DrbYMe3G.js";import{M as p,C as i,a as s}from"./index-C1Am9llY.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-Br4Xb7ZF.js";import"./iframe-DzqRD9Gq.js";import"./DocsRenderer-CFRXHY34-BS8WfZDK.js";import"./react-18-DOac64BB.js";import"./index-BOKuxaB8.js";import"./Loader-C1uJHYLx.js";/* empty css              */import"./index-BdSKqQiB.js";import"./Slider-DD2-O0lr.js";import"./toConsumableArray-CZrnpuDP.js";import"./index-C2cC0QQF.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function a(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:l}),`
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
