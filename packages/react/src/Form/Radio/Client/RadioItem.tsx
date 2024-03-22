import "@axa-fr/design-system-css/dist/Form/Radio/Client/Radio.scss";
import { ComponentPropsWithRef, forwardRef, ReactNode, useId } from "react";

export type RadioItemOption = {
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

type Props = Omit<ComponentPropsWithRef<"input">, "type" | "title"> &
  RadioItemOption & {
    checked?: boolean;
  };

const RadioItem = forwardRef<HTMLInputElement, Props>(
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
      ...otherProps
    },
    inputRef,
  ) => {
    const generatedId = useId();
    const newId = id ?? generatedId;

    const defaultClassName = "af-form-client__radio";
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
          className="af-form-client__input-radio"
          value={value}
          id={newId}
          disabled={disabled}
          type="radio"
          ref={inputRef}
        />
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

RadioItem.displayName = "RadioItem";

export { RadioItem };
