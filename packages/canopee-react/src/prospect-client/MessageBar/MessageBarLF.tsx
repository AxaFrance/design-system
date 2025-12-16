import "@axa-fr/canopee-css/client/MessageBar/MessageBarLF.css";
import { Icon } from "../Icon/IconLF";
import { MessageBarCommon, type MessageBarProps } from "./MessageBarCommon";

export { messageBarVariants } from "./constants";
export type { MessageBarVariants } from "./types";

export const MessageBar = (props: MessageBarProps) => (
  <MessageBarCommon {...props} IconComponent={Icon} />
);
