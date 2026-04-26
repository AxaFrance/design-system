import type { HeadingProps } from "../Heading/types";
import type { IconProps } from "../Icon/IconCommon";
import type { ModalCoreFooterCommonProps } from "./components/ModalCoreFooterCommon";
import type { ModalCoreHeaderCommonProps } from "./components/ModalCoreHeaderCommon";
import type { ModalCommonProps } from "./ModalCommon";

export type ModalCoreHeaderProps = Omit<
  ModalCoreHeaderCommonProps,
  "headingComponent" | "iconComponent"
>;

export type ModalCoreFooterProps = Omit<
  ModalCoreFooterCommonProps,
  "buttonComponent"
>;

export type ModalProps = Omit<
  ModalCommonProps,
  | "headingComponent"
  | "headingProps"
  | "iconComponent"
  | "iconProps"
  | "buttonComponent"
> & {
  headingProps?: Omit<HeadingProps, "children">;
  /**
   * Icon displayed alongside the title. Internally rendered by the Heading
   * molecule, equivalent to passing `headingProps.icon`.
   */
  icon?: string;
  /**
   * Props forwarded to the icon rendered by the Heading molecule.
   * Equivalent to passing `headingProps.iconProps`.
   */
  iconProps?: Omit<IconProps, "src">;
};
