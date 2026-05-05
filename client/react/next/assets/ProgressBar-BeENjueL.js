import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-BkDSX2uU.js";import{t as r}from"./mdx-react-shim-ByL6om5n.js";import{i,l as a,n as o,s}from"./blocks-BXnQ6LPM.js";import{Playground as c,n as l,t as u}from"./ProgressBar.stories-CPPfN4Us.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`progressbar`,children:`ProgressBar`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`ProgressBar`}),` component displays a visual indicator of progress. It is based on the native HTML `,(0,p.jsx)(t.code,{children:`<progress>`}),` element and can be customized using standard props.`]}),`
`,(0,p.jsxs)(t.p,{children:[`By default, the maximum value (`,(0,p.jsx)(t.code,{children:`max`}),` prop) is set to `,(0,p.jsx)(t.code,{children:`1`}),`, which means the `,(0,p.jsx)(t.code,{children:`value`}),` prop should be between 0 and 1 (for example, 0.7 for 70%).
You can override the `,(0,p.jsx)(t.code,{children:`max`}),` prop if you want to use a different scale (for example, `,(0,p.jsx)(t.code,{children:`max=100`}),` for percentage values).`]}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { ProgressBar } from "@axa-fr/canopee-react/client";

const MyComponent = () => <ProgressBar value={0.7} />;
`})}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(o,{of:c,sourceState:`shown`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility-indicating-current-progress`,children:`Accessibility: Indicating Current Progress`}),`
`,(0,p.jsxs)(t.p,{children:[`For accessibility, always use the `,(0,p.jsx)(t.code,{children:`label`}),` prop to provide a descriptive label for the progress bar. This ensures that assistive technologies can correctly announce the purpose and current state of the progress bar.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<ProgressBar value={0.7} label="Loading something..." />
`})}),`
`,(0,p.jsx)(t.p,{children:`This approach improves accessibility by associating a visible and programmatic label with the progress bar.`}),`
`,(0,p.jsx)(t.h3,{id:`screen-reader-behavior`,children:`Screen reader behavior`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`By default, screen readers announce the percentage value of the progress bar.`}),`
`,(0,p.jsxs)(t.li,{children:[`If an `,(0,p.jsx)(t.code,{children:`aria-label`}),` is set, the screen reader will first read the label, then announce the percentage value.`]}),`
`,(0,p.jsxs)(t.li,{children:[`If you want the screen reader to read only a custom text without announcing the percentage, use the `,(0,p.jsx)(t.code,{children:`aria-valuetext`}),` attribute.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};