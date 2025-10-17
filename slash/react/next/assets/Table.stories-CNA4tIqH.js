import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{g as v,S as $,G as a}from"./CardData-CaJ79gES.js";import{r as _}from"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as D}from"./index-28pPPJTf.js";const A=({onChange:i,value:r})=>l=>{l.preventDefault(),i({value:Number(r)})},h=({isVisible:i,active:r,value:l,pageLinkLabel:s,onChange:t})=>i?e.jsx("li",{className:"af-pager__item",children:e.jsx("a",{"aria-current":r?"page":void 0,className:"af-pager__item-link",href:"/#","aria-label":`Page ${l} des ${s}`,onClick:A({onChange:t,value:l}),children:e.jsx("span",{children:l})})}):null,S=({isVisible:i,children:r})=>i?e.jsx("li",{className:"af-pager__item af-pager__item--disabled",children:e.jsx("span",{className:"af-pager__item-link",children:r})}):null,f=({isVisible:i,active:r,children:l,value:s,onChange:t,ariaLabel:d})=>i?r?e.jsx("li",{className:"af-pager__item",children:e.jsx("a",{className:"af-pager__item-link",href:"/#",role:"button","aria-label":d,onClick:c=>{c.preventDefault(),t({value:s})},children:l})}):e.jsx("li",{className:"af-pager__item af-pager__item--disabled",children:e.jsx("span",{className:"af-pager__item-nolink",children:l})}):null,E=({className:i,classModifier:r,numberPages:l=1,currentPage:s=1,onChange:t,mode:d="default",previousLabel:c="« Précédent",nextLabel:x="Suivant »",elementsLabel:n="éléments",ofLabel:m="sur"})=>{const T=s<l,b=s>1,o=v(i,r,"af-pager");return d==="light"?e.jsx("nav",{className:o,children:e.jsxs("ul",{className:"af-pager__pagination",children:[e.jsx(f,{onChange:t,value:s-1,active:b,isVisible:!0,ariaLabel:`Page précédente des ${n}`,children:e.jsx("i",{className:"glyphicon glyphicon-chevron-left","aria-hidden":"true"})}),e.jsxs(S,{isVisible:!0,children:[s," ",m," ",l]}),e.jsx(f,{onChange:t,value:s+1,active:T,isVisible:!0,ariaLabel:`Page suivante des ${n}`,children:e.jsx("i",{className:"glyphicon glyphicon-chevron-right","aria-hidden":"true"})})]})}):e.jsx("nav",{className:o,children:e.jsxs("ul",{className:"af-pager__pagination",children:[e.jsx(f,{onChange:t,value:s-1,active:b,isVisible:!0,ariaLabel:`Page précédente des ${n}`,children:c}),e.jsx(h,{onChange:t,value:1,isVisible:l>1&&s>1,pageLinkLabel:n}),e.jsx(S,{isVisible:s>3,children:"..."}),e.jsx(h,{onChange:t,value:s-1,isVisible:l>2&&s>2,pageLinkLabel:n}),e.jsx(h,{onChange:t,value:s,active:!0,isVisible:l>0,pageLinkLabel:n}),e.jsx(h,{onChange:t,value:s+1,isVisible:s<l-1,pageLinkLabel:n}),e.jsx(S,{isVisible:s<l-2,children:"..."}),e.jsx(h,{onChange:t,value:l,isVisible:s<l,pageLinkLabel:n}),e.jsx(f,{onChange:t,value:s+1,active:T,isVisible:!0,ariaLabel:`Page suivante des ${n}`,children:x})]})})},O=({className:i,classModifier:r,onChange:l,displayLabel:s="Afficher",elementsLabel:t="éléments",selectAriaLabel:d="Modifier le nombre d'éléments à afficher dans le tableau",id:c,items:x=[5,10,25,50,100],numberItems:n=10})=>{const m=_.useId(),T=c??m,b=v(i,r,"af-paging__form");return e.jsx("div",{className:"af-paging__limit",children:e.jsx("form",{className:b,children:e.jsxs("div",{className:"af-form__group",children:[e.jsx("div",{className:"col col-sm-2 col-md-2 col-lg-2 col-xl-2",children:e.jsx("label",{className:"af-form__group-label",htmlFor:T,children:s})}),e.jsxs("div",{className:"col col-sm-10 col-md-10 col-lg-10 col-xl-10",children:[e.jsx($,{id:T,value:n,mode:"base",options:x.map(o=>({label:o.toString(),value:o.toString()})),onChange:o=>{o.preventDefault(),l({value:Number(o.target.value)})},"aria-label":d}),e.jsx("span",{className:"af-form__input-cmplt",children:t})]})]})})})},P=({className:i,classModifier:r,currentPage:l=1,displayLabel:s,elementsLabel:t,selectPageSizeLabel:d,id:c,mode:x,nextLabel:n,numberItems:m=10,numberPages:T,ofLabel:b,previousLabel:o,items:V,onChange:p})=>{const w=v(i,r,"af-paging"),z=_.useCallback(j=>p&&p({numberItems:j.value,page:l}),[l,p]),H=_.useCallback(j=>p&&p({numberItems:m,page:j.value}),[m,p]);return e.jsxs("div",{className:w,children:[e.jsx("div",{className:"af-paging__limit",children:e.jsx(O,{onChange:z,numberItems:m,id:c,displayLabel:s,selectAriaLabel:d,elementsLabel:t,items:V})}),e.jsx("div",{className:"af-paging__pager",children:e.jsx(E,{onChange:H,currentPage:l,numberPages:T,previousLabel:o,nextLabel:n,elementsLabel:t,ofLabel:b,mode:x})})]})},W={component:P,title:"Components/Table",argTypes:{onChange:{action:"onChange"}},args:{onChange:D()}},g={name:"Simple table",render:()=>e.jsx(a,{children:e.jsxs(a.THead,{children:[e.jsx(a.Tr,{children:e.jsx(a.Th,{colSpan:3,children:"Some text"})}),e.jsxs(a.Tr,{children:[e.jsx(a.Th,{rowSpan:2,children:"Some text"}),e.jsx(a.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]})]})}),args:{},argTypes:{}},u={name:"Table with pagination",render:({currentPage:i,numberItems:r,numberPages:l,mode:s,elementsLabel:t,selectPageSizeLabel:d,...c})=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsxs(a.THead,{children:[e.jsx(a.Tr,{children:e.jsx(a.Th,{colSpan:3,children:"Some text"})}),e.jsxs(a.Tr,{children:[e.jsx(a.Th,{rowSpan:2,children:"Some text"}),e.jsx(a.Td,{children:e.jsx("strong",{children:"Some bold text"})}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"}),e.jsx(a.Td,{children:"Some text"})]})]})}),e.jsx(P,{currentPage:i,numberItems:r,numberPages:l,mode:s,elementsLabel:t,selectPageSizeLabel:d,...c})]}),args:{currentPage:3,numberItems:1e3,numberPages:10,mode:"default",elementsLabel:"sinistres",items:[5,10,50,100],selectAriaLabel:"Select"},argTypes:{currentPage:{control:{type:"number"},description:"Numéro de page actuelle"},numberItems:{control:{type:"number"},description:"Nombre d'élément à afficher"},numberPages:{control:{type:"number"},description:"Nombre de pages"},mode:{options:["default","light"],control:{type:"radio"},description:"Choix du mode d'affichage"},elementsLabel:{type:"string",description:"Label utilisé dans les liens vers les page. Doit représenter ce que contient le tableau associé"},selectPageSizeLabel:{description:"Label du select pour choisir le nombre d'éléments à afficher",control:{type:"text"},type:"string"},items:{description:"Les différentes options de choix pour le nombre d'élément à afficher"},onChange:{table:{disable:!0}}}};var N,L,y;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(y=(L=g.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var C,k,I;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(k=u.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const q=["Simple","WithPagination"],K=Object.freeze(Object.defineProperty({__proto__:null,Simple:g,WithPagination:u,__namedExportsOrder:q,default:W},Symbol.toStringTag,{value:"Module"}));export{K as S,u as W,g as a};
