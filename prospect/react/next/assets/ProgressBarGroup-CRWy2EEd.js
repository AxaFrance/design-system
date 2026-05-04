import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-npIpnPBv.js";import{t as r}from"./mdx-react-shim-Zu--mdCB.js";import{i,l as a,n as o,s}from"./blocks-0mdg8u_Z.js";import{Playground as c,n as l,t as u}from"./ProgressBarGroup.stories-vQVLuCtC.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u}),`
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
`,(0,p.jsx)(o,{of:c,sourceState:`shown`}),`
`,(0,p.jsx)(i,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};