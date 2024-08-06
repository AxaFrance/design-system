import checkIcon from "@material-symbols/svg-400/outlined/check.svg";
import closeIcon from "@material-symbols/svg-400/outlined/close.svg";
import { useMemo } from "react";
import { Variants } from "../../Button/Button.client";
import { getComponentClassName } from "../../Form/core";
import { Button, Svg } from "../../client";

type ContentItemDuoProps = {
  label: string;
  value: string;
  isVertical?: boolean;
  className?: string;
  classModifier?: string;
  isShowingDoneIcon?: boolean;
  isShowingCloseIcon?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
};

export const ContentItemDuo = ({
  label,
  value,
  isVertical = false,
  className,
  classModifier,
  isShowingDoneIcon = false,
  isShowingCloseIcon = false,
  buttonText,
  onButtonClick,
}: ContentItemDuoProps) => {
  const componentClassName = useMemo(() => {
    let newClassModifier = classModifier ?? "";

    if (isVertical) {
      newClassModifier += " vertical";
    }

    return getComponentClassName(
      className,
      newClassModifier,
      "af-content-item-duo",
    );
  }, [classModifier, className, isVertical]);

  const iconContainerModifier = useMemo(
    () =>
      isShowingDoneIcon
        ? " af-content-item-duo__icon--done"
        : " af-content-item-duo__icon--close",
    [isShowingDoneIcon],
  );

  return (
    <div className={componentClassName}>
      {(isShowingDoneIcon || isShowingCloseIcon) && (
        <div className={`af-content-item-duo__icon${iconContainerModifier}`}>
          {isShowingDoneIcon && <Svg src={checkIcon} />}
          {isShowingCloseIcon && <Svg src={closeIcon} />}
        </div>
      )}
      <p className="af-content-item-duo__label">{label}</p>
      <p className="af-content-item-duo__value">{value}</p>
      {buttonText && (
        <div className="af-content-item-duo__button">
          <Button variant={Variants.ghost} onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};
