# Summary

Composant de récapitulatif des erreurs de validation d'un formulaire. Affiche une liste de messages d'erreur dans un composant `Message`. Ne s'affiche pas si la liste est vide ou si `isVisible` est `false`.

## Import

```tsx
import { Summary } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `messages` | `ReactNode[]` | `[]` | Liste des messages d'erreur à afficher |
| `title` | `string` | `"Invalid form"` | Titre du récapitulatif |
| `isVisible` | `boolean` | `true` | Contrôle l'affichage |
| `classModifier` | `string` | `"error"` | Modificateur CSS (hérité de `Message`) |

Toutes les autres props de `Message` sont acceptées (`onClose`, `className`, …).

> **Comportement :** Si `messages` est vide, si tous les messages sont falsy, ou si `isVisible` est `false`, le composant ne rend rien.

## Utilisation

```tsx
import { useState } from "react";
import { Summary } from "@axa-fr/canopee-react/distributeur";

const MonFormulaire = () => {
  const [erreurs, setErreurs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const erreursValidation: string[] = [];

    if (!nom) erreursValidation.push("Le nom est obligatoire");
    if (!email) erreursValidation.push("L'e-mail est obligatoire");
    if (!telephone) erreursValidation.push("Le téléphone est obligatoire");

    setErreurs(erreursValidation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Summary
        title="Votre formulaire contient des erreurs"
        messages={erreurs}
        isVisible={erreurs.length > 0}
      />
      {/* champs du formulaire */}
    </form>
  );
};
```
