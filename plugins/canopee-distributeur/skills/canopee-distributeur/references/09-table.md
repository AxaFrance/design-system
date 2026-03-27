# Table

## Présentation
Le composant Table fournit une structure de tableau HTML sémantique avec un style cohérent. Il inclut des sous-composants pour les sections du tableau (en-tête, corps) et les types de cellules (en-tête, données).

## Import
```tsx
import { Table } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### Table
Élément de tableau principal.

### Table.THead
Section d'en-tête du tableau.

### Table.TBody
Section du corps du tableau.

### Table.Tr
Élément de ligne du tableau.

### Table.Th
Cellule d'en-tête du tableau avec sémantique.

### Table.Td
Cellule de données du tableau.

## Props

### Table

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | - | Classes de modificateur CSS |

Tous les attributs HTML standard de `<table>` sont supportés.

### Table.Tr, Table.Th, Table.Td

Props standard des cellules HTML (`colspan`, `rowspan`, `scope`, etc.)

## Utilisation de base

### Tableau simple
```tsx
import { Table } from "@axa-fr/canopee-react/distributeur";

<Table>
  <Table.THead>
    <Table.Tr>
      <Table.Th>Prénom</Table.Th>
      <Table.Th>Nom</Table.Th>
      <Table.Th>E-mail</Table.Th>
    </Table.Tr>
  </Table.THead>
  <Table.TBody>
    <Table.Tr>
      <Table.Td>Jean</Table.Td>
      <Table.Td>Dupont</Table.Td>
      <Table.Td>jean@exemple.fr</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>Marie</Table.Td>
      <Table.Td>Martin</Table.Td>
      <Table.Td>marie@exemple.fr</Table.Td>
    </Table.Tr>
  </Table.TBody>
</Table>
```

## Exemple complet de tableau de données

```tsx
const TableauUtilisateurs = () => {
  const utilisateurs = [
    { id: 1, nom: "Alice Martin", role: "Administrateur", statut: "Actif" },
    { id: 2, nom: "Bob Dupont", role: "Utilisateur", statut: "Actif" },
    { id: 3, nom: "Claire David", role: "Éditeur", statut: "Inactif" }
  ];
  
  return (
    <Table>
      <Table.THead>
        <Table.Tr>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Rôle</Table.Th>
          <Table.Th>Statut</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody>
        {utilisateurs.map(user => (
          <Table.Tr key={user.id}>
            <Table.Td>{user.nom}</Table.Td>
            <Table.Td>{user.role}</Table.Td>
            <Table.Td>{user.statut}</Table.Td>
            <Table.Td>
              <button>Modifier</button>
              <button>Supprimer</button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.TBody>
    </Table>
  );
};
```

## Colspan et Rowspan

### Fusion de colonnes
```tsx
<Table>
  <Table.THead>
    <Table.Tr>
      <Table.Th colSpan={3}>Informations de contact</Table.Th>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>Prénom</Table.Th>
      <Table.Th>Nom</Table.Th>
      <Table.Th>E-mail</Table.Th>
    </Table.Tr>
  </Table.THead>
  <Table.TBody>
    <Table.Tr>
      <Table.Td>Jean</Table.Td>
      <Table.Td>Dupont</Table.Td>
      <Table.Td>jean@exemple.fr</Table.Td>
    </Table.Tr>
  </Table.TBody>
</Table>
```

### Fusion de lignes
```tsx
<Table>
  <Table.THead>
    <Table.Tr>
      <Table.Th rowSpan={2}>Catégorie</Table.Th>
      <Table.Th colSpan={2}>Détails</Table.Th>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>Nom</Table.Th>
      <Table.Th>Valeur</Table.Th>
    </Table.Tr>
  </Table.THead>
  <Table.TBody>
    <Table.Tr>
      <Table.Td rowSpan={2}>Principal</Table.Td>
      <Table.Td>Élément 1</Table.Td>
      <Table.Td>100</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>Élément 2</Table.Td>
      <Table.Td>200</Table.Td>
    </Table.Tr>
  </Table.TBody>
</Table>
```

## Contenu formaté

### Avec texte en gras
```tsx
<Table.Tr>
  <Table.Td><strong>Valeur importante</strong></Table.Td>
  <Table.Td>Valeur normale</Table.Td>
</Table.Tr>
```

### Avec des liens
```tsx
import { Link } from "@axa-fr/canopee-react/distributeur";

<Table.Tr>
  <Table.Td>
    <Link href="/profil/123">Jean Dupont</Link>
  </Table.Td>
</Table.Tr>
```

### Avec des étiquettes/tags
```tsx
import { Tag } from "@axa-fr/canopee-react/distributeur";

<Table.Tr>
  <Table.Td>
    <Tag variant="success">Approuvé</Tag>
  </Table.Td>
</Table.Tr>
```

## Tableau responsive

```tsx
const TableauResponsive = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <Table>
        {/* Structure standard du tableau */}
      </Table>
    </div>
  );
};
```

## Tableau de données financières

```tsx
const RapportFinancier = () => {
  const donnees = [
    { categorie: "Chiffre d'affaires", t1: "50 000 €", t2: "55 000 €", t3: "60 000 €" },
    { categorie: "Dépenses", t1: "30 000 €", t2: "32 000 €", t3: "35 000 €" },
    { categorie: "Bénéfice", t1: "20 000 €", t2: "23 000 €", t3: "25 000 €" }
  ];
  
  return (
    <Table>
      <Table.THead>
        <Table.Tr>
          <Table.Th scope="col">Catégorie</Table.Th>
          <Table.Th scope="col" style={{ textAlign: "right" }}>T1</Table.Th>
          <Table.Th scope="col" style={{ textAlign: "right" }}>T2</Table.Th>
          <Table.Th scope="col" style={{ textAlign: "right" }}>T3</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody>
        {donnees.map(ligne => (
          <Table.Tr key={ligne.categorie}>
            <Table.Th scope="row">{ligne.categorie}</Table.Th>
            <Table.Td style={{ textAlign: "right" }}>{ligne.t1}</Table.Td>
            <Table.Td style={{ textAlign: "right" }}>{ligne.t2}</Table.Td>
            <Table.Td style={{ textAlign: "right" }}>{ligne.t3}</Table.Td>
          </Table.Tr>
        ))}
      </Table.TBody>
    </Table>
  );
};
```

## Intégration de la pagination

```tsx
import { Paging } from "@axa-fr/canopee-react/distributeur";

const TableauPaginé = () => {
  const [page, setPage] = useState(1);
  const elementsParPage = 10;
  
  const elementsAffiches = elements.slice(
    (page - 1) * elementsParPage,
    page * elementsParPage
  );
  
  return (
    <>
      <Table>
        {/* Tableau avec elementsAffiches */}
      </Table>
      <Paging
        currentPage={page}
        numberPages={Math.ceil(elements.length / elementsParPage)}
        onChange={(nouvellePage) => setPage(nouvellePage)}
      />
    </>
  );
};
```

## Accessibilité
- Utiliser `<th scope="col">` pour les en-têtes de colonnes
- Utiliser `<th scope="row">` pour les en-têtes de lignes
- Fournir une légende ou un contexte descriptif au tableau
- Contraste de couleur suffisant dans le contenu des cellules
- En-têtes de colonnes explicites

## Bonnes pratiques
- Toujours inclure l'en-tête du tableau (`<THead>`)
- Utiliser des cellules d'en-tête sémantiques (`<Th>`) pour les titres de colonnes
- Garder les tableaux lisibles (pas trop de colonnes)
- Prévoir un design responsive pour mobile
- Proposer tri/filtrage pour les grands volumes de données
- Utiliser la pagination pour les très grands tableaux (50+ lignes)
- Formater les nombres correctement (alignés à droite pour devise/nombres)
- Utiliser des couleurs en alternance pour les grands tableaux via CSS

## Classes CSS
- `.af-table` - Classe de base du tableau
- `.af-table--striped` - Couleurs de lignes alternées
