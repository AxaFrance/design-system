import "@axa-fr/canopee-css/distributeur/Form/Select/Select.css";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  OptionHTMLAttributes,
} from "react";
import { getComponentClassName } from "../../utilities";

type Props = ComponentPropsWithoutRef<"select"> & {
  /**
   * @deprecated Use `children` instead
   * Instead of
   * ```jsx
   * <SelectBase options={[{ value: "1", label: "Option 1" }]} />
   * ```
   * you can now do something like :
   * ```jsx
   * <SelectBase>
   *   <option value="1">Option 1</option>
   * </SelectBase>
   * ```
   * It allows you to use the `optgroup` tag for example.
   */
  options?: OptionHTMLAttributes<HTMLOptionElement>[];
  classModifier?: string;
};

/**
 * @deprecated Use Select instead
 */
const SelectBase = forwardRef<HTMLSelectElement, Props>(
  (
    {
      options,
      id,
      className,
      classModifier,
      required,
      children,
      ...otherProps
    },
    inputRef,
  ) => {
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
          required={classModifier?.includes("required") || required}
        >
          {children ??
            options?.map(({ label, ...opt }) => (
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
