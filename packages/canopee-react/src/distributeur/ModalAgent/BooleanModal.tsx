import React, { forwardRef, type ReactNode } from "react";
import { Button, Modal, getComponentClassName } from "../../distributeur";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header, type HeaderProps } from "./components/Header";
import { ModalProps } from "./Modal";

const defaultClassName = "af-modal";

export type BooleanModalProps = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> &
  Omit<HeaderProps, "children" | "onCancel" | "title"> &
  Pick<ModalProps, "size"> & {
    /**
     * Title of the modal, displayed in the header.
     * Also used as the `aria-label` of the <dialog> element for accessibility.
     */
    title: string;
    /**
     * Callback function called when the modal is submitted.
     * @param event The event that triggered the submission, can be a mouse click or a keyboard event.
     * @returns void
     */
    onSubmit: (event: React.MouseEvent | React.KeyboardEvent) => void;
    /**
     * Callback function called when the modal is cancelled.
     * @param event The event that triggered the cancellation, can be a mouse click or a keyboard event.
     * @returns void
     */
    onCancel: (event: React.MouseEvent | React.KeyboardEvent) => void;
    id: string;
    children: ReactNode;
    /**
     * Text content of the submit button.
     */
    submitTitle?: string;
    /**
     * Text content of the cancel button.
     */
    cancelTitle?: string;
    className?: string;
    /**
     * @deprecated Use `size` prop instead.
     * Class modifier for the modal. Can be used to apply custom styles.
     */
    classModifier?: string;
  };
const BooleanModal = forwardRef<HTMLDialogElement, BooleanModalProps>(
  (
    {
      children,
      title,
      submitTitle = "Valider",
      cancelTitle = "Annuler",
      className = defaultClassName,
      classModifier,
      onCancel,
      onSubmit,
      closeButtonAriaLabel,
      ...props
    },
    ref,
  ) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      defaultClassName,
    );

    return (
      <Modal
        className={componentClassName}
        onOutsideTap={onCancel}
        title={title}
        ref={ref}
        {...props}
      >
        <Header
          title={title}
          onCancel={onCancel}
          closeButtonAriaLabel={closeButtonAriaLabel}
        />
        <Body>{children}</Body>
        <Footer>
          <Button variant="secondary" onClick={onCancel}>
            {cancelTitle}
          </Button>
          <Button onClick={onSubmit} variant="validated">
            {submitTitle}
          </Button>
        </Footer>
      </Modal>
    );
  },
);

BooleanModal.displayName = "BooleanModal";
export { BooleanModal };
