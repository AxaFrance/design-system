import "@axa-fr/canopee-css/distributeur/Form/Date/Date.css";
import { type ComponentPropsWithRef, forwardRef } from "react";
import { formatDateInputValue } from "../../utilities/helpers/date";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = Omit<ComponentPropsWithRef<"input">, "value"> & {
  /** @deprecated Use `className` and the native `disabled`/`required` props instead. */
  classModifier?: string;
  defaultValue?: Date | string;
  value?: Date | string;
};

const Date = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, defaultValue, value, ...otherProps }, ref) => {
    const componentClassName = getClassName({
      baseClassName: "af-form__input-date",
      modifiers: classModifier?.split(" "),
      className,
    });

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
