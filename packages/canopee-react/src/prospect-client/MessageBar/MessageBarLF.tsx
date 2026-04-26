import "@axa-fr/canopee-css/client/MessageBar/MessageBarLF.css";
import { Icon } from "../Icon/IconLF";
import { accountBalanceWalletIcon } from "./constants";
import { MessageBarCommon, type MessageBarProps } from "./MessageBarCommon";

export { messageBarVariants } from "./constants";
export type { MessageBarProps } from "./MessageBarCommon";
export type { MessageBarVariant } from "./types";

export const MessageBar = (props: MessageBarProps) => (
  <MessageBarCommon
    {...props}
    IconComponent={Icon}
    defaultIcon={accountBalanceWalletIcon}
  />
);
