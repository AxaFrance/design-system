import "@axa-fr/canopee-css/prospect/Message/MessageApollo.css";
import { Icon } from "../Icon/IconApollo";
import { MessageCommon, type MessageProps } from "./MessageCommon";

export { messageVariants } from "./constants";
export type { MessageVariants } from "./types";

export const Message = (props: MessageProps) => (
  <MessageCommon {...props} IconComponent={Icon} />
);
