import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as m}from"./index-Ch4n-_Zu.js";import"./DocsRenderer-CFRXHY34-11Y2Aw13.js";import{M as p,C as n,a as r}from"./index-XUrgFtkI.js";import{T as c,S as a,C as e}from"./Tabs.stories-BgzZO1Vl.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./react-18-EAsyrTGL.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./index-Bm9fFANh.js";import"./Badge-jSL_F_Be.js";import"./getComponentClassName-CfMiunrP.js";import"./BooleanModal-F7T7dgE9.js";/* empty css              */import"./Action-iSZr0U9F.js";/* empty css               */import"./Alert-CuYko3ZB.js";import"./Button-DUnKpr_8.js";import"./CheckboxInput-BAKRpjgP.js";import"./HelpMessage-D9o_4RmS.js";import"./useOptionsWithId-aTvNHBF1.js";import"./getOptionClassName-DxuJt0H1.js";import"./Choice-CUOzbXId.js";import"./Radio-CJcO5WkX.js";import"./RadioItem-QFzOzOYt.js";import"./RadioInput-_ZEfJbsU.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-DSJTTGzc.js";import"./DateInput-zgPeNuLI.js";import"./Date-CoOJGVJg.js";import"./FileInput-DDN3d1tw.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-QawoVd3T.js";import"./toConsumableArray-gD4wPUN4.js";import"./floating-ui.dom-0axdaRjh.js";import"./NumberInput-BjEiOah5.js";/* empty css                 */import"./Number-D_W1P_YM.js";/* empty css             */import"./PassInput-D3K5k_IG.js";import"./Pass-MYMwzsS2.js";import"./Select-DzbiRRMD.js";import"./SelectInput-B1sfdLXr.js";import"./SliderInput-CzEEKE1k.js";import"./TextInput-CQrD1Xf9.js";import"./Text-Cr7kBUdz.js";import"./TextareaInput-CYppWOX7.js";import"./Textarea-D5K0SVgm.js";import"./Footer-Dv9LlA7P.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-CwnqavnG.js";import"./Infos-CM2pjgWN.js";import"./Name-D5hpi6xU.js";import"./HeaderTitle-BijrBPtn.js";import"./ToggleButton-DJUWYCJn.js";import"./User-CwYsLH-c.js";/* empty css               */import"./NavBarItem-CCXfAJDV.js";import"./RestitutionList-CPp8xLms.js";import"./index-CLdFrMM3.js";import"./Svg--5bcOtmC.js";import"./Title-BuCMnsOi.js";import"./Accordion-kUkYouRU.js";import"./Popover-Bayy7GvK.js";import"./index-CgAjiT6A.js";import"./Loader-DYaTTH3B.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:c}),`
`,t.jsx(o.h1,{id:"tabs",children:"Tabs"}),`
`,t.jsx(o.p,{children:"To use tabs, import them as follows:"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { Tabs } from "@axa-fr/design-system-slash-react";
`})}),`
`,t.jsx(o.h2,{id:"single-tab",children:"Single Tab"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`const MyComponent = () => (
  <Tabs>
    <Tabs.Tab title="My Title">Content of my first tab</Tabs.Tab>
  </Tabs>
);
`})}),`
`,t.jsx(n,{of:a}),`
`,t.jsx(r,{of:a}),`
`,t.jsx(o.h2,{id:"complex-tabs",children:"Complex Tabs"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`const TabTitleIconLeft = (
  <span>
    <i className="glyphicon glyphicon-ok" /> Title with left icon
  </span>
);
const TabTitleIconRight = (
  <span>
    Title with right icon <i className="glyphicon glyphicon-facetime-video" />
  </span>
);
const TabTitleBadge = (
  <span>
    Title with badge <Badge classModifier="danger"> 42 </Badge>
  </span>
);
const TabTitleIconBadge = (
  <span>
    Title with badge and left icon
    <Badge classModifier="error"> Lorem ipsum </Badge>
    <i className="glyphicon glyphicon-facetime-video" />
  </span>
);

const MyComponent = () => (
  <Tabs>
    <Tabs.Tab title={TabTitleIconLeft} classModifier="has-icon-left">
      Content of my first tab
    </Tabs.Tab>
    <Tabs.Tab title={TabTitleIconRight} classModifier="has-icon-right">
      Content of my second tab
    </Tabs.Tab>
    <Tabs.Tab title={TabTitleBadge}>Content of my third tab </Tabs.Tab>
    <Tabs.Tab title={TabTitleIconBadge} classModifier="has-icon-left">
      Content of my fifth tab
    </Tabs.Tab>
  </Tabs>
);
`})}),`
`,t.jsx(n,{of:e}),`
`,t.jsx(r,{of:e})]})}function It(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(s,{...i})}):s(i)}export{It as default};
