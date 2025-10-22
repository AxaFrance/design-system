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
import { formatDateTextValue } from "./InputDateTextHelper";

export type InputDateTextProps = ComponentPropsWithRef<"input"> & {
  unit?: ReactNode;
  classModifier?: string;
  helper?: string;
} & Partial<ItemLabelProps & ItemMessageProps>;

type InputDateTextCommonProps = InputDateTextProps & {
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  InputTextAtomComponent: ComponentType<ComponentProps<typeof InputTextAtom>>;
};

const InputDateTextCommon = forwardRef<
  HTMLInputElement,
  InputDateTextCommonProps
>(
  (
    {
      unit,
      className,
      classModifier = "",
      helper,
      message,
      messageType,
      label,
      description,
      buttonLabel,
      onButtonClick,
      required,
      sideButtonLabel,
      onSideButtonClick,
      ItemLabelComponent,
      ItemMessageComponent,
      InputTextAtomComponent,
      onChange,
      ...otherProps
    },
    inputRef,
  ) => {
    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idMessage = useId();
    const idHelp = useId();

    const ariaDescribedby = [helper && idHelp, message && idMessage].filter(
      Boolean,
    ) as string[];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formattedValue = formatDateTextValue(e.target.value);

      onChange?.({
        ...e,
        target: { ...e.target, value: formattedValue },
      });
    };

    return (
      <div className="af-form__input-container">
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

        <InputTextAtomComponent
          pattern="\d{0,2}/?\d{0,2}/?\d{0,4}"
          maxLength={10}
          id={inputId}
          ref={inputRef}
          unit={unit}
          inputMode="numeric"
          className={className}
          classModifier={classModifier}
          error={message && messageType === "error" ? messageType : undefined}
          required={required}
          idMessage={message ? idMessage : undefined}
          idHelp={
            ariaDescribedby.length > 0 ? ariaDescribedby.join(" ") : undefined
          }
          onChange={handleChange}
          {...otherProps}
        />

        {helper ? (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        ) : null}

        <ItemMessageComponent
          id={idMessage}
          message={message}
          messageType={messageType}
        />
      </div>
    );
  },
);

InputDateTextCommon.displayName = "InputDateText";

export { InputDateTextCommon };
