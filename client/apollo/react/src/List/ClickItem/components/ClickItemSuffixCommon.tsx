import { ComponentProps, ComponentType, type MouseEvent } from "react";
import keyboardArrowRight from "@material-symbols/svg-400/rounded/keyboard_arrow_right-fill.svg";
import type { IconProps } from "../../../Icon/IconCommon";
import { ClickItemStates, ClickItemVariants } from "../ClickItemCommon";
import { Spinner } from "../../../Spinner/SpinnerCommon";
import type { ClickIconProps } from "../../../ClickIcon/ClickIconCommon";

export type ClickItemSuffixProps = {
  state: ClickItemStates;
  variant: ClickItemVariants;
  ariaLabelForActionIcon?: string;
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
  ariaLabelForActionIcon,
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
        aria-label={ariaLabelForActionIcon}
        disabled={state === "disabled"}
        onClick={onClick}
      />
    );
  }
  if (variant === "small") {
    return (
      <IconComponent
        src={keyboardArrowRight}
        aria-label={ariaLabelForActionIcon}
      />
    );
  }
  if (variant === "agent") {
    return (
      <ClickIconComponent
        src={trailingClickIcon}
        aria-label={ariaLabelForActionIcon}
        onClick={onClick}
      />
    );
  }
  return null;
};
