import { Icon } from "../../../Icon/IconLF";
import {
  ClickItemPrefixCommon,
  type ClickItemPrefixProps,
} from "./ClickItemPrefixCommon";

export const ClickItemPrefix = (props: ClickItemPrefixProps) => (
  <ClickItemPrefixCommon {...props} IconComponent={Icon} />
);
