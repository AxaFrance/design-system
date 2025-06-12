import React, { forwardRef } from "react";
import { ModalCore, type ModalCoreProps } from "./ModalCore";
import { Button } from "../Button/Button";
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

/** @deprecated Use Modal from \@axa-fr/design-system-apollo-react/lf instead */
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
          <Button
            variant="secondary"
            onClick={onCancel}
            disabled={cancelDisabled}
          >
            {cancelTitle}
          </Button>
        )}
        {onSubmit && submitTitle && (
          <Button
            variant="primary"
            onClick={onSubmit}
            disabled={submitDisabled}
          >
            {submitTitle}
          </Button>
        )}
      </ModalCoreFooter>
    </ModalCore>
  ),
);

Modal.displayName = "Modal";
export { Modal };
