import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{a as c,i as l,n as u,r as d,t as f}from"./Timeline.stories-Cahd-T9j.js";function p(e){let t={code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(t.h1,{id:`timeline`,children:`Timeline`}),`
`,(0,h.jsx)(t.p,{children:`Le composant Timeline permet d'afficher une suite d'étapes chronologiques.
Chaque item contient un en-tête, un contenu détaillé et une date.`}),`
`,(0,h.jsx)(t.p,{children:`Le composant expose un variant :`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`default`}),` : affichage actuel avec zone repliable `,(0,h.jsx)(t.code,{children:`details/summary`})]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`withoutDetails`}),` : affichage en timeline simple, sans zone de détails`]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:`Le composant prend tout l'espace de son conteneur parent. Vous pouvez donc régler la taille de celui-ci en réglant la taille du conteneur.`}),`
`,(0,h.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { Timeline } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,h.jsx)(t.h3,{id:`utilisation`,children:`Utilisation`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`export const ExempleTimeline = () => (
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
`,(0,h.jsx)(t.h3,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(s,{of:f}),`
`,(0,h.jsx)(t.h3,{id:`variante`,children:`Variante`}),`
`,(0,h.jsx)(t.h4,{id:`item-unique`,children:`Item unique`}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(t.h4,{id:`without-details`,children:`Without details`}),`
`,(0,h.jsx)(r,{of:l})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),a(),o(),c()})))()}g();export{m as default};