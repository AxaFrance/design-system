# Loader

Indicateur de chargement avec overlay sur un contenu existant. Quand `mode` est différent de `"none"`, un spinner est superposé au contenu.

## Import

```tsx
import { Loader } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `mode` | `"none" \| "get" \| "post" \| "delete" \| "update" \| "error"` | **Obligatoire** | Mode du loader (détermine le texte et l'état) |
| `children` | `ReactNode` | **Obligatoire** | Contenu sur lequel le loader est superposé |
| `text` | `string` | - | Texte personnalisé (remplace le texte par défaut du mode) |
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | - | Modificateur CSS BEM |

## Textes par défaut selon le mode

| Mode | Texte affiché |
|------|--------------|
| `"none"` | *(aucun loader affiché)* |
| `"get"` | "Chargement en cours" |
| `"post"` | "Sauvegarde en cours" |
| `"delete"` | "Suppression en cours" |
| `"update"` | "Mise à jour en cours" |
| `"error"` | "Une erreur est survenue lors du chargement du composant" |

## Utilisation

```tsx
import { Loader } from "@axa-fr/canopee-react/distributeur";

// Contenu sans chargement
<Loader mode="none">
  <div>Contenu visible normalement</div>
</Loader>

// Chargement en cours
<Loader mode="get">
  <div>Contenu masqué pendant le chargement</div>
</Loader>

// Sauvegarde
<Loader mode="post">
  <form>...</form>
</Loader>

// Mode erreur
<Loader mode="error">
  <div>Contenu de la zone</div>
</Loader>

// Texte personnalisé
<Loader mode="get" text="Récupération de vos contrats...">
  <div>Liste des contrats</div>
</Loader>
```

## Utilisation dynamique

```tsx
const [loadingMode, setLoadingMode] = useState<"none" | "get" | "post" | "error">("none");

const handleSave = async () => {
  setLoadingMode("post");
  try {
    await saveData();
    setLoadingMode("none");
  } catch {
    setLoadingMode("error");
  }
};

<Loader mode={loadingMode}>
  <form>
    {/* formulaire */}
    <Button onClick={handleSave}>Enregistrer</Button>
  </form>
</Loader>
```
