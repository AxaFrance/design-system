import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ag as i,ah as t}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";import{fn as u}from"./index-CH2Su9EI.js";const S={component:i,title:"Components/Table",argTypes:{onChange:{action:"onChange"}},args:{onChange:u()}},r={name:"Simple table",render:()=>e.jsx(t,{children:e.jsxs(t.THead,{children:[e.jsx(t.Tr,{children:e.jsx(t.Th,{colSpan:3,children:"Some text"})}),e.jsxs(t.Tr,{children:[e.jsx(t.Th,{rowSpan:2,children:"Some text"}),e.jsx(t.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(t.Td,{children:"Some text"})]}),e.jsxs(t.Tr,{children:[e.jsx(t.Td,{children:"Some text"}),e.jsx(t.Td,{children:"Some text"})]}),e.jsxs(t.Tr,{children:[e.jsx(t.Td,{children:"Some text"}),e.jsx(t.Td,{children:"Some text"}),e.jsx(t.Td,{children:"Some text"})]})]})}),args:{},argTypes:{}},a={name:"Table with pagination",render:({currentPage:m,numberItems:b,numberPages:c,mode:p,elementsLabel:x,selectPageSizeLabel:h,...g})=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs(t.THead,{children:[e.jsx(t.Tr,{children:e.jsx(t.Th,{colSpan:3,children:"Some text"})}),e.jsxs(t.Tr,{children:[e.jsx(t.Th,{rowSpan:2,children:"Some text"}),e.jsx(t.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(t.Td,{children:"Some text"})]}),e.jsxs(t.Tr,{children:[e.jsx(t.Td,{children:"Some text"}),e.jsx(t.Td,{children:"Some text"})]}),e.jsxs(t.Tr,{children:[e.jsx(t.Td,{children:"Some text"}),e.jsx(t.Td,{children:"Some text"}),e.jsx(t.Td,{children:"Some text"})]})]})}),e.jsx(i,{currentPage:m,numberItems:b,numberPages:c,mode:p,elementsLabel:x,selectPageSizeLabel:h,...g})]}),args:{currentPage:3,numberItems:1e3,numberPages:10,mode:"default",elementsLabel:"sinistres",items:[5,10,50,100],selectAriaLabel:"Select"},argTypes:{currentPage:{control:{type:"number"},description:"Numéro de page actuelle"},numberItems:{control:{type:"number"},description:"Nombre d'élément à afficher"},numberPages:{control:{type:"number"},description:"Nombre de pages"},mode:{options:["default","light"],control:{type:"radio"},description:"Choix du mode d'affichage"},elementsLabel:{type:"string",description:"Label utilisé dans les liens vers les page. Doit représenter ce que contient le tableau associé"},selectPageSizeLabel:{description:"Label du select pour choisir le nombre d'éléments à afficher",control:{type:"text"},type:"string"},items:{description:"Les différentes options de choix pour le nombre d'élément à afficher"},onChange:{table:{disable:!0}}}};var n,l,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var o,T,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(T=a.parameters)==null?void 0:T.docs)==null?void 0:d.source}}};const j=["Simple","WithPagination"],I=Object.freeze(Object.defineProperty({__proto__:null,Simple:r,WithPagination:a,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{I as S,a as W,r as a};
