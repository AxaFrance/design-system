import checkIcon from "@material-symbols/svg-400/outlined/check.svg";
import closeIcon from "@material-symbols/svg-400/outlined/close.svg";
import { useMemo, type ReactNode } from "react";
import { Button, Svg } from "../..";
import { getComponentClassName } from "../../utilities";

type ContentItemDuoProps = {
  label: string;
  value: ReactNode;
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
    const classModifiers = [classModifier];

    if (isVertical) {
      classModifiers.push("vertical");
    }

    return getComponentClassName(
      "af-content-item-duo",
      className,
      classModifiers.filter(Boolean).join(" "),
    );
  }, [classModifier, className, isVertical]);

  const iconContainerModifier = useMemo(
    () => ` af-content-item-duo__icon--${isShowingDoneIcon ? "done" : "close"}`,
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
      {typeof value === "string" ? (
        <p className="af-content-item-duo__value">{value}</p>
      ) : (
        <div className="af-content-item-duo__value">{value}</div>
      )}
      {buttonText && (
        <div className="af-content-item-duo__button">
          <Button variant="ghost" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};
