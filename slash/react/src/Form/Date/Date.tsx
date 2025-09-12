import "@axa-fr/design-system-slash-css/dist/Form/Date/Date.css";
import { ComponentPropsWithRef, forwardRef } from "react";
import { getComponentClassName } from "../../utilities";
import { formatDateInputValue } from "../../utilities/helpers/date";

type Props = Omit<ComponentPropsWithRef<"input">, "value"> & {
  classModifier?: string;
  defaultValue?: Date | string;
  value?: Date | string;
};

const Date = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, defaultValue, value, ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-date",
    );

    return (
      <input
        className={componentClassName}
        type="date"
        defaultValue={formatDateInputValue(defaultValue)}
        value={formatDateInputValue(value)}
        ref={ref}
        disabled={classModifier?.includes("disabled")}
        required={classModifier?.includes("required")}
        {...otherProps}
      />
    );
  },
);

Date.displayName = "Date";

export { Date };
