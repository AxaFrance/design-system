import "@axa-fr/canopee-css/client/Modal/ModalLF.css";
import { Button } from "../Button/ButtonLF";
import { Heading } from "../Heading/HeadingLF";
import { ModalCommon } from "./ModalCommon";
import type { ModalProps } from "./types";

export { ModalCore, type ModalCoreProps } from "./components/ModalCore";
export {
  ModalCoreBody,
  type ModalCoreBodyProps,
} from "./components/ModalCoreBody";
export { ModalCoreFooter } from "./components/ModalCoreFooterLF";
export { ModalCoreHeader } from "./components/ModalCoreHeaderLF";
export type {
  ModalCoreFooterProps,
  ModalCoreHeaderProps,
  ModalProps,
} from "./types";

export const Modal = ({ headingProps = {}, ...props }: ModalProps) => (
  <ModalCommon
    {...props}
    headingComponent={Heading}
    headingProps={{
      ...headingProps,
      children: props.title,
    }}
    buttonComponent={Button}
  />
);

Modal.displayName = "Modal";
