import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as a,af as n,ag as m}from"./index-021qulNS.js";import{S as p,a as d,W as o}from"./Table.stories-BfR2IHLo.js";import"./index-CTjT7uj6.js";import"./iframe-C9InCBWq.js";import"../sb-preview/runtime.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./BooleanModal-Dj1PVHEr.js";/* empty css              */import"./Action-Db5uwabH.js";/* empty css               */import"./getComponentClassName-BBtdTm69.js";import"./Alert-Bvh5wFmz.js";import"./Badge-cmZORplw.js";import"./Button-0cvIXeUj.js";import"./CheckboxInput-wXZh7tec.js";import"./HelpMessage-IVok9Gud.js";import"./useOptionsWithId-BhtwyMuM.js";import"./getOptionClassName-C-PokU6N.js";import"./Choice-DwfIdKqD.js";import"./Radio-CQP4-0qJ.js";import"./RadioItem-BqdDckBA.js";import"./RadioInput-TIE-3deB.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-gP13tvqR.js";import"./DateInput-CfP0cjmP.js";import"./Date-Byq2VvYR.js";import"./FileInput-C46Njg0G.js";import"./index-BzjuzjN8.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-BQgRu7IR.js";import"./toConsumableArray-DStN4ZWv.js";import"./NumberInput-DPLqAUdG.js";/* empty css                 */import"./Number-mDHl-xrJ.js";/* empty css             */import"./PassInput-xEdAmVqz.js";import"./Pass-CWGvtTSX.js";import"./Select-CXnKzse7.js";import"./SelectInput-D3BH00C2.js";import"./SliderInput-VL7pgBVN.js";import"./TextInput-wKRNpiIy.js";import"./Text-DCfUCUFU.js";import"./TextareaInput-NVugRJ0N.js";import"./Textarea-CUwSUjbB.js";import"./Footer-8NFPxx48.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-C-O2thZm.js";import"./Infos-CFhLNnqv.js";import"./Name-Bfy7J7Lv.js";import"./HeaderTitle-DIC4ySBt.js";import"./ToggleButton-DLNPKGs4.js";import"./User-Cu7BV8N5.js";/* empty css               */import"./NavBarItem-DOGuL4OY.js";import"./RestitutionList-D4wmRsTI.js";import"./index-Dkgk0g15.js";import"./Svg-DdivJcec.js";import"./Title-B1OEM1uB.js";import"./Accordion-CTc0Popn.js";import"./Popover-UZP0ueis.js";import"./index-gLz9y_GM.js";import"./Loader-CX0sWZNv.js";function i(r){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:p}),`
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
`,t.jsx(m,{of:o})]})}function vt(r={}){const{wrapper:e}={...s(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(i,{...r})}):i(r)}export{vt as default};
