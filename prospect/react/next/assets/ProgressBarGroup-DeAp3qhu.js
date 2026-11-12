import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-tv3KQEW_.js";import{i,l as a,n as o,s}from"./blocks-D74w0bgk.js";import{n as c,r as l,t as u}from"./ProgressBarGroup.stories-CKbLL8EK.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`progressbargroup`,children:`ProgressBarGroup`}),`
`,(0,p.jsx)(t.p,{children:`A multi-step progress indicator for wizards, forms, or any process with several steps.`}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { ProgressBarGroup } from "@axa-fr/canopee-react/prospect";

<ProgressBarGroup
  currentStep={1} // Index of the current step (0-based)
  currentStepProgress={50} // Progress of the current step (0-100)
  stepsCount={4} // Total number of steps
/>;
`})}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`currentStep`}),` (number): Index of the current step (0-based, required)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`currentStepProgress`}),` (number): Progress of the current step (0-100, default: 0)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`stepsCount`}),` (number): Total number of steps (required)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`max`}),` (number): Maximum value for progress (default: 100)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`className`}),` (string): Custom class for the group`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,p.jsx)(o,{of:u,sourceState:`shown`}),`
`,(0,p.jsx)(i,{of:u})]})}function f(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),n(),a(),l()})))()}m();export{f as default};