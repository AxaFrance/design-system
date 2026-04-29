import type { HeadingProps } from "../Heading/types";
import type { IconProps } from "../Icon/IconCommon";
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
  /**
   * @deprecated Pass `icon` inside `headingProps` instead
   * (e.g. `headingProps={{ icon }}`). The top-level `icon` prop is
   * forwarded to the Heading molecule for backward compatibility and will
   * be removed in 2.0.0.
   */
  icon?: string;
  /**
   * @deprecated Pass `iconProps` inside `headingProps` instead
   * (e.g. `headingProps={{ iconProps }}`). The top-level `iconProps`
   * is forwarded to the Heading molecule for backward compatibility and
   * will be removed in 2.0.0.
   */
  iconProps?: Omit<IconProps, "src">;
};
