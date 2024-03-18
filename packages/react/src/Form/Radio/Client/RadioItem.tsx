import "@axa-fr/design-system-css/dist/Form/Radio/Client/Radio.scss";
import { ComponentPropsWithRef, forwardRef, ReactNode, useId } from "react";
import { getOptionClassName } from "../../core";

type Props = Omit<ComponentPropsWithRef<"input">, "checked" | "type"> & {
  classModifier?: string;
  optionClassName?: string;
  icon?: ReactNode;
  choice?: ReactNode;
  description?: ReactNode;
  isChecked?: boolean;
};

const RadioItem = forwardRef<HTMLInputElement, Props>(
  (
    {
      value = "",
      id,
      isChecked,
      children,
      icon,
      choice,
      description,
      classModifier = "",
      className = "",
      disabled = false,
      ...otherProps
    },
    inputRef,
  ) => {
    const optionClassName = getOptionClassName(
      className,
      classModifier,
      "af-form-client__radio",
      disabled,
    );
    const newChoice = children || choice;
    const generatedId = useId();
    const newId = id ?? generatedId;

    return (
      <label className={optionClassName} key={value as string} htmlFor={newId}>
        <input
          {...otherProps}
          className="af-form-client__input-radio"
          id={newId}
          type="radio"
          value={value}
          checked={isChecked}
          ref={inputRef}
          disabled={disabled}
        />
        <div className="af-form-client__content">
          {icon && <div className="af-form-client__icon">{icon}</div>}
          <div className="af-form-client__label">
            <div className="af-form-client__choice">{newChoice}</div>
            <div className="af-form-client__description">{description}</div>
          </div>
        </div>
      </label>
    );
  },
);

RadioItem.displayName = "RadioItem";

export { RadioItem };
