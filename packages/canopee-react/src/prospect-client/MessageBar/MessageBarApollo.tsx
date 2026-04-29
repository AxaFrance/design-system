import "@axa-fr/canopee-css/prospect/MessageBar/MessageBarApollo.css";
import { Icon } from "../Icon/IconApollo";
import { accountBalanceIcon } from "./constants";
import { MessageBarCommon, type MessageBarProps } from "./MessageBarCommon";

export { messageBarVariants } from "./constants";
export type { MessageBarProps } from "./MessageBarCommon";
export type { MessageBarVariant } from "./types";

export const MessageBar = (props: MessageBarProps) => (
  <MessageBarCommon
    {...props}
    IconComponent={Icon}
    defaultIcon={accountBalanceIcon}
  />
);
