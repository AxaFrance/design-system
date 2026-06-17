import "@axa-fr/canopee-css/distributeur/Form/Select/Select.css";
import { type ComponentPropsWithRef, type OptionHTMLAttributes } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = ComponentPropsWithRef<"select"> & {
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
  /** @deprecated Use `className` and the native `required` prop instead. */
  classModifier?: string;
};

/**
 * @deprecated Use Select instead
 */
const SelectBase = ({
  options,
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
};

SelectBase.displayName = "SelectBase";

export { SelectBase };
