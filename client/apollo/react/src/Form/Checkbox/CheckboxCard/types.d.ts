import type { ComponentProps, ComponentType } from "react";
import type { Icon } from "../../../indexLF";
import type { CheckboxProps } from "../Checkbox/CheckboxCommon";

export type CheckboxComponent = {
  CheckboxComponent: ComponentType<CheckboxProps>;
};

export type IconComponent = {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};
