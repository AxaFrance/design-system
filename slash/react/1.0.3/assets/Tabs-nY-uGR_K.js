import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as m}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5-BN3fGCbW.js";import{ae as p,af as n,ag as r}from"./index-De0Pjux1.js";import{T as c,S as a,C as e}from"./Tabs.stories-qRBavQvP.js";import"./index-CTjT7uj6.js";import"./iframe-Bnpca8an.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./Badge-CAZ-Dv6m.js";import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";import"./BooleanModal-Biu26ZxU.js";/* empty css              */import"./Action-fIeEoHxC.js";/* empty css               */import"./Alert-Brt1fapE.js";import"./Button-BPtTpx5t.js";import"./CheckboxInput-vnPlN6q9.js";import"./HelpMessage-Cd7UbXG5.js";import"./useOptionsWithId-BhtwyMuM.js";import"./getOptionClassName-B6m0JZo2.js";import"./Choice-B4ebI_gO.js";import"./Radio-CvQ5P06R.js";import"./RadioItem-FNwESqqr.js";import"./RadioInput-CLpzqv7t.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-ciUy8TZP.js";import"./DateInput-DJAK6hAh.js";import"./Date-CI641rXz.js";import"./FileInput-C-p4Kluq.js";import"./index-BzjuzjN8.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-BVAOyEU_.js";import"./toConsumableArray-DStN4ZWv.js";import"./NumberInput-7n7UIsBH.js";/* empty css                 */import"./Number-WwFhZtHt.js";/* empty css             */import"./PassInput-CQFe1a48.js";import"./Pass-CDmUB5MI.js";import"./Select-C7bS84k5.js";import"./SelectInput-CrfnoGdF.js";import"./SliderInput-C4ViGcdp.js";import"./TextInput-Bid7rY_4.js";import"./Text-BENtgf5_.js";import"./TextareaInput-D9FPsfKP.js";import"./Textarea-CaJXX67o.js";import"./Footer-8NFPxx48.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-BGmuWOFX.js";import"./Infos-7lKZNez9.js";import"./Name-CFpboyKI.js";import"./HeaderTitle-C08bZXsf.js";import"./ToggleButton-DLNPKGs4.js";import"./User-Dp_UfuiD.js";/* empty css               */import"./NavBarItem-CQcEEDln.js";import"./RestitutionList-BavUYh03.js";import"./index-BBlvDU0u.js";import"./Svg-DdivJcec.js";import"./Title-Cxy8eqVz.js";import"./Accordion-r7dREX8Q.js";import"./Popover-CVInVo-0.js";import"./index-BAAoBoSU.js";import"./Loader-BYKmsk4U.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:c}),`
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
`,t.jsx(r,{of:e})]})}function vt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(s,{...i})}):s(i)}export{vt as default};
