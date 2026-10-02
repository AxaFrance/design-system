import "@axa-fr/canopee-css/distributeur/Form/Experimental/Input.css";
import "@axa-fr/canopee-css/distributeur/Form/Experimental/Select.css";
import { type ComponentPropsWithRef } from "react";
import icon from "@material-symbols/svg-700/rounded/arrow_drop_down-fill.svg";
import { getClassName } from "../../utilities/helpers/getClassName";
import { Svg } from "../../Svg";

const Select = ({
  className,
  children,
  ...otherProps
}: ComponentPropsWithRef<"select">) => {
  const componentClassName = getClassName({
    baseClassName: "af-input__input",
    className,
  });

  return (
    <>
      <select className={componentClassName} {...otherProps}>
        {children}
      </select>
      <Svg className="af-input__select-icon" src={icon} />
    </>
  );
};

Select.displayName = "Select";

export { Select };
