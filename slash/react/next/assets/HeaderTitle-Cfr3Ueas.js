import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-G7nTXt62.js";import"./index-CAgbGkVZ.js";import{H as h,D as r,C as s,a}from"./HeaderTitle.stories-fdUCdkkE.js";import{M as c,C as n,a as i}from"./index-BHFH_pkx.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-1bqh4vwd.js";import"./iframe-oUFSIlST.js";import"./DocsRenderer-CFRXHY34-2-8ktkLM.js";import"./react-18-Cg43Tkb0.js";import"./index-BOKuxaB8.js";/* empty css              */import"./Loader-DO2JGjBT.js";import"./index-CG6JzWRx.js";import"./HeaderTitle-SUmSIXAo.js";import"./save-DP_CNYpL.js";import"./tslib.es6-Duv2rsQ1.js";import"./home-BuLaEOyh.js";import"./index-28pPPJTf.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function l(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:h}),`
`,t.jsx(e.h1,{id:"headertitle",children:"HeaderTitle"}),`
`,t.jsxs(e.p,{children:["By default, the title bar is sticky on the top when you scroll down the page. If you want to disable that behavior you can set to false the ",t.jsx(e.code,{children:"isSticky"})," property of the component."]}),`
`,t.jsx(e.h2,{id:"import",children:"Import"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { HeaderTitle } from "@axa-fr/design-system-slash-react";
`})}),`
`,t.jsx(e.h2,{id:"use",children:"Use"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`const TitleComponent = () => (
  <HeaderTitle
    isSticky
    title="Toolkit Axa"
    subtitle="Info complémentaire"
    toggleMenu={() => {}}
  />
);
export default TitleComponent;
`})}),`
`,t.jsx(e.h2,{id:"stories",children:"Stories"}),`
`,t.jsx(e.h3,{id:"default-title",children:"Default Title"}),`
`,t.jsx(n,{of:r}),`
`,t.jsx(i,{of:r}),`
`,t.jsx(e.h3,{id:"complex-title",children:"Complex Title"}),`
`,t.jsx(n,{of:s}),`
`,t.jsx(i,{of:s}),`
`,t.jsx(e.h3,{id:"complex-title-with-content-and-children",children:"Complex Title with Content and Children"}),`
`,t.jsxs(e.p,{children:["When you need to handle a navigation action , a back button for example, you can use the ",t.jsx(e.code,{children:"contentLeft"})," property. For other others actions you should put them the right side of the title bar with the ",t.jsx(e.code,{children:"contentRight"}),` property. Passing children allows you to add additional content after the title and subtitle.
The properties accepts a ReactNode to give you the flexibility to add any content you want.`]}),`
`,t.jsx(n,{of:a}),`
`,t.jsx(i,{of:a})]})}function A(o={}){const{wrapper:e}={...d(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(l,{...o})}):l(o)}export{A as default};
