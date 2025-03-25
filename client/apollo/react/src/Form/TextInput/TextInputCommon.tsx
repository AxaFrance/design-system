import {
  type ComponentProps,
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  useId,
} from "react";

import { getComponentClassName } from "../../utilities/getComponentClassName";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";

type TextInputProps = ComponentPropsWithRef<"input"> & {
  unit?: React.ReactNode;
  classModifier?: string;
  helper?: string;
  error?: string;
  success?: string;
  label: ComponentProps<typeof ItemLabel>["label"];
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
} & Partial<ComponentPropsWithRef<typeof ItemLabel>>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      unit,
      className,
      classModifier = "",
      helper,
      error,
      success,
      label,
      description,
      buttonLabel,
      onButtonClick,
      required,
      sideButtonLabel,
      onSideButtonClick,
      ItemLabelComponent,
      ItemMessageComponent,
      "aria-errormessage": ariaErrormessage,
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getComponentClassName(
      "af-form__input-text",
      className,
      classModifier + (error || ariaErrormessage ? " error" : ""),
    );

    let inputId = useId();
    inputId = otherProps.id || inputId;
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
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          required={required}
          inputId={inputId}
          idLabel={idLabel}
        />

        <div className="af-form__input-variant">
          <input
            id={inputId}
            className={componentClassName}
            type="text"
            ref={inputRef}
            aria-labelledby={idLabel}
            aria-errormessage={ariaErrormessage ?? idMessage}
            aria-invalid={Boolean(error || ariaErrormessage)}
            aria-describedby={idHelp}
            {...otherProps}
          />
          {unit}
        </div>

        {helper && (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        )}

        <ItemMessageComponent
          id={idMessage}
          message={error || success}
          messageType={error ? "error" : "success"}
        />
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
