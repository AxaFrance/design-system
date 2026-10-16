import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{n as c,r as l,t as u}from"./Steps.stories-U2pYcDME.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`steps`,children:`Steps`}),`
`,(0,p.jsxs)(t.ol,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#import`,children:`Import`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#steps-use`,children:`Steps`})}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`The component `,(0,p.jsx)(t.code,{children:`Step`}),` can have multiple values for the mode props :`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-javascript`,children:`mode: "link" | "active" | "disabled";
`})}),`
`,(0,p.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-javascript`,children:`import { Steps, Step, StepBase } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,p.jsx)(t.h2,{id:`steps-use`,children:`Steps use`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-javascript`,children:`const MyComponent = () => (
  <Steps>
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
`,(0,p.jsx)(r,{of:u}),`
`,(0,p.jsx)(s,{of:u})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),a(),o(),l()})))()}m();export{f as default};