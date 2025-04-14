import check from "@material-symbols/svg-700/sharp/check.svg";
import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from "react";
import { getOptionClassName } from "../core";

import "@axa-fr/design-system-slash-css/dist/Form/Checkbox/Checkbox.scss";
import { Svg } from "../../Svg";

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
            <Svg role="presentation" className="ok-icon" src={check} />
          </span>
          <span className="af-form__description">{newLabel}</span>
        </label>
      </div>
    );
  },
);

CheckboxItem.displayName = "CheckboxItem";

export { CheckboxItem };
