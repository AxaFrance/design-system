import "@axa-fr/canopee-css/prospect/MultiMessage/MultiMessageApollo.css";
import { Icon } from "../Icon/IconApollo";
import {
  MultiMessageCommon,
  type MultiMessageProps,
} from "./MultiMessageCommon";

export {
  messageVariants,
  type MessageVariants,
} from "../Message/MessageApollo";
export type { MultiMessageItem } from "./types";

export const MultiMessage = (props: MultiMessageProps) => (
  <MultiMessageCommon {...props} IconComponent={Icon} />
);
