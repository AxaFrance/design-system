import type { ComponentProps, ComponentType } from "react";
import type { Icon } from "../../../indexLF";
import type { RadioProps } from "../Radio/RadioCommon";
import type { TCardRadioItemProps } from "./CardRadioItem";

export type TCardRadioItemOption = Omit<
  TCardRadioItemProps,
  "RadioComponent" | "IconComponent" | "size" | "name"
>;

export type RadioComponent = {
  RadioComponent: ComponentType<RadioProps>;
};

export type IconComponent = {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};
