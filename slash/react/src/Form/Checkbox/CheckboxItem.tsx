import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from "react";
import { getOptionClassName } from "../core";

import "@axa-fr/design-system-slash-css/dist/Form/Checkbox/Checkbox.scss";

type Props = Omit<ComponentPropsWithoutRef<"input">, "type"> & {
  classModifier?: string;
  optionClassName?: string;
  children?: ReactNode;
  label?: ReactNode;
  isChecked?: boolean;
};

const CheckboxItem = forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled = false,
      value = "",
      id,
      children,
      label,
      isChecked,
      className,
      classModifier,
      ...otherProps
    }: Props,
    inputRef,
  ) => {
    const newLabel = children || label;
    const generatedId = useId();
    const newId = id ?? generatedId; // id is required on this component
    const optionClassName = getOptionClassName(
      className ?? "",
      classModifier ?? "",
      "af-form__checkbox",
      disabled,
    );
    return (
      <div className={optionClassName}>
        <input
          {...otherProps}
          className="af-form__input-checkbox"
          value={value}
          id={newId}
          disabled={disabled}
          checked={isChecked}
          type="checkbox"
          ref={inputRef}
        />
        <label className="af-form__label" htmlFor={newId}>
          <span className="af-form__indicator">
            <svg
              className="ok-icon"
              role="presentation"
              viewBox="0 -960 960 960"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          </span>
          <span className="af-form__description">{newLabel}</span>
        </label>
      </div>
    );
  },
);

CheckboxItem.displayName = "CheckboxItem";

export { CheckboxItem };
