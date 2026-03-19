import {
  useId,
  useRef,
  type ChangeEvent,
  type ComponentType,
  type ReactNode,
} from "react";
import type { GridContainerProps } from "../../../utilities/types/GridContainerProps";
import type { ItemMessageProps } from "../../ItemMessage/ItemMessageCommon";
import type { CardCheckboxOptionProps } from "../CardCheckboxOption/CardCheckboxOptionCommon";
import type { CheckboxTextProps } from "../CheckboxText/CheckboxTextCommon";

type CheckboxOption = Omit<CardCheckboxOptionProps, "name" | "type">;

export type CardCheckboxProps = Omit<
  CardCheckboxOptionProps,
  "value" | "label" | "type" | "icon" | "description" | "subtitle" | "children"
> & {
  type?: "vertical" | "horizontal";
  mode?: "text";
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
  options: CheckboxOption[];
  /**
   * @deprecated  Use `message` and messageType instead.
   */
  error?: string;
  containerProps?: GridContainerProps<"fieldset">;
} & Partial<ItemMessageProps>;

type CardCheckboxCommonProps = CardCheckboxProps & {
  CheckboxTextComponent: ComponentType<CheckboxTextProps>;
  CardCheckboxItemComponent: ComponentType<CardCheckboxOptionProps>;
  ItemMessageComponent: ComponentType<ItemMessageProps>;
};

export const CardCheckboxCommon = ({
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
  id,
  onChange = () => {},
  CardCheckboxItemComponent,
  CheckboxTextComponent,
  ItemMessageComponent,
  message,
  messageType = "error",
  containerProps,
  mode,
  ...inputProps
}: CardCheckboxCommonProps) => {
  const generatedId = useId();
  const cardCheckboxId = id || generatedId;
  const messageId = `${cardCheckboxId}-error`;

  const CheckboxItemComponent =
    mode === "text" ? CheckboxTextComponent : CardCheckboxItemComponent;

  const cardCheckboxOptionsRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const cardCheckboxOptionsEl = cardCheckboxOptionsRef.current;

    if (cardCheckboxOptionsEl && required) {
      const nbCheckedElements = cardCheckboxOptionsEl.querySelectorAll(
        "input[type='checkbox']:checked",
      ).length;

      cardCheckboxOptionsEl
        .querySelectorAll("input[type='checkbox']")
        .forEach((el) => {
          if (nbCheckedElements < 1 && !event.target.checked) {
            el.setAttribute("required", "true");
          } else {
            el.removeAttribute("required");
          }
        });
    }

    onChange(event);
  };

  const hasError =
    (Boolean(message) && messageType === "error") || Boolean(error);

  return (
    <fieldset
      className={["af-card-checkbox", className].filter(Boolean).join(" ")}
      id={cardCheckboxId}
      {...containerProps}
    >
      <legend className="af-card-checkbox__legend">
        <p className="af-card-checkbox__label">
          {label}
          {labelGroup}
          {required || isRequired ? <span aria-hidden>*</span> : null}
        </p>
        {description || descriptionGroup ? (
          <p className="af-card-checkbox__description">
            {description}
            {descriptionGroup}
          </p>
        ) : null}
      </legend>
      <div
        className={[
          "af-card-checkbox__options",
          `af-card-checkbox__options--${type}`,
        ].join(" ")}
        ref={cardCheckboxOptionsRef}
      >
        {options.map((cardCheckboxItemProps) => (
          <CheckboxItemComponent
            key={`${name ?? cardCheckboxId}-${cardCheckboxItemProps.label}`}
            id={`${cardCheckboxId}-${cardCheckboxItemProps.value}`}
            required={required}
            onChange={handleChange}
            {...inputProps}
            {...cardCheckboxItemProps}
            type={type}
            aria-invalid={hasError || undefined}
            aria-errormessage={hasError ? messageId : undefined}
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

CardCheckboxCommon.displayName = "CardCheckboxCommon";
