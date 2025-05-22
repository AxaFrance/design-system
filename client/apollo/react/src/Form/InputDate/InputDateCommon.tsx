import {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentType,
  forwardRef,
  useId,
} from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
import { getComponentClassName } from "../../utilities/getComponentClassName";
import { formatInputDateValue } from "./InputDate.helper";

type InputDateProps = Omit<ComponentPropsWithRef<"input">, "value"> & {
  classModifier?: string;
  defaultValue?: Date | string;
  value?: Date | string;
  helper?: string;
  error?: string;
  success?: string;
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
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getComponentClassName(
      "af-form__input-date",
      className ?? "",
      classModifier + (error || ariaErrormessage ? " error" : ""),
    );

    let inputId = useId();
    inputId = otherProps.id ?? inputId;
    const idMessage = useId();
    const idHelp = useId();
    const idLabel = useId();

    return (
      <div className="af-form__input-container">
        <ItemLabelComponent
          label={label}
          description={description}
          buttonLabel={buttonLabel}
          onButtonClick={onButtonClick}
          required={required}
          inputId={inputId}
          idLabel={idLabel}
        />
        <input
          {...otherProps}
          id={inputId}
          className={componentClassName}
          type="date"
          ref={inputRef}
          defaultValue={formatInputDateValue(defaultValue)}
          value={formatInputDateValue(value)}
          aria-labelledby={idLabel}
          aria-errormessage={ariaErrormessage ?? idMessage}
          aria-invalid={Boolean(error ?? ariaErrormessage)}
          aria-describedby={idHelp}
          required={required}
        />
        {helper && (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        )}

        <ItemMessageComponent
          id={idMessage}
          message={error ?? success}
          messageType={error ? "error" : "success"}
        />
      </div>
    );
  },
);

InputDate.displayName = "InputDate";

export { InputDate };
