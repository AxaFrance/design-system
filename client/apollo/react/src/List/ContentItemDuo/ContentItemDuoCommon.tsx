import {
  type ComponentProps,
  type ComponentType,
  type ReactNode,
  useMemo,
} from "react";
import type { ButtonProps } from "../../Button/ButtonCommon";
import { getComponentClassName } from "../../utilities/getComponentClassName";

export type ContentItemDuoProps = {
  label: string;
  value: ReactNode;
  isVertical?: boolean;
  className?: string;
  classModifier?: string;
  buttonText?: string;
  onButtonClick?: () => void;
} & ComponentProps<"div">;

type ContentItemDuoCommonProps = ContentItemDuoProps & {
  ButtonComponent: ComponentType<ButtonProps>;
};

export const ContentItemDuoCommon = ({
  label,
  value,
  isVertical = false,
  className,
  classModifier,
  buttonText,
  onButtonClick,
  ButtonComponent,
  ...containerProps
}: ContentItemDuoCommonProps) => {
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

  return (
    <div className={componentClassName} {...containerProps}>
      <p className="af-content-item-duo__label">{label}</p>
      {typeof value === "string" ? (
        <p className="af-content-item-duo__value">{value}</p>
      ) : (
        <div className="af-content-item-duo__value">{value}</div>
      )}
      {buttonText ? (
        <div className="af-content-item-duo__button">
          <ButtonComponent variant="ghost" onClick={onButtonClick}>
            {buttonText}
          </ButtonComponent>
        </div>
      ) : null}
    </div>
  );
};
