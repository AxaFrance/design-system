import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{V as r,t as i}from"./client-D92F0iso.js";import{Gn as a,g as o}from"./LoaderCommon-C19GLX9C.js";var s=t({AlternateVariantTable:()=>f,BasicTable:()=>d,CompactTable:()=>_,TableWithAlignments:()=>g,TableWithButtons:()=>m,TableWithDifferentSizes:()=>h,TableWithTags:()=>p,__namedExportsOrder:()=>v,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v,y=e((()=>{i(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Components/Table`,component:o},d={name:`Tableau basique`,args:{theadVariant:void 0,tbodyVariant:`alternate`},argTypes:{theadVariant:{control:{type:`select`},options:[`gray`,`blue`],description:`Variant de l'en-tête du tableau`},tbodyVariant:{control:{type:`select`},options:[`white`,`blue`,`alternate`],description:`Variant du corps du tableau`}},render:e=>(0,c.jsxs)(o,{children:[(0,c.jsx)(o.THead,{variant:e.theadVariant,children:(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Th,{children:`Nom`}),(0,c.jsx)(o.Th,{children:`Prénom`}),(0,c.jsx)(o.Th,{children:`Email`}),(0,c.jsx)(o.Th,{children:`Téléphone`})]})}),(0,c.jsxs)(o.TBody,{variant:e.tbodyVariant,children:[(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Dupont`}),(0,c.jsx)(o.Td,{children:`Jean`}),(0,c.jsx)(o.Td,{children:`jean.dupont@example.com`}),(0,c.jsx)(o.Td,{children:`06 12 34 56 78`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Martin`}),(0,c.jsx)(o.Td,{children:`Marie`}),(0,c.jsx)(o.Td,{children:`marie.martin@example.com`}),(0,c.jsx)(o.Td,{children:`06 98 76 54 32`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Bernard`}),(0,c.jsx)(o.Td,{children:`Pierre`}),(0,c.jsx)(o.Td,{children:`pierre.bernard@example.com`}),(0,c.jsx)(o.Td,{children:`06 11 22 33 44`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Dubois`}),(0,c.jsx)(o.Td,{children:`Sophie`}),(0,c.jsx)(o.Td,{children:`sophie.dubois@example.com`}),(0,c.jsx)(o.Td,{children:`06 55 66 77 88`})]})]})]})},f={name:`Tableau avec couleurs alternées`,args:{theadVariant:`gray`,tbodyVariant:`alternate`},argTypes:{theadVariant:{control:{type:`select`},options:[`gray`,`blue`],description:`Variant de l'en-tête du tableau`},tbodyVariant:{control:{type:`select`},options:[`white`,`blue`,`alternate`],description:`Variant du corps du tableau`}},render:e=>(0,c.jsxs)(o,{children:[(0,c.jsx)(o.THead,{variant:e.theadVariant,children:(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Th,{children:`Produit`}),(0,c.jsx)(o.Th,{children:`Catégorie`}),(0,c.jsx)(o.Th,{position:`right`,children:`Prix`}),(0,c.jsx)(o.Th,{children:`Stock`})]})}),(0,c.jsxs)(o.TBody,{variant:e.tbodyVariant,children:[(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Ordinateur Portable`}),(0,c.jsx)(o.Td,{children:`Électronique`}),(0,c.jsx)(o.Td,{position:`right`,children:`899,00 €`}),(0,c.jsx)(o.Td,{children:`15`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Souris sans fil`}),(0,c.jsx)(o.Td,{children:`Accessoires`}),(0,c.jsx)(o.Td,{position:`right`,children:`29,99 €`}),(0,c.jsx)(o.Td,{children:`50`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Clavier mécanique`}),(0,c.jsx)(o.Td,{children:`Accessoires`}),(0,c.jsx)(o.Td,{position:`right`,children:`89,00 €`}),(0,c.jsx)(o.Td,{children:`23`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Écran 27`}),(0,c.jsx)(o.Td,{children:`Électronique`}),(0,c.jsx)(o.Td,{position:`right`,children:`299,00 €`}),(0,c.jsx)(o.Td,{children:`8`})]})]})]})},p={name:`Tableau avec tags, statuts et tri`,args:{theadVariant:`gray`,tbodyVariant:`alternate`},argTypes:{theadVariant:{control:{type:`select`},options:[`gray`,`blue`],description:`Variant de l'en-tête du tableau`},tbodyVariant:{control:{type:`select`},options:[`white`,`blue`,`alternate`],description:`Variant du corps du tableau`}},render:e=>(0,c.jsxs)(o,{children:[(0,c.jsx)(o.THead,{variant:e.theadVariant,children:(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Th,{onSort:l(`sort-reference`),children:`Référence`}),(0,c.jsx)(o.Th,{onSort:l(`sort-statut`),children:`Statut`}),(0,c.jsx)(o.Th,{onSort:l(`sort-client`),children:`Client`}),(0,c.jsx)(o.Th,{onSort:l(`sort-montant`),position:`right`,children:`Montant`})]})}),(0,c.jsxs)(o.TBody,{variant:e.tbodyVariant,children:[(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`REF-001`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(a,{variant:`success`,children:`Validé`})}),(0,c.jsx)(o.Td,{children:`Jean Dupont`}),(0,c.jsx)(o.Td,{position:`right`,children:`220,00 €`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`REF-002`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(a,{variant:`warning`,children:`En attente`})}),(0,c.jsx)(o.Td,{children:`Marie Martin`}),(0,c.jsx)(o.Td,{position:`right`,children:`450,00 €`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`REF-003`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(a,{variant:`error`,children:`Rejeté`})}),(0,c.jsx)(o.Td,{children:`Pierre Bernard`}),(0,c.jsx)(o.Td,{position:`right`,children:`180,00 €`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`REF-004`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(a,{variant:`info`,children:`En cours`})}),(0,c.jsx)(o.Td,{children:`Sophie Dubois`}),(0,c.jsx)(o.Td,{position:`right`,children:`320,00 €`})]})]})]})},m={name:`Tableau avec sélection et actions`,args:{theadVariant:`gray`,tbodyVariant:void 0,rowSize:`M`},argTypes:{theadVariant:{control:{type:`select`},options:[`gray`,`blue`],description:`Variant de l'en-tête du tableau`},tbodyVariant:{control:{type:`select`},options:[`white`,`blue`,`alternate`],description:`Variant du corps du tableau`},rowSize:{control:{type:`select`},options:[`S`,`M`,`L`],description:`Taille des lignes`}},render:e=>(0,c.jsxs)(o,{children:[(0,c.jsx)(o.THead,{variant:e.theadVariant,children:(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Th,{onCheck:l(`select-all`),children:`Utilisateur`}),(0,c.jsx)(o.Th,{onSort:l(`sort-email`),children:`Email`}),(0,c.jsx)(o.Th,{onSort:l(`sort-role`),children:`Rôle`}),(0,c.jsx)(o.Th,{children:`Actions`})]})}),(0,c.jsxs)(o.TBody,{variant:e.tbodyVariant,children:[(0,c.jsxs)(o.Tr,{size:e.rowSize,children:[(0,c.jsx)(o.Td,{children:`Jean Dupont`}),(0,c.jsx)(o.Td,{children:`jean.dupont@example.com`}),(0,c.jsx)(o.Td,{children:`Administrateur`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(r,{variant:`tertiary`,children:`Modifier`})})]}),(0,c.jsxs)(o.Tr,{size:e.rowSize,children:[(0,c.jsx)(o.Td,{children:`Marie Martin`}),(0,c.jsx)(o.Td,{children:`marie.martin@example.com`}),(0,c.jsx)(o.Td,{children:`Éditeur`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(r,{variant:`tertiary`,children:`Modifier`})})]}),(0,c.jsxs)(o.Tr,{size:e.rowSize,children:[(0,c.jsx)(o.Td,{children:`Pierre Bernard`}),(0,c.jsx)(o.Td,{children:`pierre.bernard@example.com`}),(0,c.jsx)(o.Td,{children:`Lecteur`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(r,{variant:`tertiary`,children:`Modifier`})})]}),(0,c.jsxs)(o.Tr,{size:e.rowSize,children:[(0,c.jsx)(o.Td,{children:`Sophie Dubois`}),(0,c.jsx)(o.Td,{children:`sophie.dubois@example.com`}),(0,c.jsx)(o.Td,{children:`Éditeur`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(r,{variant:`tertiary`,children:`Modifier`})})]})]})]})},h={name:`Tableau avec tailles de lignes variées`,args:{theadVariant:`gray`,tbodyVariant:`alternate`,row1Size:`S`,row2Size:`M`,row3Size:`L`,row4Size:void 0},argTypes:{theadVariant:{control:{type:`select`},options:[`gray`,`blue`],description:`Variant de l'en-tête du tableau`},tbodyVariant:{control:{type:`select`},options:[`white`,`blue`,`alternate`],description:`Variant du corps du tableau`},row1Size:{control:{type:`select`},options:[`S`,`M`,`L`],description:`Taille de la ligne 1`},row2Size:{control:{type:`select`},options:[`S`,`M`,`L`],description:`Taille de la ligne 2`},row3Size:{control:{type:`select`},options:[`S`,`M`,`L`],description:`Taille de la ligne 3`},row4Size:{control:{type:`select`},options:[`S`,`M`,`L`],description:`Taille de la ligne 4`}},render:e=>(0,c.jsxs)(o,{children:[(0,c.jsx)(o.THead,{variant:e.theadVariant,children:(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Th,{children:`Nom`}),(0,c.jsx)(o.Th,{children:`Description`}),(0,c.jsx)(o.Th,{position:`right`,children:`Prix`}),(0,c.jsx)(o.Th,{children:`Disponibilité`})]})}),(0,c.jsxs)(o.TBody,{variant:e.tbodyVariant,children:[(0,c.jsxs)(o.Tr,{size:e.row1Size,children:[(0,c.jsx)(o.Td,{children:`Produit A`}),(0,c.jsx)(o.Td,{children:`Description courte`}),(0,c.jsx)(o.Td,{position:`right`,children:`49,99 €`}),(0,c.jsx)(o.Td,{children:`En stock`})]}),(0,c.jsxs)(o.Tr,{size:e.row2Size,children:[(0,c.jsx)(o.Td,{children:`Produit B`}),(0,c.jsx)(o.Td,{children:`Description de longueur moyenne pour ce produit`}),(0,c.jsx)(o.Td,{position:`right`,children:`79,99 €`}),(0,c.jsx)(o.Td,{children:`En stock`})]}),(0,c.jsxs)(o.Tr,{size:e.row3Size,children:[(0,c.jsx)(o.Td,{children:`Produit C`}),(0,c.jsx)(o.Td,{children:`Description très détaillée avec beaucoup informations`}),(0,c.jsx)(o.Td,{position:`right`,children:`129,99 €`}),(0,c.jsx)(o.Td,{children:`Stock limité`})]}),(0,c.jsxs)(o.Tr,{size:e.row4Size,children:[(0,c.jsx)(o.Td,{children:`Produit D`}),(0,c.jsx)(o.Td,{children:`Description standard`}),(0,c.jsx)(o.Td,{position:`right`,children:`99,99 €`}),(0,c.jsx)(o.Td,{children:`Sur commande`})]})]})]})},g={name:`Tableau avec alignements différents`,args:{theadVariant:`gray`,tbodyVariant:void 0},argTypes:{theadVariant:{control:{type:`select`},options:[`gray`,`blue`],description:`Variant de l'en-tête du tableau`},tbodyVariant:{control:{type:`select`},options:[`white`,`blue`,`alternate`],description:`Variant du corps du tableau`}},render:e=>(0,c.jsxs)(o,{children:[(0,c.jsx)(o.THead,{variant:e.theadVariant,children:(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Th,{children:`Article`}),(0,c.jsx)(o.Th,{children:`Quantité`}),(0,c.jsx)(o.Th,{position:`right`,children:`Prix unitaire`}),(0,c.jsx)(o.Th,{position:`right`,children:`Total`})]})}),(0,c.jsxs)(o.TBody,{variant:e.tbodyVariant,children:[(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Ordinateur`}),(0,c.jsx)(o.Td,{children:`1`}),(0,c.jsx)(o.Td,{position:`right`,children:`899,00 €`}),(0,c.jsx)(o.Td,{position:`right`,children:`899,00 €`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Souris`}),(0,c.jsx)(o.Td,{children:`2`}),(0,c.jsx)(o.Td,{position:`right`,children:`29,99 €`}),(0,c.jsx)(o.Td,{position:`right`,children:`59,98 €`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Clavier`}),(0,c.jsx)(o.Td,{children:`1`}),(0,c.jsx)(o.Td,{position:`right`,children:`89,00 €`}),(0,c.jsx)(o.Td,{position:`right`,children:`89,00 €`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Câble HDMI`}),(0,c.jsx)(o.Td,{children:`3`}),(0,c.jsx)(o.Td,{position:`right`,children:`15,99 €`}),(0,c.jsx)(o.Td,{position:`right`,children:`47,97 €`})]})]})]})},_={name:`Tableau compact (3 colonnes)`,args:{theadVariant:`gray`,tbodyVariant:void 0},argTypes:{theadVariant:{control:{type:`select`},options:[`gray`,`blue`],description:`Variant de l'en-tête du tableau`},tbodyVariant:{control:{type:`select`},options:[`white`,`blue`,`alternate`],description:`Variant du corps du tableau`}},render:e=>(0,c.jsxs)(o,{children:[(0,c.jsx)(o.THead,{variant:e.theadVariant,children:(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Th,{children:`Nom`}),(0,c.jsx)(o.Th,{children:`Statut`}),(0,c.jsx)(o.Th,{children:`Date`})]})}),(0,c.jsxs)(o.TBody,{variant:e.tbodyVariant,children:[(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Projet Alpha`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(a,{variant:`success`,children:`Terminé`})}),(0,c.jsx)(o.Td,{children:`10/01/2026`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Projet Beta`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(a,{variant:`info`,children:`En cours`})}),(0,c.jsx)(o.Td,{children:`15/01/2026`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Projet Gamma`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(a,{variant:`warning`,children:`Planifié`})}),(0,c.jsx)(o.Td,{children:`20/01/2026`})]}),(0,c.jsxs)(o.Tr,{children:[(0,c.jsx)(o.Td,{children:`Projet Delta`}),(0,c.jsx)(o.Td,{children:(0,c.jsx)(a,{variant:`error`,children:`Annulé`})}),(0,c.jsx)(o.Td,{children:`05/01/2026`})]})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Tableau basique",
  args: {
    theadVariant: undefined,
    tbodyVariant: "alternate"
  },
  argTypes: {
    theadVariant: {
      control: {
        type: "select"
      },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau"
    },
    tbodyVariant: {
      control: {
        type: "select"
      },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau"
    }
  },
  render: (args: TableStoryArgs) => <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Prénom</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Téléphone</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>Dupont</Table.Td>
          <Table.Td>Jean</Table.Td>
          <Table.Td>jean.dupont@example.com</Table.Td>
          <Table.Td>06 12 34 56 78</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Martin</Table.Td>
          <Table.Td>Marie</Table.Td>
          <Table.Td>marie.martin@example.com</Table.Td>
          <Table.Td>06 98 76 54 32</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Bernard</Table.Td>
          <Table.Td>Pierre</Table.Td>
          <Table.Td>pierre.bernard@example.com</Table.Td>
          <Table.Td>06 11 22 33 44</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Dubois</Table.Td>
          <Table.Td>Sophie</Table.Td>
          <Table.Td>sophie.dubois@example.com</Table.Td>
          <Table.Td>06 55 66 77 88</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Tableau avec couleurs alternées",
  args: {
    theadVariant: "gray",
    tbodyVariant: "alternate"
  },
  argTypes: {
    theadVariant: {
      control: {
        type: "select"
      },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau"
    },
    tbodyVariant: {
      control: {
        type: "select"
      },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau"
    }
  },
  render: (args: TableStoryArgs) => <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Produit</Table.Th>
          <Table.Th>Catégorie</Table.Th>
          <Table.Th position="right">Prix</Table.Th>
          <Table.Th>Stock</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>Ordinateur Portable</Table.Td>
          <Table.Td>Électronique</Table.Td>
          <Table.Td position="right">899,00 €</Table.Td>
          <Table.Td>15</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Souris sans fil</Table.Td>
          <Table.Td>Accessoires</Table.Td>
          <Table.Td position="right">29,99 €</Table.Td>
          <Table.Td>50</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Clavier mécanique</Table.Td>
          <Table.Td>Accessoires</Table.Td>
          <Table.Td position="right">89,00 €</Table.Td>
          <Table.Td>23</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Écran 27</Table.Td>
          <Table.Td>Électronique</Table.Td>
          <Table.Td position="right">299,00 €</Table.Td>
          <Table.Td>8</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Tableau avec tags, statuts et tri",
  args: {
    theadVariant: "gray",
    tbodyVariant: "alternate"
  },
  argTypes: {
    theadVariant: {
      control: {
        type: "select"
      },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau"
    },
    tbodyVariant: {
      control: {
        type: "select"
      },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau"
    }
  },
  render: (args: TableStoryArgs) => <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th onSort={action("sort-reference")}>Référence</Table.Th>
          <Table.Th onSort={action("sort-statut")}>Statut</Table.Th>
          <Table.Th onSort={action("sort-client")}>Client</Table.Th>
          <Table.Th onSort={action("sort-montant")} position="right">
            Montant
          </Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>REF-001</Table.Td>
          <Table.Td>
            <Tag variant="success">Validé</Tag>
          </Table.Td>
          <Table.Td>Jean Dupont</Table.Td>
          <Table.Td position="right">220,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>REF-002</Table.Td>
          <Table.Td>
            <Tag variant="warning">En attente</Tag>
          </Table.Td>
          <Table.Td>Marie Martin</Table.Td>
          <Table.Td position="right">450,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>REF-003</Table.Td>
          <Table.Td>
            <Tag variant="error">Rejeté</Tag>
          </Table.Td>
          <Table.Td>Pierre Bernard</Table.Td>
          <Table.Td position="right">180,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>REF-004</Table.Td>
          <Table.Td>
            <Tag variant="info">En cours</Tag>
          </Table.Td>
          <Table.Td>Sophie Dubois</Table.Td>
          <Table.Td position="right">320,00 €</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Tableau avec sélection et actions",
  args: {
    theadVariant: "gray",
    tbodyVariant: undefined,
    rowSize: "M"
  },
  argTypes: {
    theadVariant: {
      control: {
        type: "select"
      },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau"
    },
    tbodyVariant: {
      control: {
        type: "select"
      },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau"
    },
    rowSize: {
      control: {
        type: "select"
      },
      options: ["S", "M", "L"],
      description: "Taille des lignes"
    }
  },
  render: (args: TableStoryArgs) => <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th onCheck={action("select-all")}>Utilisateur</Table.Th>
          <Table.Th onSort={action("sort-email")}>Email</Table.Th>
          <Table.Th onSort={action("sort-role")}>Rôle</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr size={args.rowSize}>
          <Table.Td>Jean Dupont</Table.Td>
          <Table.Td>jean.dupont@example.com</Table.Td>
          <Table.Td>Administrateur</Table.Td>
          <Table.Td>
            <Button variant="tertiary">Modifier</Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr size={args.rowSize}>
          <Table.Td>Marie Martin</Table.Td>
          <Table.Td>marie.martin@example.com</Table.Td>
          <Table.Td>Éditeur</Table.Td>
          <Table.Td>
            <Button variant="tertiary">Modifier</Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr size={args.rowSize}>
          <Table.Td>Pierre Bernard</Table.Td>
          <Table.Td>pierre.bernard@example.com</Table.Td>
          <Table.Td>Lecteur</Table.Td>
          <Table.Td>
            <Button variant="tertiary">Modifier</Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr size={args.rowSize}>
          <Table.Td>Sophie Dubois</Table.Td>
          <Table.Td>sophie.dubois@example.com</Table.Td>
          <Table.Td>Éditeur</Table.Td>
          <Table.Td>
            <Button variant="tertiary">Modifier</Button>
          </Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Tableau avec tailles de lignes variées",
  args: {
    theadVariant: "gray",
    tbodyVariant: "alternate",
    row1Size: "S",
    row2Size: "M",
    row3Size: "L",
    row4Size: undefined
  },
  argTypes: {
    theadVariant: {
      control: {
        type: "select"
      },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau"
    },
    tbodyVariant: {
      control: {
        type: "select"
      },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau"
    },
    row1Size: {
      control: {
        type: "select"
      },
      options: ["S", "M", "L"],
      description: "Taille de la ligne 1"
    },
    row2Size: {
      control: {
        type: "select"
      },
      options: ["S", "M", "L"],
      description: "Taille de la ligne 2"
    },
    row3Size: {
      control: {
        type: "select"
      },
      options: ["S", "M", "L"],
      description: "Taille de la ligne 3"
    },
    row4Size: {
      control: {
        type: "select"
      },
      options: ["S", "M", "L"],
      description: "Taille de la ligne 4"
    }
  },
  render: (args: TableStoryArgs) => <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th position="right">Prix</Table.Th>
          <Table.Th>Disponibilité</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr size={args.row1Size}>
          <Table.Td>Produit A</Table.Td>
          <Table.Td>Description courte</Table.Td>
          <Table.Td position="right">49,99 €</Table.Td>
          <Table.Td>En stock</Table.Td>
        </Table.Tr>
        <Table.Tr size={args.row2Size}>
          <Table.Td>Produit B</Table.Td>
          <Table.Td>Description de longueur moyenne pour ce produit</Table.Td>
          <Table.Td position="right">79,99 €</Table.Td>
          <Table.Td>En stock</Table.Td>
        </Table.Tr>
        <Table.Tr size={args.row3Size}>
          <Table.Td>Produit C</Table.Td>
          <Table.Td>
            Description très détaillée avec beaucoup informations
          </Table.Td>
          <Table.Td position="right">129,99 €</Table.Td>
          <Table.Td>Stock limité</Table.Td>
        </Table.Tr>
        <Table.Tr size={args.row4Size}>
          <Table.Td>Produit D</Table.Td>
          <Table.Td>Description standard</Table.Td>
          <Table.Td position="right">99,99 €</Table.Td>
          <Table.Td>Sur commande</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Tableau avec alignements différents",
  args: {
    theadVariant: "gray",
    tbodyVariant: undefined
  },
  argTypes: {
    theadVariant: {
      control: {
        type: "select"
      },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau"
    },
    tbodyVariant: {
      control: {
        type: "select"
      },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau"
    }
  },
  render: (args: TableStoryArgs) => <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Article</Table.Th>
          <Table.Th>Quantité</Table.Th>
          <Table.Th position="right">Prix unitaire</Table.Th>
          <Table.Th position="right">Total</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>Ordinateur</Table.Td>
          <Table.Td>1</Table.Td>
          <Table.Td position="right">899,00 €</Table.Td>
          <Table.Td position="right">899,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Souris</Table.Td>
          <Table.Td>2</Table.Td>
          <Table.Td position="right">29,99 €</Table.Td>
          <Table.Td position="right">59,98 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Clavier</Table.Td>
          <Table.Td>1</Table.Td>
          <Table.Td position="right">89,00 €</Table.Td>
          <Table.Td position="right">89,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Câble HDMI</Table.Td>
          <Table.Td>3</Table.Td>
          <Table.Td position="right">15,99 €</Table.Td>
          <Table.Td position="right">47,97 €</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Tableau compact (3 colonnes)",
  args: {
    theadVariant: "gray",
    tbodyVariant: undefined
  },
  argTypes: {
    theadVariant: {
      control: {
        type: "select"
      },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau"
    },
    tbodyVariant: {
      control: {
        type: "select"
      },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau"
    }
  },
  render: (args: TableStoryArgs) => <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Statut</Table.Th>
          <Table.Th>Date</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>Projet Alpha</Table.Td>
          <Table.Td>
            <Tag variant="success">Terminé</Tag>
          </Table.Td>
          <Table.Td>10/01/2026</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Projet Beta</Table.Td>
          <Table.Td>
            <Tag variant="info">En cours</Tag>
          </Table.Td>
          <Table.Td>15/01/2026</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Projet Gamma</Table.Td>
          <Table.Td>
            <Tag variant="warning">Planifié</Tag>
          </Table.Td>
          <Table.Td>20/01/2026</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Projet Delta</Table.Td>
          <Table.Td>
            <Tag variant="error">Annulé</Tag>
          </Table.Td>
          <Table.Td>05/01/2026</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
}`,..._.parameters?.docs?.source}}},v=[`BasicTable`,`AlternateVariantTable`,`TableWithTags`,`TableWithButtons`,`TableWithDifferentSizes`,`TableWithAlignments`,`CompactTable`]}));y();export{f as AlternateVariantTable,d as BasicTable,_ as CompactTable,g as TableWithAlignments,m as TableWithButtons,h as TableWithDifferentSizes,p as TableWithTags,v as __namedExportsOrder,u as default,y as n,s as t};