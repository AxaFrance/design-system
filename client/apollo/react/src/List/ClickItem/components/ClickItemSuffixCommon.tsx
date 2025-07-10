import { ComponentProps, ComponentType } from "react";
import keyboardArrowRight from "@material-symbols/svg-400/rounded/keyboard_arrow_right-fill.svg";
import type { IconProps } from "../../../Icon/IconCommon";
import { ClickItemStates, ClickItemVariants } from "../ClickItemCommon";
import { Spinner } from "../../../Spinner/SpinnerCommon";

export type ClickItemSuffixProps = {
  state: ClickItemStates;
  variant: ClickItemVariants;
};

export type ClickItemSuffixCommonProps = ClickItemSuffixProps & {
  trailingClickIcon: string;
  IconComponent: ComponentType<IconProps>;
  SpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
};

export const ClickItemSuffixCommon = ({
  state,
  variant,
  trailingClickIcon,
  IconComponent,
  SpinnerComponent,
}: ClickItemSuffixCommonProps) => {
  if (variant === "large") {
    return state === "loading" ? (
      <SpinnerComponent size={32} />
    ) : (
      <div className="af-click-icon">
        <IconComponent
          src={trailingClickIcon}
          role="presentation"
          variant={state === "disabled" ? "disabled" : "primary"}
        />
      </div>
    );
  }

  if (variant === "small") {
    return <IconComponent src={keyboardArrowRight} role="presentation" />;
  }

  if (variant === "agent") {
    return (
      <div className="af-click-icon">
        <IconComponent src={trailingClickIcon} role="presentation" />
      </div>
    );
  }
  return null;
};
