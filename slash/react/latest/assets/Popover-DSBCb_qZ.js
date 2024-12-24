import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5-BN3fGCbW.js";import{ae as s}from"./index-De0Pjux1.js";import{P as i}from"./Popover.stories-CN7tteok.js";import"./index-CTjT7uj6.js";import"./iframe-Bnpca8an.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./Popover-CVInVo-0.js";import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";function o(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i,name:"Docs"}),`
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
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Comment"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"placement"}),e.jsx("td",{children:"Placement of the popover"}),e.jsx("td",{children:"top"}),e.jsx("td",{children:e.jsxs(t.p,{children:["List of options is available on the ",e.jsx(t.a,{href:"https://popper.js.org/docs/v2/constructors/#options",rel:"nofollow",children:`Popperjs
docs`})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"mode"}),e.jsx("td",{children:"Trigger mode"}),e.jsx("td",{children:"click"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Either ",e.jsx("code",{children:"click"})," or ",e.jsx("code",{children:"hover"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"content"}),e.jsx("td",{children:"Content of the popover"}),e.jsx("td",{}),e.jsx("td",{children:"React element to be displayed on trigger"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"children"}),e.jsx("td",{children:"Element that triggers"}),e.jsx("td",{}),e.jsx("td",{children:"React element that triggers the popover"})]})]})]})]})}function E(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(o,{...r})}):o(r)}export{E as default};
