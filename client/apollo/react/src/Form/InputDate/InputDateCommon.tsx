import {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentType,
  forwardRef,
  useEffect,
  useId,
} from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
import { getComponentClassName } from "../../utilities/getComponentClassName";
import { formatInputDateValue } from "./InputDate.helper";

type InputDateProps = Omit<
  ComponentPropsWithRef<"input">,
  "value" | "min" | "max"
> & {
  classModifier?: string;
  defaultValue?: Date | string;
  value?: Date | string;
  min?: Date | string;
  max?: Date | string;
  helper?: string;
  error?: string;
  success?: string;
  hidePicker?: boolean;
  label: ComponentProps<typeof ItemLabel>["label"];
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
} & Partial<ComponentPropsWithRef<typeof ItemLabel>>;

const InputDate = forwardRef<HTMLInputElement, InputDateProps>(
  (
    {
      className,
      classModifier = "",
      defaultValue,
      value,
      helper,
      error,
      success,
      label,
      description,
      buttonLabel,
      onButtonClick,
      ItemLabelComponent,
      ItemMessageComponent,
      required,
      "aria-errormessage": ariaErrormessage,
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
          aria-errormessage={
            ariaErrormessage ?? (error ? idMessage : undefined)
          }
          aria-invalid={Boolean(error ?? ariaErrormessage)}
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
          message={error || success}
          messageType={error ? "error" : "success"}
        />
      </div>
    );
  },
);

InputDate.displayName = "InputDate";

export { InputDate };
