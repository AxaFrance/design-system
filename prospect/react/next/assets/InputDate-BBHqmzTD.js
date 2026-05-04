import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-npIpnPBv.js";import{t as r}from"./mdx-react-shim-Zu--mdCB.js";import{i,l as a,n as o,s}from"./blocks-0mdg8u_Z.js";import{InputDateDefaultStory as c,InputDateWarningStory as l,n as u,t as d}from"./InputDate.stories-CAnHYkrR.js";function f(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`InputDate`}),`
`,(0,m.jsx)(t.h1,{id:`inputdate`,children:`InputDate`}),`
`,(0,m.jsx)(t.p,{children:`To use the InputDate import it like that:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { InputDate } from "@axa-fr/canopee-react/prospect";

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
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`(Important) Note:`}),` the `,(0,m.jsx)(t.code,{children:`hidePicker={true}`}),` prop both visually hides and functionnaly disables the date picker on browsers supporting WebKit without impacting accessibility.
For browsers `,(0,m.jsx)(t.em,{children:(0,m.jsx)(t.strong,{children:`not supporting WebKit`})}),` (such as Firefox), the date picker `,(0,m.jsx)(t.em,{children:(0,m.jsx)(t.strong,{children:`is still visually visible`})}),` but the functionnality is disabled (we use a JavaScript trick to achieve that). `,(0,m.jsx)(t.em,{children:(0,m.jsx)(t.strong,{children:`Be aware that there might be some accessibility issues`})}),` (specifically with form submissions on Enter key press).`]}),`
`,(0,m.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,m.jsx)(o,{of:c}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`warning`,children:`Warning`}),`
`,(0,m.jsxs)(t.p,{children:[`Use `,(0,m.jsx)(t.code,{children:`message`}),` with `,(0,m.jsx)(t.code,{children:`messageType="warning"`}),` to display a warning state with an orange border.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<InputDate
  label="Date de naissance"
  message="Titre du message"
  messageType="warning"
  value={new Date("2000-09-12")}
/>
`})}),`
`,(0,m.jsx)(o,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),a(),u()}))();export{p as default};