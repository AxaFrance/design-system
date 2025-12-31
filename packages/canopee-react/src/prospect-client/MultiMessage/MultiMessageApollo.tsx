import "@axa-fr/canopee-css/prospect/MultiMessage/MultiMessageApollo.css";
import keyboardLeft from "@material-symbols/svg-400/rounded/keyboard_arrow_left-fill.svg";
import keyboardRight from "@material-symbols/svg-400/rounded/keyboard_arrow_right-fill.svg";
import { Button } from "../Button/ButtonApollo";
import { Icon } from "../Icon/IconApollo";
import { Message } from "../Message/MessageApollo";
import {
  MultiMessageCommon,
  type MultiMessageProps,
} from "./MultiMessageCommon";

export type { Notification } from "./MultiMessageCommon";

export const MultiMessage = (props: MultiMessageProps) => (
  <MultiMessageCommon
    {...props}
    MessageComponent={Message}
    ButtonComponent={Button}
    IconComponent={Icon}
    iconLeft={keyboardLeft}
    iconRight={keyboardRight}
  />
);
