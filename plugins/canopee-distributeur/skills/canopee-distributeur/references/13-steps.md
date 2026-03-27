# Steps (Étapes)

## Présentation
Le composant Steps affiche un indicateur de progression à travers un processus séquentiel.

## Import
```tsx
import { Steps, Step, VerticalStep } from "@axa-fr/canopee-react/distributeur";
```

## Composants
- **Steps** : Conteneur des étapes horizontales
- **Step** : Étape individuelle dans le flux horizontal
- **VerticalStep** : Étape individuelle dans le flux vertical

## Étapes horizontales

```tsx
import { Steps, Step } from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";

const TunnelCommande = () => {
  const [etapeActuelle, setEtapeActuelle] = useState(1);
  
  return (
    <>
      <Steps currentStep={etapeActuelle}>
        <Step number={1} label="Panier" onClick={() => setEtapeActuelle(1)} />
        <Step number={2} label="Livraison" onClick={() => setEtapeActuelle(2)} />
        <Step number={3} label="Paiement" onClick={() => setEtapeActuelle(3)} />
        <Step number={4} label="Confirmation" />
      </Steps>
      
      {etapeActuelle === 1 ? <div>Contenu du panier</div> : null}
      {etapeActuelle === 2 ? <div>Contenu de la livraison</div> : null}
      {etapeActuelle === 3 ? <div>Contenu du paiement</div> : null}
      {etapeActuelle === 4 ? <div>Contenu de la confirmation</div> : null}
    </>
  );
};
```

## Étapes verticales

```tsx
import { VerticalStep } from "@axa-fr/canopee-react/distributeur";

<div>
  <VerticalStep 
    number={1} 
    label="Informations" 
    open={true}
  >
    <p>Contenu de l'étape 1...</p>
  </VerticalStep>
  
  <VerticalStep 
    number={2} 
    label="Confirmation"
  >
    <p>Contenu de l'étape 2...</p>
  </VerticalStep>
</div>
```

## Classes CSS
- `.af-steps-new` - Conteneur des étapes
- `.af-steps-list` - Liste des étapes
- `.af-step` - Étape individuelle
