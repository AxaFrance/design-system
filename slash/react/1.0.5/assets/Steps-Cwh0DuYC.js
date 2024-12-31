import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as p,af as s,ag as m}from"./index-021qulNS.js";import{S as a,N as o}from"./Steps.stories-BQwGtpGu.js";import"./index-CTjT7uj6.js";import"./iframe-C9InCBWq.js";import"../sb-preview/runtime.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./BooleanModal-Dj1PVHEr.js";/* empty css              */import"./Action-Db5uwabH.js";/* empty css               */import"./getComponentClassName-BBtdTm69.js";import"./Alert-Bvh5wFmz.js";import"./Badge-cmZORplw.js";import"./Button-0cvIXeUj.js";import"./CheckboxInput-wXZh7tec.js";import"./HelpMessage-IVok9Gud.js";import"./useOptionsWithId-BhtwyMuM.js";import"./getOptionClassName-C-PokU6N.js";import"./Choice-DwfIdKqD.js";import"./Radio-CQP4-0qJ.js";import"./RadioItem-BqdDckBA.js";import"./RadioInput-TIE-3deB.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-gP13tvqR.js";import"./DateInput-CfP0cjmP.js";import"./Date-Byq2VvYR.js";import"./FileInput-C46Njg0G.js";import"./index-BzjuzjN8.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-BQgRu7IR.js";import"./toConsumableArray-DStN4ZWv.js";import"./NumberInput-DPLqAUdG.js";/* empty css                 */import"./Number-mDHl-xrJ.js";/* empty css             */import"./PassInput-xEdAmVqz.js";import"./Pass-CWGvtTSX.js";import"./Select-CXnKzse7.js";import"./SelectInput-D3BH00C2.js";import"./SliderInput-VL7pgBVN.js";import"./TextInput-wKRNpiIy.js";import"./Text-DCfUCUFU.js";import"./TextareaInput-NVugRJ0N.js";import"./Textarea-CUwSUjbB.js";import"./Footer-8NFPxx48.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-C-O2thZm.js";import"./Infos-CFhLNnqv.js";import"./Name-Bfy7J7Lv.js";import"./HeaderTitle-DIC4ySBt.js";import"./ToggleButton-DLNPKGs4.js";import"./User-Cu7BV8N5.js";/* empty css               */import"./NavBarItem-DOGuL4OY.js";import"./RestitutionList-D4wmRsTI.js";import"./index-Dkgk0g15.js";import"./Svg-DdivJcec.js";import"./Title-B1OEM1uB.js";import"./Accordion-CTc0Popn.js";import"./Popover-UZP0ueis.js";import"./index-gLz9y_GM.js";import"./Loader-CX0sWZNv.js";function n(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:a}),`
`,t.jsx(e.h1,{id:"steps",children:"Steps"}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#import",children:"Import"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#steps-use",children:"Steps"})}),`
`]}),`
`,t.jsx(e.p,{children:"The component step can have multiple values for the mode props :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`mode: "link" | "active" | "disabled";
`})}),`
`,t.jsx(e.h2,{id:"import",children:"Import"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { Steps, Step, StepBase } from "@axa-fr/design-system-slash-react";
`})}),`
`,t.jsx(e.h2,{id:"steps-use",children:"Steps use"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const MyComponent = () => (
  <Steps classModifier="" className="">
    <Step
      id="id1"
      href="/etape1"
      onClick={(e) => {
        console.log(e);
      }}
      number="1"
      mode="link"
      title="Previous step"
    />
    <Step
      id="id2"
      href="/etape2"
      number="2"
      onClick={(e) => {
        console.log(e);
      }}
      title="Previous step"
      mode="link"
    />
    <Step
      id="id3"
      number="3"
      onClick={(e) => {
        console.log(e);
      }}
      title="Current step"
      mode="active"
    />
    <StepBase id="idf4" title="Un titre">
      <a
        className="af-steps-list-step__label"
        href="#/"
        onClick={(e) => {
          console.log(e);
        }}
      >
        <span className="af-steps-list-step__number">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-steps-list-step__title">Custom</span>
      </a>
    </StepBase>
    <Step id="id5" number="5" title="Final step" mode="disabled" />
  </Steps>
);
`})}),`
`,t.jsx(s,{of:o}),`
`,t.jsx(m,{of:o})]})}function Mt(i={}){const{wrapper:e}={...r(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(n,{...i})}):n(i)}export{Mt as default};
