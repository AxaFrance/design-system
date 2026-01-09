import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DSfWgH82.js";import{M as t,C as o,a as l}from"./index-m36bQL0T.js";import{I as c,G as r,A as m}from"./Icons.stories-Cgm9KwAa.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DeAW-26u.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(n.h1,{id:"icons",children:"Icons"}),`
`,e.jsx(n.h2,{id:"icon-recommended",children:"Icon Recommended"}),`
`,e.jsxs(n.p,{children:["The design system recommends using icons from the ",e.jsx(n.a,{href:"https://fonts.google.com/icons",rel:"nofollow",children:"Material Symbols"})," library as a priority. These icons are available via the ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@material-symbols/svg-400",rel:"nofollow",children:e.jsx(n.code,{children:"@material-symbols/svg-400"})})," package. They provide extensive functional coverage and a modern style aligned with current standards."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @material-symbols/svg-400
`})}),`
`,e.jsx(n.h3,{id:"example-of-using-material-icons",children:"Example of Using Material Icons"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import home from "@material-symbols/svg-400/outlined/home.svg";
import { Svg } from "@axa-fr/canopee-react/distributeur";

export const Example = () => <Svg src={home} />;
`})}),`
`,e.jsx(n.h2,{id:"glyphicons-deprecated",children:"Glyphicons (Deprecated)"}),`
`,e.jsxs(n.p,{children:["Historically, the design system used Glyphicons. These icons are still available for backward compatibility but are now considered ",e.jsx(n.strong,{children:"deprecated"}),". It is strongly recommended to migrate to Material icons for new developments."]}),`
`,e.jsx(n.h3,{id:"example-of-using-glyphicons-deprecated",children:"Example of Using Glyphicons (Deprecated)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "@axa-fr/canopee-css/distributeur/common/icons.scss";

export const Example = () => <span className="glyphicon glyphicon-home" />;
`})}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Glyphicons will no longer receive updates and may be removed in a future major release."]}),`
`]}),`
`,e.jsx(n.h3,{id:"all-glyphicons",children:"All Glyphicons"}),`
`,e.jsx(o,{of:m})]})}function w(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{w as default};
