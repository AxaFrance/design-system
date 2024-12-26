import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as m}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5-oX4yH2bX.js";import{ae as l,af as t,ag as r}from"./index-CZU2_GCj.js";import{S as p,a as i}from"./Slider.stories-BHGN0K1a.js";import{SliderInputStory as s}from"./SliderInput.stories-DSASbZDh.js";import"./index-CTjT7uj6.js";import"./iframe-BW26-0SR.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./SliderInput-CA5XZ2N0.js";import"./HelpMessage-B9HNfJNg.js";import"./getComponentClassName-BBtdTm69.js";import"./toConsumableArray-DStN4ZWv.js";function a(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:p}),`
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
`,n.jsx(t,{of:i}),`
`,n.jsx(r,{of:i}),`
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
`,n.jsx(t,{of:s}),`
`,n.jsx(r,{of:s})]})}function w(o={}){const{wrapper:e}={...m(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(a,{...o})}):a(o)}export{w as default};
