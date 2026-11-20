import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-BIs7BrnF.js";import{n as c,r as l,t as u}from"./FormHelper.stories-UZOUUIOC.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`formhelper`,children:`FormHelper`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`FormHelper`}),` shows the progress of a form made of several sections on a single
page: which sections are completed, which one is in progress and which ones are
still to fill. It can sit next to a vertical stepper or accordions.`]}),`
`,(0,p.jsx)(t.p,{children:`Do not use it with a horizontal stepper, nor as a page navigation or an anchor
menu (use the Navbar or the Anchor Menu instead).`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { FormHelper, ListFormHelper } from "@axa-fr/canopee-react/distributeur";

export const MyFormHelper = () => (
  <FormHelper title="Assistant de création">
    <ListFormHelper
      steps={[
        {
          label: "Informations clients",
          variant: "validated",
          href: "#informations-clients",
        },
        { label: "Tarification", variant: "inprogress", href: "#tarification" },
        { label: "Signature du contrat", variant: "todo" },
      ]}
    />
  </FormHelper>
);
`})}),`
`,(0,p.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,p.jsxs)(t.ol,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`FormHelper`}),`: the container, with its title (blue header) and its legend
(the three states, rendered with `,(0,p.jsx)(t.code,{children:`ItemFormHelper`}),`).`]}),`
`,(0,p.jsxs)(t.li,{children:[`The body (`,(0,p.jsx)(t.code,{children:`children`}),`), usually a `,(0,p.jsx)(t.code,{children:`ListFormHelper`}),`: the list of steps, each
rendered with `,(0,p.jsx)(t.code,{children:`ItemFormHelper`}),` and the name of the section.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`steps`,children:`Steps`}),`
`,(0,p.jsxs)(t.p,{children:[`Each step of `,(0,p.jsx)(t.code,{children:`ListFormHelper`}),` takes a `,(0,p.jsx)(t.code,{children:`label`}),`, a `,(0,p.jsx)(t.code,{children:`variant`}),` (`,(0,p.jsx)(t.code,{children:`todo`}),`,
`,(0,p.jsx)(t.code,{children:`inprogress`}),` or `,(0,p.jsx)(t.code,{children:`validated`}),`) and an optional `,(0,p.jsx)(t.code,{children:`href`}),` to the section. If you
already drive `,(0,p.jsx)(t.code,{children:`VerticalStep`}),` components, map their mode: `,(0,p.jsx)(t.code,{children:`locked`}),` → `,(0,p.jsx)(t.code,{children:`todo`}),`,
`,(0,p.jsx)(t.code,{children:`edited`}),` → `,(0,p.jsx)(t.code,{children:`inprogress`}),`, `,(0,p.jsx)(t.code,{children:`validated`}),` → `,(0,p.jsx)(t.code,{children:`validated`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`sticky`,children:`Sticky`}),`
`,(0,p.jsxs)(t.p,{children:[`The helper does not position itself: make it sticky from your layout, for
example with a `,(0,p.jsx)(t.code,{children:`className`}),`.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`.my-form-helper {
  position: sticky;
  top: 1rem;
}
`})}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The container is an `,(0,p.jsx)(t.code,{children:`aside`}),` named "Progression du formulaire" (`,(0,p.jsx)(t.code,{children:`aria-label`}),`
can be overridden) and the title is a real heading (`,(0,p.jsx)(t.code,{children:`heading`}),`, `,(0,p.jsx)(t.code,{children:`h2`}),` by
default).`]}),`
`,(0,p.jsxs)(t.li,{children:[`Steps are an ordered list. When a step has an `,(0,p.jsx)(t.code,{children:`href`}),`, the list is wrapped in a
`,(0,p.jsx)(t.code,{children:`nav`}),` named "étapes du formulaire" (`,(0,p.jsx)(t.code,{children:`navAriaLabel`}),`).`]}),`
`,(0,p.jsxs)(t.li,{children:[`The first step in progress gets `,(0,p.jsx)(t.code,{children:`aria-current="step"`}),`.`]}),`
`,(0,p.jsx)(t.li,{children:`Screen readers read the name of each step followed by its state, e.g.
"Tarification, en cours". Links are always underlined.`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`stateLabels`}),` replaces the state texts of the legend and of the steps, e.g.
for another language.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(s,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),a(),o(),l()})))()}m();export{f as default};