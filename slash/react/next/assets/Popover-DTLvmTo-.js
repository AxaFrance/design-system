import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DSfWgH82.js";import"./index-zmSwC08q.js";import{P as s}from"./Popover.stories-B2CHuE9Z.js";import{M as i}from"./index-aq7iiRo6.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BT_T0KwI.js";import"./iframe-Bhtwm46B.js";import"./DocsRenderer-CFRXHY34-amxkM8JA.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";/* empty css               */import"./CardData-DMLm9pte.js";import"./index-63p0MazF.js";import"./Popover-BP1-pUYY.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s,name:"Docs"}),`
`,e.jsx(t.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(t.p,{children:`A popover is a element that appears on top of the content when the user clicks
or hovers over another element.`}),`
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
docs`})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"mode"}),e.jsx("td",{children:"Trigger mode"}),e.jsx("td",{children:"click"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Either ",e.jsx("code",{children:"click"})," or ",e.jsx("code",{children:"hover"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"content"}),e.jsx("td",{children:"Content of the popover"}),e.jsx("td",{}),e.jsx("td",{children:"React element to be displayed on trigger"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"children"}),e.jsx("td",{children:"Element that triggers"}),e.jsx("td",{}),e.jsx("td",{children:"React element that triggers the popover"})]})]})]})]})}function E(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{E as default};
