import "@axa-fr/canopee-css/prospect/Toggle/ToggleApollo.css";

import { Icon } from "../Icon/IconApollo";
import { ToggleCommon, type ToggleProps } from "./ToggleCommon";

export const Toggle = ({ ...props }: ToggleProps) => (
  <ToggleCommon IconComponent={Icon} {...props} />
);
Toggle.displayName = "Toggle";
