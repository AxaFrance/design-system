import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CrCwfpcW.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-B6pS4pdr.js";import{t as s}from"./mdx-react-shim-gngZ-MEU.js";import{NewStepsStory as c,n as l,t as u}from"./Steps.stories-DnCE4t90.js";function d(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(r.h1,{id:`steps`,children:`Steps`}),`
`,(0,p.jsxs)(r.ol,{children:[`
`,(0,p.jsx)(r.li,{children:(0,p.jsx)(r.a,{href:`#import`,children:`Import`})}),`
`,(0,p.jsx)(r.li,{children:(0,p.jsx)(r.a,{href:`#steps-use`,children:`Steps`})}),`
`]}),`
`,(0,p.jsxs)(r.p,{children:[`The component `,(0,p.jsx)(r.code,{children:`Step`}),` can have multiple values for the mode props :`]}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-javascript`,children:`mode: "link" | "active" | "disabled";
`})}),`
`,(0,p.jsx)(r.h2,{id:`import`,children:`Import`}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-javascript`,children:`import { Steps, Step, StepBase } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,p.jsx)(r.h2,{id:`steps-use`,children:`Steps use`}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-javascript`,children:`const MyComponent = () => (
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
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=o(),s(),r(),l()}))();export{f as default};