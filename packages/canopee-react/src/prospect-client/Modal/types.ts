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
   * @deprecated Use the Heading atom at the consumer level instead.
   * The icon slot in Modal will be removed in the next major version (2.0.0).
   */
  icon?: string;
  /**
   * @deprecated Use the Heading atom at the consumer level instead.
   * The icon slot in Modal will be removed in the next major version (2.0.0).
   */
  iconProps?: Omit<IconProps, "src">;
};
