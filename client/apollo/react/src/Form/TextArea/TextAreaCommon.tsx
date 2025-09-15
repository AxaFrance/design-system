import {
  type ComponentProps,
  ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  MouseEventHandler,
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

export type TextAreaProps = ComponentPropsWithRef<"textarea"> & {
  helper?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  error?: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
} & Partial<ItemMessageProps & ItemLabelProps>;

type TextAreaCommonProps = TextAreaProps & {
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

const TextAreaCommon = forwardRef<HTMLTextAreaElement, TextAreaCommonProps>(
  (
    {
      id,
      className,
      label,
      description,
      helper,
      error,
      message,
      messageType,
      buttonLabel,
      onButtonClick,
      required,
      sideButtonLabel,
      ItemLabelComponent,
      ItemMessageComponent,
      onSideButtonClick,
      placeholder = " ",
      ...inputProps
    },
    inputRef,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const helperId = `${inputId}-helper`;
    const messageId = `${inputId}-error`;

    const hasError =
      (Boolean(message) && messageType === "error") || Boolean(error);

    return (
      <div
        className={["af-form__input-container", className]
          .filter(Boolean)
          .join(" ")}
      >
        <ItemLabelComponent
          label={label}
          description={description}
          buttonLabel={buttonLabel}
          onButtonClick={onButtonClick}
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          required={required}
          inputId={inputId}
        />

        <textarea
          id={inputId}
          className="af-form__textarea"
          ref={inputRef}
          aria-errormessage={hasError ? messageId : undefined}
          aria-describedby={helper ? helperId : undefined}
          required={required}
          aria-invalid={hasError || undefined}
          placeholder={placeholder}
          {...inputProps}
        />

        {helper ? (
          <span id={helperId} className="af-form__input-helper">
            {helper}
          </span>
        ) : null}

        <ItemMessageComponent
          id={messageId}
          message={message || error}
          messageType={messageType}
        />
      </div>
    );
  },
);

TextAreaCommon.displayName = "TextArea";

export { TextAreaCommon };
