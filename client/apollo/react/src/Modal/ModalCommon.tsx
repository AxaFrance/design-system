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
      title,
      className,
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
    <ModalCore
      className={className}
      onClose={onClose}
      title={title}
      ref={ref}
      {...props}
    >
      <ModalCoreHeaderCommon
        headingComponent={headingComponent}
        headingProps={headingProps}
        iconComponent={iconComponent}
        iconProps={iconProps}
        onClose={onClose as VoidFunction}
        closeButtonAriaLabel={closeButtonAriaLabel}
        {...modalCoreHeaderProps}
      />
      <ModalCoreBody {...modalCoreBodyProps}>{children}</ModalCoreBody>
      <ModalCoreFooterCommon
        {...{
          ...modalCoreFooterProps,
          buttonComponent,
          primaryButtonProps,
          secondaryButtonProps,
          tertiaryButtonProps,
        }}
      />
    </ModalCore>
  ),
);

ModalCommon.displayName = "ModalCommon";
