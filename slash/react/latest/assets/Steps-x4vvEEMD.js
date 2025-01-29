import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-Ch4n-_Zu.js";import{M as p,C as s,a as m}from"./index-XUrgFtkI.js";import{S as a,N as o}from"./Steps.stories-B4OzrC95.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./index-Bm9fFANh.js";import"./BooleanModal-F7T7dgE9.js";/* empty css              */import"./Action-iSZr0U9F.js";/* empty css               */import"./getComponentClassName-CfMiunrP.js";import"./Alert-CuYko3ZB.js";import"./Badge-jSL_F_Be.js";import"./Button-DUnKpr_8.js";import"./CheckboxInput-BAKRpjgP.js";import"./HelpMessage-D9o_4RmS.js";import"./useOptionsWithId-aTvNHBF1.js";import"./getOptionClassName-DxuJt0H1.js";import"./Choice-CUOzbXId.js";import"./Radio-CJcO5WkX.js";import"./RadioItem-QFzOzOYt.js";import"./RadioInput-_ZEfJbsU.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-DSJTTGzc.js";import"./DateInput-zgPeNuLI.js";import"./Date-CoOJGVJg.js";import"./FileInput-DDN3d1tw.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-QawoVd3T.js";import"./toConsumableArray-gD4wPUN4.js";import"./floating-ui.dom-0axdaRjh.js";import"./NumberInput-BjEiOah5.js";/* empty css                 */import"./Number-D_W1P_YM.js";/* empty css             */import"./PassInput-D3K5k_IG.js";import"./Pass-MYMwzsS2.js";import"./Select-DzbiRRMD.js";import"./SelectInput-B1sfdLXr.js";import"./SliderInput-CzEEKE1k.js";import"./TextInput-CQrD1Xf9.js";import"./Text-Cr7kBUdz.js";import"./TextareaInput-CYppWOX7.js";import"./Textarea-D5K0SVgm.js";import"./Footer-Dv9LlA7P.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-CwnqavnG.js";import"./Infos-CM2pjgWN.js";import"./Name-D5hpi6xU.js";import"./HeaderTitle-BijrBPtn.js";import"./ToggleButton-DJUWYCJn.js";import"./User-CwYsLH-c.js";/* empty css               */import"./NavBarItem-CCXfAJDV.js";import"./RestitutionList-CPp8xLms.js";import"./index-CLdFrMM3.js";import"./Svg--5bcOtmC.js";import"./Title-BuCMnsOi.js";import"./Accordion-kUkYouRU.js";import"./Popover-Bayy7GvK.js";import"./index-CgAjiT6A.js";import"./Loader-DYaTTH3B.js";function n(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:a}),`
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
`,t.jsx(m,{of:o})]})}function bt(i={}){const{wrapper:e}={...r(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(n,{...i})}):n(i)}export{bt as default};
