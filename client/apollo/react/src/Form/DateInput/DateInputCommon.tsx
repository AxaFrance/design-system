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
import { formatDateInputValue } from "./DateInput.helper";

type DateInputProps = Omit<ComponentPropsWithRef<"input">, "value"> & {
  classModifier?: string;
  defaultValue?: Date | string;
  value?: Date | string;
  helper?: string;
  error?: string;
  success?: string;
  label: ComponentProps<typeof ItemLabel>["label"];
  type?: "text" | "date";
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
} & Partial<ComponentPropsWithRef<typeof ItemLabel>>;

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      className,
      classModifier = "",
      defaultValue,
      value,
      placeholder = "JJ/MM/AAAA",
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
      type = "text",
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
          type={type}
          placeholder={placeholder || ""}
          ref={inputRef}
          defaultValue={formatDateInputValue(type, defaultValue)}
          value={formatDateInputValue(type, value)}
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

DateInput.displayName = "DateInput";

export { DateInput };
