import "@axa-fr/canopee-css/prospect/MessageBar/MessageBarApollo.css";
import { Icon } from "../Icon/IconApollo";
import { MessageBarCommon, type MessageBarProps } from "./MessageBarCommon";

export { messageBarVariants } from "./constants";
export type { MessageBarVariants } from "./types";

export const MessageBar = (props: MessageBarProps) => (
  <MessageBarCommon {...props} IconComponent={Icon} />
);
