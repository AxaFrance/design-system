import "@axa-fr/canopee-css/distributeur/Form/Date/Date.css";
import { type ComponentPropsWithRef } from "react";
import { formatDateInputValue } from "../../utilities/helpers/date";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = Omit<ComponentPropsWithRef<"input">, "value"> & {
  defaultValue?: Date | string;
  value?: Date | string;
  hasInfobulle?: boolean;
};

const Date = ({
  className,
  defaultValue,
  value,
  hasInfobulle,
  ...otherProps
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-form__input-date",
    modifiers: [hasInfobulle && "hasinfobulle"],
    className,
  });

  return (
    <input
      className={componentClassName}
      type="date"
      defaultValue={formatDateInputValue(defaultValue)}
      value={formatDateInputValue(value)}
      {...otherProps}
    />
  );
};

Date.displayName = "Date";

export { Date };
