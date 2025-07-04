import "@axa-fr/design-system-apollo-css/dist/List/ClickItem/ClickItemLF.scss";
import { ClickItemCommon } from "./ClickItemCommon";
import type { ClickItemProps } from "./types";
import { ClickItemContent } from "./components/ClickItemContentLF";
import { ClickItemSuffix } from "./components/ClickItemSuffixLF";
import { ClickItemPrefix } from "./components/ClickItemPrefixLF";

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
