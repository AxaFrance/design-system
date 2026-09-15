import "@axa-fr/canopee-css/distributeur/Form/Select/Select.css";
import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = ComponentPropsWithRef<"select"> & {
  classModifier?: string;
};

const SelectBase = ({
  id,
  className,
  classModifier,
  required,
  children,
  ...otherProps
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-form__input-select",
    modifiers: classModifier?.split(" "),
    className,
  });
  return (
    <div className="af-form__select-container">
      <select
        {...otherProps}
        id={id}
        className={componentClassName}
        required={classModifier?.includes("required") || required}
      >
        {children}
      </select>
      <span aria-controls={id} className="glyphicon glyphicon-menu-down" />
    </div>
  );
};

SelectBase.displayName = "SelectBase";

export { SelectBase };
