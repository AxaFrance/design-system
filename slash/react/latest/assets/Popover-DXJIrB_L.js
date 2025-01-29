import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as o}from"./index-Ch4n-_Zu.js";import"./DocsRenderer-CFRXHY34-11Y2Aw13.js";import{M as s}from"./index-XUrgFtkI.js";import{P as i}from"./Popover.stories-BDvY2gJ4.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./react-18-EAsyrTGL.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./Popover-Bayy7GvK.js";import"./floating-ui.dom-0axdaRjh.js";import"./getComponentClassName-CfMiunrP.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i,name:"Docs"}),`
`,e.jsx(t.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(t.p,{children:"A popover is a element that appears on top of the content when the user clicks or hovers over another element."}),`
`,e.jsx(t.p,{children:"To use the popover, import it like that:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Popover } from "@axa-fr/design-system-slash-react";

const MyComponent = () => (
  <Popover
    placement="top"
    mode="hover"
    popoverElement={
      <>
        <h1>Content of the popover</h1>
        <p>Text of the modal element</p>
      </>
    }
  >
    <strong>Example</strong>
  </Popover>
);
`})}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Comment"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"placement"}),e.jsx("td",{children:"Placement of the popover"}),e.jsx("td",{children:"top"}),e.jsx("td",{children:e.jsxs(t.p,{children:["List of options is available on the ",e.jsx(t.a,{href:"https://floating-ui.com/docs/getting-started",rel:"nofollow",children:`FloatingUI
docs`})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"mode"}),e.jsx("td",{children:"Trigger mode"}),e.jsx("td",{children:"click"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Either ",e.jsx("code",{children:"click"})," or ",e.jsx("code",{children:"hover"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"content"}),e.jsx("td",{children:"Content of the popover"}),e.jsx("td",{}),e.jsx("td",{children:"React element to be displayed on trigger"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"children"}),e.jsx("td",{children:"Element that triggers"}),e.jsx("td",{}),e.jsx("td",{children:"React element that triggers the popover"})]})]})]})]})}function M(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{M as default};
