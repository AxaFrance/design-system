import "@axa-fr/design-system-css/dist/Form/Radio/Agent/Radio.scss";
import { ComponentPropsWithRef, forwardRef, ReactNode, useId } from "react";
import { getOptionClassName } from "../../core";

type Props = Omit<ComponentPropsWithRef<"input">, "checked" | "type"> & {
  classModifier?: string;
  optionClassName?: string;
  label?: ReactNode;
  isChecked?: boolean;
};

const RadioItem = forwardRef<HTMLInputElement, Props>(
  (
    {
      value = "",
      id,
      isChecked,
      children,
      label,
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
      "af-form__radio",
      disabled,
    );
    const newLabel = children || label;
    const generatedId = useId();
    const newId = id ?? generatedId;

    return (
      <div className={optionClassName} key={value as string}>
        <input
          {...otherProps}
          className="af-form__input-radio"
          id={newId}
          type="radio"
          value={value}
          checked={isChecked}
          ref={inputRef}
          disabled={disabled}
        />
        <label className="af-form__label" htmlFor={newId}>
          <span className="af-form__description">{newLabel}</span>
        </label>
      </div>
    );
  },
);

RadioItem.displayName = "RadioItem";

export { RadioItem };
