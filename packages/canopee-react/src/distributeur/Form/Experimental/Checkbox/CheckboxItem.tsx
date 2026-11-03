import "@axa-fr/canopee-css/distributeur/Form/Experimental/Checkbox.css";
import type { ComponentPropsWithRef } from "react";
import { getClassName } from "../../../utilities/helpers/getClassName";

export type CheckboxItemProps = Omit<ComponentPropsWithRef<"input">, "type">;

export const CheckboxItem = ({ className, ...props }: CheckboxItemProps) => (
  <input
    {...props}
    type="checkbox"
    className={getClassName({
      baseClassName: "af-checkbox__item",
      className,
    })}
  />
);
