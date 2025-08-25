import { Icon } from "../../../Icon/IconApollo";
import {
  ClickItemPrefixCommon,
  type ClickItemPrefixProps,
} from "./ClickItemPrefixCommon";

export const ClickItemPrefix = (props: ClickItemPrefixProps) => (
  <ClickItemPrefixCommon {...props} IconComponent={Icon} />
);
