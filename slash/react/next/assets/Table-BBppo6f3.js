import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-G7nTXt62.js";import{M as l,C as s,a as o}from"./index-BrVhguK9.js";import{S as i,a as h,W as r}from"./Table.stories-BpX47N9J.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C8JO7UR6.js";import"./index-BdSKqQiB.js";import"./index-BOKuxaB8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Loader-C1uJHYLx.js";/* empty css              */import"./index-C2cC0QQF.js";function a(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsx(n.p,{children:"The design system provides components that are simple wrappers around the HTML table elements."}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"HTMl element"}),e.jsx("th",{children:"Design system component"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"table"}),e.jsx("td",{children:"Table"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"thead"}),e.jsx("td",{children:"Thead"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tbody"}),e.jsx("td",{children:"Tbody"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tr"}),e.jsx("td",{children:"Tr"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"td"}),e.jsx("td",{children:"Td"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"th"}),e.jsx("td",{children:"Th"})]})]})]}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from "@axa-fr/design-system-slash-react";

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
`,e.jsx(s,{of:h}),`
`,e.jsx(n.p,{children:"Alternatively, you can also import directly the sub-components you need."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table, THead, Tr, Th } from "@axa-fr/design-system-slash-react";

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
`,e.jsx(n.h3,{id:"pagination",children:"Pagination"}),`
`,e.jsx(n.p,{children:"The table comes with a pagination component that can be used to navigate through the data."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from "@axa-fr/design-system-slash-react";

const MyPaginatedTable = () => (
  <>
    <Table>{/* Table content */}</Table>
    <Paging currentPage={3} numberItems={10} numberPages={9} mode="default" />
  </>
);
`})}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(o,{of:r})]})}function C(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{C as default};
