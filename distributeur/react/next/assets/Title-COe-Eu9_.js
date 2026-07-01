import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-DzNgoTat.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-7wMN1aoF.js";import{t as s}from"./mdx-react-shim-D3wKrnut.js";import{Template as c,n as l,t as u}from"./Title.stories-LVB8LpJ7.js";function d(e){let r={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(r.h2,{id:`title`,children:`Title`}),`
`,(0,p.jsxs)(r.blockquote,{children:[`
`,(0,p.jsxs)(r.p,{children:[(0,p.jsx)(r.strong,{children:`Deprecated prop`}),`: The `,(0,p.jsx)(r.code,{children:`classModifier`}),` prop is deprecated. Use `,(0,p.jsx)(r.code,{children:`className`}),` to add custom CSS modifier classes instead.`]}),`
`]}),`
`,(0,p.jsx)(r.h3,{id:`use-of-title`,children:`Use of Title`}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-tsx`,children:`import { Title } from "@axa-fr/canopee-react/distributeur";

export const MyComponent = () => (
  <Title className="af-title--custom">Sample Title</Title>
);
`})}),`
`,(0,p.jsx)(r.p,{children:`The title can also contain any React component. Simply pass it into :`}),`
`,(0,p.jsxs)(r.ul,{children:[`
`,(0,p.jsxs)(r.li,{children:[`the `,(0,p.jsx)(r.code,{children:`contentLeft`}),` prop if you want it to be displayed between the title and the separator.`]}),`
`,(0,p.jsxs)(r.li,{children:[`the `,(0,p.jsx)(r.code,{children:`contentRight`}),` prop if you want it to be displayed after the separator.`]}),`
`]}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-tsx`,children:`import { Title } from "@axa-fr/canopee-react/distributeur";

export const MyComponent = () => (
  <Title
    className="af-title--custom"
    contentLeft={<Button>Left button</Button>}
    contentRight={<Button>Right button</Button>}
  >
    Title with content
  </Title>
);
`})}),`
`,(0,p.jsx)(r.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=o(),s(),r(),l()}))();export{f as default};