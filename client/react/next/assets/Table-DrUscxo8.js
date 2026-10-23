import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,n,s as r}from"./blocks-DTWLKPUo.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o}from"./lib-Ct6J50RV.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./Table.stories-DJliSsCN.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{of:c,name:`Table`}),`
`,(0,v.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,v.jsx)(t.p,{children:`To use the table import it like that:`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from "@axa-fr/canopee-react/client";

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
`,(0,v.jsx)(n,{of:d}),`
`,(0,v.jsx)(t.h3,{id:`alternate-variants`,children:`Alternate Variants`}),`
`,(0,v.jsxs)(t.p,{children:[`Use `,(0,v.jsx)(t.code,{children:`variant="alternate"`}),` on `,(0,v.jsx)(t.code,{children:`Table.TBody`}),` to get zebra-striped rows.`]}),`
`,(0,v.jsx)(n,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`with-tags`,children:`With Tags`}),`
`,(0,v.jsx)(t.p,{children:`Tables work great with other components like Tags for status indicators.`}),`
`,(0,v.jsx)(n,{of:m}),`
`,(0,v.jsx)(t.h3,{id:`with-buttons`,children:`With Buttons`}),`
`,(0,v.jsx)(t.p,{children:`Tables can include interactive elements like buttons for actions.`}),`
`,(0,v.jsx)(n,{of:s}),`
`,(0,v.jsx)(t.h3,{id:`different-sizes`,children:`Different Sizes`}),`
`,(0,v.jsxs)(t.p,{children:[`Use the `,(0,v.jsx)(t.code,{children:`size`}),` prop on `,(0,v.jsx)(t.code,{children:`Table.Tr`}),` to control row height ("S", "M", "L").`]}),`
`,(0,v.jsx)(n,{of:f}),`
`,(0,v.jsx)(t.h3,{id:`text-alignment`,children:`Text Alignment`}),`
`,(0,v.jsxs)(t.p,{children:[`Use the `,(0,v.jsx)(t.code,{children:`position`}),` prop on `,(0,v.jsx)(t.code,{children:`Table.Td`}),` to align cell content ("left", "center", "right").`]}),`
`,(0,v.jsx)(n,{of:l}),`
`,(0,v.jsx)(t.h3,{id:`compact-table`,children:`Compact Table`}),`
`,(0,v.jsx)(n,{of:p})]})}function _(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=i(),a(),t(),u()})))()}y();export{_ as default};