import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-Das2liAK.js";import{i,l as a,n as o,s}from"./blocks-DdUbxDfY.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./DropdownMultiSelect.stories-BcxJ0KAT.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...r(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:u,name:`DropdownMultiSelect`}),`
`,(0,g.jsx)(t.h1,{id:`dropdownmultiselect`,children:`DropdownMultiSelect`}),`
`,(0,g.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { DropdownMultiSelect } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,g.jsx)(t.h2,{id:`uses`,children:`Uses`}),`
`,(0,g.jsxs)(t.p,{children:[`The `,(0,g.jsx)(t.code,{children:`DropdownMultiSelect`}),` component displays a dropdown containing a list of
checkboxes. Selected options are summarized in the trigger and displayed as
tags below it.`]}),`
`,(0,g.jsxs)(t.p,{children:[`The component accepts an array of `,(0,g.jsx)(t.code,{children:`items`}),`. Each item must have an `,(0,g.jsx)(t.code,{children:`id`}),` and a
`,(0,g.jsx)(t.code,{children:`label`}),`. An item can be initially selected with `,(0,g.jsx)(t.code,{children:`checked: true`}),`.`]}),`
`,(0,g.jsxs)(t.p,{children:[`The component is always `,(0,g.jsx)(t.strong,{children:`uncontrolled`}),`: it manages its own selection state
internally, and clicking an item always updates it, so it works inside a
plain `,(0,g.jsx)(t.code,{children:`<form>`}),` without any extra wiring. `,(0,g.jsx)(t.code,{children:`defaultValue`}),` can be used to seed
the initial selected IDs. When it is not provided, the initial selection is
inferred from the items whose `,(0,g.jsx)(t.code,{children:`checked`}),` property is `,(0,g.jsx)(t.code,{children:`true`}),`. Changing
`,(0,g.jsx)(t.code,{children:`defaultValue`}),` after the initial render has no effect, exactly like a native
`,(0,g.jsx)(t.code,{children:`<input defaultValue>`}),`.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`onChange`}),` is called with the native change event of the checkbox that was
selected or deselected. The selected ID is available through
`,(0,g.jsx)(t.code,{children:`event.target.value`}),` and the new state through `,(0,g.jsx)(t.code,{children:`event.target.checked`}),`.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`hideThreshold`}),` controls how many selected tags remain visible below the
dropdown. Additional tags are grouped into an overflow tag showing the number
of hidden selections.`]}),`
`,(0,g.jsx)(t.h3,{id:`dropdownmultiselect-1`,children:`DropdownMultiSelect`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { DropdownMultiSelect } from "@axa-fr/canopee-react/prospect";

export const DropdownMultiSelectComponent = () => (
  <DropdownMultiSelect
    label="Choix multiples"
    helper="Sélectionnez une ou plusieurs options"
    items={[
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
      { id: "option-3", label: "Option 3" },
    ]}
    defaultValue={["option-1"]}
    hideThreshold={2}
    onChange={(event) => {
      console.log(event.target.value, event.target.checked);
    }}
  />
);
`})}),`
`,(0,g.jsx)(t.h3,{id:`dropdownmultiselect-playground`,children:`DropdownMultiSelect Playground`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(t.h3,{id:`dropdownmultiselect-empty`,children:`DropdownMultiSelect Empty`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(i,{of:f}),`
`,(0,g.jsx)(t.h3,{id:`dropdownmultiselect-error-in-form`,children:`DropdownMultiSelect Error in form`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(t.h3,{id:`dropdownmultiselect-disabled`,children:`DropdownMultiSelect Disabled`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(i,{of:p})]})}function h(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),n(),a(),d()})))()}_();export{h as default};