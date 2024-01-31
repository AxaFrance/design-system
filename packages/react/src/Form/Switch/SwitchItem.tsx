import "@axa-fr/design-system-css/dist/Form/Switch/Switch.agent.scss";
import { ComponentPropsWithoutRef, useId } from "react";
import { Option, getOptionClassName } from "../core";

const defaultClassName = "af-form__radio-custom";

type Props = Omit<
  ComponentPropsWithoutRef<"input">,
  "value" | "checked" | "disabled"
> &
  Option & {
    classModifier?: string;
    isChecked?: boolean;
  };

const SwitchItem = ({
  id,
  label,
  className = "",
  classModifier = "",
  disabled = false,
  isChecked,
  required,
  ...radioProps
}: Props) => {
  const generatedId = useId();
  const newId = id ?? generatedId;
  const classNameDisabled = getOptionClassName(
    className,
    classModifier,
    defaultClassName,
    disabled,
  );
  const classNameChecked = isChecked
    ? `${defaultClassName}--checked`
    : undefined;
  return (
    <div
      className={[classNameDisabled, classNameChecked]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        {...radioProps}
        checked={isChecked}
        disabled={disabled}
        className="af-form__input-radio"
        id={newId}
        type="radio"
        required={classModifier?.includes("required") || required}
      />
      <label className="af-form__label" htmlFor={newId}>
        <span className="af-form__description">{label}</span>
      </label>
    </div>
  );
};

export { SwitchItem };
