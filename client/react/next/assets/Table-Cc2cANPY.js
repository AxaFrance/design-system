import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-D3yXdDgY.js";import"./index-_R0pouHK.js";import{T as l,B as r,A as s,a as c,b as d,c as h,d as T,C as p}from"./Table.stories-YS_0r9Om.js";import{M as x,C as i}from"./index-BSugAwKE.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BmRDlEl7.js";import"./iframe-Bnt9VA_9.js";import"./DocsRenderer-CFRXHY34-BLgBjBKx.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./LoaderLF-CFbz7cnV.js";import"./LoaderCommon-Ci0GL7sh.js";import"./index-BjCk13Vd.js";/* empty css               */import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:l,name:"Table"}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsx(n.p,{children:"To use the table import it like that:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <Table>
    <Table.THead variant="gray">
      <Table.Tr>
        <Table.Th>Nom</Table.Th>
        <Table.Th>Email</Table.Th>
      </Table.Tr>
    </Table.THead>
    <Table.TBody variant="alternate">
      <Table.Tr>
        <Table.Td>Jean Dupont</Table.Td>
        <Table.Td>jean.dupont@example.com</Table.Td>
      </Table.Tr>
    </Table.TBody>
  </Table>
);
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"The Table component is a compound component with the following sub-components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.THead"})," - Table header with optional ",e.jsx(n.code,{children:"variant"})," prop"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.TBody"})," - Table body with optional ",e.jsx(n.code,{children:"variant"})," prop"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Tr"})," - Table row with optional ",e.jsx(n.code,{children:"size"})," and variant props"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Th"})," - Table header cell with optional ",e.jsx(n.code,{children:"onSort"}),", ",e.jsx(n.code,{children:"onCheck"}),", ",e.jsx(n.code,{children:"checkboxPosition"})," props"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Td"})," - Table data cell with optional ",e.jsx(n.code,{children:"position"}),", ",e.jsx(n.code,{children:"verticalAlign"}),", ",e.jsx(n.code,{children:"variant"})," and ",e.jsx(n.code,{children:"size"})," props"]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"basic-table",children:"Basic Table"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h3,{id:"alternate-variants",children:"Alternate Variants"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:'variant="alternate"'})," on ",e.jsx(n.code,{children:"Table.TBody"})," to get zebra-striped rows."]}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h3,{id:"with-tags",children:"With Tags"}),`
`,e.jsx(n.p,{children:"Tables work great with other components like Tags for status indicators."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"with-buttons",children:"With Buttons"}),`
`,e.jsx(n.p,{children:"Tables can include interactive elements like buttons for actions."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"different-sizes",children:"Different Sizes"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"size"})," prop on ",e.jsx(n.code,{children:"Table.Tr"}),' to control row height ("S", "M", "L").']}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"text-alignment",children:"Text Alignment"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"position"})," prop on ",e.jsx(n.code,{children:"Table.Td"}),' to align cell content ("left", "center", "right").']}),`
`,e.jsx(i,{of:T}),`
`,e.jsx(n.h3,{id:"compact-table",children:"Compact Table"}),`
`,e.jsx(i,{of:p})]})}function H(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{H as default};
