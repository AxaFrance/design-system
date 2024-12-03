import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as a,af as n,ag as m}from"./index-SbjGe_co.js";import{S as p,a as d,W as o}from"./Table.stories-CNeCrN7E.js";import"./index-CTjT7uj6.js";import"./iframe-Cv_eWvdq.js";import"../sb-preview/runtime.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./BooleanModal-IUCLoIZ3.js";/* empty css              */import"./Action-fIeEoHxC.js";/* empty css               */import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";import"./Alert-D2MQI0tE.js";import"./Badge-CAZ-Dv6m.js";import"./Button-BPtTpx5t.js";import"./CheckboxInput-qeY81rY_.js";import"./HelpMessage-Dma0IcN4.js";import"./useOptionsWithId-BhtwyMuM.js";import"./getOptionClassName-B6m0JZo2.js";import"./Choice-FDzcUUPM.js";import"./Radio-D02AoQTW.js";import"./RadioItem-RNtBv8XU.js";import"./RadioInput-Cd5a_y0p.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-Blh9E-5W.js";import"./DateInput-D6hN7UTu.js";import"./Date-CI641rXz.js";import"./FileInput-B02loNNJ.js";import"./index-BzjuzjN8.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-C2_84m_A.js";import"./toConsumableArray-DStN4ZWv.js";import"./NumberInput-Npp7rSr4.js";/* empty css                 */import"./Number-WwFhZtHt.js";/* empty css             */import"./Select-C7bS84k5.js";import"./SelectInput-D7LLlJfU.js";import"./SliderInput-CmQO6REe.js";import"./TextInput-BCF70ddG.js";import"./Text-BENtgf5_.js";import"./TextareaInput-CQEnvWJX.js";import"./Textarea-CaJXX67o.js";import"./Footer-8NFPxx48.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-BGmuWOFX.js";import"./Infos-7lKZNez9.js";import"./Name-CFpboyKI.js";import"./HeaderTitle-C1Bc2C2J.js";import"./ToggleButton-DLNPKGs4.js";import"./User-Dp_UfuiD.js";/* empty css               */import"./NavBarItem-CQcEEDln.js";import"./RestitutionList-BavUYh03.js";import"./index-12yj6lRe.js";import"./Svg-DdivJcec.js";import"./Title-Cxy8eqVz.js";import"./Accordion-9xC_6UG_.js";import"./Popover-CVInVo-0.js";import"./index-BAAoBoSU.js";import"./Loader-BYKmsk4U.js";function i(r){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:p}),`
`,t.jsx(e.h1,{id:"table",children:"Table"}),`
`,t.jsx(e.p,{children:"The design system provides components that are simple wrappers around the HTML table elements."}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"HTMl element"}),t.jsx("th",{children:"Design system component"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"table"}),t.jsx("td",{children:"Table"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"thead"}),t.jsx("td",{children:"Thead"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"tbody"}),t.jsx("td",{children:"Tbody"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"tr"}),t.jsx("td",{children:"Tr"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"td"}),t.jsx("td",{children:"Td"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"th"}),t.jsx("td",{children:"Th"})]})]})]}),`
`,t.jsx(e.h3,{id:"use",children:"Use"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Table } from "@axa-fr/design-system-slash-react";

const MyTable = () => (
  <Table>
    <Table.THead>
      <Table.Tr>
        <Table.Th>Some text</Table.Th>
      </Table.Tr>
    </Table.THead>
    <Table.TBody>
      <Table.Tr>
        <Table.Td>
          Some <strong>text</strong>
        </Table.Td>
      </Table.Tr>
    </Table.TBody>
  </Table>
);
`})}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(e.p,{children:"Alternatively, you can also import directly the sub-components you need."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Table, THead, Tr, Th } from "@axa-fr/design-system-slash-react";

const MyTable = () => (
  <Table>
    <THead>
      <Tr>
        <Th>Some text</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>
          Some <strong>text</strong>
        </Td>
      </Tr>
    </TBody>
  </Table>
);
`})}),`
`,t.jsx(e.h3,{id:"pagination",children:"Pagination"}),`
`,t.jsx(e.p,{children:"The table comes with a pagination component that can be used to navigate through the data."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Table } from "@axa-fr/design-system-slash-react";

const MyPaginatedTable = () => (
  <>
    <Table>{/* Table content */}</Table>
    <Paging currentPage={3} numberItems={10} numberPages={9} mode="default" />
  </>
);
`})}),`
`,t.jsx(n,{of:o}),`
`,t.jsx(m,{of:o})]})}function Ct(r={}){const{wrapper:e}={...s(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(i,{...r})}):i(r)}export{Ct as default};
