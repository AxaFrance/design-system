import {
  type ComponentProps,
  type ComponentType,
  type PropsWithChildren,
  type ReactNode,
  useId,
} from "react";
import type { GridContainerProps } from "../../../utilities/types/GridContainerProps";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../../ItemMessage/ItemMessageCommon";
import { type CardRadioProps } from "../CardRadio/CardRadioCommon";

type RadioOption = Omit<CardRadioProps, "name" | "type" | "isInvalid">;

export type CardRadioGroupProps = Omit<
  CardRadioProps,
  | "value"
  | "label"
  | "type"
  | "isInvalid"
  | "icon"
  | "src"
  | "basePictureProps"
  | "description"
  | "subtitle"
  | "children"
  | "position"
> & {
  cardStyle?: CardRadioProps["position"];
  position?: "line" | "column";
  label: ReactNode;
  description?: ReactNode;
  options: RadioOption[];
  containerProps?: GridContainerProps<"fieldset">;
} & PropsWithChildren &
  Partial<ItemMessageProps>;

export type CardRadioCommonProps = CardRadioGroupProps & {
  CardRadioComponent: ComponentType<CardRadioProps>;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

const CardRadioGroupCommon = ({
  className,
  label,
  description,
  required,
  options,
  cardStyle,
  position = cardStyle === "vertical" ? "column" : "line",
  message,
  messageType = "error",
  name,
  id,
  CardRadioComponent,
  ItemMessageComponent,
  containerProps,
  ...inputProps
}: CardRadioCommonProps) => {
  const generatedId = useId();
  const cardRadioGroupId = id ?? generatedId;
  const messageId = `${cardRadioGroupId}-error`;

  const hasError = Boolean(message) && messageType === "error";

  return (
    <fieldset
      className={["af-card-radio-group", className].filter(Boolean).join(" ")}
      role="radiogroup"
      aria-required={Boolean(required) || undefined}
      aria-invalid={hasError || undefined}
      aria-errormessage={hasError ? messageId : undefined}
      id={cardRadioGroupId}
      {...containerProps}
    >
      <legend className="af-card-radio-group__legend">
        <p className="af-card-radio-group__label">
          {label}
          {required ? <span aria-hidden>*</span> : null}
        </p>

        {description ? (
          <p className="af-card-radio-group__description">{description}</p>
        ) : null}
      </legend>
      <div
        className={[
          "af-card-radio-group__options",
          `af-card-radio-group__options--${position}`,
        ].join(" ")}
      >
        {options.map((cardRadioItemProps) => (
          <CardRadioComponent
            key={`${name ?? cardRadioGroupId}-${cardRadioItemProps.label}`}
            id={`${cardRadioGroupId}-${cardRadioItemProps.value}`}
            required={required}
            position={cardStyle}
            {...inputProps}
            {...(cardRadioItemProps as CardRadioProps)}
            isInvalid={hasError}
            name={name}
          />
        ))}
      </div>
      <ItemMessageComponent
        id={messageId}
        message={message}
        messageType={messageType}
      />
    </fieldset>
  );
};

CardRadioGroupCommon.displayName = "CardRadioGroupCommon";

export { CardRadioGroupCommon };
