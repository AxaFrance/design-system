import "@axa-fr/canopee-css/client/Message/MessageLF.css";
import { Icon } from "../Icon/IconLF";
import { MessageCommon, type MessageProps } from "./MessageCommon";

export { messageVariants } from "./constants";
export type { MessageVariants } from "./types";

export const Message = (props: MessageProps) => (
  <MessageCommon {...props} IconComponent={Icon} />
);
