import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CjUrzS1v.js";import{t as c}from"./distributeur-BzQs3Sl2.js";import{n as l,r as u,t as d}from"./MandatoryMention.stories-DB9Xr6HA.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`mandatorymention`,children:`MandatoryMention`}),`
`,(0,m.jsx)(t.p,{children:`Mandatory Mention item is used to inform the user of the expected completion of a form: either all fields are required, or only some of them`}),`
`,(0,m.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { MandatoryMention } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,m.jsx)(t.h2,{id:`use`,children:`Use`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { MandatoryMention } from "@axa-fr/canopee-react/distributeur";

function FormHeader() {
  return (
    <>
      <MandatoryMention variant="one" />
      <MandatoryMention variant="all" />
    </>
  );
}
`})}),`
`,(0,m.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(s,{of:d}),`
`,(0,m.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`variant="one": Champs obligatoires *`}),`
`,(0,m.jsx)(t.li,{children:`variant="all": Tous les champs sont obligatoires`}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),a(),o(),u(),c()})))()}h();export{p as default};