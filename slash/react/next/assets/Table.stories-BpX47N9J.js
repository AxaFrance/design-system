import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{O as E,p as v,S as W,Q as a}from"./Loader-C1uJHYLx.js";/* empty css              */import{r as _}from"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as A}from"./index-C2cC0QQF.js";const F=({onChange:t,value:r})=>l=>{l.preventDefault(),t({value:Number(r)})},p=({isVisible:t,active:r,value:l,...n})=>t?e.jsx("li",{className:E("af-pager__item",{"af-pager__item--active":r}),children:e.jsx("a",{className:"af-pager__item-link",href:"/#",onClick:F({...n,value:l}),children:e.jsx("span",{children:l})})}):null,S=({isVisible:t,children:r})=>t?e.jsx("li",{className:"af-pager__item af-pager__item--disabled",children:e.jsx("span",{className:"af-pager__item-link",children:r})}):null,g=({isVisible:t,active:r,children:l,value:n,onChange:s})=>t?r?e.jsx("li",{className:"af-pager__item",children:e.jsx("a",{className:"af-pager__item-link",href:"/#",role:"button",onClick:o=>{o.preventDefault(),s({value:n})},children:l})}):e.jsx("li",{className:"af-pager__item af-pager__item--disabled",children:e.jsx("span",{className:"af-pager__item-nolink",children:l})}):null,M=({className:t,classModifier:r,numberPages:l=1,currentPage:n=1,onChange:s,mode:o="default",previousLabel:b="« Précédent",nextLabel:x="Suivant »",ofLabel:h="sur"})=>{const i=n<l,d=n>1,c=v(t,r,"af-pager");return o==="light"?e.jsx("nav",{className:c,children:e.jsxs("ul",{className:"af-pager__pagination",children:[e.jsx(g,{onChange:s,value:n-1,active:d,isVisible:!0,children:e.jsx("i",{className:"glyphicon glyphicon-chevron-left","aria-hidden":"true"})}),e.jsxs(S,{isVisible:!0,children:[n," ",h," ",l]}),e.jsx(g,{onChange:s,value:n+1,active:i,isVisible:!0,children:e.jsx("i",{className:"glyphicon glyphicon-chevron-right","aria-hidden":"true"})})]})}):e.jsx("nav",{className:c,children:e.jsxs("ul",{className:"af-pager__pagination",children:[e.jsx(g,{onChange:s,value:n-1,active:d,isVisible:!0,children:b}),e.jsx(p,{onChange:s,value:1,isVisible:l>1&&n>1}),e.jsx(S,{isVisible:n>3,children:"..."}),e.jsx(p,{onChange:s,value:n-1,isVisible:l>2&&n>2}),e.jsx(p,{onChange:s,value:n,active:!0,isVisible:l>0}),e.jsx(p,{onChange:s,value:n+1,isVisible:n<l-1}),e.jsx(S,{isVisible:n<l-2,children:"..."}),e.jsx(p,{onChange:s,value:l,isVisible:n<l}),e.jsx(g,{onChange:s,value:n+1,active:i,isVisible:!0,children:x})]})})},P=({className:t,classModifier:r,onChange:l,displayLabel:n="Afficher",elementsLabel:s="éléments",selectAriaLabel:o="Modifier le nombre d'éléments à afficher dans le tableau",id:b,items:x=[5,10,25,50,100],numberItems:h=10})=>{const i=_.useId(),d=b??i,c=v(t,r,"af-paging__form");return e.jsx("div",{className:"af-paging__limit",children:e.jsx("form",{className:c,children:e.jsxs("div",{className:"af-form__group",children:[e.jsx("div",{className:"col col-sm-2 col-md-2 col-lg-2 col-xl-2",children:e.jsx("label",{className:"af-form__group-label",htmlFor:d,children:n})}),e.jsxs("div",{className:"col col-sm-10 col-md-10 col-lg-10 col-xl-10",children:[e.jsx(W,{id:d,value:h,mode:"base",options:x.map(m=>({label:m.toString(),value:m.toString()})),onChange:m=>{m.preventDefault(),l({value:Number(m.target.value)})},"aria-label":o}),e.jsx("span",{className:"af-form__input-cmplt",children:s})]})]})})})},L=({className:t,classModifier:r,currentPage:l=1,displayLabel:n,selectAriaLabel:s,elementsLabel:o,id:b,mode:x,nextLabel:h,numberItems:i=10,numberPages:d,ofLabel:c,previousLabel:m,items:w,onChange:T})=>{const H=v(t,r,"af-paging"),O=_.useCallback(f=>T&&T({numberItems:f.value,page:l}),[l,T]),D=_.useCallback(f=>T&&T({numberItems:i,page:f.value}),[i,T]);return e.jsxs("div",{className:H,children:[e.jsx("div",{className:"af-paging__limit",children:e.jsx(P,{onChange:O,numberItems:i,id:b,displayLabel:n,selectAriaLabel:s,elementsLabel:o,items:w})}),e.jsx("div",{className:"af-paging__pager",children:e.jsx(M,{onChange:D,currentPage:l,numberPages:d,previousLabel:m,nextLabel:h,ofLabel:c,mode:x})})]})},z={component:L,title:"Components/Table",argTypes:{onChange:{action:"onChange"}},args:{onChange:A()}},u={name:"Simple table",render:()=>e.jsx(a,{children:e.jsxs(a.THead,{children:[e.jsx(a.Tr,{children:e.jsx(a.Th,{colSpan:3,children:"Some text"})}),e.jsxs(a.Tr,{children:[e.jsx(a.Th,{rowSpan:2,children:"Some text"}),e.jsx(a.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]})]})}),args:{},argTypes:{}},j={name:"Table with pagination",render:({currentPage:t,numberItems:r,numberPages:l,mode:n,...s})=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsxs(a.THead,{children:[e.jsx(a.Tr,{children:e.jsx(a.Th,{colSpan:3,children:"Some text"})}),e.jsxs(a.Tr,{children:[e.jsx(a.Th,{rowSpan:2,children:"Some text"}),e.jsx(a.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]})]})}),e.jsx(L,{currentPage:t,numberItems:r,numberPages:l,mode:n,...s})]}),args:{currentPage:3,numberItems:10,numberPages:10,mode:"default",items:[5,10,50,100]},argTypes:{currentPage:{control:{type:"number"}},numberItems:{control:{type:"number"}},numberPages:{control:{type:"number"}},mode:{options:["default","light"],control:{type:"radio"}},onChange:{table:{disable:!0}}}};var N,y,C;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,V,k;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(V=j.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const B=["Simple","WithPagination"],U=Object.freeze(Object.defineProperty({__proto__:null,Simple:u,WithPagination:j,__namedExportsOrder:B,default:z},Symbol.toStringTag,{value:"Module"}));export{U as S,j as W,u as a};
