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

type DropdownProps = ComponentPropsWithRef<"select"> & {
  id?: string;
  classModifier?: string;
  label?: ComponentProps<typeof ItemLabel>["label"];
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

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
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
    const idMessage = useId();
    let inputId = useId();
    inputId = id || inputId;

    const classname = classNames(
      "af-form__dropdown-input",
      error && "af-form__dropdown-input--error",
    );

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
        {helper ? (
          <span className="af-form__input-helper">{helper}</span>
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

Dropdown.displayName = "Dropdown";

export { Dropdown };
