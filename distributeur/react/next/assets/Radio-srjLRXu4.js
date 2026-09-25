import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-C_nIIhBu.js";import{c as n,d as r,f as i,m as a,p as o,s,u as c,w as l}from"./iframe-BmTal37z.js";import{t as u}from"./mdx-react-shim-BpSfdEsW.js";import{DefaultStory as d,States as f,t as p}from"./RadioButton.stories-zyRsGyam.js";import{DefaultStory as m,States as h,WithIconStory as g,t as _}from"./RadioCard.stories-C8_s72bd.js";import{HorizontalStory as v,VerticalStory as y,t as b}from"./RadioGroup.stories-w4uV_gId.js";import{n as x,t as S}from"./RadioInput.stories-gL-YGL0F.js";import{DefaultStory as C,States as w,t as T}from"./RadioItem.stories-D9fAA62A.js";import{DefaultStory as E,States as D,t as O}from"./RadioText.stories-ssp1Mz31.js";function k(e){let a={code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{of:S,title:`Form/Experimental/Radio`}),`
`,(0,j.jsx)(o,{}),`
`,(0,j.jsx)(i,{children:`How to use the experimental radio components`}),`
`,(0,j.jsx)(a.h2,{id:`️-experimental-components`,children:`⚠️ Experimental Components`}),`
`,(0,j.jsx)(a.p,{children:`These components are experimental and may evolve in future releases.
Use them in production with care and prefer the high-level API when possible.`}),`
`,(0,j.jsx)(a.h2,{id:`component-map`,children:`Component map`}),`
`,(0,j.jsx)(a.p,{children:`The radio package is designed in layers:`}),`
`,(0,j.jsxs)(a.ul,{children:[`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`RadioInput`}),`: full field component (label, help/error messages, and radio options)`]}),`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`RadioGroup`}),`: layout and orientation wrapper for multiple radio options`]}),`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`RadioButton`}),` and `,(0,j.jsx)(a.code,{children:`RadioCard`}),`: option variants to use inside a group`]}),`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`RadioText`}),`: text radio option with integrated label`]}),`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`RadioItem`}),`: low-level native radio input only`]}),`
`]}),`
`,(0,j.jsx)(a.h2,{id:`recommended-entry-point-radioinput`,children:`Recommended entry point: RadioInput`}),`
`,(0,j.jsxs)(a.p,{children:[`Start with `,(0,j.jsx)(a.code,{children:`RadioInput`}),` when building forms. It handles field-level concerns and keeps usage simple.`]}),`
`,(0,j.jsx)(r,{}),`
`,(0,j.jsx)(n,{}),`
`,(0,j.jsx)(a.h3,{id:`example`,children:`Example`}),`
`,(0,j.jsx)(a.pre,{children:(0,j.jsx)(a.code,{className:`language-tsx`,children:`import { RadioInput } from "@axa-fr/canopee-react/distributeur/experimental";

const options = [
  { id: "option1", name: "transport", value: "train", label: "Train" },
  { id: "option2", name: "transport", value: "car", label: "Car" },
  { id: "option3", name: "transport", value: "bike", label: "Bike" },
];

export const Example = () => (
  <RadioInput
    label="Preferred transport"
    helpMessage="Choose one option"
    errorMessage=""
    options={options}
    variant="button"
    orientation="horizontal"
  />
);
`})}),`
`,(0,j.jsx)(a.h2,{id:`layout-with-radiogroup`,children:`Layout with RadioGroup`}),`
`,(0,j.jsxs)(a.p,{children:[`Use `,(0,j.jsx)(a.code,{children:`RadioGroup`}),` when you need full control over composition of options.`]}),`
`,(0,j.jsx)(s,{of:v}),`
`,(0,j.jsx)(s,{of:y}),`
`,(0,j.jsx)(a.h3,{id:`orientation-details`,children:`Orientation details`}),`
`,(0,j.jsxs)(a.p,{children:[(0,j.jsx)(a.code,{children:`orientation`}),` controls how options are laid out in the group.`]}),`
`,(0,j.jsxs)(a.ul,{children:[`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`horizontal`}),`: options are displayed on one row when possible`]}),`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`vertical`}),`: options are stacked`]}),`
`]}),`
`,(0,j.jsx)(a.p,{children:`Recommended usage:`}),`
`,(0,j.jsxs)(a.ul,{children:[`
`,(0,j.jsxs)(a.li,{children:[`Use `,(0,j.jsx)(a.code,{children:`horizontal`}),` for short labels and a limited number of options`]}),`
`,(0,j.jsxs)(a.li,{children:[`Use `,(0,j.jsx)(a.code,{children:`vertical`}),` for long labels, rich content, or better readability on narrow screens`]}),`
`]}),`
`,(0,j.jsxs)(a.p,{children:[`When using `,(0,j.jsx)(a.code,{children:`RadioInput`}),`, pass `,(0,j.jsx)(a.code,{children:`orientation`}),` directly:`]}),`
`,(0,j.jsx)(a.pre,{children:(0,j.jsx)(a.code,{className:`language-tsx`,children:`<RadioInput
  label="Preferred transport"
  options={options}
  variant="button"
  orientation="vertical"
/>
`})}),`
`,(0,j.jsxs)(a.p,{children:[`For card layouts, `,(0,j.jsx)(a.code,{children:`orientation="horizontal"`}),` creates a responsive card grid and `,(0,j.jsx)(a.code,{children:`orientation="vertical"`}),` switches to a stacked layout.`]}),`
`,(0,j.jsx)(a.h2,{id:`option-variants`,children:`Option variants`}),`
`,(0,j.jsx)(a.h3,{id:`radiobutton`,children:`RadioButton`}),`
`,(0,j.jsx)(a.p,{children:`Compact variant for dense layouts.`}),`
`,(0,j.jsx)(s,{of:d}),`
`,(0,j.jsx)(s,{of:f}),`
`,(0,j.jsx)(a.h3,{id:`radiocard`,children:`RadioCard`}),`
`,(0,j.jsx)(a.p,{children:`Rich variant for visual choices (icon/action).`}),`
`,(0,j.jsx)(s,{of:m}),`
`,(0,j.jsx)(s,{of:g}),`
`,(0,j.jsx)(s,{of:h}),`
`,(0,j.jsx)(a.h4,{id:`card-variant-details`,children:`Card variant details`}),`
`,(0,j.jsxs)(a.p,{children:[`Use `,(0,j.jsx)(a.code,{children:`variant="card"`}),` when each option needs more context than a simple label.`]}),`
`,(0,j.jsx)(a.p,{children:`Typical card option fields:`}),`
`,(0,j.jsxs)(a.ul,{children:[`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`label`}),`: main option text`]}),`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`icon`}),`: visual cue for quick scanning`]}),`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`action`}),`: optional secondary text for details`]}),`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`disabled`}),`: disable a specific option`]}),`
`]}),`
`,(0,j.jsx)(a.p,{children:`You can also expose an add button for dynamic workflows:`}),`
`,(0,j.jsxs)(a.ul,{children:[`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`showAddButton`}),`: displays an extra add card/button`]}),`
`,(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:`onAdd`}),`: callback triggered when add is selected`]}),`
`]}),`
`,(0,j.jsx)(a.pre,{children:(0,j.jsx)(a.code,{className:`language-tsx`,children:`<RadioInput
  label="Select a template"
  variant="card"
  orientation="horizontal"
  showAddButton
  onAdd={() => {
    // open creation flow
  }}
  options={[
    {
      id: "template-a",
      name: "templates",
      value: "a",
      label: "Template A",
      action: "Recommended for standard cases",
      icon: <MyTemplateIcon />,
    },
    {
      id: "template-b",
      name: "templates",
      value: "b",
      label: "Template B",
      action: "Advanced customization",
    },
  ]}
/>
`})}),`
`,(0,j.jsx)(a.h2,{id:`low-level-building-blocks`,children:`Low-level building blocks`}),`
`,(0,j.jsx)(a.h3,{id:`radiotext`,children:`RadioText`}),`
`,(0,j.jsx)(a.p,{children:`Use when you need a radio item with a simple label and custom group composition.`}),`
`,(0,j.jsx)(s,{of:E}),`
`,(0,j.jsx)(s,{of:D}),`
`,(0,j.jsx)(a.h3,{id:`radioitem`,children:`RadioItem`}),`
`,(0,j.jsx)(a.p,{children:`Use only when you need to fully control label rendering and surrounding markup.`}),`
`,(0,j.jsx)(s,{of:C}),`
`,(0,j.jsx)(s,{of:w}),`
`,(0,j.jsx)(a.h2,{id:`accessibility-checklist`,children:`Accessibility checklist`}),`
`,(0,j.jsxs)(a.ul,{children:[`
`,(0,j.jsxs)(a.li,{children:[`Share the same `,(0,j.jsx)(a.code,{children:`name`}),` for options in a single group`]}),`
`,(0,j.jsxs)(a.li,{children:[`Ensure each option has a unique `,(0,j.jsx)(a.code,{children:`id`})]}),`
`,(0,j.jsx)(a.li,{children:`Use meaningful labels for all options`}),`
`,(0,j.jsxs)(a.li,{children:[`Prefer field-level help and error messages via `,(0,j.jsx)(a.code,{children:`RadioInput`})]}),`
`,(0,j.jsxs)(a.li,{children:[`Use `,(0,j.jsx)(a.code,{children:`aria-invalid`}),` when displaying an error state`]}),`
`]})]})}function A(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,j.jsx)(n,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;e((()=>{j=l(),u(),a(),p(),_(),b(),x(),T(),O()}))();export{A as default};