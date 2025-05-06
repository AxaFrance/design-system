import type { ComponentType } from "react";
import type { IconProps } from "../../../Icon/IconCommon";
import type { CheckboxProps } from "../checkbox/CheckboxCommon";

export type CheckboxComponent = {
  CheckboxComponent: ComponentType<CheckboxProps>;
};

export type IconComponent = {
  IconComponent: ComponentType<IconProps>;
};
