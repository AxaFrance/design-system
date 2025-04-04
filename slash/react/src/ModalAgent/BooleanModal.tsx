import React, { forwardRef, type ReactNode, type Ref } from "react";
import { Button, Modal, getComponentClassName } from "..";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header, type HeaderProps } from "./components/Header";

const defaultClassName = "af-modal";

export type BooleanModalProps = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> &
  HeaderProps & {
    onSubmit: (event: React.MouseEvent | React.KeyboardEvent) => void;
    onCancel: (event: React.MouseEvent | React.KeyboardEvent) => void;
    id: string;
    children: ReactNode;
    submitTitle?: string;
    cancelTitle?: string;
    className?: string;
    classModifier?: string;
    ref?: Ref<HTMLDialogElement>;
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
          <Button classModifier="reverse" onClick={onCancel}>
            {cancelTitle}
          </Button>
          <Button onClick={onSubmit}>{submitTitle}</Button>
        </Footer>
      </Modal>
    );
  },
);

BooleanModal.displayName = "BooleanModal";
export { BooleanModal };
