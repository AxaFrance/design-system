import{j as e}from"./index-DK-fRI8B.js";/* empty css              */import{O as D,p as _,S as E,Q as a}from"./Loader-B2KJ74q3.js";import{r as f}from"./index-DbaA8R3S.js";import{f as W}from"./index-C2cC0QQF.js";const F=({onChange:t,value:r})=>l=>{l.preventDefault(),t({value:Number(r)})},h=({isVisible:t,active:r,value:l,...n})=>t?e.jsx("li",{className:D("af-pager__item",{"af-pager__item--active":r}),children:e.jsx("a",{className:"af-pager__item-link",href:"/#",onClick:F({...n,value:l}),children:e.jsx("span",{children:l})})}):null,S=({isVisible:t,children:r})=>t?e.jsx("li",{className:"af-pager__item af-pager__item--disabled",children:e.jsx("span",{className:"af-pager__item-link",children:r})}):null,j=({isVisible:t,active:r,children:l,value:n,onChange:s})=>t?r?e.jsx("li",{className:"af-pager__item",children:e.jsx("a",{className:"af-pager__item-link",href:"/#",role:"button",onClick:o=>{o.preventDefault(),s({value:n})},children:l})}):e.jsx("li",{className:"af-pager__item af-pager__item--disabled",children:e.jsx("span",{className:"af-pager__item-nolink",children:l})}):null,P=({className:t,classModifier:r,numberPages:l=1,currentPage:n=1,onChange:s,mode:o="default",previousLabel:x="« Précédent",nextLabel:b="Suivant »",ofLabel:d="sur"})=>{const m=n<l,c=n>1,i=_(t,r,"af-pager");return o==="light"?e.jsx("nav",{className:i,children:e.jsxs("ul",{className:"af-pager__pagination",children:[e.jsx(j,{onChange:s,value:n-1,active:c,isVisible:!0,children:e.jsx("i",{className:"glyphicon glyphicon-chevron-left","aria-hidden":"true"})}),e.jsxs(S,{isVisible:!0,children:[n," ",d," ",l]}),e.jsx(j,{onChange:s,value:n+1,active:m,isVisible:!0,children:e.jsx("i",{className:"glyphicon glyphicon-chevron-right","aria-hidden":"true"})})]})}):e.jsx("nav",{className:i,children:e.jsxs("ul",{className:"af-pager__pagination",children:[e.jsx(j,{onChange:s,value:n-1,active:c,isVisible:!0,children:x}),e.jsx(h,{onChange:s,value:1,isVisible:l>1&&n>1}),e.jsx(S,{isVisible:n>3,children:"..."}),e.jsx(h,{onChange:s,value:n-1,isVisible:l>2&&n>2}),e.jsx(h,{onChange:s,value:n,active:!0,isVisible:l>0}),e.jsx(h,{onChange:s,value:n+1,isVisible:n<l-1}),e.jsx(S,{isVisible:n<l-2,children:"..."}),e.jsx(h,{onChange:s,value:l,isVisible:n<l}),e.jsx(j,{onChange:s,value:n+1,active:m,isVisible:!0,children:b})]})})},z=({className:t,classModifier:r,onChange:l,displayLabel:n="Afficher",elementsLabel:s="éléments",id:o,items:x=[5,10,25,50,100],numberItems:b=10})=>{const d=f.useId(),m=o??d,c=_(t,r,"af-paging__form");return e.jsx("div",{className:"af-paging__limit",children:e.jsx("form",{className:c,children:e.jsxs("div",{className:"af-form__group",children:[e.jsx("div",{className:"col col-sm-2 col-md-2 col-lg-2 col-xl-2",children:e.jsx("label",{className:"af-form__group-label",htmlFor:m,children:n})}),e.jsxs("div",{className:"col col-sm-10 col-md-10 col-lg-10 col-xl-10",children:[e.jsx(E,{id:m,value:b,mode:"base",options:x.map(i=>({label:i.toString(),value:i.toString()})),onChange:i=>{i.preventDefault(),l({value:Number(i.target.value)})}}),e.jsx("span",{className:"af-form__input-cmplt",children:s})]})]})})})},k=({className:t,classModifier:r,currentPage:l=1,displayLabel:n,elementsLabel:s,id:o,mode:x,nextLabel:b,numberItems:d=10,numberPages:m,ofLabel:c,previousLabel:i,items:w,onChange:T})=>{const L=_(t,r,"af-paging"),H=f.useCallback(g=>T&&T({numberItems:g.value,page:l}),[l,T]),O=f.useCallback(g=>T&&T({numberItems:d,page:g.value}),[d,T]);return e.jsxs("div",{className:L,children:[e.jsx("div",{className:"af-paging__limit",children:e.jsx(z,{onChange:H,numberItems:d,id:o,displayLabel:n,elementsLabel:s,items:w})}),e.jsx("div",{className:"af-paging__pager",children:e.jsx(P,{onChange:O,currentPage:l,numberPages:m,previousLabel:i,nextLabel:b,ofLabel:c,mode:x})})]})},A={component:k,title:"Components/Table",argTypes:{onChange:{action:"onChange"}},args:{onChange:W()}},p={name:"Simple table",render:()=>e.jsx(a,{children:e.jsxs(a.THead,{children:[e.jsx(a.Tr,{children:e.jsx(a.Th,{colSpan:3,children:"Some text"})}),e.jsxs(a.Tr,{children:[e.jsx(a.Th,{rowSpan:2,children:"Some text"}),e.jsx(a.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]})]})}),args:{},argTypes:{}},u={name:"Table with pagination",render:({currentPage:t,numberItems:r,numberPages:l,mode:n,...s})=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsxs(a.THead,{children:[e.jsx(a.Tr,{children:e.jsx(a.Th,{colSpan:3,children:"Some text"})}),e.jsxs(a.Tr,{children:[e.jsx(a.Th,{rowSpan:2,children:"Some text"}),e.jsx(a.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]})]})}),e.jsx(k,{currentPage:t,numberItems:r,numberPages:l,mode:n,...s})]}),args:{currentPage:3,numberItems:10,numberPages:10,mode:"default",items:[5,10,50,100]},argTypes:{currentPage:{control:{type:"number"}},numberItems:{control:{type:"number"}},numberPages:{control:{type:"number"}},mode:{options:["default","light"],control:{type:"radio"}},onChange:{table:{disable:!0}}}};var v,N,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(N=p.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var C,I,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(I=u.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const B=["Simple","WithPagination"],J=Object.freeze(Object.defineProperty({__proto__:null,Simple:p,WithPagination:u,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{J as S,u as W,p as a};
