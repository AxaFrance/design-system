import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DSfWgH82.js";import{M as l,C as o,a as t}from"./index-Idoeipcp.js";import{I as c,G as r,A as m}from"./Icons.stories-Cgm9KwAa.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D0UvBztX.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(s.h1,{id:"icons",children:"Icons"}),`
`,e.jsx(s.h2,{id:"icon-recommended",children:"Icon Recommended"}),`
`,e.jsxs(s.p,{children:["The design system recommends using icons from the ",e.jsx(s.a,{href:"https://fonts.google.com/icons",rel:"nofollow",children:"Material Symbols"})," library as a priority. These icons are available via the ",e.jsx(s.a,{href:"https://www.npmjs.com/package/@material-symbols/svg-400",rel:"nofollow",children:e.jsx(s.code,{children:"@material-symbols/svg-400"})})," package. They provide extensive functional coverage and a modern style aligned with current standards."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm install @material-symbols/svg-400
`})}),`
`,e.jsx(s.h3,{id:"example-of-using-material-icons",children:"Example of Using Material Icons"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import home from "@material-symbols/svg-400/outlined/home.svg";
import { Svg } from "@axa-fr/design-system-slash-react";

export const Example = () => <Svg src={home} />;
`})}),`
`,e.jsx(s.h2,{id:"glyphicons-deprecated",children:"Glyphicons (Deprecated)"}),`
`,e.jsxs(s.p,{children:["Historically, the design system used Glyphicons. These icons are still available for backward compatibility but are now considered ",e.jsx(s.strong,{children:"deprecated"}),". It is strongly recommended to migrate to Material icons for new developments."]}),`
`,e.jsx(s.h3,{id:"example-of-using-glyphicons-deprecated",children:"Example of Using Glyphicons (Deprecated)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import "@axa-fr/design-system-slash-css/dist/common/icons.scss";

export const Example = () => <span className="glyphicon glyphicon-home" />;
`})}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t,{of:r}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Note:"})," Glyphicons will no longer receive updates and may be removed in a future major release."]}),`
`]}),`
`,e.jsx(s.h3,{id:"all-glyphicons",children:"All Glyphicons"}),`
`,e.jsx(o,{of:m})]})}function w(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{w as default};
