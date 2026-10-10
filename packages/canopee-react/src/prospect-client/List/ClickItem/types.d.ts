import type {
  ComponentType,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
} from "react";
import type { ClickItemStates, ClickItemVariants } from "./ClickItemCommon";
import type {
  ClickItemContentComponentProps,
  ClickItemContentProps,
} from "./components/ClickItemContentCommon";
import type { ClickItemPrefixProps } from "./components/ClickItemPrefixCommon";
import type { ClickItemSuffixProps } from "./components/ClickItemSuffixCommon";

export type ClickItemProps = {
  /** @default "default" */
  state?: ClickItemStates;
  /** @default "large" */
  variant?: ClickItemVariants;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  /** Renders the item as a link (`<a href>`) instead of a button */
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  /**
   * Describes the action, e.g. "Aller à la page de détails". It is read
   * after the title, which stays the accessible name of the item.
   */
  ariaLabelForActionIcon?: string;
} & ClickItemContentProps &
  Omit<ClickItemPrefixProps, "state" | "variant">;

export type ClickItemPropsCommon = ClickItemProps & {
  ClickItemContentComponent: ComponentType<ClickItemContentComponentProps>;
  ClickItemSuffixComponent: ComponentType<ClickItemSuffixProps>;
  ClickItemPrefixComponent: ComponentType<ClickItemPrefixProps>;
};
