import { ComponentType } from "react";
import type { ClickItemContentProps } from "./ClickItemContent/ClickItemContentCommon";
import { ClickItemStates, ClickItemVariants } from "./ClickItemCommon";
import { ClickItemPrefixProps } from "./components/ClickItemPrefixCommon";
import { ClickItemSuffixProps } from "./components/ClickItemSuffixCommon";

export type ClickItemProps = {
  state: ClickItemStates;
  variant: ClickItemVariants;
  className?: string;
} & ClickItemContentProps &
  ClickItemPrefixProps &
  ClickItemSuffixProps;

export type ClickItemPropsCommon = ClickItemProps & {
  ClickItemContentComponent: ComponentType<ClickItemContentProps>;
  ClickItemSuffixComponent: ComponentType<ClickItemSuffixProps>;
  ClickItemPrefixComponent: ComponentType<ClickItemPrefixProps>;
};
