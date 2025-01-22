import React, { forwardRef } from "react";
import { ModalCore, type ModalCoreProps } from "./ModalCore";
import { ButtonClient, Variants as ButtonVariants } from "../Button/Button";
import {
  ModalCoreHeader,
  type ModalCoreHeaderProps,
} from "./components/ModalCoreHeader";
import { ModalCoreBody } from "./components/ModalCoreBody";
import { ModalCoreFooter } from "./components/ModalCoreFooter";

export type ModalProps = Omit<ModalCoreProps, "onOutsideTap" | "title"> &
  ModalCoreHeaderProps & {
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
  ) => (
    <ModalCore
      className={className}
      onOutsideTap={onCancel}
      title={title}
      ref={ref}
      {...props}
    >
      <ModalCoreHeader
        title={title}
        subtitle={subtitle}
        iconTitle={iconTitle}
        levelTitle={levelTitle}
        onCancel={onCancel}
        closeButtonAriaLabel={closeButtonAriaLabel}
      />
      <ModalCoreBody>{children}</ModalCoreBody>
      <ModalCoreFooter>
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
      </ModalCoreFooter>
    </ModalCore>
  ),
);

Modal.displayName = "Modal";
export { Modal };
