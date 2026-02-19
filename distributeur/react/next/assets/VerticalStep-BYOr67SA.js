import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import{M as a,C as i,A as l}from"./index-_uXN_WwG.js";import{V as c,a as o,M as d}from"./VerticalStep.stories-CQYHEl6w.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BNh123Mb.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./EditorialMessage-BmsJa9B6.js";import"./VerticalStep-JbIsHnCT.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(t.h1,{id:"verticalstep",children:"VerticalStep"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"VerticalStep"})," component allows you to create a step in a vertical stepper. It is designed to be used in forms or processes where you need to guide the user through multiple steps, each with its own content and actions."]}),`
`,e.jsx(t.h2,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { VerticalStep } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`export const Component = () => {
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
              id="dateEffet"
              name="dateEffet"
              label="Date d'effet"
              classModifier="required"
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
`,e.jsx(t.h2,{id:"verticalstep-1",children:"VerticalStep"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(t.h2,{id:"multiple-verticalsteps",children:"Multiple VerticalSteps"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h2,{id:"arguments",children:"Arguments"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"title"})," property corresponds to the step's title."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"id"})," property is the id of this title, allowing for redirections."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"stepMode"})," property specifies the current mode of the step, with three possible options: ",e.jsx(t.code,{children:"locked"}),", ",e.jsx(t.code,{children:"edited"}),", or ",e.jsx(t.code,{children:"validated"}),". This is a state to be defined within the component."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"editButtonLabel"})," property is the label of the Modify button, which is displayed when the step is in ",e.jsx(t.code,{children:"validated"}),' mode. It defaults to "Modifier".']}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"editButtonAriaLabel"}),` property is the aria-label of the Modify button, which is used for accessibility purposes. It defaults to "Modifier l'étape XXX" where XXX is the `,e.jsx(t.code,{children:"title"})," property."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"onEdit"})," property is the function called when the Modify button is clicked. It can be used to change the step's mode, but also to trigger other functions."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"form"})," property is a form to display within the step. It is a ",e.jsx(t.code,{children:"ReactNode"})," allowing you to specify a complex HTML structure."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"restitution"})," property is the content to display when the step is validated. It is a ",e.jsx(t.code,{children:"ReactNode"})," allowing you to specify a complex HTML structure."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"contentRight"})," property is the content to display on the right side of the step title. It is ",e.jsx(t.code,{children:"string"})," only."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"stateLabels"})," property lets you customize the short label appended to the step's ",e.jsx(t.code,{children:"aria-label"})," for each mode (validated / edited / locked). The component renders the section's ",e.jsx(t.code,{children:"aria-label"})," as:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:"Étape verticale ${title} (${stateLabel})\n"})}),`
`,e.jsx(t.p,{children:"Default labels (French):"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<section aria-label="Étape verticale Configuration (validée)"></section>
<section
  aria-label="Étape verticale Configuration (en cours de modification)"
></section>
<section aria-label="Étape verticale Configuration (verrouillée)"></section>
`})}),`
`,e.jsx(t.p,{children:"Custom labels (English):"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<VerticalStep
  title="Configuration"
  stateLabels={{
    validatedState: "completed",
    editState: "being edited",
    lockedState: "locked",
  }}
/>
`})}),`
`,e.jsx(t.p,{children:"Renders as:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<section aria-label="Étape verticale Configuration (completed)"></section>
<section aria-label="Étape verticale Configuration (being edited)"></section>
<section aria-label="Étape verticale Configuration (locked)"></section>
`})}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Usage (TypeScript / TSX)"})}),`
`,e.jsx(l,{story:o})]})}function C(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{C as default};
