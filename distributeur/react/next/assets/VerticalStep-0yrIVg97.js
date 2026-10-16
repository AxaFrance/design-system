import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,s}from"./iframe-CUw-2XJG.js";import{i as c,n as l,r as u,t as d}from"./VerticalStep.stories-CPOE7L3U.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`verticalstep`,children:`VerticalStep`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`VerticalStep`}),` component allows you to create a step in a vertical stepper. It is designed to be used in forms or processes where you need to guide the user through multiple steps, each with its own content and actions.`]}),`
`,(0,m.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { VerticalStep } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,m.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`export const Component = () => {
  const [configurationStepMode, setConfigurationStepMode] = useState("locked");

  return (
    <VerticalStep
      title="Configuration"
      id="configurationStepTitle"
      stepMode={configurationStepMode}
      onEdit={() => setConfigurationStepMode("edited")}
      form={
        <form>
          <fieldset>
            <legend className={globalCss.cacherLegende}>
              Formulaire Configuration
            </legend>
            <TextInput
              required
              id="dateEffet"
              name="dateEffet"
              label="Date d'effet"
              value={dateEffetFormatFr}
              helpMessage="jj/mm/aaaa"
            />
            <BoutonConfirmation
              id="validation-configuration"
              titre="Valider"
              actionAuClique={submit}
            />
          </fieldset>
        </form>
      }
      restitution={<p>Restitution</p>}
    />
  );
};
`})}),`
`,(0,m.jsx)(t.h2,{id:`verticalstep-1`,children:`VerticalStep`}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`multiple-verticalsteps`,children:`Multiple VerticalSteps`}),`
`,(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`arguments`,children:`Arguments`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`title`}),` property corresponds to the step's title.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`id`}),` property is the id of this title, allowing for redirections.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`stepMode`}),` property specifies the current mode of the step, with three possible options: `,(0,m.jsx)(t.code,{children:`locked`}),`, `,(0,m.jsx)(t.code,{children:`edited`}),`, or `,(0,m.jsx)(t.code,{children:`validated`}),`. This is a state to be defined within the component.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`editButtonLabel`}),` property is the label of the Modify button, which is displayed when the step is in `,(0,m.jsx)(t.code,{children:`validated`}),` mode. It defaults to "Modifier".`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`editButtonAriaLabel`}),` property is the aria-label of the Modify button, which is used for accessibility purposes. It defaults to "Modifier l'étape XXX" where XXX is the `,(0,m.jsx)(t.code,{children:`title`}),` property.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`onEdit`}),` property is the function called when the Modify button is clicked. It can be used to change the step's mode, but also to trigger other functions.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`form`}),` property is a form to display within the step. It is a `,(0,m.jsx)(t.code,{children:`ReactNode`}),` allowing you to specify a complex HTML structure.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`restitution`}),` property is the content to display when the step is validated. It is a `,(0,m.jsx)(t.code,{children:`ReactNode`}),` allowing you to specify a complex HTML structure.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`contentRight`}),` property is the content to display on the right side of the step title. It is `,(0,m.jsx)(t.code,{children:`string`}),` only.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`stateLabels`}),` property lets you customize the short label appended to the step's `,(0,m.jsx)(t.code,{children:`aria-label`}),` for each mode (validated / edited / locked). The component renders the section's `,(0,m.jsx)(t.code,{children:`aria-label`}),` as:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{children:"Étape verticale ${title} (${stateLabel})\n"})}),`
`,(0,m.jsx)(t.p,{children:`Default labels (French):`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-html`,children:`<section aria-label="Étape verticale Configuration (validée)"></section>
<section
  aria-label="Étape verticale Configuration (en cours de modification)"
></section>
<section aria-label="Étape verticale Configuration (verrouillée)"></section>
`})}),`
`,(0,m.jsx)(t.p,{children:`Custom labels (English):`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<VerticalStep
  title="Configuration"
  stateLabels={{
    validatedState: "completed",
    editState: "being edited",
    lockedState: "locked",
  }}
/>
`})}),`
`,(0,m.jsx)(t.p,{children:`Renders as:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-html`,children:`<section aria-label="Étape verticale Configuration (completed)"></section>
<section aria-label="Étape verticale Configuration (being edited)"></section>
<section aria-label="Étape verticale Configuration (locked)"></section>
`})}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Usage (TypeScript / TSX)`})}),`
`,(0,m.jsx)(s,{story:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),a(),o(),c()})))()}h();export{p as default};