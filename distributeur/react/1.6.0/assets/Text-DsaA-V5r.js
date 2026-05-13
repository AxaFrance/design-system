import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-De-9TtK1.js";import{t as s}from"./mdx-react-shim-BooHXHLT.js";import{TextStory as c,n as l,t as u}from"./Text.stories-uRqM0qZy.js";import{TextInputErrorStory as d,TextInputRichLabelStory as f,TextInputStory as p,TextInputSuccessStory as m,t as h}from"./TextInput.stories-CSAlY5Yz.js";function g(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.h1,{id:`input-text`,children:`Input Text`}),`
`,(0,v.jsxs)(r.ol,{children:[`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.a,{href:`#text`,children:`Text`})}),`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.a,{href:`#textinput`,children:`TextInput`}),`
`,(0,v.jsxs)(r.ol,{children:[`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.a,{href:`#textinput-required`,children:`TextInput Required`})}),`
`]}),`
`]}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.a,{href:`#textinput-error`,children:`TextInput Error`})}),`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.a,{href:`#text-success`,children:`Text Success`}),`
`,(0,v.jsxs)(r.ol,{children:[`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.a,{href:`#text-disabled`,children:`Text Disabled`})}),`
`]}),`
`]}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.a,{href:`#textinput-rich-label`,children:`TextInput Rich Label`})}),`
`]}),`
`,(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(r.h2,{id:`text`,children:`Text`}),`
`,(0,v.jsx)(r.h3,{id:`import`,children:`Import`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`import { Text } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,v.jsx)(r.h3,{id:`use`,children:`Use`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`const textReturn = () => (
  <form className="af-form" name="myform">
    <Text id="nameid" name="name" placeholder="Your name" value="John Doe" />
  </form>
);
export default textReturn;
`})}),`
`,(0,v.jsx)(i,{of:c}),`
`,(0,v.jsx)(n,{of:c}),`
`,(0,v.jsx)(r.h2,{id:`textinput`,children:`TextInput`}),`
`,(0,v.jsx)(r.h3,{id:`import-1`,children:`Import`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`import { TextInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,v.jsx)(r.h3,{id:`use-1`,children:`Use`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`const textInputReturn = () => (
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
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n,{of:p}),`
`,(0,v.jsx)(r.h3,{id:`textinput-required`,children:`TextInput Required`}),`
`,(0,v.jsxs)(r.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,v.jsx)(r.code,{children:`required`}),` prop to `,(0,v.jsx)(r.code,{children:`true`}),`.`]}),`
`,(0,v.jsxs)(r.p,{children:[`Alternatively you can to add to the `,(0,v.jsx)(r.code,{children:`classModifier`}),` the value `,(0,v.jsx)(r.code,{children:`required`}),`. This behaviour exists to keep backward compatibility but `,(0,v.jsx)(r.em,{children:`might`}),` disapear in the future.`]}),`
`,(0,v.jsx)(r.h2,{id:`textinput-error`,children:`TextInput Error`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`const textInputError = () => (
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
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(r.h2,{id:`text-success`,children:`Text Success`}),`
`,(0,v.jsx)(r.h3,{id:`import-2`,children:`Import`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`import { TextInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,v.jsx)(r.h3,{id:`use-2`,children:`Use`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`const textSuccess = () => (
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
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(r.h3,{id:`text-disabled`,children:`Text Disabled`}),`
`,(0,v.jsx)(r.p,{children:`To achieve Text Disabled, you need to add this :`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`disabled = { true };
`})}),`
`,(0,v.jsxs)(r.p,{children:[`in `,(0,v.jsx)(r.strong,{children:`the component of your choice`}),`.`]}),`
`,(0,v.jsx)(r.h2,{id:`textinput-rich-label`,children:`TextInput Rich Label`}),`
`,(0,v.jsx)(r.h3,{id:`import-3`,children:`Import`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`import { TextInput } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,v.jsx)(r.h3,{id:`use-3`,children:`Use`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-javascript`,children:`const richLabel = (
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
`,(0,v.jsx)(i,{of:f})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=o(),s(),r(),l(),h()}))();export{_ as default};