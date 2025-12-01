import { forwardRef } from "react";
import { ModalCore, type ModalCoreProps } from "./components/ModalCore";
import {
  ModalCoreBody,
  type ModalCoreBodyProps,
} from "./components/ModalCoreBody";
import {
  ModalCoreFooterCommon,
  type ModalCoreFooterCommonProps,
  type ModalCoreFooterContainerProps,
} from "./components/ModalCoreFooterCommon";
import type {
  ModalCoreHeaderCommonProps,
  ModalCoreHeaderContainerProps,
} from "./components/ModalCoreHeaderCommon";
import { ModalCoreHeaderCommon } from "./components/ModalCoreHeaderCommon";

export type ModalCommonProps = ModalCoreProps &
  Omit<
    ModalCoreHeaderCommonProps,
    Extract<keyof ModalCoreProps, keyof ModalCoreHeaderCommonProps>
  > &
  Omit<
    ModalCoreFooterCommonProps,
    Extract<keyof ModalCoreProps, keyof ModalCoreFooterCommonProps>
  > & {
    modalCoreBodyProps?: ModalCoreBodyProps;
    modalCoreFooterProps?: ModalCoreFooterContainerProps;
    modalCoreHeaderProps?: ModalCoreHeaderContainerProps;
  };

export const ModalCommon = forwardRef<HTMLDialogElement, ModalCommonProps>(
  (
    {
      children,
      headingComponent,
      headingProps,
      closeButtonAriaLabel,
      onClose,
      iconComponent,
      iconProps,
      primaryButtonProps,
      secondaryButtonProps,
      tertiaryButtonProps,
      buttonComponent,
      modalCoreBodyProps,
      modalCoreFooterProps,
      modalCoreHeaderProps,
      ...props
    },
    ref,
  ) => (
    <ModalCore onClose={onClose} ref={ref} {...props}>
      <ModalCoreHeaderCommon
        headingComponent={headingComponent}
        headingProps={headingProps}
        iconComponent={iconComponent}
        iconProps={iconProps}
        onClose={onClose}
        closeButtonAriaLabel={closeButtonAriaLabel}
        {...modalCoreHeaderProps}
      />
      <ModalCoreBody {...modalCoreBodyProps}>{children}</ModalCoreBody>
      <ModalCoreFooterCommon
        buttonComponent={buttonComponent}
        primaryButtonProps={primaryButtonProps}
        secondaryButtonProps={secondaryButtonProps}
        tertiaryButtonProps={tertiaryButtonProps}
        {...modalCoreFooterProps}
      />
    </ModalCore>
  ),
);

ModalCommon.displayName = "ModalCommon";
