import type { ComponentType, MouseEventHandler } from "react";
import type { ClickItemStates, ClickItemVariants } from "./ClickItemCommon";
import type { ClickItemContentProps } from "./components/ClickItemContentCommon";
import type { ClickItemPrefixProps } from "./components/ClickItemPrefixCommon";
import type { ClickItemSuffixProps } from "./components/ClickItemSuffixCommon";

export type ClickItemProps = {
  /** @default "default" */
  state?: ClickItemStates;
  /** @default "large" */
  variant?: ClickItemVariants;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  ariaLabelForActionIcon?: string;
} & ClickItemContentProps &
  Omit<ClickItemPrefixProps, "state" | "variant">;

export type ClickItemPropsCommon = ClickItemProps & {
  ClickItemContentComponent: ComponentType<ClickItemContentProps>;
  ClickItemSuffixComponent: ComponentType<ClickItemSuffixProps>;
  ClickItemPrefixComponent: ComponentType<ClickItemPrefixProps>;
};
