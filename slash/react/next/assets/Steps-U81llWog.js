import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-G7nTXt62.js";import{M as r,C as a,a as p}from"./index-DOKw80--.js";import{S as l,N as t}from"./Steps.stories-CqjwPunf.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-1IhOjDPQ.js";import"./index-BdSKqQiB.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";/* empty css              */import"./Loader-Cvyl5QsW.js";import"./index-28pPPJTf.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"steps",children:"Steps"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#import",children:"Import"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#steps-use",children:"Steps"})}),`
`]}),`
`,e.jsx(n.p,{children:"The component step can have multiple values for the mode props :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`mode: "link" | "active" | "disabled";
`})}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Steps, Step, StepBase } from "@axa-fr/design-system-slash-react";
`})}),`
`,e.jsx(n.h2,{id:"steps-use",children:"Steps use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const MyComponent = () => (
  <Steps classModifier="" className="">
    <Step
      id="id1"
      href="/etape1"
      onClick={(e) => {
        console.log(e);
      }}
      number="1"
      mode="link"
      title="Previous step"
    />
    <Step
      id="id2"
      href="/etape2"
      number="2"
      onClick={(e) => {
        console.log(e);
      }}
      title="Previous step"
      mode="link"
    />
    <Step
      id="id3"
      number="3"
      onClick={(e) => {
        console.log(e);
      }}
      title="Current step"
      mode="active"
    />
    <StepBase id="idf4" title="Un titre">
      <a
        className="af-steps-list-step__label"
        href="#/"
        onClick={(e) => {
          console.log(e);
        }}
      >
        <span className="af-steps-list-step__number">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-steps-list-step__title">Custom</span>
      </a>
    </StepBase>
    <Step id="id5" number="5" title="Final step" mode="disabled" />
  </Steps>
);
`})}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(p,{of:t})]})}function k(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{k as default};
