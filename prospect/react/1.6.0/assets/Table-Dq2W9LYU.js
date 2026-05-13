import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C8Tw6Lm5.js";import{t as r}from"./mdx-react-shim-B5BYO_WN.js";import{l as i,n as a,s as o}from"./blocks-B2Oe2WTt.js";import{AlternateVariantTable as s,BasicTable as c,CompactTable as l,TableWithAlignments as u,TableWithButtons as d,TableWithDifferentSizes as f,TableWithTags as p,n as m,t as h}from"./Table.stories-j9h2Fr3L.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{of:h,name:`Table`}),`
`,(0,v.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,v.jsx)(t.p,{children:`To use the table import it like that:`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <Table>
    <Table.THead variant="blue">
      <Table.Tr>
        <Table.Th>Nom</Table.Th>
        <Table.Th>Email</Table.Th>
      </Table.Tr>
    </Table.THead>
    <Table.TBody>
      <Table.Tr>
        <Table.Td>Jean Dupont</Table.Td>
        <Table.Td>jean.dupont@example.com</Table.Td>
      </Table.Tr>
    </Table.TBody>
  </Table>
);
`})}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(t.p,{children:`The Table component is a compound component with the following sub-components:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`Table.THead`}),` - Table header with optional `,(0,v.jsx)(t.code,{children:`variant`}),` prop`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`Table.TBody`}),` - Table body with optional `,(0,v.jsx)(t.code,{children:`variant`}),` prop`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`Table.Tr`}),` - Table row with optional `,(0,v.jsx)(t.code,{children:`size`}),` and variant props`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`Table.Th`}),` - Table header cell with optional `,(0,v.jsx)(t.code,{children:`onSort`}),`, `,(0,v.jsx)(t.code,{children:`onCheck`}),`, `,(0,v.jsx)(t.code,{children:`checkboxPosition`}),` props`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`Table.Td`}),` - Table data cell with optional `,(0,v.jsx)(t.code,{children:`position`}),`, `,(0,v.jsx)(t.code,{children:`verticalAlign`}),`, `,(0,v.jsx)(t.code,{children:`variant`}),` and `,(0,v.jsx)(t.code,{children:`size`}),` props`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`basic-table`,children:`Basic Table`}),`
`,(0,v.jsx)(a,{of:c}),`
`,(0,v.jsx)(t.h3,{id:`alternate-variants`,children:`Alternate Variants`}),`
`,(0,v.jsxs)(t.p,{children:[`Use `,(0,v.jsx)(t.code,{children:`variant="alternate"`}),` on `,(0,v.jsx)(t.code,{children:`Table.TBody`}),` to get zebra-striped rows.`]}),`
`,(0,v.jsx)(a,{of:s}),`
`,(0,v.jsx)(t.h3,{id:`with-tags`,children:`With Tags`}),`
`,(0,v.jsx)(t.p,{children:`Tables work great with other components like Tags for status indicators.`}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h3,{id:`with-buttons`,children:`With Buttons`}),`
`,(0,v.jsx)(t.p,{children:`Tables can include interactive elements like buttons for actions.`}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t.h3,{id:`different-sizes`,children:`Different Sizes`}),`
`,(0,v.jsxs)(t.p,{children:[`Use the `,(0,v.jsx)(t.code,{children:`size`}),` prop on `,(0,v.jsx)(t.code,{children:`Table.Tr`}),` to control row height ("S", "M", "L").`]}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(t.h3,{id:`text-alignment`,children:`Text Alignment`}),`
`,(0,v.jsxs)(t.p,{children:[`Use the `,(0,v.jsx)(t.code,{children:`position`}),` prop on `,(0,v.jsx)(t.code,{children:`Table.Td`}),` to align cell content ("left", "center", "right").`]}),`
`,(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`compact-table`,children:`Compact Table`}),`
`,(0,v.jsx)(a,{of:l})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),r(),i(),m()}))();export{_ as default};