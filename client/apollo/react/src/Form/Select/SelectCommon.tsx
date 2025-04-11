import {
  type ComponentProps,
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  useId,
} from "react";
import classNames from "classnames";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";

type SelectProps = ComponentPropsWithRef<"select"> & {
  id?: string;
  classModifier?: string;
  label: ComponentProps<typeof ItemLabel>["label"];
  errorLabel?: string;
  error?: string;
  success?: string;
  placeholder?: string;
  buttonLabel?: string;
  description?: string;
  helper?: string;
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
} & Partial<ComponentPropsWithRef<typeof ItemLabel>>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      required,
      label,
      error,
      placeholder,
      children,
      helper,
      success,
      description,
      buttonLabel,
      onButtonClick,
      sideButtonLabel,
      onSideButtonClick,
      ItemLabelComponent,
      ItemMessageComponent,
      ...otherProps
    },
    inputRef,
  ) => {
    const idLabel = useId();
    const idMessage = useId();
    let inputId = useId();
    inputId = id || inputId;

    const isShowingPlaceholder = otherProps.value === "";
    const classname = classNames(
      "af-form__select-input",
      error && "af-form__select-input--error",
      isShowingPlaceholder && "af-form__select-input-placeholder",
    );

    return (
      <div>
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
        <select
          className={classname}
          {...otherProps}
          ref={inputRef}
          id={inputId}
        >
          {Boolean(placeholder) && (
            <option disabled value="">
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {helper && <span className="af-form__input-helper">{helper}</span>}

        <ItemMessageComponent
          id={idMessage}
          message={error || success}
          messageType={error ? "error" : "success"}
        />
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select };
