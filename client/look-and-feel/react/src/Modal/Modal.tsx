import React, { forwardRef } from "react";
import { ModalCore, type ModalCoreProps } from "./ModalCore";
import { ButtonClient, Variants as ButtonVariants } from "../Button/Button";
import type { HeaderProps } from "./components/Header";

export type ModalProps = Omit<ModalCoreProps, "onOutsideTap" | "title"> &
  HeaderProps & {
    onSubmit?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    submitTitle?: string;
    cancelTitle?: string;
    submitDisabled?: boolean;
    cancelDisabled?: boolean;
  };

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      children,
      title,
      submitTitle,
      cancelTitle,
      className,
      onCancel,
      onSubmit,
      closeButtonAriaLabel,
      cancelDisabled,
      submitDisabled,
      subtitle,
      iconTitle,
      levelTitle,
      ...props
    },
    ref,
  ) => {
    return (
      <ModalCore
        className={className}
        onOutsideTap={onCancel}
        title={title}
        ref={ref}
        {...props}
      >
        <ModalCore.Header
          title={title}
          subtitle={subtitle}
          iconTitle={iconTitle}
          levelTitle={levelTitle}
          onCancel={onCancel}
          closeButtonAriaLabel={closeButtonAriaLabel}
        />
        <ModalCore.Body>{children}</ModalCore.Body>
        <ModalCore.Footer>
          {onCancel && cancelTitle && (
            <ButtonClient
              variant={ButtonVariants.secondary}
              onClick={onCancel}
              disabled={cancelDisabled}
            >
              {cancelTitle}
            </ButtonClient>
          )}
          {onSubmit && submitTitle && (
            <ButtonClient
              variant={ButtonVariants.primary}
              onClick={onSubmit}
              disabled={submitDisabled}
            >
              {submitTitle}
            </ButtonClient>
          )}
        </ModalCore.Footer>
      </ModalCore>
    );
  },
);

Modal.displayName = "Modal";
export { Modal };
