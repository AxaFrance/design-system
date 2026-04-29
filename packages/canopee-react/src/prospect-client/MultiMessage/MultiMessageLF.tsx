import "@axa-fr/canopee-css/client/MultiMessage/MultiMessageLF.css";
import { Icon } from "../Icon/IconLF";
import {
  MultiMessageCommon,
  type MultiMessageProps,
} from "./MultiMessageCommon";

export { messageVariants, type MessageVariants } from "../Message/MessageLF";
export type { MultiMessageItem } from "./types";

export const MultiMessage = (props: MultiMessageProps) => (
  <MultiMessageCommon {...props} IconComponent={Icon} />
);
