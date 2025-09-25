import "@axa-fr/design-system-apollo-css/dist/Message/MessageApollo.css";
import { Icon } from "..";
import { MessageCommon, type MessageProps } from "./MessageCommon";

export { messageVariants } from "./constants";
export type { MessageVariants } from "./types";

export const Message = (props: MessageProps) => (
  <MessageCommon {...props} IconComponent={Icon} />
);
