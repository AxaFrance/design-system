import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as o}from"./index-DSfWgH82.js";import"./index-DGzp4702.js";import{M as i,P as t,A as l}from"./Message.stories-BGKb7kie.js";import{M as h,C as r,a as m}from"./index-DtQXtyEN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-D9s2eMj-.js";import"./iframe-DYCp8Li7.js";import"./DocsRenderer-CFRXHY34-DhqpM5Ht.js";import"./react-18-C_RNIbSA.js";import"./Skeleton-BvfG1hyo.js";import"./ClickIconApollo-gtE1BZCg.js";import"./MessageLF-D1cCqxAI.js";import"./Link-BGi8Mw9E.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function a(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:i,name:"Message"}),`
`,e.jsx(s.h1,{id:"message",children:"Message"}),`
`,e.jsx(s.p,{children:"To use the message import it like that:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Message } from "@axa-fr/design-system-apollo-react/lf";

const MyComponent = () => (
  <>
    <Message>My message</Message>
    <Message variant="error">My error message</Message>
  </>
);
`})}),`
`,e.jsx(s.h2,{id:"title",children:"Title"}),`
`,e.jsxs(s.p,{children:["The title of the message is set by the ",e.jsx(s.code,{children:"title"}),` prop.
You can set the title level with `,e.jsx(s.code,{children:"heading"}),' prop : "h2" | "h3" | "h4" | "h5" | "h6", the default is "h4".']}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Message title="My title" heading="h2">
  My message
</Message>
`})}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(m,{of:t}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"variant"})," prop to change the look of the message. ",e.jsx(s.a,{href:"#all-variants",children:"See the examples"}),"."]}),`
`,e.jsx(s.h2,{id:"all-variants",children:"All variants"}),`
`,e.jsx(r,{of:l,layout:"fullscreen"})]})}function w(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{w as default};
