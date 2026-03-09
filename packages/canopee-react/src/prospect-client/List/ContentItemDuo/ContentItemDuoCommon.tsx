import { type ComponentProps, type ComponentType, type ReactNode } from "react";
import type { ButtonProps } from "../../Button/ButtonCommon";
import { getClassName } from "../../utilities/getClassName";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../../Form/ItemMessage/ItemMessageCommon";

type ContentItemDuoPositions =
  | {
      position?: "horizontal";
      size?: "small" | "large";
    }
  | {
      size?: "large";
      position: "vertical";
    };

export type ContentItemDuoProps = {
  label: ReactNode;
  value: ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  /** @deprecated Use `position` instead */
  isVertical?: boolean;
  /** @deprecated Use `size` or `className` instead */
  classModifier?: string;
  message?: string;
  messageType?: ItemMessageProps["messageType"];
} & ContentItemDuoPositions &
  ComponentProps<"div">;

type ContentItemDuoCommonProps = ContentItemDuoProps & {
  ButtonComponent: ComponentType<ButtonProps>;
};

export const ContentItemDuoCommon = ({
  label,
  value,
  position = "horizontal",
  size = "large",
  className,
  classModifier,
  isVertical,
  buttonText,
  onButtonClick,
  ButtonComponent,
  message,
  messageType = "warning",
  ...containerProps
}: ContentItemDuoCommonProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-content-item-duo",
    className,
    modifiers: [
      isVertical ? "vertical" : position,
      size === "small" && size,
      classModifier,
    ],
  });

  return (
    <div className={componentClassName} {...containerProps}>
      <dt className="af-content-item-duo__label">{label}</dt>
      <dd className="af-content-item-duo__value">
        {value}
        {message ? (
          <ItemMessage message={message} messageType={messageType} />
        ) : null}
      </dd>
      {buttonText && onButtonClick ? (
        <ButtonComponent
          className="af-content-item-duo__button"
          variant="ghost"
          onClick={onButtonClick}
        >
          {buttonText}
        </ButtonComponent>
      ) : null}
    </div>
  );
};
