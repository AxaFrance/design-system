import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{V as r,t as i}from"./client-DKDZiWM3.js";import{Jn as a,m as o}from"./LoaderCommon-CNPQWS5E.js";var s,c=e((()=>{s=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M160-80v-60h640v60H160Zm319-160L199-600h160v-280h240v280h161L479-240Z'/%3e%3c/svg%3e`})),l=t({BasicTableMobileCard:()=>p,__namedExportsOrder:()=>m,default:()=>f}),u,d,f,p,m,h=e((()=>{i(),c(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Components/TableMobileCard`,component:o},p={name:`Table Card basique`,args:{variant:`alternate`,direction:`row`},argTypes:{variant:{control:{type:`select`},options:[`alternate`,`white`,`blue`],description:`Variant de la couleur des lignes`},direction:{control:{type:`select`},options:[`row`,`column`],description:`Variant de la disposition des éléments d'une ligne`}},render:e=>(0,u.jsxs)(o,{variant:e.variant,children:[(0,u.jsxs)(o.DRow,{children:[(0,u.jsx)(o.Dt,{children:`Produit/Support`}),(0,u.jsx)(o.Dd,{children:`AB Sustainable Global Thematic A`})]}),(0,u.jsxs)(o.DRow,{children:[(0,u.jsx)(o.Dt,{children:`Code Isin`}),(0,u.jsx)(o.Dd,{children:`LU0101010101`})]}),(0,u.jsxs)(o.DRow,{children:[(0,u.jsx)(o.Dt,{children:`Status`}),(0,u.jsx)(o.Dd,{children:`Ouvert`})]}),(0,u.jsxs)(o.DRow,{children:[(0,u.jsx)(o.Dt,{children:`Qualification SFDR`}),(0,u.jsx)(o.Dd,{children:`9`})]}),(0,u.jsxs)(o.DRow,{direction:e.direction,children:[(0,u.jsx)(o.Dt,{children:`DIC/DIS/DICI`}),(0,u.jsx)(o.Dd,{children:(0,u.jsx)(r,{variant:`ghost`,iconRight:(0,u.jsx)(a,{src:s,onClick:d(`download_1`)}),children:`Télécharger`})})]}),(0,u.jsxs)(o.DRow,{children:[(0,u.jsx)(o.Dt,{children:`Prospectus`}),(0,u.jsx)(o.Dd,{children:(0,u.jsx)(r,{variant:`ghost`,iconRight:(0,u.jsx)(a,{src:s}),onClick:d(`download_1`),children:`Télécharger`})})]}),(0,u.jsxs)(o.DRow,{children:[(0,u.jsx)(o.Dt,{children:`Rapport annuelle`}),(0,u.jsx)(o.Dd,{children:(0,u.jsx)(r,{variant:`ghost`,iconRight:(0,u.jsx)(a,{src:s,onClick:d(`download_3`)}),children:`Télécharger`})})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
          <Button variant="ghost" iconRight={<Icon src={download} onClick={action("download_1")} />}>
            Télécharger
          </Button>
        </TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Prospectus</TableMobileCard.Dt>
        <TableMobileCard.Dd>
          <Button variant="ghost" iconRight={<Icon src={download} />} onClick={action("download_1")}>
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
}`,...p.parameters?.docs?.source}}},m=[`BasicTableMobileCard`]}));h();export{p as BasicTableMobileCard,m as __namedExportsOrder,f as default,h as n,l as t};