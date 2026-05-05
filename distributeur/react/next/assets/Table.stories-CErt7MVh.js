import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{c as a,n as o,s}from"./distributeur-Ct4qDp97.js";var c=t({Simple:()=>f,WithPagination:()=>p,__namedExportsOrder:()=>m,default:()=>d}),l,u,d,f,p,m,h=e((()=>{o(),r(),l=i(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=n.meta({component:a,title:`Components/Table`,argTypes:{onChange:{action:`onChange`}},args:{onChange:u()}}),f=d.story({name:`Simple table`,render:()=>(0,l.jsx)(s,{children:(0,l.jsxs)(s.THead,{children:[(0,l.jsx)(s.Tr,{children:(0,l.jsx)(s.Th,{colSpan:3,children:`Some text`})}),(0,l.jsxs)(s.Tr,{children:[(0,l.jsx)(s.Th,{rowSpan:2,children:`Some text`}),(0,l.jsx)(s.Td,{children:(0,l.jsx)(`strong`,{children:`Some bold text`})}),(0,l.jsx)(s.Td,{children:`Some text`})]}),(0,l.jsxs)(s.Tr,{children:[(0,l.jsx)(s.Td,{children:`Some text`}),(0,l.jsx)(s.Td,{children:`Some text`})]}),(0,l.jsxs)(s.Tr,{children:[(0,l.jsx)(s.Td,{children:`Some text`}),(0,l.jsx)(s.Td,{children:`Some text`}),(0,l.jsx)(s.Td,{children:`Some text`})]})]})}),args:{},argTypes:{}}),p=d.story({name:`Table with pagination`,render:({currentPage:e,numberItems:t,numberPages:n,mode:r,elementsLabel:i,selectPageSizeLabel:o,...c})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{children:(0,l.jsxs)(s.THead,{children:[(0,l.jsx)(s.Tr,{children:(0,l.jsx)(s.Th,{colSpan:3,children:`Some text`})}),(0,l.jsxs)(s.Tr,{children:[(0,l.jsx)(s.Th,{rowSpan:2,children:`Some text`}),(0,l.jsx)(s.Td,{children:(0,l.jsx)(`strong`,{children:`Some bold text`})}),(0,l.jsx)(s.Td,{children:`Some text`})]}),(0,l.jsxs)(s.Tr,{children:[(0,l.jsx)(s.Td,{children:`Some text`}),(0,l.jsx)(s.Td,{children:`Some text`})]}),(0,l.jsxs)(s.Tr,{children:[(0,l.jsx)(s.Td,{children:`Some text`}),(0,l.jsx)(s.Td,{children:`Some text`}),(0,l.jsx)(s.Td,{children:`Some text`})]})]})}),(0,l.jsx)(a,{currentPage:e,numberItems:t,numberPages:n,mode:r,elementsLabel:i,selectPageSizeLabel:o,...c})]}),args:{currentPage:3,numberItems:1e3,numberPages:10,mode:`default`,elementsLabel:`sinistres`,items:[5,10,50,100],selectAriaLabel:`Select`},argTypes:{currentPage:{control:{type:`number`},description:`Numéro de page actuelle`},numberItems:{control:{type:`number`},description:`Nombre d'élément à afficher`},numberPages:{control:{type:`number`},description:`Nombre de pages`},mode:{options:[`default`,`light`],control:{type:`radio`},description:`Choix du mode d'affichage`},elementsLabel:{type:`string`,description:`Label utilisé dans les liens vers les page. Doit représenter ce que contient le tableau associé`},selectPageSizeLabel:{description:`Label du select pour choisir le nombre d'éléments à afficher`,control:{type:`text`},type:`string`},items:{description:`Les différentes options de choix pour le nombre d'élément à afficher`},onChange:{table:{disable:!0}}}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Simple table",
  render: () => <Table>
      <Table.THead>
        <Table.Tr>
          <Table.Th colSpan={3}>Some text</Table.Th>
        </Table.Tr>
        <Table.Tr>
          <Table.Th rowSpan={2}>Some text</Table.Th>
          <Table.Td>
            <strong>Some bold text</strong>
          </Table.Td>
          <Table.Td>Some text</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Some text</Table.Td>
          <Table.Td>Some text</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Some text</Table.Td>
          <Table.Td>Some text</Table.Td>
          <Table.Td>Some text</Table.Td>
        </Table.Tr>
      </Table.THead>
    </Table>,
  args: {},
  argTypes: {}
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Table with pagination",
  render: ({
    currentPage,
    numberItems,
    numberPages,
    mode,
    elementsLabel,
    selectPageSizeLabel,
    ...args
  }) => <>
      <Table>
        <Table.THead>
          <Table.Tr>
            <Table.Th colSpan={3}>Some text</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th rowSpan={2}>Some text</Table.Th>
            <Table.Td>
              <strong>Some bold text</strong>
            </Table.Td>
            <Table.Td>Some text</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Some text</Table.Td>
            <Table.Td>Some text</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Some text</Table.Td>
            <Table.Td>Some text</Table.Td>
            <Table.Td>Some text</Table.Td>
          </Table.Tr>
        </Table.THead>
      </Table>
      <Paging currentPage={currentPage} numberItems={numberItems} numberPages={numberPages} mode={mode} elementsLabel={elementsLabel} selectPageSizeLabel={selectPageSizeLabel} {...args} />
    </>,
  args: {
    currentPage: 3,
    numberItems: 1000,
    numberPages: 10,
    mode: "default",
    elementsLabel: "sinistres",
    items: [5, 10, 50, 100],
    selectAriaLabel: "Select"
  },
  argTypes: {
    currentPage: {
      control: {
        type: "number"
      },
      description: "Numéro de page actuelle"
    },
    numberItems: {
      control: {
        type: "number"
      },
      description: "Nombre d'élément à afficher"
    },
    numberPages: {
      control: {
        type: "number"
      },
      description: "Nombre de pages"
    },
    mode: {
      options: ["default", "light"],
      control: {
        type: "radio"
      },
      description: "Choix du mode d'affichage"
    },
    elementsLabel: {
      type: "string",
      description: "Label utilisé dans les liens vers les page. Doit représenter ce que contient le tableau associé"
    },
    selectPageSizeLabel: {
      description: "Label du select pour choisir le nombre d'éléments à afficher",
      control: {
        type: "text"
      },
      type: "string"
    },
    items: {
      description: "Les différentes options de choix pour le nombre d'élément à afficher"
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
})`,...p.input.parameters?.docs?.source}}},m=[`Simple`,`WithPagination`]}));h();export{f as Simple,p as WithPagination,m as __namedExportsOrder,d as default,h as n,c as t};