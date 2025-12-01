import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import{M as r,C as a,a as l}from"./index-CCeqW_p3.js";import{T as c,a as o}from"./Title.stories-B8j7Zbdw.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Be4JZYIA.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CardData-CAT2AYPU.js";function i(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:c}),`
`,t.jsx(e.h2,{id:"title",children:"Title"}),`
`,t.jsx(e.h3,{id:"use-of-title",children:"Use of Title"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-slash-react";

export const MyComponent = () => (
  <Title classModifier="af-title" className="">
    Sample Title
  </Title>
);
`})}),`
`,t.jsx(e.p,{children:"The title can also contain any React component. Simply pass it into :"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["the ",t.jsx(e.code,{children:"contentLeft"})," prop if you want it to be displayed between the title and the separator."]}),`
`,t.jsxs(e.li,{children:["the ",t.jsx(e.code,{children:"contentRight"})," prop if you want it to be displayed after the separator."]}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Title } from "@axa-fr/design-system-slash-react";

export const MyComponent = () => (
  <Title
    classModifier="af-title"
    className=""
    contentLeft={<Button>Left button</Button>}
    contentRight={<Button>Right button</Button>}
  >
    Title with content
  </Title>
);
`})}),`
`,t.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,t.jsx(a,{of:o}),`
`,t.jsx(l,{of:o})]})}function C(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{C as default};
