# Loader

Indicateur de chargement : un spinner et son texte, en ligne, dans une zone de contenu, ou en overlay plein écran au-dessus d'un contenu existant.

## Import

```tsx
import { Loader } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `text` | `string` | **Obligatoire** | Texte affiché sous le spinner, et annoncé aux lecteurs d'écran |
| `variant` | `"fullscreen" \| "inline" \| "content"` | `"fullscreen"` | `fullscreen` : overlay plein écran ; `inline` : spinner en ligne ; `content` : spinner compact pour une zone de contenu |
| `children` | `ReactNode` | - | Avec `fullscreen` seulement : contenu affiché sous l'overlay |
| `className` | `string` | - | Classes CSS additionnelles |

## Utilisation

```tsx
import { Loader } from "@axa-fr/canopee-react/distributeur";

// Overlay plein écran au-dessus d'un formulaire
<Loader variant="fullscreen" text="Sauvegarde en cours">
  <form>...</form>
</Loader>

// Spinner en ligne
<Loader variant="inline" text="Recherche en cours" />

// Zone de contenu
<Loader variant="content" text="Chargement de vos contrats" />
```

## Utilisation dynamique

Le composant n'a pas d'état « inactif » : l'afficher seulement pendant le chargement.

```tsx
const [isSaving, setIsSaving] = useState(false);

const handleSave = async () => {
  setIsSaving(true);
  try {
    await saveData();
  } finally {
    setIsSaving(false);
  }
};

<>
  <form>
    {/* formulaire */}
    <Button onClick={handleSave}>Enregistrer</Button>
  </form>
  {isSaving ? <Loader variant="content" text="Sauvegarde en cours" /> : null}
</>
```

## Accessibilité

- Le Loader a `role="status"` : les lecteurs d'écran annoncent son `text` poliment, sans interrompre
  l'utilisateur. Il ne porte ni `aria-live="assertive"` ni `aria-busy`.
- Le spinner est une image décorative (`aria-hidden`) : le texte porte l'information.
- Pour signaler une erreur de chargement, utiliser un `Message` `variant="error"` (`role="alert"`).
