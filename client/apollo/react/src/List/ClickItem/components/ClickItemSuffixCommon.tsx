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
  if (variant === "large" && state === "loading") {
    return <SpinnerComponent size={32} />;
  }

  if (variant === "small") {
    return <IconComponent src={keyboardArrowRight} role="presentation" />;
  }

  const isDisabled = variant === "large" && state === "disabled";
  return (
    <div
      className={["af-click-icon", isDisabled && "af-click-icon--disabled"]
        .filter(Boolean)
        .join(" ")}
    >
      <IconComponent
        src={trailingClickIcon}
        role="presentation"
        variant={isDisabled ? "disabled" : "primary"}
      />
    </div>
  );
};
