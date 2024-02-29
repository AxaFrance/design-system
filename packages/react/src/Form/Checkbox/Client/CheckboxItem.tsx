import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import "@axa-fr/design-system-css/dist/Form/Checkbox/Client/Checkbox.scss";

export type CheckboxItemOption = {
  id?: string;
  icon?: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  value: string;
  disabled?: boolean;
};

type Props = Omit<ComponentPropsWithoutRef<"input">, "type" | "label"> &
  CheckboxItemOption & {
    checked?: boolean;
  };

export const CheckboxItem = forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled = false,
      value = "",
      id,
      icon,
      label,
      description,
      className,
      checked,
      ...otherProps
    }: Props,
    inputRef,
  ) => {
    const generatedId = useId();
    const newId = id ?? generatedId; // id is required on this component
    const defaultClassName = "af-form-client__checkbox";
    const getOptionClassName = () => {
      const baseClassName = className ?? defaultClassName;
      return disabled
        ? `${baseClassName} ${baseClassName}--disabled`
        : baseClassName;
    };

    return (
      <label
        className={getOptionClassName()}
        key={value as string}
        htmlFor={newId}
      >
        <input
          {...otherProps}
          className="af-form-client__input-checkbox"
          value={value}
          id={newId}
          disabled={disabled}
          checked={checked}
          type="checkbox"
          ref={inputRef}
        />
        <CheckBoxOutlineBlankIcon className="af-form-client__checkbox-unchecked-icon" />
        <CheckBoxIcon className="af-form-client__checkbox-checked-icon" />
        <div className="af-form-client__content">
          {icon ? <div className="af-form-client__icon">{icon}</div> : null}
          <div className="af-form-client__label">
            <div className="af-form-client__label">{label}</div>
            <div className="af-form-client__description">{description}</div>
          </div>
        </div>
      </label>
    );
  },
);

CheckboxItem.displayName = "CheckboxItem";
