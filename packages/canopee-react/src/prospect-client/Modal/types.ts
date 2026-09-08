import type { HeadingProps } from "../Heading/types";
import type { ModalCoreFooterCommonProps } from "./components/ModalCoreFooterCommon";
import type { ModalCoreHeaderCommonProps } from "./components/ModalCoreHeaderCommon";
import type { ModalCommonProps } from "./ModalCommon";

export type ModalCoreHeaderProps = Omit<
  ModalCoreHeaderCommonProps,
  "headingComponent"
>;

export type ModalCoreFooterProps = Omit<
  ModalCoreFooterCommonProps,
  "buttonComponent"
>;

export type ModalProps = Omit<
  ModalCommonProps,
  "headingComponent" | "headingProps" | "iconProps" | "buttonComponent"
> & {
  headingProps?: Omit<HeadingProps, "children">;
};
