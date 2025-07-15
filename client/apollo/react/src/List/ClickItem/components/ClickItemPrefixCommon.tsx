import { ComponentProps, ComponentType } from "react";
import { BasePicture } from "../../../BasePicture/BasePictureCommon";
import type { IconProps } from "../../../Icon/IconCommon";
import { ClickItemStates, ClickItemVariants } from "../ClickItemCommon";

export type ClickItemPrefixProps = {
  state: ClickItemStates;
  variant: ClickItemVariants;
  icon?: string;
  basePictureProps?: ComponentProps<typeof BasePicture>;
};

export type ClickItemPrefixCommonProps = ClickItemPrefixProps & {
  IconComponent: ComponentType<IconProps>;
  BasePictureComponent: ComponentType<ComponentProps<typeof BasePicture>>;
};

export const ClickItemPrefixCommon = ({
  state,
  variant,
  icon,
  basePictureProps,
  IconComponent,
  BasePictureComponent,
}: ClickItemPrefixCommonProps) => {
  if (!(Boolean(basePictureProps) && variant === "agent") && !icon) {
    return null;
  }

  if (Boolean(basePictureProps) && variant === "agent") {
    return <BasePictureComponent {...basePictureProps} />;
  }

  return (
    <IconComponent
      role="presentation"
      src={icon ?? ""}
      variant={
        state === "disabled" && variant !== "small" ? "disabled" : "primary"
      }
    />
  );
};
