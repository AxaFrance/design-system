import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as M,r as R,v as $,G as a,B as u}from"./CardData-BIJbskTL.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{D as k}from"./Divider-FxXuXNWA.js";const n="af-card-data-header",g=`${n}-icon`,_=({title:m,subTitle:l,description:o,icon:h,variant:d,contentRight:r,withDivider:T})=>e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:n,children:[e.jsx("span",{className:M(g,d!=="default"?`${g}--${d}`:null),children:e.jsx(R,{src:h})}),e.jsxs($,{heading:"h3",children:[m,l?e.jsx("span",{className:`${n}-subtitle`,children:l}):null,o?e.jsx("span",{className:`${n}-description`,children:o}):null]}),r?e.jsx("span",{className:`${n}-rightcontent`,children:r}):null]}),T?e.jsx(k,{}):null]}),x="af-card-data",F=({title:m,subTitle:l,description:o,icon:h,variant:d="default",contentFitAllSize:r=!1,contentRight:T,children:N,withDivider:P=!0})=>e.jsxs("div",{className:x,children:[e.jsx(_,{title:m,subTitle:l,description:o,icon:h,variant:d,contentRight:T,withDivider:P}),e.jsx("section",{className:M({[`${x}-content--max-size`]:r},{[`${x}-content`]:!r}),children:N})]}),p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M212-271v-279q0-12.75%208.68-21.38%208.67-8.62%2021.5-8.62%2012.82%200%2021.32%208.62%208.5%208.63%208.5%2021.38v279q0%2012.75-8.68%2021.37-8.67%208.63-21.5%208.63-12.82%200-21.32-8.63-8.5-8.62-8.5-21.37Zm242%200v-279q0-12.75%208.68-21.38%208.67-8.62%2021.5-8.62%2012.82%200%2021.32%208.62%208.5%208.63%208.5%2021.38v279q0%2012.75-8.68%2021.37-8.67%208.63-21.5%208.63-12.82%200-21.32-8.63-8.5-8.62-8.5-21.37ZM110-121q-12.75%200-21.37-8.68-8.63-8.67-8.63-21.5%200-12.82%208.63-21.32Q97.25-181%20110-181h740q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32-8.63%208.5-21.38%208.5H110Zm578-150v-279q0-12.75%208.68-21.38%208.67-8.62%2021.5-8.62%2012.82%200%2021.32%208.62%208.5%208.63%208.5%2021.38v279q0%2012.75-8.68%2021.37-8.67%208.63-21.5%208.63-12.82%200-21.32-8.63-8.5-8.62-8.5-21.37Zm166-369H103q-9.58%200-16.29-6.71Q80-653.42%2080-663v-17q0-6%203.5-11.5T92-700l358-204q14.17-8%2030-8t30%208l357%20203q6%204%209.5%2010t3.5%2013.5v10.23q0%2011.59-7.47%2019.43Q865.05-640%20854-640Z'/%3e%3c/svg%3e",Z={title:"Components/CardData",component:F,argTypes:{variant:{control:{type:"select",options:["error","warning","information","success","default","dark","gray","purple"]},description:"Change the background color of the icon"}}},t={name:"CardData",args:{title:"Saisie de contrat",children:e.jsx(a,{style:{boxShadow:"none"},children:e.jsxs(a.TBody,{children:[e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Date dépôt par le délégataire"}),e.jsx(a.Td,{children:"-"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Date de réception du flux"}),e.jsx(a.Td,{children:"13/06/2024"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Date de création dans Porteur de Risque"}),e.jsx(a.Td,{children:"25/12/2024"})]})]})}),contentFitAllSize:!0,icon:p}},s={name:"CardData with subtitle",args:{title:"Console des flux",subTitle:"Sous-titre de la carte",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginTop:0},children:"Contenu de la carte"}),e.jsx(u,{classModifier:"reverse",children:"Accéder à la console de flux"})]}),icon:p,variant:"success"}},i={name:"CardData with description",args:{title:"Console des flux",description:"Description de la carte",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginTop:0},children:"Contenu de la carte"}),e.jsx(u,{classModifier:"reverse",children:"Accéder à la console de flux"})]}),icon:p,variant:"success"}},c={name:"CardData with contentRight",args:{title:"Console des flux",subTitle:"Sous-titre de la carte",description:"Description de la carte",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginTop:0},children:"Contenu de la carte"}),e.jsx(u,{classModifier:"reverse",children:"Accéder à la console de flux"})]}),icon:p,variant:"error",contentRight:e.jsx(u,{classModifier:"reverse",children:"Accéder à la console de flux"})}};var b,f,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "CardData",
  args: {
    title: "Saisie de contrat",
    children: <Table style={{
      boxShadow: "none"
    }}>
        <Table.TBody>
          <Table.Tr>
            <Table.Td>Date dépôt par le délégataire</Table.Td>
            <Table.Td>-</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Date de réception du flux</Table.Td>
            <Table.Td>13/06/2024</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Date de création dans Porteur de Risque</Table.Td>
            <Table.Td>25/12/2024</Table.Td>
          </Table.Tr>
        </Table.TBody>
      </Table>,
    contentFitAllSize: true,
    icon: bank
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var v,j,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "CardData with subtitle",
  args: {
    title: "Console des flux",
    subTitle: "Sous-titre de la carte",
    children: <>
        <p style={{
        marginTop: 0
      }}>Contenu de la carte</p>
        <Button classModifier="reverse">Accéder à la console de flux</Button>
      </>,
    icon: bank,
    variant: "success"
  }
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var y,S,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "CardData with description",
  args: {
    title: "Console des flux",
    description: "Description de la carte",
    children: <>
        <p style={{
        marginTop: 0
      }}>Contenu de la carte</p>
        <Button classModifier="reverse">Accéder à la console de flux</Button>
      </>,
    icon: bank,
    variant: "success"
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var q,B,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "CardData with contentRight",
  args: {
    title: "Console des flux",
    subTitle: "Sous-titre de la carte",
    description: "Description de la carte",
    children: <>
        <p style={{
        marginTop: 0
      }}>Contenu de la carte</p>
        <Button classModifier="reverse">Accéder à la console de flux</Button>
      </>,
    icon: bank,
    variant: "error",
    contentRight: <Button classModifier="reverse">Accéder à la console de flux</Button>
  }
}`,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const z=["CardDataPrimary","CardDataPrimaryAvecSousTitre","CardDataPrimaryAvecDescription","CardDataWithContentRight"],G=Object.freeze(Object.defineProperty({__proto__:null,CardDataPrimary:t,CardDataPrimaryAvecDescription:i,CardDataPrimaryAvecSousTitre:s,CardDataWithContentRight:c,__namedExportsOrder:z,default:Z},Symbol.toStringTag,{value:"Module"}));export{G as C,t as a,s as b,c};
