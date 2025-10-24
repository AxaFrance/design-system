import type { ComponentProps, ComponentType } from "react";
import { Icon, Radio } from "@axa-fr/design-system-apollo-react/lf";
import type { TCardRadioItemProps } from "./CardRadioItem";

export type TCardRadioItemOption = Omit<
  TCardRadioItemProps,
  "RadioComponent" | "IconComponent" | "size" | "name"
>;

export type RadioComponent = {
  RadioComponent: ComponentType<ComponentProps<typeof Radio>>;
};

export type IconComponent = {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};
