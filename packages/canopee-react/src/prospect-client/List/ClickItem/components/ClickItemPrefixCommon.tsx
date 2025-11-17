import type { ComponentProps, ComponentType } from "react";
import { BasePicture } from "../../../BasePicture/BasePicture";
import type { IconProps } from "../../../Icon/IconCommon";
import type { ClickItemStates, ClickItemVariants } from "../ClickItemCommon";

export type ClickItemPrefixProps = {
  state: ClickItemStates;
  variant: ClickItemVariants;
  icon?: string;
  basePictureProps?: ComponentProps<typeof BasePicture>;
};

export type ClickItemPrefixCommonProps = ClickItemPrefixProps & {
  IconComponent: ComponentType<IconProps>;
};

export const ClickItemPrefixCommon = ({
  state,
  variant,
  icon,
  basePictureProps,
  IconComponent,
}: ClickItemPrefixCommonProps) => {
  if (!(Boolean(basePictureProps) && variant === "agent") && !icon) {
    return null;
  }

  if (Boolean(basePictureProps) && variant === "agent") {
    return <BasePicture {...basePictureProps} />;
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
