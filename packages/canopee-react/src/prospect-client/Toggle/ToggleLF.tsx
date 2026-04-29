import "@axa-fr/canopee-css/client/Toggle/ToggleLF.css";
import { forwardRef } from "react";
import { Icon } from "../Icon/IconLF";
import { ToggleCommon, type ToggleProps } from "./ToggleCommon";

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (props, ref) => <ToggleCommon IconComponent={Icon} {...props} ref={ref} />,
);
Toggle.displayName = "Toggle";
