import {
  type ComponentProps,
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  useId,
} from "react";
import classNames from "classnames";
import {
  ItemLabelCommon,
  type ItemLabelProps,
} from "../ItemLabel/ItemLabelCommon";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../ItemMessage/ItemMessageCommon";

export type DropdownProps = ComponentPropsWithRef<"select"> & {
  id?: string;
  classModifier?: string;
  label?: ItemLabelProps["label"];
  /**
   * @deprecated Use `message` and messageType instead.
   */
  error?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  success?: string;
  placeholder?: string;
  buttonLabel?: string;
  description?: string;
  helper?: string;
} & Partial<ItemLabelProps & ItemMessageProps>;

type DropdownCommonProps = DropdownProps & {
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

const DropdownCommon = forwardRef<HTMLSelectElement, DropdownCommonProps>(
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
      message,
      messageType,
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

    const hasError =
      (Boolean(message) && messageType === "error") || Boolean(error);

    const classname = classNames(
      "af-form__dropdown-input",
      hasError && "af-form__dropdown-input--error",
    );

    return (
      <div className="af-form__dropdown-container">
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
          {Boolean(placeholder) && <option value="">{placeholder}</option>}
          {children}
        </select>
        {helper ? (
          <span className="af-form__input-helper">{helper}</span>
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

DropdownCommon.displayName = "Dropdown";

export { DropdownCommon };
