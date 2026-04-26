import "@axa-fr/canopee-css/prospect/MessageBar/MessageBarApollo.css";
import { Button } from "../Button/ButtonApollo";
import { ClickIcon } from "../ClickIcon/ClickIconApollo";
import { Icon } from "../Icon/IconApollo";
import { MessageBarCommon, type MessageBarProps } from "./MessageBarCommon";

export type { MessageBarProps } from "./MessageBarCommon";
export type { MessageBarVariant } from "./types";

export const MessageBar = (props: MessageBarProps) => (
  <MessageBarCommon
    {...props}
    ButtonComponent={Button}
    ClickIconComponent={ClickIcon}
    IconComponent={Icon}
  />
);
