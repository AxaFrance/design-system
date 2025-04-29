import type { ComponentProps, ComponentType } from "react";
import type { Icon } from "../../../indexLF";
import type { CheckboxProps } from "../checkbox/CheckboxCommon";

export type CheckboxComponent = {
  CheckboxComponent: ComponentType<CheckboxProps>;
};

export type IconComponent = {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};
