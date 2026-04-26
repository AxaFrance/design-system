import "@axa-fr/canopee-css/prospect/Modal/ModalApollo.css";
import { forwardRef } from "react";
import { Button } from "../Button/ButtonApollo";
import { Heading } from "../Heading/HeadingApollo";
import { ModalCommon } from "./ModalCommon";
import type { ModalProps } from "./types";

export { ModalCore, type ModalCoreProps } from "./components/ModalCore";
export {
  ModalCoreBody,
  type ModalCoreBodyProps,
} from "./components/ModalCoreBody";
export { ModalCoreFooter } from "./components/ModalCoreFooterApollo";
export { ModalCoreHeader } from "./components/ModalCoreHeaderApollo";
export type {
  ModalCoreFooterProps,
  ModalCoreHeaderProps,
  ModalProps,
} from "./types";

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ headingProps = {}, icon, iconProps, ...props }, ref) => (
    <ModalCommon
      {...props}
      ref={ref}
      headingComponent={Heading}
      headingProps={{
        ...headingProps,
        children: props.title,
        icon: headingProps.icon ?? icon,
        iconProps: headingProps.iconProps ?? iconProps,
      }}
      buttonComponent={Button}
    />
  ),
);

Modal.displayName = "Modal";
