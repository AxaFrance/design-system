import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-BkDSX2uU.js";import{t as r}from"./mdx-react-shim-ByL6om5n.js";import{i,l as a,n as o,s}from"./blocks-BXnQ6LPM.js";import{AccordionDefaultStory as c,AccordionPrimaryPlainStory as l,AccordionPrimaryStory as u,AccordionSecondaryPlainStory as d,AccordionSecondaryStory as f,n as p,t as m}from"./Accordion.stories-CE1lgwNl.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m,name:`Accordion`}),`
`,(0,_.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,_.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { Accordion } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,_.jsx)(t.h2,{id:`uses`,children:`Uses`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`Accordion`}),` component displays content in a collapsible panel with a customizable summary section. It supports icons, titles, subtitles, tags, dates, and additional info fields.`]}),`
`,(0,_.jsxs)(t.p,{children:[`When the user clicks on the summary to open or close the accordion you can use the `,(0,_.jsx)(t.code,{children:`onClick`}),` function prop to do something at that moment. (you will get the native event as `,(0,_.jsx)(t.code,{children:`onClick`}),` parameter)`]}),`
`,(0,_.jsxs)(t.p,{children:[`You can also add/change the props of the `,(0,_.jsx)(t.code,{children:`Tag`}),` component inside of the `,(0,_.jsx)(t.code,{children:`Accordion`}),`.`]}),`
`,(0,_.jsx)(t.h3,{id:`accordion-1`,children:`Accordion`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

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
`,(0,_.jsx)(t.h3,{id:`accordion-playground`,children:`Accordion Playground`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(i,{of:c}),`
`,(0,_.jsx)(t.h3,{id:`accordion-primary`,children:`Accordion Primary`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(t.h3,{id:`accordion-secondary`,children:`Accordion secondary`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(t.h3,{id:`accordion-primary-plain`,children:`Accordion Primary plain`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";

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
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(t.h3,{id:`accordion-secondary-plain`,children:`Accordion secondary plain`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(i,{of:d})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),r(),a(),p()}))();export{g as default};