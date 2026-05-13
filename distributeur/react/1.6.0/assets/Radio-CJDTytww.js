import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-De-9TtK1.js";import{t as s}from"./mdx-react-shim-BooHXHLT.js";import{RadioStory as c,t as l}from"./Radio.stories-CEGEqlwE.js";import{RadioInputStory as u,t as d}from"./RadioInput.stories-PsIf1gbb.js";import{RadioItemStory as f,n as p,t as m}from"./RadioItem.stories-ogmNxGp4.js";function h(e){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(r.h1,{id:`radio-components`,children:`Radio components`}),`
`,(0,_.jsx)(r.h2,{id:`radioitem`,children:`RadioItem`}),`
`,(0,_.jsx)(r.p,{children:`This is the smallest component for the radio. It only contains the input with a label.`}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(n,{of:f}),`
`,(0,_.jsx)(r.h2,{id:`radio`,children:`Radio`}),`
`,(0,_.jsx)(r.p,{children:`This is the a multi-options component. You can use it to create a list of options without the main label.`}),`
`,(0,_.jsx)(i,{of:c}),`
`,(0,_.jsx)(n,{of:c}),`
`,(0,_.jsx)(r.h2,{id:`radioinput`,children:`RadioInput`}),`
`,(0,_.jsx)(r.p,{children:`This is the complete input component. It contains the main label and the list of options.`}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(n,{of:u}),`
`,(0,_.jsx)(r.h2,{id:`modes`,children:`Modes`}),`
`,(0,_.jsxs)(r.p,{children:[`The Radio component has 4 modes: `,(0,_.jsx)(r.code,{children:`default`}),`, `,(0,_.jsx)(r.code,{children:`classic`}),` `,(0,_.jsx)(r.code,{children:`cardRadio`}),` and `,(0,_.jsx)(r.code,{children:`inline`}),`.
You can see them in action in the stories above.`]}),`
`,(0,_.jsx)(r.h2,{id:`orientation-radio-card-only`,children:`Orientation (Radio Card only)`}),`
`,(0,_.jsxs)(r.p,{children:[`When `,(0,_.jsx)(r.code,{children:`cardRadio`}),` mode is selected, 2 orientations are available :`]}),`
`,(0,_.jsxs)(r.ul,{children:[`
`,(0,_.jsxs)(r.li,{children:[(0,_.jsx)(r.code,{children:`vertical`}),`, options are vertical cards - `,(0,_.jsx)(r.em,{children:`default value`})]}),`
`,(0,_.jsxs)(r.li,{children:[(0,_.jsx)(r.code,{children:`horizontal`}),`, options are horizontal cards`]}),`
`]}),`
`,(0,_.jsx)(r.h2,{id:`customize-width-and-height-radio-card-only`,children:`Customize width and height (Radio Card only)`}),`
`,(0,_.jsxs)(r.p,{children:[`Radio cards can have specific size depending on their content or what's expected in your prototype. You can customize `,(0,_.jsx)(r.code,{children:`width`}),`and `,(0,_.jsx)(r.code,{children:`height`}),`by your own.`]}),`
`,(0,_.jsxs)(r.p,{children:[`You need to set values on CSS properties `,(0,_.jsx)(r.code,{children:`--width-radio-card`}),` and/or `,(0,_.jsx)(r.code,{children:`--height-radio-card`})]}),`
`,(0,_.jsx)(r.pre,{children:(0,_.jsx)(r.code,{className:`language-css`,children:`.custom-size-card {
  --width-radio-card: 15rem;
  --height-radio-card: 95px;
}
`})}),`
`,(0,_.jsx)(r.pre,{children:(0,_.jsx)(r.code,{className:`language-tsx`,children:`const options = [
  { label: "Paris", value: "paris", icon: villaIcon },
  { label: "Lille", value: "lille", icon: villaIcon },
  { label: "Madrid", value: "madrid", icon: villaIcon },
];

const MyRadioCard = () => (
  <Radio mode="cardRadio" className="custom-size-card" options={options} />
);
`})}),`
`,(0,_.jsx)(r.h2,{id:`required`,children:`Required`}),`
`,(0,_.jsxs)(r.p,{children:[`The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the `,(0,_.jsx)(r.code,{children:`required`}),` prop to `,(0,_.jsx)(r.code,{children:`true`}),`.`]}),`
`,(0,_.jsxs)(r.p,{children:[`Alternatively you can to add to the `,(0,_.jsx)(r.code,{children:`classModifier`}),` the value `,(0,_.jsx)(r.code,{children:`required`}),`. This behaviour exists to keep backward compatibility but might disapear in the future.`]})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=o(),s(),r(),l(),d(),p()}))();export{g as default};