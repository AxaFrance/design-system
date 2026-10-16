import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{r as c,t as l}from"./Radio.stories-BBUczRd8.js";import{r as u,t as d}from"./RadioInput.stories-C9UiW_qD.js";import{n as f,r as p,t as m}from"./RadioItem.stories-CSZ_TPWO.js";function h(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(t.h1,{id:`radio-components`,children:`Radio components`}),`
`,(0,_.jsx)(t.h2,{id:`radioitem`,children:`RadioItem`}),`
`,(0,_.jsx)(t.p,{children:`This is the smallest component for the radio. It only contains the input with a label.`}),`
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(s,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`radio`,children:`Radio`}),`
`,(0,_.jsx)(t.p,{children:`This is the a multi-options component. You can use it to create a list of options without the main label.`}),`
`,(0,_.jsx)(r,{of:l}),`
`,(0,_.jsx)(s,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`radioinput`,children:`RadioInput`}),`
`,(0,_.jsx)(t.p,{children:`This is the complete input component. It contains the main label and the list of options.`}),`
`,(0,_.jsx)(r,{of:d}),`
`,(0,_.jsx)(s,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`modes`,children:`Modes`}),`
`,(0,_.jsxs)(t.p,{children:[`The Radio component has 4 modes: `,(0,_.jsx)(t.code,{children:`default`}),`, `,(0,_.jsx)(t.code,{children:`classic`}),` `,(0,_.jsx)(t.code,{children:`cardRadio`}),` and `,(0,_.jsx)(t.code,{children:`inline`}),`.
You can see them in action in the stories above.`]}),`
`,(0,_.jsx)(t.h2,{id:`orientation-radio-card-only`,children:`Orientation (Radio Card only)`}),`
`,(0,_.jsxs)(t.p,{children:[`When `,(0,_.jsx)(t.code,{children:`cardRadio`}),` mode is selected, 2 orientations are available :`]}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`vertical`}),`, options are vertical cards - `,(0,_.jsx)(t.em,{children:`default value`})]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`horizontal`}),`, options are horizontal cards`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`customize-width-and-height-radio-card-only`,children:`Customize width and height (Radio Card only)`}),`
`,(0,_.jsxs)(t.p,{children:[`Radio cards can have specific size depending on their content or what's expected in your prototype. You can customize `,(0,_.jsx)(t.code,{children:`width`}),`and `,(0,_.jsx)(t.code,{children:`height`}),`by your own.`]}),`
`,(0,_.jsxs)(t.p,{children:[`You need to set values on CSS properties `,(0,_.jsx)(t.code,{children:`--width-radio-card`}),` and/or `,(0,_.jsx)(t.code,{children:`--height-radio-card`})]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-css`,children:`.custom-size-card {
  --width-radio-card: 15rem;
  --height-radio-card: 95px;
}
`})}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`const options = [
  { label: "Paris", value: "paris", icon: villaIcon },
  { label: "Lille", value: "lille", icon: villaIcon },
  { label: "Madrid", value: "madrid", icon: villaIcon },
];

const MyRadioCard = () => (
  <Radio mode="cardRadio" className="custom-size-card" options={options} />
);
`})}),`
`,(0,_.jsx)(t.h2,{id:`required`,children:`Required`}),`
`,(0,_.jsxs)(t.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,_.jsx)(t.code,{children:`required`}),` prop to `,(0,_.jsx)(t.code,{children:`true`}),`.`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),a(),o(),c(),u(),p()})))()}v();export{g as default};