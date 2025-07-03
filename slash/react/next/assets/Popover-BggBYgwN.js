import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-G7nTXt62.js";import"./index-DCYRd8IT.js";import{P as s}from"./Popover.stories-D0dsITva.js";import{M as i}from"./index-CUHTymgx.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-Dvx_XQGb.js";import"./iframe-DK-jasUS.js";import"./DocsRenderer-CFRXHY34-DF0S1nNS.js";import"./react-18-Cg43Tkb0.js";import"./index-BOKuxaB8.js";/* empty css              */import"./Loader-DD6EgLZW.js";import"./index-BdSKqQiB.js";import"./Popover-DeDSDVwX.js";import"./floating-ui.dom-4nhQhKqc.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s,name:"Docs"}),`
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
docs`})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"mode"}),e.jsx("td",{children:"Trigger mode"}),e.jsx("td",{children:"click"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Either ",e.jsx("code",{children:"click"})," or ",e.jsx("code",{children:"hover"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"content"}),e.jsx("td",{children:"Content of the popover"}),e.jsx("td",{}),e.jsx("td",{children:"React element to be displayed on trigger"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"children"}),e.jsx("td",{children:"Element that triggers"}),e.jsx("td",{}),e.jsx("td",{children:"React element that triggers the popover"})]})]})]})]})}function b(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{b as default};
