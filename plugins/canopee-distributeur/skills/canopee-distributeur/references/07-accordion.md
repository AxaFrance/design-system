# Accordion

## Présentation
Le composant Accordion est un système de conteneurs repliables qui affiche plusieurs sections avec une fonctionnalité de déploiement/réduction. Il supporte les modes mono-déploiement et multi-déploiement avec des boutons d'action optionnels.

## Import
```tsx
import { 
  Accordion, 
  CollapseCard 
} from "@axa-fr/canopee-react/distributeur";
```

## Composants

### Accordion
Conteneur des sections repliables.

### CollapseCard (ou CollapseItem)
Section individuelle déployable dans le composant Accordion.

## Props

### Accordion

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `variant` | `"default" \| "white" \| "light"` | `"default"` | Style visuel |
| `onlyOne` | `boolean` | `false` | Une seule carte ouverte à la fois |
| `children` | `CollapseCard[]` | Obligatoire | Tableau de composants CollapseCard |
| `className` | `string` | - | Classes CSS additionnelles |

### CollapseCard

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `id` | `string` | Obligatoire | Identifiant unique de la carte |
| `title` | `string \| ReactNode` | Obligatoire | En-tête/titre de la carte |
| `open` | `boolean` | `false` | État initial ouvert |
| `name` | `string` | - | Groupement pour mode radio (une seule ouvert) |
| `onToggle` | `() => void` | - | Gestionnaire d'événement de déploiement/réduction |
| `children` | `ReactNode` | - | Contenu repliable |
| `actions` | `Action[]` | - | Boutons d'action |
| `variant` | `"default" \| "white" \| "light"` | - | Surcharge optionnelle |
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | ⚠️ DÉPRÉCIÉ | Modificateur CSS additionnel (remplacé par `variant`) |

## Type Action

```tsx
type Action = {
  key: string;           // Identifiant unique de l'action
  label: string;         // Texte du bouton
  onClick: () => void;   // Gestionnaire de clic
  leftIcon?: ReactNode;  // Icône à gauche
  rightIcon?: ReactNode; // Icône à droite
};
```

## Utilisation de base

### Accordion par défaut
```tsx
import { Accordion, CollapseCard } from "@axa-fr/canopee-react/distributeur";

<Accordion>
  <CollapseCard 
    id="section1" 
    title="Section 1"
  >
    Contenu de la section 1
  </CollapseCard>
  
  <CollapseCard 
    id="section2" 
    title="Section 2"
    open={true}
  >
    Contenu de la section 2 (initialement ouverte)
  </CollapseCard>
</Accordion>
```

### Multi-déploiement (défaut)
Plusieurs sections peuvent être ouvertes simultanément :
```tsx
<Accordion>
  <CollapseCard id="faq1" title="Qu'est-ce qui est inclus ?">
    Description complète des fonctionnalités incluses...
  </CollapseCard>
  <CollapseCard id="faq2" title="Quel est le délai de livraison ?">
    Informations sur les délais estimés...
  </CollapseCard>
</Accordion>
```

### Mode mono-déploiement
Une seule section ouverte à la fois :
```tsx
<Accordion onlyOne={true}>
  <CollapseCard id="step1" title="Étape 1 : Inscription">
    Instructions d'inscription...
  </CollapseCard>
  <CollapseCard id="step2" title="Étape 2 : Vérification">
    Instructions de vérification...
  </CollapseCard>
</Accordion>
```

## Variantes visuelles

### Défaut (fond bleu)
```tsx
<Accordion variant="default">
  <CollapseCard id="carte" title="Style par défaut">
    Contenu avec en-tête bleu
  </CollapseCard>
</Accordion>
```

### Variante blanche
```tsx
<Accordion variant="white">
  <CollapseCard id="carte" title="Fond blanc">
    Style d'en-tête blanc minimaliste
  </CollapseCard>
</Accordion>
```

### Variante légère
```tsx
<Accordion variant="light">
  <CollapseCard id="carte" title="Style léger">
    Fond gris clair
  </CollapseCard>
</Accordion>
```

## Avec actions

### Action unique
```tsx
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import { Svg } from "@axa-fr/canopee-react/distributeur";

<Accordion>
  <CollapseCard
    id="item1"
    title="Élément avec action"
    actions={[
      {
        key: "supprimer",
        label: "Supprimer",
        rightIcon: <Svg src={deleteIcon} />,
        onClick: () => console.log("Suppression cliquée")
      }
    ]}
  >
    Contenu ici
  </CollapseCard>
</Accordion>
```

### Actions multiples (max 2)
```tsx
import editIcon from "@material-symbols/svg-400/outlined/edit.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";

<CollapseCard
  id="item2"
  title="Élément modifiable"
  actions={[
    {
      key: "modifier",
      label: "Modifier",
      leftIcon: <Svg src={editIcon} />,
      onClick: () => handleEdit()
    },
    {
      key: "supprimer",
      label: "Supprimer",
      rightIcon: <Svg src={deleteIcon} />,
      onClick: () => handleDelete()
    }
  ]}
>
  Contenu de l'élément
</CollapseCard>
```

## Exemples de contenu

### Contenu HTML riche
```tsx
<CollapseCard id="riche" title="Contenu complexe">
  <section>
    <h3>Fonctionnalités</h3>
    <ul>
      <li>Fonctionnalité 1</li>
      <li>Fonctionnalité 2</li>
    </ul>
  </section>
  <section>
    <h3>Spécifications techniques</h3>
    <table>
      <tr><td>Spec</td><td>Valeur</td></tr>
    </table>
  </section>
</CollapseCard>
```

### Composants imbriqués
```tsx
import { CheckboxItem } from "@axa-fr/canopee-react/distributeur";

<CollapseCard id="imbrique" title="Avec cases à cocher">
  <CheckboxItem label="Option A" />
  <CheckboxItem label="Option B" />
  <CheckboxItem label="Option C" />
</CollapseCard>
```

## Exemple FAQ

```tsx
const SectionFAQ = () => {
  const faqs = [
    {
      id: "q1",
      title: "Quels modes de paiement sont acceptés ?",
      content: "Nous acceptons toutes les principales cartes de crédit, PayPal et les virements bancaires."
    },
    {
      id: "q2",
      title: "Quelle est votre politique de remboursement ?",
      content: "Satisfait ou remboursé sous 30 jours pour tout achat."
    },
    {
      id: "q3",
      title: "Livrez-vous à l'international ?",
      content: "Oui, nous livrons dans plus de 150 pays dans le monde."
    }
  ];
  
  return (
    <Accordion onlyOne={false}>
      {faqs.map(faq => (
        <CollapseCard 
          key={faq.id} 
          id={faq.id} 
          title={faq.title}
        >
          {faq.content}
        </CollapseCard>
      ))}
    </Accordion>
  );
};
```

## Exemple paramètres/configuration

```tsx
const PanneauParametres = () => {
  const [parametres, setParametres] = useState({});
  
  const handleSupprimer = (itemId: string) => {
    console.log(`Suppression de ${itemId}`);
    // Logique de suppression
  };
  
  return (
    <Accordion variant="white" onlyOne={false}>
      <CollapseCard
        id="notifications"
        title="Paramètres de notification"
        open={true}
      >
        <CheckboxItem label="Notifications par e-mail" />
        <CheckboxItem label="Alertes SMS" />
      </CollapseCard>
      
      <CollapseCard
        id="confidentialite"
        title="Paramètres de confidentialité"
        actions={[
          {
            key: "reinitialiser",
            label: "Réinitialiser",
            onClick: () => handleSupprimer("confidentialite")
          }
        ]}
      >
        <CheckboxItem label="Partager le profil" />
        <CheckboxItem label="Autoriser les recommandations" />
      </CollapseCard>
    </Accordion>
  );
};
```

## Expansion contrôlée

```tsx
const [cartesOuvertes, setCartesOuvertes] = useState<Set<string>>(
  new Set(["section1"])
);

const basculerCarte = (idCarte: string) => {
  setCartesOuvertes(prev => {
    const nouvelEnsemble = new Set(prev);
    if (nouvelEnsemble.has(idCarte)) {
      nouvelEnsemble.delete(idCarte);
    } else {
      nouvelEnsemble.add(idCarte);
    }
    return nouvelEnsemble;
  });
};

// Note : l'expansion de CollapseCard est gérée en interne
// Utiliser la prop open pour définir l'état initial
<Accordion>
  <CollapseCard id="carte1" title="Carte 1" open={cartesOuvertes.has("carte1")}>
    Contenu
  </CollapseCard>
</Accordion>
```

## Accessibilité
- Navigation au clavier (Tab pour les titres, Entrée/Espace pour déployer)
- Sections clairement labelisées avec des titres
- Boutons d'action accessibles au clavier
- Attributs ARIA pour les états déployé/réduit
- Contraste de couleur suffisant dans toutes les variantes

## Bonnes pratiques
- Utiliser des titres de sections descriptifs et concis
- Garder le contenu de chaque section ciblé
- Utiliser le mode onlyOne pour les processus étape par étape
- Ne fournir des actions que si nécessaire
- Mettre le contenu le plus important en première section
- Tester avec la navigation au clavier
- Utiliser une variante cohérente pour les composants Accordion liés

## Classes CSS
- `.af-accordion` - Classe de base du composant Accordion
- `.af-accordion--default` - Variante par défaut
- `.af-accordion--white` - Variante blanche
- `.af-accordion--light` - Variante légère
