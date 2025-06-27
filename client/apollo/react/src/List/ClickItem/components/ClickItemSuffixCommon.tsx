import { ComponentProps, ComponentType, type MouseEvent } from "react";
import keyboardArrowRight from "@material-symbols/svg-400/rounded/keyboard_arrow_right-fill.svg";
import type { IconProps } from "../../../Icon/IconCommon";
import { ClickItemStates, ClickItemVariants } from "../ClickItemCommon";
import { Spinner } from "../../../Spinner/SpinnerCommon";
import type { ClickIconProps } from "../../../ClickIcon/ClickIconCommon";

export type ClickItemSuffixProps = {
  state: ClickItemStates;
  variant: ClickItemVariants;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type ClickItemSuffixCommonProps = ClickItemSuffixProps & {
  trailingClickIcon: string;
  IconComponent: ComponentType<IconProps>;
  SpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
  ClickIconComponent: ComponentType<ClickIconProps>;
};

export const ClickItemSuffixCommon = ({
  state,
  variant,
  trailingClickIcon,
  onClick,
  IconComponent,
  SpinnerComponent,
  ClickIconComponent,
}: ClickItemSuffixCommonProps) => {
  if (variant === "large") {
    return state === "loading" ? (
      <SpinnerComponent size={32} />
    ) : (
      <ClickIconComponent
        src={trailingClickIcon}
        disabled={state === "disabled"}
        onClick={onClick}
      />
    );
  }
  if (variant === "small") {
    return <IconComponent src={keyboardArrowRight} />;
  }
  if (variant === "agent") {
    return <ClickIconComponent src={trailingClickIcon} onClick={onClick} />;
  }
  return null;
};
