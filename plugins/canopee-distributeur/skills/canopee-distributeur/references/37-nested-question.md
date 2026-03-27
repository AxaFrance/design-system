# NestedQuestion

Section imbriquée affichée visuellement en retrait avec une flèche indicatrice, pour les questions conditionnelles dépendant d'une réponse parente. N'accepte que `children` et `className`.

## Import

```tsx
import { NestedQuestion } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | - | Contenu conditionnel imbriqué |
| `className` | `string` | - | Classes CSS additionnelles |

## Utilisation

Le composant est utilisé pour afficher des questions supplémentaires en fonction d'une réponse précédente.

```tsx
import { NestedQuestion, RadioInput, TextInput, ChoiceInput } from "@axa-fr/canopee-react/distributeur";

// Exemple : question conditionnelle
const MonFormulaire = () => {
  const [aAssurance, setAAssurance] = useState<string | undefined>(undefined);
  const [assureur, setAssureur] = useState("");

  return (
    <>
      <RadioInput
        id="assurance"
        name="assurance"
        label="Avez-vous une assurance habitation ?"
        options={[
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]}
        value={aAssurance}
        onChange={(e) => setAAssurance(e.target.value)}
      />

      {aAssurance === "oui" ? (
        <NestedQuestion>
          <TextInput
            id="assureur"
            name="assureur"
            label="Nom de votre assureur actuel"
            value={assureur}
            onChange={(e) => setAssureur(e.target.value)}
          />
        </NestedQuestion>
      ) : null}
    </>
  );
};
```

```tsx
// Plusieurs questions imbriquées
{aVehicule === "oui" ? (
  <NestedQuestion>
    <TextInput id="immatriculation" label="Immatriculation" />
    <ChoiceInput
      id="garageBox"
      label="Le véhicule est-il garé dans un garage ou box ?"
      value={garageBox}
      onChange={(e) => setGarageBox(e.target.value === "true")}
    />
  </NestedQuestion>
) : null}
```
