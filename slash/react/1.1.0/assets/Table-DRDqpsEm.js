import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as s}from"./index-Ch4n-_Zu.js";import{M as a,C as n,a as m}from"./index-XUrgFtkI.js";import{S as d,a as p,W as o}from"./Table.stories-CPAywuLJ.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./index-Bm9fFANh.js";import"./BooleanModal-F7T7dgE9.js";/* empty css              */import"./Action-iSZr0U9F.js";/* empty css               */import"./getComponentClassName-CfMiunrP.js";import"./Alert-CuYko3ZB.js";import"./Badge-jSL_F_Be.js";import"./Button-DUnKpr_8.js";import"./CheckboxInput-BAKRpjgP.js";import"./HelpMessage-D9o_4RmS.js";import"./useOptionsWithId-aTvNHBF1.js";import"./getOptionClassName-DxuJt0H1.js";import"./Choice-CUOzbXId.js";import"./Radio-CJcO5WkX.js";import"./RadioItem-QFzOzOYt.js";import"./RadioInput-_ZEfJbsU.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-DSJTTGzc.js";import"./DateInput-zgPeNuLI.js";import"./Date-CoOJGVJg.js";import"./FileInput-DDN3d1tw.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-QawoVd3T.js";import"./toConsumableArray-gD4wPUN4.js";import"./floating-ui.dom-0axdaRjh.js";import"./NumberInput-BjEiOah5.js";/* empty css                 */import"./Number-D_W1P_YM.js";/* empty css             */import"./PassInput-D3K5k_IG.js";import"./Pass-MYMwzsS2.js";import"./Select-DzbiRRMD.js";import"./SelectInput-B1sfdLXr.js";import"./SliderInput-CzEEKE1k.js";import"./TextInput-CQrD1Xf9.js";import"./Text-Cr7kBUdz.js";import"./TextareaInput-CYppWOX7.js";import"./Textarea-D5K0SVgm.js";import"./Footer-Dv9LlA7P.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-CwnqavnG.js";import"./Infos-CM2pjgWN.js";import"./Name-D5hpi6xU.js";import"./HeaderTitle-BijrBPtn.js";import"./ToggleButton-DJUWYCJn.js";import"./User-CwYsLH-c.js";/* empty css               */import"./NavBarItem-CCXfAJDV.js";import"./RestitutionList-CPp8xLms.js";import"./index-CLdFrMM3.js";import"./Svg--5bcOtmC.js";import"./Title-BuCMnsOi.js";import"./Accordion-kUkYouRU.js";import"./Popover-Bayy7GvK.js";import"./index-CgAjiT6A.js";import"./Loader-DYaTTH3B.js";function i(r){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:d}),`
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
`,t.jsx(n,{of:p}),`
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
`,t.jsx(m,{of:o})]})}function St(r={}){const{wrapper:e}={...s(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(i,{...r})}):i(r)}export{St as default};
