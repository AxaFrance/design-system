import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-CxnOZA08.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-DO_PX2D8.js";import{i as c,n as l,r as u,t as d}from"./AccordionCore.stories-fOoXbcR0.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...s(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:u,name:`AccordionCore`}),`
`,(0,m.jsx)(n.h1,{id:`accordioncore`,children:`AccordionCore`}),`
`,(0,m.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { AccordionCore } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,m.jsx)(n.h2,{id:`uses`,children:`Uses`}),`
`,(0,m.jsxs)(n.p,{children:[`The `,(0,m.jsx)(n.code,{children:`Accordion`}),` component displays content in a collapsible panel with a customizable summary section. It supports icons, titles, subtitles, tags, dates, and additional info fields.`]}),`
`,(0,m.jsxs)(n.p,{children:[`When the user clicks on the summary to open or close the accordion you can use the `,(0,m.jsx)(n.code,{children:`onClick`}),` function prop to do something at that moment. (you will get the native event as `,(0,m.jsx)(n.code,{children:`onClick`}),` parameter)`]}),`
`,(0,m.jsxs)(n.p,{children:[`You can also add/change the props of the `,(0,m.jsx)(n.code,{children:`Tag`}),` component inside of the `,(0,m.jsx)(n.code,{children:`Accordion`}),`.
Use the native `,(0,m.jsx)(n.code,{children:`open`}),` prop to control the expanded state. When the arrow must
look like a click icon, `,(0,m.jsx)(n.code,{children:`arrowClickIconVariant`}),` accepts the same variants as
`,(0,m.jsx)(n.code,{children:`ClickIcon`}),`.`]}),`
`,(0,m.jsx)(n.h3,{id:`accordioncore-1`,children:`AccordionCore`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`export const AccordionCoreComponent = () => (
  <AccordionCore summary="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionCore>
);
`})}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(t,{of:l}),`
`,(0,m.jsx)(n.h3,{id:`accordioncore-plain`,children:`AccordionCore Plain`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`export const AccordionCorePlainComponent = () => (
  <AccordionCore className="af-apollo-accordion--plain" summary="Titre onglet">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </AccordionCore>
);
`})}),`
`,(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(t,{of:d})]})}function p(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=a(),o(),n(),c()})))()}h();export{p as default};