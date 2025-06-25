import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{O as D,p as v,S as E,Q as a}from"./Loader-C6nTMx6t.js";import{r as _}from"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as W}from"./index-28pPPJTf.js";const F=({onChange:s,value:t})=>l=>{l.preventDefault(),s({value:Number(t)})},p=({isVisible:s,active:t,value:l,...n})=>s?e.jsx("li",{className:D("af-pager__item",{"af-pager__item--active":t}),children:e.jsx("a",{className:"af-pager__item-link",href:"/#",onClick:F({...n,value:l}),children:e.jsx("span",{children:l})})}):null,f=({isVisible:s,children:t})=>s?e.jsx("li",{className:"af-pager__item af-pager__item--disabled",children:e.jsx("span",{className:"af-pager__item-link",children:t})}):null,g=({isVisible:s,active:t,children:l,value:n,onChange:r})=>s?t?e.jsx("li",{className:"af-pager__item",children:e.jsx("a",{className:"af-pager__item-link",href:"/#",role:"button",onClick:o=>{o.preventDefault(),r({value:n})},children:l})}):e.jsx("li",{className:"af-pager__item af-pager__item--disabled",children:e.jsx("span",{className:"af-pager__item-nolink",children:l})}):null,M=({className:s,classModifier:t,numberPages:l=1,currentPage:n=1,onChange:r,mode:o="default",previousLabel:b="« Précédent",nextLabel:x="Suivant »",ofLabel:h="sur"})=>{const i=n<l,d=n>1,m=v(s,t,"af-pager");return o==="light"?e.jsx("nav",{className:m,children:e.jsxs("ul",{className:"af-pager__pagination",children:[e.jsx(g,{onChange:r,value:n-1,active:d,isVisible:!0,children:e.jsx("i",{className:"glyphicon glyphicon-chevron-left","aria-hidden":"true"})}),e.jsxs(f,{isVisible:!0,children:[n," ",h," ",l]}),e.jsx(g,{onChange:r,value:n+1,active:i,isVisible:!0,children:e.jsx("i",{className:"glyphicon glyphicon-chevron-right","aria-hidden":"true"})})]})}):e.jsx("nav",{className:m,children:e.jsxs("ul",{className:"af-pager__pagination",children:[e.jsx(g,{onChange:r,value:n-1,active:d,isVisible:!0,children:b}),e.jsx(p,{onChange:r,value:1,isVisible:l>1&&n>1}),e.jsx(f,{isVisible:n>3,children:"..."}),e.jsx(p,{onChange:r,value:n-1,isVisible:l>2&&n>2}),e.jsx(p,{onChange:r,value:n,active:!0,isVisible:l>0}),e.jsx(p,{onChange:r,value:n+1,isVisible:n<l-1}),e.jsx(f,{isVisible:n<l-2,children:"..."}),e.jsx(p,{onChange:r,value:l,isVisible:n<l}),e.jsx(g,{onChange:r,value:n+1,active:i,isVisible:!0,children:x})]})})},P=({className:s,classModifier:t,onChange:l,displayLabel:n="Afficher",elementsLabel:r="éléments",selectAriaLabel:o="Modifier le nombre d'éléments à afficher dans le tableau",id:b,items:x=[5,10,25,50,100],numberItems:h=10})=>{const i=_.useId(),d=b??i,m=v(s,t,"af-paging__form");return e.jsx("div",{className:"af-paging__limit",children:e.jsx("form",{className:m,children:e.jsxs("div",{className:"af-form__group",children:[e.jsx("div",{className:"col col-sm-2 col-md-2 col-lg-2 col-xl-2",children:e.jsx("label",{className:"af-form__group-label",htmlFor:d,children:n})}),e.jsxs("div",{className:"col col-sm-10 col-md-10 col-lg-10 col-xl-10",children:[e.jsx(E,{id:d,value:h,mode:"base",options:x.map(c=>({label:c.toString(),value:c.toString()})),onChange:c=>{c.preventDefault(),l({value:Number(c.target.value)})},"aria-label":o}),e.jsx("span",{className:"af-form__input-cmplt",children:r})]})]})})})},k=({className:s,classModifier:t,currentPage:l=1,displayLabel:n,selectAriaLabel:r,elementsLabel:o,id:b,mode:x,nextLabel:h,numberItems:i=10,numberPages:d,ofLabel:m,previousLabel:c,items:w,onChange:T})=>{const H=v(s,t,"af-paging"),A=_.useCallback(S=>T&&T({numberItems:S.value,page:l}),[l,T]),O=_.useCallback(S=>T&&T({numberItems:i,page:S.value}),[i,T]);return e.jsxs("div",{className:H,children:[e.jsx("div",{className:"af-paging__limit",children:e.jsx(P,{onChange:A,numberItems:i,id:b,displayLabel:n,selectAriaLabel:r,elementsLabel:o,items:w})}),e.jsx("div",{className:"af-paging__pager",children:e.jsx(M,{onChange:O,currentPage:l,numberPages:d,previousLabel:c,nextLabel:h,ofLabel:m,mode:x})})]})},z={component:k,title:"Components/Table",argTypes:{onChange:{action:"onChange"}},args:{onChange:W()}},u={name:"Simple table",render:()=>e.jsx(a,{children:e.jsxs(a.THead,{children:[e.jsx(a.Tr,{children:e.jsx(a.Th,{colSpan:3,children:"Some text"})}),e.jsxs(a.Tr,{children:[e.jsx(a.Th,{rowSpan:2,children:"Some text"}),e.jsx(a.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]})]})}),args:{},argTypes:{}},j={name:"Table with pagination",render:({currentPage:s,numberItems:t,numberPages:l,mode:n,...r})=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsxs(a.THead,{children:[e.jsx(a.Tr,{children:e.jsx(a.Th,{colSpan:3,children:"Some text"})}),e.jsxs(a.Tr,{children:[e.jsx(a.Th,{rowSpan:2,children:"Some text"}),e.jsx(a.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]})]})}),e.jsx(k,{currentPage:s,numberItems:t,numberPages:l,mode:n,...r})]}),args:{currentPage:3,numberItems:10,numberPages:10,mode:"default",items:[5,10,50,100],selectAriaLabel:"Select"},argTypes:{currentPage:{control:{type:"number"}},numberItems:{control:{type:"number"}},numberPages:{control:{type:"number"}},mode:{options:["default","light"],control:{type:"radio"}},onChange:{table:{disable:!0}}}};var N,y,C;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Simple table",
  render: () => <Table>\r
      <Table.THead>\r
        <Table.Tr>\r
          <Table.Th colSpan={3}>Some text</Table.Th>\r
        </Table.Tr>\r
        <Table.Tr>\r
          <Table.Th rowSpan={2}>Some text</Table.Th>\r
          <Table.Td>\r
            <strong>Some bold text</strong>\r
          </Table.Td>\r
          <Table.Td>Some text</Table.Td>\r
        </Table.Tr>\r
        <Table.Tr>\r
          <Table.Td>Some text</Table.Td>\r
          <Table.Td>Some text</Table.Td>\r
        </Table.Tr>\r
        <Table.Tr>\r
          <Table.Td>Some text</Table.Td>\r
          <Table.Td>Some text</Table.Td>\r
          <Table.Td>Some text</Table.Td>\r
        </Table.Tr>\r
      </Table.THead>\r
    </Table>,
  args: {},
  argTypes: {}
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,V,L;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Table with pagination",
  render: ({
    currentPage,
    numberItems,
    numberPages,
    mode,
    ...args
  }) => <>\r
      <Table>\r
        <Table.THead>\r
          <Table.Tr>\r
            <Table.Th colSpan={3}>Some text</Table.Th>\r
          </Table.Tr>\r
          <Table.Tr>\r
            <Table.Th rowSpan={2}>Some text</Table.Th>\r
            <Table.Td>\r
              <strong>Some bold text</strong>\r
            </Table.Td>\r
            <Table.Td>Some text</Table.Td>\r
          </Table.Tr>\r
          <Table.Tr>\r
            <Table.Td>Some text</Table.Td>\r
            <Table.Td>Some text</Table.Td>\r
          </Table.Tr>\r
          <Table.Tr>\r
            <Table.Td>Some text</Table.Td>\r
            <Table.Td>Some text</Table.Td>\r
            <Table.Td>Some text</Table.Td>\r
          </Table.Tr>\r
        </Table.THead>\r
      </Table>\r
      <Paging currentPage={currentPage} numberItems={numberItems} numberPages={numberPages} mode={mode} {...args} />\r
    </>,
  args: {
    currentPage: 3,
    numberItems: 10,
    numberPages: 10,
    mode: "default",
    items: [5, 10, 50, 100],
    selectAriaLabel: "Select"
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
}`,...(L=(V=j.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const B=["Simple","WithPagination"],U=Object.freeze(Object.defineProperty({__proto__:null,Simple:u,WithPagination:j,__namedExportsOrder:B,default:z},Symbol.toStringTag,{value:"Module"}));export{U as S,j as W,u as a};
