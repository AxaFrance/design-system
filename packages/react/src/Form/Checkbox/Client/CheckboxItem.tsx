import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from "react";
import "@axa-fr/design-system-css/dist/Form/Checkbox/Client/Checkbox.scss";
import { Icon } from "../../../Icons/Icons.client";

export type CheckboxItemOption = {
  id?: string;
  icon?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  value: string;
  disabled?: boolean;
  erroneous?: boolean;
  centerContent?: boolean;
};

type Props = Omit<ComponentPropsWithoutRef<"input">, "type" | "title"> &
  CheckboxItemOption & {
    checked?: boolean;
  };

export const CheckboxItem = forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled = false,
      erroneous = false,
      centerContent = false,
      value = "",
      id,
      icon,
      title,
      subtitle,
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
      let finalClasses = baseClassName;
      if (erroneous) {
        finalClasses += ` ${baseClassName}--erroneous`;
      }
      if (disabled) {
        finalClasses += ` ${baseClassName}--disabled`;
      }
      return finalClasses;
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
        <Icon
          name="check_box_outline_blank"
          className={`${defaultClassName}-unchecked-icon`}
        />
        <Icon name="check_box" className={`${defaultClassName}-checked-icon`} />
        <div
          className={`${defaultClassName}-content${centerContent ? "--centered" : ""}`}
        >
          {icon && <div className={`${defaultClassName}-icon`}>{icon}</div>}
          <div className={`${defaultClassName}-label`}>
            <div className={`${defaultClassName}-title`}>{title}</div>
            {subtitle && (
              <div className={`${defaultClassName}-subtitle`}>{subtitle}</div>
            )}
            {description && (
              <div className={`${defaultClassName}-description`}>
                {description}
              </div>
            )}
          </div>
        </div>
      </label>
    );
  },
);

CheckboxItem.displayName = "CheckboxItem";
