import {
  type ComponentProps,
  ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
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
  label?: ItemLabelProps["children"];
  helper?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  error?: string;
} & Pick<
    ItemLabelProps,
    | "description"
    | "moreButtonLabel"
    | "buttonLabel"
    | "onMoreButtonClick"
    | "onButtonClick"
    | "sideButtonLabel"
    | "onSideButtonClick"
  > &
  Pick<ItemMessageProps, "message" | "messageType">;

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
      moreButtonLabel,
      onButtonClick,
      onMoreButtonClick,
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
          description={description}
          moreButtonLabel={moreButtonLabel ?? buttonLabel}
          onMoreButtonClick={onMoreButtonClick ?? onButtonClick}
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          required={required}
          htmlFor={inputId}
        >
          {label}
        </ItemLabelComponent>

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
