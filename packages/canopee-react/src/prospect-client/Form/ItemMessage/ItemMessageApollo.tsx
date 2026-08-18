import "@axa-fr/canopee-css/prospect/Form/ItemMessage/ItemMessageApollo.css";
import { Icon } from "../../Icon/IconApollo";
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
