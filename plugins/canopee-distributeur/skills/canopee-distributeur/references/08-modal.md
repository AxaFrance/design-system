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
| `onSubmit` | `() => void` | - | Gestionnaire de soumission/confirmation |
| `onCancel` | `() => void` | - | Gestionnaire d'annulation/fermeture |
| `onOutsideTap` | `() => void` | - | Gestionnaire de clic extérieur |
| `children` | `ReactNode` | - | Contenu de la modale |

### ModalHeader / ModalHeaderBase

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `string \| ReactNode` | - | Titre de l'en-tête |
| `onClose` | `() => void` | - | Gestionnaire du clic sur fermeture |
| `children` | `ReactNode` | - | Contenu d'en-tête personnalisé |

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
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleOuvrir = () => {
    modalRef.current?.showModal?.();
  };
  
  const handleFermer = () => {
    modalRef.current?.close?.();
  };
  
  return (
    <>
      <Button onClick={handleOuvrir}>Ouvrir la modale</Button>
      
      <Modal ref={modalRef} onCancel={handleFermer}>
        <ModalHeader title="Titre de la modale" onClose={handleFermer} />
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
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleConfirmer = () => {
    console.log("Action confirmée");
    modalRef.current?.close?.();
  };
  
  return (
    <Modal 
      ref={modalRef} 
      onSubmit={handleConfirmer}
      onCancel={() => modalRef.current?.close?.()}
    >
      <ModalHeader 
        title="Confirmer l'action" 
        onClose={() => modalRef.current?.close?.()}
      />
      <ModalBody>
        Êtes-vous sûr(e) de vouloir continuer ? Cette action est irréversible.
      </ModalBody>
      <ModalFooter>
        <Button 
          variant="secondary" 
          onClick={() => modalRef.current?.close?.()}
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
  const modalRef = useRef<HTMLDivElement>(null);
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
        <ModalHeader 
          title="Ajouter un nouvel utilisateur" 
          onClose={() => modalRef.current?.close?.()}
        />
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
import { BooleanModal } from "@axa-fr/canopee-react/distributeur";

const ConfirmationSuppression = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleSupprimer = () => {
    console.log("Supprimé");
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
        title="Supprimer l'élément ?"
        submitLabel="Supprimer"
        cancelLabel="Conserver"
        onSubmit={handleSupprimer}
        onCancel={() => modalRef.current?.close?.()}
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
  const modalRef = useRef<HTMLDivElement>(null);
  
  return (
    <Modal 
      ref={modalRef}
      onOutsideTap={() => modalRef.current?.close?.()}
    >
      <ModalHeader 
        title="Cliquer à l'extérieur pour fermer" 
        onClose={() => modalRef.current?.close?.()}
      />
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
  const modalRef = useRef<HTMLDivElement>(null);
  
  return (
    <Modal ref={modalRef} size="lg">
      <ModalHeader 
        title="Aperçu de l'article" 
        onClose={() => modalRef.current?.close?.()}
      />
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
- Attributs ARIA pour la sémantique du dialogue
- Le bouton de fermeture a un label accessible
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
