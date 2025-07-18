import "@axa-fr/design-system-apollo-css/dist/List/ClickItem/ClickItemApollo.scss";
import { ClickItemCommon } from "./ClickItemCommon";
import type { ClickItemProps } from "./types";
import { ClickItemContent } from "./components/ClickItemContentApollo";
import { ClickItemSuffix } from "./components/ClickItemSuffixApollo";
import { ClickItemPrefix } from "./components/ClickItemPrefixApollo";

export const ClickItem = (props: ClickItemProps) => (
  <ClickItemCommon
    ClickItemContentComponent={ClickItemContent}
    ClickItemSuffixComponent={ClickItemSuffix}
    ClickItemPrefixComponent={ClickItemPrefix}
    {...props}
  />
);

export {
  clickItemStates,
  type ClickItemStates,
  clickItemVariants,
  type ClickItemVariants,
} from "./ClickItemCommon";
