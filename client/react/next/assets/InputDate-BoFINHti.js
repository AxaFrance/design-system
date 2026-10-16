import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-BR0-TDj_.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-38CJBNT-.js";import{i as c,n as l,r as u,t as d}from"./InputDate.stories-CVGOvWRd.js";function f(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...s(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:u,name:`InputDate`}),`
`,(0,m.jsx)(n.h1,{id:`inputdate`,children:`InputDate`}),`
`,(0,m.jsx)(n.p,{children:`To use the InputDate import it like that:`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { InputDate } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <>
    <InputDate
      moreButtonLabel="En savoir plus"
      description="Description"
      helper="Informations complémentaires"
      id="uniqueId"
      label="Date de naissance"
      message=""
      name="birthDate"
      onChange={() => {}}
      hidePicker={false}
      required
    />
  </>
);
`})}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.strong,{children:`(Important) Note:`}),` the `,(0,m.jsx)(n.code,{children:`hidePicker={true}`}),` prop both visually hides and functionnaly disables the date picker on browsers supporting WebKit without impacting accessibility.
For browsers `,(0,m.jsx)(n.em,{children:(0,m.jsx)(n.strong,{children:`not supporting WebKit`})}),` (such as Firefox), the date picker `,(0,m.jsx)(n.em,{children:(0,m.jsx)(n.strong,{children:`is still visually visible`})}),` but the functionnality is disabled (we use a JavaScript trick to achieve that). `,(0,m.jsx)(n.em,{children:(0,m.jsx)(n.strong,{children:`Be aware that there might be some accessibility issues`})}),` (specifically with form submissions on Enter key press).`]}),`
`,(0,m.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(t,{of:d}),`
`,(0,m.jsx)(n.h2,{id:`warning`,children:`Warning`}),`
`,(0,m.jsxs)(n.p,{children:[`Use `,(0,m.jsx)(n.code,{children:`message`}),` with `,(0,m.jsx)(n.code,{children:`messageType="warning"`}),` to display a warning state with an orange border.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<InputDate
  label="Date de naissance"
  message="Titre du message"
  messageType="warning"
  value={new Date("2025-01-01")}
/>
`})}),`
`,(0,m.jsx)(r,{of:l})]})}function p(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=a(),o(),n(),c()})))()}h();export{p as default};