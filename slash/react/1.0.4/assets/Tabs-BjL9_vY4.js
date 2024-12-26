import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as m}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5-oX4yH2bX.js";import{ae as p,af as n,ag as r}from"./index-CZU2_GCj.js";import{T as c,S as a,C as e}from"./Tabs.stories-Bii1JWz5.js";import"./index-CTjT7uj6.js";import"./iframe-BW26-0SR.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./Badge-cmZORplw.js";import"./getComponentClassName-BBtdTm69.js";import"./BooleanModal-DFVb20wB.js";/* empty css              */import"./Action-Db5uwabH.js";/* empty css               */import"./Alert-Bvh5wFmz.js";import"./Button-0cvIXeUj.js";import"./CheckboxInput-BTqsVk7q.js";import"./HelpMessage-B9HNfJNg.js";import"./useOptionsWithId-BhtwyMuM.js";import"./getOptionClassName-C-PokU6N.js";import"./Choice-CiYCBjwg.js";import"./Radio-CQ0ROfMN.js";import"./RadioItem-Cj806vx2.js";import"./RadioInput-QXhM4GC_.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-DYC2R3qb.js";import"./DateInput-CB3i9XN_.js";import"./Date-Byq2VvYR.js";import"./FileInput-6z6qZozo.js";import"./index-BzjuzjN8.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-JpGI5Y4U.js";import"./toConsumableArray-DStN4ZWv.js";import"./NumberInput-DaJ4fH8-.js";/* empty css                 */import"./Number-mDHl-xrJ.js";/* empty css             */import"./PassInput-YpdljSTR.js";import"./Pass-CWGvtTSX.js";import"./Select-CXnKzse7.js";import"./SelectInput-B4aJQFLb.js";import"./SliderInput-CA5XZ2N0.js";import"./TextInput-BKKEWmQe.js";import"./Text-DCfUCUFU.js";import"./TextareaInput-BRMu8oFJ.js";import"./Textarea-CUwSUjbB.js";import"./Footer-8NFPxx48.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-C-O2thZm.js";import"./Infos-CFhLNnqv.js";import"./Name-Bfy7J7Lv.js";import"./HeaderTitle-DIC4ySBt.js";import"./ToggleButton-DLNPKGs4.js";import"./User-Cu7BV8N5.js";/* empty css               */import"./NavBarItem-DOGuL4OY.js";import"./RestitutionList-D4wmRsTI.js";import"./index-Dkgk0g15.js";import"./Svg-DdivJcec.js";import"./Title-B1OEM1uB.js";import"./Accordion-CTc0Popn.js";import"./Popover-UZP0ueis.js";import"./index-gLz9y_GM.js";import"./Loader-CX0sWZNv.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:c}),`
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
`,t.jsx(r,{of:e})]})}function St(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(s,{...i})}):s(i)}export{St as default};
