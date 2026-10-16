import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{i as c,n as l,r as u,t as d}from"./Table.stories-8sruTv83.js";function f(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,m.jsx)(t.p,{children:`The design system provides components that are simple wrappers around the HTML table elements.`}),`
`,(0,m.jsxs)(`table`,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`HTMl element`}),(0,m.jsx)(`th`,{children:`Design system component`})]})}),(0,m.jsxs)(`tbody`,{children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:`table`}),(0,m.jsx)(`td`,{children:`Table`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:`thead`}),(0,m.jsx)(`td`,{children:`Thead`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:`tbody`}),(0,m.jsx)(`td`,{children:`Tbody`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:`tr`}),(0,m.jsx)(`td`,{children:`Tr`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:`td`}),(0,m.jsx)(`td`,{children:`Td`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:`th`}),(0,m.jsx)(`td`,{children:`Th`})]})]})]}),`
`,(0,m.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from "@axa-fr/canopee-react/distributeur";

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
`,(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(t.p,{children:`Alternatively, you can also import directly the sub-components you need.`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Table, THead, Tr, Th } from "@axa-fr/canopee-react/distributeur";

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
`,(0,m.jsx)(t.h3,{id:`pagination`,children:`Pagination`}),`
`,(0,m.jsx)(t.p,{children:`The table comes with a pagination component that can be used to navigate through the data.`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from "@axa-fr/canopee-react/distributeur";

const MyPaginatedTable = () => (
  <>
    <Table>{/* Table content */}</Table>
    <Paging
      currentPage={3}
      numberItems={10}
      numberPages={9}
      mode="default"
      elementsLabel="éléments"
      selectPageSizeLabel="Nombre d'éléments à afficher"
    />
  </>
);
`})}),`
`,(0,m.jsxs)(t.p,{children:[`The property `,(0,m.jsx)(t.code,{children:`selectAriaLabel`}),` allows projects to change the aria-label of the select for selecting the number of items in the table, making it more accessible.`]}),`
`,(0,m.jsx)(r,{of:u}),`
`,(0,m.jsx)(s,{of:u})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),a(),o(),c()})))()}h();export{p as default};