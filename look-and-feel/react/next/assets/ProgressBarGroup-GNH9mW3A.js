import{j as r}from"./index-C-iqcyhV.js";import{useMDXComponents as t}from"./index-DSfWgH82.js";import"./index-CC-3OOY7.js";import{P as i,a as o}from"./ProgressBarGroup.stories-CXqc5jri.js";import{M as p,C as a,a as c}from"./index-B9oPkVni.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-BdWEQr6-.js";import"./iframe-C4NWhLku.js";import"./DocsRenderer-CFRXHY34-COqzumw2.js";import"./react-18-C_RNIbSA.js";import"./Skeleton-DSCIEZ5B.js";import"./FileUploadCommon-BIBtmlJc.js";import"./FileUploadLF-BPiIb4Kc.js";import"./ProgressBarGroupLF-BPgmaFXY.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function n(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return r.jsxs(r.Fragment,{children:[r.jsx(p,{of:i}),`
`,r.jsx(e.h1,{id:"progressbargroup",children:"ProgressBarGroup"}),`
`,r.jsx(e.p,{children:"A multi-step progress indicator for wizards, forms, or any process with several steps."}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { ProgressBarGroup } from "@axa-fr/design-system-apollo-react/lf";

<ProgressBarGroup
  currentStep={1} // Index of the current step (0-based)
  currentStepProgress={50} // Progress of the current step (0-100)
  stepsCount={4} // Total number of steps
/>;
`})}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"currentStep"})," (number): Index of the current step (0-based, required)"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"currentStepProgress"})," (number): Progress of the current step (0-100, default: 0)"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"stepsCount"})," (number): Total number of steps (required)"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"max"})," (number): Maximum value for progress (default: 100)"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"className"})," (string): Custom class for the group"]}),`
`]}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(a,{of:o,sourceState:"shown"}),`
`,r.jsx(c,{of:o})]})}function v(s={}){const{wrapper:e}={...t(),...s.components};return e?r.jsx(e,{...s,children:r.jsx(n,{...s})}):n(s)}export{v as default};
