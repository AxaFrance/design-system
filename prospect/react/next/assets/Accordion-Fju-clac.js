import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-DDTDys2q.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-CT2AKoo-.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Accordion.stories-B0bvKN50.js";function h(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...s(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:d,name:`Accordion`}),`
`,(0,_.jsx)(n.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,_.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-tsx`,children:`import { Accordion } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,_.jsx)(n.h2,{id:`uses`,children:`Uses`}),`
`,(0,_.jsxs)(n.p,{children:[`The `,(0,_.jsx)(n.code,{children:`Accordion`}),` component displays content in a collapsible panel with a customizable summary section. It supports icons, titles, subtitles, tags, dates, and additional info fields.`]}),`
`,(0,_.jsxs)(n.p,{children:[`When the user clicks on the summary to open or close the accordion you can use the `,(0,_.jsx)(n.code,{children:`onClick`}),` function prop to do something at that moment. (you will get the native event as `,(0,_.jsx)(n.code,{children:`onClick`}),` parameter)`]}),`
`,(0,_.jsxs)(n.p,{children:[`You can also add/change the props of the `,(0,_.jsx)(n.code,{children:`Tag`}),` component inside of the `,(0,_.jsx)(n.code,{children:`Accordion`}),`.`]}),`
`,(0,_.jsx)(n.h3,{id:`accordion-1`,children:`Accordion`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-tsx`,children:`import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

export const AccordionComponent = () => (
  <Accordion
    icon={<Svg src={callIcon} />}
    title="Titre onglet"
    subtitle="Titre onglet"
    tag="En attente"
    date="01/01/2021"
    info="+ 686,00 €"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </Accordion>
);
`})}),`
`,(0,_.jsx)(n.h3,{id:`accordion-playground`,children:`Accordion Playground`}),`
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(t,{of:m}),`
`,(0,_.jsx)(n.h3,{id:`accordion-primary`,children:`Accordion Primary`}),`
`,(0,_.jsx)(r,{of:f}),`
`,(0,_.jsx)(t,{of:f}),`
`,(0,_.jsx)(n.h3,{id:`accordion-secondary`,children:`Accordion secondary`}),`
`,(0,_.jsx)(r,{of:c}),`
`,(0,_.jsx)(t,{of:c}),`
`,(0,_.jsx)(n.h3,{id:`accordion-primary-plain`,children:`Accordion Primary plain`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-tsx`,children:`import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

export const AccordionComponent = () => (
  <Accordion
    icon={<Svg src={callIcon} />}
    title="Titre onglet"
    subtitle="Titre onglet"
    tag="En attente"
    date="01/01/2021"
    info="+ 686,00 €"
    isPlain
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et
    tempor blandit. Nulla vitae eros a odio pretium gravida. Sed eget tortor nec
    massa lobortis bibendum. Morbi eget ligula porttitor, euismod odio
    vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.
  </Accordion>
);
`})}),`
`,(0,_.jsx)(r,{of:u}),`
`,(0,_.jsx)(t,{of:u}),`
`,(0,_.jsx)(n.h3,{id:`accordion-secondary-plain`,children:`Accordion secondary plain`}),`
`,(0,_.jsx)(r,{of:l}),`
`,(0,_.jsx)(t,{of:l})]})}function g(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=a(),o(),n(),p()})))()}v();export{g as default};