# Modal

## Présentation
Le composant Modal affiche du contenu dans une boîte de dialogue superposée à la page. Il supporte plusieurs tailles et propose des sections en-tête, corps et pied de page pour un contenu structuré.

## Import
```tsx
import { 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  BooleanModal
} from "@axa-fr/canopee-react/distributeur";
```

## Composants

### Modal
Conteneur principal et coordinateur de la modale.

### ModalHeader / ModalHeaderBase
Section d'en-tête avec titre et bouton de fermeture.

### ModalBody
Zone de contenu de la modale.

### ModalFooter
Section de pied de page, généralement pour les boutons d'action.

### BooleanModal
Modale spécialisée pour les dialogues de confirmation oui/non.

## Props

### Modal

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `size` | `"" \| "lg" \| "sm"` | `""` | Taille de la modale (vide = défaut) |
| `onOutsideTap` | `(event: React.MouseEvent \| React.KeyboardEvent) => void` | **Obligatoire** | Gestionnaire de clic extérieur ou touche Échap |
| `title` | `string` | - | Nom accessible de la modale (`aria-label`). Facultatif avec un `ModalHeader`, dont le titre nomme alors la modale |
| `children` | `ReactNode` | - | Contenu de la modale |
| `className` | `string` | - | Classes CSS additionnelles |

### ModalHeader

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | - | Titre affiché (`h4`). Dans une `Modal` sans `title`, il nomme aussi la modale |
| `onCancel` | `MouseEventHandler<HTMLButtonElement>` | **Obligatoire** | Gestionnaire du clic sur le bouton de fermeture |
| `closeButtonAriaLabel` | `string` | `"Fermer la boite de dialogue"` | Nom accessible du bouton de fermeture |
| `className` | `string` | - | Classes CSS additionnelles |

### ModalHeaderBase

En-tête au contenu libre (`children`, attributs HTML d'un `header`). Il ne nomme pas la modale :
passer `title` à `Modal`, ou `aria-labelledby` vers l'identifiant de votre titre.

### ModalBody

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | - | Contenu du corps |

### ModalFooter

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | - | Contenu du pied de page (généralement des boutons) |

## Utilisation de base

### Modale simple
```tsx
import { useRef } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "@axa-fr/canopee-react/distributeur";

const ModaleSimple = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  
  const handleOuvrir = () => {
    modalRef.current?.showModal?.();
  };
  
  const handleFermer = () => {
    modalRef.current?.close?.();
  };
  
  return (
    <>
      <Button onClick={handleOuvrir}>Ouvrir la modale</Button>
      
      <Modal ref={modalRef} onOutsideTap={handleFermer}>
        <ModalHeader onCancel={handleFermer}>Titre de la modale</ModalHeader>
        <ModalBody>
          Ceci est le contenu de la modale.
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleFermer}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleFermer}>
            Confirmer
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
```

## Tailles

### Taille par défaut
```tsx
<Modal ref={modalRef}>
  {/* contenu */}
</Modal>
```

### Taille large
```tsx
<Modal ref={modalRef} size="lg">
  {/* contenu */}
</Modal>
```

### Taille petite
```tsx
<Modal ref={modalRef} size="sm">
  {/* contenu */}
</Modal>
```

## Dialogue de confirmation

```tsx
const ModaleConfirmation = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  
  const handleConfirmer = () => {
    console.log("Action confirmée");
    modalRef.current?.close?.();
  };
  
  const handleFermer = () => {
    modalRef.current?.close?.();
  };
  
  return (
    <Modal 
      ref={modalRef} 
      onOutsideTap={handleFermer}
    >
      <ModalHeader onCancel={handleFermer}>Confirmer l'action</ModalHeader>
      <ModalBody>
        Êtes-vous sûr(e) de vouloir continuer ? Cette action est irréversible.
      </ModalBody>
      <ModalFooter>
        <Button 
          variant="secondary" 
          onClick={handleFermer}
        >
          Annuler
        </Button>
        <Button 
          variant="danger" 
          onClick={handleConfirmer}
        >
          Confirmer
        </Button>
      </ModalFooter>
    </Modal>
  );
};
```

## Formulaire dans une modale

```tsx
const ModaleFormulaire = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [formData, setFormData] = useState({ nom: "", email: "" });
  
  const handleSoumettre = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
    modalRef.current?.close?.();
  };
  
  return (
    <>
      <Button onClick={() => modalRef.current?.showModal?.()}>
        Ajouter un utilisateur
      </Button>
      
      <Modal ref={modalRef}>
        <ModalHeader onCancel={() => modalRef.current?.close?.()}>
          Ajouter un nouvel utilisateur
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSoumettre}>
            <TextInput
              id="nom"
              name="nom"
              label="Nom"
              value={formData.nom}
              onChange={(e) => setFormData({...formData, nom: e.target.value})}
              required
            />
            <TextInput
              id="email"
              name="email"
              label="E-mail"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button 
            variant="secondary" 
            onClick={() => modalRef.current?.close?.()}
          >
            Annuler
          </Button>
          <Button 
            variant="primary" 
            onClick={() => {
              handleSoumettre({ preventDefault: () => {} } as any);
            }}
          >
            Ajouter l'utilisateur
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
```

## BooleanModal (dialogue oui/non)

```tsx
import { useRef } from "react";
import { BooleanModal, Button } from "@axa-fr/canopee-react/distributeur";

const ConfirmationSuppression = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  
  const handleSupprimer = (event: React.MouseEvent | React.KeyboardEvent) => {
    console.log("Supprimé");
    modalRef.current?.close?.();
  };
  
  const handleAnnuler = (event: React.MouseEvent | React.KeyboardEvent) => {
    modalRef.current?.close?.();
  };
  
  return (
    <>
      <Button 
        variant="danger" 
        onClick={() => modalRef.current?.showModal?.()}
      >
        Supprimer l'élément
      </Button>
      
      <BooleanModal
        ref={modalRef}
        id="delete-modal"
        title="Supprimer l'élément ?"
        submitTitle="Supprimer"
        cancelTitle="Conserver"
        onSubmit={handleSupprimer}
        onCancel={handleAnnuler}
      >
        Cet élément sera définitivement supprimé. Êtes-vous sûr(e) ?
      </BooleanModal>
    </>
  );
};
```

## Fermeture au clic extérieur

```tsx
const ModaleIgnorable = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  
  const handleFermer = () => {
    modalRef.current?.close?.();
  };
  
  return (
    <Modal 
      ref={modalRef}
      onOutsideTap={handleFermer}
    >
      <ModalHeader onCancel={handleFermer}>Cliquer à l'extérieur pour fermer</ModalHeader>
      <ModalBody>
        Contenu ici. Cliquer à l'extérieur ou sur X pour fermer.
      </ModalBody>
    </Modal>
  );
};
```

## Modale avec contenu riche

```tsx
const ModaleArticle = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  
  return (
    <Modal ref={modalRef} size="lg">
      <ModalHeader onCancel={() => modalRef.current?.close?.()}>
        Aperçu de l'article
      </ModalHeader>
      <ModalBody>
        <img src="banner.jpg" alt="Article" style={{ width: "100%" }} />
        <h2>Titre de l'article</h2>
        <p>Contenu de l'article ici...</p>
        <section>
          <h3>Section</h3>
          <p>Plus de contenu...</p>
        </section>
      </ModalBody>
      <ModalFooter>
        <Button 
          variant="secondary" 
          onClick={() => modalRef.current?.close?.()}
        >
          Fermer
        </Button>
        <Button variant="primary">
          Lire l'article complet
        </Button>
      </ModalFooter>
    </Modal>
  );
};
```

## Accessibilité
- Les modales piègent le focus (pas de tab vers l'extérieur)
- La touche Échap ferme la modale (si programmé)
- Le `<dialog>` est nommé par le titre du `ModalHeader` (`aria-labelledby`) quand `title` est omis ;
  un `title` non vide le nomme (`aria-label`) ; un `aria-labelledby` passé à `Modal` reste prioritaire.
  Avec `ModalHeaderBase`, passer `title` ou `aria-labelledby`. `BooleanModal` est nommée par son `title`
- Le titre du `ModalHeader` reste un `h4`
- Le bouton de fermeture a un label accessible (`"Fermer la boite de dialogue"` par défaut)
- L'arrière-plan empêche l'interaction avec le fond
- Structure sémantique en-tête/corps/pied de page

## Bonnes pratiques
- Utiliser la modale pour les actions critiques ou les confirmations
- Garder le contenu de la modale ciblé et concis
- Fournir un bouton de fermeture clair et une alternative (bouton Annuler)
- Utiliser la taille appropriée selon le contenu
- Éviter les modales imbriquées autant que possible
- Toujours fournir un moyen de fermer sans effectuer d'action
- Utiliser des dialogues de confirmation pour les actions destructives
- Tester la navigation au clavier (Tab, Échap)

## Classes CSS
- `.af-modal` - Classe de base de la modale
- `.af-modal--lg` - Modale large
- `.af-modal--sm` - Modale petite
- `.af-modal__header` - Section en-tête
- `.af-modal__body` - Section corps
- `.af-modal__footer` - Section pied de page
