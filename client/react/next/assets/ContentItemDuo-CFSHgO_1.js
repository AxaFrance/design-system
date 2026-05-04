import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-rw17kmD6.js";import{t as r}from"./mdx-react-shim-okekR0or.js";import{i,l as a,n as o,s}from"./blocks-DqZwWlVi.js";import{ContentItemDuoHorizontal as c,ContentItemDuoVertical as l,n as u,t as d}from"./ContentItemDuo.stories-BPX2zMZU.js";function f(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`ContentItemDuo`}),`
`,(0,m.jsx)(t.h1,{id:`contentitemduo`,children:`ContentItemDuo`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`ContentItemDuo`}),` component displays a label and a value, optionally with an action button. It supports horizontal and vertical layouts, and two sizes. Use it to present key-value pairs in a clear, accessible way.`]}),`
`,(0,m.jsxs)(t.blockquote,{children:[`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Accessibility & Semantics`})}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`ContentItemDuo`}),` should be used inside a `,(0,m.jsx)(t.code,{children:`<dl>`}),` (description list) container to ensure semantically correct HTML structure. Each `,(0,m.jsx)(t.code,{children:`ContentItemDuo`}),` renders a `,(0,m.jsx)(t.code,{children:`<dt>`}),`/`,(0,m.jsx)(t.code,{children:`<dd>`}),` pair, making it suitable for lists of definitions or information.`]}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`semantic-usage-example`,children:`Semantic usage example`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { ContentItemDuo } from "@axa-fr/canopee-react/client";

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
`,(0,m.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{scope:`col`,children:`Prop`}),(0,m.jsx)(`th`,{scope:`col`,children:`Type`}),(0,m.jsx)(`th`,{scope:`col`,children:`Default`}),(0,m.jsx)(`th`,{scope:`col`,children:`Description`})]})}),(0,m.jsxs)(`tbody`,{children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`label`})}),(0,m.jsx)(`td`,{children:`ReactNode`}),(0,m.jsx)(`td`,{children:`-`}),(0,m.jsx)(`td`,{children:`Label displayed on the left (horizontal) or top (vertical).`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`value`})}),(0,m.jsx)(`td`,{children:`ReactNode`}),(0,m.jsx)(`td`,{children:`-`}),(0,m.jsx)(`td`,{children:`Value displayed on the right (horizontal) or bottom (vertical).`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`buttonText`})}),(0,m.jsx)(`td`,{children:`string`}),(0,m.jsx)(`td`,{children:`-`}),(0,m.jsx)(`td`,{children:`Text for the optional action button.`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`onButtonClick`})}),(0,m.jsx)(`td`,{children:`() => void`}),(0,m.jsx)(`td`,{children:`-`}),(0,m.jsx)(`td`,{children:`Handler called when the button is clicked.`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`position`})}),(0,m.jsx)(`td`,{children:`"horizontal" | "vertical"`}),(0,m.jsx)(`td`,{children:`"horizontal"`}),(0,m.jsx)(`td`,{children:`Layout direction.`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`isVertical`})}),(0,m.jsx)(`td`,{children:`boolean`}),(0,m.jsx)(`td`,{children:`-`}),(0,m.jsx)(`td`,{children:(0,m.jsxs)(t.p,{children:[(0,m.jsx)(`strong`,{children:`DEPRECATED`}),` - Use `,(0,m.jsx)(`code`,{children:`position`}),` instead.`]})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`size`})}),(0,m.jsx)(`td`,{children:`"small" | "large"`}),(0,m.jsx)(`td`,{children:`"large"`}),(0,m.jsx)(`td`,{children:`Component size.`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`className`})}),(0,m.jsx)(`td`,{children:`string`}),(0,m.jsx)(`td`,{children:`-`}),(0,m.jsx)(`td`,{children:`Custom CSS class for the container.`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`classModifier`})}),(0,m.jsx)(`td`,{children:`string`}),(0,m.jsx)(`td`,{children:`-`}),(0,m.jsx)(`td`,{children:(0,m.jsxs)(t.p,{children:[(0,m.jsx)(`strong`,{children:`DEPRECATED`}),` - Use `,(0,m.jsx)(`code`,{children:`size`}),` or`,` `,`
`,(0,m.jsx)(`code`,{children:`className`}),` instead.`]})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`...divProps`})}),(0,m.jsx)(`td`,{children:(0,m.jsxs)(t.p,{children:[`All native `,(0,m.jsx)(`code`,{children:`<div>`}),` props`]})}),(0,m.jsx)(`td`,{children:`-`}),(0,m.jsx)(`td`,{children:`Any other props are forwarded to the container.`})]})]})]}),`
`,(0,m.jsxs)(t.blockquote,{children:[`
`,(0,m.jsxs)(t.p,{children:[`Note: The button is only rendered if both `,(0,m.jsx)(t.code,{children:`buttonText`}),` and `,(0,m.jsx)(t.code,{children:`onButtonClick`}),` are provided.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(t.h3,{id:`horizontal-large`,children:`Horizontal (Large)`}),`
`,(0,m.jsx)(o,{of:c,sourceState:`shown`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h3,{id:`vertical`,children:`Vertical`}),`
`,(0,m.jsx)(o,{of:l,sourceState:`shown`}),`
`,(0,m.jsx)(i,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),a(),u()}))();export{p as default};