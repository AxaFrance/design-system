import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,s}from"./iframe-CUw-2XJG.js";import{a as c,i as l,n as u,r as d,t as f}from"./CardData.stories-G3jpwmnb.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`carddata`,children:`CardData`}),`
`,(0,h.jsxs)(t.p,{children:[`The component `,(0,h.jsx)(t.code,{children:`CardData`}),` is used to display a card with a title, an icon, and content. It can also include a subtitle and additional content on the right side of the header.`]}),`
`,(0,h.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { CardData } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(t.h2,{id:`utilisation`,children:`Utilisation`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import Svg from "@/assets/ton_svg.svg";

export const Component = () => (
  <CardData title="Titre de la carte" icon={Svg}>
    <p>Contenu de la carte</p>
  </CardData>
);
`})}),`
`,(0,h.jsx)(t.h3,{id:`carddata-1`,children:`CardData`}),`
`,(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(t.h3,{id:`carddata-with-subtitle`,children:`CardData with subTitle`}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(t.h3,{id:`carddata-with-contentright`,children:`CardData with contentRight`}),`
`,(0,h.jsx)(r,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`arguments`,children:`Arguments`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`title`}),` property corresponds to the main title of the card.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`subTitle`}),` property allows you to add a subtitle just below the title.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`description`}),` property allows you to add a description below the title and subtitle.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`icon`}),` property allows you to specify the icon to display. You can put the string value of the svg.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`contentFitAllSize`}),` property allows you to specify whether the content should take up all available space and have no margin around it. By default, this property is set to `,(0,h.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`variant`}),` property allows you to change the background color of the icon. Variants are `,(0,h.jsx)(t.code,{children:`error`}),`, `,(0,h.jsx)(t.code,{children:`warning`}),`, `,(0,h.jsx)(t.code,{children:`information`}),`, `,(0,h.jsx)(t.code,{children:`success`}),`, `,(0,h.jsx)(t.code,{children:`default`}),`, `,(0,h.jsx)(t.code,{children:`dark`}),`, `,(0,h.jsx)(t.code,{children:`gray`}),`, and `,(0,h.jsx)(t.code,{children:`purple`}),`.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`contentRight`}),` property allows you to add content to the right of the header.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`withDivider`}),` property allows you to add a divider below the header. By default, this property is set to `,(0,h.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,h.jsx)(s,{story:u})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),a(),o(),c()})))()}g();export{m as default};