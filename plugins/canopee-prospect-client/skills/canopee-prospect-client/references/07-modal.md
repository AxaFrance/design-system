# Modal

Fenêtre modale accessible basée sur l'élément HTML `<dialog>`.

---

## Modal (haut niveau)

Modale complète avec header (titre + icône + fermeture), body et footer (boutons primaire / secondaire / tertiaire).

### Import

```tsx
import {
  Modal,
  type ModalProps,
  type ModalCoreHeaderProps,
  type ModalCoreFooterProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ModalProps = {
  title: string;                          // Titre de la modale (obligatoire, aussi aria-label)
  headingProps?: Omit<HeadingProps, "children">;  // Props du composant Heading
  icon?: string;                          // SVG src pour l'icône dans le header
  iconProps?: Omit<IconProps, "src">;    // Props de l'icône
  onClose?: VoidFunction;                 // Handler de fermeture (backdrop + bouton X)
  closeButtonAriaLabel?: string;          // aria-label du bouton fermer (défaut: "Fermer la boite de dialogue")
  primaryButtonProps?: Partial<ButtonProps>;
  secondaryButtonProps?: Partial<ButtonProps>;
  tertiaryButtonProps?: Partial<ButtonProps>;
  modalCoreBodyProps?: ModalCoreBodyProps;
  modalCoreFooterProps?: ModalCoreFooterContainerProps;
  modalCoreHeaderProps?: ModalCoreHeaderContainerProps;
  children?: ReactNode;                   // Corps de la modale
  open?: boolean;                         // Attribut HTML <dialog open>
};
```

### Pattern d'utilisation (réf imperative API dialog)

Le composant doit être piloté via `ref.current.showModal()` / `ref.current.close()` — c'est l'API native `<dialog>`.

```tsx
import { useRef, useLayoutEffect } from "react";
import { Modal, Button } from "@axa-fr/canopee-react/prospect";
import bank from "@material-symbols/svg-700/rounded/account_balance.svg";

const MyModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={() => modalRef.current?.showModal()}>
        Ouvrir la modale
      </Button>

      <Modal
        ref={modalRef}
        title="Mon contrat"
        headingProps={{ firstSubtitle: "Référence 12345" }}
        icon={bank}
        iconProps={{ variant: "primary" }}
        onClose={() => modalRef.current?.close()}
        primaryButtonProps={{
          children: "Valider",
          onClick: () => {
            handleSubmit();
            modalRef.current?.close();
          },
        }}
        secondaryButtonProps={{
          children: "Annuler",
          onClick: () => modalRef.current?.close(),
        }}
      >
        <p>Contenu de la modale...</p>
      </Modal>
    </>
  );
};
```

### Fermeture au clic sur le backdrop

Le `<ModalCore>` appelle `onClose` quand l'utilisateur clique en dehors de `.af-modal__content`. Passez la même fonction closure que `ref.current?.close()`.

---

## ModalCore (bas niveau)

Modale `<dialog>` brute sans structure interne imposée.

### Import

```tsx
import { ModalCore, type ModalCoreProps } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type ModalCoreProps = Omit<ComponentPropsWithRef<"dialog">, "title" | "onClose"> &
  Required<Pick<ComponentPropsWithRef<"dialog">, "title">> & {
    onClose?: VoidFunction;
  };
```

---

## ModalCoreHeader, ModalCoreBody, ModalCoreFooter (bas niveau)

Sous-composants pour construire une modale sur mesure.

### Import

```tsx
import {
  ModalCoreHeader,
  type ModalCoreHeaderProps,
  ModalCoreBody,
  type ModalCoreBodyProps,
  ModalCoreFooter,
  type ModalCoreFooterProps,
} from "@axa-fr/canopee-react/prospect";
```

### ModalCoreHeader Props

```tsx
type ModalCoreHeaderProps = ComponentPropsWithoutRef<"header"> & {
  // Heading et Icon injectés par le thème — passer les props directement :
  headingProps: HeadingProps;
  iconProps?: IconProps;
  onClose?: VoidFunction;
  closeButtonAriaLabel?: string;
};
```

### ModalCoreFooter Props

```tsx
type ModalCoreFooterProps = ComponentPropsWithoutRef<"footer"> & {
  primaryButtonProps?: Partial<ButtonProps>;
  secondaryButtonProps?: Partial<ButtonProps>;
  tertiaryButtonProps?: Partial<ButtonProps>;
};
```

### Exemple bas niveau

```tsx
<ModalCore ref={dialogRef} title="Confirmation" onClose={onClose}>
  <ModalCoreHeader
    headingProps={{ children: "Confirmation", level: 2 }}
    onClose={onClose}
  />
  <ModalCoreBody>
    <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
  </ModalCoreBody>
  <ModalCoreFooter
    primaryButtonProps={{ children: "Supprimer", onClick: handleDelete }}
    secondaryButtonProps={{ children: "Annuler", onClick: onClose }}
  />
</ModalCore>
```
