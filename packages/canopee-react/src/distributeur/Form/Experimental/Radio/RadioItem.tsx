import "@axa-fr/canopee-css/distributeur/Form/Experimental/Radio.css";
import { getClassName } from "../../../utilities/helpers/getClassName";

export type RadioItemProps = React.InputHTMLAttributes<HTMLInputElement>;

export const RadioItem = ({ className, ...props }: RadioItemProps) => {
  const finalClassName = getClassName({
    baseClassName: "af-radio__item",
    className,
  });
  return <input type="radio" className={finalClassName} {...props} />;
};
