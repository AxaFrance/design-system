# Message (Alert)

## Présentation
Le composant Message affiche des messages informatifs, d'avertissement, d'erreur ou de succès. Il fournit un retour visuel aux utilisateurs avec une fonctionnalité optionnelle de fermeture.

## Import
```tsx
import { Message } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `ReactNode` | Obligatoire | Titre/en-tête du message |
| `variant` | `"error" \| "warning" \| "info" \| "success"` | `"info"` | Type et style du message |
| `onClose` | `(e: MouseEvent) => void` | - | Gestionnaire du bouton de fermeture |
| `closeButtonAriaLabel` | `string` | `"Close"` | Label d'accessibilité du bouton de fermeture |
| `icon` | `string` | - | URL SVG d'icône personnalisée (remplace l'icône de la variante) |
| `className` | `string` | - | Classes CSS additionnelles |
| `children` | `ReactNode` | - | Contenu/corps du message |

## Utilisation de base

### Message d'erreur
```tsx
import { Message } from "@axa-fr/canopee-react/distributeur";

<Message 
  variant="error" 
  title="Une erreur s'est produite"
>
  Quelque chose s'est mal passé. Veuillez réessayer.
</Message>
```

### Message d'avertissement
```tsx
<Message 
  variant="warning" 
  title="Avertissement"
>
  Cette action est irréversible.
</Message>
```

### Message d'information
```tsx
<Message 
  variant="info" 
  title="Information"
>
  Voici un message d'information.
</Message>
```

### Message de succès
```tsx
<Message 
  variant="success" 
  title="Succès"
>
  Vos modifications ont été enregistrées avec succès.
</Message>
```

## Messages fermables

### Avec bouton de fermeture
```tsx
const [visible, setVisible] = useState(true);

{visible && (
  <Message
    variant="warning"
    title="Maintenance programmée"
    onClose={() => setVisible(false)}
  >
    Le système sera en maintenance de 2h à 4h du matin.
  </Message>
)}
```

### Label de fermeture personnalisé
```tsx
<Message
  variant="info"
  title="Mise à jour disponible"
  onClose={handleClose}
  closeButtonAriaLabel="Ignorer la notification"
>
  Une nouvelle version est disponible. Rechargez pour mettre à jour.
</Message>
```

## Variantes et icônes

### Icônes automatiques (par variante)
Chaque variante a une icône intégrée :
- **error** : icône rouge d'erreur
- **warning** : icône jaune d'avertissement
- **info** : icône bleue d'information
- **success** : icône verte de validation

```tsx
// Les icônes intégrées apparaissent automatiquement selon la variante
<Message variant="success" title="Terminé">
  Processus accompli
</Message>
```

### Icône personnalisée
```tsx
import customIcon from "@material-symbols/svg-400/outlined/custom.svg";

<Message
  variant="info"
  title="Message personnalisé"
  icon={customIcon}
>
  Ce message utilise une icône personnalisée
</Message>
```

## Contenu enrichi

### Avec HTML/JSX
```tsx
<Message
  variant="error"
  title="Erreurs de validation"
>
  <ul>
    <li>L'adresse e-mail est invalide</li>
    <li>Le mot de passe est trop court</li>
    <li>Les conditions d'utilisation doivent être acceptées</li>
  </ul>
</Message>
```

### Avec texte formaté
```tsx
<Message
  variant="info"
  title="Informations de contact"
>
  <p>E-mail : <strong>support@exemple.fr</strong></p>
  <p>Téléphone : <strong>+33 1 23 45 67 89</strong></p>
</Message>
```

## Messages de validation de formulaire

### Erreur sur un champ
```tsx
const [email, setEmail] = useState("");
const [erreur, setErreur] = useState("");

const handleChange = (e) => {
  const valeur = e.target.value;
  setEmail(valeur);
  
  if (valeur && !valeur.includes("@")) {
    setErreur("Veuillez saisir une adresse e-mail valide");
  } else {
    setErreur("");
  }
};

return (
  <>
    {Boolean(erreur) && (
      <Message variant="error" title="Erreur de validation">
        {erreur}
      </Message>
    )}
    <input 
      type="email" 
      value={email} 
      onChange={handleChange}
    />
  </>
);
```

### Récapitulatif d'erreurs multiples
```tsx
const [erreurs, setErreurs] = useState<string[]>([]);

const handleSubmit = (e) => {
  e.preventDefault();
  const erreursValidation: string[] = [];
  
  if (!formData.email) erreursValidation.push("L'e-mail est obligatoire");
  if (!formData.password) erreursValidation.push("Le mot de passe est obligatoire");
  
  if (erreursValidation.length > 0) {
    setErreurs(erreursValidation);
  } else {
    // Soumettre le formulaire
  }
};

return (
  <>
    {erreurs.length > 0 && (
      <Message variant="error" title="Veuillez corriger les erreurs suivantes">
        <ul>
          {erreurs.map((erreur, i) => (
            <li key={i}>{erreur}</li>
          ))}
        </ul>
      </Message>
    )}
    <form onSubmit={handleSubmit}>
      {/* champs du formulaire */}
    </form>
  </>
);
```

## Message non fermable

```tsx
// Pas de bouton de fermeture si onClose n'est pas fourni
<Message
  variant="info"
  title="Notice importante"
>
  Ce message sera toujours visible
</Message>
```

## Disparition automatique

```tsx
const [visible, setVisible] = useState(true);

useEffect(() => {
  if (visible) {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }
}, [visible]);

{visible && (
  <Message
    variant="success"
    title="Enregistrement réussi"
    onClose={() => setVisible(false)}
  >
    Vos modifications ont été automatiquement enregistrées.
  </Message>
)}
```

## Accessibilité
- La couleur de l'icône apporte une distinction visuelle
- Le titre exprime clairement l'objet du message
- Le bouton de fermeture a un `aria-label` accessible
- La couleur seule ne véhicule pas le sens (icône + style)
- Support des lecteurs d'écran

## Bonnes pratiques
- Placer les messages près du contenu concerné (au-dessus du formulaire, etc.)
- Garder les titres concis et actionnables
- Fournir des messages d'erreur spécifiques et utiles
- Utiliser les variantes de manière cohérente (error pour les problèmes, success pour les confirmations)
- Inclure un bouton de fermeture pour les messages non critiques
- Empiler les messages liés verticalement

## Classes CSS
- `.af-alert` - Classe de base du message
- `.af-alert--error` - Variante erreur
- `.af-alert--warning` - Variante avertissement
- `.af-alert--info` - Variante information
- `.af-alert--success` - Variante succ\u00e8s
