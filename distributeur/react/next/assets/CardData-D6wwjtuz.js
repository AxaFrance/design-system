import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CrCwfpcW.js";import{m as n,o as r,s as i,u as a,w as o}from"./iframe-B6pS4pdr.js";import{t as s}from"./mdx-react-shim-gngZ-MEU.js";import{CardDataPrimary as c,CardDataPrimaryAvecSousTitre as l,CardDataWithContentRight as u,n as d,t as f}from"./CardData.stories-C7mXTv32.js";function p(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(n.h1,{id:`carddata`,children:`CardData`}),`
`,(0,h.jsxs)(n.p,{children:[`The component `,(0,h.jsx)(n.code,{children:`CardData`}),` is used to display a card with a title, an icon, and content. It can also include a subtitle and additional content on the right side of the header.`]}),`
`,(0,h.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`import { CardData } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(n.h2,{id:`utilisation`,children:`Utilisation`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`import Svg from "@/assets/ton_svg.svg";

export const Component = () => (
  <CardData title="Titre de la carte" icon={Svg}>
    <p>Contenu de la carte</p>
  </CardData>
);
`})}),`
`,(0,h.jsx)(n.h3,{id:`carddata-1`,children:`CardData`}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h3,{id:`carddata-with-subtitle`,children:`CardData with subTitle`}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h3,{id:`carddata-with-contentright`,children:`CardData with contentRight`}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsx)(n.h2,{id:`arguments`,children:`Arguments`}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`title`}),` property corresponds to the main title of the card.`]}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`subTitle`}),` property allows you to add a subtitle just below the title.`]}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`description`}),` property allows you to add a description below the title and subtitle.`]}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`icon`}),` property allows you to specify the icon to display. You can put the string value of the svg.`]}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`contentFitAllSize`}),` property allows you to specify whether the content should take up all available space and have no margin around it. By default, this property is set to `,(0,h.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`variant`}),` property allows you to change the background color of the icon. Variants are `,(0,h.jsx)(n.code,{children:`error`}),`, `,(0,h.jsx)(n.code,{children:`warning`}),`, `,(0,h.jsx)(n.code,{children:`information`}),`, `,(0,h.jsx)(n.code,{children:`success`}),`, `,(0,h.jsx)(n.code,{children:`default`}),`, `,(0,h.jsx)(n.code,{children:`dark`}),`, `,(0,h.jsx)(n.code,{children:`gray`}),`, and `,(0,h.jsx)(n.code,{children:`purple`}),`.`]}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`contentRight`}),` property allows you to add content to the right of the header.`]}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`withDivider`}),` property allows you to add a divider below the header. By default, this property is set to `,(0,h.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,h.jsx)(r,{story:l})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=o(),s(),n(),d()}))();export{m as default};