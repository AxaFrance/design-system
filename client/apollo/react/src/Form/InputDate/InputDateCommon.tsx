import {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentType,
  forwardRef,
  useEffect,
  useId,
} from "react";
import {
  ItemLabelCommon,
  type ItemLabelProps,
} from "../ItemLabel/ItemLabelCommon";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../ItemMessage/ItemMessageCommon";
import { getComponentClassName } from "../../utilities/getComponentClassName";
import { formatInputDateValue } from "./InputDate.helper";

export type InputDateProps = Omit<
  ComponentPropsWithRef<"input">,
  "value" | "min" | "max"
> & {
  classModifier?: string;
  defaultValue?: Date | string;
  value?: Date | string;
  min?: Date | string;
  max?: Date | string;
  helper?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  error?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  success?: string;
  hidePicker?: boolean;
  label: ItemLabelProps["label"];
} & Partial<ItemLabelProps & ItemMessageProps>;

type InputDateCommonProps = InputDateProps & {
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

const InputDateCommon = forwardRef<HTMLInputElement, InputDateCommonProps>(
  (
    {
      className,
      classModifier = "",
      defaultValue,
      value,
      helper,
      error,
      success,
      message,
      messageType,
      label,
      description,
      buttonLabel,
      onButtonClick,
      ItemLabelComponent,
      ItemMessageComponent,
      required,
      min,
      max,
      hidePicker,
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getComponentClassName(
      "af-form__input-date",
      className ?? "",
      `${classModifier}${hidePicker ? " no-picker" : ""}`,
    );

    let inputId = useId();
    inputId = otherProps.id ?? inputId;
    const idMessage = useId();
    const idHelp = useId();

    const ariaDescribedby = [helper && idHelp, success && idMessage].filter(
      Boolean,
    ) as string[];

    /* Stop keydown (space and enter) and click events for Firefox when picker is disabled */
    useEffect(() => {
      function handleKeydown(event: KeyboardEvent) {
        if (hidePicker && (event.keyCode === 13 || event.keyCode === 32)) {
          event.preventDefault();
        }
      }
      function handleClick(event: MouseEvent) {
        if (hidePicker) {
          event.preventDefault();
        }
      }

      window.addEventListener("keydown", handleKeydown);
      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("keydown", handleKeydown);
        window.removeEventListener("click", handleClick);
      };
    }, [hidePicker]);

    const hasError =
      (Boolean(message) && messageType === "error") || Boolean(error);

    return (
      <div className="af-form__input-container">
        <ItemLabelComponent
          label={label}
          description={description}
          buttonLabel={buttonLabel}
          onButtonClick={onButtonClick}
          required={required}
          inputId={inputId}
        />
        <input
          {...otherProps}
          id={inputId}
          className={componentClassName}
          type="date"
          ref={inputRef}
          defaultValue={formatInputDateValue(defaultValue)}
          value={formatInputDateValue(value)}
          aria-errormessage={hasError ? idMessage : undefined}
          aria-invalid={hasError || undefined}
          aria-describedby={
            ariaDescribedby.length > 0 ? ariaDescribedby.join(" ") : undefined
          }
          required={required}
          min={formatInputDateValue(min)}
          max={formatInputDateValue(max)}
        />
        {helper ? (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        ) : null}

        <ItemMessageComponent
          id={idMessage}
          message={message || error || success}
          messageType={messageType || (error ? "error" : "success")}
        />
      </div>
    );
  },
);

InputDateCommon.displayName = "InputDate";

export { InputDateCommon };
