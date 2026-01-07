import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as c}from"./index-DSfWgH82.js";import{M as l,C as s,a as o}from"./index-BvK2q2_G.js";import{C as h,a as r,b as d}from"./ContentItemDuo.stories-BAN0bJpq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-BLwVAP0f.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./SkeletonApollo-DgGyeSAq.js";import"./ContentItemDuoApollo-CKJnyFnN.js";function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h,name:"ContentItemDuo"}),`
`,e.jsx(n.h1,{id:"contentitemduo",children:"ContentItemDuo"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ContentItemDuo"})," component displays a label and a value, optionally with an action button. It supports horizontal and vertical layouts, and two sizes. Use it to present key-value pairs in a clear, accessible way."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Accessibility & Semantics"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ContentItemDuo"})," should be used inside a ",e.jsx(n.code,{children:"<dl>"})," (description list) container to ensure semantically correct HTML structure. Each ",e.jsx(n.code,{children:"ContentItemDuo"})," renders a ",e.jsx(n.code,{children:"<dt>"}),"/",e.jsx(n.code,{children:"<dd>"})," pair, making it suitable for lists of definitions or information."]}),`
`]}),`
`,e.jsx(n.h3,{id:"semantic-usage-example",children:"Semantic usage example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ContentItemDuo } from "@axa-fr/canopee-react/prospect";

const ContentItemDuoList = () => (
  <dl>
    <ContentItemDuo label="Name" value="John Doe" />
    <ContentItemDuo label="Age" value="32 years" />
    <ContentItemDuo
      label="Status"
      value="Active"
      buttonText="Details"
      onButtonClick={() => console.log("Clicked!")}
    />
  </dl>
);
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Prop"}),e.jsx("th",{scope:"col",children:"Type"}),e.jsx("th",{scope:"col",children:"Default"}),e.jsx("th",{scope:"col",children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Label displayed on the left (horizontal) or top (vertical)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Value displayed on the right (horizontal) or bottom (vertical)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"buttonText"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Text for the optional action button."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onButtonClick"})}),e.jsx("td",{children:"() => void"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Handler called when the button is clicked."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"position"})}),e.jsx("td",{children:'"horizontal" | "vertical"'}),e.jsx("td",{children:'"horizontal"'}),e.jsx("td",{children:"Layout direction."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isVertical"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"DEPRECATED"})," - Use ",e.jsx("code",{children:"position"})," instead."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"size"})}),e.jsx("td",{children:'"small" | "large"'}),e.jsx("td",{children:'"large"'}),e.jsx("td",{children:"Component size."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Custom CSS class for the container."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"classModifier"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"DEPRECATED"})," - Use ",e.jsx("code",{children:"size"})," or"," ",`
`,e.jsx("code",{children:"className"})," instead."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"...divProps"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["All native ",e.jsx("code",{children:"<div>"})," props"]})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Any other props are forwarded to the container."})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: The button is only rendered if both ",e.jsx(n.code,{children:"buttonText"})," and ",e.jsx(n.code,{children:"onButtonClick"})," are provided."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.h3,{id:"horizontal-large",children:"Horizontal (Large)"}),`
`,e.jsx(s,{of:r,sourceState:"shown"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h3,{id:"vertical",children:"Vertical"}),`
`,e.jsx(s,{of:d,sourceState:"shown"}),`
`,e.jsx(o,{of:d})]})}function y(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{y as default};
