import "@axa-fr/design-system-apollo-css/dist/Message/MessageLF.scss";
import { Icon } from "../indexLF";
import { MessageCommon, type MessageProps } from "./MessageCommon";

export { messageVariants, type MessageVariants } from "./MessageCommon";

export const Message = (props: MessageProps) => (
  <MessageCommon {...props} IconComponent={Icon} />
);
