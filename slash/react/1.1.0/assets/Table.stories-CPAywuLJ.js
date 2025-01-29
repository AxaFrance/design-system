import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as S}from"./index-Bm9fFANh.js";import{P as m,T as n}from"./BooleanModal-F7T7dgE9.js";const g={component:m,title:"Components/Table",argTypes:{onChange:{action:"onChange"}},args:{onChange:S()}},r={name:"Simple table",render:()=>e.jsx(n,{children:e.jsxs(n.THead,{children:[e.jsx(n.Tr,{children:e.jsx(n.Th,{colSpan:3,children:"Some text"})}),e.jsxs(n.Tr,{children:[e.jsx(n.Th,{rowSpan:2,children:"Some text"}),e.jsx(n.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(n.Td,{children:"Some text"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"Some text"}),e.jsx(n.Td,{children:"Some text"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"Some text"}),e.jsx(n.Td,{children:"Some text"}),e.jsx(n.Td,{children:"Some text"})]})]})}),args:{},argTypes:{}},a={name:"Table with pagination",render:({currentPage:b,numberItems:i,numberPages:x,mode:c,...h})=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(n.THead,{children:[e.jsx(n.Tr,{children:e.jsx(n.Th,{colSpan:3,children:"Some text"})}),e.jsxs(n.Tr,{children:[e.jsx(n.Th,{rowSpan:2,children:"Some text"}),e.jsx(n.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(n.Td,{children:"Some text"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"Some text"}),e.jsx(n.Td,{children:"Some text"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"Some text"}),e.jsx(n.Td,{children:"Some text"}),e.jsx(n.Td,{children:"Some text"})]})]})}),e.jsx(m,{currentPage:b,numberItems:i,numberPages:x,mode:c,...h})]}),args:{currentPage:3,numberItems:10,numberPages:10,mode:"default",items:[5,10,50,100]},argTypes:{currentPage:{control:{type:"number"}},numberItems:{control:{type:"number"}},numberPages:{control:{type:"number"}},mode:{options:["default","light"],control:{type:"radio"}},onChange:{table:{disable:!0}}}};var t,T,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(l=(T=r.parameters)==null?void 0:T.docs)==null?void 0:l.source}}};var o,s,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Table with pagination",
  render: ({
    currentPage,
    numberItems,
    numberPages,
    mode,
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
      <Paging currentPage={currentPage} numberItems={numberItems} numberPages={numberPages} mode={mode} {...args} />
    </>,
  args: {
    currentPage: 3,
    numberItems: 10,
    numberPages: 10,
    mode: "default",
    items: [5, 10, 50, 100]
  },
  argTypes: {
    currentPage: {
      control: {
        type: "number"
      }
    },
    numberItems: {
      control: {
        type: "number"
      }
    },
    numberPages: {
      control: {
        type: "number"
      }
    },
    mode: {
      options: ["default", "light"],
      control: {
        type: "radio"
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const p=["Simple","WithPagination"],y=Object.freeze(Object.defineProperty({__proto__:null,Simple:r,WithPagination:a,__namedExportsOrder:p,default:g},Symbol.toStringTag,{value:"Module"}));export{y as S,a as W,r as a};
