import "@axa-fr/canopee-css/client/List/ClickItem/ClickItemLF.css";
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
