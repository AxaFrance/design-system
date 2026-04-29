import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as l}from"./index-B-lxVbXh.js";import{A as a,h as r,d as i}from"./LoaderApollo-Bo1PAZ-b.js";/* empty css               */import"./index-CtOEgLBf.js";const t="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M160-80v-60h640v60H160Zm319-160L199-600h160v-280h240v280h161L479-240Z'/%3e%3c/svg%3e",c={title:"Components/TableMobileCard",component:a},o={name:"Table Card basique",args:{variant:"alternate",direction:"row"},argTypes:{variant:{control:{type:"select"},options:["alternate","white","blue"],description:"Variant de la couleur des lignes"},direction:{control:{type:"select"},options:["row","column"],description:"Variant de la disposition des éléments d'une ligne"}},render:d=>e.jsxs(a,{variant:d.variant,children:[e.jsxs(a.DRow,{children:[e.jsx(a.Dt,{children:"Produit/Support"}),e.jsx(a.Dd,{children:"AB Sustainable Global Thematic A"})]}),e.jsxs(a.DRow,{children:[e.jsx(a.Dt,{children:"Code Isin"}),e.jsx(a.Dd,{children:"LU0101010101"})]}),e.jsxs(a.DRow,{children:[e.jsx(a.Dt,{children:"Status"}),e.jsx(a.Dd,{children:"Ouvert"})]}),e.jsxs(a.DRow,{children:[e.jsx(a.Dt,{children:"Qualification SFDR"}),e.jsx(a.Dd,{children:"9"})]}),e.jsxs(a.DRow,{direction:d.direction,children:[e.jsx(a.Dt,{children:"DIC/DIS/DICI"}),e.jsx(a.Dd,{children:e.jsx(r,{variant:"ghost",iconRight:e.jsx(i,{src:t}),onClick:l("download_1"),children:"Télécharger"})})]}),e.jsxs(a.DRow,{children:[e.jsx(a.Dt,{children:"Prospectus"}),e.jsx(a.Dd,{children:e.jsx(r,{variant:"ghost",iconRight:e.jsx(i,{src:t,onClick:l("download_2")}),children:"Télécharger"})})]}),e.jsxs(a.DRow,{children:[e.jsx(a.Dt,{children:"Rapport annuelle"}),e.jsx(a.Dd,{children:e.jsx(r,{variant:"ghost",iconRight:e.jsx(i,{src:t,onClick:l("download_3")}),children:"Télécharger"})})]})]})};var n,s,b;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Table Card basique",
  args: {
    variant: "alternate",
    direction: "row"
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: ["alternate", "white", "blue"],
      description: "Variant de la couleur des lignes"
    },
    direction: {
      control: {
        type: "select"
      },
      options: ["row", "column"],
      description: "Variant de la disposition des éléments d'une ligne"
    }
  },
  render: (args: TableMobileCardStoryArgs) => <TableMobileCard variant={args.variant}>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Produit/Support</TableMobileCard.Dt>
        <TableMobileCard.Dd>
          AB Sustainable Global Thematic A
        </TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Code Isin</TableMobileCard.Dt>
        <TableMobileCard.Dd>LU0101010101</TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Status</TableMobileCard.Dt>
        <TableMobileCard.Dd>Ouvert</TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Qualification SFDR</TableMobileCard.Dt>
        <TableMobileCard.Dd>9</TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow direction={args.direction}>
        <TableMobileCard.Dt>DIC/DIS/DICI</TableMobileCard.Dt>
        <TableMobileCard.Dd>
          <Button variant="ghost" iconRight={<Icon src={download} />} onClick={action("download_1")}>
            Télécharger
          </Button>
        </TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Prospectus</TableMobileCard.Dt>
        <TableMobileCard.Dd>
          <Button variant="ghost" iconRight={<Icon src={download} onClick={action("download_2")} />}>
            Télécharger
          </Button>
        </TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Rapport annuelle</TableMobileCard.Dt>
        <TableMobileCard.Dd>
          <Button variant="ghost" iconRight={<Icon src={download} onClick={action("download_3")} />}>
            Télécharger
          </Button>
        </TableMobileCard.Dd>
      </TableMobileCard.DRow>
    </TableMobileCard>
}`,...(b=(s=o.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};const D=["BasicTableMobileCard"],u=Object.freeze(Object.defineProperty({__proto__:null,BasicTableMobileCard:o,__namedExportsOrder:D,default:c},Symbol.toStringTag,{value:"Module"}));export{o as B,u as T};
