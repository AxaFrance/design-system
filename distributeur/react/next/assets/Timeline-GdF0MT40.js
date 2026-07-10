import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-DG7rRW19.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-DBP_00SS.js";import{t as s}from"./mdx-react-shim-BMNvt2JC.js";import{Default as c,SingleItem as l,WithoutDetails as u,n as d,t as f}from"./Timeline.stories-BtcVXpqt.js";function p(e){let r={code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(r.h1,{id:`timeline`,children:`Timeline`}),`
`,(0,h.jsx)(r.p,{children:`Le composant Timeline permet d'afficher une suite d'étapes chronologiques.
Chaque item contient un en-tête, un contenu détaillé et une date.`}),`
`,(0,h.jsx)(r.p,{children:`Le composant expose un variant :`}),`
`,(0,h.jsxs)(r.ul,{children:[`
`,(0,h.jsxs)(r.li,{children:[(0,h.jsx)(r.code,{children:`default`}),` : affichage actuel avec zone repliable `,(0,h.jsx)(r.code,{children:`details/summary`})]}),`
`,(0,h.jsxs)(r.li,{children:[(0,h.jsx)(r.code,{children:`withoutDetails`}),` : affichage en timeline simple, sans zone de détails`]}),`
`]}),`
`,(0,h.jsx)(r.p,{children:`Le composant prend tout l'espace de son conteneur parent. Vous pouvez donc régler la taille de celui-ci en réglant la taille du conteneur.`}),`
`,(0,h.jsx)(r.h3,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-tsx`,children:`import { Timeline } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(r.h3,{id:`utilisation`,children:`Utilisation`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-tsx`,children:`export const ExempleTimeline = () => (
  <Timeline
    items={[
      {
        header: "Etape 1",
        details: "Details de la premiere etape",
        date: new Date("2024-11-14"),
      },
      {
        header: "Etape 2",
        details: "Details de la deuxieme etape",
        date: new Date("2035-12-17"),
      },
    ]}
  />
);
`})}),`
`,(0,h.jsx)(r.h3,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n,{of:c}),`
`,(0,h.jsx)(r.h3,{id:`variante`,children:`Variante`}),`
`,(0,h.jsx)(r.h4,{id:`item-unique`,children:`Item unique`}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(r.h4,{id:`without-details`,children:`Without details`}),`
`,(0,h.jsx)(i,{of:u})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=o(),s(),r(),d()}))();export{m as default};