import "@axa-fr/design-system-apollo-css/dist/Message/MessageApollo.scss";
import { Icon } from "..";
import { MessageCommon, type MessageProps } from "./MessageCommon";

export { messageVariants, type MessageVariants } from "./MessageCommon";

export const Message = (props: MessageProps) => (
  <MessageCommon {...props} IconComponent={Icon} />
);
