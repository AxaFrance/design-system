import "@axa-fr/design-system-css/dist/Form/Select/Select.agent.scss";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  OptionHTMLAttributes,
} from "react";
import { getComponentClassName } from "../core";

type Props = Omit<
  ComponentPropsWithoutRef<"select"> & {
    options: OptionHTMLAttributes<HTMLOptionElement>[];
    classModifier?: string;
  },
  "required"
>;

/**
 * @deprecated Use Select instead
 */
const SelectBase = forwardRef<HTMLSelectElement, Props>(
  ({ options, id, className, classModifier, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-select",
    );
    return (
      <div className="af-form__select-container">
        <select
          {...otherProps}
          id={id}
          className={componentClassName}
          ref={inputRef}
          required={classModifier?.includes("required")}
        >
          {options.map(({ label, ...opt }) => (
            <option key={opt.value?.toString()} {...opt}>
              {label}
            </option>
          ))}
        </select>
        <span aria-controls={id} className="glyphicon glyphicon-menu-down" />
      </div>
    );
  },
);

SelectBase.displayName = "SelectBase";

export { SelectBase };
