import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-DDTDys2q.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-CT2AKoo-.js";import{n as c,r as l,t as u}from"./ProgressBarGroup.stories-DU58XCdj.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n.h1,{id:`progressbargroup`,children:`ProgressBarGroup`}),`
`,(0,p.jsx)(n.p,{children:`A multi-step progress indicator for wizards, forms, or any process with several steps.`}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { ProgressBarGroup } from "@axa-fr/canopee-react/prospect";

<ProgressBarGroup
  currentStep={1} // Index of the current step (0-based)
  currentStepProgress={50} // Progress of the current step (0-100)
  stepsCount={4} // Total number of steps
/>;
`})}),`
`,(0,p.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`currentStep`}),` (number): Index of the current step (0-based, required)`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`currentStepProgress`}),` (number): Progress of the current step (0-100, default: 0)`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`stepsCount`}),` (number): Total number of steps (required)`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`max`}),` (number): Maximum value for progress (default: 100)`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`className`}),` (string): Custom class for the group`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,p.jsx)(r,{of:u,sourceState:`shown`}),`
`,(0,p.jsx)(t,{of:u})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),o(),n(),l()})))()}m();export{f as default};