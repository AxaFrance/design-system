import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as T}from"./index-B-lxVbXh.js";import{T as a,s as i,h as c}from"./LoaderApollo-BOCy7keK.js";/* empty css               */import"./index-CtOEgLBf.js";const C={title:"Components/Table",component:a},t={name:"Tableau basique",args:{theadVariant:"blue",tbodyVariant:void 0},argTypes:{theadVariant:{control:{type:"select"},options:["gray","blue"],description:"Variant de l'en-tête du tableau"},tbodyVariant:{control:{type:"select"},options:["white","blue","alternate"],description:"Variant du corps du tableau"}},render:r=>e.jsxs(a,{children:[e.jsx(a.THead,{variant:r.theadVariant,children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{children:"Nom"}),e.jsx(a.Th,{children:"Prénom"}),e.jsx(a.Th,{children:"Email"}),e.jsx(a.Th,{children:"Téléphone"})]})}),e.jsxs(a.TBody,{variant:r.tbodyVariant,children:[e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Dupont"}),e.jsx(a.Td,{children:"Jean"}),e.jsx(a.Td,{children:"jean.dupont@example.com"}),e.jsx(a.Td,{children:"06 12 34 56 78"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Martin"}),e.jsx(a.Td,{children:"Marie"}),e.jsx(a.Td,{children:"marie.martin@example.com"}),e.jsx(a.Td,{children:"06 98 76 54 32"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Bernard"}),e.jsx(a.Td,{children:"Pierre"}),e.jsx(a.Td,{children:"pierre.bernard@example.com"}),e.jsx(a.Td,{children:"06 11 22 33 44"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Dubois"}),e.jsx(a.Td,{children:"Sophie"}),e.jsx(a.Td,{children:"sophie.dubois@example.com"}),e.jsx(a.Td,{children:"06 55 66 77 88"})]})]})]})},l={name:"Tableau avec couleurs alternées",args:{theadVariant:void 0,tbodyVariant:"alternate"},argTypes:{theadVariant:{control:{type:"select"},options:["gray","blue"],description:"Variant de l'en-tête du tableau"},tbodyVariant:{control:{type:"select"},options:["white","blue","alternate"],description:"Variant du corps du tableau"}},render:r=>e.jsxs(a,{children:[e.jsx(a.THead,{variant:r.theadVariant,children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{children:"Produit"}),e.jsx(a.Th,{children:"Catégorie"}),e.jsx(a.Th,{position:"right",children:"Prix"}),e.jsx(a.Th,{children:"Stock"})]})}),e.jsxs(a.TBody,{variant:r.tbodyVariant,children:[e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Ordinateur Portable"}),e.jsx(a.Td,{children:"Électronique"}),e.jsx(a.Td,{position:"right",children:"899,00 €"}),e.jsx(a.Td,{children:"15"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Souris sans fil"}),e.jsx(a.Td,{children:"Accessoires"}),e.jsx(a.Td,{position:"right",children:"29,99 €"}),e.jsx(a.Td,{children:"50"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Clavier mécanique"}),e.jsx(a.Td,{children:"Accessoires"}),e.jsx(a.Td,{position:"right",children:"89,00 €"}),e.jsx(a.Td,{children:"23"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Écran 27"}),e.jsx(a.Td,{children:"Électronique"}),e.jsx(a.Td,{position:"right",children:"299,00 €"}),e.jsx(a.Td,{children:"8"})]})]})]})},d={name:"Tableau avec tags, statuts et tri",args:{theadVariant:void 0,tbodyVariant:"alternate"},argTypes:{theadVariant:{control:{type:"select"},options:["gray","blue"],description:"Variant de l'en-tête du tableau"},tbodyVariant:{control:{type:"select"},options:["white","blue","alternate"],description:"Variant du corps du tableau"}},render:r=>e.jsxs(a,{children:[e.jsx(a.THead,{variant:r.theadVariant,children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{onSort:T("sort-reference"),children:"Référence"}),e.jsx(a.Th,{onSort:T("sort-statut"),children:"Statut"}),e.jsx(a.Th,{onSort:T("sort-client"),children:"Client"}),e.jsx(a.Th,{onSort:T("sort-montant"),position:"right",children:"Montant"})]})}),e.jsxs(a.TBody,{variant:r.tbodyVariant,children:[e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"REF-001"}),e.jsx(a.Td,{children:e.jsx(i,{variant:"success",children:"Validé"})}),e.jsx(a.Td,{children:"Jean Dupont"}),e.jsx(a.Td,{position:"right",children:"220,00 €"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"REF-002"}),e.jsx(a.Td,{children:e.jsx(i,{variant:"warning",children:"En attente"})}),e.jsx(a.Td,{children:"Marie Martin"}),e.jsx(a.Td,{position:"right",children:"450,00 €"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"REF-003"}),e.jsx(a.Td,{children:e.jsx(i,{variant:"error",children:"Rejeté"})}),e.jsx(a.Td,{children:"Pierre Bernard"}),e.jsx(a.Td,{position:"right",children:"180,00 €"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"REF-004"}),e.jsx(a.Td,{children:e.jsx(i,{variant:"info",children:"En cours"})}),e.jsx(a.Td,{children:"Sophie Dubois"}),e.jsx(a.Td,{position:"right",children:"320,00 €"})]})]})]})},n={name:"Tableau avec sélection et actions",args:{theadVariant:"gray",tbodyVariant:void 0,rowSize:"M"},argTypes:{theadVariant:{control:{type:"select"},options:["gray","blue"],description:"Variant de l'en-tête du tableau"},tbodyVariant:{control:{type:"select"},options:["white","blue","alternate"],description:"Variant du corps du tableau"},rowSize:{control:{type:"select"},options:["S","M","L"],description:"Taille des lignes"}},render:r=>e.jsxs(a,{children:[e.jsx(a.THead,{variant:r.theadVariant,children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{onCheck:T("select-all"),children:"Utilisateur"}),e.jsx(a.Th,{onSort:T("sort-email"),children:"Email"}),e.jsx(a.Th,{onSort:T("sort-role"),children:"Rôle"}),e.jsx(a.Th,{children:"Actions"})]})}),e.jsxs(a.TBody,{variant:r.tbodyVariant,children:[e.jsxs(a.Tr,{size:r.rowSize,children:[e.jsx(a.Td,{children:"Jean Dupont"}),e.jsx(a.Td,{children:"jean.dupont@example.com"}),e.jsx(a.Td,{children:"Administrateur"}),e.jsx(a.Td,{children:e.jsx(c,{variant:"tertiary",children:"Modifier"})})]}),e.jsxs(a.Tr,{size:r.rowSize,children:[e.jsx(a.Td,{children:"Marie Martin"}),e.jsx(a.Td,{children:"marie.martin@example.com"}),e.jsx(a.Td,{children:"Éditeur"}),e.jsx(a.Td,{children:e.jsx(c,{variant:"tertiary",children:"Modifier"})})]}),e.jsxs(a.Tr,{size:r.rowSize,children:[e.jsx(a.Td,{children:"Pierre Bernard"}),e.jsx(a.Td,{children:"pierre.bernard@example.com"}),e.jsx(a.Td,{children:"Lecteur"}),e.jsx(a.Td,{children:e.jsx(c,{variant:"tertiary",children:"Modifier"})})]}),e.jsxs(a.Tr,{size:r.rowSize,children:[e.jsx(a.Td,{children:"Sophie Dubois"}),e.jsx(a.Td,{children:"sophie.dubois@example.com"}),e.jsx(a.Td,{children:"Éditeur"}),e.jsx(a.Td,{children:e.jsx(c,{variant:"tertiary",children:"Modifier"})})]})]})]})},o={name:"Tableau avec tailles de lignes variées",args:{theadVariant:void 0,tbodyVariant:"alternate",row1Size:"S",row2Size:"M",row3Size:"L",row4Size:void 0},argTypes:{theadVariant:{control:{type:"select"},options:["gray","blue"],description:"Variant de l'en-tête du tableau"},tbodyVariant:{control:{type:"select"},options:["white","blue","alternate"],description:"Variant du corps du tableau"},row1Size:{control:{type:"select"},options:["S","M","L"],description:"Taille de la ligne 1"},row2Size:{control:{type:"select"},options:["S","M","L"],description:"Taille de la ligne 2"},row3Size:{control:{type:"select"},options:["S","M","L"],description:"Taille de la ligne 3"},row4Size:{control:{type:"select"},options:["S","M","L"],description:"Taille de la ligne 4"}},render:r=>e.jsxs(a,{children:[e.jsx(a.THead,{variant:r.theadVariant,children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{children:"Nom"}),e.jsx(a.Th,{children:"Description"}),e.jsx(a.Th,{position:"right",children:"Prix"}),e.jsx(a.Th,{children:"Disponibilité"})]})}),e.jsxs(a.TBody,{variant:r.tbodyVariant,children:[e.jsxs(a.Tr,{size:r.row1Size,children:[e.jsx(a.Td,{children:"Produit A"}),e.jsx(a.Td,{children:"Description courte"}),e.jsx(a.Td,{position:"right",children:"49,99 €"}),e.jsx(a.Td,{children:"En stock"})]}),e.jsxs(a.Tr,{size:r.row2Size,children:[e.jsx(a.Td,{children:"Produit B"}),e.jsx(a.Td,{children:"Description de longueur moyenne pour ce produit"}),e.jsx(a.Td,{position:"right",children:"79,99 €"}),e.jsx(a.Td,{children:"En stock"})]}),e.jsxs(a.Tr,{size:r.row3Size,children:[e.jsx(a.Td,{children:"Produit C"}),e.jsx(a.Td,{children:"Description très détaillée avec beaucoup informations"}),e.jsx(a.Td,{position:"right",children:"129,99 €"}),e.jsx(a.Td,{children:"Stock limité"})]}),e.jsxs(a.Tr,{size:r.row4Size,children:[e.jsx(a.Td,{children:"Produit D"}),e.jsx(a.Td,{children:"Description standard"}),e.jsx(a.Td,{position:"right",children:"99,99 €"}),e.jsx(a.Td,{children:"Sur commande"})]})]})]})},s={name:"Tableau avec alignements différents",args:{theadVariant:void 0,tbodyVariant:void 0},argTypes:{theadVariant:{control:{type:"select"},options:["gray","blue"],description:"Variant de l'en-tête du tableau"},tbodyVariant:{control:{type:"select"},options:["white","blue","alternate"],description:"Variant du corps du tableau"}},render:r=>e.jsxs(a,{children:[e.jsx(a.THead,{variant:r.theadVariant,children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{children:"Article"}),e.jsx(a.Th,{children:"Quantité"}),e.jsx(a.Th,{position:"right",children:"Prix unitaire"}),e.jsx(a.Th,{position:"right",children:"Total"})]})}),e.jsxs(a.TBody,{variant:r.tbodyVariant,children:[e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Ordinateur"}),e.jsx(a.Td,{position:"center",children:"1"}),e.jsx(a.Td,{position:"right",children:"899,00 €"}),e.jsx(a.Td,{position:"right",children:"899,00 €"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Souris"}),e.jsx(a.Td,{position:"center",children:"2"}),e.jsx(a.Td,{position:"right",children:"29,99 €"}),e.jsx(a.Td,{position:"right",children:"59,98 €"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Clavier"}),e.jsx(a.Td,{position:"center",children:"1"}),e.jsx(a.Td,{position:"right",children:"89,00 €"}),e.jsx(a.Td,{position:"right",children:"89,00 €"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Câble HDMI"}),e.jsx(a.Td,{position:"center",children:"3"}),e.jsx(a.Td,{position:"right",children:"15,99 €"}),e.jsx(a.Td,{position:"right",children:"47,97 €"})]})]})]})},b={name:"Tableau compact (3 colonnes)",args:{theadVariant:void 0,tbodyVariant:void 0},argTypes:{theadVariant:{control:{type:"select"},options:["gray","blue"],description:"Variant de l'en-tête du tableau"},tbodyVariant:{control:{type:"select"},options:["white","blue","alternate"],description:"Variant du corps du tableau"}},render:r=>e.jsxs(a,{children:[e.jsx(a.THead,{variant:r.theadVariant,children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{children:"Nom"}),e.jsx(a.Th,{children:"Statut"}),e.jsx(a.Th,{children:"Date"})]})}),e.jsxs(a.TBody,{variant:r.tbodyVariant,children:[e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Projet Alpha"}),e.jsx(a.Td,{children:e.jsx(i,{variant:"success",children:"Terminé"})}),e.jsx(a.Td,{children:"10/01/2026"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Projet Beta"}),e.jsx(a.Td,{children:e.jsx(i,{variant:"info",children:"En cours"})}),e.jsx(a.Td,{children:"15/01/2026"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Projet Gamma"}),e.jsx(a.Td,{children:e.jsx(i,{variant:"warning",children:"Planifié"})}),e.jsx(a.Td,{children:"20/01/2026"})]}),e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:"Projet Delta"}),e.jsx(a.Td,{children:e.jsx(i,{variant:"error",children:"Annulé"})}),e.jsx(a.Td,{children:"05/01/2026"})]})]})]})};var h,p,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Tableau basique",
  args: {
    theadVariant: "blue",
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,j,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Tableau avec couleurs alternées",
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
          <Table.Th>Produit</Table.Th>
          <Table.Th>Catégorie</Table.Th>
          <Table.Th position='right'>Prix</Table.Th>
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
}`,...(g=(j=l.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var y,m,V;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Tableau avec tags, statuts et tri",
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
          <Table.Th onSort={action("sort-reference")}>Référence</Table.Th>
          <Table.Th onSort={action("sort-statut")}>Statut</Table.Th>
          <Table.Th onSort={action("sort-client")}>Client</Table.Th>
          <Table.Th onSort={action("sort-montant")} position='right'>Montant</Table.Th>
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
}`,...(V=(m=d.parameters)==null?void 0:m.docs)==null?void 0:V.source}}};var S,v,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var w,f,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Tableau avec tailles de lignes variées",
  args: {
    theadVariant: undefined,
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
          <Table.Th position='right'>Prix</Table.Th>
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
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var M,P,D;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Tableau avec alignements différents",
  args: {
    theadVariant: undefined,
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
          <Table.Th position='right'>Prix unitaire</Table.Th>
          <Table.Th position='right'>Total</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>Ordinateur</Table.Td>
          <Table.Td position="center">1</Table.Td>
          <Table.Td position="right">899,00 €</Table.Td>
          <Table.Td position="right">899,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Souris</Table.Td>
          <Table.Td position="center">2</Table.Td>
          <Table.Td position="right">29,99 €</Table.Td>
          <Table.Td position="right">59,98 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Clavier</Table.Td>
          <Table.Td position="center">1</Table.Td>
          <Table.Td position="right">89,00 €</Table.Td>
          <Table.Td position="right">89,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Câble HDMI</Table.Td>
          <Table.Td position="center">3</Table.Td>
          <Table.Td position="right">15,99 €</Table.Td>
          <Table.Td position="right">47,97 €</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
}`,...(D=(P=s.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var A,E,H;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Tableau compact (3 colonnes)",
  args: {
    theadVariant: undefined,
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
}`,...(H=(E=b.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const R=["BasicTable","AlternateVariantTable","TableWithTags","TableWithButtons","TableWithDifferentSizes","TableWithAlignments","CompactTable"],O=Object.freeze(Object.defineProperty({__proto__:null,AlternateVariantTable:l,BasicTable:t,CompactTable:b,TableWithAlignments:s,TableWithButtons:n,TableWithDifferentSizes:o,TableWithTags:d,__namedExportsOrder:R,default:C},Symbol.toStringTag,{value:"Module"}));export{l as A,t as B,b as C,O as T,d as a,n as b,o as c,s as d};
