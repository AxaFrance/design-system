import {
  type ComponentProps,
  ComponentPropsWithRef,
  forwardRef,
  useId,
} from "react";
import classNames from "classnames";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { Button } from "../../Button/ButtonCommon";
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
      description,
      buttonLabel,
      onButtonClick,
      sideButtonLabel,
      onSideButtonClick,
      ...otherProps
    },
    inputRef,
  ) => {
    const idLabel = useId();
    const idError = useId();
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
        <ItemLabel
          label={label}
          description={description}
          buttonLabel={buttonLabel}
          onButtonClick={onButtonClick}
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          required={required}
          inputId={inputId}
          idLabel={idLabel}
          ButtonComponent={Button}
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

        {error && <ItemMessage id={idError} message={error} />}
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select };
