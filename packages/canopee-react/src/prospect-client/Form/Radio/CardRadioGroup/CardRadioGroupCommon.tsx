import {
  type ComponentProps,
  type ComponentType,
  type PropsWithChildren,
  type ReactNode,
  useId,
} from "react";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../../ItemMessage/ItemMessageCommon";
import { type CardRadioOptionProps } from "../CardRadioOption/CardRadioOptionCommon";

type RadioOption = Omit<CardRadioOptionProps, "name" | "type" | "isInvalid">;

export type CardRadioGroupProps = Omit<
  CardRadioOptionProps,
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
> & {
  type?: "vertical" | "horizontal";
  /**
   * @deprecated Use `label` instead.
   */
  labelGroup?: string;
  /**
   * @deprecated Use `description` instead.
   */
  descriptionGroup?: string;
  label: ReactNode;
  description?: ReactNode;
  /**
   * @deprecated Use `required` instead.
   */
  isRequired?: boolean;
  /**
   * @deprecated This prop is deprecated. To check an option, use the `checked` property in each item of the `options` array.
   */
  value?: number | string;
  options: RadioOption[];
  /**
   * @deprecated Use `message` and messageType instead.
   */
  error?: ReactNode;
} & PropsWithChildren &
  Partial<ItemMessageProps>;

export type CardRadioCommonProps = CardRadioGroupProps & {
  CardRadioOptionComponent: ComponentType<CardRadioOptionProps>;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

const CardRadioGroupCommon = ({
  className,
  labelGroup,
  descriptionGroup,
  label,
  description,
  isRequired,
  required,
  options,
  type = "vertical",
  error,
  message,
  messageType = "error",
  name,
  value,
  id,
  CardRadioOptionComponent,
  ItemMessageComponent,
  ...inputProps
}: CardRadioCommonProps) => {
  const generatedId = useId();
  const cardRadioId = id ?? generatedId;
  const messageId = `${cardRadioId}-error`;

  const hasError =
    (Boolean(message) && messageType === "error") || Boolean(error);

  return (
    <fieldset
      className={["af-card-radio-group", className].filter(Boolean).join(" ")}
      role="radiogroup"
      aria-required={Boolean(required) || undefined}
      aria-invalid={hasError || undefined}
      aria-errormessage={hasError ? messageId : undefined}
      id={cardRadioId}
    >
      <legend className="af-card-radio-group__legend">
        <p className="af-card-radio-group__label">
          {label}
          {labelGroup}
          {required || isRequired ? <span aria-hidden>*</span> : null}
        </p>

        {description || descriptionGroup ? (
          <p className="af-card-radio-group__description">
            {description}
            {descriptionGroup}
          </p>
        ) : null}
      </legend>
      <div
        className={[
          "af-card-radio-group__options",
          `af-card-radio-group__options--${type}`,
        ].join(" ")}
      >
        {options.map((cardRadioItemProps) => (
          <CardRadioOptionComponent
            key={`${name ?? cardRadioId}-${cardRadioItemProps.label}`}
            id={`${cardRadioId}-${cardRadioItemProps.value}`}
            checked={
              value !== undefined
                ? value === cardRadioItemProps.value
                : undefined
            }
            required={required}
            {...inputProps}
            {...(cardRadioItemProps as CardRadioOptionProps)}
            type={type as "horizontal"}
            isInvalid={hasError}
            name={name}
          />
        ))}
      </div>
      <ItemMessageComponent
        id={messageId}
        message={message || error}
        messageType={messageType}
      />
    </fieldset>
  );
};

CardRadioGroupCommon.displayName = "CardRadioGroupCommon";

export { CardRadioGroupCommon };
