# Tabs (Onglets)

## Présentation
Le composant Tabs fournit une navigation par onglets avec affichage/masquage automatique du contenu associé.

## Import
```tsx
import { Tabs } from "@axa-fr/canopee-react/distributeur";
```

## Utilisation de base

```tsx
import { Tabs } from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";

const ContenuAOnglets = () => {
  const [ongletActif, setOngletActif] = useState("");
  
  return (
    <Tabs value={ongletActif} onChange={(id) => setOngletActif(id)}>
      <Tabs.Tab id="tab1" label="Accueil">
        Contenu de l'accueil
      </Tabs.Tab>
      <Tabs.Tab id="tab2" label="Param\u00e8tres">
        Contenu des param\u00e8tres
      </Tabs.Tab>
      <Tabs.Tab id="tab3" label="Aide">
        Contenu de l'aide
      </Tabs.Tab>
    </Tabs>
  );
};
```

## Exemple avec contenu

```tsx
import { Tabs } from "@axa-fr/canopee-react/distributeur";

<Tabs defaultValue="profil">
  <Tabs.Tab id="profil" label="Profil">
    <section>
      <h2>Profil utilisateur</h2>
      <p>Informations du profil...</p>
    </section>
  </Tabs.Tab>
  
  <Tabs.Tab id="securite" label="S\u00e9curit\u00e9">
    <section>
      <h2>Param\u00e8tres de s\u00e9curit\u00e9</h2>
      <p>Mot de passe et double authentification...</p>
    </section>
  </Tabs.Tab>
  
  <Tabs.Tab id="notifications" label="Notifications">
    <section>
      <h2>Pr\u00e9f\u00e9rences de notification</h2>
      <p>Param\u00e8tres e-mail et SMS...</p>
    </section>
  </Tabs.Tab>
</Tabs>
```

## Classes CSS
- `.af-tabs` - Conteneur principal des onglets
- `.af-tabs__nav` - Barre de navigation
- `.af-tabs__panel` - Panneau de contenu
