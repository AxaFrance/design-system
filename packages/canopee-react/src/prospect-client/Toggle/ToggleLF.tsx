import "@axa-fr/canopee-css/client/Toggle/ToggleLF.css";
import { Icon } from "../Icon/IconLF";
import { ToggleCommon, type ToggleProps } from "./ToggleCommon";

export const Toggle = ({ ...props }: ToggleProps) => (
  <ToggleCommon IconComponent={Icon} {...props} />
);
Toggle.displayName = "Toggle";
