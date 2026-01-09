import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DSfWgH82.js";import{M as l,C as n,a as t}from"./index-m36bQL0T.js";import{RadioStory as r}from"./Radio.stories-DuLgYuxi.js";import{RadioInputStory as d}from"./RadioInput.stories-wG6zXUrn.js";import{R as h,a as s}from"./RadioItem.stories-8z2n5ByF.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DeAW-26u.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CardData-CisLDHWb.js";import"./index-VGPHIPc6.js";import"./villa-BhFUGjo6.js";import"./index-P5gXvkWX.js";import"./Popover-CM7ICPQG.js";function a(o){const i={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(i.h1,{id:"radio-components",children:"Radio components"}),`
`,e.jsx(i.h2,{id:"radioitem",children:"RadioItem"}),`
`,e.jsx(i.p,{children:"This is the smallest component for the radio. It only contains the input with a label."}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(i.h2,{id:"radio",children:"Radio"}),`
`,e.jsx(i.p,{children:"This is the a multi-options component. You can use it to create a list of options without the main label."}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(i.h2,{id:"radioinput",children:"RadioInput"}),`
`,e.jsx(i.p,{children:"This is the complete input component. It contains the main label and the list of options."}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(i.h2,{id:"modes",children:"Modes"}),`
`,e.jsxs(i.p,{children:["The Radio component has 4 modes: ",e.jsx(i.code,{children:"default"}),", ",e.jsx(i.code,{children:"classic"})," ",e.jsx(i.code,{children:"cardRadio"})," and ",e.jsx(i.code,{children:"inline"}),`.
You can see them in action in the stories above.`]}),`
`,e.jsx(i.h2,{id:"orientation-radio-card-only",children:"Orientation (Radio Card only)"}),`
`,e.jsxs(i.p,{children:["When ",e.jsx(i.code,{children:"cardRadio"})," mode is selected, 2 orientations are available :"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"vertical"}),", options are vertical cards - ",e.jsx(i.em,{children:"default value"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"horizontal"}),", options are horizontal cards"]}),`
`]}),`
`,e.jsx(i.h2,{id:"customize-width-and-height-radio-card-only",children:"Customize width and height (Radio Card only)"}),`
`,e.jsxs(i.p,{children:["Radio cards can have specific size depending on their content or what's expected in your prototype. You can customize ",e.jsx(i.code,{children:"width"}),"and ",e.jsx(i.code,{children:"height"}),"by your own."]}),`
`,e.jsxs(i.p,{children:["You need to set values on CSS properties ",e.jsx(i.code,{children:"--width-radio-card"})," and/or ",e.jsx(i.code,{children:"--height-radio-card"})]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.custom-size-card {
  --width-radio-card: 15rem;
  --height-radio-card: 95px;
}
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`const options = [
  { label: "Paris", value: "paris", icon: villaIcon },
  { label: "Lille", value: "lille", icon: villaIcon },
  { label: "Madrid", value: "madrid", icon: villaIcon },
];

const MyRadioCard = () => (
  <Radio mode="cardRadio" className="custom-size-card" options={options} />
);
`})}),`
`,e.jsx(i.h2,{id:"required",children:"Required"}),`
`,e.jsxs(i.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(i.code,{children:"required"})," prop to ",e.jsx(i.code,{children:"true"}),"."]}),`
`,e.jsxs(i.p,{children:["Alternatively you can to add to the ",e.jsx(i.code,{children:"classModifier"})," the value ",e.jsx(i.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]})]})}function T(o={}){const{wrapper:i}={...c(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(a,{...o})}):a(o)}export{T as default};
