import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C8Tw6Lm5.js";import{t as r}from"./mdx-react-shim-B5BYO_WN.js";import{i,l as a,n as o,s}from"./blocks-B2Oe2WTt.js";import{IconOnTop as c,Playground as l,n as u,t as d}from"./Heading.stories-9lhzxFxL.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`Heading`}),`
`,(0,m.jsx)(t.h1,{id:`heading`,children:`Heading`}),`
`,(0,m.jsx)(t.p,{children:`To use the heading import it like that:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Heading } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <>
    <Heading>Heading</Heading>
    <Heading firstSubtitle="Subtitle" level={3}>
      Heading
    </Heading>
  </>
);
`})}),`
`,(0,m.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsxs)(t.p,{children:[`The heading accepts all icon props (the `,(0,m.jsx)(t.code,{children:`iconProps`}),` props key) except for the `,(0,m.jsx)(t.code,{children:`src`}),` and all tag props (the `,(0,m.jsx)(t.code,{children:`tagProps`}),` props key) except for the `,(0,m.jsx)(t.code,{children:`children`}),`.`]}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`icon-on-top`,children:`Icon on top`}),`
`,(0,m.jsxs)(t.p,{children:[`Set `,(0,m.jsx)(t.code,{children:`iconPosition="top"`}),` to stack the icon above the title instead of aligning it to the start. Default is `,(0,m.jsx)(t.code,{children:`"start"`}),`.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Heading icon={bank} iconPosition="top">
  Titre de la page
</Heading>
`})}),`
`,(0,m.jsx)(o,{of:c})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),a(),u()}))();export{p as default};