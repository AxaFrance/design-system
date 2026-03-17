import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DSfWgH82.js";import"./index-BwkGFghu.js";import{M as i,P as t,A as l}from"./Message.stories-CqdPS5K7.js";import{M as h,C as r,a as m}from"./index-DVVtKEpS.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-PXzqrylP.js";import"./iframe-Bda-aYZ0.js";import"./DocsRenderer-CFRXHY34-C1NPoJZc.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./FormLayout-B6E5v8AY.js";import"./index-63p0MazF.js";/* empty css               */import"./MessageApollo-BxOFKJom.js";import"./LinkCommon-C3iqmefp.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function a(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:i,name:"Message"}),`
`,e.jsx(s.h1,{id:"message",children:"Message"}),`
`,e.jsx(s.p,{children:"To use the message import it like that:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Message } from "@axa-fr/canopee-react/prospect";

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
`,e.jsx(r,{of:l,layout:"fullscreen"})]})}function N(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{N as default};
