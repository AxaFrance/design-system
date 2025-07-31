import {
  type ComponentProps,
  type ComponentType,
  type PropsWithChildren,
  type ReactNode,
  useId,
} from "react";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { type CardRadioOptionProps } from "../CardRadioOption/CardRadioOptionCommon";

type RadioOption = Omit<CardRadioOptionProps, "name" | "type" | "isInvalid">;

export type CardRadioProps = Omit<
  CardRadioOptionProps,
  | "value"
  | "label"
  | "type"
  | "isInvalid"
  | "icon"
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
  error?: ReactNode;
} & PropsWithChildren;

export type CardRadioCommonProps = CardRadioProps & {
  CardRadioOptionComponent: ComponentType<CardRadioOptionProps>;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

export const CardRadioCommon = ({
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
  name,
  value,
  id,
  CardRadioOptionComponent,
  ItemMessageComponent,
  ...inputProps
}: CardRadioCommonProps) => {
  const generatedId = useId();
  const cardRadioId = id ?? generatedId;
  const errorId = `${cardRadioId}-error`;

  return (
    <fieldset
      className={["af-card-radio", className].filter(Boolean).join(" ")}
      role="radiogroup"
      aria-required={required ? true : undefined}
      aria-invalid={error ? true : undefined}
      aria-errormessage={error ? errorId : undefined}
      id={cardRadioId}
    >
      <legend className="af-card-radio__legend">
        <p className="af-card-radio__label">
          {label}
          {labelGroup}
          {(required || isRequired) && <span aria-hidden>*</span>}
        </p>

        {(description || descriptionGroup) && (
          <p className="af-card-radio__description">
            {description}
            {descriptionGroup}
          </p>
        )}
      </legend>
      <div
        className={[
          "af-card-radio__options",
          `af-card-radio__options--${type}`,
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
            {...inputProps}
            {...cardRadioItemProps}
            type={type}
            isInvalid={Boolean(error)}
            name={name}
          />
        ))}
      </div>
      <ItemMessageComponent id={errorId} message={error} messageType="error" />
    </fieldset>
  );
};

CardRadioCommon.displayName = "CardRadioCommon";
