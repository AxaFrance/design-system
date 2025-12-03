import {
  type ComponentProps,
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  type ReactNode,
  useId,
} from "react";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomCommon";
import {
  ItemLabelCommon,
  type ItemLabelProps,
} from "../ItemLabel/ItemLabelCommon";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../ItemMessage/ItemMessageCommon";

export type InputTextProps = ComponentPropsWithRef<"input"> & {
  unit?: ReactNode;
  classModifier?: string;
  label?: ItemLabelProps["children"];
  helper?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  error?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  success?: string;
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

type InputTextCommonProps = InputTextProps & {
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  InputTextAtomComponent: ComponentType<ComponentProps<typeof InputTextAtom>>;
};

const InputTextCommon = forwardRef<HTMLInputElement, InputTextCommonProps>(
  (
    {
      unit,
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
      required,
      sideButtonLabel,
      onSideButtonClick,
      ItemLabelComponent,
      ItemMessageComponent,
      InputTextAtomComponent,
      ...otherProps
    },
    inputRef,
  ) => {
    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idMessage = useId();
    const idHelp = useId();

    const ariaDescribedby = [helper && idHelp, success && idMessage].filter(
      Boolean,
    ) as string[];

    return (
      <div className="af-form__input-container">
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

        <InputTextAtomComponent
          id={inputId}
          ref={inputRef}
          unit={unit}
          className={className}
          classModifier={classModifier}
          error={
            (message && messageType === "error") || Boolean(error)
              ? messageType || error
              : undefined
          }
          required={required}
          idMessage={message || error ? idMessage : undefined}
          idHelp={
            ariaDescribedby.length > 0 ? ariaDescribedby.join(" ") : undefined
          }
          {...otherProps}
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

InputTextCommon.displayName = "InputText";

export { InputTextCommon };
