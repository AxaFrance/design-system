import {
  type ComponentProps,
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  useId,
} from "react";
import { getClassName } from "../../utilities/getClassName";
import {
  ItemLabelCommon,
  type ItemLabelProps,
} from "../ItemLabel/ItemLabelCommon";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../ItemMessage/ItemMessageCommon";
import { InputDateAtom } from "./InputDateAtom";
import { InputDateTextAtom } from "./InputDateTextAtom";

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
  label: ItemLabelProps["children"];
} & Partial<
    Pick<
      ItemLabelProps,
      | "description"
      | "buttonLabel"
      | "moreButtonLabel"
      | "onButtonClick"
      | "onMoreButtonClick"
    > &
      ItemMessageProps
  >;

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
      helper,
      error,
      success,
      message,
      messageType,
      label,
      description,
      buttonLabel,
      moreButtonLabel,
      onButtonClick,
      onMoreButtonClick,
      ItemLabelComponent,
      ItemMessageComponent,
      required,
      hidePicker,
      max,
      min,
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getClassName({
      baseClassName: "af-form__input-date",
      modifiers: classModifier.split(" "),
      className,
    });

    let inputId = useId();
    inputId = otherProps.id ?? inputId;
    const idMessage = useId();
    const idHelp = useId();

    const ariaDescribedbyIds = [
      helper && idHelp,
      ((Boolean(message) && messageType === "success") || Boolean(success)) &&
        idMessage,
    ].filter(Boolean) as string[];

    const ariaDescribedby = ariaDescribedbyIds.length
      ? ariaDescribedbyIds.join(" ")
      : undefined;

    const hasError =
      (Boolean(message) && messageType === "error") || Boolean(error);

    const ariaErrormessage = hasError ? idMessage : undefined;

    const ariaInvalid = hasError || undefined;

    return (
      <div className="af-form__input-container">
        <ItemLabelComponent
          description={description}
          moreButtonLabel={moreButtonLabel ?? buttonLabel}
          onMoreButtonClick={onMoreButtonClick ?? onButtonClick}
          required={required}
          htmlFor={inputId}
        >
          {label}
        </ItemLabelComponent>
        {hidePicker ? (
          <InputDateTextAtom
            {...otherProps}
            id={inputId}
            className={componentClassName}
            ref={inputRef}
            aria-errormessage={ariaErrormessage}
            aria-invalid={ariaInvalid}
            aria-describedby={ariaDescribedby}
            required={required}
          />
        ) : (
          <InputDateAtom
            {...otherProps}
            id={inputId}
            className={componentClassName}
            ref={inputRef}
            aria-errormessage={ariaErrormessage}
            aria-invalid={ariaInvalid}
            aria-describedby={ariaDescribedby}
            required={required}
            max={max}
            min={min}
          />
        )}

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
