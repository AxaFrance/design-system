import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-DwCjzDam.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-BYpdgX0H.js";import{i as c,n as l,r as u,t as d}from"./Heading.stories-NyS97cgG.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:d,name:`Heading`}),`
`,(0,m.jsx)(n.h1,{id:`heading`,children:`Heading`}),`
`,(0,m.jsx)(n.p,{children:`To use the heading import it like that:`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Heading } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <>
    <Heading>Heading</Heading>
    <Heading firstSubtitle="Subtitle" level={3}>
      Heading
    </Heading>
  </>
);
`})}),`
`,(0,m.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsxs)(n.p,{children:[`The heading accepts all icon props (the `,(0,m.jsx)(n.code,{children:`iconProps`}),` props key) except for the `,(0,m.jsx)(n.code,{children:`src`}),` and all tag props (the `,(0,m.jsx)(n.code,{children:`tagProps`}),` props key) except for the `,(0,m.jsx)(n.code,{children:`children`}),`.`]}),`
`,(0,m.jsx)(r,{of:u}),`
`,(0,m.jsx)(t,{of:u}),`
`,(0,m.jsx)(n.h2,{id:`icon-on-top`,children:`Icon on top`}),`
`,(0,m.jsxs)(n.p,{children:[`Set `,(0,m.jsx)(n.code,{children:`iconPosition="top"`}),` to stack the icon above the title instead of aligning it to the start. Default is `,(0,m.jsx)(n.code,{children:`"start"`}),`.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<Heading icon={bank} iconPosition="top">
  Titre de la page
</Heading>
`})}),`
`,(0,m.jsx)(r,{of:l})]})}function p(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=a(),o(),n(),c()})))()}h();export{p as default};