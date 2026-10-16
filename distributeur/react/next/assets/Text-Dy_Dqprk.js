import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{n as c,r as l,t as u}from"./Text.stories-kKcJ9rZ8.js";import{i as d,n as f,o as p,r as m,t as h}from"./TextInput.stories-D1r3Ksil.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.h1,{id:`input-text`,children:`Input Text`}),`
`,(0,v.jsxs)(t.ol,{children:[`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#text`,children:`Text`})}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`#textinput`,children:`TextInput`}),`
`,(0,v.jsxs)(t.ol,{children:[`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#textinput-required`,children:`TextInput Required`})}),`
`]}),`
`]}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#textinput-error`,children:`TextInput Error`})}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`#text-success`,children:`Text Success`}),`
`,(0,v.jsxs)(t.ol,{children:[`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#text-disabled`,children:`Text Disabled`})}),`
`]}),`
`]}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#textinput-rich-label`,children:`TextInput Rich Label`})}),`
`]}),`
`,(0,v.jsx)(i,{of:c}),`
`,(0,v.jsx)(t.h2,{id:`text`,children:`Text`}),`
`,(0,v.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`import { Text } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,v.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`const textReturn = () => (
  <form className="af-form" name="myform">
    <Text id="nameid" name="name" placeholder="Your name" value="John Doe" />
  </form>
);
export default textReturn;
`})}),`
`,(0,v.jsx)(r,{of:u}),`
`,(0,v.jsx)(s,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`textinput`,children:`TextInput`}),`
`,(0,v.jsx)(t.h3,{id:`import-1`,children:`Import`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`import { TextInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,v.jsx)(t.h3,{id:`use-1`,children:`Use`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`const textInputReturn = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="nameid"
      name="name"
      label="Your name"
      value="John Doe"
      placeholder="Your name"
      helpMessage="Aide à la saisie"
      onChange={(e) => {
        console.log(e);
      }}
    />
  </form>
);
export default textInputReturn;
`})}),`
`,(0,v.jsx)(r,{of:m}),`
`,(0,v.jsx)(s,{of:m}),`
`,(0,v.jsx)(t.h3,{id:`textinput-required`,children:`TextInput Required`}),`
`,(0,v.jsxs)(t.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,v.jsx)(t.code,{children:`required`}),` prop to `,(0,v.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`textinput-error`,children:`TextInput Error`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`const textInputError = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="nameid"
      name="name"
      label="Your name"
      value="John Doe"
      placeholder="Your name"
      required
      message="The field is required"
      messageType={MessageTypes.error}
      forceDisplayMessage={true}
    />
  </form>
);
export default textInputError;
`})}),`
`,(0,v.jsx)(r,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`text-success`,children:`Text Success`}),`
`,(0,v.jsx)(t.h3,{id:`import-2`,children:`Import`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`import { TextInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,v.jsx)(t.h3,{id:`use-2`,children:`Use`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`const textSuccess = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="nameid"
      name="name"
      label="Your name"
      value="John Doe"
      placeholder="Your name"
      message="Success Message Type"
      messageType={MessageTypes.success}
      forceDisplayMessage={true}
    />
  </form>
);
export default textSuccess;
`})}),`
`,(0,v.jsx)(r,{of:d}),`
`,(0,v.jsx)(t.h3,{id:`text-disabled`,children:`Text Disabled`}),`
`,(0,v.jsx)(t.p,{children:`To achieve Text Disabled, you need to add this :`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`disabled = { true };
`})}),`
`,(0,v.jsxs)(t.p,{children:[`in `,(0,v.jsx)(t.strong,{children:`the component of your choice`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`textinput-rich-label`,children:`TextInput Rich Label`}),`
`,(0,v.jsx)(t.h3,{id:`import-3`,children:`Import`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`import { TextInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,v.jsx)(t.h3,{id:`use-3`,children:`Use`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`const richLabel = (
  <span>
    Place name <i>optional</i>
  </span>
);

const textInputRichLabel = () => (
  <form className="af-form" name="myform">
    <TextInput
      id="nameid"
      name="name"
      label={richLabel}
      value="John Doe"
      placeholder="Your name"
      helpMessage="Aide à la saisie"
      message="The field is required"
      messageType={MessageTypes.error}
      forceDisplayMessage={true}
    />
  </form>
);
export default textInputRichLabel;
`})}),`
`,(0,v.jsx)(r,{of:f})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),a(),o(),l(),p()})))()}y();export{_ as default};