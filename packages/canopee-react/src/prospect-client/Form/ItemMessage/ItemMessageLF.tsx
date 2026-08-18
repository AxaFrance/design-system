import "@axa-fr/canopee-css/client/Form/ItemMessage/ItemMessageLF.css";
import { Icon } from "../../Icon/IconLF";
import {
  ItemMessage as ItemMessageCommon,
  type ItemMessageProps,
} from "./ItemMessageCommon";

export const ItemMessage = (props: ItemMessageProps) => (
  <ItemMessageCommon {...props} IconComponent={Icon} />
);

export {
  itemMessageVariants,
  type ItemMessageVariants,
} from "./ItemMessageCommon";
