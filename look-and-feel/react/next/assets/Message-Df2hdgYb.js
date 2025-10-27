import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as o}from"./index-DSfWgH82.js";import"./index-sXUNX-3N.js";import{M as i,P as n,A as l}from"./Message.stories-BbS6dVwm.js";import{M as h,C as r,a as m}from"./index-Bj3Weq7q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-DZqRzWI6.js";import"./iframe-CYn0CwGS.js";import"./DocsRenderer-CFRXHY34-BHVKN9Rj.js";import"./react-18-C_RNIbSA.js";import"./constants-V7vkfDDN.js";import"./ProgressBarCommon-Cz9LA5Bv.js";import"./TimelineVerticalLF-BiHdIieJ.js";import"./visibility-fill-CUq5Rz3Z.js";import"./MessageLF-CyN2GOmg.js";import"./LinkCommon-BnYX9yYJ.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function a(t){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:i,name:"Message"}),`
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
`,e.jsx(r,{of:n}),`
`,e.jsx(m,{of:n}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"variant"})," prop to change the look of the message. ",e.jsx(s.a,{href:"#all-variants",children:"See the examples"}),"."]}),`
`,e.jsx(s.h2,{id:"all-variants",children:"All variants"}),`
`,e.jsx(r,{of:l,layout:"fullscreen"})]})}function S(t={}){const{wrapper:s}={...o(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{S as default};
