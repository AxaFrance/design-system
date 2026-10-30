import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-CjUrzS1v.js";import{g as a,m as o,t as s}from"./distributeur-BzQs3Sl2.js";var c=t({Simple:()=>f,WithPagination:()=>p,__namedExportsOrder:()=>m,default:()=>d}),l,u,d,f,p,m;function h(){return(h=e((()=>{s(),r(),l=n(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=i.meta({component:a,title:`Components/Table`,argTypes:{onChange:{action:`onChange`}},args:{onChange:u()}}),f=d.story({name:`Simple table`,render:()=>(0,l.jsx)(o,{children:(0,l.jsxs)(o.THead,{children:[(0,l.jsx)(o.Tr,{children:(0,l.jsx)(o.Th,{colSpan:3,children:`Some text`})}),(0,l.jsxs)(o.Tr,{children:[(0,l.jsx)(o.Th,{rowSpan:2,children:`Some text`}),(0,l.jsx)(o.Td,{children:(0,l.jsx)(`strong`,{children:`Some bold text`})}),(0,l.jsx)(o.Td,{children:`Some text`})]}),(0,l.jsxs)(o.Tr,{children:[(0,l.jsx)(o.Td,{children:`Some text`}),(0,l.jsx)(o.Td,{children:`Some text`})]}),(0,l.jsxs)(o.Tr,{children:[(0,l.jsx)(o.Td,{children:`Some text`}),(0,l.jsx)(o.Td,{children:`Some text`}),(0,l.jsx)(o.Td,{children:`Some text`})]})]})}),args:{},argTypes:{}}),p=d.story({name:`Table with pagination`,render:({currentPage:e,numberItems:t,numberPages:n,mode:r,elementsLabel:i,selectPageSizeLabel:s,...c})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{children:(0,l.jsxs)(o.THead,{children:[(0,l.jsx)(o.Tr,{children:(0,l.jsx)(o.Th,{colSpan:3,children:`Some text`})}),(0,l.jsxs)(o.Tr,{children:[(0,l.jsx)(o.Th,{rowSpan:2,children:`Some text`}),(0,l.jsx)(o.Td,{children:(0,l.jsx)(`strong`,{children:`Some bold text`})}),(0,l.jsx)(o.Td,{children:`Some text`})]}),(0,l.jsxs)(o.Tr,{children:[(0,l.jsx)(o.Td,{children:`Some text`}),(0,l.jsx)(o.Td,{children:`Some text`})]}),(0,l.jsxs)(o.Tr,{children:[(0,l.jsx)(o.Td,{children:`Some text`}),(0,l.jsx)(o.Td,{children:`Some text`}),(0,l.jsx)(o.Td,{children:`Some text`})]})]})}),(0,l.jsx)(a,{currentPage:e,numberItems:t,numberPages:n,mode:r,elementsLabel:i,selectPageSizeLabel:s,...c})]}),args:{currentPage:3,numberItems:1e3,numberPages:10,mode:`default`,elementsLabel:`sinistres`,items:[5,10,50,100],selectAriaLabel:`Select`},argTypes:{currentPage:{control:{type:`number`},description:`Numéro de page actuelle`},numberItems:{control:{type:`number`},description:`Nombre d'élément à afficher`},numberPages:{control:{type:`number`},description:`Nombre de pages`},mode:{options:[`default`,`light`],control:{type:`radio`},description:`Choix du mode d'affichage`},elementsLabel:{type:`string`,description:`Label utilisé dans les liens vers les page. Doit représenter ce que contient le tableau associé`},selectPageSizeLabel:{description:`Label du select pour choisir le nombre d'éléments à afficher`,control:{type:`text`},type:`string`},items:{description:`Les différentes options de choix pour le nombre d'élément à afficher`},onChange:{table:{disable:!0}}}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}},m=[`Simple`,`WithPagination`]})))()}export{h as i,c as n,p as r,f as t};