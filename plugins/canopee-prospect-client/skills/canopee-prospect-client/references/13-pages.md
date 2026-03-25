# Pages complètes : ValidPage, ErrorPage

Ces composants sont des pages hautes abstraction qui utilisent `ExitLayout` en interne.

---

## ValidPage

Page de confirmation après une action réussie. Affiche un icône de validation vert, une en-tête, un contenu, un agent optionnel et un lien de retour.

### Import

```tsx
import { ValidPage, type ValidPageProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ValidPageProps = PropsWithChildren & {
  headingProps?: HeadingProps;         // Titre et sous-titres de la page
  dataAgentProps?: DataAgentProps;     // Agent AXA à afficher (optionnel)
  linkProps?: LinkProps;               // Lien de retour/action (optionnel)
};
```

L'icône `check` (vert, `variant: "success"`) est incluse automatiquement.

### Exemple

```tsx
<ValidPage
  headingProps={{
    children: "Votre souscription est confirmée !",
    firstSubtitle: "Contrat n° 2024-001234",
    secondSubtitle: "Prise d'effet au 1er janvier 2025",
  }}
  dataAgentProps={{
    agentProps: {
      type: "picture",
      picture: "/photo-agent.jpg",
      title: "Jean Martin",
      subtitle: "Votre conseiller AXA",
    },
  }}
  linkProps={{
    href: "/mes-contrats",
    children: "Accéder à mes contrats",
  }}
>
  <p>
    Vous recevrez votre attestation d'assurance par email dans les 24 heures.
  </p>
  <p>
    Pour toute question, contactez votre conseiller.
  </p>
</ValidPage>
```

---

## ErrorPage

Page d'erreur avec icône d'erreur rouge, en-tête et lien de retour.

### Import

```tsx
import { ErrorPage, type ErrorPageProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ErrorPageProps = PropsWithChildren & {
  headingProps?: HeadingProps;         // Titre et sous-titres de la page
  linkProps?: LinkProps;               // Lien de retour/action (optionnel)
};
```

L'icône `close` (rouge, `variant: "error"`) est incluse automatiquement. Pas de DataAgent sur les pages d'erreur.

### Exemple

```tsx
<ErrorPage
  headingProps={{
    children: "Une erreur est survenue",
    firstSubtitle: "Nous n'avons pas pu traiter votre demande",
  }}
  linkProps={{
    href: "/",
    children: "Retourner à l'accueil",
  }}
>
  <p>
    Une erreur technique a empêché le traitement de votre demande.
    Veuillez réessayer ultérieurement ou contacter notre service client.
  </p>
</ErrorPage>
```

---

## Différences entre ValidPage et ErrorPage

| Aspect | ValidPage | ErrorPage |
|---|---|---|
| Icône | `check` vert (`success`) | `close` rouge (`error`) |
| Agent AXA | ✅ (`dataAgentProps`) | ❌ |
| Lien de retour | ✅ (`linkProps`) | ✅ (`linkProps`) |
| Contenu enfants | ✅ | ✅ |
