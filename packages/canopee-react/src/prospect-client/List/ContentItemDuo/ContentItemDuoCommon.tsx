import { type ComponentProps, type ComponentType, type ReactNode } from "react";
import type { ButtonProps } from "../../Button/ButtonCommon";
import { getClassName } from "../../utilities/getClassName";
import { type ItemMessageProps } from "../../Form/ItemMessage/ItemMessage";

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
} & Pick<ItemMessageProps, "message" | "messageType"> &
  ContentItemDuoPositions &
  ComponentProps<"div">;

type ContentItemDuoCommonProps = ContentItemDuoProps & {
  ButtonComponent: ComponentType<ButtonProps>;
  ItemMessageComponent: ComponentType<ItemMessageProps>;
};

export const ContentItemDuoCommon = ({
  label,
  value,
  position = "horizontal",
  size = "large",
  className,
  buttonText,
  onButtonClick,
  ButtonComponent,
  message,
  messageType,
  ItemMessageComponent,
  ...containerProps
}: ContentItemDuoCommonProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-content-item-duo",
    className,
    modifiers: [position, size === "small" && size],
  });

  return (
    <div className={componentClassName} {...containerProps}>
      <dt className="af-content-item-duo__label">{label}</dt>
      <dd className="af-content-item-duo__value">
        {value}
        {message ? (
          <ItemMessageComponent message={message} messageType={messageType} />
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
